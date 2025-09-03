"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { IconArowUpRight } from "./IconArowUpRight";

export function CardV2Category({
  as: _Component = _Builtin.Link,

  link = {
    href: "#",
  },

  title = "Finishes",
  description = "Largest selection in the industry.",
  image = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/676aa9a064b42023a3d793b9_37d1dc5e0700959f980a6041f424bd9a.webp",
}) {
  return (
    <_Component
      className="card-v2-category"
      id="w-node-fccde182-e64a-aa97-45a3-cd22a695949e-a695949e"
      button={false}
      block="inline"
      options={link}
    >
      <_Builtin.VFlex className="card-v2-category__content" tag="div">
        <_Builtin.Heading className="h4-v2 is--white-v2" tag="h2">
          {title}
        </_Builtin.Heading>
        <_Builtin.Heading className="h8-v2 is--white-v2" tag="h3">
          {description}
        </_Builtin.Heading>
      </_Builtin.VFlex>
      <_Builtin.Image
        className="card-v2-product__img"
        width="Auto"
        height="auto"
        loading="lazy"
        alt=""
        src={image}
      />
      <_Builtin.Block className="card-v2__icon" tag="div">
        <IconArowUpRight />
      </_Builtin.Block>
      <_Builtin.Block className="card-v2-category__overlay" tag="div" />
    </_Component>
  );
}
