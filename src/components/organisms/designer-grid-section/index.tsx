"use client";

import LoadMoreCtaWrapper from "@/components/atoms/load-more-button";
import LocationHeroSliderWrapper from "@/components/molecules/location-hero-slider-wrapper";
import { DesignerCard } from "@/devlink/DesignerCard";
import { DesignerGrid } from "@/devlink/DesignerGrid";
import { SectionHeaderLocation } from "@/devlink/SectionHeaderLocation";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Employee } from "@/types/locations";
import { useEffect, useState } from "react";

const DesignerGridSection = ({
  designerList,
  title,
  text,
  currentPath,
}: {
  designerList: Employee[];
  title: string;
  text: string;
  currentPath: string;
}) => {
  const [visibleCards, setVisibleCards] = useState(6);
  const [isLoading, setIsLoading] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const { isMobile } = useMediaQuery();

  const handleLoadMore = async () => {
    setIsLoading(true);

    // Simulate loading delay for better UX
    await new Promise((resolve) => setTimeout(resolve, 800));

    setVisibleCards((prev) => prev + 6);
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
  const visibleDesignerList = designerList.slice(0, visibleCards);

  return (
    <>
      <SectionHeaderLocation variant="pt-64-pb-32" title={title} text={text} />
      {isMobile && (
        <LocationHeroSliderWrapper
          slides={[
            ...visibleDesignerList.map((designer, idx) => (
              <DesignerCard
                avatar={designer.profileImage}
                name={designer.name}
                jobTitle={designer.title}
                ratingValue={designer.rating}
                cardLink={{
                  href: `${currentPath}${designer.slug}`,
                }}
                key={designer.name || idx}
              />
            )),
          ]}
          sliderType="mobile-profiles"
        />
      )}
      {!isMobile && (
        <DesignerGrid
          gridSlot={visibleDesignerList.map((designer, idx) => {
            // Only animate cards that are newly loaded (beyond the initial 6)
            const isNewCard = idx >= 6 && shouldAnimate;

            return (
              <div
                key={designer.name || idx}
                className={`transition-all duration-700 ease-out ${
                  isNewCard
                    ? "animate-fade-in-up opacity-0 translate-y-4"
                    : "opacity-100 translate-y-0"
                }`}
                style={{
                  animationDelay: isNewCard ? `${(idx % 6) * 100}ms` : "0ms",
                  animationFillMode: "forwards",
                }}
              >
                <DesignerCard
                  avatar={designer.profileImage}
                  name={designer.name}
                  jobTitle={designer.title}
                  ratingValue={designer.rating}
                  cardLink={{
                    href: `${currentPath}${designer.slug}`,
                  }}
                />
              </div>
            );
          })}
        />
      )}
      {designerList.length > visibleCards && (
        <LoadMoreCtaWrapper
          handleLoadMore={handleLoadMore}
          isLoading={isLoading}
        />
      )}
    </>
  );
};

export default DesignerGridSection;
