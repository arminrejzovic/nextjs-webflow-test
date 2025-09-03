"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function SubnavV2Offers({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className="subnav-v2 subnav-v2-offers" tag="div">
      <_Builtin.Block className="subnav-v2__inner" tag="div">
        <_Builtin.HtmlEmbed
          className="subnav-js-scroll-direction"
          value="%3Cstyle%3E%0A.navbar-v2%2C%0A.subnav-v2%20%7B%0A%20%20transition%3A%20all%200.3s%20ease-in-out%3B%0A%20%20will-change%3A%20transform%3B%0A%20%20transform%3A%20translateY(0%25)%3B%0A%7D%0A%0A.navbar-v2.scroll-down%2C%0A.subnav-v2.scroll-down%7B%0A%20%20transform%3A%20translateY(-100%25)%3B%0A%7D%0A.navbar-v2.scroll-up%2C%0A.subnav-v2.scroll-up%7B%0A%20%20transform%3A%20translateY(0%25)%3B%0A%7D%0A.subnav-v2%20.navbar-v2-cta%2C%0A.subnav-v2%20.logo__link-v2%20%7B%0A%09transition%3A%20all%200.2s%20ease-in-out%3B%0A%20%20opacity%3A%200%3B%0A%20%20visibility%3A%20hidden%3B%0A%7D%0A.subnav-v2.scroll-down%20.navbar-v2-cta%2C%0A.subnav-v2.scroll-down%20.logo__link-v2%20%7B%0A%20%20opacity%3A%201%3B%0A%20%20visibility%3A%20visible%3B%0A%7D%0A%40media%20screen%20and%20(max-width%3A%201439px)%20%7B%0A%20%20.subnav-v2%20.navbar-v2-cta%2C%0A%20%20.subnav-v2%20.logo__link-v2%20%7B%0A%20%20%20%20display%3A%20none%3B%0A%20%20%7D%0A%7D%0A%0A%3C%2Fstyle%3E%0A%3Cscript%3E%0Avar%20Webflow%20%3D%20Webflow%20%7C%7C%20%5B%5D%3B%0AWebflow.push(function%20()%20%7B%0A%20%20const%20mainNav%20%3D%20document.querySelector('.navbar-v2')%3B%0A%20%20const%20subNav%20%3D%20document.querySelector('.subnav-v2')%3B%0A%0A%20%20if%20(!mainNav%20%7C%7C%20!subNav)%20return%3B%0A%0A%20%20let%20lastScrollY%20%3D%20window.scrollY%3B%0A%20%20let%20cumulativeDelta%20%3D%200%3B%0A%20%20let%20lastDirection%20%3D%200%3B%0A%20%20const%20scrollThreshold%20%3D%20200%3B%0A%0A%20%20const%20updateNavClasses%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20const%20currentScrollY%20%3D%20window.scrollY%3B%0A%20%20%20%20const%20scrollDelta%20%3D%20currentScrollY%20-%20lastScrollY%3B%0A%20%20%20%20const%20currentDirection%20%3D%20scrollDelta%20%3E%200%20%3F%201%20%3A%20-1%3B%0A%0A%20%20%20%20if%20(currentDirection%20!%3D%3D%20lastDirection)%20%7B%0A%20%20%20%20%20%20cumulativeDelta%20%3D%200%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20cumulativeDelta%20%2B%3D%20scrollDelta%3B%0A%0A%20%20%20%20if%20(Math.abs(cumulativeDelta)%20%3E%20scrollThreshold)%20%7B%0A%20%20%20%20%20%20if%20(currentDirection%20%3E%200)%20%7B%0A%20%20%20%20%20%20%20%20mainNav.classList.add('scroll-down')%3B%0A%20%20%20%20%20%20%20%20mainNav.classList.remove('scroll-up')%3B%0A%0A%20%20%20%20%20%20%20%20subNav.classList.add('scroll-down')%3B%0A%20%20%20%20%20%20%20%20subNav.classList.remove('scroll-up')%3B%0A%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20mainNav.classList.add('scroll-up')%3B%0A%20%20%20%20%20%20%20%20mainNav.classList.remove('scroll-down')%3B%0A%0A%20%20%20%20%20%20%20%20subNav.classList.add('scroll-up')%3B%0A%20%20%20%20%20%20%20%20subNav.classList.remove('scroll-down')%3B%0A%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20cumulativeDelta%20%3D%200%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20lastScrollY%20%3D%20currentScrollY%3B%0A%20%20%20%20lastDirection%20%3D%20currentDirection%3B%0A%20%20%7D%3B%0A%0A%20%20window.addEventListener('scroll'%2C%20()%20%3D%3E%20%7B%0A%20%20%20%20window.requestAnimationFrame(updateNavClasses)%3B%0A%20%20%7D)%3B%0A%7D)%3B%0A%0A%3C%2Fscript%3E"
        />
        <_Builtin.HtmlEmbed
          className=" subnav-css-js"
          value="%3Cstyle%3E%0A%09.no-scroll%20%7B%0A%20%20%20%20overflow%3A%20hidden%3B%0A%20%20%7D%0A%20%20.header-spacer%20%7B%0A%20%20%20%20height%3A%20calc(2%20*%20var(--header-height))%3B%0A%20%20%7D%0A%09.subnav-v2.subnav-v2-offers%20%7B%0A%20%20%09top%3A%20var(--header-height)%3B%0A%20%20%20%20height%3A%20var(--header-height)%3B%0A%20%20%20%20box-shadow%3A%200px%2015px%2020px%200px%20rgba(0%2C0%2C0%2C0.05)%3B%0A%20%20%7D%09%0A%20%20.subnav-v2__menu__link.w--current%20%7B%0A%20%20%09color%3A%20var(--red-v2)%3B%0A%20%20%20%20font-weight%3A%20900%3B%0A%20%20%7D%0A%20%20%0A%20%20%40media%20screen%20and%20(max-width%3A%20767px)%20%7B%0A%20%20%09.subnav-v2.subnav-v2-offers%20%7B%0A%20%20%20%20%20%20height%3A%20auto%3B%0A%20%20%20%20%20%20box-shadow%3A%20none%3B%0A%20%20%20%20%7D%0A%20%20%20%20.subnav-v2__menu__back-icon%20svg%20%7B%0A%20%20%20%20%09width%3A%2012px%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%3C%2Fstyle%3E"
        />
        <_Builtin.Block className="subnav-v2__menu" tag="div">
          <_Builtin.Block className="subnav-v2__menu__back" tag="div">
            <_Builtin.Link
              className="subnav-v2__menu__link"
              button={false}
              block="inline"
              options={{
                href: "/offers-special-incentive-discount",
              }}
            >
              <_Builtin.HtmlEmbed
                className="subnav-v2__menu__back-icon"
                value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2217%22%20height%3D%2215%22%20viewBox%3D%220%200%2017%2015%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20d%3D%22M17%207.3926H1M1%207.3926L7.8%200.633339M1%207.3926L7.8%2013.9667%22%20stroke%3D%22currentColor%22%20stroke-linejoin%3D%22bevel%22%2F%3E%0A%3C%2Fsvg%3E"
              />
              <_Builtin.Block tag="div">{"Back to Offers"}</_Builtin.Block>
            </_Builtin.Link>
          </_Builtin.Block>
          <_Builtin.Block className="subnav-v2__menu__list" tag="div">
            <_Builtin.Link
              className="subnav-v2__menu__link"
              button={false}
              block="inline"
              options={{
                href: "/discounts",
              }}
            >
              <_Builtin.Block tag="div">{"Discounts"}</_Builtin.Block>
            </_Builtin.Link>
            <_Builtin.Link
              className="subnav-v2__menu__link"
              button={false}
              block="inline"
              options={{
                href: "/financing",
              }}
            >
              <_Builtin.Block tag="div">{"Financing"}</_Builtin.Block>
            </_Builtin.Link>
            <_Builtin.Link
              className="subnav-v2__menu__link hidden"
              button={false}
              block="inline"
              options={{
                href: "/special-programs",
              }}
            >
              <_Builtin.Block tag="div">{"Special Programs"}</_Builtin.Block>
            </_Builtin.Link>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
