"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function DesignerGrid({
  as: _Component = _Builtin.Section,
  gridSlot,
  footerSlot,
}) {
  return (
    <_Component
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.BlockContainer
        className="container-v2"
        grid={{
          type: "container",
        }}
        tag="div"
      >
        <_Builtin.Block className="designer-grid" tag="div">
          {gridSlot}
        </_Builtin.Block>
        <_Builtin.Block className="slot-footer" tag="div">
          {footerSlot}
        </_Builtin.Block>
      </_Builtin.BlockContainer>
    </_Component>
  );
}
