import * as React from "react";
import * as Types from "./types";

declare function SplideRoomsCard(props: {
  as?: React.ElementType;
  hideRoomCard1?: Types.Visibility.VisibilityConditions;
  roomCardTitle?: React.ReactNode;
  roomCardIntro?: React.ReactNode;
  roomCardLabel?: React.ReactNode;
  roomCardLink?: Types.Basic.Link;
  roomCardImage?: Types.Asset.Image;
}): React.JSX.Element;
