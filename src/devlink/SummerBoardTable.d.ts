import * as React from "react";
import * as Types from "./types";

declare function SummerBoardTable(props: {
  as?: React.ElementType;
  image?: Types.Asset.Image;
  title?: React.ReactNode;
  text?: React.ReactNode;
  box1Text?: React.ReactNode;
  box2Text?: React.ReactNode;
  box3Text?: React.ReactNode;
}): React.JSX.Element;
