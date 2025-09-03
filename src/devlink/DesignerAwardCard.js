"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function DesignerAwardCard({
  as: _Component = _Builtin.Block,
  icon = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/68876874b9a382c6b245ba85_clock.png",
  title = "1000+",
  text = "Customers served",
  withText = true,
}) {
  return (
    <_Component
      className="designer-hero-box"
      id="w-node-_26e9b51e-9ccd-4edd-9166-a7285bf258bd-5bf258bd"
      tag="div"
    >
      <_Builtin.Image
        loading="lazy"
        width="17.5"
        height="auto"
        alt=""
        src={icon}
      />
      <_Builtin.Block className="h9-v2 color-heading-v2" tag="div">
        {title}
      </_Builtin.Block>
      {withText ? (
        <_Builtin.Block className="h11-v2 is--dark-grey" tag="div">
          {text}
        </_Builtin.Block>
      ) : null}
    </_Component>
  );
}
