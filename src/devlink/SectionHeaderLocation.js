"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function SectionHeaderLocation({
  as: _Component = _Builtin.Section,
  variant = "Base",
  hideTitle = true,
  titleTag = "h2",
  title = "Recent work",
  hideText = true,
  text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut purus sit amet nisi accumsan luctus. Donec finibus, tortor sed mattis egestas, nibh metus eleifend orci, ut elementum quam dolor sed mass.",
  gridSlot,
}) {
  const _styleVariantMap = {
    Base: "",
    "py-64": "w-variant-c3945ad5-e9cf-84d0-2301-8a474e4df06a",
    "pt-64": "w-variant-59ec16b0-26b8-cba0-0ed6-fcb4a8e32171",
    "pt-64-pb-32": "w-variant-dddd13cc-b343-3d1b-04f8-e5132dc4ebf7",
    "H5 pt-64-pb-32": "w-variant-aa6e7972-a865-2cb4-d096-cd2b12b57b2f",
    "pb-64": "w-variant-e3542654-2fc5-bd56-8862-66719d654be5",
    "Left align/pb-16": "w-variant-6f544472-8d24-ad9f-c636-525ba9f0a21d",
    "pb-32": "w-variant-d7150789-e3ca-0ccf-edaf-037ced52b1a9",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component
      className={`section-4 ${_activeStyleVariant}`}
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
        <_Builtin.VFlex
          className={`section-header-loc ${_activeStyleVariant}`}
          tag="div"
        >
          {hideTitle ? (
            <_Builtin.Heading
              className={`section-header-title ${_activeStyleVariant}`}
              tag={titleTag}
            >
              {title}
            </_Builtin.Heading>
          ) : null}
          {hideText ? (
            <_Builtin.Block
              className={`section-header-para ${_activeStyleVariant}`}
              tag="div"
            >
              {text}
            </_Builtin.Block>
          ) : null}
        </_Builtin.VFlex>
      </_Builtin.BlockContainer>
    </_Component>
  );
}
