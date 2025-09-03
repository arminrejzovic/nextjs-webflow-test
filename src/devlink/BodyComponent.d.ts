import * as React from "react";
import * as Types from "./types";

declare function BodyComponent(props: {
  as?: React.ElementType;
  slot?: Types.Slots.SlotContent;
}): React.JSX.Element;
