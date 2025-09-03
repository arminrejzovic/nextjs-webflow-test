const AccordionIcon = ({
  className,
  ...props
}: {
  className?: string;
  props?: React.SVGProps<SVGSVGElement>;
}) => {
  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <g opacity="0.7">
        <path
          d="M19 13.9922L11 6.0083L3 13.9922"
          stroke="#6C6C6C"
          strokeWidth="3"
        />
      </g>
    </svg>
  );
};

export default AccordionIcon;
