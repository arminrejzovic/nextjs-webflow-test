"use client";

import { LocationMap } from "@/devlink/LocationMap";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { useState } from "react";

function slideUp(element: HTMLElement, duration = 300) {
  element.style.transition = `height ${duration}ms ease`;
  element.style.height = element.offsetHeight + "px";
  element.offsetHeight; // Force reflow
  element.style.height = "0px";
  element.style.paddingTop = "0px";
  element.style.paddingBottom = "0px";
  element.style.marginTop = "0px";
  element.style.marginBottom = "0px";

  setTimeout(() => {
    element.style.display = "none";
    element.style.removeProperty("height");
    element.style.removeProperty("padding-top");
    element.style.removeProperty("padding-bottom");
    element.style.removeProperty("margin-top");
    element.style.removeProperty("margin-bottom");
    element.style.removeProperty("transition");
  }, duration);
}

// Helper function to slide down (show with animation)
function slideDown(element: HTMLElement, duration = 300) {
  element.style.removeProperty("display");
  let display = getComputedStyle(element).display;
  if (display === "none") display = "block";
  element.style.display = display;

  const height = element.offsetHeight;
  element.style.height = "0px";
  element.style.paddingTop = "0px";
  element.style.paddingBottom = "0px";
  element.style.marginTop = "0px";
  element.style.marginBottom = "0px";
  element.offsetHeight; // Force reflow

  element.style.transition = `height ${duration}ms ease, padding ${duration}ms ease, margin ${duration}ms ease`;
  element.style.height = height + "px";
  element.style.removeProperty("padding-top");
  element.style.removeProperty("padding-bottom");
  element.style.removeProperty("margin-top");
  element.style.removeProperty("margin-bottom");

  setTimeout(() => {
    element.style.removeProperty("height");
    element.style.removeProperty("transition");
  }, duration);
}

// Update the component props interface
interface LocationMapWidgetProps {
  className?: string;
  location?: {
    lat: number;
    lng: number;
    name?: string;
    address?: string;
    day1Hours?: string;
    day2Hours?: string;
    day3Hours?: string;
    day4Hours?: string;
    day5Hours?: string;
    day6Hours?: string;
    day7Hours?: string;
  };
}

const LocationMapWidget = ({ className, location }: LocationMapWidgetProps) => {
  const { isMobile } = useMediaQuery();
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleClick = () => {
    // Toggle button click state for mobile styling
    if (isMobile) {
      setIsButtonClicked(!isButtonClicked);
    }

    // Use more specific selectors and add proper null checks
    const button = document.querySelector("[data-close-box]") as HTMLElement;
    if (!button) {
      console.warn("Button with data-close-box not found");
      return;
    }

    const mapInfo = button.closest(".map-info") as HTMLElement;
    if (!mapInfo) {
      console.warn("Map info container not found");
      return;
    }

    const contentBox = mapInfo.querySelector(
      ".map-info__content__wrapper"
    ) as HTMLElement;
    if (!contentBox) {
      console.warn("Content box not found");
      return;
    }

    const isVisible = getComputedStyle(contentBox).display !== "none";

    if (isVisible) {
      // Element is visible - slide up
      slideUp(contentBox);
      mapInfo.classList.remove("is--open");
    } else {
      // Element is hidden - slide down
      slideDown(contentBox);
      mapInfo.classList.add("is--open");
    }
  };

  const handleDirectionsClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!location?.lat || !location?.lng) {
      console.warn("Location coordinates not available for directions");
      return;
    }

    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}`;
    window.open(googleMapsUrl, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      type="button"
      className={cn(
        "w-full",
        className,
        isMobile && isButtonClicked && "translate-y-[-240px]"
      )}
    >
      <LocationMap
        directionButtonProps={{
          onClick: handleDirectionsClick,
        }}
        day1Hours={location?.day1Hours}
        day2Hours={location?.day2Hours}
        day3Hours={location?.day3Hours}
        day4Hours={location?.day4Hours}
        day5Hours={location?.day5Hours}
        day6Hours={location?.day6Hours}
        day7Hours={location?.day7Hours}
      />
    </button>
  );
};

export default LocationMapWidget;
