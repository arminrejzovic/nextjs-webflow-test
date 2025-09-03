"use client";

import LocationDetailCard from "@/components/map/desktop/location-detail-card";
import { CustomAdvancedMarker } from "@/components/map/elements/custom-marker";
import { MapHandler } from "@/components/map/elements/map-handler";
import { MapSidebar } from "@/components/map/elements/map-sidebar";
import { useLocationsWithinRadius } from "@/hooks/use-location-within-radius";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import useMapStore from "@/store/store";
import type { Location as LocationModel } from "@/types/map";
import { Map, useMap } from "@vis.gl/react-google-maps";
import { useEffect, useState } from "react";

interface GoogleMapProps {
  center: { lat: number; lng: number };
  className?: string;
  locations?: LocationModel[];
  onCenterChange?: (center: { lat: number; lng: number }) => void;
}

/**
 * Renders map markers for all valid locations.
 */
function MapMarkers({
  locations,
  handleMarkerClick,
  selectedLocation,
}: {
  locations: LocationModel[];
  handleMarkerClick: (location: LocationModel) => void;
  selectedLocation: LocationModel | null;
}) {
  return (
    <>
      {locations
        .filter(
          (location) =>
            !isNaN(parseFloat(location.latitude)) &&
            !isNaN(parseFloat(location.longitude))
        )
        .map((location, idx) => (
          <CustomAdvancedMarker
            key={location.id}
            position={{
              lat: parseFloat(location.latitude),
              lng: parseFloat(location.longitude),
            }}
            handleClick={() => handleMarkerClick(location)}
            active={selectedLocation?.id === location.id}
            hasAnySelection={selectedLocation !== null}
            label={idx + 1}
          />
        ))}
    </>
  );
}

/**
 * GoogleMap component displays a Google Map with location markers and a sidebar.
 * @param GoogleMapProps
 */
function GoogleMap({
  center,
  className = "w-full h-[500px] rounded-lg overflow-hidden shadow-md mt-8",
  locations = [],
  onCenterChange,
}: GoogleMapProps) {
  const {
    selectedLocation,
    setSelectedLocation,
    selectedPlace,
    setSelectedPlace,
    setShowBottomDrawer,
    currentCenter,
    setCurrentCenter,
    zoom,
    setMapZoom,
    shouldApplyZoomOnMobile,
  } = useMapStore();
  const [visibleCount, setVisibleCount] = useState(3);
  const map = useMap();
  const { isMobile } = useMediaQuery();
  const [showSidebar, setShowSidebar] = useState(false);

  // Update currentCenter when the map is moved
  function handleCenterChanged() {
    if (map) {
      const newCenter = map.getCenter();
      if (newCenter) {
        const centerObj = { lat: newCenter.lat(), lng: newCenter.lng() };
        setCurrentCenter(centerObj);
        if (onCenterChange) onCenterChange(centerObj);
      }
    }
  }

  // Update zoom in store when the map is zoomed
  function handleZoomChanged() {
    if (map) {
      const newCenter = map.getCenter();
      if (newCenter) {
        const centerObj = { lat: newCenter.lat(), lng: newCenter.lng() };
        setCurrentCenter(centerObj);
        if (onCenterChange) onCenterChange(centerObj);
      }
      const newZoom = map.getZoom();
      if (typeof newZoom === "number") setMapZoom(newZoom);
    }
  }

  // Filter locations within 50 miles of the current center for the list
  const locationsWithinRadius = useLocationsWithinRadius(
    currentCenter,
    locations,
    50
  );

  // Reset visibleCount if locations change
  useEffect(() => {
    setVisibleCount(3);
  }, [locationsWithinRadius]);

  function handleMarkerClick(location: LocationModel) {
    setShowBottomDrawer(false);
    setSelectedPlace(null);
    handleLocationSelect(location);
    setMapZoom(15);
  }

  function handleCloseCard() {
    setSelectedLocation(null);
    setShowBottomDrawer(true);
    setMapZoom(10);
    setSelectedPlace(null);

    // For mobile devices, we need to programmatically set zoom since zoom prop is undefined
    if (isMobile && map) {
      map.setZoom(10);
      setMapZoom(10);
    }
  }

  function handleLocationSelect(location: LocationModel) {
    setSelectedLocation(location);
    setSelectedPlace(null);
    if (map) {
      map.panTo({
        lat: parseFloat(location.latitude),
        lng: parseFloat(location.longitude),
      });
      map.setZoom(15); // Use consistent zoom level as areas
    }
  }

  return (
    <div className={cn("relative min-h-[480px] md:min-h-full", className)}>
      {selectedLocation && (
        <LocationDetailCard
          location={selectedLocation}
          onClose={handleCloseCard}
        />
      )}
      <Map
        style={{ width: "100%", height: "100%", minHeight: "480px" }}
        defaultCenter={currentCenter ?? center}
        defaultZoom={10}
        zoom={isMobile ? (shouldApplyZoomOnMobile ? zoom : undefined) : zoom}
        gestureHandling={"cooperates"}
        disableDefaultUI={true}
        mapId={process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID}
        mapTypeId={"roadmap"}
        onDragend={handleCenterChanged}
        onZoomChanged={handleZoomChanged}
        onTilesLoaded={() => {
          handleCenterChanged();
          setShowSidebar(true);
        }}
        isFractionalZoomEnabled={false}
        minZoom={isMobile ? undefined : 3}
        restriction={{
          latLngBounds: {
            north: 83.1621, // Northernmost point of Canada
            south: 7.0, // Southernmost point of North America
            west: -168.0, // Westernmost point of Alaska
            east: -52.0, // Easternmost point of Canada
          },
          strictBounds: true,
        }}
        zoomControl={true}
        mapTypeControl={true}
        streetViewControl={false}
        fullscreenControl={false}
        rotateControl={false}
        scaleControl={false}
      >
        {!selectedLocation && showSidebar && (
          <MapSidebar
            selectedPlace={selectedPlace}
            setSelectedPlace={setSelectedPlace}
            locationsWithinRadius={locationsWithinRadius}
            visibleCount={visibleCount}
            setVisibleCount={setVisibleCount}
            handleMarkerClick={(markerId) => {
              const location = locations.find(
                (l) => l.id.toString() === markerId
              );
              if (location) handleMarkerClick(location);
            }}
            onLocationSelect={handleLocationSelect}
          />
        )}
        <MapMarkers
          locations={locations}
          handleMarkerClick={handleMarkerClick}
          selectedLocation={selectedLocation}
        />
      </Map>
      <MapHandler place={selectedPlace} onLocationSelect={setCurrentCenter} />
    </div>
  );
}

export default GoogleMap;
