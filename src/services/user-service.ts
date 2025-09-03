import {UserItem, UsersApiPayload} from "@/types/users";
import { EmployeeApi, LocationsApiPayload } from "@/types/locations";
import { GET as allLocationsApiRoute } from "@/app/api/locations/route";
import { GET as singleUserApiRoute } from '@/app/api/users/[slug]/route';
import { GET as singleLocationUsersApiRoute } from "@/app/api/locations/[slug]/users/route";

// Only to generate static params
export async function getUsers(): Promise<EmployeeApi | null> {
  try {
    const locationsResponse = await allLocationsApiRoute(new Request(
      "http://api-internal-call/locations"));
    if (!locationsResponse.ok) {
      return null;
    }
    const locationsPayload: LocationsApiPayload = await locationsResponse.json();
    if (!locationsPayload.locations) {
      return null;
    }

    const allUsers: any[] = [];

    for (const location of locationsPayload.locations) {
      const usersResponse = await singleLocationUsersApiRoute(
        new Request(`http://api-internal-call/locations/${location.slug}/users`),
        { params: Promise.resolve({ slug: location.slug}) }
      );

      if (usersResponse.ok) {
        const usersData: UsersApiPayload = await usersResponse.json();
        usersData.users.forEach(user => {
          allUsers.push({
            ...user,
            locationSlug: location.slug
          });
        });
      }
    }

    // Return the combined payload
    return { users: allUsers };
  } catch (error) {
    console.error("Error fetching users:", error);
    return null;
  }
}

export async function getUser(slug: string): Promise<UserItem | null> {
  try {
    // dummy request that is required at built time
    const request = new Request(`http://api-internal-call/users/${slug}`);
    const paramsPromise = Promise.resolve({ slug });

    // Call the API route handler directly.
    const response = await singleUserApiRoute(request, { params: paramsPromise });

    if (!response.ok) {
      console.error("Internal API call failed in getUsers:", response.status);
      return null;
    }

    return await response.json() as UserItem;
  } catch (error) {
    console.error("Error fetching location data:", error);
    return null;
  }
}