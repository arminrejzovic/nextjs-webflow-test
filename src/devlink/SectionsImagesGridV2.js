"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { SectionHeaderV2 } from "./SectionHeaderV2";
import { CardImageTextV2 } from "./CardImageTextV2";

export function SectionsImagesGridV2({
  as: _Component = _Builtin.Block,
  sectionHeaderV2Variant = null,
  sectionHeaderV2Label = "more style, less stress",
  sectionHeaderV2HideTitle = true,
  sectionHeaderV2Title = "Turn your house into a home. ",
  sectionHeaderV2HideIntroText = true,
  sectionHeaderV2IntroText = "Most closets waste space. Closet World custom closets are designed and built by certified experts to make the most of every square inch—no prefab, no shortcuts. We turn a single shelf and hanging bar into a high-functioning system with smart configurations and systems tailored to your routine. It’s more than organization—it’s total space optimization, made just for you.",
  sectionHeaderV2IntroTextMobile = "Closet World was founded over 30 years ago with a passion to organize every American home. With the largest selection of custom systems, finishes, and accessories in the industry, we offer solutions for your entire home.",
  sectionHeaderV2ShowScrollIcon = false,
  sectionHeaderV2ShowLink = false,
  sectionHeaderV2BtnText = "Learn more",

  sectionHeaderV2BtnLink = {
    href: "#",
  },

  sectionHeaderV2Show2ndIntro = false,
  sectionHeaderV2SecondIntroText = "Find the nearest Closet World location and schedule your free in-home consultation today.",
  cardImageTextV21Image = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/6810bf89ad6bdfeeaf218373_Walk-In%20Closets.webp",
  cardImageTextV21Title = "Walk-In Closets",
  cardImageTextV21Subtitle = "Stylish. Spacious. Elevated.",
  cardImageTextV21Text = "Our custom walk-in closets feature boutique-style zones, optional seating and lighting, all with expert design that adds everyday luxury and long-term value.",

  cardImageTextV21Link = {
    href: "/walk-in-closets",
  },

  cardImageTextV21LinkText = "Learn More",
  cardImageTextV22Image = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/6810bf851a891f97bd8a21c5_Reach-In%20Closets.webp",
  cardImageTextV22Title = "Reach-In Closets",
  cardImageTextV22Subtitle = "Clever. Compact. Optimized.",
  cardImageTextV22Text = "In an existing footprint or smaller room, our custom reach-in closets double your storage with smart layouts, built-in drawers, and zero wasted space.",

  cardImageTextV22Link = {
    href: "/reach-in-closets",
  },

  cardImageTextV22LinkText = "Learn More",
}) {
  return (
    <_Component className="section-v2" tag="div">
      <_Builtin.BlockContainer
        className="container-v2"
        grid={{
          type: "container",
        }}
        tag="div"
      >
        <_Builtin.Block className="py-120 tablet-pb-0" tag="div">
          <SectionHeaderV2
            title={sectionHeaderV2Title}
            show2ndIntro={sectionHeaderV2Show2ndIntro}
            introText={sectionHeaderV2IntroText}
            label={sectionHeaderV2Label}
            variant={sectionHeaderV2Variant}
            hideTitle={sectionHeaderV2HideTitle}
            hideIntroText={sectionHeaderV2HideIntroText}
            showScrollIcon={sectionHeaderV2ShowScrollIcon}
            showLink={sectionHeaderV2ShowLink}
            btnText={sectionHeaderV2BtnText}
            btnLink={sectionHeaderV2BtnLink}
            secondIntroText={sectionHeaderV2SecondIntroText}
            introTextMobile={sectionHeaderV2IntroTextMobile}
          />
        </_Builtin.Block>
      </_Builtin.BlockContainer>
      <_Builtin.Section
        className="pt-40 pb-80"
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
          <_Builtin.Block className="images-grid" tag="div">
            <CardImageTextV2
              link={cardImageTextV21Link}
              image={cardImageTextV21Image}
              title={cardImageTextV21Title}
              subtitle={cardImageTextV21Subtitle}
              text={cardImageTextV21Text}
              linkText={cardImageTextV21LinkText}
            />
            <CardImageTextV2
              title={cardImageTextV22Title}
              subtitle={cardImageTextV22Subtitle}
              text={cardImageTextV22Text}
              image={cardImageTextV22Image}
              link={cardImageTextV22Link}
              linkText={cardImageTextV22LinkText}
            />
          </_Builtin.Block>
        </_Builtin.BlockContainer>
      </_Builtin.Section>
    </_Component>
  );
}
