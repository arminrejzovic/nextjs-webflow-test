import { DownArrowIcon } from "@/components/icons/down-arrow";
import LocationCardList from "@/components/map/desktop/location-card-list";
import AutocompleteResults from "@/components/map/elements/autocomplete-results";
import { AutocompleteCustom } from "@/components/map/elements/autocomplete-search";
import ViewToggle from "@/components/map/elements/view-toggle";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import useMapStore from "@/store/store";
import { Location } from "@/types/map";
import { ChevronLeftIcon } from "lucide-react";

/**
 * Sidebar component for displaying search, toggle, and location list.
 */
export const MapSidebar = ({
  selectedPlace,
  setSelectedPlace,
  locationsWithinRadius,
  visibleCount,
  setVisibleCount,
  handleMarkerClick,
  onLocationSelect,
}: {
  selectedPlace: google.maps.places.PlaceResult | null;
  setSelectedPlace: (place: google.maps.places.PlaceResult) => void;
  locationsWithinRadius: Location[];
  visibleCount: number;
  setVisibleCount: (count: number) => void;
  handleMarkerClick: (markerId: string) => void;
  onLocationSelect: (location: Location) => void;
}) => {
  const { searchInputIsFocused, setShowMap } = useMapStore();
  const { isMobile } = useMediaQuery();

  return (
    <aside className="absolute top-1 left-1 md:top-4 md:left-4 max-w-[calc(100%-8px)] md:max-w-[320px] z-10 flex-col gap-4 items-start !flex w-full max-h-[calc(100%-48px)] min-h-full">
      <div className="flex flex-col gap-1 md:gap-2 items-start w-full flex-grow">
        <div className="flex justify-between w-full items-center">
          <button
            className="text-xs text-left flex items-center gap-1 cursor-pointer bg-background-primary px-4 py-1 rounded-full !text-white h-8  md:min-h-8"
            onClick={() => setShowMap(false)}
          >
            <ChevronLeftIcon
              className="min-w-1 min-h-2"
              width={12}
              height={12}
            />
            Leave map
          </button>
          <ViewToggle className={cn(!isMobile && "hidden")} />
        </div>
        <div className="flex gap-1 items-start w-full flex-grow">
          <div
            className={cn(
              "sidebar-search-animated w-full md:max-w-[320px]",
              searchInputIsFocused &&
                "expanded flex-grow transition-all duration-300 ease-in-out min-w-full"
            )}
          >
            <AutocompleteCustom
              onPlaceSelect={(place) =>
                setSelectedPlace(
                  place as unknown as google.maps.places.PlaceResult
                )
              }
              className={cn(
                "transition-all duration-300 ease-in-out",
                searchInputIsFocused
                  ? "min-w-full md:max-w-[480px]"
                  : "min-w-[200px] max-w-full"
              )}
            />
            <AutocompleteResults
              place={selectedPlace as unknown as google.maps.places.Place}
              handleClick={() => handleMarkerClick("search")}
            />
          </div>
          {/* Desktop Search and Toggle */}
          <ViewToggle
            className={cn((searchInputIsFocused || isMobile) && "hidden")}
          />
        </div>
      </div>
      {locationsWithinRadius.length > 0 && (
        <div
          className={cn(
            "flex-col mr-3 bg-white rounded-xl w-full items-center gap-4 overflow-hidden hidden md:!flex md:!absolute md:top-[122px] md:max-w-[320px] md:max-h-[80%]",
            visibleCount < locationsWithinRadius.length && "pb-3"
          )}
        >
          <ul
            className={cn(
              "flex flex-col !px-0 !py-0 !m-0 overflow-y-auto w-full"
            )}
          >
            {locationsWithinRadius.slice(0, visibleCount).map((location) => (
              <li
                className="border-b border-border-color w-full h-full"
                key={location.id.toString()}
              >
                <LocationCardList
                  location={location}
                  onLocationSelect={() => onLocationSelect(location)}
                />
              </li>
            ))}
          </ul>
          {visibleCount < locationsWithinRadius.length && (
            <button
              className="py-1 px-4 flex items-center gap-4 !text-xs text-[#35526A] !border-[0.5px] !border-[#35526A] rounded-full !leading-6 max-w-fit !font-medium cursor-pointer"
              onClick={() => setVisibleCount(visibleCount + 3)}
            >
              Load More
              <DownArrowIcon className="w-4 h-4" />
            </button>
          )}
        </div>
      )}
    </aside>
  );
};
