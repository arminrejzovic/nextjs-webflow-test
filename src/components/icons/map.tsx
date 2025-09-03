import { cn } from "@/lib/utils";

const MapIcon = ({
  className,
  fill = "#F3F3F4",
  width = 32,
  height = 32,
  ...props
}: {
  className?: string;
  fill?: string;
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
      className={cn("transition-colors duration-300", className)}
      {...props}
    >
      <rect width="32" height="32" rx="16" fill={fill} />
      <path
        d="M18.3477 12.087V22"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.6523 10V19.913"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 10V19.913L18.3477 22L13.6523 19.913L10 22V12.087L13.6523 10L18.3477 12.087L22 10Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MapIcon;
