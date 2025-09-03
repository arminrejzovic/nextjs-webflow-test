"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function LpCardStyle2({
  as: _Component = _Builtin.Block,
  image = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/6840557b9cb0988abe6e79f4_03%20default.webp",
  content = "",
}) {
  return (
    <_Component
      className="im-card"
      id="w-node-_1b594ebd-fa54-9228-afcd-b3a847e671e1-47e671e1"
      tag="div"
    >
      <_Builtin.Image
        className="im-card__bg-image"
        loading="lazy"
        width="70"
        height="auto"
        alt=""
        src={image}
      />
      <_Builtin.Block className="im-card__overlay" tag="div" />
      <_Builtin.Block className="im-card__content" tag="div">
        <_Builtin.RichText
          className="h9-v2 is--white-v2 text-align--center lh-166"
          tag="div"
          slot=""
        >
          {content}
        </_Builtin.RichText>
      </_Builtin.Block>
    </_Component>
  );
}
