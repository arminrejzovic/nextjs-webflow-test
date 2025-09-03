"use client";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ModalZoomImage } from "@/devlink";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

interface ModalZoomImageWrapperProps {
  image?: string;
  className?: string;
}

export default function ModalZoomImageWrapper({
  image = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/67b7bd096052e08452eb514d_Walk-In-Closet-Chocolate-Pearl-L.webp",
  className,
}: ModalZoomImageWrapperProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Reset zoom when dialog closes
  useEffect(() => {
    if (!isOpen && imgRef.current) {
      imgRef.current.style.transform = "scale(1)";
      imgRef.current.style.cursor = "zoom-in";
      setIsZoomed(false);
    }
  }, [isOpen]);

  return (
    <div className={cn("relative", className)}>
      {/* Original ModalZoomImage component */}
      <ModalZoomImage image={image} />

      {/* Invisible button overlay positioned in the top-right corner */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <button
            className="absolute top-4 right-4 z-10 w-8 h-8 bg-transparent border-0 cursor-pointer opacity-0 hover:opacity-100 transition-opacity duration-200"
            aria-label="Open image zoom dialog"
          />
        </DialogTrigger>
        <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 bg-transparent border-0 shadow-none">
          <DialogTitle className="sr-only">Image Zoom</DialogTitle>
          <div className="relative w-full h-full">
            {/* Zoomable image container */}
            <div className="sw-config__modal__inner relative w-full h-full">
              <div className="sw-config__modal__image-wrap relative w-full h-full overflow-hidden rounded-lg">
                <img
                  ref={imgRef}
                  className="sw-config__modal__image w-full h-full object-contain cursor-zoom-in transition-transform duration-300 ease-in-out"
                  src={image}
                  alt="Zoomable image"
                  onClick={() => {
                    if (imgRef.current) {
                      if (isZoomed) {
                        imgRef.current.style.transform = "scale(1)";
                        imgRef.current.style.cursor = "zoom-in";
                        setIsZoomed(false);
                      } else {
                        imgRef.current.style.transform = "scale(2)";
                        imgRef.current.style.cursor = "zoom-out";
                        setIsZoomed(true);
                      }
                    }
                  }}
                  onDoubleClick={() => {
                    if (imgRef.current) {
                      imgRef.current.style.transform = "scale(1)";
                      imgRef.current.style.cursor = "zoom-in";
                      setIsZoomed(false);
                    }
                  }}
                />
              </div>

              {/* Zoom info overlay */}
              <div className="ci-modal__zoom-info absolute bottom-4 left-4">
                <div className="rounded-blob bg-black/50 backdrop-blur-sm px-3 py-2 rounded-full flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                    fill="none"
                    className="text-white"
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
                  <span className="h12-v2 is--white-v2 text-white text-sm font-medium">
                    Click to zoom
                  </span>
                </div>
              </div>

              {/* Mobile zoom instructions */}
              <div className="modal-v2__dw absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-4 max-w-xs">
                <div className="modal-v2__dw__content">
                  <div className="h11-v2 is--white-v2 weight--black text-white font-bold text-sm mb-2">
                    Double tap to Zoom
                  </div>
                  <div className="h11-v2 is--white-v2 text-white text-xs">
                    Double tap to zoom on the image. Move finger around to
                    inspect it. Double tap the image to reset the zoom and
                    position.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
