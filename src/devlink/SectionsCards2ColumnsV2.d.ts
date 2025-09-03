import * as React from "react";
import * as Types from "./types";

declare function SectionsCards2ColumnsV2(props: {
  as?: React.ElementType;
  sectionHeaderV2Variant?: "Base" | "Long Title";
  sectionHeaderV2Label?: React.ReactNode;
  sectionHeaderV2HideTitle?: Types.Visibility.VisibilityConditions;
  sectionHeaderV2Title?: React.ReactNode;
  sectionHeaderV2HideIntroText?: Types.Visibility.VisibilityConditions;
  sectionHeaderV2IntroText?: React.ReactNode;
  sectionHeaderV2ShowScrollIcon?: Types.Visibility.VisibilityConditions;
  sectionHeaderV2ShowLink?: Types.Visibility.VisibilityConditions;
  sectionHeaderV2BtnText?: React.ReactNode;
  sectionHeaderV2BtnLink?: Types.Basic.Link;
  sectionHeaderV2Show2ndIntro?: Types.Visibility.VisibilityConditions;
  sectionHeaderV2SecondIntroText?: React.ReactNode;
  normalCard1Title?: React.ReactNode;
  normalCard1Image?: Types.Asset.Image;
  normalCard1Link?: Types.Basic.Link;
  normalCard2Title?: React.ReactNode;
  normalCard2Image?: Types.Asset.Image;
  normalCard2Link?: Types.Basic.Link;
}): React.JSX.Element;
