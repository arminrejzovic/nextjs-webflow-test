"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { IconPhone } from "./IconPhone";

export function LocationsCta({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className="py-64"
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
        <_Builtin.Block className="cta-m" tag="div">
          <_Builtin.Block className="cta-m__media" tag="div">
            <_Builtin.Image
              className="cta-m__media-img"
              loading="lazy"
              width="auto"
              height="auto"
              alt=""
              src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/6867e88f0b56e482dd8fa8b2_c3ac08a16258f10e732972d913e192cadc524399%20Large.jpeg"
            />
          </_Builtin.Block>
          <_Builtin.Block className="cta-m__content" tag="div">
            <_Builtin.Block
              className="h6-v2 is--white text-align--center m-h9 m-black"
              tag="div"
            >
              {"Call for a free, in-home design consultation."}
            </_Builtin.Block>
            <_Builtin.Block className="flex column gap-8" tag="div">
              <_Builtin.Link
                className="btn-v2 fs-big"
                button={false}
                block="inline"
                options={{
                  href: "tel:1-800-434-6018",
                }}
              >
                <IconPhone />
                <_Builtin.Block tag="div">{"1-800-434-6018"}</_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Block
                className="h12-v2 is--white-v2 text-align--center"
                tag="div"
              >
                {"Tap to Call"}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.BlockContainer>
    </_Component>
  );
}
