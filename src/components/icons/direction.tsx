import { cn } from "@/lib/utils";
import React from "react";

const DirectionIcon = ({
  className,
  width = 32,
  height = 32,
  ...props
}: {
  className?: string;
  width?: number;
  height?: number;
  props?: React.SVGProps<SVGSVGElement>;
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
      {...props}
    >
      <rect width="32" height="32" rx="16" fill="#35526A" />
      <path
        d="M10.5 13.5556L10.5 13.0556H10L10 13.5556H10.5ZM21.5 13.5556L21.8401 13.922L21.8452 13.1938L21.5 13.5556ZM10.5 13.5556L10.5 14.0556H21.5L21.5 13.5556L21.5 13.0556H10.5L10.5 13.5556ZM17.25 9.5L16.9048 9.86173L21.1548 13.9173L21.5 13.5556L21.8452 13.1938L17.5952 9.13827L17.25 9.5ZM21.5 13.5556L21.1599 13.1891L16.9099 17.1335L17.25 17.5L17.5901 17.8665L21.8401 13.922L21.5 13.5556ZM10.5 13.5556H10L10 22.5H10.5H11L11 13.5556H10.5Z"
        fill="#FDFDFD"
      />
    </svg>
  );
};

export default DirectionIcon;
