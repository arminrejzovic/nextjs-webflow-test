import { NextResponse } from "next/server";
import { getCredentials } from "@/lib/credentials";
import { LocationApiLocation } from "@/types/locations";
import {UserItem, UserLocationItem, UsersApiPayload} from "@/types/users";

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
    const { mockUsersPayload } = require("@/lib/mock-users");

    // Find the location that matches id
    const locationData: LocationApiLocation | undefined = mockLocationsPayload.locations.find(
      (location: LocationApiLocation) => location.slug === slug
    );

    // If the location is not found, return 404
    if (!locationData) {
      return NextResponse.json({ error: "Location not found" }, { status: 404 });
    }

    // Filter mock users to find those associated with the location
    const usersInLocation: UserItem[] = mockUsersPayload.users.filter((user: UserItem) =>
      user.locations.some((loc: UserLocationItem) => loc.slug === locationData.slug)
    );

    const finalLocationUsers: UsersApiPayload = {
      users: usersInLocation
    }

    // Return the array of users
    return NextResponse.json(finalLocationUsers);
    // --- END MOCK DATA ---
  } else {
    // --- API FETCH ---
    const CLOSETWORLD_API_URL = process.env.CLOSETWORLD_API_URL;

    try {
      const { apiKey, companyId } = await getCredentials();

      if (!apiKey || !companyId) {
        console.error("Credentials not found. Cannot fetch from external API.");
        return NextResponse.json({ error: "Authentication failed" }, { status: 401 });
      }

      // Step 1: Fetch the users from the external API using the slug
      const locationUsersRes = await fetch(`${CLOSETWORLD_API_URL}/external/locations/${slug}/users`, {
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "company-id": companyId,
        },
        next: { revalidate: REVALIDATE_TIME_IN_SECONDS },
      });

      if (!locationUsersRes.ok) {
        if (locationUsersRes.status === 404) {
          return NextResponse.json({ error: "Users not found for this location" }, { status: 404 });
        }
        const errorData = await locationUsersRes.json();
        console.error("API Error:", errorData);
        throw new Error(`Failed to fetch users: ${locationUsersRes.statusText}`);
      }

      const locationUsersData: UsersApiPayload = await locationUsersRes.json();
      return NextResponse.json(locationUsersData);
    } catch (error) {
      console.error("Error fetching from external API:", error);
      return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
    // --- END OF API FETCH ---
  }
}