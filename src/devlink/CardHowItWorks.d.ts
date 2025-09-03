import * as React from "react";
import * as Types from "./types";

declare function CardHowItWorks(props: {
  as?: React.ElementType;
  imageDesktop?: Types.Asset.Image;
  imageMobile?: Types.Asset.Image;
  number?: React.ReactNode;
  title?: React.ReactNode;
  text?: React.ReactNode;
}): React.JSX.Element;
