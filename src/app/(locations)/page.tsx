"use client";

import LocationGridView from "@/components/map/desktop/location-grid-view";
import Drawer from "@/components/map/drawer";
import { AutocompleteCustom } from "@/components/map/elements/autocomplete-search";
import GoogleMap from "@/components/map/google-map";
import SectionHeader from "@/components/molecules/section-header";
import { FaqSection } from "@/components/organisms/faq-section";
import { SectionSpacing } from "@/devlink";
import { LocationsCta } from "@/devlink/LocationsCta";
import { cn } from "@/lib/utils";
import useMapStore from "@/store/store";
import type { Location } from "@/types/map";
import { APIProvider } from "@vis.gl/react-google-maps";
import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  useTransition,
} from "react";

export default function Home() {
  const {
    currentView,
    setCurrentView,
    showBottomDrawer,
    currentCenter,
    setCurrentCenter,
    setMapZoom,
    showMap,
    setShowMap,
  } = useMapStore();
  const [searchResults, setSearchResults] = useState<Location[]>([]);
  const [locations, setLocations] = useState<Location[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  // Lock scroll and set full screen for map view
  useEffect(() => {
    if (showMap && currentView === "map") {
      // Add scroll lock class to body
      document.body.classList.add("scroll-locked");
    } else {
      // Remove scroll lock class from body
      document.body.classList.remove("scroll-locked");
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove("scroll-locked");
    };
  }, [showMap, currentView]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentCenter({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.warn("Geolocation error:", error);
        }
      );
    }
  }, []);

  useEffect(() => {
    startTransition(() => {
      {
        fetch(process.env.NEXT_PUBLIC_BASE_PATH + "/api/get-all-locations")
          .then((res) => res.json())
          .then((data: any) => {
            setLocations(data.locations || data.data || []); // adjust based on API response
          })
          .catch((e) => {
            console.error(e);
            setError("Failed to load locations");
          });
      }
      // setLocations(mockLocations.data);
    });
  }, []);

  // Memoize filteredLocations to avoid recalculating on every render
  const filteredLocations = useMemo(
    () => (searchResults.length > 0 ? searchResults : locations),
    [searchResults, locations]
  );

  // Memoize handleLocationFromList to avoid unnecessary re-renders
  const handleLocationFromList = useCallback(
    (location: Location) => {
      setCurrentCenter({
        lat: Number(location.latitude),
        lng: Number(location.longitude),
      });
      setMapZoom(15);
      setCurrentView("map");
    },
    [setCurrentCenter, setMapZoom, setCurrentView]
  );

  // Memoize onLocationSelect for SimpleBottomDrawer
  const handleDrawerLocationSelect = useCallback(
    (location: Location) => {
      const found = filteredLocations.find(
        (l) => l.id.toString() === location.id.toString()
      );
      if (found) handleLocationFromList(found);
    },
    [filteredLocations, handleLocationFromList]
  );

  if (isPending)
    return (
      <div className="flex items-center justify-center h-screen w-screen">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="flex items-center justify-center h-screen w-screen text-red-500">
        {error}
      </div>
    );

  // No longer open map on input focus; we open after a selection/search

  // Determine if we should show full screen map
  const isMapFullscreen = showMap && currentView === "map";

  return (
    <APIProvider
      apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}
      libraries={["places", "geometry"]}
    >
      <main
        className={cn(
          "bg-white w-screen overflow-hidden map-page",
          isMapFullscreen ? "map-fullscreen" : "h-auto"
        )}
      >
        {/* Show header only when not in fullscreen map view */}
        {!isMapFullscreen && (
          <>
            {!showMap && (
              <SectionHeader
                title="Find a Closet World Location Near You"
                text="Enter your address to find your nearest showroom or service location."
                variant="py-64"
                titleTag="h1"
              />
            )}
          </>
        )}

        <section
          className={cn(
            "w-full flex flex-col w-layout-blockcontainer container-v2 w-container md:mb-16",
            isMapFullscreen ? "mobile-map-container" : "h-fit max-h-[760px]"
          )}
        >
          {!showMap && (
            <div className="flex items-center justify-center w-full h-full max-h-fit">
              <div className="relative w-full max-w-md mx-auto px-4">
                <AutocompleteCustom
                  className="w-full"
                  onPlaceSelect={(place) => {
                    if (!place) return;
                    // Use new Places API location field
                    const lat = place.location
                      ? place.location.lat()
                      : undefined;
                    const lng = place.location
                      ? place.location.lng()
                      : undefined;
                    if (typeof lat === "number" && typeof lng === "number") {
                      setCurrentCenter({ lat, lng });
                      setMapZoom(10);
                    }
                    setCurrentView("map");
                    setShowMap(true);
                  }}
                />
              </div>
            </div>
          )}

          {showMap && (
            <>
              {/* Map and List View */}
              <GoogleMap
                center={currentCenter}
                locations={filteredLocations}
                className={cn(
                  "w-full h-full",
                  isMapFullscreen && "mobile-map-view",
                  currentView === "map" ? "flex flex-1" : "hidden"
                )}
              />
              <LocationGridView
                locations={filteredLocations}
                className={cn(
                  "w-full h-full overflow-y-auto pt-1",
                  currentView === "list" ? "flex flex-1" : "hidden"
                )}
              />
              {/* Bottom drawer - normal behavior */}
              {filteredLocations.length > 0 && currentView === "map" && (
                <Drawer
                  locations={filteredLocations}
                  onLocationSelect={handleDrawerLocationSelect}
                  className={cn(
                    "transition-all duration-300 ease-in-out",
                    showBottomDrawer
                      ? "bottom-0 block"
                      : "bottom-[-100%] hidden",
                    currentView === "map" ? "bottom-0" : "bottom-[-100%]"
                  )}
                />
              )}
            </>
          )}
        </section>

        {/* Show other sections only when not in fullscreen map view */}
        {!isMapFullscreen && (
          <>
            <SectionSpacing variant="py-32" />
            <FaqSection />
            <LocationsCta />
          </>
        )}
      </main>
    </APIProvider>
  );
}
