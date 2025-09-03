"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function SectionTestimonials({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className="section-with-bg section--spacing-2"
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.Block className="section-with-bg__overlay" tag="div" />
      <_Builtin.BlockContainer
        className="container"
        grid={{
          type: "container",
        }}
        tag="div"
      >
        <_Builtin.Block
          className="section-inner section-inner--spacing-0"
          tag="div"
        >
          <_Builtin.Heading tag="h2">
            {"What Our Customers Say:"}
            <br />
          </_Builtin.Heading>
          <_Builtin.Block className="divider" tag="div" />
        </_Builtin.Block>
      </_Builtin.BlockContainer>
      <_Builtin.BlockContainer
        className="container container--slider-mobile"
        grid={{
          type: "container",
        }}
        tag="div"
      >
        <_Builtin.Block className="testimonials-slider__wrapper" tag="div">
          <_Builtin.NotSupported _atom="DynamoWrapper" />
          <_Builtin.Block className="testimonials-navigation" tag="div">
            <_Builtin.Block
              className="swiper-button swiper-button--prev"
              tag="div"
            />
            <_Builtin.Block
              className="swiper-button swiper-button--next"
              tag="div"
            />
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.BlockContainer>
      <_Builtin.HtmlEmbed
        className="hidden-html"
        value="%3Cstyle%3E%0A%20%20.stars-rating__single%3Abefore%20%7B%0A%20%20%20%20content%3A%20%22%5Cf005%22%3B%0A%20%20%7D%0A%0A%20%20.testimonials-slider%20.swiper-slide%20%7B%0A%20%20%20%20height%3A%20auto%3B%0A%20%20%7D%0A%0A%20%20.testimonials-slider%20.swiper-button-next%2C%20%0A%20%20.testimonials-slider%20.swiper-button-prev%20%7B%0A%20%20%20%20width%3A%2050px%3B%0A%20%20%20%20height%3A%2050px%3B%0A%20%20%7D%0A%0A%20%20.swiper-button%3Aafter%20%7B%0A%20%20%20%20font-family%3A%20swiper-icons%3B%0A%20%20%20%20font-size%3A%2036px%3B%0A%20%20%20%20text-transform%3A%20none!important%3B%0A%20%20%20%20letter-spacing%3A%200%3B%0A%20%20%20%20font-variant%3A%20initial%3B%0A%20%20%20%20line-height%3A%201%3B%0A%20%20%20%20color%3A%20var(--black)%3B%0A%20%20%7D%0A%0A%20%20.swiper-button.swiper-button--prev%3Aafter%20%7B%0A%20%20%20%20content%3A%20'prev'%3B%0A%20%20%7D%0A%0A%20%20.swiper-button.swiper-button--next%3Aafter%20%7B%0A%20%20%20%20content%3A%20'next'%3B%0A%20%20%7D%0A%0A%20%20%40media%20(max-width%3A%20991px)%20%7B%0A%20%20%20%20.testimonials-slider%20%7B%0A%20%20%20%20%20%20overflow%3A%20visible%20!important%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%3C%2Fstyle%3E"
      />
    </_Component>
  );
}
