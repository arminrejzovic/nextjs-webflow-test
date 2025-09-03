import * as React from "react";
import * as Types from "./types";

declare function AboutDesigner(props: {
  as?: React.ElementType;
  titleTag?: Types.Basic.HeadingTag;
  title?: React.ReactNode;
  aboutText?: React.ReactNode;
}): React.JSX.Element;
