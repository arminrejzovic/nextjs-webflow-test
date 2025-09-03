import { useMap } from "@vis.gl/react-google-maps";
import { useEffect } from "react";

interface MapHandlerProps {
  place: google.maps.places.PlaceResult | null;
  onLocationSelect?: (location: {
    lat: number;
    lng: number;
    address: string;
  }) => void;
  onPositionUpdate?: (position: { lat: number; lng: number } | null) => void;
}

export const MapHandler = ({
  place,
  onLocationSelect,
  onPositionUpdate,
}: MapHandlerProps) => {
  const map = useMap();

  useEffect(() => {
    if (!map || !place) return;

    if (place.geometry?.viewport) {
      map.fitBounds(place.geometry?.viewport);
    }
    if (place.geometry?.location) {
      // Call the onLocationSelect callback if provided
      if (onLocationSelect) {
        onLocationSelect({
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
          address: place.formatted_address || place.name || "",
        });
      }

      // Update the search marker position
      if (onPositionUpdate) {
        onPositionUpdate({
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        });
      }
    }
  }, [map, place, onLocationSelect, onPositionUpdate]);

  return null;
};
