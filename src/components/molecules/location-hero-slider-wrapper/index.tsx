"use client";

import React, { useRef, useState } from "react";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

// Types for different slider configurations
interface SliderConfig {
  type?: "loop" | "slide" | "fade";
  perPage?: number;
  perMove?: number;
  gap?: string | number;
  pagination?: boolean;
  arrows?: boolean;
  autoHeight?: boolean;
  rewind?: boolean;
  focus?: "center" | number;
  fixedWidth?: number;
  fixedHeight?: number;
  padding?: { left?: string; right?: string } | string | number;
  flickMaxPages?: number;
  flickPower?: number;
  mediaQuery?: "min" | "max";
  breakpoints?: Record<number, Partial<SliderConfig> & { destroy?: boolean }>;
  autoplay?: boolean;
  interval?: number;
  speed?: number;
  trimSpace?: boolean;
  updateOnMove?: boolean;
  destroy?: boolean;
}

interface LocationHeroSliderWrapperProps {
  slides: React.ReactNode[];
  sliderType?:
    | "center-card"
    | "mobile-only"
    | "mobile-full"
    | "mobile-dots"
    | "gallery"
    | "collection"
    | "history"
    | "waste"
    | "recycle"
    | "posts"
    | "dots"
    | "finishes"
    | "form-mobile"
    | "responsive-grid"
    | "responsive-grid-four"
    | "mobile-profiles";
  className?: string;
  onSlideChange?: (index: number) => void;
  onMount?: (splide: any) => void;
}

const LocationHeroSliderWrapper: React.FC<LocationHeroSliderWrapperProps> = ({
  slides,
  sliderType = "dots",
  className = "",
  onSlideChange,
  onMount,
}) => {
  const splideRef = useRef<any>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  // Get slider configuration based on type
  const getSliderConfig = (type: string): SliderConfig => {
    const baseConfig: SliderConfig = {
      type: "loop",
      perPage: 1,
      perMove: 1,
      gap: "8px",
      pagination: false,
      arrows: true,
      autoHeight: true,
      rewind: true,
      mediaQuery: "min",
    };

    switch (type) {
      case "center-card":
        return {
          ...baseConfig,
          focus: "center",
          fixedWidth: 280,
          fixedHeight: 260,
          flickMaxPages: 1,
          flickPower: 300,
          updateOnMove: true,
          breakpoints: {
            800: {
              fixedWidth: 754,
              fixedHeight: 550,
            },
          },
        };

      case "mobile-only":
        return {
          ...baseConfig,
          perPage: 1,
          padding: { right: "16%", left: "8px" },
          breakpoints: {
            992: {
              destroy: true,
            },
            768: {
              perPage: 2,
              padding: { right: "16%", left: "16%" },
            },
          },
        };

      case "mobile-full":
        return {
          ...baseConfig,
          perPage: 1,
          padding: 0,
          breakpoints: {
            992: {
              destroy: true,
            },
          },
        };

      case "mobile-dots":
        return {
          ...baseConfig,
          perPage: 1,
          pagination: true,
          arrows: false,
          padding: { right: "10%", left: "10%" },
          breakpoints: {
            992: {
              destroy: true,
            },
          },
        };

      case "gallery":
        return {
          ...baseConfig,
          perPage: 5,
          perMove: 1,
          gap: "16px",
          rewind: true,
          trimSpace: false,
          breakpoints: {
            1440: { perPage: 4 },
            1280: { perPage: 3 },
            767: {
              perPage: 1,
              padding: { left: "1rem", right: "10%" },
            },
          },
        };

      case "collection":
        return {
          ...baseConfig,
          perPage: 1,
          gap: "16px",
          rewind: true,
          breakpoints: {
            991: {
              destroy: true,
            },
          },
        };

      case "history":
        return {
          ...baseConfig,
          speed: 800,
          type: "loop",
          perPage: 1,
          pagination: true,
          mediaQuery: "min",
          breakpoints: {
            800: {
              // height: '270px'
            },
            992: {
              // height: '350px'
            },
          },
        };

      case "waste":
        return {
          ...baseConfig,
          type: "loop",
          perPage: 1,
          pagination: true,
        };

      case "recycle":
        return {
          ...baseConfig,
          rewind: true,
          perPage: 1,
          padding: 0,
          mediaQuery: "min",
          breakpoints: {
            992: {
              padding: { right: "20%", left: "8px" },
            },
          },
        };

      case "posts":
        return {
          ...baseConfig,
          perPage: 1,
          gap: 0,
          pagination: true,
          breakpoints: {
            991: {
              arrows: false,
            },
          },
        };

      case "dots":
        return {
          ...baseConfig,
          rewind: true,
          perPage: 1,
          autoplay: true,
          interval: 3000,
          pagination: true,
          arrows: false,
        };

      case "finishes":
        return {
          ...baseConfig,
          type: "loop",
          perPage: 1,
          pagination: true,
          autoHeight: true,
        };

      case "form-mobile":
        return {
          ...baseConfig,
          perPage: 1,
          padding: 0,
          mediaQuery: "min",
          breakpoints: {
            992: {
              destroy: true,
            },
          },
        };

      case "responsive-grid":
        return {
          ...baseConfig,
          perPage: 1,
          perMove: 1,
          gap: "16px",
          pagination: true,
          arrows: false,
          autoHeight: true,
          rewind: true,
          mediaQuery: "min",
          breakpoints: {
            768: {
              perPage: 2,
              gap: "20px",
            },
            1024: {
              perPage: 3,
              gap: "8px",
            },
          },
        };

      case "responsive-grid-four":
        return {
          ...baseConfig,
          perPage: 1.5,
          perMove: 1,
          gap: "8px",
          pagination: true,
          arrows: true,
          autoHeight: true,
          rewind: true,
          mediaQuery: "min",
          breakpoints: {
            768: {
              perPage: 2.5,
              gap: "8px",
            },
            1024: {
              perPage: 4,
              gap: "8px",
            },
          },
        };

      case "mobile-profiles":
        return {
          ...baseConfig,
          perPage: 2.5,
          perMove: 1,
          gap: "8px",
          pagination: false,
          arrows: true,
          autoHeight: true,
          rewind: true,
          mediaQuery: "min",
          breakpoints: {
            530: {
              perPage: 3.5,
              gap: "8px",
            },
          },
        };
      default:
        return baseConfig;
    }
  };

  // Handle slide change events
  const handleMoved = (splide: any, newIndex: number) => {
    // Remove active classes from all slides
    const slides = splide.Components.Elements.slides;
    slides.forEach((slide: HTMLElement) => {
      slide.classList.remove("is-active");

      // Remove 'open' class from card elements
      const card = slide.querySelector(".card-v2-alt");
      if (card) {
        card.classList.remove("open");
      }
    });

    // Add active class to current slide
    slides[newIndex].classList.add("is-active");

    // Handle special cases for different slider types
    if (sliderType === "mobile-only") {
      document.querySelectorAll(".ts-grid-item").forEach((el) => {
        el.classList.remove("is--active", "pointer-none");
      });
      document.querySelectorAll(".featured-category").forEach((el) => {
        el.classList.remove("active");
      });
    }

    // Handle form mobile slider data-target-swap
    if (sliderType === "form-mobile") {
      const activeSlide = slides[newIndex].querySelector(
        ".action-card-item__img"
      );
      if (activeSlide) {
        const newSrc = activeSlide.getAttribute("src");
        document.querySelectorAll("[data-target-swap]").forEach((target) => {
          target.setAttribute("src", newSrc || "");
        });
      }
    }

    onSlideChange?.(newIndex);
  };

  // Handle slider mount
  const handleMounted = (splide: any) => {
    setIsInitialized(true);

    // Add instance class
    const element = splide.root;
    const index = Math.floor(Math.random() * 1000);
    element.classList.add(`instance-id-${index}`);

    // Special handling for center card slider
    if (sliderType === "center-card") {
      const slides = element.querySelectorAll(".splide__slide");
      const slideCount = slides.length;
      if (slideCount > 4) {
        element.classList.add("center-slider-card--big");
      }
    }

    // Special handling for finishes slider
    if (sliderType === "finishes") {
      const finishItem = element.closest(".finish-item");
      const openBtn = finishItem?.querySelector(".finish-modal__open-trigger");

      if (openBtn) {
        openBtn.addEventListener("click", () => {
          element.classList.add("is-refreshing");
          setTimeout(() => {
            splide.go(0);
            splide.refresh();
            element.classList.remove("is-refreshing");
          }, 100);
        });
      }
    }

    // Special handling for form mobile slider
    if (sliderType === "form-mobile") {
      const activeSlide = element.querySelector(
        ".splide__slide:first-child .action-card-item__img"
      );
      if (activeSlide) {
        const newSrc = activeSlide.getAttribute("src");
        document.querySelectorAll("[data-target-swap]").forEach((target) => {
          target.setAttribute("src", newSrc || "");
        });
      }
    }

    onMount?.(splide);
  };

  // Handle slide clicks
  const handleClick = (splide: any, slide: any) => {
    if (sliderType === "responsive-grid-four") {
      return;
    }
    splide.go(slide.index);
  };

  // Get CSS class based on slider type
  const getSliderClass = (type: string): string => {
    const baseClass = "splide";

    switch (type) {
      case "center-card":
        return `${baseClass} center-slider-card`;
      case "mobile-only":
        return `${baseClass} splide-mobile-only`;
      case "mobile-full":
        return `${baseClass} splide-full-mobile-only`;
      case "mobile-dots":
        return `${baseClass} splide-mobile-dots`;
      case "gallery":
        return `${baseClass} gallery-slider`;
      case "collection":
        return `${baseClass} splide-collection`;
      case "history":
        return `${baseClass} splide-history`;
      case "waste":
        return `${baseClass} splide-waste`;
      case "recycle":
        return `${baseClass} splide-recycle`;
      case "posts":
        return `${baseClass} splide-blog-header`;
      case "dots":
        return `${baseClass} splide-dots`;
      case "finishes":
        return `${baseClass} splide-finishes`;
      case "form-mobile":
        return `${baseClass} splide-form-mobile-only`;
      case "responsive-grid":
        return `${baseClass} splide-responsive-grid`;
      case "responsive-grid-four":
        return `${baseClass} splide-responsive-grid-four`;
      case "mobile-profiles":
        return `${baseClass} splide-mobile-profiles`;
      default:
        return baseClass;
    }
  };

  const config = getSliderConfig(sliderType);
  const sliderClass = getSliderClass(sliderType);

  return (
    <section>
      <div className="w-layout-blockcontainer container-v2 w-container">
        <div className="location-hero-slide">
          <div
            className={`${sliderClass} ${className} h-100 splide-initialized instance-id-0 splide--slide splide--ltr splide--draggable is-active is-overflow is-initialized `}
          >
            <Splide
              ref={splideRef}
              options={config}
              onMoved={handleMoved}
              onMounted={handleMounted}
              onClick={handleClick}
            >
              {slides.map((slide, index) => (
                <SplideSlide key={index}>{slide}</SplideSlide>
              ))}
            </Splide>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationHeroSliderWrapper;
