"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { IconCalendar } from "./IconCalendar";
import { IconArrowRight } from "./IconArrowRight";
import { IconNewsletter } from "./IconNewsletter";
import { IconLocation } from "./IconLocation";
import { IconOffer } from "./IconOffer";

export function AboveFooterCtaV2({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
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
        <_Builtin.Block className="py-120" tag="div">
          <_Builtin.VFlex className="section-header-v2 no-max-w" tag="div">
            <_Builtin.Block className="subheading-v2" tag="div">
              {"SHOPPING TOOLS"}
            </_Builtin.Block>
          </_Builtin.VFlex>
          <_Builtin.Block className="more-about-grid" tag="div">
            <_Builtin.Link
              className="more-about-grid__item"
              button={false}
              block="inline"
              options={{
                href: "/schedulerequests-ms",
              }}
            >
              <_Builtin.Block className="more-about-grid__icon" tag="div">
                <IconCalendar />
              </_Builtin.Block>
              <_Builtin.VFlex className="more-about-grid__label" tag="div">
                <_Builtin.Block tag="div">
                  {"Schedule Appointment"}
                </_Builtin.Block>
                <_Builtin.Block className="more-about-grid__icon2" tag="div">
                  <IconArrowRight />
                </_Builtin.Block>
              </_Builtin.VFlex>
            </_Builtin.Link>
            <_Builtin.Link
              className="more-about-grid__item"
              button={false}
              block="inline"
              options={{
                href: "#dd910398-2328-c1c3-586f-2a389e468838",
              }}
            >
              <_Builtin.Block className="more-about-grid__icon" tag="div">
                <IconNewsletter />
              </_Builtin.Block>
              <_Builtin.VFlex className="more-about-grid__label" tag="div">
                <_Builtin.Block tag="div">{"Join Our List"}</_Builtin.Block>
                <_Builtin.Block className="more-about-grid__icon2" tag="div">
                  <IconArrowRight />
                </_Builtin.Block>
              </_Builtin.VFlex>
            </_Builtin.Link>
            <_Builtin.Link
              className="more-about-grid__item"
              button={false}
              block="inline"
              options={{
                href: "/locations",
              }}
            >
              <_Builtin.Block className="more-about-grid__icon" tag="div">
                <IconLocation />
              </_Builtin.Block>
              <_Builtin.VFlex className="more-about-grid__label" tag="div">
                <_Builtin.Block tag="div">{"Locations"}</_Builtin.Block>
                <_Builtin.Block className="more-about-grid__icon2" tag="div">
                  <IconArrowRight />
                </_Builtin.Block>
              </_Builtin.VFlex>
            </_Builtin.Link>
            <_Builtin.Link
              className="more-about-grid__item"
              button={false}
              block="inline"
              options={{
                href: "/offers-special-incentive-discount",
              }}
            >
              <_Builtin.Block className="more-about-grid__icon" tag="div">
                <IconOffer />
              </_Builtin.Block>
              <_Builtin.VFlex className="more-about-grid__label" tag="div">
                <_Builtin.Block tag="div">{"Offers"}</_Builtin.Block>
                <_Builtin.Block className="more-about-grid__icon2" tag="div">
                  <IconArrowRight />
                </_Builtin.Block>
              </_Builtin.VFlex>
            </_Builtin.Link>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.BlockContainer>
    </_Component>
  );
}
