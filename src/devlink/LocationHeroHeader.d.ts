import * as React from "react";
import * as Types from "./types";

declare function LocationHeroHeader(props: {
  as?: React.ElementType;
  variant?: "Base" | "pt-64";
  labelAboveTitle?: React.ReactNode;
  titleTag?: Types.Basic.HeadingTag;
  title?: React.ReactNode;
  fullAddress?: React.ReactNode;
  hideRating?: Types.Visibility.VisibilityConditions;
  ratingNumber?: React.ReactNode;
}): React.JSX.Element;
