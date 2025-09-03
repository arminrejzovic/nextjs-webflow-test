import * as React from "react";
import * as Types from "./types";

declare function AreaCard(props: {
  as?: React.ElementType;
  variant?: "Base" | "Pointer default";
  link?: Types.Basic.Link;
  title?: React.ReactNode;
  hideText?: Types.Visibility.VisibilityConditions;
  text?: React.ReactNode;
  image?: Types.Asset.Image;
  altText?: Types.Basic.AltText;
  hideLinkIcon?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
