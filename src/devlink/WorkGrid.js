"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function WorkGrid({
  as: _Component = _Builtin.Section,
  variant = "Base",
  areasGrid,
  slotFooter,
}) {
  const _styleVariantMap = {
    Base: "",
    "3col grid": "w-variant-70d36b4f-7b3a-3b5d-e6ab-20b8ef467e8b",
    "Videos grid": "w-variant-07e0b10b-780d-30fa-a121-02176afcd8e4",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.BlockContainer
        className={`container-v2 ${_activeStyleVariant}`}
        grid={{
          type: "container",
        }}
        tag="div"
      >
        <_Builtin.Block
          className={`areas-grid ${_activeStyleVariant}`}
          tag="div"
        >
          {areasGrid}
        </_Builtin.Block>
        <_Builtin.Block
          className={`slot-footer ${_activeStyleVariant}`}
          tag="div"
        >
          {slotFooter}
        </_Builtin.Block>
      </_Builtin.BlockContainer>
    </_Component>
  );
}
