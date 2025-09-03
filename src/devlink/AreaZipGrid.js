"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function AreaZipGrid({ as: _Component = _Builtin.Block, cardsSlot }) {
  return (
    <_Component tag="div">
      <_Builtin.BlockContainer
        className="container-v2-small"
        grid={{
          type: "container",
        }}
        tag="div"
      >
        <_Builtin.Block className="area-zip-grid" tag="div">
          {cardsSlot}
        </_Builtin.Block>
      </_Builtin.BlockContainer>
    </_Component>
  );
}
