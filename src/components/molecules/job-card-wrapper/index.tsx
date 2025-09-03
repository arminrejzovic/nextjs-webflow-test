"use client";

import ZoomableModalImage from "@/components/molecules/zoomable-modal-image";
import { JobCard } from "@/devlink/JobCard";
import { useState } from "react";
import { createPortal } from "react-dom";

const JobCardWrapper = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <JobCard />
      <button
        className="absolute top-4 right-4 z-50 w-8 h-8 bg-transparent border-0 cursor-pointer opacity-0 hover:opacity-100 transition-opacity duration-200"
        aria-label="Open image zoom dialog"
        onClick={() => {
          console.log("clicked");
          setIsOpen(true);
        }}
      />
      {typeof window !== "undefined" &&
        isOpen &&
        createPortal(
          <ZoomableModalImage
            image="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/6866a44b376445ad3f8b320f_Rectangle%206.webp"
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            className="custom-modal"
            modalProps={{
              style: { zIndex: 1000 },
            }}
            closeButtonProps={{
              onClick: () => setIsOpen(false),
            }}
          />,
          document.body
        )}
    </>
  );
};

export default JobCardWrapper;
