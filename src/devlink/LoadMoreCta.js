"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { IconArrowRight2 } from "./IconArrowRight2";

export function LoadMoreCta({
  as: _Component = _Builtin.Block,
  buttonText = "See More",

  link = {
    href: "#",
  },

  variant = "Base",
  showDownArrow = false,
  hideRightArrow = true,
  buttonProps = {},
}) {
  const _styleVariantMap = {
    Base: "",
    "mt-64": "w-variant-c7f8886a-a0a7-215b-c0d6-911685c0ee91",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component
      className={`section-footer__cta ${_activeStyleVariant}`}
      tag="div"
    >
      <_Builtin.Link
        className={`btn-v2 btn-v2--secondary is--blue ${_activeStyleVariant}`}
        button={false}
        block="inline"
        options={link}
        {...buttonProps}
      >
        <_Builtin.Block tag="div">{buttonText}</_Builtin.Block>
        {hideRightArrow ? (
          <_Builtin.Block
            className={`btn-arrow-right ${_activeStyleVariant}`}
            tag="div"
          >
            <IconArrowRight2 />
          </_Builtin.Block>
        ) : null}
        {showDownArrow ? (
          <_Builtin.Block
            className={`btn-arrow-down ${_activeStyleVariant}`}
            tag="div"
          >
            <IconArrowRight2 />
          </_Builtin.Block>
        ) : null}
      </_Builtin.Link>
    </_Component>
  );
}
