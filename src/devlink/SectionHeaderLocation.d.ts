import * as React from "react";
import * as Types from "./types";

declare function SectionHeaderLocation(props: {
  as?: React.ElementType;
  variant?:
    | "Base"
    | "py-64"
    | "pt-64"
    | "pt-64-pb-32"
    | "H5 pt-64-pb-32"
    | "pb-64"
    | "Left align/pb-16"
    | "pb-32";
  hideTitle?: Types.Visibility.VisibilityConditions;
  titleTag?: Types.Basic.HeadingTag;
  title?: React.ReactNode;
  hideText?: Types.Visibility.VisibilityConditions;
  text?: React.ReactNode;
  gridSlot?: Types.Devlink.Slot;
}): React.JSX.Element;
