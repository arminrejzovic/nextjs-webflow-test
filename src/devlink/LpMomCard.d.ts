import * as React from "react";
import * as Types from "./types";

declare function LpMomCard(props: {
  as?: React.ElementType;
  percentageSvg?: Types.Basic.RichTextChildren;
  text?: React.ReactNode;
  pillText?: React.ReactNode;
  backgroundImage?: Types.Asset.Image;
  variant?: "Base" | "Orange";
}): React.JSX.Element;
