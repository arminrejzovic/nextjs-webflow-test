import "server-only";
import { Companies, Company, Credentials } from "@/types/company";

// This acts as a server-side cache. It's a singleton.
let cachedCredentials: Credentials = {
  apiKey: null,
  companyId: null,
};

// Organization-level API key
const CLOSETWORLD_API_KEY = process.env.CLOSETWORLD_API_KEY;
const CLOSETWORLD_API_URL = process.env.CLOSETWORLD_API_URL;

export async function getCredentials() {
  // 1. Check if credentials are already cached.
  if (cachedCredentials.apiKey && cachedCredentials.companyId) {
    return cachedCredentials;
  }

  try {
    // 2. Perform the initial external fetch to get the company ID
    const authRes = await fetch(`${CLOSETWORLD_API_URL}/api-keys`, {
      headers: {
        Authorization: `Bearer ${CLOSETWORLD_API_KEY}`,
      },
    });

    if (!authRes.ok) {
      const errorData = await authRes.json();
      console.error("API Authentication Error:", errorData);
      throw new Error("Failed to retrieve company ID from external API.");
    }

    const authData: Companies = await authRes.json();

    // CHECK THE RIGHT COMPANY NAME HERE!!
    const company: Company | undefined = authData.companies.find(
      (company) => company.name === process.env.CLOSET_WORLD_COMPANY_NAME
    );

    // 3. Store the credentials in the cache for future requests
    cachedCredentials = {
      apiKey: CLOSETWORLD_API_KEY || null,
      companyId: company ? company.id : null,
    };
    return cachedCredentials;
  } catch (error) {
    console.error("Credential fetch failed:", error);
    throw new Error("Unable to obtain API credentials.");
  }
}
