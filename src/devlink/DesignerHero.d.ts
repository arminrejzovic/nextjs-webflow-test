import * as React from "react";
import * as Types from "./types";

declare function DesignerHero(props: {
  as?: React.ElementType;
  jobTitle?: React.ReactNode;
  name?: React.ReactNode;
  employeeCity?: React.ReactNode;
  employeeRating?: React.ReactNode;
  image?: Types.Asset.Image;
  boxesSlot?: Types.Devlink.Slot;
}): React.JSX.Element;
