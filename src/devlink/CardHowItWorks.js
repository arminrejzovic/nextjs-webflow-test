"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function CardHowItWorks({
  as: _Component = _Builtin.Block,
  imageDesktop = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/686673f5b9ae6c2dda84e5d1_shiw-1.webp",
  imageMobile = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/686673f5b9ae6c2dda84e5d1_shiw-1.webp",
  number = "1",
  title = "Sign Up & Download",
  text = "Enter your email for immediate access.",
}) {
  return (
    <_Component
      className="shiw-item"
      id="w-node-_23e5a439-00e6-945a-7be0-10a8ae7d4eff-ae7d4eff"
      tag="div"
    >
      <_Builtin.Image
        className="shiw-item__image desktop"
        id="w-node-_23e5a439-00e6-945a-7be0-10a8ae7d4f00-ae7d4eff"
        loading="lazy"
        width="auto"
        height="auto"
        alt=""
        src={imageDesktop}
      />
      <_Builtin.Image
        className="shiw-item__image mobile"
        id="w-node-_780d2977-9769-1f2f-2811-9d0556ee8353-ae7d4eff"
        loading="lazy"
        width="auto"
        height="auto"
        alt=""
        src={imageMobile}
      />
      <_Builtin.Block className="shiw-item__number" tag="div">
        <_Builtin.Block className="h9-v2 is--white-v2 weight--black" tag="div">
          {number}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className="shiw-item__content" tag="div">
        <_Builtin.Block
          className="h9-v2 weight--black is-summer-orange m-h9"
          tag="div"
        >
          {title}
        </_Builtin.Block>
        <_Builtin.Block className="h9-v2 m-h9" tag="div">
          {text}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
