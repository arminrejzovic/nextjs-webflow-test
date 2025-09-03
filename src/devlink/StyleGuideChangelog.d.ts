import * as React from "react";
import * as Types from "./types";

declare function StyleGuideChangelog(props: {
  as?: React.ElementType;
  type?: "Changed" | "Added" | "Deleted";
  date?: React.ReactNode;
  title?: React.ReactNode;
  text?: React.ReactNode;
}): React.JSX.Element;
