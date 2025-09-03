import * as React from "react";
import * as Types from "./types";

declare function SectionSpacing(props: {
  as?: React.ElementType;
  variant?: "Base" | "py-64" | "py-32" | "pt-64" | "pb-64" | "pt-32";
  sectionSlot?: Types.Devlink.Slot;
}): React.JSX.Element;
