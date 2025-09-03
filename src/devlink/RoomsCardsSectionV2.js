"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { SectionHeaderV2 } from "./SectionHeaderV2";

export function RoomsCardsSectionV2({
  as: _Component = _Builtin.Section,
  sectionHeaderV2Label = "YOUR WHOLE HOME",
  sectionHeaderV2Title = "Unique Solutions",
  sectionHeaderV2HideIntroText = true,
  sectionHeaderV2IntroText = "Closet World was founded in 1991 with a passion to provide custom storage for every American. We have the largest selection of organization systems, finishes, and accessories in the industry. Explore our solutions for your entire home.",
  sectionHeaderV2ShowScrollIcon = false,
  sectionHeaderV2ShowLink = false,

  sectionHeaderV2BtnLink = {
    href: "#",
  },

  hideRoomCard1 = true,
  roomCard1Title = "Benches",
  roomCard1Intro = "Largest selection in the industry.",
  roomCard1Label = "Start working smarter.",

  roomCard1Link = {
    href: "#",
  },

  roomCard1Image = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/6799f7e44faf11c2050b129b_benches.webp",
  slotContent,
}) {
  return (
    <_Component
      className="section-rooms"
      grid={{
        type: "section",
      }}
      tag="section"
      id="gallery"
    >
      <_Builtin.BlockContainer
        className="container-v2"
        grid={{
          type: "container",
        }}
        tag="div"
      >
        <_Builtin.Block className="pt-180 pb-88" tag="div">
          <SectionHeaderV2
            title={sectionHeaderV2Title}
            introText={sectionHeaderV2IntroText}
            label={sectionHeaderV2Label}
            hideIntroText={sectionHeaderV2HideIntroText}
            showScrollIcon={sectionHeaderV2ShowScrollIcon}
            showLink={sectionHeaderV2ShowLink}
            btnLink={sectionHeaderV2BtnLink}
          />
        </_Builtin.Block>
        <_Builtin.Block className="splide splide-full-mobile-only" tag="div">
          <_Builtin.Block className="splide__track" tag="div">
            <_Builtin.NotSupported _atom="Slot" />
          </_Builtin.Block>
          <_Builtin.Block
            className="splide__arrows custom-mobile-arrows"
            tag="div"
          />
        </_Builtin.Block>
      </_Builtin.BlockContainer>
    </_Component>
  );
}
