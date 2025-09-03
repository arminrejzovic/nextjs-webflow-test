"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { IconPhone } from "./IconPhone";

export function LpCtaBarV2({
  as: _Component = _Builtin.Block,
  variant = "Base",
}) {
  const _styleVariantMap = {
    Base: "",
    "Orange Pink": "w-variant-ee21d2df-0d29-8364-b0c4-0799d607b267",
    Full: "w-variant-3c731f4d-7597-922f-cee4-4a42dc035384",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component className={`cta-bar-v2 ${_activeStyleVariant}`} tag="div">
      <_Builtin.Block
        className={`cta-bar-v2__inner ${_activeStyleVariant}`}
        tag="div"
      >
        <_Builtin.Block
          className={`h9-v2 is--white-v2 ${_activeStyleVariant}`}
          tag="div"
        >
          {
            "Designed in 2 hours. Custom-built in 9-14 days. Installed in 4 hours."
          }
        </_Builtin.Block>
        <_Builtin.Block
          className={`flex-items-v2 ${_activeStyleVariant}`}
          tag="div"
        >
          <_Builtin.Block
            className={`h9-v2 is--white-v2 is--bold ${_activeStyleVariant}`}
            tag="div"
          >
            {"Schedule Now"}
          </_Builtin.Block>
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
      <_Builtin.HtmlEmbed value="%3Cstyle%3E%0A%20%20%40media%20screen%20and%20(max-width%3A%20767px)%20%7B%0A%20%20%20%20.cta-bar-v2__inner%20.h9-v2%20%7B%0A%20%20%20%20%20%20max-width%3A%20200px%3B%0A%20%20%20%20%20%20text-align%3A%20center%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%3C%2Fstyle%3E" />
    </_Component>
  );
}
