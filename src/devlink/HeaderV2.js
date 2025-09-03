"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { NavbarV2Menu } from "./NavbarV2Menu";
import { GlobalStylesCss } from "./GlobalStylesCss";
import { GlobalSplideJs } from "./GlobalSplideJs";

export function HeaderV2({
  as: _Component = _Builtin.NavbarWrapper,
  formProgressVisibility = false,
  buttonCtaPhone = false,
  buttonCtaSchedule = true,
  buttonCtaText = "Schedule Appointment",
  variant = "White + Blur",
}) {
  const _styleVariantMap = {
    Base: "",
    "White + Blur": "w-variant-675c3621-1492-677e-b956-f2201b5c2f5f",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component
      className={`navbar-v2 ${_activeStyleVariant}`}
      tag="div"
      config={{
        animation: "default",
        collapse: "medium",
        docHeight: false,
        duration: 400,
        easing: "ease",
        easing2: "ease",
        noScroll: false,
      }}
    >
      <_Builtin.VFlex
        className={`navbar-v2-inner ${_activeStyleVariant}`}
        tag="div"
        data-anim-wrap=""
      >
        <_Builtin.Link
          className={`navbar-v2-menu-toggle ${_activeStyleVariant}`}
          button={false}
          trigger-menu=""
          aria-label="Open the menu"
          block="inline"
          options={{
            href: "#",
          }}
        >
          <_Builtin.HtmlEmbed
            className={`navbar-v2-menu-text ${_activeStyleVariant}`}
            value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2225%22%20height%3D%226%22%20viewBox%3D%220%200%2025%206%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20d%3D%22M24.1945%203.35537C24.1945%203.67934%2024.1457%203.97759%2024.048%204.25014C23.9503%204.52268%2023.8037%204.75923%2023.6083%204.95978C23.4181%205.16033%2023.1789%205.31717%2022.891%205.4303C22.603%205.54343%2022.2713%205.6%2021.8959%205.6C21.5154%205.6%2021.1811%205.54343%2020.8932%205.4303C20.6052%205.31717%2020.3635%205.16033%2020.1681%204.95978C19.9778%204.75923%2019.8339%204.52268%2019.7362%204.25014C19.6385%203.97759%2019.5896%203.67934%2019.5896%203.35537V0H20.7929V3.30909C20.7929%203.47879%2020.8186%203.63563%2020.87%203.77961C20.9266%203.9236%2021.0037%204.04959%2021.1014%204.15758C21.1991%204.26042%2021.3148%204.3427%2021.4485%204.40441C21.5874%204.46097%2021.7365%204.48926%2021.8959%204.48926C22.0553%204.48926%2022.2019%204.46097%2022.3356%204.40441C22.4693%204.3427%2022.585%204.26042%2022.6827%204.15758C22.7804%204.04959%2022.855%203.9236%2022.9064%203.77961C22.963%203.63563%2022.9912%203.47879%2022.9912%203.30909V0H24.1945V3.35537Z%22%20fill%3D%22%23C8C7C5%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M12.9139%200H14.5492L16.871%203.79504H16.8864V0H18.0897V5.46116H16.5161L14.1327%201.57355H14.1172V5.46116H12.9139V0Z%22%20fill%3D%22%23C8C7C5%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M7.71606%200H11.4262V1.11074H8.91937V2.12893H11.2874V3.23967H8.91937V4.35041H11.5651V5.46116H7.71606V0Z%22%20fill%3D%22%23C8C7C5%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M0%200H1.82038L3.07768%203.56364H3.09311L4.35812%200H6.17079V5.46116H4.96748V1.27273H4.95206L3.51735%205.46116H2.59944L1.21873%201.27273H1.2033V5.46116H0V0Z%22%20fill%3D%22%23C8C7C5%22%2F%3E%0A%3C%2Fsvg%3E"
          />
          <_Builtin.Block
            className={`navbar-v2-menu-bar ${_activeStyleVariant}`}
            tag="div"
          />
          <_Builtin.Block
            className={`navbar-v2-menu-bar ${_activeStyleVariant}`}
            tag="div"
          />
        </_Builtin.Link>
        <_Builtin.NavbarBrand
          className={`logo__link-v2 ${_activeStyleVariant}`}
          options={{
            href: "/",
          }}
        >
          <_Builtin.Image
            className={`logo logo--sm ${_activeStyleVariant}`}
            loading="eager"
            width="110"
            height="46"
            alt="Closet World logo"
            src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/675bec00a0c9d073cbabdad8_Closet-World-Logo-130px.svg"
          />
        </_Builtin.NavbarBrand>
        <NavbarV2Menu />
        <_Builtin.Block
          className={`navbar-v2-cta ${_activeStyleVariant}`}
          tag="div"
        >
          {buttonCtaPhone ? (
            <_Builtin.Link
              className={`btn-v2 btn-v2--nav btn-v2--secondary btn-cta-phone ${_activeStyleVariant}`}
              button={false}
              block="inline"
              options={{
                href: "tel:1-800-434-6018",
              }}
            >
              <_Builtin.Block
                className={`btn-v2__icon ${_activeStyleVariant}`}
                tag="div"
              >
                <_Builtin.Image
                  className={`btn-v2__icon__image ${_activeStyleVariant}`}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt="Animated phone icon"
                  src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/67e4302bb920739564a29e0d_animated%20phone%20icon.gif"
                />
              </_Builtin.Block>
              <_Builtin.Block tag="div">{"1-800-434-6018"}</_Builtin.Block>
            </_Builtin.Link>
          ) : null}
          <_Builtin.NotSupported _atom="OptimizationExperience" />
        </_Builtin.Block>
      </_Builtin.VFlex>
      {formProgressVisibility ? (
        <_Builtin.Block
          className={`form-steps__progress ${_activeStyleVariant}`}
          tag="div"
        >
          <_Builtin.Block
            className={`form-steps__progress-bar ${_activeStyleVariant}`}
            tag="div"
            data-value="0"
          />
        </_Builtin.Block>
      ) : null}
      <GlobalStylesCss />
      <GlobalSplideJs />
      <_Builtin.HtmlEmbed
        className={`pdp-subnav-js-global ${_activeStyleVariant}`}
        value="%3Cscript%3E%0Avar%20Webflow%20%3D%20Webflow%20%7C%7C%20%5B%5D%3B%0AWebflow.push(function()%20%7B%0A%20%20%24(window).on('scroll'%2C%20function()%20%7B%0A%20%20%20%20%24('.pdp-subnav.open%2C%20.ov-subnav-wrap.open').removeClass('open')%3B%0A%20%20%7D)%3B%0A%7D)%3B%0A%0A%3C%2Fscript%3E"
      />
      <_Builtin.HtmlEmbed
        className={`gsap-init ${_activeStyleVariant}`}
        value="%3C!--%20%3Cscript%20src%3D%22https%3A%2F%2Fcdnjs.cloudflare.com%2Fajax%2Flibs%2Fgsap%2F3.11.1%2Fgsap.min.js%22%3E%3C%2Fscript%3E%0A%3Cscript%20src%3D%22https%3A%2F%2Fcdnjs.cloudflare.com%2Fajax%2Flibs%2Fgsap%2F3.12.2%2Fgsap.min.js%22%3E%3C%2Fscript%3E%0A%3Cscript%20src%3D%22https%3A%2F%2Fcdnjs.cloudflare.com%2Fajax%2Flibs%2Fgsap%2F3.11.1%2FScrollTrigger.min.js%22%3E%3C%2Fscript%3E%20--%3E%0A%3Cscript%20src%3D%22https%3A%2F%2Fcdn.jsdelivr.net%2Fnpm%2Fgsap%403.12.7%2Fdist%2Fgsap.min.js%22%3E%3C%2Fscript%3E%0A%3Cscript%20src%3D%22https%3A%2F%2Fcdn.jsdelivr.net%2Fnpm%2Fgsap%403.12.7%2Fdist%2FScrollTrigger.min.js%22%3E%3C%2Fscript%3E%0A%3Cscript%3E%0A%2F%2F%20use%20a%20script%20tag%20or%20an%20external%20JS%20file%0Adocument.addEventListener(%22DOMContentLoaded%22%2C%20(event)%20%3D%3E%20%7B%0A%20%20gsap.registerPlugin(ScrollTrigger)%0A%7D)%3B%0A%3C%2Fscript%3E%0A%3C!--%20%3Cscript%3Egsap.registerPlugin(ScrollTrigger)%3B%3C%2Fscript%3E%20--%3E"
      />
    </_Component>
  );
}
