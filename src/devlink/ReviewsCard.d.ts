import * as React from "react";
import * as Types from "./types";

declare function ReviewsCard(props: {
  as?: React.ElementType;
  variant?: "Base" | "Stacked";
  link?: Types.Basic.Link;
  image?: Types.Asset.Image;
  avatarImage?: Types.Asset.Image;
  author?: React.ReactNode;
  reviewLocation?: React.ReactNode;
  reviewIntro?: React.ReactNode;
  linkText?: React.ReactNode;
  sourcePlatformImage?: Types.Asset.Image;
}): React.JSX.Element;
