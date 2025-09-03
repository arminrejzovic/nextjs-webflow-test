"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function LpImageBoxLinkV2({
  as: _Component = _Builtin.Block,

  link = {
    href: "#",
  },

  image = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/67c8752399612ed624567f6a_Walk-in-Closet-Spring-Blossom.webp",
  text = "Walk-in Closet",
}) {
  return (
    <_Component
      className="organize-grid-v2__item"
      id="w-node-_5d847a13-f434-16fa-9196-db0a33a81b63-33a81b63"
      tag="div"
    >
      <_Builtin.Image
        className="organize-grid-v2__item__image"
        loading="lazy"
        width="auto"
        height="auto"
        alt=""
        src={image}
      />
      <_Builtin.Block className="organize-grid-v2__content" tag="div">
        <_Builtin.Block className="organize-grid-v2__text" tag="div">
          <_Builtin.Block
            className="h10-v2 is--white-v2 weight--black"
            tag="div"
          >
            {text}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
