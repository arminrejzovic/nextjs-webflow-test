import {AreaFull, AreaPayloadFull} from "@/types/areas";
import { GET as singleAreaApiRoute } from "@/app/api/areas/[slug]/route";
import {GET as allAreasApiRoute} from "@/app/api/areas/route";

export async function getAreas(): Promise<AreaPayloadFull | null> {
  try {
    // dummy request that is required at built time
    const response = await allAreasApiRoute(
      new Request("http://api-internal-call")
    );

    if (!response.ok) {
      console.error("Internal API call failed in getAreas:", response.status);
      return null;
    }

    return await response.json() as AreaPayloadFull;
  } catch (error) {
    console.error("Error fetching areas:", error);
    return null;
  }
}

export async function getArea(slug: string): Promise<AreaFull | null> {
  try {
    // dummy request that is required at built time
    const request = new Request(`http://api-internal-call/areas/${slug}`);
    const paramsPromise = Promise.resolve({ slug });

    // This is the crucial part: call the API route handler directly.
    const response = await singleAreaApiRoute(request, { params: paramsPromise });

    if (!response.ok) {
      console.error("Internal API call failed in getArea:", response.status);
      return null;
    }

    return await response.json() as AreaFull;
  } catch (error) {
    console.error("Error fetching area data:", error);
    return null;
  }
}