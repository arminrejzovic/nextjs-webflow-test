import * as React from "react";
import * as Types from "./types";

declare function CardV2Category(props: {
  as?: React.ElementType;
  link?: Types.Basic.Link;
  title?: React.ReactNode;
  description?: React.ReactNode;
  image?: Types.Asset.Image;
}): React.JSX.Element;
