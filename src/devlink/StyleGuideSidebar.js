"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { ElementsSidebarLinks } from "./ElementsSidebarLinks";
import { PatternsSidebarLinks } from "./PatternsSidebarLinks";

export function StyleGuideSidebar({
  as: _Component = _Builtin.Block,
  title = "Elements",
  hideElementsLinks = true,
  showPatternsLinks = false,
}) {
  return (
    <_Component className="sg-sidebar" tag="div">
      {hideElementsLinks ? (
        <_Builtin.Block className="sg-sidebar__links" tag="div">
          <_Builtin.Block className="sg-sidebar__title" tag="div">
            {title}
          </_Builtin.Block>
          <ElementsSidebarLinks />
        </_Builtin.Block>
      ) : null}
      {showPatternsLinks ? (
        <_Builtin.Block className="sg-sidebar__links" tag="div">
          <_Builtin.Block className="sg-sidebar__title" tag="div">
            {title}
          </_Builtin.Block>
          <PatternsSidebarLinks />
        </_Builtin.Block>
      ) : null}
    </_Component>
  );
}
