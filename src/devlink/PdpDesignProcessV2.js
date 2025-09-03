"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { SectionHeaderV2 } from "./SectionHeaderV2";

export function PdpDesignProcessV2({
  as: _Component = _Builtin.Block,
  sectionHeaderV2Label = "DESIGN PROCESS",
  sectionHeaderV2Title = "Design your dream closet.",
  sectionHeaderV2IntroText = "We believe that an organized space makes anything possible. Let us transform your closet into a haven of elegance and purpose, where every detail reflects your style. It all starts with your design & estimate consultation.",
  image1 = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/67aa2795dec5585e0ddd61e5_Walk_In_Design_Process_01.webp",
  stepTitle1 = "Plan",
  title1 = "Chat with your designer.",
  text1 = "Our certified designers are trained to double your space with custom blueprints.",
  image2 = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/67acc148743a44ae943355fb_Benches_Design_Process_02.webp",
  stepTitle2 = "Choose",
  title2 = "Choose your system or collection.",
  text2 = "Choose the system or collection that best matches your style and your budget.",
  image3 = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/6787e9abf07bdb5abe2a7b41_dc3.webp",
  stepTitle3 = "Customize",
  title3 = "Configure colors, finishes, and hardware.",
  text3 = "Personalize your unique space with different configurations, colors, finishes, and features.",
  image4 = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/6787e9aceab5f5fb1dcd5770_dc4.webp",
  stepTitle4 = "Accessorize",
  title4 = "Pick out your accessories.",
  text4 = "Choose smart storage add-ons like wire baskets, drawer inserts, slide-out racks, and more.",
  image3AltText = "__wf_reserved_inherit",
  image4AltText = "__wf_reserved_inherit",
}) {
  return (
    <_Component
      className="section-anchor-v2 section-anchor-process"
      tag="div"
      data-title="Design"
      id="design"
    >
      <_Builtin.BlockContainer
        className="container-v2"
        grid={{
          type: "container",
        }}
        tag="div"
      >
        <_Builtin.Block className="py-120" tag="div">
          <SectionHeaderV2
            label={sectionHeaderV2Label}
            title={sectionHeaderV2Title}
            introText={sectionHeaderV2IntroText}
          />
        </_Builtin.Block>
      </_Builtin.BlockContainer>
      <_Builtin.Block
        className="splide splide-mobile-only process-cards-splide"
        tag="div"
      >
        <_Builtin.Block className="splide__track" tag="div">
          <_Builtin.Block className="process-cards splide__list" tag="div">
            <_Builtin.Block className="process-card splide__slide" tag="div">
              <_Builtin.Block className="process-card__inner" tag="div">
                <_Builtin.Image
                  className="process-card__image"
                  loading="lazy"
                  width="70"
                  height="auto"
                  alt="Pencil on Drafting Paper"
                  src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/67bf28c9242d095579630d90_Pencil-Drafting-Paper.webp"
                />
                <_Builtin.Block className="process-card__content" tag="div">
                  <_Builtin.Block
                    className="h2-v2 weight--black line-height-1"
                    tag="div"
                  >
                    {"1"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className="h8-v2 weight--black color-heading-v2 left"
                    tag="div"
                  >
                    {stepTitle1}
                  </_Builtin.Block>
                  <_Builtin.Block className="h8-v2" tag="div">
                    {title1}
                  </_Builtin.Block>
                  <_Builtin.Paragraph className="process-card__small-text">
                    {text1}
                  </_Builtin.Paragraph>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block className="process-card splide__slide" tag="div">
              <_Builtin.Block className="process-card__inner" tag="div">
                <_Builtin.Image
                  className="process-card__image"
                  loading="lazy"
                  width="70"
                  height="auto"
                  alt="Closet World Finishes Swatches"
                  src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/67bf28c8d556553db98e0021_Finishes-Swatches.webp"
                />
                <_Builtin.Block className="process-card__content" tag="div">
                  <_Builtin.Block
                    className="h2-v2 weight--black line-height-1"
                    tag="div"
                  >
                    {"2"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className="h8-v2 weight--black color-heading-v2"
                    tag="div"
                  >
                    {stepTitle2}
                  </_Builtin.Block>
                  <_Builtin.Block className="h8-v2" tag="div">
                    {title2}
                  </_Builtin.Block>
                  <_Builtin.Paragraph className="process-card__small-text">
                    {text2}
                  </_Builtin.Paragraph>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block className="process-card splide__slide" tag="div">
              <_Builtin.Block className="process-card__inner" tag="div">
                <_Builtin.Image
                  className="process-card__image"
                  loading="lazy"
                  width="70"
                  height="auto"
                  src={image3}
                />
                <_Builtin.Block className="process-card__content" tag="div">
                  <_Builtin.Block
                    className="h2-v2 weight--black line-height-1"
                    tag="div"
                  >
                    {"3"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className="h8-v2 weight--black color-heading-v2"
                    tag="div"
                  >
                    {stepTitle3}
                  </_Builtin.Block>
                  <_Builtin.Block className="h8-v2" tag="div">
                    {title3}
                  </_Builtin.Block>
                  <_Builtin.Paragraph className="process-card__small-text">
                    {text3}
                  </_Builtin.Paragraph>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block className="process-card splide__slide" tag="div">
              <_Builtin.Block className="process-card__inner" tag="div">
                <_Builtin.Image
                  className="process-card__image"
                  loading="lazy"
                  width="70"
                  height="auto"
                  src={image4}
                />
                <_Builtin.Block className="process-card__content" tag="div">
                  <_Builtin.Block
                    className="h2-v2 weight--black line-height-1"
                    tag="div"
                  >
                    {"4"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className="h8-v2 weight--black color-heading-v2"
                    tag="div"
                  >
                    {stepTitle4}
                  </_Builtin.Block>
                  <_Builtin.Block className="h8-v2" tag="div">
                    {title4}
                  </_Builtin.Block>
                  <_Builtin.Paragraph className="process-card__small-text">
                    {text4}
                  </_Builtin.Paragraph>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.HtmlEmbed value="%3Cstyle%3E%0A%0A.process-card%20%7B%0A%09width%3A%20100%25%3B%0A%7D%0A%0A.process-card__image%20%7B%0A%09aspect-ratio%3A%201.91%3B%0A%20%20height%3A%20auto%3B%0A%7D%0A%0A.process-card__inner%20%7B%0A%09height%3A%20100%25%3B%0A%7D%0A%0A%40media%20screen%20and%20(max-width%3A%20991px)%20%7B%0A%20%20.process-card.splide__slide%3Anot(.is-active)%20%7B%0A%20%20%20%20filter%3A%20saturate(0)%3B%0A%20%20%20%20opacity%3A%200.5%3B%0A%20%20%7D%0A%7D%0A%0A%40media%20screen%20and%20(min-width%3A%20992px)%20%7B%0A%09.process-cards-splide%20.splide__track%20%7B%0A%20%20%09display%3A%20flex%3B%0A%20%20%20%20justify-content%3A%20center%3B%0A%20%20%7D%0A%20%20.process-cards.splide__list%20%7B%0A%20%20%20%20margin-left%3A%20-4px!important%3B%0A%20%20%20%20margin-right%3A%20-4px!important%3B%0A%20%20%20%20display%3A%20flex!important%3B%0A%20%20%20%20gap%3A%200px%20!important%3B%0A%20%20%20%20padding-left%3A%200.5rem%20!important%3B%0A%20%20%7D%0A%20%20%0A%20%20.process-card__content%20%7B%0A%20%20%09min-height%3A%20370px%3B%0A%20%20%7D%0A%20%20%0A%20%20.process-card__small-text%20%7B%0A%20%20%09height%3A%200%3B%0A%20%20%20%20opacity%3A%200%3B%0A%20%20%7D%0A%20%20%0A%20%20.process-card%3Afirst-child%20.process-card__small-text%20%7B%0A%20%20%09height%3A%2064px%3B%0A%20%20%20%20opacity%3A%201%3B%0A%20%20%20%20transition%3A%20opacity%200.25s%20ease-in-out%200.2s%3B%0A%20%20%7D%0A%20%20%0A%20%20.process-cards%3Ahas(.process-card%3Ahover)%20.process-card%20.process-card__small-text%7B%0A%20%20%20%20opacity%3A%200%3B%0A%20%20%20%20height%3A%200%3B%0A%20%20%7D%0A%20%20%0A%20%20.process-cards%3Ahas(.process-card%3Ahover)%20.process-card%3Ahover%20.process-card__small-text%7B%0A%20%20%20%20opacity%3A%201%3B%0A%20%20%20%20height%3A%2064px%3B%0A%20%20%20%20transition%3A%20opacity%200.25s%20ease-in-out%200.2s%2C%20height%200s%20ease%200.4s%3B%0A%20%20%7D%0A%20%20%0A%20%20.process-card__image%20%7B%0A%20%20%09aspect-ratio%3A%202.22%3B%0A%20%20%7D%0A%20%20%0A%20%20.process-card%20%7B%0A%20%20%20%20flex%3A%201%201%2017%25%3B%0A%20%20%20%20transition%3A%20flex%200.6s%20ease%3B%0A%20%20%20%20padding-left%3A%204px%3B%0A%20%20%20%20padding-right%3A%204px%3B%0A%20%20%7D%0A%0A%20%20.process-card%3Afirst-child%20%7B%0A%20%20%20%20flex%3A%201%201%2049%25%3B%0A%20%20%7D%0A%0A%20%20.process-cards%3Ahas(.process-card%3Ahover)%20.process-card%20%7B%0A%20%20%20%20flex%3A%201%201%2017%25%3B%0A%20%20%7D%0A%0A%20%20.process-cards%3Ahas(.process-card%3Ahover)%20.process-card%3Ahover%20%7B%0A%20%20%20%20flex%3A%201%201%2049%25%3B%0A%20%20%7D%0A%7D%0A%3C%2Fstyle%3E" />
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className="splide__arrows custom-mobile-arrows"
          tag="div"
        />
      </_Builtin.Block>
    </_Component>
  );
}
