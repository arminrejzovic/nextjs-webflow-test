import * as React from "react";
import * as Types from "./types";

declare function HeroImage(props: {
  as?: React.ElementType;
  image?: Types.Asset.Image;
  altText?: Types.Basic.AltText;
}): React.JSX.Element;
