"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { SectionHeaderV2 } from "./SectionHeaderV2";
import { IconChevronLeft } from "./IconChevronLeft";

export function CenterSliderSectionV2({
  as: _Component = _Builtin.Section,
  slotContent,
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
        <_Builtin.Block className="py-148" tag="div">
          <SectionHeaderV2
            title="Small Spaces"
            label="YOUR WHOLE HOME"
            introText="Closet World was founded in 1991 with a passion to provide custom storage for every American. We have the largest selection of organization systems, finishes, and accessories in the industry. Explore our solutions for your entire home."
          />
        </_Builtin.Block>
      </_Builtin.BlockContainer>
      <_Builtin.Block className="splide center-slider-card" tag="div">
        <_Builtin.Block
          className="splide__track center-slider-card-padding"
          tag="div"
        >
          <_Builtin.NotSupported _atom="Slot" />
        </_Builtin.Block>
        <_Builtin.Block className="splide__arrows hidden-mobile" tag="div">
          <_Builtin.DOM
            className="splide__arrow splide__arrow--prev splide__arrow__cw"
            tag="button"
            aria-label="Previous slide"
          >
            <IconChevronLeft />
          </_Builtin.DOM>
          <_Builtin.DOM
            className="splide__arrow splide__arrow--next splide__arrow__cw"
            tag="button"
            aria-label="Next slide"
          >
            <IconChevronLeft />
          </_Builtin.DOM>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
