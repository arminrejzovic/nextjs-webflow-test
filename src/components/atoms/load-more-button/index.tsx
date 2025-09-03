"use client";

import { LoadMoreCta } from "@/devlink/LoadMoreCta";
import * as Types from "@/devlink/types";

const LoadMoreCtaWrapper = ({
  as = "button",
  text = "Load more",
  handleLoadMore,
  isLoading = false,
  link,
}: {
  as?: React.ElementType;
  text?: string;
  handleLoadMore?: () => void;
  isLoading?: boolean;
  link?: Types.Basic.Link;
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!isLoading) {
      handleLoadMore?.();
    }
  };

  return (
    <div className="w-layout-blockcontainer container-v2 w-container flex justify-center">
      <LoadMoreCta
        as={as}
        buttonText={isLoading ? "Loading..." : text}
        buttonProps={
          link
            ? undefined
            : {
                onClick: (e: React.MouseEvent<HTMLButtonElement>) =>
                  handleClick(e),
                disabled: isLoading,
              }
        }
        link={link}
      />
    </div>
  );
};

export default LoadMoreCtaWrapper;
