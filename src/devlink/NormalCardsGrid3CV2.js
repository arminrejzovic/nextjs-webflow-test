"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { SectionHeaderV2 } from "./SectionHeaderV2";
import { NormalCard } from "./NormalCard";

export function NormalCardsGrid3CV2({
  as: _Component = _Builtin.Section,
  sectionVisibility = true,
  sectionHeaderV2Label = "DISCOVER",
  sectionHeaderV2HideTitle = true,
  sectionHeaderV2Title = (
    <>
      {"Custom designs "}
      <br />
      {"for your whole house."}
    </>
  ),
  sectionHeaderV2IntroText = (
    <>
      {"If you can dream it, we can build it. "}
      <br />
      {"Let us show you how easy it is to get organized—anywhere!"}
    </>
  ),
  sectionHeaderV2HideIntroText = true,
  normalCardTitle = "Walk-In Closets",
  normalCardImage = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/67c099a16a4659443ae41cb1_Modern-Walk-In-Closet-White.webp",

  normalCardLink = {
    href: "/walk-in-closets",
  },

  normalCardTitle2 = "Reach-In Closets",
  normalCardImage2 = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/67c099a2b0d13babbca3d7f0_Ranch-Reach-in-Closet-Summer-Breeze.webp",

  normalCardLink2 = {
    href: "/reach-in-closets",
  },

  normalCardTitle3 = "Garages",
  normalCardImage3 = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/67c09a1c6fb73da0e46dcb6b_Modern-Garage-Light-Teak.webp",

  normalCardLink3 = {
    href: "/custom-garage-cabinets",
  },

  pbTitleReset,
  ptReset,
  pbReset,
}) {
  return sectionVisibility ? (
    <_Component
      grid={{
        type: "section",
      }}
      tag="section"
      Padding-bottom={pbReset}
    >
      <_Builtin.BlockContainer
        className="container-v2"
        grid={{
          type: "container",
        }}
        tag="div"
      >
        <_Builtin.Block
          className="pt-180 pb-88"
          tag="div"
          padding-bottom-title={pbTitleReset}
          padding-top={ptReset}
        >
          <SectionHeaderV2
            title={sectionHeaderV2Title}
            label={sectionHeaderV2Label}
            hideIntroText={sectionHeaderV2HideIntroText}
            introText={sectionHeaderV2IntroText}
            hideTitle={sectionHeaderV2HideTitle}
          />
        </_Builtin.Block>
      </_Builtin.BlockContainer>
      <_Builtin.BlockContainer
        className="container-v2-fullwidth"
        grid={{
          type: "container",
        }}
        tag="div"
      >
        <_Builtin.Block className="splide splide-full-mobile-only" tag="div">
          <_Builtin.Block className="splide__track" tag="div">
            <_Builtin.Block className="normal-card-grid splide__list" tag="div">
              <_Builtin.Block className="splide__slide" tag="div">
                <NormalCard
                  title={normalCardTitle}
                  image={normalCardImage}
                  link={normalCardLink}
                />
              </_Builtin.Block>
              <_Builtin.Block className="splide__slide" tag="div">
                <NormalCard
                  title={normalCardTitle2}
                  image={normalCardImage2}
                  link={normalCardLink2}
                />
              </_Builtin.Block>
              <_Builtin.Block className="splide__slide" tag="div">
                <NormalCard
                  title={normalCardTitle3}
                  image={normalCardImage3}
                  link={normalCardLink3}
                />
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className="splide__arrows custom-mobile-arrows"
            tag="div"
          />
        </_Builtin.Block>
      </_Builtin.BlockContainer>
    </_Component>
  ) : null;
}
