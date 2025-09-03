"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function HeroImage({
  as: _Component = _Builtin.Block,
  image = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/68835dd006bf2ec2f9dcfdfa_Frame%202072750702.webp",
  altText = "__wf_reserved_inherit",
}) {
  return (
    <_Component className="hero-image-section" tag="div">
      <_Builtin.BlockContainer
        className="container-v2"
        grid={{
          type: "container",
        }}
        tag="div"
      >
        <_Builtin.Block className="hero-image" tag="div">
          <_Builtin.Image
            className="hero-image__img"
            loading="lazy"
            width="auto"
            height="auto"
            src={image}
          />
        </_Builtin.Block>
      </_Builtin.BlockContainer>
    </_Component>
  );
}
