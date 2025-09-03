"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function LpCardStyle1({
  as: _Component = _Builtin.Block,
  image = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/68403c63b1883898870f861c_b0a10f2fbf5bab0845267c24c0abb95749a78b68.webp",
  text = "That closet that holds everything except what you need?",
}) {
  return (
    <_Component
      className="id-text-img__box_2"
      id="w-node-c9083dbc-dbd5-44fb-434f-1b765a4eb27a-5a4eb27a"
      tag="div"
    >
      <_Builtin.Image
        className="id-text-img__box_2__img"
        loading="lazy"
        width="auto"
        height="auto"
        alt=""
        src={image}
      />
      <_Builtin.Block className="s-text-img__box__content" tag="div">
        <_Builtin.Block className="h10-v2 lh-200 color-heading-v2" tag="div">
          {text}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
