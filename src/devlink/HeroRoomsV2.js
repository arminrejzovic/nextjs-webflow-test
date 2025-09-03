"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function HeroRoomsV2({
  as: _Component = _Builtin.Section,
  title = "Closets Anywhere",
  image = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/679397494655096588769b06_closets-anywhere.webp",
}) {
  return (
    <_Component
      className="hero-closets-v2 section-anchor-v2"
      grid={{
        type: "section",
      }}
      tag="section"
      id="overview"
    >
      <_Builtin.Image
        className="hero-closets-v2__bg-image"
        loading="eager"
        width="auto"
        height="auto"
        alt=""
        src={image}
      />
      <_Builtin.Block className="hero-closets-v2__overlay" tag="div" />
      <_Builtin.Block className="hero-closets-v2__content" tag="div">
        <_Builtin.Block className="container-v2" tag="div">
          <_Builtin.Block className="hero-closets-v2__content__inner" tag="div">
            <_Builtin.Heading className="h1-v2 is--white-v2" tag="h1">
              {title}
            </_Builtin.Heading>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
