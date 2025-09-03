"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function SectionSpacing({
  as: _Component = _Builtin.Section,
  variant = "Base",
  sectionSlot,
}) {
  const _styleVariantMap = {
    Base: "",
    "py-64": "w-variant-5e341d84-d5b3-e9a3-c574-6397bbe46066",
    "py-32": "w-variant-3e5d60d0-75f9-a1c0-ea27-592526cb961e",
    "pt-64": "w-variant-85ceec97-647a-09d9-5c95-9acc4c377648",
    "pb-64": "w-variant-4f38ae9f-4084-83c1-8efb-466e9a6003cf",
    "pt-32": "w-variant-ae7a8404-7376-7008-721a-c8f958d14a55",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component
      className={`section-spacing ${_activeStyleVariant}`}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.Block tag="div">{sectionSlot}</_Builtin.Block>
      <_Builtin.Block
        className={`space-8px ${_activeStyleVariant}`}
        tag="div"
      />
    </_Component>
  );
}
