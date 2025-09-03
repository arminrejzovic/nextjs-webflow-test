import * as React from "react";
import * as Types from "./types";

declare function DesignerAwardCard(props: {
  as?: React.ElementType;
  icon?: Types.Asset.Image;
  title?: React.ReactNode;
  text?: React.ReactNode;
  withText?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
