import * as React from "react";
import * as Types from "./types";

declare function BlogPostV2(props: {
  as?: React.ElementType;
  link?: Types.Basic.Link;
  featuredImage?: Types.Asset.Image;
  featuredImageAltText?: Types.Basic.AltText;
  publishDate?: React.ReactNode;
  name?: React.ReactNode;
  metaDescription?: React.ReactNode;
  postLink?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
