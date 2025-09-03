"use client";

import CheckIcon from "@/components/icons/check";
import ChevronLeftIcon from "@/components/icons/chervon-left";
import DirectionIcon from "@/components/icons/direction";
import RedStarIcon from "@/components/icons/red-star";
import { getLocationOpenState } from "@/lib/utils";
import { Location } from "@/types/map";

interface LocationDetailCardProps {
  location: Location;
  onClose: () => void;
}

export default function LocationDetailCard({
  location,
  onClose,
}: LocationDetailCardProps) {
  const handleNavigate = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (location.latitude && location.longitude) {
      window.open(
        `https://www.google.com/maps?q=${location.latitude},${location.longitude}`,
        "_blank"
      );
    }
  };

  return (
    <div className="fixed bottom-1 left-1 right-1 md:absolute md:top-4 md:left-4 z-10 shadow-[0px_-6px_9.1px_0px_#35526A1A] md:shadow-none md:max-w-fit md:max-h-fit">
      <div className="bg-background-secondary rounded-2xl shadow-md p-4 w-full md:max-w-[320px] flex flex-col">
        {/* Back link */}
        <button
          onClick={onClose}
          className="!text-xs hover:underline text-left flex items-center gap-2 !leading-6 cursor-pointer"
        >
          <ChevronLeftIcon className="w-1 h-2" width={4} height={8} />
          Back to search
        </button>

        {/* Location title */}
        <div className="flex items-start gap-1 justify-between text-text-primary">
          <h2 className="!text-xl !font-medium !leading-10 !m-0">
            {location.name}
          </h2>
          {location.latitude && location.longitude && (
            <button onClick={handleNavigate} className="cursor-pointer">
              <DirectionIcon className="size-8" width={32} height={32} />
            </button>
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
              {(() => {
                const { isOpen, nextChangeText } =
                  getLocationOpenState(location);
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

        {/* Opening hours */}
        {(location.id === 1 || location.id === 2 || location.id === 31) && (
          <ul className="!text-xs !leading-6 !text-text-secondary !px-4 !py-2 !m-0 !list-none grid grid-cols-[max-content,1fr] gap-x-4">
            <li className="!grid !grid-cols-[1fr_1fr]">
              <span>Monday</span>
              <span>8:00 AM - 5:00 PM</span>
            </li>
            <li className="!grid !grid-cols-[1fr_1fr]">
              <span>Tuesday</span>
              <span>8:00 AM - 5:00 PM</span>
            </li>
            <li className="!grid !grid-cols-[1fr_1fr]">
              <span>Wednesday</span>
              <span>8:00 AM - 5:00 PM</span>
            </li>
            <li className="!grid !grid-cols-[1fr_1fr]">
              <span>Thursday</span>
              <span>8:00 AM - 5:00 PM</span>
            </li>
            <li className="!grid !grid-cols-[1fr_1fr]">
              <span>Friday</span>
              <span>8:00 AM - 5:00 PM</span>
            </li>
            <li className="!grid !grid-cols-[1fr_1fr]">
              <span>Saturday</span>
              <span>8:00 AM - 5:00 PM</span>
            </li>
            <li className="!grid !grid-cols-[1fr_1fr]">
              <span>Sunday</span>
              <span>8:00 AM - 5:00 PM</span>
            </li>
          </ul>
        )}

        {/* Address and phone */}
        <div className="!text-sm !leading-8 !text-text-secondary">
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
      </div>
    </div>
  );
}
