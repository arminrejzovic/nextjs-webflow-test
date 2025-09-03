"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { CtaFormButton } from "./CtaFormButton";

export function SectionHeroSlider({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className="section-hero-slider__container section-hero-slider__container--main"
      tag="div"
    >
      <_Builtin.Block
        className="section-hero-slider__wrapper section-hero-slider__wrapper--static"
        tag="div"
      >
        <_Builtin.Block className="section-hero-slider swiper" tag="div">
          <_Builtin.Block className="swiper-wrapper" tag="div">
            <_Builtin.Block className="swiper-slide" tag="div">
              <_Builtin.Block
                className="section-hero-slider__slide hero-slide--1"
                tag="div"
              >
                <_Builtin.Block
                  className="section-hero-slider__overlay"
                  tag="div"
                />
                <_Builtin.Block
                  className="section-hero-slider__content section-hero-slider__content--primary"
                  tag="div"
                >
                  <_Builtin.Heading className="h1 h1--hero" tag="h2">
                    {"Custom Solutions Designed For You"}
                  </_Builtin.Heading>
                  <CtaFormButton
                    link={{
                      href: "#fdda4eff-2985-6aa7-e773-f4cc13de9fbe",
                    }}
                  />
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block className="swiper-slide" tag="div">
              <_Builtin.Block
                className="section-hero-slider__slide hero-slide--2"
                tag="div"
              >
                <_Builtin.Block
                  className="section-hero-slider__overlay"
                  tag="div"
                />
                <_Builtin.Block
                  className="section-hero-slider__content section-hero-slider__content--primary"
                  tag="div"
                >
                  <_Builtin.Heading className="h1 h1--hero" tag="h2">
                    {"We Make Living Easier"}
                  </_Builtin.Heading>
                  <CtaFormButton
                    link={{
                      href: "#fdda4eff-2985-6aa7-e773-f4cc13de9fbe",
                    }}
                  />
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block className="swiper-slide" tag="div">
              <_Builtin.Block
                className="section-hero-slider__slide hero-slide--3"
                tag="div"
              >
                <_Builtin.Block
                  className="section-hero-slider__overlay"
                  tag="div"
                />
                <_Builtin.Block
                  className="section-hero-slider__content section-hero-slider__content--primary"
                  tag="div"
                >
                  <_Builtin.Heading className="h1 h1--hero" tag="h2">
                    {"Your Home, Your Way"}
                  </_Builtin.Heading>
                  <CtaFormButton
                    link={{
                      href: "#fdda4eff-2985-6aa7-e773-f4cc13de9fbe",
                    }}
                  />
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.HtmlEmbed
            className="hidden-html"
            value="%3Cstyle%3E%0A%20%20.section-split-slider%20.swiper-slide%20%7B%0A%20%20%20%20height%3A%20auto%3B%0A%20%20%7D%0A%0A%20%20.section-split-slider%20.swiper-button-next%2C%20%0A%20%20.section-split-slider%20.swiper-button-prev%20%7B%0A%20%20%20%20width%3A%2030px%3B%0A%20%20%20%20height%3A%2030px%3B%0A%20%20%7D%0A%0A%20%20.swiper-button%3Aafter%20%7B%0A%20%20%20%20font-family%3A%20swiper-icons%3B%0A%20%20%20%20font-size%3A%2034px%3B%0A%20%20%20%20text-transform%3A%20none!important%3B%0A%20%20%20%20letter-spacing%3A%200%3B%0A%20%20%20%20font-variant%3A%20initial%3B%0A%20%20%20%20line-height%3A%201%3B%0A%20%20%20%20color%3A%20var(--black)%3B%0A%20%20%7D%0A%0A%20%20.swiper-button.swiper-button--prev%3Aafter%20%7B%0A%20%20%20%20content%3A%20'prev'%3B%0A%20%20%7D%0A%0A%20%20.swiper-button.swiper-button--next%3Aafter%20%7B%0A%20%20%20%20content%3A%20'next'%3B%0A%20%20%7D%0A%0A%20%20%40media%20(max-width%3A%20991px)%20%7B%0A%20%20%20%20.section-split-slider%20%7B%0A%20%20%20%20%20%20overflow%3A%20visible%20!important%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%3C%2Fstyle%3E"
          />
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className="section-hero-slider-navigation" tag="div">
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
        className="swiper-pagination-bullets swiper-pagination-bullets--hero"
        tag="div"
      />
    </_Component>
  );
}
