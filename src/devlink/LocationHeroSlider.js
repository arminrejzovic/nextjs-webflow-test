"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function LocationHeroSlider({
  as: _Component = _Builtin.Section,
  image1 = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/681de1bc769a5964d432dd19_810ca101cc70c9a725ab41bc8123a7764c738db0.webp",
  image1AltText = "__wf_reserved_inherit",
  splideList,
  image = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/681de1bc769a5964d432dd19_810ca101cc70c9a725ab41bc8123a7764c738db0.webp",
  altText = "__wf_reserved_inherit",
}) {
  return (
    <_Component
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.BlockContainer
        className="container-v2"
        grid={{
          type: "container",
        }}
        tag="div"
      >
        <_Builtin.Block className="location-hero-slide" tag="div">
          <_Builtin.HtmlEmbed
            className="hidden-code"
            value="%3Cstyle%3E%0A%5Bclass*%3D%22splide-dots%22%5D%20%5Bclass*%3D%22splide__pagination__page%22%5D%5Bclass*%3D%22is-active%22%5D%20%7B%0A%20%20transform%3A%20scale(1)%3B%0A%20%20width%3A%2056px%3B%0A%20%20border-radius%3A%2040px%3B%0A%7D%0A%3C%2Fstyle%3E"
          />
          <_Builtin.Block className="splide splide-dots h-100" tag="div">
            <_Builtin.Block className="splide__track h-100" tag="div">
              <_Builtin.Block className="splide__list h-100" tag="div">
                {splideList}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.BlockContainer>
    </_Component>
  );
}
