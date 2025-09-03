"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function LpCardStyle3({
  as: _Component = _Builtin.Block,
  tag = "School Morning",
  text = "Shirts? Found. Socks? Matched. Kids? Shockingly ready on time.",
  image = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/6840557b9cb0988abe6e79f4_03%20default.webp",
}) {
  return (
    <_Component
      className="id-card"
      id="w-node-_084b6ed4-3cc8-ca33-5af9-24ca784bf701-784bf701"
      tag="div"
    >
      <_Builtin.Image
        className="id-card__bg-image"
        loading="lazy"
        width="auto"
        height="auto"
        alt=""
        src={image}
      />
      <_Builtin.Block className="id-card__overlay" tag="div" />
      <_Builtin.Block className="id-card__content" tag="div">
        <_Builtin.Block className="id-card__tag" tag="div">
          {tag}
        </_Builtin.Block>
        <_Builtin.Block className="id-card__text" tag="div">
          {text}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
