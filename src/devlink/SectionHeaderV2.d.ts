import * as React from "react";
import * as Types from "./types";

declare function SectionHeaderV2(props: {
  as?: React.ElementType;
  label?: React.ReactNode;
  hideTitle?: Types.Visibility.VisibilityConditions;
  title?: React.ReactNode;
  titleTag?: Types.Basic.HeadingTag;
  hideIntroText?: Types.Visibility.VisibilityConditions;
  introText?: React.ReactNode;
  introTextMobile?: React.ReactNode;
  showScrollIcon?: Types.Visibility.VisibilityConditions;
  showLink?: Types.Visibility.VisibilityConditions;
  btnText?: React.ReactNode;
  btnLink?: Types.Basic.Link;
  show2ndIntro?: Types.Visibility.VisibilityConditions;
  secondIntroText?: React.ReactNode;
  variant?: "Base" | "Long Title";
  hideSubHeading?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
