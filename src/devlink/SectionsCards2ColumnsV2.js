"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { SectionHeaderV2 } from "./SectionHeaderV2";
import { NormalCard } from "./NormalCard";

export function SectionsCards2ColumnsV2({
  as: _Component = _Builtin.Section,
  sectionHeaderV2Variant = null,
  sectionHeaderV2Label = "DISCOVER",
  sectionHeaderV2HideTitle = true,
  sectionHeaderV2Title = (
    <>
      {"Unique solutions for "}
      <br />
      {"any space."}
    </>
  ),
  sectionHeaderV2HideIntroText = true,
  sectionHeaderV2IntroText = "Whether it’s for organization, display, or daily convenience, our expertly crafted custom designs transform your home in ways you never imagined. If you can dream it, we can build it. Explore other ways to rethink your space and get inspired!",
  sectionHeaderV2ShowScrollIcon = false,
  sectionHeaderV2ShowLink = false,
  sectionHeaderV2BtnText = "Learn more",

  sectionHeaderV2BtnLink = {
    href: "#",
  },

  sectionHeaderV2Show2ndIntro = false,
  sectionHeaderV2SecondIntroText = "Find the nearest Closet World location and schedule your free in-home consultation today.",
  normalCard1Title = "Create A Closet",
  normalCard1Image = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/6810bf85c13f9cf86bcc2734_create-a-closet.webp",

  normalCard1Link = {
    href: "/specialty",
  },

  normalCard2Title = "Closets Anywhere",
  normalCard2Image = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/6810bf856dca65e5cfe53f9e_Modern-Farmhouse-Linen-Closet-White.webp",

  normalCard2Link = {
    href: "/closets-anywhere",
  },
}) {
  return (
    <_Component
      className="section-v2"
      tag="section"
      grid={{
        type: "section",
      }}
      Padding-bottom=""
    >
      <_Builtin.BlockContainer
        className="container-v2"
        tag="div"
        grid={{
          type: "container",
        }}
      >
        <_Builtin.Block tag="div" padding-bottom-title="" padding-top="">
          <SectionHeaderV2
            title={sectionHeaderV2Title}
            introText={sectionHeaderV2IntroText}
            label={sectionHeaderV2Label}
            hideIntroText={sectionHeaderV2HideIntroText}
            hideTitle={sectionHeaderV2HideTitle}
            variant={sectionHeaderV2Variant}
            showScrollIcon={sectionHeaderV2ShowScrollIcon}
            showLink={sectionHeaderV2ShowLink}
            btnText={sectionHeaderV2BtnText}
            btnLink={sectionHeaderV2BtnLink}
            show2ndIntro={sectionHeaderV2Show2ndIntro}
            secondIntroText={sectionHeaderV2SecondIntroText}
          />
        </_Builtin.Block>
      </_Builtin.BlockContainer>
      <_Builtin.BlockContainer
        className="container-v2"
        tag="div"
        grid={{
          type: "container",
        }}
      >
        <_Builtin.Block className="normal-card-grid cols-2" tag="div">
          <NormalCard
            title={normalCard1Title}
            image={normalCard1Image}
            link={normalCard1Link}
          />
          <NormalCard
            title={normalCard2Title}
            image={normalCard2Image}
            link={normalCard2Link}
          />
        </_Builtin.Block>
      </_Builtin.BlockContainer>
    </_Component>
  );
}
