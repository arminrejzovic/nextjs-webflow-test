import CloseIcon from "@/components/icons/close";
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useAutocompleteSuggestions } from "@/hooks/use-autocomplete-suggestions";
import { cn } from "@/lib/utils";
import useMapStore from "@/store/store";
import { useMap, useMapsLibrary } from "@vis.gl/react-google-maps";
import { useCallback, useEffect, useRef, useState } from "react";

interface Props {
  onPlaceSelect: (place: google.maps.places.Place | null) => void;
  className?: string;
}

export const AutocompleteCustom = ({ onPlaceSelect, className }: Props) => {
  const places = useMapsLibrary("places");
  const {
    setSearchInputIsFocused,
    searchQuery,
    setSearchQuery,
    searchInputIsFocused,
    setMapZoom,
    setShouldApplyZoomOnMobile,
  } = useMapStore();
  const map = useMap();
  const [inputValue, setInputValue] = useState<string>(searchQuery || "");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setInputValue(searchQuery);
  }, [searchQuery]);

  const { suggestions, resetSession } = useAutocompleteSuggestions(inputValue);

  const handleClearInput = useCallback(() => {
    setSearchInputIsFocused(false);
    // Only reset session if input is empty, otherwise keep suggestions for refocus
    if (!inputValue.trim()) {
      resetSession();
    }
  }, [resetSession, setSearchInputIsFocused, inputValue]);

  const handleFocus = useCallback(() => {
    setSearchInputIsFocused(true);
    // If there's a value but no suggestions, trigger a new search by briefly clearing and restoring the input
    if (inputValue.trim() && suggestions.length === 0) {
      const currentValue = inputValue;
      setInputValue("");
      // Use a small delay to ensure the hook processes the empty string first
      setTimeout(() => {
        setInputValue(currentValue);
      }, 10);
    }
  }, [setSearchInputIsFocused, inputValue, suggestions.length]);

  const handleClearButtonClick = useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setInputValue("");
      setSearchQuery("");
      // Don't set searchInputIsFocused to false since input remains focused
      resetSession();
    },
    [setSearchQuery, resetSession]
  );

  const handleSuggestionClick = useCallback(
    async (suggestion: google.maps.places.AutocompleteSuggestion) => {
      if (!places) return;
      if (!suggestion.placePrediction) return;

      const place = suggestion.placePrediction.toPlace();

      await place.fetchFields({
        fields: [
          "viewport",
          "location",
          "svgIconMaskURI",
          "iconBackgroundColor",
        ],
      });

      if (place.location && map) {
        // Use consistent zoom level for all places (same as areas)
        map.panTo({
          lat: place.location.lat(),
          lng: place.location.lng(),
        });
        map.setZoom(10);
        setMapZoom(10);
        // Set flag to apply zoom on mobile temporarily
        setShouldApplyZoomOnMobile(true);
        // Reset the flag after a short delay to allow normal scrolling again
        setTimeout(() => {
          setShouldApplyZoomOnMobile(false);
        }, 1000);
      }

      const selectedText = suggestion.placePrediction?.text.text || "";
      setInputValue(selectedText);
      setSearchQuery(selectedText);
      setSearchInputIsFocused(false);

      // Blur the input to dismiss mobile keyboard
      if (inputRef.current) {
        inputRef.current.blur();
      }

      resetSession();
      onPlaceSelect(place);
    },
    [
      places,
      onPlaceSelect,
      setSearchInputIsFocused,
      resetSession,
      setSearchQuery,
      map,
      setMapZoom,
      setShouldApplyZoomOnMobile,
    ]
  );

  return (
    <Command
      className={cn(
        "relative min-h-[50px] h-full max-w-[calc(100%-0px)] md:max-w-[320px] w-full overflow-visible z-50",
        className
      )}
    >
      <div
        className={cn(
          "relative flex items-center gap-2 py-2 px-6 bg-white rounded-full border border-[#C8C7C5] h-full min-h-[50px]",
          suggestions.length > 0 &&
            searchInputIsFocused &&
            "rounded-b-none border-b-0 rounded-t-2xl"
        )}
      >
        <CommandInput
          ref={inputRef}
          value={inputValue}
          onValueChange={(value) => {
            setInputValue(value);
            setSearchQuery(value);
            // If user starts typing after clearing, ensure focus state is active
            if (value.length > 0 && !searchInputIsFocused) {
              setSearchInputIsFocused(true);
            }
          }}
          onFocus={handleFocus}
          onBlur={handleClearInput}
          placeholder="Search locations"
          name="search"
          className="placeholder:text-[#787979] text-base md:text-base md:leading-8 font-medium w-full focus:outline-none bg-transparent border-none shadow-none px-0 truncate"
        />
        {inputValue && (
          <button
            onMouseDown={handleClearButtonClick}
            onTouchStart={handleClearButtonClick}
            className="cursor-pointer hover:opacity-70 z-50"
            type="button"
          >
            <CloseIcon className="size-3" />
          </button>
        )}
      </div>
      {suggestions.length > 0 && searchInputIsFocused && (
        <CommandList
          className={cn(
            "py-1 !px-2 bg-white rounded-b-lg border border-[#D4D4D4] max-h-[200px] overflow-y-auto z-50 absolute top-full left-0 right-0 w-full list-shadow max-w-full md:max-w-[320px] shadow truncate"
          )}
        >
          {suggestions.map((suggestion, index) => (
            <CommandItem
              key={index}
              onSelect={() => handleSuggestionClick(suggestion)}
              onMouseDown={() => handleSuggestionClick(suggestion)}
              onTouchStart={() => handleSuggestionClick(suggestion)}
              className="cursor-pointer py-[10px] px-4 text-base font-medium leading-8 text-[#111111] hover:bg-[#F3F3F4] transition-colors duration-300 rounded-3xl w-full data-[selected=true]:bg-[#F3F3F4] data-[selected=true]:text-[#111111]"
            >
              {suggestion.placePrediction?.text.text}
            </CommandItem>
          ))}
        </CommandList>
      )}
      {suggestions.length === 0 &&
        searchInputIsFocused &&
        inputValue.length > 0 && (
          <CommandList
            className={cn(
              "py-1 !px-2 bg-white rounded-b-lg border border-[#D4D4D4] max-h-[200px] overflow-y-auto z-50 absolute top-full left-0 right-0 w-full list-shadow shadow"
            )}
          >
            <CommandEmpty>No results found.</CommandEmpty>
          </CommandList>
        )}
    </Command>
  );
};
