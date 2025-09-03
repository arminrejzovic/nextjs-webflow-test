import * as React from "react";
import * as Types from "./types";

declare function LpCardImageWithTextOnHover(props: {
  as?: React.ElementType;
  title?: React.ReactNode;
  text?: React.ReactNode;
  extraText?: Types.Basic.RichTextChildren;
  backgroundImage?: Types.Asset.Image;
}): React.JSX.Element;
