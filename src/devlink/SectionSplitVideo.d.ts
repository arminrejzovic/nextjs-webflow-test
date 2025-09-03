import * as React from "react";
import * as Types from "./types";

declare function SectionSplitVideo(props: {
  as?: React.ElementType;
  image?: Types.Asset.Image;
  heading?: React.ReactNode;
  description?: React.ReactNode;
  youtubeVideoId?: Types.Basic.IdTextInput;
  ctaLink?: Types.Basic.Link;
  ctaText?: React.ReactNode;
  vidzflowEmbed?: Types.Basic.RichTextChildren;
}): React.JSX.Element;
