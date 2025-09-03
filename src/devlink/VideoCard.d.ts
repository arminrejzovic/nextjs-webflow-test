import * as React from "react";
import * as Types from "./types";

declare function VideoCard(props: {
  as?: React.ElementType;
  image?: Types.Asset.Image;
  titleTag?: Types.Basic.HeadingTag;
  title?: React.ReactNode;
  text?: React.ReactNode;
  videoTime?: React.ReactNode;
}): React.JSX.Element;
