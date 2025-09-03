"use client";

import {
  generateStaticMapWithCircle,
  useZipCodeGeocodingDirect,
} from "@/hooks/use-static-map";
import { cn } from "@/lib/utils";
import React from "react";

interface StaticMapSectionProps {
  zipCodes: string[];
  apiKey: string;
  mapId: string;
  className?: string;
  alt?: string;
  zoom?: number;
}

const StaticMapSection = ({
  zipCodes,
  apiKey,
  mapId,
  className = "",
  alt = "Service area map",
  zoom = 10,
}: StaticMapSectionProps) => {
  const { locations, isLoading, error, center, radius } =
    useZipCodeGeocodingDirect(zipCodes);

  const [staticMapUrl, setStaticMapUrl] = React.useState<string>("");

  // Generate static map URL when geocoding completes
  React.useEffect(() => {
    if (center && radius) {
      const url = generateStaticMapWithCircle({
        centerLat: center.lat,
        centerLon: center.lng,
        radiusMeters: radius,
        mapId: mapId,
        apiKey: apiKey,
        zoom: zoom,
      });
      setStaticMapUrl(url);
    }
  }, [center, radius, mapId, apiKey, zoom]);

  if (isLoading) {
    return (
      <div
        className={cn(
          "flex items-center justify-center p-8 w-full w-layout-blockcontainer container-v2 w-container",
          className
        )}
      >
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
        <span className="ml-2 text-gray-600">Loading map...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className={cn(
          "flex items-center justify-center p-8 text-red-600 w-full w-layout-blockcontainer container-v2 w-container",
          className
        )}
      >
        <span>Error: {error}</span>
      </div>
    );
  }

  if (!staticMapUrl) {
    return null;
  }

  return (
    <div
      className={cn(
        "w-full w-layout-blockcontainer container-v2 w-container h-[620px] relative overflow-hidden",
        className
      )}
    >
      <div className="absolute inset-0 map-radiant-gradient gradient-radial"></div>
      <img
        src={staticMapUrl}
        alt={alt}
        className="w-full h-auto rounded-lg shadow-lg"
        loading="lazy"
      />
    </div>
  );
};

export default StaticMapSection;
