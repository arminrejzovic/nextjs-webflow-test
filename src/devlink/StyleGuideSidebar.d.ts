import * as React from "react";
import * as Types from "./types";

declare function StyleGuideSidebar(props: {
  as?: React.ElementType;
  title?: React.ReactNode;
  hideElementsLinks?: Types.Visibility.VisibilityConditions;
  showPatternsLinks?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
