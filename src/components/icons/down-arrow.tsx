import { cn } from "@/lib/utils";

export const DownArrowIcon = ({
  className,
  width = 9,
  height = 11,
  props,
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
      viewBox="0 0 9 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
      {...props}
    >
      <path
        d="M4.44444 -1.77274e-07L4.44444 10M4.44444 10L8.5 5.75M4.44444 10L0.5 5.75"
        stroke="#35526A"
        strokeLinejoin="bevel"
      />
    </svg>
  );
};
