import * as React from "react";
import * as Types from "./types";

declare function TestimonialCardV2(props: {
  as?: React.ElementType;
  userImage?: Types.Asset.Image;
  userName?: React.ReactNode;
  location?: React.ReactNode;
  introtext?: React.ReactNode;
  fullText?: Types.Basic.RichTextChildren;
}): React.JSX.Element;
