import * as React from "react";
import * as Types from "./types";

declare function NormalCard(props: {
  as?: React.ElementType;
  title?: React.ReactNode;
  image?: Types.Asset.Image;
  link?: Types.Basic.Link;
}): React.JSX.Element;
