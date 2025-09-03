"use client";

import LoadMoreCtaWrapper from "@/components/atoms/load-more-button";
import { SectionHeaderLocation } from "@/devlink/SectionHeaderLocation";
import { WorkCard } from "@/devlink/WorkCard";
import { WorkGrid } from "@/devlink/WorkGrid";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useEffect, useState } from "react";

const MOBILE_VISIBLE_CARDS = 3;
const DESKTOP_VISIBLE_CARDS = 6;

const WorkGridSection = ({ text }: { text: string }) => {
  const [visibleCards, setVisibleCards] = useState(MOBILE_VISIBLE_CARDS);
  const [isLoading, setIsLoading] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const { isMobile } = useMediaQuery();

  useEffect(() => {
    if (isMobile) {
      setVisibleCards(MOBILE_VISIBLE_CARDS);
    } else {
      setVisibleCards(DESKTOP_VISIBLE_CARDS);
    }
  }, [isMobile]);

  // Reset animation flag after animation completes
  useEffect(() => {
    if (shouldAnimate) {
      const timer = setTimeout(() => {
        setShouldAnimate(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [shouldAnimate]);

  const handleLoadMore = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setVisibleCards(
      (prev) => prev + (isMobile ? MOBILE_VISIBLE_CARDS : DESKTOP_VISIBLE_CARDS)
    );
    setShouldAnimate(true);
    setIsLoading(false);
  };

  // Mock data array - in real implementation this would come from props
  const workList = Array.from({ length: 20 }, (_, idx) => ({
    id: idx,
    image:
      "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/6866a44b376445ad3f8b320f_Rectangle%206.webp",
    imageAltText: `Image ${idx + 1}`,
    authorImage:
      "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/6867a26faeef4f44f7f26d0a_0c2888ef0c53e2145cbdfffe7bd986cb837ae4e9.webp",
    author: "Tyler Martinez",
    jobName: "Job Name",
    jobAddress: "City name, State, ZIP code",
    jobTag: "Walk-in closet",
    rating: "4.5",
  }));

  // Only show the first 'visibleCards' number of items
  const visibleWorkList = workList.slice(0, visibleCards);
  const initialCardsCount = isMobile
    ? MOBILE_VISIBLE_CARDS
    : DESKTOP_VISIBLE_CARDS;

  return (
    <>
      <SectionHeaderLocation
        variant="pt-64-pb-32"
        title="Recent work"
        text={text}
      />
      <WorkGrid
        variant="3col grid"
        areasGrid={visibleWorkList.map((work, idx) => {
          // Only animate cards that are newly loaded (beyond the initial count)
          const isNewCard = idx >= initialCardsCount && shouldAnimate;

          return (
            <div
              key={work.id}
              className={`transition-all duration-700 ease-out ${
                isNewCard
                  ? "animate-fade-in-up opacity-0 translate-y-4"
                  : "opacity-100 translate-y-0"
              }`}
              style={{
                animationDelay: isNewCard
                  ? `${(idx % initialCardsCount) * 100}ms`
                  : "0ms",
                animationFillMode: "forwards",
              }}
            >
              <WorkCard
                image={work.image}
                imageAltText={work.imageAltText}
                authorImage={work.authorImage}
                author={work.author}
                jobName={work.jobName}
                jobAddress={work.jobAddress}
                jobTag={work.jobTag}
                rating={work.rating}
              />
            </div>
          );
        })}
      />
      <LoadMoreCtaWrapper
        handleLoadMore={handleLoadMore}
        isLoading={isLoading}
      />
    </>
  );
};

export default WorkGridSection;
