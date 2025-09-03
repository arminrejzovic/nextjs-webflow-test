"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { IconArrowRight } from "./IconArrowRight";
import { IconArowUpRight } from "./IconArowUpRight";

export function CardV2({
  as: _Component = _Builtin.Link,
  title = "Custom Closets",
  textVisibility = true,
  text = "Choose from our four collections. Each collection can be customized to support any space.",

  cardLink = {
    href: "#",
  },

  btnVisibility = true,
  buttonText = "Learn more",
  image = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/676aa9a064b42023a3d793b9_37d1dc5e0700959f980a6041f424bd9a.webp",
  textMobile = "Choose from our four elegant collections, and customize every detail to make it your own.",
}) {
  return (
    <_Component
      className="card-v2"
      button={false}
      block="inline"
      options={cardLink}
    >
      <_Builtin.VFlex className="card-v2__header" tag="div">
        <_Builtin.Heading className="card-v2__title" tag="h2">
          {title}
        </_Builtin.Heading>
        <_Builtin.Block className="card-v2__content" tag="div">
          {textVisibility ? (
            <_Builtin.Block className="card-v2__text" tag="div">
              {text}
            </_Builtin.Block>
          ) : null}
          {btnVisibility ? (
            <_Builtin.Block
              className="btn-v2 btn-v2--text btn-v2--white"
              tag="div"
            >
              <_Builtin.Block tag="div">{buttonText}</_Builtin.Block>
              <IconArrowRight />
            </_Builtin.Block>
          ) : null}
        </_Builtin.Block>
      </_Builtin.VFlex>
      <_Builtin.Block className="card-v2__mobile-text" tag="div">
        <_Builtin.Block className="h12-v2 is--white-v2 lh-130" tag="div">
          {textMobile}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Image
        className="card-v2__img"
        loading="lazy"
        width="Auto"
        height="auto"
        alt=""
        src={image}
      />
      <_Builtin.Block className="card-v2__icon" tag="div">
        <IconArowUpRight />
      </_Builtin.Block>
      <_Builtin.Block className="card-v2__overlay" tag="div" />
      <_Builtin.Block className="card-v2__sidebar" tag="div" />
      <_Builtin.HtmlEmbed
        className="hidden-css"
        value="%3Cstyle%3E%0A%09%40media%20screen%20and%20(max-width%3A%20992px)%20%7B%0A%20%20%20%20.card-v2__icon%20%7B%0A%20%20%20%20%09bottom%3A%20auto%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%3C%2Fstyle%3E"
      />
    </_Component>
  );
}
