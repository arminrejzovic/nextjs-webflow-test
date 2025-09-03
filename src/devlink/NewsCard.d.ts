import * as React from "react";
import * as Types from "./types";

declare function NewsCard(props: {
  as?: React.ElementType;
  image?: Types.Asset.Image;
  titleTag?: Types.Basic.HeadingTag;
  title?: React.ReactNode;
  text?: React.ReactNode;
  link?: Types.Basic.Link;
  linkText?: React.ReactNode;
}): React.JSX.Element;
