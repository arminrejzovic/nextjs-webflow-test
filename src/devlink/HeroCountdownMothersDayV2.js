"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { IconArrowRight2 } from "./IconArrowRight2";

export function HeroCountdownMothersDayV2({
  as: _Component = _Builtin.Section,
  title = "There’s still time to give her what she truly needs.",
  image = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/680be411bb4e7072aac27b82_mother_hugging_daughter.webp",
  imageMobile = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/680be4dc7b1b2f4943077438_mother_hugging_daughter.webp",
  boxSubtitle = "Mother’s day countdown",
  boxTitle = "Call for a free in-home design consultation.",

  boxButton = {
    href: "/schedulerequests-ms-mothers-day",
  },

  boxButtonText = "Schedule Now",
}) {
  return (
    <_Component
      className="section-lp-hero style-2"
      grid={{
        type: "section",
      }}
      tag="section"
      id="hero-form"
    >
      <_Builtin.HtmlEmbed
        className="lp-hero-css-js"
        value="%3Cstyle%3E%0A%0A.lp-hero__overlay%20%7B%0A%20%20background%3A%20linear-gradient(180deg%2C%20rgba(0%2C%200%2C%200%2C%200.00)%2024.27%25%2C%20rgba(0%2C%200%2C%200%2C%200.60)%20100%25)%3B%0A%7D%0A%0A%3C%2Fstyle%3E"
      />
      <_Builtin.BlockContainer
        className="container-v2"
        grid={{
          type: "container",
        }}
        tag="div"
      >
        <_Builtin.Block className="lp-hero__wrap relative style-2" tag="div">
          <_Builtin.Block className="lp-hero__left style-2" tag="div">
            <_Builtin.Heading
              className="h3-v2 is--white-v2 tablet-text-align--center mobile-h9-v2"
              tag="h1"
              data-step="0"
            >
              {title}
            </_Builtin.Heading>
          </_Builtin.Block>
          <_Builtin.Block className="lp-hero__right style-2" tag="div">
            <_Builtin.Block className="countdown-box" tag="div">
              <_Builtin.Block
                className="subheading-v2 is--black-v2 text-align--center"
                tag="div"
              >
                {boxSubtitle}
              </_Builtin.Block>
              <_Builtin.Block
                className="h6-v2 is--black-v2 text-align--center"
                tag="div"
              >
                {boxTitle}
              </_Builtin.Block>
              <_Builtin.Block className="countdown-js" tag="div">
                <_Builtin.Block className="countdown-tab" tag="div">
                  <_Builtin.Block
                    className="countdown-number"
                    tag="div"
                    id="cd-days"
                  >
                    {"00"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className="subheading-v2 is--black-v2"
                    tag="div"
                  >
                    {"DAYS"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block className="countdown-dots" tag="div">
                  {":"}
                </_Builtin.Block>
                <_Builtin.Block className="countdown-tab" tag="div">
                  <_Builtin.Block
                    className="countdown-number"
                    tag="div"
                    id="cd-hours"
                  >
                    {"00"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className="subheading-v2 is--black-v2"
                    tag="div"
                  >
                    {"HOURS"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block className="countdown-dots" tag="div">
                  {":"}
                </_Builtin.Block>
                <_Builtin.Block className="countdown-tab" tag="div">
                  <_Builtin.Block
                    className="countdown-number"
                    tag="div"
                    id="cd-mins"
                  >
                    {"00"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className="subheading-v2 is--black-v2"
                    tag="div"
                  >
                    {"MINS"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block className="countdown-dots" tag="div">
                  {":"}
                </_Builtin.Block>
                <_Builtin.Block className="countdown-tab" tag="div">
                  <_Builtin.Block
                    className="countdown-number"
                    tag="div"
                    id="cd-secs"
                  >
                    {"00"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className="subheading-v2 is--black-v2"
                    tag="div"
                  >
                    {"SECS"}
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Link
                className="btn-v2 btn-v2--pink"
                button={false}
                block="inline"
                options={boxButton}
              >
                <_Builtin.Block tag="div">{boxButtonText}</_Builtin.Block>
                <IconArrowRight2 />
              </_Builtin.Link>
              <_Builtin.HtmlEmbed
                className="hidden-js"
                value="%3Cscript%3E%0A%20%20var%20Webflow%20%3D%20Webflow%20%7C%7C%20%5B%5D%3B%0A%20%20Webflow.push(function%20()%20%7B%0A%0A%20%20%20%20const%20target%20%3D%20new%20Date(%222025-05-11T00%3A00%3A00-07%3A00%22).getTime()%3B%0A%0A%20%20%20%20const%20el%20%3D%20%7B%0A%20%20%20%20%20%20days%3A%20%20document.getElementById(%22cd-days%22)%2C%0A%20%20%20%20%20%20hours%3A%20document.getElementById(%22cd-hours%22)%2C%0A%20%20%20%20%20%20mins%3A%20%20document.getElementById(%22cd-mins%22)%2C%0A%20%20%20%20%20%20secs%3A%20%20document.getElementById(%22cd-secs%22)%0A%20%20%20%20%7D%3B%0A%0A%20%20%20%20const%20pad%20%3D%20n%20%3D%3E%20String(n).padStart(2%2C%20%220%22)%3B%20%20%20%2F%2F%205%20%20%E2%86%92%20%2205%22%0A%0A%20%20%20%20function%20tick%20()%20%7B%0A%20%20%20%20%20%20const%20now%20%20%20%20%20%20%20%3D%20Date.now()%3B%0A%20%20%20%20%20%20const%20distance%20%20%3D%20target%20-%20now%3B%0A%0A%20%20%20%20%20%20if%20(distance%20%3C%3D%200)%20%7B%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20reached%20zero%0A%20%20%20%20%20%20%20%20clearInterval(timer)%3B%0A%20%20%20%20%20%20%20%20Object.values(el).forEach(e%20%3D%3E%20e.textContent%20%3D%20%2200%22)%3B%0A%20%20%20%20%20%20%20%20return%3B%0A%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20const%20days%20%20%20%20%20%3D%20Math.floor(distance%20%2F%2086_400_000)%3B%0A%20%20%20%20%20%20const%20hours%20%20%20%20%3D%20Math.floor((distance%20%25%2086_400_000)%20%2F%203_600_000)%3B%0A%20%20%20%20%20%20const%20minutes%20%20%3D%20Math.floor((distance%20%25%203_600_000)%20%2F%2060_000)%3B%0A%20%20%20%20%20%20const%20seconds%20%20%3D%20Math.floor((distance%20%25%2060_000)%20%2F%201_000)%3B%0A%0A%20%20%20%20%20%20el.days.textContent%20%20%3D%20pad(days)%3B%0A%20%20%20%20%20%20el.hours.textContent%20%3D%20pad(hours)%3B%0A%20%20%20%20%20%20el.mins.textContent%20%20%3D%20pad(minutes)%3B%0A%20%20%20%20%20%20el.secs.textContent%20%20%3D%20pad(seconds)%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20tick()%3B%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20run%20immediately%0A%20%20%20%20const%20timer%20%3D%20setInterval(tick%2C%201000)%3B%20%0A%20%20%7D)%3B%0A%3C%2Fscript%3E"
              />
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.BlockContainer>
      <_Builtin.Block className="lp-hero__overlay z-1" tag="div" />
      <_Builtin.Image
        className="lp-hero__image-bg is--desktop"
        loading="eager"
        width="auto"
        height="auto"
        alt=""
        src={image}
      />
      <_Builtin.Image
        className="lp-hero__image-bg is--mobile"
        loading="eager"
        width="auto"
        height="auto"
        alt=""
        src={imageMobile}
      />
    </_Component>
  );
}
