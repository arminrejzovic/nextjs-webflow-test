"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";

interface ZoomableModalImageProps {
  image?: string;
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
  modalProps?: React.HTMLAttributes<HTMLDivElement>;
  closeButtonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}

export function ZoomableModalImage({
  image = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/67b7bd096052e08452eb514d_Walk-In-Closet-Chocolate-Pearl-L.webp",
  className,
  isOpen = false,
  onClose,
  modalProps = {},
  closeButtonProps = {},
}: ZoomableModalImageProps) {
  const [isZoomed, setIsZoomed] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragStart, setDragStart] = useState({
    x: 0,
    y: 0,
    startX: 0,
    startY: 0,
  });
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Reset zoom and position when component unmounts or resets
  const resetZoom = () => {
    if (imgRef.current) {
      imgRef.current.style.transform = "scale(1) translate(0px, 0px)";
      imgRef.current.style.cursor = "zoom-in";
      setIsZoomed(false);
      setPosition({ x: 0, y: 0 });
    }
  };

  // Reset zoom when modal closes
  useEffect(() => {
    if (!isOpen) {
      resetZoom();
    }
  }, [isOpen]);

  // Handle click to zoom
  const handleImageClick = (e: React.MouseEvent<HTMLImageElement>) => {
    e.preventDefault();
    if (!imgRef.current || isDragging) return;

    if (isZoomed) {
      resetZoom();
    } else {
      const rect = imgRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Calculate offset to zoom into the clicked point
      const offsetX = (centerX - x) * 1;
      const offsetY = (centerY - y) * 1;

      imgRef.current.style.transform = `scale(2) translate(${offsetX}px, ${offsetY}px)`;
      imgRef.current.style.cursor = "zoom-out";
      setIsZoomed(true);
      setPosition({ x: offsetX, y: offsetY });
    }
  };

  // Handle double click to reset
  const handleDoubleClick = (e: React.MouseEvent<HTMLImageElement>) => {
    e.preventDefault();
    resetZoom();
  };

  // Handle mouse down for dragging
  const handleMouseDown = (e: React.MouseEvent<HTMLImageElement>) => {
    if (!isZoomed) return;
    e.preventDefault();
    setIsDragging(true);
    setDragStart({
      x: e.clientX,
      y: e.clientY,
      startX: position.x,
      startY: position.y,
    });
    if (imgRef.current) {
      imgRef.current.style.cursor = "grabbing";
    }
  };

  // Handle mouse move for dragging
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !isZoomed || !imgRef.current) return;

    const deltaX = e.clientX - dragStart.x;
    const deltaY = e.clientY - dragStart.y;
    const newX = dragStart.startX + deltaX;
    const newY = dragStart.startY + deltaY;

    imgRef.current.style.transform = `scale(2) translate(${newX}px, ${newY}px)`;
    setPosition({ x: newX, y: newY });
  };

  // Handle mouse up
  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false);
      if (imgRef.current && isZoomed) {
        imgRef.current.style.cursor = "zoom-out";
      }
    }
  };

  // Add global mouse events for dragging
  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!isDragging || !isZoomed || !imgRef.current) return;

      const deltaX = e.clientX - dragStart.x;
      const deltaY = e.clientY - dragStart.y;
      const newX = dragStart.startX + deltaX;
      const newY = dragStart.startY + deltaY;

      imgRef.current.style.transform = `scale(2) translate(${newX}px, ${newY}px)`;
      setPosition({ x: newX, y: newY });
    };

    const handleGlobalMouseUp = () => {
      if (isDragging) {
        setIsDragging(false);
        if (imgRef.current && isZoomed) {
          imgRef.current.style.cursor = "zoom-out";
        }
      }
    };

    if (isDragging) {
      document.addEventListener("mousemove", handleGlobalMouseMove);
      document.addEventListener("mouseup", handleGlobalMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleGlobalMouseMove);
      document.removeEventListener("mouseup", handleGlobalMouseUp);
    };
  }, [isDragging, dragStart, isZoomed]);

  return (
    <div
      className={cn("modal-v2 sw-config__modal", isOpen && "show", className)}
      {...modalProps}
    >
      <div className="sw-config__modal__inner !max-w-[460px] !max-h-[686px]">
        <div
          ref={containerRef}
          className="sw-config__modal__image-wrap relative overflow-hidden"
          style={{ width: "100%", height: "100%" }}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <img
            ref={imgRef}
            className="sw-config__modal__image w-full h-full object-contain cursor-zoom-in transition-transform duration-300 ease-in-out select-none"
            loading="lazy"
            width="auto"
            height="auto"
            alt="Zoomable image"
            src={image}
            onClick={handleImageClick}
            onDoubleClick={handleDoubleClick}
            onMouseDown={handleMouseDown}
            onDragStart={(e) => e.preventDefault()} // Prevent default drag behavior
            style={{
              transformOrigin: "center center",
              userSelect: "none",
              WebkitUserSelect: "none",
              MozUserSelect: "none",
              msUserSelect: "none",
            }}
          />
        </div>

        <button
          className="modal-v2__close sw-config__modal__close absolute top-4 right-4 z-10 inline-flex items-center justify-center w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full border-0 cursor-pointer transition-colors duration-200"
          type="button"
          onClick={(e) => {
            e.preventDefault();
            onClose?.();
          }}
          {...closeButtonProps}
        >
          <svg
            className="svg-icon w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M12.5605 1L0.560546 13"
              stroke="#FDFDFD"
              strokeWidth="1.6"
              strokeMiterlimit="10"
            />
            <path
              d="M12.5615 13L0.561523 1"
              stroke="#FDFDFD"
              strokeWidth="1.6"
              strokeMiterlimit="10"
            />
          </svg>
        </button>

        <div className="ci-modal__zoom-info absolute bottom-4 left-4">
          <div className="rounded-blob bg-black/50 backdrop-blur-sm px-3 py-2 rounded-full flex items-center gap-2">
            <svg
              className="svg-icon w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="14"
              viewBox="0 0 15 14"
              fill="none"
            >
              <g clipPath="url(#clip0_13130_2355)">
                <path
                  d="M14.3105 11.4408L11.8056 8.93548L10.8837 8.01349C10.5779 7.70759 10.0459 7.70759 9.74221 8.01349L9.48159 8.27414L8.71482 7.50726C10.2591 5.72575 10.1902 3.0201 8.49728 1.32907C6.72682 -0.44166 3.84928 -0.439506 2.07882 1.32907C0.308361 3.09981 0.308361 5.97779 2.07882 7.74852C2.96405 8.63389 4.12498 9.0755 5.28805 9.0755C6.3499 9.0755 7.40744 8.70282 8.25821 7.96609L9.02498 8.73298L8.76436 8.99364C8.4499 9.30815 8.4499 9.82084 8.76436 10.1354L12.1911 13.5626C12.4841 13.8556 12.8674 14.0021 13.2508 14.0021C13.6342 14.0021 14.0197 13.8556 14.3105 13.5626C14.5927 13.2805 14.7499 12.9035 14.7499 12.5028C14.7499 12.1021 14.5948 11.7251 14.3105 11.4429V11.4408ZM2.53328 7.28968C1.01482 5.77099 1.01482 3.3023 2.53328 1.78361C3.29144 1.02533 4.28867 0.6462 5.2859 0.6462C6.28313 0.6462 7.28036 1.02533 8.03851 1.78361C9.55482 3.3023 9.55698 5.77099 8.03851 7.28968C6.52005 8.80838 4.05175 8.80838 2.53328 7.28968ZM9.17144 9.56234C9.17144 9.53649 9.1779 9.4891 9.21882 9.44817L10.1988 8.46802C10.2397 8.42709 10.2871 8.42063 10.313 8.42063C10.3388 8.42063 10.3862 8.42709 10.4271 8.46802L11.1207 9.16166L9.91236 10.3702L9.21882 9.67651C9.1779 9.63558 9.17144 9.58819 9.17144 9.56234ZM13.8539 13.106C13.5201 13.4377 12.9794 13.4377 12.6456 13.106L10.369 10.829L11.5773 9.6205L13.8539 11.8975C14.1856 12.2314 14.1856 12.7721 13.8539 13.106Z"
                  fill="#FDFDFD"
                />
                <path
                  d="M7.39911 4.21351H5.61142V2.42554C5.61142 2.24675 5.46711 2.10242 5.28834 2.10242C5.10957 2.10242 4.96526 2.24675 4.96526 2.42554V4.21351H3.17757C2.9988 4.21351 2.85449 4.35784 2.85449 4.53664C2.85449 4.71543 2.9988 4.85976 3.17757 4.85976H4.96526V6.64773C4.96526 6.82653 5.10957 6.97086 5.28834 6.97086C5.46711 6.97086 5.61142 6.82653 5.61142 6.64773V4.85976H7.39911C7.57788 4.85976 7.72218 4.71543 7.72218 4.53664C7.72218 4.35784 7.57788 4.21351 7.39911 4.21351Z"
                  fill="#FDFDFD"
                />
              </g>
              <defs>
                <clipPath id="clip0_13130_2355">
                  <rect
                    width="14"
                    height="14"
                    fill="white"
                    transform="translate(0.75)"
                  />
                </clipPath>
              </defs>
            </svg>
            <div className="h12-v2 is--white-v2 text-white text-sm font-medium">
              {isZoomed ? "Click to zoom out" : "Click to zoom"}
            </div>
          </div>
        </div>
      </div>

      <div className="modal-v2__dw absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-4 max-w-xs">
        <div className="modal-v2__dw__content">
          <div className="h11-v2 is--white-v2 weight--black text-white font-bold text-sm mb-2">
            {isZoomed ? "Drag to pan" : "Double tap to zoom"}
          </div>
          <div className="h11-v2 is--white-v2 text-white text-xs">
            {isZoomed
              ? "Drag the image to explore. Double-click or click once to zoom out."
              : "Click anywhere on the image to zoom in. Double-click to zoom and reset position."}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ZoomableModalImage;
