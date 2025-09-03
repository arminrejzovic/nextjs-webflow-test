import * as React from "react";
import * as Types from "./types";

declare function ImageGridItem(props: {
  as?: React.ElementType;
  cardText?: React.ReactNode;
  sliderRich?: Types.Basic.RichTextChildren;
  image?: Types.Asset.Image;
}): React.JSX.Element;
