"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function StyleGuideHeader({
  as: _Component = _Builtin.Block,
  title = "Typography",
  text = "Defines the brand’s color palette, including primary, secondary, and neutral tones, to ensure visual consistency, accessibility, and effective UI communication.",
}) {
  return (
    <_Component className="sg-header" tag="div">
      <_Builtin.Block className="sg-title" tag="div">
        {title}
      </_Builtin.Block>
      <_Builtin.Block className="h10-v2" tag="div">
        {text}
      </_Builtin.Block>
    </_Component>
  );
}
