"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { ElementsSidebarLinks } from "./ElementsSidebarLinks";
import { PatternsSidebarLinks } from "./PatternsSidebarLinks";
import { GlobalStylesCss } from "./GlobalStylesCss";
import { GlobalSplideJs } from "./GlobalSplideJs";

export function NavbarV2StyleGuide({
  as: _Component = _Builtin.NavbarWrapper,
}) {
  return (
    <_Component
      className="navbar-v2 is--style"
      tag="div"
      config={{
        easing: "ease",
        easing2: "ease",
        duration: 400,
        docHeight: false,
        noScroll: false,
        animation: "default",
        collapse: "medium",
      }}
    >
      <_Builtin.VFlex className="navbar-v2-inner" tag="div" data-anim-wrap="">
        <_Builtin.Link
          className="navbar-v2-menu-toggle"
          button={false}
          trigger-menu=""
          aria-label="Open the menu"
          block="inline"
          options={{
            href: "#",
          }}
        >
          <_Builtin.HtmlEmbed
            className="navbar-v2-menu-text"
            value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2225%22%20height%3D%226%22%20viewBox%3D%220%200%2025%206%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20d%3D%22M24.1945%203.35537C24.1945%203.67934%2024.1457%203.97759%2024.048%204.25014C23.9503%204.52268%2023.8037%204.75923%2023.6083%204.95978C23.4181%205.16033%2023.1789%205.31717%2022.891%205.4303C22.603%205.54343%2022.2713%205.6%2021.8959%205.6C21.5154%205.6%2021.1811%205.54343%2020.8932%205.4303C20.6052%205.31717%2020.3635%205.16033%2020.1681%204.95978C19.9778%204.75923%2019.8339%204.52268%2019.7362%204.25014C19.6385%203.97759%2019.5896%203.67934%2019.5896%203.35537V0H20.7929V3.30909C20.7929%203.47879%2020.8186%203.63563%2020.87%203.77961C20.9266%203.9236%2021.0037%204.04959%2021.1014%204.15758C21.1991%204.26042%2021.3148%204.3427%2021.4485%204.40441C21.5874%204.46097%2021.7365%204.48926%2021.8959%204.48926C22.0553%204.48926%2022.2019%204.46097%2022.3356%204.40441C22.4693%204.3427%2022.585%204.26042%2022.6827%204.15758C22.7804%204.04959%2022.855%203.9236%2022.9064%203.77961C22.963%203.63563%2022.9912%203.47879%2022.9912%203.30909V0H24.1945V3.35537Z%22%20fill%3D%22%23C8C7C5%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M12.9139%200H14.5492L16.871%203.79504H16.8864V0H18.0897V5.46116H16.5161L14.1327%201.57355H14.1172V5.46116H12.9139V0Z%22%20fill%3D%22%23C8C7C5%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M7.71606%200H11.4262V1.11074H8.91937V2.12893H11.2874V3.23967H8.91937V4.35041H11.5651V5.46116H7.71606V0Z%22%20fill%3D%22%23C8C7C5%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M0%200H1.82038L3.07768%203.56364H3.09311L4.35812%200H6.17079V5.46116H4.96748V1.27273H4.95206L3.51735%205.46116H2.59944L1.21873%201.27273H1.2033V5.46116H0V0Z%22%20fill%3D%22%23C8C7C5%22%2F%3E%0A%3C%2Fsvg%3E"
          />
          <_Builtin.Block className="navbar-v2-menu-bar" tag="div" />
          <_Builtin.Block className="navbar-v2-menu-bar" tag="div" />
        </_Builtin.Link>
        <_Builtin.NavbarBrand
          className="logo__link-v2"
          options={{
            href: "/",
          }}
        >
          <_Builtin.Image
            className="logo logo--sm"
            width="110"
            height="46"
            loading="eager"
            alt="Closet World logo"
            src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/675bec00a0c9d073cbabdad8_Closet-World-Logo-130px.svg"
          />
        </_Builtin.NavbarBrand>
        <_Builtin.NavbarMenu
          className="navbar-v2-menu is--left"
          tag="nav"
          role="navigation"
          data-anim-menu-cont=""
        >
          <_Builtin.HtmlEmbed
            className="hidden-css-js"
            value="%3Cstyle%3E%0A.header-spacer%20%7B%0A%20%20height%3A%20135px%3B%0A%7D%0A%40media%20screen%20and%20(min-width%3A%201341px)%20%7B%0A%20%20.navbar-v2.is--style%20%7B%0A%20%20%20%20padding-top%3A%202.5rem%3B%0A%20%20%20%20padding-bottom%3A%202.5rem%3B%0A%20%20%7D%0A%7D%0A%40media%20screen%20and%20(max-width%3A%201340px)%20%7B%0A%20%20.navbar-v2.is--style%20%7B%0A%20%20%20%20padding-top%3A%200%3B%0A%20%20%20%20padding-bottom%3A%200%3B%0A%20%20%7D%0A%20%20.navbar-v2-menu-inner.custom.is--style%20%7B%0A%20%20%09margin-left%3A%20auto%3B%0A%20%20%20%20padding-left%3A%202rem%3B%0A%20%20%20%20padding-right%3A%202rem%3B%0A%20%20%7D%0A%20%20.header-spacer%20%7B%0A%20%20%09height%3A%2071px%3B%0A%20%20%7D%0A%20%20.main-nav__link__text.dropdown%20%7B%0A%20%20%09width%3A%20100%25%3B%0A%20%20%7D%0A%20%20.w-icon-dropdown-toggle.dropdown-icon-2%20%7B%0A%20%20%09display%3A%20block%3B%0A%20%20%7D%0A%20%20.main-nav__link_sg.w--current%20%7B%0A%20%20%09border-bottom%3A%200%3B%0A%20%20%7D%0A%7D%0A%40media%20screen%20and%20(max-width%3A%20991px)%20%7B%0A%20%20.main-nav__item%20%7B%0A%20%20%20%20border-bottom%3A%20var(--primary-color)%3B%0A%20%20%7D%0A%20%20.header-spacer%20%7B%0A%20%20%20%20height%3A%20var(--header-height-mobile)%3B%0A%20%20%7D%0A%20%20.navbar-v2-menu-inner.custom.is--style%20%7B%0A%20%20%20%20padding-left%3A%201rem%3B%0A%20%20%20%20padding-right%3A%201rem%3B%0A%20%20%7D%0A%7D%0A%40media%20screen%20and%20(min-width%3A%201340px)%20%7B%0A%20%20.dropdown-list-3.w--open%20%7B%0A%20%20%20%20display%3A%20none!important%3B%0A%20%20%7D%0A%20%20.main-nav__link_sg.active%20%7B%0A%20%20%20%20border-bottom%3A%202px%20solid%20var(--primary-color)%3B%0A%20%20%7D%0A%7D%0A%3C%2Fstyle%3E%0A%3Cscript%3E%0Adocument.addEventListener(%22DOMContentLoaded%22%2C%20function%20()%20%7B%0A%20%20const%20path%20%3D%20window.location.pathname.toLowerCase()%3B%0A%0A%20%20%2F%2F%20Check%20if%20the%20URL%20includes%20%22patterns%22%20or%20%22elements%22%0A%20%20const%20isPatterns%20%3D%20path.includes(%22%2Fpatterns%22)%3B%0A%20%20const%20isElements%20%3D%20path.includes(%22%2Felements%22)%3B%0A%20%20const%20isChangelog%20%3D%20path.includes(%22%2Fchangelog%22)%3B%0A%0A%20%20%2F%2F%20Select%20all%20nav%20links%0A%20%20const%20navLinks%20%3D%20document.querySelectorAll(%22.main-nav__link_sg%22)%3B%0A%0A%20%20navLinks.forEach(link%20%3D%3E%20%7B%0A%20%20%20%20const%20href%20%3D%20link.getAttribute(%22href%22).toLowerCase()%3B%0A%20%20%20%20%0A%20%20%20%20if%20(%0A%20%20%20%20%20%20(isPatterns%20%26%26%20href.includes(%22%2Fpatterns%22))%20%7C%7C%0A%20%20%20%20%20%20(isElements%20%26%26%20href.includes(%22%2Felements%22))%20%7C%7C%0A%20%20%20%20%20%20(isChangelog%20%26%26%20href.includes(%22%2Fchangelog%22))%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20link.classList.add(%22active%22)%3B%0A%20%20%20%20%7D%0A%20%20%7D)%3B%0A%7D)%3B%0A%3C%2Fscript%3E"
          />
          <_Builtin.VFlex
            className="navbar-v2-menu-inner custom is--style"
            tag="div"
          >
            <_Builtin.DropdownWrapper
              className="main-nav__item is--style"
              tag="div"
              data-anim-menu-stagger="true"
              delay={0}
              hover={true}
            >
              <_Builtin.DropdownToggle
                className="main-nav__link__text dropdown is--style"
                tag="div"
              >
                <_Builtin.Link
                  className="main-nav__link_sg"
                  button={false}
                  block=""
                  options={{
                    href: "#",
                  }}
                >
                  {"Elements"}
                </_Builtin.Link>
                <_Builtin.Icon
                  className="dropdown-icon-2 is--style"
                  widget={{
                    type: "icon",
                    icon: "dropdown-toggle",
                  }}
                />
              </_Builtin.DropdownToggle>
              <_Builtin.DropdownList
                className="dropdown-list-3 is-style"
                tag="nav"
              >
                <ElementsSidebarLinks />
              </_Builtin.DropdownList>
            </_Builtin.DropdownWrapper>
            <_Builtin.DropdownWrapper
              className="main-nav__item is--style"
              tag="div"
              data-anim-menu-stagger="true"
              delay={0}
              hover={true}
            >
              <_Builtin.DropdownToggle
                className="main-nav__link__text dropdown is--style"
                tag="div"
              >
                <_Builtin.Link
                  className="main-nav__link_sg"
                  button={false}
                  block=""
                  options={{
                    href: "#",
                  }}
                >
                  {"Patterns"}
                </_Builtin.Link>
                <_Builtin.Icon
                  className="dropdown-icon-2 is--style"
                  widget={{
                    type: "icon",
                    icon: "dropdown-toggle",
                  }}
                />
              </_Builtin.DropdownToggle>
              <_Builtin.DropdownList
                className="dropdown-list-3 is-style"
                tag="nav"
              >
                <PatternsSidebarLinks />
              </_Builtin.DropdownList>
            </_Builtin.DropdownWrapper>
            <_Builtin.Block className="main-nav__item is--style" tag="div">
              <_Builtin.Block className="main-nav__link__text" tag="div">
                <_Builtin.Link
                  className="main-nav__link_sg"
                  button={false}
                  block=""
                  options={{
                    href: "#",
                  }}
                >
                  {"Changelog"}
                </_Builtin.Link>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.VFlex>
        </_Builtin.NavbarMenu>
      </_Builtin.VFlex>
      <GlobalStylesCss />
      <GlobalSplideJs />
      <_Builtin.HtmlEmbed
        className="pdp-subnav-js-global"
        value="%3Cscript%3E%0Avar%20Webflow%20%3D%20Webflow%20%7C%7C%20%5B%5D%3B%0AWebflow.push(function()%20%7B%0A%20%20%24(window).on('scroll'%2C%20function()%20%7B%0A%20%20%20%20%24('.pdp-subnav.open%2C%20.ov-subnav-wrap.open').removeClass('open')%3B%0A%20%20%7D)%3B%0A%7D)%3B%0A%0A%3C%2Fscript%3E"
      />
      <_Builtin.HtmlEmbed
        className="gsap-init"
        value="%3C!--%20%3Cscript%20src%3D%22https%3A%2F%2Fcdnjs.cloudflare.com%2Fajax%2Flibs%2Fgsap%2F3.11.1%2Fgsap.min.js%22%3E%3C%2Fscript%3E%0A%3Cscript%20src%3D%22https%3A%2F%2Fcdnjs.cloudflare.com%2Fajax%2Flibs%2Fgsap%2F3.12.2%2Fgsap.min.js%22%3E%3C%2Fscript%3E%0A%3Cscript%20src%3D%22https%3A%2F%2Fcdnjs.cloudflare.com%2Fajax%2Flibs%2Fgsap%2F3.11.1%2FScrollTrigger.min.js%22%3E%3C%2Fscript%3E%20--%3E%0A%3Cscript%20src%3D%22https%3A%2F%2Fcdn.jsdelivr.net%2Fnpm%2Fgsap%403.12.7%2Fdist%2Fgsap.min.js%22%3E%3C%2Fscript%3E%0A%3Cscript%20src%3D%22https%3A%2F%2Fcdn.jsdelivr.net%2Fnpm%2Fgsap%403.12.7%2Fdist%2FScrollTrigger.min.js%22%3E%3C%2Fscript%3E%0A%3Cscript%3E%0A%2F%2F%20use%20a%20script%20tag%20or%20an%20external%20JS%20file%0Adocument.addEventListener(%22DOMContentLoaded%22%2C%20(event)%20%3D%3E%20%7B%0A%20%20gsap.registerPlugin(ScrollTrigger)%0A%7D)%3B%0A%3C%2Fscript%3E%0A%3C!--%20%3Cscript%3Egsap.registerPlugin(ScrollTrigger)%3B%3C%2Fscript%3E%20--%3E"
      />
      <_Builtin.HtmlEmbed
        className="hidden-css"
        value="%3Cstyle%3E%0Afooter.footer-v2__section%20%7B%0A%09display%3A%20none%3B%0A%7D%0A.show-footer%20footer.footer-v2__section%20%7B%0A%09display%3A%20block%3B%0A%7D%0A%3C%2Fstyle%3E"
      />
    </_Component>
  );
}
