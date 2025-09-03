import * as React from "react";
import * as Types from "./types";

declare function LoadMoreCta(props: {
  as?: React.ElementType;
  buttonText?: React.ReactNode;
  link?: Types.Basic.Link;
  variant?: "Base" | "mt-64";
  showDownArrow?: Types.Visibility.VisibilityConditions;
  hideRightArrow?: Types.Visibility.VisibilityConditions;
  buttonProps?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
