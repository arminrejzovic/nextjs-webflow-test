import * as React from "react";
import * as Types from "./types";

declare function WorkGrid(props: {
  as?: React.ElementType;
  variant?: "Base" | "3col grid" | "Videos grid";
  areasGrid?: Types.Devlink.Slot;
  slotFooter?: Types.Devlink.Slot;
}): React.JSX.Element;
