"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { IconPhone } from "./IconPhone";

export function LpCtaBarFull({
  as: _Component = _Builtin.Block,
  variant = "Base",
}) {
  const _styleVariantMap = {
    Base: "",
    "Top Margin": "w-variant-9a74bf6c-baab-f165-998c-6e671d0eb42c",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component className={`cta-bar-v2 full ${_activeStyleVariant}`} tag="div">
      <_Builtin.Block
        className={`cta-bar-v2__inner ${_activeStyleVariant}`}
        tag="div"
      >
        <_Builtin.Block
          className={`h9-v2 is--white-v2 ${_activeStyleVariant}`}
          tag="div"
        >
          {"Meet with a designer near you. Save "}
          <_Builtin.Strong>{"50%"}</_Builtin.Strong>
          {"* when you schedule online or call:"}
        </_Builtin.Block>
        <_Builtin.Block
          className={`flex-items-v2 ${_activeStyleVariant}`}
          tag="div"
        >
          <_Builtin.Link
            className={`btn-v2 ${_activeStyleVariant}`}
            button={false}
            block="inline"
            options={{
              href: "tel:1-800-434-6018",
            }}
          >
            <IconPhone />
            <_Builtin.Block tag="div">{"1-800-434-6018"}</_Builtin.Block>
          </_Builtin.Link>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.HtmlEmbed value="%3Cstyle%3E%0A%20%20%40media%20screen%20and%20(max-width%3A%20767px)%20%7B%0A%20%20%20%20.cta-bar-v2__inner%20.h9-v2%20%7B%0A%20%20%20%20%20%20max-width%3A%20300px%3B%0A%20%20%20%20%20%20text-align%3A%20center%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%3C%2Fstyle%3E" />
    </_Component>
  );
}
