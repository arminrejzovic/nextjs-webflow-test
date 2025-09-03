"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function LocationHeaderSlide({
  as: _Component = _Builtin.Block,
  image = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/681de1bc769a5964d432dd19_810ca101cc70c9a725ab41bc8123a7764c738db0.webp",
  altText = "__wf_reserved_inherit",
}) {
  return (
    <_Component className="splide__slide h-100" tag="div">
      <_Builtin.Block className="img-rounded h-100" tag="div">
        <_Builtin.Image
          className="image-full"
          loading="lazy"
          width="auto"
          height="auto"
          src={image}
        />
        <_Builtin.Block className="img-rounded__gradient_bottom" tag="div" />
      </_Builtin.Block>
    </_Component>
  );
}
