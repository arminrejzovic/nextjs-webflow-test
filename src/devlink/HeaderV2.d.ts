import * as React from "react";
import * as Types from "./types";

declare function HeaderV2(props: {
  as?: React.ElementType;
  formProgressVisibility?: Types.Visibility.VisibilityConditions;
  buttonCtaPhone?: Types.Visibility.VisibilityConditions;
  buttonCtaSchedule?: Types.Visibility.VisibilityConditions;
  buttonCtaText?: React.ReactNode;
  variant?: "Base" | "White + Blur";
}): React.JSX.Element;
