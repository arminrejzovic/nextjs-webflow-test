import { NextResponse } from "next/server";
import { getCredentials } from "@/lib/credentials";
import { LocationApiLocation } from "@/types/locations";

const REVALIDATE_TIME_IN_SECONDS = 3600;

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const USE_MOCK_DATA = process.env.USE_MOCK_DATA === "true";

  if (USE_MOCK_DATA) {
    // --- MOCK DATA ---
    const { mockLocationsPayload } = require("@/lib/mock-locations");
    const locationData = mockLocationsPayload.locations.find(
      (location: LocationApiLocation) => location.slug === slug
    );

    if (locationData) {
      return NextResponse.json(locationData);
    }

    return NextResponse.json({ error: "Location not found" }, { status: 404 });
    // --- END MOCK DATA ---
  }
  else {
    // --- API FETCH ---
    const CLOSETWORLD_API_URL = process.env.CLOSETWORLD_API_URL;

    try {
      // Step 1: Get the credentials (will use cache after the first call)
      const { apiKey, companyId } = await getCredentials();

      // Check for null credentials before proceeding
      if (!apiKey || !companyId) {
        console.error("Credentials not found. Cannot fetch from external API.");
        return NextResponse.json({ error: "Authentication failed" }, { status: 401 });
      }

      // Step 2: Use the fetched credentials for the main data fetch.
      const locationRes = await fetch(`${CLOSETWORLD_API_URL}/external/locations/${slug}`, {
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "company-id": companyId,
        },
        next: { revalidate: REVALIDATE_TIME_IN_SECONDS }
      });

      if (locationRes.status === 401) {
        return NextResponse.json({ error: "Unauthorized access" }, { status: 401 });
      }
      if (!locationRes.ok) {
        const errorData = await locationRes.json();
        console.error("API Error:", errorData);
        throw new Error(`Failed to fetch location: ${locationRes.statusText}`);
      }

      const realLocationData = await locationRes.json();
      return NextResponse.json(realLocationData);
    } catch (error) {
      console.error("Error fetching from external API:", error);
      return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
    // --- END OF API FETCH ---
  }
}