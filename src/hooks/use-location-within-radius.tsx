import { Location } from "@/types/map";
import { useMemo } from "react";

/**
 * Custom hook to filter locations within a given radius (in miles) from a center point.
 * @param center - The center point { lat, lng }
 * @param locations - Array of LocationModel
 * @param radiusMiles - Radius in miles
 * @returns Filtered array of locations within the radius
 */
export function useLocationsWithinRadius(
  center: { lat: number; lng: number },
  locations: Location[],
  radiusMiles: number
): Location[] {
  return useMemo(() => {
    if (
      typeof window === "undefined" ||
      !window.google ||
      !window.google.maps ||
      !window.google.maps.geometry
    )
      return locations;

    const userLatLng = new window.google.maps.LatLng(center.lat, center.lng);
    return locations.filter((location) => {
      if (
        isNaN(parseFloat(location.latitude)) ||
        isNaN(parseFloat(location.longitude))
      )
        return false;
      const targetLatLng = new window.google.maps.LatLng(
        parseFloat(location.latitude),
        parseFloat(location.longitude)
      );
      const distanceInMeters =
        window.google.maps.geometry.spherical.computeDistanceBetween(
          userLatLng,
          targetLatLng
        );
      const distanceInMiles = distanceInMeters / 1609.34;
      return distanceInMiles <= radiusMiles;
    });
  }, [center, locations, radiusMiles]);
}
