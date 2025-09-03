"use client";

import { AdvancedMarker } from "@vis.gl/react-google-maps";

interface CustomAdvancedMarkerProps {
  position: { lat: number; lng: number };
  handleClick?: () => void;
  active: boolean;
  label: string | number;
  hasAnySelection?: boolean; // nov prop za sledenje globalnemu stanju
}

export const CustomAdvancedMarker = ({
  position,
  handleClick,
  active,
  label,
  hasAnySelection = false,
}: CustomAdvancedMarkerProps) => {
  // Logika za barvo: rdeča če je aktivna ALI če ni nobene izbrane lokacije
  const shouldShowRed = active || !hasAnySelection;

  return (
    <AdvancedMarker
      position={position}
      title={"Location marker"}
      onClick={handleClick}
      className="cursor-pointer"
    >
      <div className="flex items-center justify-center">
        <svg
          width="24"
          height="32"
          viewBox="0 0 24 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 left-0"
        >
          <g clipPath={`url(#clip0_${label})`}>
            <g filter={`url(#filter0_f_${label})`}>
              <ellipse
                cx="12"
                cy="29"
                rx="4"
                ry="2"
                fill="black"
                fillOpacity="0.12"
              />
            </g>
            <mask
              id={`path-2-outside-1_${label}`}
              maskUnits="userSpaceOnUse"
              x="1"
              y="1"
              width="22"
              height="28"
              fill="black"
            >
              <rect fill="white" x="1" y="1" width="22" height="28" />
              <path d="M12 2C17.5228 2 22 6.47715 22 12C22 15.2858 20.4146 18.2005 17.9678 20.0234C16.083 21.4394 13.387 23.685 12.7715 27.3193C12.7069 27.7008 12.3869 27.9971 12 27.9971C11.6131 27.9971 11.2931 27.7008 11.2285 27.3193C10.6129 23.6846 7.91604 21.4394 6.03125 20.0234C3.58477 18.2005 2 15.2855 2 12C2 6.47715 6.47715 2 12 2Z" />
            </mask>
            <path
              d="M12 2C17.5228 2 22 6.47715 22 12C22 15.2858 20.4146 18.2005 17.9678 20.0234C16.083 21.4394 13.387 23.685 12.7715 27.3193C12.7069 27.7008 12.3869 27.9971 12 27.9971C11.6131 27.9971 11.2931 27.7008 11.2285 27.3193C10.6129 23.6846 7.91604 21.4394 6.03125 20.0234C3.58477 18.2005 2 15.2855 2 12C2 6.47715 6.47715 2 12 2Z"
              fill={shouldShowRed ? "#DB4437" : "#35526A"}
            />
            <path
              d="M17.9678 20.0234L17.3703 19.2215L17.3671 19.2239L17.9678 20.0234ZM12.7715 27.3193L11.7855 27.1523L11.7855 27.1524L12.7715 27.3193ZM11.2285 27.3193L12.2145 27.1524L12.2145 27.1523L11.2285 27.3193ZM6.03125 20.0234L6.63189 19.2239L6.62875 19.2216L6.03125 20.0234ZM12 2V3C16.9706 3 21 7.02944 21 12H22H23C23 5.92487 18.0751 1 12 1V2ZM22 12H21C21 14.9563 19.575 17.5791 17.3703 19.2215L17.9678 20.0234L18.5652 20.8254C21.2542 18.822 23 15.6153 23 12H22ZM17.9678 20.0234L17.3671 19.2239C15.4721 20.6476 12.472 23.0993 11.7855 27.1523L12.7715 27.3193L13.7574 27.4863C14.3021 24.2707 16.6939 22.2312 18.5684 20.8229L17.9678 20.0234ZM12.7715 27.3193L11.7855 27.1524C11.7914 27.1177 11.8091 27.0834 11.8408 27.0551C11.8747 27.0248 11.9312 26.9971 12 26.9971V27.9971V28.9971C12.9212 28.9971 13.6194 28.3014 13.7574 27.4863L12.7715 27.3193ZM12 27.9971V26.9971C12.0688 26.9971 12.1253 27.0248 12.1592 27.0551C12.1909 27.0834 12.2086 27.1177 12.2145 27.1524L11.2285 27.3193L10.2426 27.4863C10.3806 28.3014 11.0788 28.9971 12 28.9971V27.9971ZM11.2285 27.3193L12.2145 27.1523C11.5279 23.0988 8.52675 20.6474 6.63189 19.2239L6.03125 20.0234L5.43061 20.823C7.30534 22.2313 9.69788 24.2704 10.2426 27.4863L11.2285 27.3193ZM6.03125 20.0234L6.62875 19.2216C4.42454 17.5792 3 14.9562 3 12H2H1C1 15.6148 2.74501 18.8218 5.43375 20.8253L6.03125 20.0234ZM2 12H3C3 7.02944 7.02944 3 12 3V2V1C5.92487 1 1 5.92487 1 12H2Z"
              fill={`url(#paint0_linear_${label})`}
              mask={`url(#path-2-outside-1_${label})`}
            />
          </g>
          <defs>
            <filter
              id={`filter0_f_${label}`}
              x="6"
              y="25"
              width="12"
              height="8"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="1"
                result={`effect1_foregroundBlur_${label}`}
              />
            </filter>
            <linearGradient
              id={`paint0_linear_${label}`}
              x1="12"
              y1="2"
              x2="12"
              y2="27.9969"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0.35" />
            </linearGradient>
            <clipPath id={`clip0_${label}`}>
              <rect width="24" height="32" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <span className="absolute top-[2px] left-[2px] size-5 flex items-center justify-center text-white text-sm leading-none tracking-normal text-center select-none font-medium">
          {label}
        </span>
      </div>
    </AdvancedMarker>
  );
};
