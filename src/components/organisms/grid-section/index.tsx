"use client";

import LoadMoreCtaWrapper from "@/components/atoms/load-more-button";
import { SectionSpacing } from "@/devlink/SectionSpacing";
import { WorkGrid } from "@/devlink/WorkGrid";
import { useState } from "react";

const GridSection = ({
  elements,
  variant = "3col grid",
}: {
  elements: React.ReactNode[];
  variant?: "Base" | "3col grid" | "Videos grid";
}) => {
  const [visibleCards, setVisibleCards] = useState(6);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadMore = async () => {
    setIsLoading(true);

    // Simulate loading delay for better UX
    await new Promise((resolve) => setTimeout(resolve, 800));

    setVisibleCards((prev) => prev + 6);
    setIsLoading(false);
  };

  return (
    <>
      <WorkGrid
        variant={variant}
        areasGrid={elements.slice(0, visibleCards).map((_, idx) => (
          <div
            key={idx}
            className={`transition-all duration-700 ease-out ${
              idx >= visibleCards - 6 && idx < visibleCards
                ? "animate-fade-in-up opacity-0 translate-y-4"
                : "opacity-100 translate-y-0"
            }`}
            style={{
              animationDelay: `${(idx % 6) * 100}ms`,
              animationFillMode: "forwards",
            }}
          >
            {elements[idx]}
          </div>
        ))}
      />
      {elements.length > visibleCards && <SectionSpacing variant="py-32" />}
      {elements.length > visibleCards && (
        <LoadMoreCtaWrapper
          handleLoadMore={handleLoadMore}
          isLoading={isLoading}
        />
      )}
    </>
  );
};

export default GridSection;
