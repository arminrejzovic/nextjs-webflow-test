"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function AreaZipCard({
  as: _Component = _Builtin.Block,
  longName = "Long city name, STATE",
  zip = "91503",
}) {
  return (
    <_Component
      className="area-zip-grid__item"
      id="w-node-f813ec09-2f8f-f25b-c177-876550c7ef41-50c7ef41"
      tag="div"
    >
      <_Builtin.Block className="h10-v2 is--black-2-v2" tag="div">
        {longName}
      </_Builtin.Block>
      <_Builtin.Block className="h9-v2 color-heading-v2 is--bold" tag="div">
        {zip}
      </_Builtin.Block>
    </_Component>
  );
}
