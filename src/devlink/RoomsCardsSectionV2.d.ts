import * as React from "react";
import * as Types from "./types";

declare function RoomsCardsSectionV2(props: {
  as?: React.ElementType;
  sectionHeaderV2Label?: React.ReactNode;
  sectionHeaderV2Title?: React.ReactNode;
  sectionHeaderV2HideIntroText?: Types.Visibility.VisibilityConditions;
  sectionHeaderV2IntroText?: React.ReactNode;
  sectionHeaderV2ShowScrollIcon?: Types.Visibility.VisibilityConditions;
  sectionHeaderV2ShowLink?: Types.Visibility.VisibilityConditions;
  sectionHeaderV2BtnLink?: Types.Basic.Link;
  hideRoomCard1?: Types.Visibility.VisibilityConditions;
  roomCard1Title?: React.ReactNode;
  roomCard1Intro?: React.ReactNode;
  roomCard1Label?: React.ReactNode;
  roomCard1Link?: Types.Basic.Link;
  roomCard1Image?: Types.Asset.Image;
  slotContent?: Types.Slots.SlotContent;
}): React.JSX.Element;
