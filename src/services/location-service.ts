import {
  LocationsApiPayload,
  LocationApiLocation
} from '@/types/locations';
import { GET as singleLocationApiRoute } from "@/app/api/locations/[slug]/route";
import {GET as allLocationsApiRoute} from "@/app/api/locations/route";

export async function getLocations(): Promise<LocationsApiPayload | null> {
  try {
    // dummy request that is required at built time
    const response = await allLocationsApiRoute(
      new Request("http://api-internal-call")
    );

    if (!response.ok) {
      console.error("Internal API call failed in getLocations:", response.status);
      return null;
    }

    return await response.json() as LocationsApiPayload;
  } catch (error) {
    console.error("Error fetching locations:", error);
    return null;
  }
}

export async function getLocation(slug: string): Promise<LocationApiLocation | null> {
  try {
    // dummy request that is required at built time
    const request = new Request(`http://api-internal-call/locations/${slug}`);
    const paramsPromise = Promise.resolve({ slug });

    // This is the crucial part: call the API route handler directly.
    const response = await singleLocationApiRoute(request, { params: paramsPromise });

    if (!response.ok) {
      console.error("Internal API call failed in getLocation:", response.status);
      return null;
    }

    return await response.json() as LocationApiLocation;
  } catch (error) {
    console.error("Error fetching location data:", error);
    return null;
  }
}