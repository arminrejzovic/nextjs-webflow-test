"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function SubnavLocations({
  as: _Component = _Builtin.Block,

  locationPhone = {
    href: "#",
  },

  showPhoneIcon = false,

  aboutLink = {
    href: "/location",
  },

  videoGalleryLink = {
    href: "/location-video",
  },

  financingLink = {
    href: "#",
  },

  newsLink = {
    href: "/location-news",
  },

  reviewsLink = {
    href: "/location-reviews",
  },

  serviceAreasLink = {
    href: "#",
  },

  contactLink = {
    href: "/location-contact",
  },

  location = "Southern California",
}) {
  return (
    <_Component className="subnav-v2 subnav-v2-loc" tag="div">
      <_Builtin.Block className="subnav-loc-v2__inner" tag="div">
        <_Builtin.HtmlEmbed
          className="subnav-js-scroll-direction"
          value="%3Cstyle%3E%0A.navbar-v2%2C%0A.subnav-v2%20%7B%0A%20%20transition%3A%20all%200.3s%20ease-in-out%3B%0A%20%20will-change%3A%20transform%3B%0A%20%20transform%3A%20translateY(0%25)%3B%0A%7D%0A%0A.navbar-v2.scroll-down%2C%0A.subnav-v2.scroll-down%7B%0A%20%20transform%3A%20translateY(-100%25)%3B%0A%7D%0A.navbar-v2.scroll-up%2C%0A.subnav-v2.scroll-up%7B%0A%20%20transform%3A%20translateY(0%25)%3B%0A%7D%0A.subnav-v2%20.navbar-v2-cta%2C%0A.subnav-v2%20.logo__link-v2%20%7B%0A%09transition%3A%20all%200.2s%20ease-in-out%3B%0A%20%20opacity%3A%200%3B%0A%20%20visibility%3A%20hidden%3B%0A%7D%0A.subnav-v2.scroll-down%20.navbar-v2-cta%2C%0A.subnav-v2.scroll-down%20.logo__link-v2%20%7B%0A%20%20opacity%3A%201%3B%0A%20%20visibility%3A%20visible%3B%0A%7D%0A%40media%20screen%20and%20(max-width%3A%201439px)%20%7B%0A%20%20.subnav-v2%20.navbar-v2-cta%2C%0A%20%20.subnav-v2%20.logo__link-v2%20%7B%0A%20%20%20%20display%3A%20none%3B%0A%20%20%7D%0A%7D%0A%0A%3C%2Fstyle%3E%0A%3Cscript%3E%0Avar%20Webflow%20%3D%20Webflow%20%7C%7C%20%5B%5D%3B%0AWebflow.push(function%20()%20%7B%0A%20%20const%20mainNav%20%3D%20document.querySelector('.navbar-v2')%3B%0A%20%20const%20subNav%20%3D%20document.querySelector('.subnav-v2')%3B%0A%0A%20%20if%20(!mainNav%20%7C%7C%20!subNav)%20return%3B%0A%0A%20%20let%20lastScrollY%20%3D%20window.scrollY%3B%0A%20%20let%20cumulativeDelta%20%3D%200%3B%0A%20%20let%20lastDirection%20%3D%200%3B%0A%20%20const%20scrollThreshold%20%3D%20200%3B%0A%0A%20%20const%20updateNavClasses%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20const%20currentScrollY%20%3D%20window.scrollY%3B%0A%20%20%20%20const%20scrollDelta%20%3D%20currentScrollY%20-%20lastScrollY%3B%0A%20%20%20%20const%20currentDirection%20%3D%20scrollDelta%20%3E%200%20%3F%201%20%3A%20-1%3B%0A%0A%20%20%20%20if%20(currentDirection%20!%3D%3D%20lastDirection)%20%7B%0A%20%20%20%20%20%20cumulativeDelta%20%3D%200%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20cumulativeDelta%20%2B%3D%20scrollDelta%3B%0A%0A%20%20%20%20if%20(Math.abs(cumulativeDelta)%20%3E%20scrollThreshold)%20%7B%0A%20%20%20%20%20%20if%20(currentDirection%20%3E%200)%20%7B%0A%20%20%20%20%20%20%20%20mainNav.classList.add('scroll-down')%3B%0A%20%20%20%20%20%20%20%20mainNav.classList.remove('scroll-up')%3B%0A%0A%20%20%20%20%20%20%20%20subNav.classList.add('scroll-down')%3B%0A%20%20%20%20%20%20%20%20subNav.classList.remove('scroll-up')%3B%0A%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20mainNav.classList.add('scroll-up')%3B%0A%20%20%20%20%20%20%20%20mainNav.classList.remove('scroll-down')%3B%0A%0A%20%20%20%20%20%20%20%20subNav.classList.add('scroll-up')%3B%0A%20%20%20%20%20%20%20%20subNav.classList.remove('scroll-down')%3B%0A%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20cumulativeDelta%20%3D%200%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20lastScrollY%20%3D%20currentScrollY%3B%0A%20%20%20%20lastDirection%20%3D%20currentDirection%3B%0A%20%20%7D%3B%0A%0A%20%20window.addEventListener('scroll'%2C%20()%20%3D%3E%20%7B%0A%20%20%20%20window.requestAnimationFrame(updateNavClasses)%3B%0A%20%20%7D)%3B%0A%7D)%3B%0A%3C%2Fscript%3E"
        />
        <_Builtin.HtmlEmbed
          className=" subnav-css-js"
          value="%3Cstyle%3E%0A%09.no-scroll%20%7B%0A%20%20%20%20overflow%3A%20hidden%3B%0A%20%20%7D%0A%20%20.pdp-subnav__icon%20.nav-v2-dropdown-link__img%20%7B%0A%20%20%20%20height%3A%20auto%3B%0A%09%09width%3A%2029px%3B%0A%20%20%7D%0A%20%20.pdp-subnav__link%20.nav-v2-dropdown-link__img%2C%0A%09.pdp-subnav__trigger%20.nav-v2-dropdown-link__img%20%7B%0A%20%20%20%20transition%3A%20filter%200.2s%20ease-in-out%3B%0A%20%20%20%20filter%3A%20brightness(0)%20saturate(100%25)%20invert(45%25)%20sepia(26%25)%20saturate(0%25)%20hue-rotate(331deg)%20brightness(100%25)%20contrast(90%25)%3B%0A%20%20%7D%0A%20%20.pdp-subnav__link%3Ahover%20.nav-v2-dropdown-link__img%2C%0A%09.pdp-subnav__trigger%3Ahover%20.nav-v2-dropdown-link__img%20%7B%0A%20%20%20%20filter%3A%20brightness(0)%20saturate(100%25)%20invert(35%25)%20sepia(45%25)%20saturate(2511%25)%20hue-rotate(342deg)%20brightness(92%25)%20contrast(105%25)%3B%0A%20%20%7D%0A%20%20.header-spacer%20%7B%0A%20%20%20%20height%3A%20calc(2%20*%20var(--header-height))%3B%0A%20%20%7D%0A%09.subnav-v2%20%7B%0A%20%20%09top%3A%20var(--header-height)%3B%0A%20%20%20%20height%3A%20var(--header-height)%3B%0A%20%20%20%20box-shadow%3A%200px%2015px%2020px%200px%20rgba(0%2C0%2C0%2C0.05)%3B%0A%20%20%7D%09%0A%20%20.pdp-subnav__list%20%7B%0A%20%20%20%20display%3A%20flex%3B%0A%20%20%20%20visibility%3A%20hidden%3B%0A%20%20%20%20transition%3A%200.2s%20all%20ease-in-out%3B%0A%20%20%20%20transform%3A%20translateY(1rem)%3B%0A%20%20%20%20opacity%3A%200%3B%0A%20%20%20%20box-shadow%3A%200px%2015px%2020px%200px%20rgba(0%2C0%2C0%2C0.05)%3B%0A%20%20%7D%0A%20%20.pdp-subnav__arrow%2C%0A%20%20.ov-subnav__icon%20%7B%0A%20%20%09transition%3A%20transform%200.1s%20ease-in-out%3B%0A%20%20%20%20transform%3A%20rotate(0deg)%3B%0A%20%20%7D%0A%20%20.pdp-subnav.open%20.pdp-subnav__list%20%7B%0A%09%09visibility%3A%20visible%3B%0A%20%20%20%20transform%3A%20translateY(0)%3B%0A%20%20%20%20opacity%3A%201%3B%0A%20%20%7D%0A%20%20.pdp-subnav.open%20.pdp-subnav__arrow%20%7B%0A%20%20%09transform%3A%20rotate(180deg)%3B%0A%20%20%7D%0A%20%20.ov-subnav__link%20%7B%0A%20%20%09position%3A%20relative%3B%0A%20%20%7D%20%20%0A%20%20.pdp-subnav__text%2C%0A%20%20.pdp-subnav__icon%20%7B%0A%20%20%09transition%3A%200.2s%20all%20ease-in-out%3B%0A%20%20%7D%0A%20%20.pdp-subnav__trigger%3Ahover%20.pdp-subnav__text%2C%0A%20%20.pdp-subnav__trigger%3Ahover%20.pdp-subnav__icon%7B%0A%20%20%20%20color%3A%20var(--red-v2)%3B%0A%20%20%7D%0A%20%20%40media%20screen%20and%20(min-width%3A%20992px)%20%7B%0A%20%20%09%2F*%20.ov-subnav-wrap%2C%0A%20%20%20%20.pdp-subnav%20%7B%0A%20%20%20%20%09top%3A%200.25rem%3B%0A%20%20%20%20%7D%20*%2F%0A%20%20%20%20.pdp-subnav%3Ahover%20.pdp-subnav__list%20%7B%0A%20%20%20%20%20%20visibility%3A%20visible%3B%0A%20%20%20%20%20%20transform%3A%20translateY(0)%3B%0A%20%20%20%20%20%20opacity%3A%201%3B%0A%20%20%20%20%7D%0A%20%20%20%20.pdp-subnav__list%20%7B%0A%20%20%20%20%20%20left%3A%20-2rem%3B%0A%20%20%20%20%7D%0A%20%20%20%20.ov-subnav__anchors__bar%20%7B%0A%20%20%20%20%20%20display%3A%20flex%3B%0A%20%20%20%20%20%20justify-content%3A%20space-between%3B%0A%20%20%20%20%20%20align-items%3A%20center%3B%0A%20%20%20%20%20%20position%3A%20absolute%3B%0A%20%20%20%20%20%20background%3A%20var(--light-grey-v2)%3B%0A%20%20%20%20%20%20height%3A%202px%3B%0A%20%20%20%20%20%20width%3A%20calc(100%25%20-%203rem)%3B%0A%20%20%20%20%20%20top%3A%20-0.65rem%3B%0A%20%20%20%20%20%20left%3A%201rem%3B%0A%20%20%20%20%20%20z-index%3A%201%3B%0A%20%20%20%20%7D%0A%20%20%20%20.ov-subnav__anchors__bar__inner%20%7B%0A%20%20%20%20%20%20display%3A%20block%3B%0A%20%20%20%20%20%20position%3A%20absolute%3B%0A%20%20%20%20%20%20background%3A%20var(--black-v2)%3B%0A%20%20%20%20%20%20height%3A%202px%3B%0A%20%20%20%20%20%20width%3A%200%25%3B%0A%20%20%20%20%20%20top%3A%200%3B%0A%20%20%20%20%20%20left%3A%200%3B%0A%20%20%20%20%20%20z-index%3A%202%3B%0A%20%20%20%20%20%20transition%3A%20all%200.2s%20ease-in-out%3B%0A%20%20%20%20%7D%0A%20%20%20%20.ov-subnav__anchors__bar__dot%20%7B%0A%20%20%20%20%20%20display%3A%20block%3B%0A%20%20%20%20%20%20width%3A%200.9rem%3B%0A%20%20%20%20%20%20height%3A%200.9rem%3B%0A%20%20%20%20%20%20background%3A%20var(--light-grey-v2)%3B%0A%20%20%20%20%20%20border-radius%3A%2050%25%3B%0A%20%20%20%20%20%20left%3A%20calc(50%25%20-%200.5rem)%3B%0A%20%20%20%20%20%20top%3A%20-1.25rem%3B%0A%20%20%20%20%20%20z-index%3A%203%3B%0A%20%20%20%20%20%20transition%3A%20all%200.2s%20ease-in-out%3B%0A%20%20%20%20%7D%0A%20%20%20%20.ov-subnav__anchors__bar__dot.active%20%7B%0A%20%20%20%20%09background%3A%20var(--black-v2)%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20%40media%20screen%20and%20(max-width%3A%20991px)%20%7B%0A%20%20%09.subnav-v2%20%7B%0A%20%20%20%20%20%20gap%3A%200%3B%0A%20%20%20%20%09justify-content%3A%20space-between%3B%0A%20%20%20%20%20%20height%3A%20var(--header-height-tablet)%3B%0A%20%20%20%20%09top%3A%20var(--header-height-tablet)%3B%0A%20%20%20%20%20%20padding%3A%200%3B%0A%20%20%20%20%7D%0A%20%20%20%20.header-spacer%20%7B%0A%20%20%20%20%20%20height%3A%20calc(2%20*%20var(--header-height-tablet))%3B%0A%20%20%20%20%7D%0A%20%20%09.ov-subnav%20%7B%0A%20%20%20%20%20%20position%3A%20absolute%3B%0A%20%20%20%20%20%20top%3A%20100%25%3B%0A%20%20%20%20%20%20background%3A%20white%3B%0A%20%20%20%20%20%20min-width%3A%20200px%3B%0A%20%20%20%20%20%20right%3A%200%3B%0A%20%20%20%20%20%20padding%3A%201rem%200%3B%0A%20%20%20%20%20%20box-shadow%3A%200px%2015px%2020px%200px%20rgba(0%2C0%2C0%2C0.05)%3B%0A%20%20%20%20%7D%0A%20%20%20%20.pdp-subnav__trigger%20.pdp-subnav__icon%20%7B%0A%20%20%20%20%09display%3A%20none%3B%0A%20%20%20%20%7D%0A%20%20%20%20.ov-subnav-wrap.open%20.ov-subnav%20%7B%0A%20%20%20%20%09display%3A%20flex%3B%0A%20%20%20%20%7D%0A%20%20%20%20.ov-subnav-wrap.open%20.ov-subnav__icon%20%7B%0A%20%20%20%20%09transform%3A%20rotate(180deg)%3B%0A%20%20%20%20%7D%0A%20%20%20%20.ov-subnav__link.is--current%20%7B%0A%20%20%20%20%09color%3A%20var(--red-v2)%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20%0A%20%20.hide-dots%20.ov-subnav__anchors__bar%7B%0A%20%20%09display%3A%20none%3B%0A%20%20%7D%0A%20%20%0A%20%20.pdp-subnav__list%20.pdp-subnav__text%7B%0A%20%20%09color%3A%20var(--dark-grey-v2)%3B%0A%20%20%7D%0A%3C%2Fstyle%3E%0A%3Cscript%3E%0Avar%20Webflow%20%3D%20Webflow%20%7C%7C%20%5B%5D%3B%0AWebflow.push(function%20()%20%7B%0A%20%20const%20pdpSubnav%20%3D%20document.querySelector(%22.pdp-subnav%22)%3B%0A%20%20const%20ovSubnavWrap%20%3D%20document.querySelector(%22.ov-subnav-wrap%22)%3B%0A%20%20const%20ovSubnav%20%3D%20document.querySelector(%22.ov-subnav%22)%3B%0A%20%20const%20mobileSubnavTrigger%20%3D%20document.querySelector(%22.ov-subnav__trigger%22)%3B%0A%20%20const%20pdpSubnavTrigger%20%3D%20document.querySelector(%22.pdp-subnav__trigger%22)%3B%0A%0A%20%20if%20(window.matchMedia(%22(max-width%3A%20991px)%22).matches)%20%7B%0A%20%20%20%20if%20(pdpSubnav%20%26%26%20pdpSubnavTrigger)%20%7B%0A%20%20%20%20%20%20pdpSubnavTrigger.addEventListener(%22click%22%2C%20function%20()%20%7B%0A%20%20%20%20%20%20%20%20pdpSubnav.classList.toggle(%22open%22)%3B%0A%20%20%20%20%20%20%20%20if%20(ovSubnavWrap)%20%7B%0A%20%20%20%20%20%20%20%20%20%20ovSubnavWrap.classList.remove(%22open%22)%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20document.addEventListener(%22click%22%2C%20function%20(event)%20%7B%0A%20%20%20%20%20%20if%20(%0A%20%20%20%20%20%20%20%20pdpSubnav.classList.contains(%22open%22)%20%26%26%0A%20%20%20%20%20%20%20%20!pdpSubnav.contains(event.target)%20%26%26%0A%20%20%20%20%20%20%20%20!pdpSubnavTrigger.contains(event.target)%0A%20%20%20%20%20%20)%20%7B%0A%20%20%20%20%20%20%20%20pdpSubnav.classList.remove(%22open%22)%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D)%3B%0A%0A%20%20%20%20document.addEventListener(%22click%22%2C%20function%20(event)%20%7B%0A%20%20%20%20%20%20if%20(%0A%20%20%20%20%20%20%20%20ovSubnavWrap.classList.contains(%22open%22)%20%26%26%0A%20%20%20%20%20%20%20%20!ovSubnavWrap.contains(event.target)%20%26%26%0A%20%20%20%20%20%20%20%20!mobileSubnavTrigger.contains(event.target)%0A%20%20%20%20%20%20)%20%7B%0A%20%20%20%20%20%20%20%20ovSubnavWrap.classList.remove(%22open%22)%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D)%3B%0A%0A%20%20%20%20if%20(mobileSubnavTrigger%20%26%26%20ovSubnavWrap)%20%7B%0A%20%20%20%20%20%20const%20activeLink%20%3D%20ovSubnav.querySelector(%22.w--current%22)%3B%0A%20%20%20%20%20%20const%20targetHeading%20%3D%20mobileSubnavTrigger.querySelector(%22.is--loc%22)%3B%0A%0A%20%20%20%20%20%20if%20(activeLink%20%26%26%20targetHeading)%20%7B%0A%20%20%20%20%20%20%20%20const%20activeText%20%3D%20activeLink.textContent.trim()%3B%0A%20%20%20%20%20%20%20%20targetHeading.textContent%20%3D%20activeText%3B%0A%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20mobileSubnavTrigger.addEventListener(%22click%22%2C%20function%20()%20%7B%0A%20%20%20%20%20%20%20%20ovSubnavWrap.classList.toggle(%22open%22)%3B%0A%20%20%20%20%20%20%20%20if%20(pdpSubnav)%20%7B%0A%20%20%20%20%20%20%20%20%20%20pdpSubnav.classList.remove(%22open%22)%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20ovSubnav.addEventListener(%22click%22%2C%20function%20()%20%7B%0A%20%20%20%20%20%20%20%20ovSubnavWrap.classList.remove(%22open%22)%3B%0A%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E"
        />
        <_Builtin.Block className="pdp-subnav is--loc" tag="div">
          <_Builtin.Block className="subnav-loc__menu__location" tag="div">
            {location}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className="ov-subnav-wrap" tag="div">
          <_Builtin.Block className="ov-subnav__trigger is--loc" tag="div">
            <_Builtin.Block className="subheading-v2 is--loc" tag="div">
              {"Overview"}
            </_Builtin.Block>
            <_Builtin.Block className="ov-subnav__icon" tag="div">
              <_Builtin.HtmlEmbed
                className="svg-icon"
                value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20d%3D%22M4.16211%206.10834L7.94541%209.89163L11.7287%206.10834%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
              />
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block className="ov-subnav is--loc" tag="div">
            <_Builtin.Link
              className="subnav-loc__menu__link"
              button={false}
              block="inline"
              options={aboutLink}
            >
              <_Builtin.Block tag="div">{"About"}</_Builtin.Block>
            </_Builtin.Link>
            <_Builtin.Link
              className="subnav-loc__menu__link"
              button={false}
              block="inline"
              options={videoGalleryLink}
            >
              <_Builtin.Block tag="div">{"Video gallery"}</_Builtin.Block>
            </_Builtin.Link>
            <_Builtin.Link
              className="subnav-loc__menu__link"
              button={false}
              block="inline"
              options={financingLink}
            >
              <_Builtin.Block tag="div">{"Financing"}</_Builtin.Block>
            </_Builtin.Link>
            <_Builtin.Link
              className="subnav-loc__menu__link"
              button={false}
              block="inline"
              options={newsLink}
            >
              <_Builtin.Block tag="div">{"Recent news"}</_Builtin.Block>
            </_Builtin.Link>
            <_Builtin.Link
              className="subnav-loc__menu__link"
              button={false}
              block="inline"
              options={reviewsLink}
            >
              <_Builtin.Block tag="div">{"Reviews"}</_Builtin.Block>
            </_Builtin.Link>
            <_Builtin.Link
              className="subnav-loc__menu__link"
              button={false}
              block="inline"
              options={serviceAreasLink}
            >
              <_Builtin.Block tag="div">{"Service areas"}</_Builtin.Block>
            </_Builtin.Link>
            <_Builtin.Link
              className="subnav-loc__menu__link"
              button={false}
              block="inline"
              options={contactLink}
            >
              <_Builtin.Block tag="div">{"Contact us"}</_Builtin.Block>
            </_Builtin.Link>
            {showPhoneIcon ? (
              <_Builtin.Link
                className="subnav-loc__menu__link is--contact"
                button={false}
                block="inline"
                options={locationPhone}
              >
                <_Builtin.Image
                  className="subnav__contact"
                  loading="eager"
                  width="40.5"
                  height="auto"
                  alt=""
                  src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/6887442f93d8557117b5bf97_floating%20button.png"
                />
              </_Builtin.Link>
            ) : null}
            <_Builtin.Block className="ov-subnav__anchors" tag="div">
              <_Builtin.Block className="ov-subnav__anchors__bar" tag="div">
                <_Builtin.Block
                  className="ov-subnav__anchors__bar__inner"
                  tag="div"
                />
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
