"use client";

import { buildBasePathUrl } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

interface LinkOption {
  href: string;
}

interface SubnavLocationsProps {
  locationPhone?: LinkOption;
  showPhoneIcon?: boolean;
  aboutLink?: LinkOption;
  videoGalleryLink?: LinkOption;
  financingLink?: LinkOption;
  newsLink?: LinkOption;
  reviewsLink?: LinkOption;
  serviceAreasLink?: LinkOption;
  contactLink?: LinkOption;
  location?: string;
  className?: string;
}

function ChevronDownIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M4.16211 6.10834L7.94541 9.89163L11.7287 6.10834"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SubnavLocations({
  locationPhone = { href: "#" },
  showPhoneIcon = false,
  aboutLink = { href: "#" },
  videoGalleryLink = { href: "#" },
  financingLink = { href: "#" },
  newsLink = { href: "#" },
  reviewsLink = { href: "#" },
  serviceAreasLink = { href: "#" },
  contactLink = { href: "#" },
  location = "Southern California",
  className = "",
}: SubnavLocationsProps) {
  const pathname = usePathname();
  const [isPdpOpen, setIsPdpOpen] = useState(false);
  const [isOvOpen, setIsOvOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | "">(
    ""
  );

  const pdpSubnavRef = useRef<HTMLDivElement>(null);
  const ovSubnavWrapRef = useRef<HTMLDivElement>(null);
  const pdpTriggerRef = useRef<HTMLDivElement>(null);
  const ovTriggerRef = useRef<HTMLDivElement>(null);

  // Current link detection
  useEffect(() => {
    const detectCurrentLink = () => {
      const links = document.querySelectorAll(".subnav-loc__menu__link");

      // Remove w--current class from all links first
      links.forEach((link) => {
        link.classList.remove("w--current");
      });

      // Find and highlight the current link
      links.forEach((link) => {
        const href = link.getAttribute("href");
        if (href === pathname) {
          link.classList.add("w--current");
        }
      });
    };

    // Small delay to ensure the component is rendered
    const timeoutId = setTimeout(detectCurrentLink, 0);

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  // Scroll direction tracking
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let cumulativeDelta = 0;
    let lastDirection = 0;
    const scrollThreshold = 200;

    const updateNavClasses = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY;
      const currentDirection = scrollDelta > 0 ? 1 : -1;

      if (currentDirection !== lastDirection) {
        cumulativeDelta = 0;
      }

      cumulativeDelta += scrollDelta;

      if (Math.abs(cumulativeDelta) > scrollThreshold) {
        if (currentDirection > 0) {
          setScrollDirection("down");
        } else {
          setScrollDirection("up");
        }
        cumulativeDelta = 0;
      }

      lastScrollY = currentScrollY;
      lastDirection = currentDirection;
    };

    const handleScroll = () => {
      window.requestAnimationFrame(updateNavClasses);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mobile interactions
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as Node;

      // Handle PDP subnav outside clicks
      if (
        isPdpOpen &&
        pdpSubnavRef.current &&
        pdpTriggerRef.current &&
        !pdpSubnavRef.current.contains(target) &&
        !pdpTriggerRef.current.contains(target)
      ) {
        setIsPdpOpen(false);
      }

      // Handle OV subnav outside clicks
      if (
        isOvOpen &&
        ovSubnavWrapRef.current &&
        ovTriggerRef.current &&
        !ovSubnavWrapRef.current.contains(target) &&
        !ovTriggerRef.current.contains(target)
      ) {
        setIsOvOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [isPdpOpen, isOvOpen]);

  const handlePdpTriggerClick = () => {
    setIsPdpOpen(!isPdpOpen);
    setIsOvOpen(false);
  };

  const handleOvTriggerClick = () => {
    setIsOvOpen(!isOvOpen);
    setIsPdpOpen(false);
  };

  const handleOvNavClick = () => {
    setIsOvOpen(false);
  };

  return (
    <div
      className={`subnav-v2 subnav-v2-loc ${
        scrollDirection ? `scroll-${scrollDirection}` : ""
      } ${className}`}
    >
      <div className="subnav-loc-v2__inner">
        <div
          ref={pdpSubnavRef}
          className={`pdp-subnav is--loc ${isPdpOpen ? "open" : ""}`}
        >
          <div className="subnav-loc__menu__location">{location}</div>
        </div>

        <div
          ref={ovSubnavWrapRef}
          className={`ov-subnav-wrap ${isOvOpen ? "open" : ""}`}
        >
          <div
            ref={ovTriggerRef}
            className="ov-subnav__trigger is--loc"
            onClick={handleOvTriggerClick}
          >
            <div className="subheading-v2 is--loc">Overview</div>
            <div className="ov-subnav__icon">
              <ChevronDownIcon />
            </div>
          </div>

          <div className="ov-subnav is--loc" onClick={handleOvNavClick}>
            <Link
              href={buildBasePathUrl(aboutLink.href)}
              className="subnav-loc__menu__link"
              replace
            >
              <div>About</div>
            </Link>

            <Link
              href={buildBasePathUrl(videoGalleryLink.href)}
              className="subnav-loc__menu__link"
            >
              <div>Video gallery</div>
            </Link>

            <Link
              href={buildBasePathUrl(financingLink.href)}
              className="subnav-loc__menu__link"
            >
              <div>Financing</div>
            </Link>

            <Link
              href={buildBasePathUrl(newsLink.href)}
              className="subnav-loc__menu__link"
            >
              <div>Recent news</div>
            </Link>

            <Link
              href={buildBasePathUrl(reviewsLink.href)}
              className="subnav-loc__menu__link"
            >
              <div>Reviews</div>
            </Link>

            <Link
              href={buildBasePathUrl(serviceAreasLink.href)}
              className="subnav-loc__menu__link"
            >
              <div>Service areas</div>
            </Link>

            <Link
              href={buildBasePathUrl(contactLink.href)}
              className="subnav-loc__menu__link"
            >
              <div>Contact us</div>
            </Link>

            {showPhoneIcon && (
              <Link
                href={buildBasePathUrl(locationPhone.href)}
                className="subnav-loc__menu__link is--contact"
              >
                <Image
                  className="subnav__contact"
                  width={40.5}
                  height={40.5}
                  alt=""
                  src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/6887442f93d8557117b5bf97_floating%20button.png"
                />
              </Link>
            )}

            <div className="ov-subnav__anchors">
              <div className="ov-subnav__anchors__bar">
                <div className="ov-subnav__anchors__bar__inner" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
