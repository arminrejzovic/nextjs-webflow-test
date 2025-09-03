import * as React from "react";
import * as Types from "./types";

declare function CardV2(props: {
  as?: React.ElementType;
  title?: React.ReactNode;
  textVisibility?: Types.Visibility.VisibilityConditions;
  text?: React.ReactNode;
  cardLink?: Types.Basic.Link;
  btnVisibility?: Types.Visibility.VisibilityConditions;
  buttonText?: React.ReactNode;
  image?: Types.Asset.Image;
  textMobile?: React.ReactNode;
}): React.JSX.Element;
