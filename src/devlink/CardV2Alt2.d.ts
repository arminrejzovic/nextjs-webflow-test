import * as React from "react";
import * as Types from "./types";

declare function CardV2Alt2(props: {
  as?: React.ElementType;
  link?: Types.Basic.Link;
  title?: React.ReactNode;
  text?: React.ReactNode;
  textVisibility?: Types.Visibility.VisibilityConditions;
  image?: Types.Asset.Image;
  icon?: Types.Asset.Image;
  iconAltText?: Types.Basic.AltText;
  iconVisibility?: Types.Visibility.VisibilityConditions;
  hasModal?: Types.Visibility.VisibilityConditions;
  modalText?: React.ReactNode;
}): React.JSX.Element;
