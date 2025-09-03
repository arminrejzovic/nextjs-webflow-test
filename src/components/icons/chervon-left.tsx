import { cn } from "@/lib/utils";

const ChevronLeftIcon = ({
  className,
  width = 6,
  height = 10,
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
      viewBox="0 0 6 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
      {...props}
    >
      <path d="M5 1L1 5L5 9" stroke="#35526A" />
    </svg>
  );
};

export default ChevronLeftIcon;
