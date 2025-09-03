import * as React from "react";
import * as Types from "./types";

declare function DesignerCard(props: {
  as?: React.ElementType;
  cardLink?: Types.Basic.Link;
  avatar?: Types.Asset.Image;
  nameTag?: Types.Basic.HeadingTag;
  name?: React.ReactNode;
  jobTitle?: React.ReactNode;
  ratingValue?: React.ReactNode;
}): React.JSX.Element;
