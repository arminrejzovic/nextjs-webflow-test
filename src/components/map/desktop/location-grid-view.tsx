"use client";

import MapPinIcon from "@/components/icons/map-pin";
import LocationCard from "@/components/map/desktop/location-card";
import { AutocompleteCustom } from "@/components/map/elements/autocomplete-search";
import ViewToggle from "@/components/map/elements/view-toggle";
import { useLocationsWithinRadius } from "@/hooks/use-location-within-radius";
import { cn } from "@/lib/utils";
import useMapStore from "@/store/store";
import { Location } from "@/types/map";
import { useMap } from "@vis.gl/react-google-maps";

interface LocationGridViewProps {
  locations: Location[];
  className?: string;
}

export default function LocationGridView({
  locations,
  className = "",
}: LocationGridViewProps) {
  const {
    setSelectedLocation,
    setSelectedPlace,
    setCurrentView,
    setShowBottomDrawer,
    currentCenter,
  } = useMapStore();

  const map = useMap();

  // Filter locations within 50 miles of the current center
  const filteredLocations = useLocationsWithinRadius(
    currentCenter,
    locations,
    50
  );

  function handleLocationSelect(location: Location) {
    setSelectedLocation(location);
    setCurrentView("map");
    if (map) {
      map.panTo({
        lat: parseFloat(location.latitude),
        lng: parseFloat(location.longitude),
      });
      map.setZoom(15); // Adjust zoom as needed
    }
    setShowBottomDrawer(false);
  }

  function handlePlaceSelect(place: google.maps.places.Place | null) {
    if (!place) return;

    setSelectedPlace(place as unknown as google.maps.places.PlaceResult);

    setCurrentView("map");
  }

  return (
    <div
      className={cn(
        "flex flex-col items-center gap-8 md:relative md:min-h-[760px] min-h-screen",
        className
      )}
    >
      <div className="md:max-w-[400px] max-h-fit z-10 flex gap-1 items-start w-full">
        <div className="w-full">
          <AutocompleteCustom onPlaceSelect={handlePlaceSelect} />
        </div>
        {/* Desktop Search and Toggle */}
        <ViewToggle />
      </div>
      <div className="w-full md:absolute md:top-[86px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 justify-items-center">
          {filteredLocations.map((location) => (
            <LocationCard
              key={location.id}
              location={location}
              onLocationSelect={() => handleLocationSelect(location)}
            />
          ))}
        </div>

        {filteredLocations.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500">
              <MapPinIcon className="w-12 h-12 mx-auto mb-4 text-gray-300" />
              <p className="text-lg font-medium">No locations found</p>
              <p className="text-sm mt-2">
                No locations available in this area
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
