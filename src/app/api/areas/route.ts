import { NextResponse } from "next/server";
import { getCredentials } from "@/lib/credentials";
import { AreaPayload } from "@/types/areas";

const REVALIDATE_TIME_IN_SECONDS = 3600;

export async function GET(request: Request) {
  const USE_MOCK_DATA = process.env.USE_MOCK_DATA === "true";

  if (USE_MOCK_DATA) {
    // --- MOCK DATA ---
    const { mockAreas } = require("@/lib/mock-areas");
    return NextResponse.json(mockAreas as AreaPayload);
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

      // Step 2: Fetch all areas from the external API
      const allAreasRes = await fetch(`${CLOSETWORLD_API_URL}/external/areas`, {
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "company-id": companyId,
        },
        next: { revalidate: REVALIDATE_TIME_IN_SECONDS }
      });

      if (!allAreasRes.ok) {
        const errorData = await allAreasRes.json();
        console.error("API Error:", errorData);
        throw new Error(`Failed to fetch areas: ${allAreasRes.statusText}`);
      }

      const allAreasData: AreaPayload = await allAreasRes.json();
      return NextResponse.json(allAreasData);
    } catch (error) {
      console.error("Error fetching from external API:", error);
      return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
    // --- END OF API FETCH ---
  }
}