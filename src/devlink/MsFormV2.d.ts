import * as React from "react";
import * as Types from "./types";

declare function MsFormV2(props: {
  as?: React.ElementType;
  pbReset?: Types.Builtin.Text;
  ptReset?: Types.Builtin.Text;
  subheadingVisibility?: Types.Visibility.VisibilityConditions;
  subheadingText?: React.ReactNode;
  title?: React.ReactNode;
  text?: React.ReactNode;
}): React.JSX.Element;
