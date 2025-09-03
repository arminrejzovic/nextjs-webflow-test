"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { SliderForm } from "./SliderForm";

export function SectionSliderWithForm({
  as: _Component = _Builtin.Block,
  slide1Heading = "We’ll transform your home from floor to finish.",
  slide1Paragraph = "From simple to spacious, choose from an array of made-to-order wall-bed systems that are built to last using the best materials available.",
  slide1ImageDesktop = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/65df908f129b6f6bb4de88a8_CW_Wall_Beds_Subhero01.webp",
  slide1ImageMobile = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/65df908f129b6f6bb4de88a8_CW_Wall_Beds_Subhero01.webp",
  slide2Heading = "Organize your home.",
  slide2Paragraph = "Our custom wall-bed systems offer flexibility and function to meet your specific needs.",
  slide2ImageDesktop = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/65df908fff3ac6f093003933_CW_Wall_Beds_Subhero02.webp",
  slide2ImageMobile = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/65df908fff3ac6f093003933_CW_Wall_Beds_Subhero02.webp",
  slide3Heading = "We’re here to help.",
  slide3Paragraph = "You’ll work with an experienced designer who will guide you every step of the way to make your transformation complete.",
  slide3ImageDesktop = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/65df908fdca3622926328f9f_CW_Wall_Beds_Subhero03.webp",
  slide3ImageMobile = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/65df908fdca3622926328f9f_CW_Wall_Beds_Subhero03.webp",
}) {
  return (
    <_Component className="section-hero-slider__container" tag="div">
      <_Builtin.Block className="section-hero-slider__wrapper" tag="div">
        <_Builtin.Block className="section-hero-slider swiper" tag="div">
          <_Builtin.Block className="swiper-wrapper" tag="div">
            <_Builtin.Block className="swiper-slide" tag="div">
              <_Builtin.Block
                className="section-hero-slider__slide section-hero-slider__slide--secondary"
                tag="div"
              >
                <_Builtin.Block
                  className="section-hero-slider__content section-hero-slider__content--secondarysection-hero-slider__content--secondary"
                  tag="div"
                >
                  <_Builtin.Block
                    className="section-hero-slider__content-wrapper section-hero-slider__content-wrapper--secondary"
                    tag="div"
                  >
                    <_Builtin.Heading className="h1 h1--hero-subpage" tag="h2">
                      {slide1Heading}
                    </_Builtin.Heading>
                    <_Builtin.Paragraph className="body-xl">
                      {slide1Paragraph}
                    </_Builtin.Paragraph>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className="section-hero-slider__overlay section-hero-slider__overlay--secondary"
                  tag="div"
                />
                <_Builtin.Image
                  className="section-hero-slider__image section-hero-slider__image--desktop"
                  loading="eager"
                  width="70"
                  height="Auto"
                  alt=""
                  src={slide1ImageDesktop}
                />
                <_Builtin.Image
                  className="section-hero-slider__image section-hero-slider__image--mobile"
                  loading="eager"
                  width="70"
                  height="Auto"
                  alt=""
                  src={slide1ImageMobile}
                />
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block className="swiper-slide" tag="div">
              <_Builtin.Block
                className="section-hero-slider__slide section-hero-slider__slide--secondary"
                tag="div"
              >
                <_Builtin.Block
                  className="section-hero-slider__content section-hero-slider__content--secondarysection-hero-slider__content--secondary"
                  tag="div"
                >
                  <_Builtin.Block
                    className="section-hero-slider__content-wrapper section-hero-slider__content-wrapper--secondary"
                    tag="div"
                  >
                    <_Builtin.Heading className="h1 h1--hero-subpage" tag="h2">
                      {slide2Heading}
                    </_Builtin.Heading>
                    <_Builtin.Paragraph className="body-xl">
                      {slide2Paragraph}
                    </_Builtin.Paragraph>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className="section-hero-slider__overlay section-hero-slider__overlay--secondary"
                  tag="div"
                />
                <_Builtin.Image
                  className="section-hero-slider__image section-hero-slider__image--desktop"
                  loading="lazy"
                  width="70"
                  height="auto"
                  alt=""
                  src={slide2ImageDesktop}
                />
                <_Builtin.Image
                  className="section-hero-slider__image section-hero-slider__image--mobile"
                  loading="lazy"
                  width="70"
                  height="auto"
                  alt=""
                  src={slide2ImageMobile}
                />
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block className="swiper-slide" tag="div">
              <_Builtin.Block
                className="section-hero-slider__slide section-hero-slider__slide--secondary"
                tag="div"
              >
                <_Builtin.Block
                  className="section-hero-slider__content section-hero-slider__content--secondarysection-hero-slider__content--secondary"
                  tag="div"
                >
                  <_Builtin.Block
                    className="section-hero-slider__content-wrapper section-hero-slider__content-wrapper--secondary"
                    tag="div"
                  >
                    <_Builtin.Heading className="h1 h1--hero-subpage" tag="h2">
                      {slide3Heading}
                    </_Builtin.Heading>
                    <_Builtin.Paragraph className="body-xl">
                      {slide3Paragraph}
                    </_Builtin.Paragraph>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className="section-hero-slider__overlay section-hero-slider__overlay--secondary"
                  tag="div"
                />
                <_Builtin.Image
                  className="section-hero-slider__image section-hero-slider__image--desktop"
                  loading="lazy"
                  width="70"
                  height="auto"
                  alt=""
                  src={slide3ImageDesktop}
                />
                <_Builtin.Image
                  className="section-hero-slider__image section-hero-slider__image--mobile"
                  loading="lazy"
                  width="70"
                  height="auto"
                  alt=""
                  src={slide3ImageMobile}
                />
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.HtmlEmbed
            className="hidden-html"
            value="%3Cstyle%3E%0A%20%20.section-hero-slider%20.swiper-wrapper%20%7B%0A%20%20%20%20height%3A%20100%25%3B%0A%20%20%7D%0A%0A%20%20.section-hero-slider%20.swiper-slide%2C%0A%20%20.section-split-slider%20.swiper-slide%20%7B%0A%20%20%20%20height%3A%20auto%3B%0A%20%20%7D%0A%0A%20%20.section-split-slider%20.swiper-button-next%2C%20%0A%20%20.section-split-slider%20.swiper-button-prev%20%7B%0A%20%20%20%20width%3A%2030px%3B%0A%20%20%20%20height%3A%2030px%3B%0A%20%20%7D%0A%0A%20%20.swiper-button%3Aafter%20%7B%0A%20%20%20%20font-family%3A%20swiper-icons%3B%0A%20%20%20%20font-size%3A%2036px%3B%0A%20%20%20%20text-transform%3A%20none!important%3B%0A%20%20%20%20letter-spacing%3A%200%3B%0A%20%20%20%20font-variant%3A%20initial%3B%0A%20%20%20%20line-height%3A%201%3B%0A%20%20%20%20color%3A%20var(--black)%3B%0A%20%20%7D%0A%0A%20%20.swiper-button.swiper-button--prev%3Aafter%20%7B%0A%20%20%20%20content%3A%20'prev'%3B%0A%20%20%7D%0A%0A%20%20.swiper-button.swiper-button--next%3Aafter%20%7B%0A%20%20%20%20content%3A%20'next'%3B%0A%20%20%7D%0A%0A%20%20%40media%20(max-width%3A%20991px)%20%7B%0A%20%20%20%20.section-split-slider%20%7B%0A%20%20%20%20%20%20overflow%3A%20visible%20!important%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%3C%2Fstyle%3E"
          />
        </_Builtin.Block>
        <_Builtin.Block
          className="section-hero-slider-navigation section-hero-slider-navigation--secondary"
          tag="div"
        >
          <_Builtin.Block
            className="swiper-button swiper-button--prev swiper-button--prev-hero"
            tag="div"
          />
          <_Builtin.Block
            className="swiper-button swiper-button--next swiper-button--next-hero"
            tag="div"
          />
        </_Builtin.Block>
        <_Builtin.Block
          className="swiper-pagination-bullets__container"
          tag="div"
        >
          <_Builtin.Block
            className="swiper-pagination-bullets swiper-pagination-bullets--secondary"
            tag="div"
          />
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className="section-hero-slider__form" tag="div">
        <_Builtin.Block
          className="link-holder"
          tag="div"
          id="section-slider-form"
        />
        <SliderForm />
      </_Builtin.Block>
    </_Component>
  );
}
