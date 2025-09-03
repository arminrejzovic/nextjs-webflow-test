"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { HeaderMainMenu } from "./HeaderMainMenu";

export function Header({
  as: _Component = _Builtin.Block,
  progressBarVisibility = false,
}) {
  return (
    <_Component className="sticky-header" tag="div">
      <_Builtin.Block className="header" tag="div">
        <_Builtin.NotSupported _atom="OptimizationExperience" />
        <_Builtin.Block className="header-top" tag="div">
          <_Builtin.BlockContainer
            className="container-lg"
            grid={{
              type: "container",
            }}
            tag="div"
          >
            <_Builtin.Block className="header-top__wrapper" tag="div">
              <_Builtin.Block className="header-top__left" tag="div">
                <_Builtin.Link
                  className="logo__link"
                  button={false}
                  block="inline"
                  options={{
                    href: "/old-site-pages/old-home",
                  }}
                >
                  <_Builtin.Image
                    className="logo"
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt="Closet World logo"
                    src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/65dc6fc73b618454b37075fa_closet-world-registered-logo.webp"
                  />
                </_Builtin.Link>
              </_Builtin.Block>
              <_Builtin.Block className="header-top__right" tag="div">
                <_Builtin.Block className="header-logo__cta" tag="div">
                  {"Call To Get Started "}
                  <_Builtin.Link
                    className="header-tel"
                    button={false}
                    block=""
                    options={{
                      href: "#",
                    }}
                  >
                    {"1-800-434-6018"}
                  </_Builtin.Link>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.BlockContainer>
        </_Builtin.Block>
        <_Builtin.Block className="header-bottom" tag="div">
          <_Builtin.BlockContainer
            className="container-lg"
            grid={{
              type: "container",
            }}
            tag="div"
          >
            <_Builtin.Block className="header-bottom__wrapper" tag="div">
              <HeaderMainMenu />
              <_Builtin.NotSupported _atom="OptimizationExperience" />
            </_Builtin.Block>
          </_Builtin.BlockContainer>
        </_Builtin.Block>
      </_Builtin.Block>
      {progressBarVisibility ? (
        <_Builtin.Block className="form-steps__progress" tag="div">
          <_Builtin.Block
            className="form-steps__progress-bar"
            tag="div"
            data-value="0"
          />
        </_Builtin.Block>
      ) : null}
      <_Builtin.HtmlEmbed
        className="hidden-html"
        value="%3Cstyle%3E%0A%20%20%2F*%40media%20(min-width%3A%201280px)%20%7B%0A%20%20.header%20.header-top%20.logo%20%7B%0A%20%20transition%3A%20height%200.2s%20ease%2C%20width%200.2s%20ease%3B%0A%20%20%7D%0A%20%20.header.header--scrolled%20.header-top%20.logo%20%7B%0A%20%20width%3A%20180px%3B%0A%20%20%7D%0A%20%20%7D*%2F%0A%20%20.sticky-header.scrolled-header%20%7B%0A%20%20%20%20position%3A%20fixed%3B%0A%20%20%20%20top%3A%200%3B%0A%20%20%20%20left%3A%200%3B%0A%20%20%20%20width%3A%20100%25%3B%0A%20%20%7D%0A%20%20%40media%20(min-width%3A%201280px)%20%7B%0A%20%20%20%20.dropdown-list.dropdown-list--v1%20.dropdown-link%20%7B%0A%20%20%20%20%20%20color%3A%20black%3B%0A%20%20%20%20%20%20padding-left%3A%2024px%3B%0A%20%20%20%20%20%20padding-right%3A%2024px%3B%0A%20%20%20%20%7D%0A%20%20%20%20.dropdown-list.dropdown-list--v1%20.dropdown-link%3Ahover%20%7B%0A%20%20%20%20%20%20text-decoration%3A%20underline%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20%40media%20(max-width%3A%201279px)%20%7B%0A%20%20%20%20.header-top%2C%0A%20%20%20%20.header-bottom%20%7B%0A%20%20%20%20%20%20display%3A%20none%20!important%3B%0A%20%20%20%20%7D%0A%20%20%20%20.mobile-menu%20%7B%0A%20%20%20%20%20%20display%3A%20block%20!important%3B%0A%20%20%20%20%7D%0A%20%20%20%20.header-menu%20%7B%0A%20%20%20%20%20%20display%3A%20flex%3B%0A%20%20%20%20%20%20grid-column-gap%3A%200%3B%0A%20%20%20%20%20%20grid-row-gap%3A%200%3B%0A%20%20%20%20%20%20flex-direction%3A%20column%3B%0A%20%20%20%20%20%20justify-content%3A%20flex-start%3B%0A%20%20%20%20%20%20align-items%3A%20stretch%3B%0A%20%20%20%20%7D%0A%20%20%20%20.dropdown-btn%2C%0A%20%20%20%20.header-link%2C%0A%20%20%20%20.dropdown-link%20%7B%0A%20%20%20%20%20%20color%3A%20white%3B%0A%20%20%20%20%20%20text-transform%3A%20capitalize%3B%0A%20%20%20%20%20%20padding%3A%200%3B%0A%20%20%20%20%20%20padding-left%3A%2016px%3B%0A%20%20%20%20%20%20padding-right%3A%2050px%3B%0A%20%20%20%20%20%20display%3A%20flex%3B%0A%20%20%20%20%20%20align-items%3A%20center%3B%0A%20%20%20%20%20%20justify-content%3A%20flex-start%3B%0A%20%20%20%20%20%20transition%3A%20background-color%200.5s%20ease%3B%0A%20%20%20%20%20%20height%3A%2040px%3B%0A%20%20%20%20%20%20line-height%3A%2040px%3B%0A%20%20%20%20%20%20font-size%3A%2013px%3B%0A%20%20%20%20%7D%0A%20%20%20%20.dropdown-btn%3Ahover%2C%0A%20%20%20%20.header-link%3Ahover%2C%0A%20%20%20%20.dropdown-link%3Ahover%20%7B%0A%20%20%20%20%20%20background-color%3A%20%233f3f3f%3B%0A%20%20%20%20%20%20color%3A%20white%3B%0A%20%20%20%20%7D%0A%20%20%20%20.dropdown-btn%20%7B%0A%20%20%20%20%20%20padding-right%3A%2016px%3B%0A%20%20%20%20%7D%0A%20%20%20%20.dropdown-btn%20%3E%20.header-link%20%7B%0A%20%20%20%20%20%20padding%3A%200%3B%0A%20%20%20%20%7D%0A%20%20%20%20.dropdown-link%20%7B%0A%20%20%20%20%20%20padding-left%3A%2032px%3B%0A%20%20%20%20%7D%0A%20%20%20%20.dropdown-list%20%7B%0A%20%20%20%20%20%20background%3A%20%23212121%3B%0A%20%20%20%20%7D%0A%20%20%20%20.dropdown-icon%20%7B%0A%20%20%20%20%20%20display%3A%20block%3B%0A%20%20%20%20%7D%0A%20%20%20%20.dropdown-btn.w--open%20.dropdown-icon%20%7B%0A%20%20%20%20%20%20transform%3A%20rotate(180deg)%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%3C%2Fstyle%3E"
      />
      <_Builtin.HtmlEmbed
        className="hidden-html"
        value="%3Cscript%3E%0A%20%20%2F*document.addEventListener(%22DOMContentLoaded%22%2C%20function()%20%7B%0Aconst%20headerEl%20%3D%20document.querySelector('.header')%3B%0Awindow.addEventListener(%22scroll%22%2C%20function()%20%7B%0Aif%20(document.body.scrollTop%20%3E%2090%20%7C%7C%20document.documentElement.scrollTop%20%3E%2090)%20%7B%0AsetTimeout(function()%7B%0AheaderEl.classList.add(%22header--scrolled%22)%3B%0A%7D%2C%20120)%3B%0A%7D%20%0Aelse%20%7B%0AsetTimeout(function()%7B%0AheaderEl.classList.remove(%22header--scrolled%22)%3B%0A%7D%2C%20120)%3B%0A%7D%0A%7D)%3B%0A%7D)%3B*%2F%0A%20%20%2F*document.addEventListener(%22scroll%22%2C%20(event)%20%3D%3E%20%7B%0A%20%20%20%20let%20header%20%3D%20document.querySelector(%22%23header%20.sticky-header%22)%0A%20%20%20%20let%20top%20%3D%20header.getBoundingClientRect().top%3B%0A%20%20%20%20if(top%20%3C%3D%200)%20%7B%0A%20%20%20%20%20%20header.classList.add(%22scrolled-header%22)%3B%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20header.classList.remove(%22scrolled-header%22)%3B%0A%20%20%20%20%7D%0A%20%20%7D)%3B*%2F%0A%3C%2Fscript%3E"
      />
    </_Component>
  );
}
