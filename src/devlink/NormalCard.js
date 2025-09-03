"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function NormalCard({
  as: _Component = _Builtin.Link,
  title = "Garages",
  image = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/67abb41f98e86bb683db10bb_Discover-Garages.webp",

  link = {
    href: "#",
  },
}) {
  return (
    <_Component
      className="normal-card-item"
      button={false}
      block="inline"
      options={link}
    >
      <_Builtin.Image
        className="normal-card-item__img"
        width="auto"
        height="auto"
        loading="lazy"
        alt=""
        src={image}
      />
      <_Builtin.VFlex className="normal-card-item__text" tag="div">
        <_Builtin.Heading className="h4-v2 is--white-v2" tag="h3">
          {title}
        </_Builtin.Heading>
      </_Builtin.VFlex>
      <_Builtin.Block className="normal-card-item__overlay" tag="div" />
      <_Builtin.Block className="normal-card-item__overlay-2" tag="div" />
    </_Component>
  );
}
