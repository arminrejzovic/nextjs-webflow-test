"use client";

import LoadMoreCtaWrapper from "@/components/atoms/load-more-button";
import { AreaCard } from "@/devlink/AreaCard";
import { SectionSpacing } from "@/devlink/SectionSpacing";
import { WorkGrid } from "@/devlink/WorkGrid";
import { useEffect, useState } from "react";

const AreaCardsGridSection = ({
  areaList,
  currentPath,
}: {
  areaList: any[];
  currentPath: string;
}) => {
  const [visibleCards, setVisibleCards] = useState(4);
  const [isLoading, setIsLoading] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  const handleLoadMore = async () => {
    setIsLoading(true);

    // Simulate loading delay for better UX
    await new Promise((resolve) => setTimeout(resolve, 800));

    setVisibleCards((prev) => prev + 4);
    setShouldAnimate(true);
    setIsLoading(false);
  };

  // Reset animation flag after animation completes
  useEffect(() => {
    if (shouldAnimate) {
      const timer = setTimeout(() => {
        setShouldAnimate(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [shouldAnimate]);

  // Only show the first 'visibleCards' number of items
  const visibleAreaList = areaList.slice(0, visibleCards);

  return (
    <>
      <WorkGrid
        as="div"
        areasGrid={visibleAreaList.map((area, idx) => {
          // Only animate cards that are newly loaded (beyond the initial 4)
          const isNewCard = idx >= 4 && shouldAnimate;

          return (
            <div
              key={area.id || idx}
              className={`transition-all duration-700 ease-out ${
                isNewCard
                  ? "animate-fade-in-up opacity-0 translate-y-4"
                  : "opacity-100 translate-y-0"
              }`}
              style={{
                animationDelay: isNewCard ? `${(idx % 4) * 100}ms` : "0ms",
                animationFillMode: "forwards",
              }}
            >
              <AreaCard
                key={area.id || idx}
                title={area.title}
                text={area.description}
                image={area.image}
                altText={area.title}
                link={{
                  href: `${currentPath}${area.link}`,
                }}
              />
            </div>
          );
        })}
      />
      <SectionSpacing variant="pt-32" />
      {areaList.length > visibleCards && (
        <LoadMoreCtaWrapper
          as="button"
          handleLoadMore={handleLoadMore}
          isLoading={isLoading}
        />
      )}
    </>
  );
};

export default AreaCardsGridSection;
