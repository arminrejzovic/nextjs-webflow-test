"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function LpCardStyle4({
  as: _Component = _Builtin.Block,
  image = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/68403c63b1883898870f861c_b0a10f2fbf5bab0845267c24c0abb95749a78b68.webp",
  content = "",
}) {
  return (
    <_Component
      className="id-text-img__box"
      id="w-node-_153953b9-3db8-7be4-f637-e426e71edd3b-e71edd3b"
      tag="div"
    >
      <_Builtin.Image
        className="id-text-img__box__image-simple"
        width="auto"
        height="auto"
        loading="lazy"
        alt=""
        src={image}
      />
      <_Builtin.Block className="id-text-img__box-content" tag="div">
        <_Builtin.RichText
          className="h9-v2 lh-166 color-heading-v2 is--h8-mob"
          tag="div"
          slot=""
        >
          {content}
        </_Builtin.RichText>
      </_Builtin.Block>
    </_Component>
  );
}
