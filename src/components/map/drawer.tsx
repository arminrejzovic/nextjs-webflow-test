"use client";

import LineIcon from "@/components/icons/line";
import { useLocationsWithinRadius } from "@/hooks/use-location-within-radius";
import { cn } from "@/lib/utils";
import useMapStore from "@/store/store";
import { Location } from "@/types/map";
import { useMap } from "@vis.gl/react-google-maps";
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";

interface DrawerProps {
  locations: Location[];
  forceExpanded?: boolean;
  onLocationSelect?: (location: Location) => void;
  className?: string;
}

export default React.memo(function Drawer({
  locations,
  forceExpanded = false,
  onLocationSelect,
  className,
}: DrawerProps) {
  const { currentCenter, setSelectedLocation, setShowBottomDrawer } =
    useMapStore();
  const [isExpanded, setIsExpanded] = useState(forceExpanded);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartY, setDragStartY] = useState(0);
  const [currentY, setCurrentY] = useState(0);
  const drawerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);
  const map = useMap();

  // Call custom hook at the top level (not inside useMemo)
  const locationsWithinRadius = useLocationsWithinRadius(
    currentCenter,
    locations,
    50
  );

  // Update expanded state when forceExpanded changes
  useEffect(() => {
    setIsExpanded(forceExpanded);
  }, [forceExpanded]);

  // Touch/mouse drag handlers for header (not the whole drawer)
  const handleHeaderTouchStart = useCallback(
    (e: React.TouchEvent) => {
      if (forceExpanded) return;
      setIsDragging(true);
      setDragStartY(e.touches[0].clientY);
      setCurrentY(e.touches[0].clientY);
    },
    [forceExpanded]
  );

  const handleHeaderMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (forceExpanded) return;
      setIsDragging(true);
      setDragStartY(e.clientY);
      setCurrentY(e.clientY);
    },
    [forceExpanded]
  );

  // Move/end handlers for window while dragging
  useEffect(() => {
    if (!isDragging) return;
    function onTouchMove(e: TouchEvent) {
      if (!isDragging || forceExpanded) return;
      setCurrentY(e.touches[0].clientY);
      e.preventDefault();
    }
    function onTouchEnd() {
      if (!isDragging || forceExpanded) return;
      const dragDistance = dragStartY - currentY;
      const threshold = 50;
      if (dragDistance > threshold) {
        setIsExpanded(true);
      } else if (dragDistance < -threshold) {
        setIsExpanded(false);
      }
      setIsDragging(false);
      setDragStartY(0);
      setCurrentY(0);
    }
    function onMouseMove(e: MouseEvent) {
      if (!isDragging || forceExpanded) return;
      setCurrentY(e.clientY);
    }
    function onMouseUp() {
      if (!isDragging || forceExpanded) return;
      const dragDistance = dragStartY - currentY;
      const threshold = 50;
      if (dragDistance > threshold) {
        setIsExpanded(true);
      } else if (dragDistance < -threshold) {
        setIsExpanded(false);
      }
      setIsDragging(false);
      setDragStartY(0);
      setCurrentY(0);
    }
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onTouchEnd);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [isDragging, forceExpanded, dragStartY, currentY]);

  // Memoize handleHeaderClick
  const handleHeaderClick = useCallback(() => {
    if (!forceExpanded) {
      setIsExpanded((prev) => !prev);
    }
  }, [forceExpanded]);

  // Memoize handleLocationSelect
  const handleLocationSelect = useCallback(
    (location: Location) => {
      setSelectedLocation(location);
      if (map) {
        map.panTo({
          lat: parseFloat(location.latitude),
          lng: parseFloat(location.longitude),
        });
        map.setZoom(15);
      }
      setShowBottomDrawer(false);
      if (onLocationSelect) onLocationSelect(location);
    },
    [map, setSelectedLocation, setShowBottomDrawer, onLocationSelect]
  );

  // Memoize the rendered list
  const renderedLocations = useMemo(
    () =>
      (locationsWithinRadius || []).map((location, index) => (
        <button
          key={location.id}
          className={cn(
            "pb-4 cursor-pointer text-left w-full",
            index > 0 && "border-t border-border-color py-2"
          )}
          onClick={() => handleLocationSelect(location)}
          aria-label={`Select location: ${location.name}`}
        >
          <div className="w-full flex flex-col gap-1 !text-sm !leading-8 !text-text-secondary">
            <div className="flex gap-2 items-start justify-between flex-grow">
              <h3 className="!text-xl !leading-10 !font-medium !text-text-primary break-words">
                {location.name}
              </h3>
            </div>
            <div className="flex flex-col gap-1">
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
          </div>
        </button>
      )),
    [locationsWithinRadius, handleLocationSelect]
  );

  // Measure content height after render and on window resize
  useLayoutEffect(() => {
    function updateContentHeight() {
      const newHeight = contentRef.current?.scrollHeight ?? 0;
      if (newHeight !== contentHeight) setContentHeight(newHeight);
    }
    updateContentHeight();
    window.addEventListener("resize", updateContentHeight);
    return () => window.removeEventListener("resize", updateContentHeight);
  }, [renderedLocations, contentHeight]);

  // Calculate dynamic height during drag
  const getDragHeight = useCallback(() => {
    if (!isDragging || forceExpanded) return isExpanded ? "85vh" : "20vh";
    const dragDistance = dragStartY - currentY;
    const viewportHeight =
      typeof window !== "undefined" ? window.innerHeight : 0;
    const baseHeight = isExpanded ? 0.85 : 0.2;
    const maxHeight = 0.85;
    const minHeight = 0.2;
    const dragPercent = dragDistance / viewportHeight;
    const newHeight = Math.min(
      Math.max(baseHeight + dragPercent, minHeight),
      maxHeight
    );
    return `${newHeight * 100}vh`;
  }, [isDragging, forceExpanded, isExpanded, dragStartY, currentY]);

  // Get drawer style
  const getDrawerStyle = useCallback(() => {
    const viewportHeight =
      typeof window !== "undefined" ? window.innerHeight : 0;
    const headerHeight = 56;
    const padding = 32;
    const maxAllowed = viewportHeight * 0.85 - viewportHeight * 0.1;
    const contentBasedMax = contentHeight + headerHeight + padding;
    const maxHeightPx = Math.min(contentBasedMax, maxAllowed);
    const maxHeight = viewportHeight ? `${maxHeightPx}px` : "75vh";
    const baseStyle = {
      height:
        isDragging && !forceExpanded
          ? getDragHeight()
          : isExpanded
          ? maxHeight
          : "20vh",
      maxHeight,
      transition:
        isDragging && !forceExpanded
          ? "none"
          : "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    };
    return baseStyle;
  }, [isDragging, forceExpanded, isExpanded, getDragHeight, contentHeight]);

  return (
    <div
      ref={drawerRef}
      className={cn(
        "fixed bottom-0 left-0 right-0 bg-white z-50 md:hidden rounded-t-2xl shadow-[0px_-6px_9.1px_0px_#35526A1A] transition-all duration-300 ease-in-out flex flex-col overflow-y-auto",
        className,
        renderedLocations.length === 0 && "bottom-[-100%] transition-all"
      )}
      style={getDrawerStyle()}
      aria-modal="true"
      role="dialog"
      tabIndex={-1}
    >
      {/* Clickable Header Area */}
      <button
        className={cn(
          "w-full px-6 border-t border-gray-200 flex justify-center sticky top-0 z-10 bg-white py-4",
          !forceExpanded ? "cursor-pointer" : ""
        )}
        onMouseDown={handleHeaderMouseDown}
        onTouchStart={handleHeaderTouchStart}
        onClick={handleHeaderClick}
        aria-label={
          isExpanded ? "Collapse locations drawer" : "Expand locations drawer"
        }
      >
        <LineIcon />
      </button>
      {/* Scrollable Content Area */}
      <div className="flex-1 min-h-0 overflow-y-auto">
        <div ref={contentRef} className="px-4 pb-4">
          {renderedLocations}
        </div>
      </div>
    </div>
  );
});
