import * as React from "react";
import * as Types from "./types";

declare function CardV2Product(props: {
  as?: React.ElementType;
  title?: React.ReactNode;
  image?: Types.Asset.Image;
  link?: Types.Basic.Link;
  text?: React.ReactNode;
}): React.JSX.Element;
