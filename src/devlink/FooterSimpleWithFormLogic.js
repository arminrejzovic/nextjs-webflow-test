"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { PromoFooter } from "./PromoFooter";
import { FormLogic } from "./FormLogic";

export function FooterSimpleWithFormLogic({ as: _Component = _Builtin.Block }) {
  return (
    <_Component tag="div">
      <PromoFooter />
      <FormLogic />
      <_Builtin.Block className="footer-v1" tag="div">
        <_Builtin.Block className="footer-top-v1" tag="div">
          <_Builtin.BlockContainer
            className="container"
            tag="div"
            grid={{
              type: "container",
            }}
          >
            <_Builtin.Block
              className="footer-top__wrapper-v1 is--simple"
              tag="div"
            >
              <_Builtin.Block className="footer-top__left" tag="div">
                <_Builtin.Block
                  className="footer-top__left__inner-v1"
                  tag="div"
                >
                  <_Builtin.Link
                    className="logo__link margin--bot events-none"
                    button={false}
                    block="inline"
                    options={{
                      href: "/old-site-pages/old-home",
                    }}
                  >
                    <_Builtin.Image
                      className="logo logo--md"
                      width="auto"
                      height="auto"
                      loading="lazy"
                      alt="Closet World logo"
                      src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/675bec00232e9da6b1a920fd_Closet-World-Logo-200px.svg"
                    />
                  </_Builtin.Link>
                  <_Builtin.Block className="mt--20" tag="div">
                    {"Serving California & Nevada"}
                  </_Builtin.Block>
                  <_Builtin.Block tag="div">
                    {"Call: "}
                    <_Builtin.Link
                      className="footer-abbr__link-v1"
                      button={false}
                      block=""
                      options={{
                        href: "#",
                      }}
                    >
                      {"1-800-434-6018"}
                    </_Builtin.Link>{" "}
                    <_Builtin.Span className="ms-simple-hidden">
                      {"or "}
                    </_Builtin.Span>
                    <_Builtin.Link
                      className="footer-abbr__link-v1 ms-simple-hidden"
                      button={false}
                      block=""
                      options={{
                        href: "#",
                      }}
                    >
                      <_Builtin.Span>{"Schedule Now"}</_Builtin.Span>
                    </_Builtin.Link>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className="footer-top__right-v1"
                id="w-node-_8d6318ec-ec97-1abb-c0dd-e71ba584fa06-a584f9e9"
                tag="div"
              >
                <_Builtin.Block
                  className="footer-menu__wrapper-v1 is--simple"
                  tag="div"
                >
                  <_Builtin.Block
                    className="footer-menu-v1"
                    id="w-node-_8d6318ec-ec97-1abb-c0dd-e71ba584fa08-a584f9e9"
                    tag="div"
                  >
                    <_Builtin.Block className="footer-title-v1" tag="div">
                      {"Legal"}
                    </_Builtin.Block>
                    <_Builtin.Link
                      className="footer-link-v1 termly-display-preferences"
                      button={false}
                      block=""
                      options={{
                        href: "#",
                      }}
                    >
                      {"Consent Preferences"}
                    </_Builtin.Link>
                    <_Builtin.Link
                      className="footer-link-v1"
                      button={false}
                      block=""
                      options={{
                        href: "/old-site-pages/privacy-policy-old",
                      }}
                    >
                      {"Privacy Policy"}
                    </_Builtin.Link>
                    <_Builtin.Link
                      className="footer-link-v1"
                      button={false}
                      block=""
                      options={{
                        href: "/old-site-pages/cookie-policy-old",
                      }}
                    >
                      {"Cookie Policy"}
                    </_Builtin.Link>
                    <_Builtin.Link
                      className="footer-link-v1"
                      button={false}
                      block=""
                      options={{
                        href: "/old-site-pages/terms-and-conditions-old",
                      }}
                    >
                      {"Terms & Conditions"}
                    </_Builtin.Link>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className="footer-menu-v1"
                    id="w-node-_01fe08f1-13aa-781d-5019-0eaabab1de12-a584f9e9"
                    tag="div"
                  >
                    <_Builtin.Link
                      className="footer-link-v1 bigger"
                      button={false}
                      block=""
                      options={{
                        href: "/old-site-pages/disclaimer-old",
                      }}
                    >
                      {"Disclaimer"}
                    </_Builtin.Link>
                    <_Builtin.Link
                      className="footer-link-v1 bigger"
                      button={false}
                      block=""
                      options={{
                        href: "/old-site-pages/dsar-form-old",
                      }}
                    >
                      {"Do Not Sell or Share My Personal Information"}
                    </_Builtin.Link>
                    <_Builtin.Link
                      className="footer-link-v1 bigger"
                      button={false}
                      block=""
                      options={{
                        href: "/old-site-pages/dsar-form-old",
                      }}
                    >
                      {"Limit the Use Of My Sensitive Personal Information"}
                    </_Builtin.Link>
                    <_Builtin.Link
                      className="accessibility-toggle accessibility-toggle--v1"
                      button={true}
                      aria-label="Accessibility"
                      block=""
                      options={{
                        href: "#",
                      }}
                    >
                      {"Accessibility"}
                    </_Builtin.Link>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.BlockContainer>
        </_Builtin.Block>
        <_Builtin.Block className="footer-bottom-v1" tag="div">
          <_Builtin.BlockContainer
            className="container"
            tag="div"
            grid={{
              type: "container",
            }}
          >
            <_Builtin.Block className="footer-copyright" tag="div">
              <_Builtin.Block className="footer-abbr-v1" tag="div">
                {"Copyright Closet World © 2025. All rights reserved."}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.BlockContainer>
        </_Builtin.Block>
        <_Builtin.HtmlEmbed
          className="hidden-html"
          value="%3Cstyle%3E%0A%20%20.footer-link%3Abefore%20%7B%0A%20%20%20%20content%3A%20%22%5Cf101%22%3B%0A%20%20%20%20font-family%3A%20%22fontawesome%22%3B%0A%20%20%20%20font-size%3A%201em%3B%0A%20%20%20%20left%3A%200%3B%0A%20%20%20%20position%3A%20absolute%3B%0A%20%20%20%20top%3A%200%3B%0A%20%20%7D%0A%20%20%40media%20only%20screen%20and%20(max-width%3A%20767px)%20%7B%0A%20%20%20%20.footer-link%3Abefore%20%7B%0A%20%20%20%20%20%20top%3A%2013px%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20.fb-icon%3Abefore%20%7B%0A%20%20%20%20content%3A%20%22%5Cf09a%22%3B%0A%20%20%7D%0A%20%20.ig-icon%3Abefore%20%7B%0A%20%20%20%20content%3A%20%22%5Cf16d%22%3B%0A%20%20%7D%0A%20%20.yt-icon%3Abefore%20%7B%0A%20%20%20%20content%3A%20%22%5Cf167%22%3B%0A%20%20%7D%0A%20%20.pt-icon%3Abefore%20%7B%0A%20%20%20%20content%3A%20%22%5Cf0d2%22%3B%0A%20%20%7D%0A%20%20.tw-icon%3Abefore%20%7B%0A%20%20%20%20content%3A%20%22%5Cf099%22%3B%0A%20%20%7D%0A%0A%20%20.footer-social__link-v2.footer-social__link--fb%3Ahover%20svg%20%3E%20g%20%3E%20path%20%7B%0A%20%20%20%20fill%3A%20%233b579d%3B%0A%20%20%7D%0A%20%20%0A%20%20.footer-social__link-v2.footer-social__link--tw%3Ahover%20svg%20path%20%7B%0A%20%20%20%20fill%3A%20%23000000%3B%0A%20%20%7D%0A%20%20%0A%20%20.footer-social__link-v2.footer-social__link--yt%3Ahover%20svg%20path%20%7B%0A%20%20%20%20fill%3A%20%23FF0000%3B%0A%20%20%7D%0A%20%20%0A%20%20.footer-social__link-v2.footer-social__link--ig%3Ahover%20svg%20path%20%7B%0A%20%20%20%20fill%3A%20%23F56040%3B%0A%20%20%7D%0A%20%20%0A%20%20.footer-social__link-v2.footer-social__link--pt%3Ahover%20svg%20path%20%7B%0A%20%20%20%20fill%3A%20%23ce3d2b%3B%0A%20%20%7D%0A%3C%2Fstyle%3E"
        />
      </_Builtin.Block>
      <_Builtin.Block className="loading-screen" tag="div">
        <_Builtin.BlockContainer
          className="container"
          tag="div"
          grid={{
            type: "container",
          }}
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
        <_Builtin.HtmlEmbed value="%3Cstyle%3E%0A%09.loading-screen%20%7B%0A%20%20%09transition%3A%20all%200.25s%20ease-in-out%3B%0A%20%20%7D%0A%09.loading-screen.open%20%7B%0A%20%20%09opacity%3A%201%3B%0A%20%20%20%20pointer-events%3A%20all%3B%0A%20%20%7D%0A%20%20.loading-animation%20%7B%0A%20%20%09max-width%3A%201000px%3B%0A%20%20%7D%0A%3C%2Fstyle%3E%0A%3Cscript%3E%0A%20%20let%20scriptLoaded%20%3D%20false%3B%0A%0A%20%20function%20loadLottieScript()%20%7B%0A%20%20%20%20if%20(!scriptLoaded)%20%7B%0A%20%20%20%20%20%20scriptLoaded%20%3D%20true%3B%0A%20%20%20%20%20%20const%20script%20%3D%20document.createElement(%22script%22)%3B%0A%20%20%20%20%20%20script.src%20%3D%20%22https%3A%2F%2Funpkg.com%2F%40lottiefiles%2Flottie-player%402.0.12%2Fdist%2Flottie-player.js%22%3B%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20%2F%2F%20When%20the%20script%20is%20loaded%2C%20create%20the%20%3Clottie-player%3E%20element%0A%20%20%20%20%20%20script.onload%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20console.log(%22Lottie%20script%20loaded.%20Adding%20Lottie%20player...%22)%3B%0A%0A%20%20%20%20%20%20%20%20%2F%2F%20Find%20the%20placeholder%20container%0A%20%20%20%20%20%20%20%20const%20placeholder%20%3D%20document.getElementById(%22loading-animation-placeholder%22)%3B%0A%0A%20%20%20%20%20%20%20%20%2F%2F%20Create%20the%20%3Clottie-player%3E%20element%0A%20%20%20%20%20%20%20%20const%20lottiePlayer%20%3D%20document.createElement(%22lottie-player%22)%3B%0A%20%20%20%20%20%20%20%20lottiePlayer.setAttribute(%22class%22%2C%20%22loading-animation%22)%3B%0A%20%20%20%20%20%20%20%20lottiePlayer.setAttribute(%22loop%22%2C%20%22%22)%3B%0A%20%20%20%20%20%20%20%20lottiePlayer.setAttribute(%22mode%22%2C%20%22normal%22)%3B%0A%20%20%20%20%20%20%20%20lottiePlayer.setAttribute(%22speed%22%2C%20%221.2%22)%3B%0A%20%20%20%20%20%20%20%20lottiePlayer.setAttribute(%0A%20%20%20%20%20%20%20%20%20%20%22src%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22https%3A%2F%2Fcdn.prod.website-files.com%2F65dc50a9ff2046f1c1b27199%2F670fe3d0419eadef969c4166_CW_Loading.json%22%0A%20%20%20%20%20%20%20%20)%3B%0A%0A%20%20%20%20%20%20%20%20%2F%2F%20Add%20the%20%3Clottie-player%3E%20to%20the%20placeholder%20container%0A%20%20%20%20%20%20%20%20placeholder.appendChild(lottiePlayer)%3B%0A%20%20%20%20%20%20%7D%3B%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20document.body.appendChild(script)%3B%0A%0A%20%20%20%20%20%20document.removeEventListener(%22mousemove%22%2C%20loadLottieScript)%3B%0A%20%20%20%20%20%20document.removeEventListener(%22touchstart%22%2C%20loadLottieScript)%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%0A%20%20document.addEventListener(%22mousemove%22%2C%20loadLottieScript%2C%20%7B%20once%3A%20true%20%7D)%3B%0A%20%20document.addEventListener(%22touchstart%22%2C%20loadLottieScript%2C%20%7B%20once%3A%20true%20%7D)%3B%0A%3C%2Fscript%3E" />
      </_Builtin.Block>
    </_Component>
  );
}
