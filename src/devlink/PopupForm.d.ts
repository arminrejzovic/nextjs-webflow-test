import * as React from "react";
import * as Types from "./types";

declare function PopupForm(props: {
  as?: React.ElementType;
  popupFormFirst?: Types.Visibility.VisibilityConditions;
  summerModalFirst?: Types.Visibility.VisibilityConditions;
  variant?: "Base" | "Pink";
  title?: React.ReactNode;
  topTItle?: React.ReactNode;
  topTitleVisibility?: Types.Visibility.VisibilityConditions;
  pinkPinkVisibility?: Types.Visibility.VisibilityConditions;
  pinkPinkImageDesktop?: Types.Asset.Image;
  pinkPinkImageMobile?: Types.Asset.Image;
  baseBaseVisibility?: Types.Visibility.VisibilityConditions;
  baseImage1?: Types.Asset.Image;
  baseImage2?: Types.Asset.Image;
  titleMobile?: React.ReactNode;
}): React.JSX.Element;
