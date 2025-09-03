import * as React from "react";
import * as Types from "./types";

declare function BlogCard(props: {
  as?: React.ElementType;
  image?: Types.Asset.Image;
  name?: React.ReactNode;
  excerpt?: React.ReactNode;
  date?: React.ReactNode;
  link?: Types.Basic.Link;
}): React.JSX.Element;
