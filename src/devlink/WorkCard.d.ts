import * as React from "react";
import * as Types from "./types";

declare function WorkCard(props: {
  as?: React.ElementType;
  image?: Types.Asset.Image;
  imageAltText?: Types.Basic.AltText;
  authorImage?: Types.Asset.Image;
  author?: React.ReactNode;
  jobName?: React.ReactNode;
  jobAddress?: React.ReactNode;
  jobTag?: React.ReactNode;
  rating?: React.ReactNode;
}): React.JSX.Element;
