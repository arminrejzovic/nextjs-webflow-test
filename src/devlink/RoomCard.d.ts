import * as React from "react";
import * as Types from "./types";

declare function RoomCard(props: {
  as?: React.ElementType;
  title?: React.ReactNode;
  intro?: React.ReactNode;
  label?: React.ReactNode;
  link?: Types.Basic.Link;
  image?: Types.Asset.Image;
  imageAltText?: Types.Basic.AltText;
}): React.JSX.Element;
