import { NextResponse } from "next/server";
import { getCredentials } from "@/lib/credentials";
import {UserItem} from "@/types/users";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const USE_MOCK_DATA = process.env.USE_MOCK_DATA === "true";

  if (USE_MOCK_DATA) {
    // --- MOCK DATA ---
    const { mockUsersPayload } = require("@/lib/mock-users");
    const userData = mockUsersPayload.users.find(
      (user: UserItem) => user.slug === slug
    );

    if (userData) {
      return NextResponse.json(userData);
    }

    return NextResponse.json({ error: "User not found" }, { status: 404 });
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
      // * this endpoint is not ready yet, before using API check if it exists
      const userRes = await fetch(`${CLOSETWORLD_API_URL}/external/users/${slug}`, {
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "company-id": companyId,
        },
      });

      if (userRes.status === 401) {
        return NextResponse.json({ error: "Unauthorized access" }, { status: 401 });
      }
      if (!userRes.ok) {
        const errorData = await userRes.json();
        console.error("API Error:", errorData);
        throw new Error(`Failed to fetch user: ${userRes.statusText}`);
      }

      const realUserData = await userRes.json();
      return NextResponse.json(realUserData);
    } catch (error) {
      console.error("Error fetching from external API:", error);
      return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
    // --- END OF API FETCH ---
  }
}