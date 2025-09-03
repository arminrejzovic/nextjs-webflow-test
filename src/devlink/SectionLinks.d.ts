import * as React from "react";
import * as Types from "./types";

declare function SectionLinks(props: {
  as?: React.ElementType;
  titleVisibility?: Types.Visibility.VisibilityConditions;
  ctaVisibility?: Types.Visibility.VisibilityConditions;
  ctaText?: React.ReactNode;
  ctaLink?: Types.Basic.Link;
}): React.JSX.Element;
