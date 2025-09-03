"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function LpMomCardStyle2({
  as: _Component = _Builtin.Block,
  title = "New Mom",
  backgroundImage = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/680a2715bd6b7e67a8068843_b751fcec9b36a7ba340288da8baa7f711e5bbc90.webp",
}) {
  return (
    <_Component
      className="splide__slide"
      id="w-node-_7d8be14a-b8b1-008c-fd7b-b677c58797f0-c58797f0"
      tag="div"
    >
      <_Builtin.Block className="fd-card style-2" tag="div">
        <_Builtin.Image
          className="fd-card__image"
          width="auto"
          height="auto"
          loading="lazy"
          alt=""
          src={backgroundImage}
        />
        <_Builtin.Block className="fd-card__overlay is--gradient" tag="div" />
        <_Builtin.Block className="h6-v2 is--white-v2 relative" tag="div">
          {title}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
