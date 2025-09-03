"use client";

import LocationMapWidget from "@/components/atoms/location-map-widget";
import DirectionIcon from "@/components/icons/direction";
import { CustomAdvancedMarker } from "@/components/map/elements/custom-marker";
import { APIProvider, Map } from "@vis.gl/react-google-maps";

const MobileMapButton = () => {
  return (
    <button className="md:!hidden absolute !top-2 !left-[calc(100% - 64px)] z-10 map-info__directions custom-map-button">
      <DirectionIcon className="size-10" />
    </button>
  );
};

const LocationMap = ({
  coordinates,
  day1Hours,
  day2Hours,
  day3Hours,
  day4Hours,
  day5Hours,
  day6Hours,
  day7Hours,
}: {
  day1Hours?: string;
  day2Hours?: string;
  day3Hours?: string;
  day4Hours?: string;
  day5Hours?: string;
  day6Hours?: string;
  day7Hours?: string;
  coordinates: { lat: number; lng: number };
}) => {
  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}>
      <div className="w-full w-layout-blockcontainer container-v2 w-container h-[434px] md:h-[620px] relative overflow-hidden">
        <LocationMapWidget
          className="absolute top-[85.5%] left-2 md:top-4 md:left-4 z-10"
          location={{
            lat: 43.65107,
            lng: -79.347015,
            name: "Your Location Name",
            address: "Your Location Address",
            day1Hours: day1Hours,
            day2Hours: day2Hours,
            day3Hours: day3Hours,
            day4Hours: day4Hours,
            day5Hours: day5Hours,
            day6Hours: day6Hours,
            day7Hours: day7Hours,
          }}
        />
        <MobileMapButton />
        <Map
          defaultCenter={coordinates}
          defaultZoom={10}
          gestureHandling={"none"}
          disableDefaultUI={true}
          mapId={process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID}
          mapTypeId={"roadmap"}
          isFractionalZoomEnabled={false}
          restriction={{
            latLngBounds: {
              north: 83.1621, // Northernmost point of Canada
              south: 7.0, // Southernmost point of North America
              west: -168.0, // Westernmost point of Alaska
              east: -52.0, // Easternmost point of Canada
            },
            strictBounds: true,
          }}
          zoomControl={false}
          mapTypeControl={false}
          streetViewControl={false}
          fullscreenControl={false}
          rotateControl={false}
          scaleControl={false}
          className="w-full h-full rounded-2xl overflow-hidden"
        >
          <CustomAdvancedMarker
            position={coordinates}
            active={true}
            label={1}
          />
        </Map>
      </div>
    </APIProvider>
  );
};

export default LocationMap;
