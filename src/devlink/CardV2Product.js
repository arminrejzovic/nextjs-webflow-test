"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { IconArowUpRight } from "./IconArowUpRight";

export function CardV2Product({
  as: _Component = _Builtin.Link,
  title = "Endless Customization",
  image = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/676aa9a064b42023a3d793b9_37d1dc5e0700959f980a6041f424bd9a.webp",

  link = {
    href: "#",
  },

  text = "Start working smarter.",
}) {
  return (
    <_Component
      className="card-v2-product"
      button={false}
      block="inline"
      options={link}
    >
      <_Builtin.VFlex className="card-v2-product__header" tag="div">
        <_Builtin.Heading className="h5-v2 is--white-v2" tag="h3">
          {title}
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
      <_Builtin.Block className="card-v2-product__overlay" tag="div" />
      <_Builtin.Block className="card-v2-product__bar" tag="div">
        <_Builtin.Block tag="div">{text}</_Builtin.Block>
        <IconArowUpRight />
      </_Builtin.Block>
    </_Component>
  );
}
