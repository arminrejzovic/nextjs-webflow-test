"use client";

import CheckIcon from "@/components/icons/check";
import MapIcon from "@/components/icons/map";
import RedStarIcon from "@/components/icons/red-star";
import { getLocationOpenState } from "@/lib/utils";
import { Location } from "@/types/map";

interface LocationCardProps {
  location: Location;
  onLocationSelect?: () => void;
}

export default function LocationCard({
  location,
  onLocationSelect,
}: LocationCardProps) {
  const handleNavigate = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (location.latitude && location.longitude) {
      window.open(
        `https://www.google.com/maps?q=${location.latitude},${location.longitude}`,
        "_blank"
      );
    }
  };

  const { isOpen, nextChangeText } = getLocationOpenState(location);

  return (
    <button
      className="bg-white md:rounded-lg !border-b md:!border !border-border-color !p-4 w-full flex flex-col gap-1 !text-sm !leading-8 !text-text-primary cursor-pointer text-left"
      onClick={onLocationSelect}
      aria-label={`Select ${location.name} location in ${location.city}, ${location.state}`}
      role="button"
    >
      <div className="flex gap-2 items-start justify-between flex-grow min-h-10">
        {/* Title */}
        <h3 className="!text-xl !leading-10 !font-medium !text-text-primary break-words !m-0">
          {location.name}
        </h3>
        {location.latitude && location.longitude && (
          <div
            onClick={handleNavigate}
            className="cursor-pointer"
            aria-label="Open location in Google Maps"
          >
            <MapIcon className="min-w-8 min-h-8" />
          </div>
        )}
      </div>
      {/* Rating */}
      {(location.id === 1 || location.id === 2 || location.id === 31) && (
        <div className="flex items-center gap-3 py-2 !text-sm !leading-6 !text-text-secondary">
          <span className="flex items-center gap-1">
            4.6+ <RedStarIcon className="!size-3 mb-[2px]" />{" "}
          </span>
          <div></div>
          <div className="flex items-center gap-2">
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
          </div>
        </div>
      )}
      {/* Location Details */}
      <div className="flex flex-col gap-1 !text-text-secondary">
        {/* Address and phone */}
        <div>
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
