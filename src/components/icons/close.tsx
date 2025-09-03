const ChevronLeftIcon = ({
  className,
  width = 14,
  height = 14,
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
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M12.9995 1L0.999511 13"
        stroke="#0B0B0B"
        strokeWidth="1.6"
        strokeMiterlimit="10"
      />
      <path
        d="M13 13L1 1"
        stroke="#0B0B0B"
        strokeWidth="1.6"
        strokeMiterlimit="10"
      />
    </svg>
  );
};

export default ChevronLeftIcon;
