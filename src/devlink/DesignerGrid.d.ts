import * as React from "react";
import * as Types from "./types";

declare function DesignerGrid(props: {
  as?: React.ElementType;
  gridSlot?: Types.Devlink.Slot;
  footerSlot?: Types.Devlink.Slot;
}): React.JSX.Element;
