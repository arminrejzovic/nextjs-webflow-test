"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function SectionStories({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className="section"
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.BlockContainer
        className="container"
        grid={{
          type: "container",
        }}
        tag="div"
      >
        <_Builtin.Block className="flex-v is--left" tag="div">
          <_Builtin.Heading tag="h2">{"Designer Stories"}</_Builtin.Heading>
          <_Builtin.Heading className="text-color--body" tag="h3">
            {"Hear how our designers work with you"}
            <br />
          </_Builtin.Heading>
        </_Builtin.Block>
        <_Builtin.Block className="designer-stories" tag="div">
          <_Builtin.NotSupported _atom="LightboxWrapper" />
          <_Builtin.NotSupported _atom="LightboxWrapper" />
          <_Builtin.NotSupported _atom="LightboxWrapper" />
          <_Builtin.NotSupported _atom="LightboxWrapper" />
          <_Builtin.HtmlEmbed
            className="hidden-html"
            id="w-node-_5bffbe25-777d-4b2a-c52a-3df21508df9b-1508df7e"
            value="%3Cstyle%3E%0A.designer-stories__item%3Ahover%20.link-underlined-xl%7B%0A%09color%3A%20%23ef4020%3B%0A%20%20text-decoration-color%3A%20%23ef4020%3B%0A%7D%0A.w-lightbox-item.w-lightbox-active%2C%0A.w-lightbox-item%7B%0A%09opacity%3A%201%3B%0A%7D%0A.w-lightbox-item%3Anot(.w-lightbox-active)%20.w-lightbox-img%7B%0Aopacity%3A%200.3%3B%0A%7D%0A%3C%2Fstyle%3E"
          />
        </_Builtin.Block>
      </_Builtin.BlockContainer>
    </_Component>
  );
}
