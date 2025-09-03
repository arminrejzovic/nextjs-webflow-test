const LineIcon = ({
  className,
  ...props
}: {
  className?: string;
  props?: React.SVGProps<SVGSVGElement>;
}) => {
  return (
    <svg
      width="34"
      height="2"
      viewBox="0 0 34 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M1 1H33"
        stroke="#C8C7C5"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default LineIcon;
