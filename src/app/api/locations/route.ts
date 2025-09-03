import { NextResponse } from "next/server";
import { getCredentials } from "@/lib/credentials";
import { LocationsApiPayload } from "@/types/locations";

const REVALIDATE_TIME_IN_SECONDS = 3600;

export async function GET(request: Request) {
  const USE_MOCK_DATA = process.env.USE_MOCK_DATA === "true";

  if (USE_MOCK_DATA) {
    // --- MOCK DATA ---
    const { mockLocationsPayload } = require("@/lib/mock-locations");
    return NextResponse.json(mockLocationsPayload as LocationsApiPayload);
    // --- END MOCK DATA ---
  } else {
    // --- API FETCH ---
    const CLOSETWORLD_API_URL = process.env.CLOSETWORLD_API_URL;

    try {
      // Step 1: Get the credentials
      const { apiKey, companyId } = await getCredentials();

      if (!apiKey || !companyId) {
        console.error("Credentials not found. Cannot fetch from external API.");
        return NextResponse.json({ error: "Authentication failed" }, { status: 401 });
      }

      // Step 2: Fetch all locations from the external API
      const allLocationsRes = await fetch(`${CLOSETWORLD_API_URL}/external/locations`, {
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "company-id": companyId,
        },
        next: { revalidate: REVALIDATE_TIME_IN_SECONDS }
      });

      if (!allLocationsRes.ok) {
        const errorData = await allLocationsRes.json();
        console.error("API Error:", errorData);
        throw new Error(`Failed to fetch locations: ${allLocationsRes.statusText}`);
      }

      const allLocationsData: LocationsApiPayload = await allLocationsRes.json();
      return NextResponse.json(allLocationsData);
    } catch (error) {
      console.error("Error fetching from external API:", error);
      return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
    // --- END OF API FETCH ---
  }
}