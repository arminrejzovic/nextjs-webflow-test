"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { IconArrowRight2 } from "./IconArrowRight2";

export function RoomCard({
  as: _Component = _Builtin.Link,
  title = "Entryway Closets",
  intro = "Organization at your doorstep.",
  label = "Elevate your space.",

  link = {
    href: "#",
  },

  image = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/67939d4a6588b74915cebf62_Entryway-Closets.webp",
  imageAltText = "__wf_reserved_inherit",
}) {
  return (
    <_Component
      className="rooms-grid-item"
      button={false}
      block="inline"
      options={link}
    >
      <_Builtin.Image
        className="rooms-grid-item__img"
        loading="lazy"
        width="auto"
        height="auto"
        src={image}
      />
      <_Builtin.VFlex className="rooms-grid-item__text" tag="div">
        <_Builtin.VFlex className="rooms-grid-item__content" tag="div">
          <_Builtin.Heading className="h6-v2 is--white" tag="h3">
            {title}
          </_Builtin.Heading>
          <_Builtin.Block className="rooms-grid-item__intro" tag="div">
            {intro}
          </_Builtin.Block>
        </_Builtin.VFlex>
        <_Builtin.VFlex className="rooms-grid-item__cta" tag="div">
          <_Builtin.Block className="rooms-grid-item__label" tag="div">
            {label}
          </_Builtin.Block>
          <_Builtin.Block className="rooms-grid-item__arrow" tag="div">
            <IconArrowRight2 />
          </_Builtin.Block>
        </_Builtin.VFlex>
      </_Builtin.VFlex>
      <_Builtin.Block className="rooms-grid-item__overlay" tag="div" />
      <_Builtin.Block className="rooms-grid-item__overlay--right" tag="div" />
    </_Component>
  );
}
