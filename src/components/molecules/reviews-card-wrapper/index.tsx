"use client";

import { ModalReview } from "@/devlink/ModalReview";
import { ReviewsCard } from "@/devlink/ReviewsCard";
import { useState } from "react";
import { createPortal } from "react-dom";

interface ReviewsCardWrapperProps {
  as?: React.ElementType;
  variant?: "Base" | "Stacked";
  link?: {
    href: string;
  };
  image?: string;
  avatarImage?: string;
  author?: React.ReactNode;
  reviewLocation?: React.ReactNode;
  reviewIntro?: React.ReactNode;
  linkText?: React.ReactNode;
  sourcePlatformImage?: string;
}

const ReviewsCardWrapper = (props: ReviewsCardWrapperProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="w-full text-left focus:outline-none"
        aria-label="Open review details"
        onClick={() => setIsOpen(true)}
      >
        <ReviewsCard {...props} />
      </button>
      {typeof window !== "undefined" &&
        isOpen &&
        createPortal(
          <ModalReview
            modalProps={{
              className: "modal-v2 show",
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

export default ReviewsCardWrapper;
