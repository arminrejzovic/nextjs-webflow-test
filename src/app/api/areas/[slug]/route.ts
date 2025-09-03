import { NextResponse } from "next/server";
import { getCredentials } from "@/lib/credentials";
import { Area, AreaFull } from "@/types/areas";
import {UserAreaItem, UserItem, UserLocationItem} from "@/types/users";

const REVALIDATE_TIME_IN_SECONDS = 3600;

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const USE_MOCK_DATA = process.env.USE_MOCK_DATA === 'true';

  if (USE_MOCK_DATA) {
    // --- MOCK DATA ---
    const { mockAreas } = require("@/lib/mock-areas");
    const { mockUsersPayload } = require("@/lib/mock-users");
    let finalAreaData: AreaFull;

    const areaData = mockAreas.areas.find(
      (area: Area) => area.slug === slug
    );

    if (!areaData) {
      return NextResponse.json({ error: "Area not found" }, { status: 404 });
    }

    // Filter mock users to find those with the specific area slug
    const usersInArea: UserItem[] = mockUsersPayload.users.filter((user: UserItem) =>
      user.locations.some((loc: UserLocationItem) =>
        loc.areas.some((area: UserAreaItem) => area.slug === slug)
      )
    );

    // Combine the data into a single object
    finalAreaData = {
      ...areaData,
      users: usersInArea
    };

    return NextResponse.json(finalAreaData);
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
      const areaRes = await fetch(`${CLOSETWORLD_API_URL}/external/areas/${slug}`, {
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "company-id": companyId,
        },
      });

      if (areaRes.status === 401) {
        return NextResponse.json({ error: "Unauthorized access" }, { status: 401 });
      }
      if (!areaRes.ok) {
        const errorData = await areaRes.json();
        console.error("API Error:", errorData);
        throw new Error(`Failed to fetch area: ${areaRes.statusText}`);
      }

      const realAreaData: Area = await areaRes.json();

      // Step 3: Fetch the users data for the specific area
      const usersRes = await fetch(`${CLOSETWORLD_API_URL}/external/areas/${slug}/users`, {
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "company-id": companyId,
        },
        next: { revalidate: REVALIDATE_TIME_IN_SECONDS }
      });

      let usersData: UserItem[] = [];
      if (usersRes.ok) {
        usersData = await usersRes.json();
      } else {
        console.error("Failed to fetch users for area:", slug, "Status:", usersRes.status);
      }

      // Step 4: Combine the area and users data into a single object
      const finalAreaData: AreaFull = {
        ...realAreaData,
        users: usersData
      };

      return NextResponse.json(finalAreaData);
    } catch (error) {
      console.error("Error fetching from external API:", error);
      return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
    // --- END OF API FETCH ---
  }
}