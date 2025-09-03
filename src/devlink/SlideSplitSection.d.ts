import * as React from "react";
import * as Types from "./types";

declare function SlideSplitSection(props: {
  as?: React.ElementType;
  tag?: React.ReactNode;
  heading?: React.ReactNode;
  paragraph?: React.ReactNode;
  image?: Types.Asset.Image;
}): React.JSX.Element;
