"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { SlideSplitSection } from "./SlideSplitSection";

const _interactionsData = JSON.parse(
  '{"events":{"e-17":{"id":"e-17","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-5","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-18"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65e050fd6f910c57af0b433e|b396f403-edb8-df86-78bb-62517cbedf94","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65e050fd6f910c57af0b433e|b396f403-edb8-df86-78bb-62517cbedf94","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1709278060740},"e-18":{"id":"e-18","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-6","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-17"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65e050fd6f910c57af0b433e|b396f403-edb8-df86-78bb-62517cbedf94","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65e050fd6f910c57af0b433e|b396f403-edb8-df86-78bb-62517cbedf94","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1709278060740},"e-19":{"id":"e-19","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-5","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-20"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65e0624c328c82d5cb6da7c7|cb78847b-602d-75ce-361b-715baeed9bb7","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65e0624c328c82d5cb6da7c7|cb78847b-602d-75ce-361b-715baeed9bb7","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1709278335979},"e-20":{"id":"e-20","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-6","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-19"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65e0624c328c82d5cb6da7c7|cb78847b-602d-75ce-361b-715baeed9bb7","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65e0624c328c82d5cb6da7c7|cb78847b-602d-75ce-361b-715baeed9bb7","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1709278335979}},"actionLists":{"a-5":{"id":"a-5","title":"Blog card hover in","actionItemGroups":[{"actionItems":[{"id":"a-5-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".blog-card__img","selectorGuids":["5fb2d686-5bf3-3f4a-656a-ac39eb2a46e9"]},"value":1,"unit":""}},{"id":"a-5-n-2","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".body.is--blog-title","selectorGuids":["ec061e78-9e63-e5f1-b388-06655649261b","72f5058d-32a6-d27b-b755-545a460a1bf5"]},"globalSwatchId":"","rValue":10,"bValue":10,"gValue":10,"aValue":1}}]},{"actionItems":[{"id":"a-5-n-3","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".body.is--blog-title","selectorGuids":["ec061e78-9e63-e5f1-b388-06655649261b","72f5058d-32a6-d27b-b755-545a460a1bf5"]},"globalSwatchId":"","rValue":239,"bValue":32,"gValue":64,"aValue":1}},{"id":"a-5-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".blog-card__img","selectorGuids":["5fb2d686-5bf3-3f4a-656a-ac39eb2a46e9"]},"value":0.7,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1709202474958},"a-6":{"id":"a-6","title":"Blog card hover out","actionItemGroups":[{"actionItems":[{"id":"a-6-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".blog-card__img","selectorGuids":["5fb2d686-5bf3-3f4a-656a-ac39eb2a46e9"]},"value":1,"unit":""}},{"id":"a-6-n-2","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".body.is--blog-title","selectorGuids":["ec061e78-9e63-e5f1-b388-06655649261b","72f5058d-32a6-d27b-b755-545a460a1bf5"]},"globalSwatchId":"","rValue":10,"bValue":10,"gValue":10,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1709202605108}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function SectionSplitSlider({
  as: _Component = _Builtin.Block,
  heading = (
    <>
      {"Choose Your Wall-Bed System"}
      <br />
    </>
  ),
  subheading = (
    <>
      {"Three systems to choose from"}
      <br />
    </>
  ),
  paragraph = (
    <>
      {
        "At Closet World®, we proudly offer three distinct systems to organize both your home and your life: Bedtec™, Bedtec Signia™, and Bedtec™ + Prestige Office"
      }
      <br />
    </>
  ),
}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <_Component className="section-choose-system" tag="div">
      <_Builtin.BlockContainer
        className="container"
        grid={{
          type: "container",
        }}
        tag="div"
      >
        <_Builtin.Block className="section-inner" tag="div">
          <_Builtin.Heading tag="h2">{heading}</_Builtin.Heading>
          <_Builtin.Heading className="text-color--body" tag="h3">
            {subheading}
          </_Builtin.Heading>
          <_Builtin.Block className="divider" tag="div" />
          <_Builtin.Heading className="body" tag="h3">
            {paragraph}
          </_Builtin.Heading>
        </_Builtin.Block>
        <_Builtin.Block className="section-split-slider__wrapper" tag="div">
          <_Builtin.Block
            className="section-split-slider--murphy section-split-slider swiper"
            tag="div"
          >
            <_Builtin.Block className="swiper-wrapper" tag="div">
              <_Builtin.Block className="swiper-slide" tag="div">
                <SlideSplitSection
                  tag="WALL-BED SYSTEMS"
                  heading="Bedtec™"
                  paragraph="Stylishly maximize your living space with Bedtec, which incorporates unique spring-loaded Murphy bed construction that decreases the total wall footprint of the bed. With Bedtec systems you’ll also enjoy modern straight-edge paneling, as well as a comfortable Serta mattress that rests on an attractive black-pebble powder-coated frame."
                  image="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/65df7d531b8247f07b021d74_CW_Wall_Beds_Sytems_01.webp"
                />
              </_Builtin.Block>
              <_Builtin.Block className="swiper-slide" tag="div">
                <SlideSplitSection
                  tag="WALL-BED SYSTEMS"
                  heading="Bedtec Signia™"
                  paragraph="With the Bedtec Signia system, you’ll enjoy all the benefits of our Bedtec system and more. Bedtec Signia systems feature strong ¾” paneling, optional Shaker-style deco doors, and a range of sophisticated Signia finishes. Transform any room into a beautiful and tranquil sleeping space with Bedtec Signia."
                  image="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/65df7d531be147e338cdfa99_CW_Wall_Beds_Sytems_02.webp"
                />
              </_Builtin.Block>
              <_Builtin.Block className="swiper-slide" tag="div">
                <SlideSplitSection
                  heading="Bedtec + Prestige Office™"
                  tag="WALL-BED SYSTEMS"
                  paragraph="With our Bedtec + Prestige Office system, not only do you enjoy a sleek, modern office space, but your home office instantly transforms into a bedroom with the convenient addition of a wall bed that can be tucked away during “office hours.” Bedtec + Prestige Office can be seamlessly incorporated into a range of office designs to create a unique multifunctional space."
                  image="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/65df7d53fb6857a8502d2b8c_CW_Wall_Beds_Sytems_03.webp"
                />
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block className="section-split-navigation" tag="div">
            <_Builtin.Block
              className="swiper-button swiper-button--prev swiper-button--prev-lg"
              tag="div"
            />
            <_Builtin.Block
              className="swiper-button swiper-button--next swiper-button--next-lg"
              tag="div"
            />
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.HtmlEmbed
          className="hidden-html"
          value="%3Cstyle%3E%0A%20%20.section-split-slider%20.swiper-slide%20%7B%0A%20%20%20%20height%3A%20auto%3B%0A%20%20%7D%0A%0A%20%20.section-split-slider%20.swiper-button-next%2C%20%0A%20%20.section-split-slider%20.swiper-button-prev%20%7B%0A%20%20%20%20width%3A%2030px%3B%0A%20%20%20%20height%3A%2030px%3B%0A%20%20%7D%0A%20%20%0A%20%20.swiper-button%3Aafter%20%7B%0A%20%20%20%20font-family%3A%20swiper-icons%3B%0A%20%20%20%20font-size%3A%2036px%3B%0A%20%20%20%20text-transform%3A%20none!important%3B%0A%20%20%20%20letter-spacing%3A%200%3B%0A%20%20%20%20font-variant%3A%20initial%3B%0A%20%20%20%20line-height%3A%201%3B%0A%20%20%20%20color%3A%20var(--black)%3B%0A%20%20%7D%0A%0A%20%20.swiper-button.swiper-button--prev%3Aafter%20%7B%0A%20%20%20%20content%3A%20'prev'%3B%0A%20%20%7D%0A%0A%20%20.swiper-button.swiper-button--next%3Aafter%20%7B%0A%20%20%20%20content%3A%20'next'%3B%0A%20%20%7D%0A%0A%20%20%40media%20(max-width%3A%20991px)%20%7B%0A%20%20%20%20.section-split-slider%20%7B%0A%20%20%20%20%20%20overflow%3A%20visible%20!important%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%3C%2Fstyle%3E"
        />
      </_Builtin.BlockContainer>
    </_Component>
  );
}
