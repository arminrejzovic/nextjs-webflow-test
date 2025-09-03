"use client";

import MapIcon from "@/components/icons/map";
import ToggleIcon from "@/components/icons/toggle";
import { cn } from "@/lib/utils";
import useMapStore from "@/store/store";

interface ViewToggleProps {
  className?: string;
}

export default function ViewToggle({ className = "" }: ViewToggleProps) {
  const { currentView, setCurrentView } = useMapStore();
  return (
    <div
      className={cn(
        `bg-white rounded-full border border-[#C8C7C5] p-1 backdrop-blur-sm flex gap-1`,
        className
      )}
    >
      <button
        onClick={() => setCurrentView("map")}
        className={cn(
          "flex items-center rounded-full size-10 cursor-pointer",
          currentView === "map" ? "!text-[#FDFDFD]" : "!text-[#35526A]"
        )}
      >
        <MapIcon
          fill={currentView === "map" ? "#35526A" : "#F3F3F4"}
          width={40}
          height={40}
        />
      </button>
      <button
        onClick={() => setCurrentView("list")}
        className={cn(
          "flex items-center rounded-full size-10 cursor-pointer",
          currentView === "list" ? "!text-[#FDFDFD]" : "!text-[#35526A]"
        )}
      >
        <ToggleIcon
          fill={currentView === "list" ? "#35526A" : "#F3F3F4"}
          width={40}
          height={40}
        />
      </button>
    </div>
  );
}
