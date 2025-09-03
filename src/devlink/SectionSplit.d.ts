import * as React from "react";
import * as Types from "./types";

declare function SectionSplit(props: {
  as?: React.ElementType;
  image?: Types.Asset.Image;
  heading?: React.ReactNode;
  body?: React.ReactNode;
  ctaVisibility?: Types.Visibility.VisibilityConditions;
  ctaLink?: Types.Basic.Link;
  ctaText?: React.ReactNode;
}): React.JSX.Element;
