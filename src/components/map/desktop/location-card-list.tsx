"use client";

import CheckIcon from "@/components/icons/check";
import RedStarIcon from "@/components/icons/red-star";
import { cn, getLocationOpenState } from "@/lib/utils";
import { Location } from "@/types/map";
import { useEffect, useState } from "react";

interface LocationCardProps {
  location: Location;
  onLocationSelect?: (location: Location) => void;
}

export default function LocationCardList({
  location,
  onLocationSelect,
}: LocationCardProps) {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(false);
    const timeout = setTimeout(() => setFadeIn(true), 10);
    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <button
      className={cn(
        "p-4 w-full flex-col !text-sm !leading-8 !text-text-secondary hidden md:!flex transition-opacity duration-300 cursor-pointer text-left",
        fadeIn ? "opacity-100" : "opacity-0"
      )}
      onClick={() => onLocationSelect?.(location)}
    >
      <div className="flex gap-2 items-start justify-between flex-grow">
        {/* Title */}
        <h3 className="!text-xl !leading-10 !font-medium !text-text-primary break-words !m-0">
          {location.name}
        </h3>
      </div>

      {/* Rating */}
      {(location.id === 1 || location.id === 2 || location.id === 31) && (
        <div className="flex items-center gap-3 py-2 !text-sm !leading-6 !text-text-secondary">
          <span className="flex items-center gap-1">
            4.6+ <RedStarIcon className="!size-3 mb-[2px]" />{" "}
          </span>
          <div></div>
          <div className="flex items-center gap-2">
            {(() => {
              const { isOpen, nextChangeText } = getLocationOpenState(location);
              return (
                <>
                  <span
                    className={
                      isOpen
                        ? "!text-[#0B9F4E] font-medium"
                        : "!text-[#D92D20] font-medium"
                    }
                  >
                    {isOpen ? "Open" : "Closed"}
                  </span>
                  <span className="size-[2px] flex items-center justify-center bg-text-secondary"></span>
                  <span>{nextChangeText}</span>
                </>
              );
            })()}
          </div>
        </div>
      )}

      {/* Location Details */}
      <div className="flex flex-col gap-1">
        {/* Address and phone */}
        <div className="!text-text-secondary !text-sm !leading-8">
          <div>
            {location.address}
            {location.address1 && `, ${location.address1}`}
            {`, ${location.city}, ${location.state} ${location.zip}`}
          </div>
          <div>
            {location.phone_area_code && `(${location.phone_area_code}) `}
            {location.phone}
          </div>
        </div>
      </div>

      {/* Footer */}
      {(location.id === 1 || location.id === 2 || location.id === 31) && (
        <div className="flex items-center gap-2 py-2 !text-sm !leading-6 !text-text-secondary">
          <div className="px-4 bg-[#F3F3F4] rounded-full text-[#35526A] flex items-center gap-2">
            <CheckIcon />
            Showroom
          </div>
          <div>Walk-ins welcome</div>
        </div>
      )}
    </button>
  );
}
