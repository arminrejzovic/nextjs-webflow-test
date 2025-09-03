"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function CardImageTextV2({
  as: _Component = _Builtin.Block,
  image = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/6810bf89ad6bdfeeaf218373_Walk-In%20Closets.webp",
  title = "Walk-In Closets",
  subtitle = "Stylish. Spacious. Elevated.",
  text = "Our custom walk-in closets feature boutique-style zones, optional seating and lighting, all with expert design that adds everyday luxury and long-term value.",

  link = {
    href: "/schedulerequests-ms",
  },

  linkText = "Learn More",
}) {
  return (
    <_Component
      className="images-grid__item"
      id="w-node-_525f84f1-1c8a-2797-449d-43c01b502f0f-1b502f0f"
      tag="div"
    >
      <_Builtin.Image
        className="images-grid__item__image"
        loading="lazy"
        width="auto"
        height="auto"
        alt=""
        src={image}
      />
      <_Builtin.Block className="images-grid__item__content" tag="div">
        <_Builtin.Block
          className="h4-v2 text-align--center mobile-h5-v2"
          tag="div"
        >
          {title}
        </_Builtin.Block>
        <_Builtin.Block
          className="h6-v2 text-align--center mobile-h8-v2"
          tag="div"
        >
          {subtitle}
        </_Builtin.Block>
        <_Builtin.Block
          className="h9-v2 text-align--center hidden-tablet"
          tag="div"
        >
          {text}
        </_Builtin.Block>
        <_Builtin.Link
          className="btn-v2 btn-v2--top-auto"
          button={false}
          block="inline"
          options={link}
        >
          <_Builtin.Block tag="div">{linkText}</_Builtin.Block>
        </_Builtin.Link>
      </_Builtin.Block>
    </_Component>
  );
}
