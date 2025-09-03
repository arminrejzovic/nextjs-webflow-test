import * as React from "react";
import * as Types from "./types";

declare function PdpBeforeAfterV2(props: {
  as?: React.ElementType;
  sectionHeaderV2Label?: React.ReactNode;
  sectionHeaderV2Title?: React.ReactNode;
  sectionHeaderV2HideIntroText?: Types.Visibility.VisibilityConditions;
  sectionHeaderV2IntroText?: React.ReactNode;
  imageBefore?: Types.Asset.Image;
  imageAfter?: Types.Asset.Image;
}): React.JSX.Element;
