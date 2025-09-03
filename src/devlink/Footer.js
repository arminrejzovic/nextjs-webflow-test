"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { SectionNewsletter } from "./SectionNewsletter";
import { PromoFooter } from "./PromoFooter";
import { FormLogic } from "./FormLogic";
import { FooterMenu } from "./FooterMenu";

export function Footer({
  as: _Component = _Builtin.Block,
  newsletterVisibility,
  promoVisibility = false,
}) {
  return (
    <_Component tag="div">
      {newsletterVisibility ? (
        <_Builtin.Block tag="div">
          <SectionNewsletter />
        </_Builtin.Block>
      ) : null}
      {promoVisibility ? (
        <_Builtin.Block tag="div">
          <PromoFooter />
        </_Builtin.Block>
      ) : null}
      <FormLogic />
      <FooterMenu />
      <_Builtin.Block className="loading-screen" tag="div">
        <_Builtin.BlockContainer
          className="container"
          grid={{
            type: "container",
          }}
          tag="div"
        >
          <_Builtin.Block className="loading-screen__inner" tag="div">
            <_Builtin.Block className="loading-screen__animation" tag="div">
              <_Builtin.HtmlEmbed value="%3Cdiv%20id%3D%22loading-animation-placeholder%22%3E%3C%2Fdiv%3E" />
            </_Builtin.Block>
            <_Builtin.Block className="loading-screen__status" tag="div">
              <_Builtin.Block className="loading-screen__text" tag="div">
                {"Building the closet..."}
              </_Builtin.Block>
              <_Builtin.Block className="loading-screen__bar" tag="div">
                <_Builtin.Block
                  className="loading-screen__bar--line"
                  tag="div"
                />
              </_Builtin.Block>
              <_Builtin.Block className="loading-screen__percentage" tag="div">
                {"0%"}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.BlockContainer>
        <_Builtin.HtmlEmbed value="%3Cstyle%3E%0A%09.loading-screen%20%7B%0A%20%20%09transition%3A%20all%200.25s%20ease-in-out%3B%0A%20%20%7D%0A%09.loading-screen.open%20%7B%0A%20%20%09opacity%3A%201%3B%0A%20%20%20%20pointer-events%3A%20all%3B%0A%20%20%7D%0A%20%20.loading-animation%20%7B%0A%20%20%09max-width%3A%201000px%3B%0A%20%20%7D%0A%3C%2Fstyle%3E%0A%0A%3Cscript%3E%0A%20%20let%20scriptLoaded%20%3D%20false%3B%0A%0A%20%20function%20loadLottieScript()%20%7B%0A%20%20%20%20if%20(!scriptLoaded)%20%7B%0A%20%20%20%20%20%20scriptLoaded%20%3D%20true%3B%0A%20%20%20%20%20%20const%20script%20%3D%20document.createElement(%22script%22)%3B%0A%20%20%20%20%20%20script.src%20%3D%20%22https%3A%2F%2Funpkg.com%2F%40lottiefiles%2Flottie-player%402.0.12%2Fdist%2Flottie-player.js%22%3B%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20%2F%2F%20When%20the%20script%20is%20loaded%2C%20create%20the%20%3Clottie-player%3E%20element%0A%20%20%20%20%20%20script.onload%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20console.log(%22Lottie%20script%20loaded.%20Adding%20Lottie%20player...%22)%3B%0A%0A%20%20%20%20%20%20%20%20%2F%2F%20Find%20the%20placeholder%20container%0A%20%20%20%20%20%20%20%20const%20placeholder%20%3D%20document.getElementById(%22loading-animation-placeholder%22)%3B%0A%0A%20%20%20%20%20%20%20%20%2F%2F%20Create%20the%20%3Clottie-player%3E%20element%0A%20%20%20%20%20%20%20%20const%20lottiePlayer%20%3D%20document.createElement(%22lottie-player%22)%3B%0A%20%20%20%20%20%20%20%20lottiePlayer.setAttribute(%22class%22%2C%20%22loading-animation%22)%3B%0A%20%20%20%20%20%20%20%20lottiePlayer.setAttribute(%22loop%22%2C%20%22%22)%3B%0A%20%20%20%20%20%20%20%20lottiePlayer.setAttribute(%22mode%22%2C%20%22normal%22)%3B%0A%20%20%20%20%20%20%20%20lottiePlayer.setAttribute(%22speed%22%2C%20%221.2%22)%3B%0A%20%20%20%20%20%20%20%20lottiePlayer.setAttribute(%0A%20%20%20%20%20%20%20%20%20%20%22src%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22https%3A%2F%2Fcdn.prod.website-files.com%2F65dc50a9ff2046f1c1b27199%2F670fe3d0419eadef969c4166_CW_Loading.json%22%0A%20%20%20%20%20%20%20%20)%3B%0A%0A%20%20%20%20%20%20%20%20%2F%2F%20Add%20the%20%3Clottie-player%3E%20to%20the%20placeholder%20container%0A%20%20%20%20%20%20%20%20placeholder.appendChild(lottiePlayer)%3B%0A%20%20%20%20%20%20%7D%3B%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20document.body.appendChild(script)%3B%0A%0A%20%20%20%20%20%20document.removeEventListener(%22mousemove%22%2C%20loadLottieScript)%3B%0A%20%20%20%20%20%20document.removeEventListener(%22touchstart%22%2C%20loadLottieScript)%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%0A%20%20document.addEventListener(%22mousemove%22%2C%20loadLottieScript%2C%20%7B%20once%3A%20true%20%7D)%3B%0A%20%20document.addEventListener(%22touchstart%22%2C%20loadLottieScript%2C%20%7B%20once%3A%20true%20%7D)%3B%0A%3C%2Fscript%3E" />
      </_Builtin.Block>
      <_Builtin.HtmlEmbed
        className="lazy-load-vidzflow---js"
        value="%3Cscript%3E%0Adocument.addEventListener(%22DOMContentLoaded%22%2C%20()%20%3D%3E%20%7B%0A%20%20%20%20const%20lazyLoadIframes%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20const%20iframes%20%3D%20document.querySelectorAll(%22iframe%5Bdata-vzf-src%5D%22)%3B%0A%20%20%20%20%20%20%20%20iframes.forEach(iframe%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20if%20(!iframe.getAttribute(%22src%22))%20%7B%20%2F%2F%20Only%20set%20src%20if%20not%20already%20set%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20iframe.setAttribute(%22src%22%2C%20iframe.getAttribute(%22data-vzf-src%22))%3B%0A%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%7D%3B%0A%0A%20%20%20%20const%20triggerLazyLoad%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20lazyLoadIframes()%3B%0A%20%20%20%20%20%20%20%20%2F%2F%20Remove%20the%20event%20listeners%20after%20first%20interaction%0A%20%20%20%20%20%20%20%20document.removeEventListener(%22mousemove%22%2C%20triggerLazyLoad)%3B%0A%20%20%20%20%20%20%20%20document.removeEventListener(%22touchstart%22%2C%20triggerLazyLoad)%3B%0A%20%20%20%20%7D%3B%0A%0A%20%20%20%20%2F%2F%20Listen%20for%20user%20interactions%0A%20%20%20%20document.addEventListener(%22mousemove%22%2C%20triggerLazyLoad%2C%20%7B%20once%3A%20true%20%7D)%3B%0A%20%20%20%20document.addEventListener(%22touchstart%22%2C%20triggerLazyLoad%2C%20%7B%20once%3A%20true%20%7D)%3B%0A%7D)%3B%0A%0A%3C%2Fscript%3E"
      />
    </_Component>
  );
}
