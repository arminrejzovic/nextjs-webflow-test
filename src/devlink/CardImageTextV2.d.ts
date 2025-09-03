import * as React from "react";
import * as Types from "./types";

declare function CardImageTextV2(props: {
  as?: React.ElementType;
  image?: Types.Asset.Image;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  text?: React.ReactNode;
  link?: Types.Basic.Link;
  linkText?: React.ReactNode;
}): React.JSX.Element;
