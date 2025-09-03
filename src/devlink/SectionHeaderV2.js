"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { IconArrowRight } from "./IconArrowRight";
import { IconScroll } from "./IconScroll";

export function SectionHeaderV2({
  as: _Component = _Builtin.VFlex,
  label = "YOUR WHOLE HOME",
  hideTitle = true,
  title = "Heading",
  titleTag = "h2",
  hideIntroText = true,
  introText = "Closet World was founded over 30 years ago with a passion to organize every American home. With the largest selection of custom systems, finishes, and accessories in the industry, we offer solutions for your entire home.",
  introTextMobile = "Closet World was founded over 30 years ago with a passion to organize every American home. With the largest selection of custom systems, finishes, and accessories in the industry, we offer solutions for your entire home.",
  showScrollIcon = false,
  showLink = false,
  btnText = "Learn more",

  btnLink = {
    href: "#",
  },

  show2ndIntro = false,
  secondIntroText = "Find the nearest Closet World location and schedule your free in-home consultation today.",
  variant = "Base",
  hideSubHeading = true,
}) {
  const _styleVariantMap = {
    Base: "",
    "Long Title": "w-variant-8736a8c2-5d44-aaf6-59a8-f0b6d288a5a0",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component
      className={`section-header-v2 ${_activeStyleVariant}`}
      tag="div"
    >
      {hideSubHeading ? (
        <_Builtin.Block
          className={`subheading-v2 ${_activeStyleVariant}`}
          tag="div"
        >
          {label}
        </_Builtin.Block>
      ) : null}
      {hideTitle ? (
        <_Builtin.Heading
          className={`h2-v2 ${_activeStyleVariant}`}
          tag={titleTag}
        >
          {title}
        </_Builtin.Heading>
      ) : null}
      {hideIntroText ? (
        <_Builtin.Block
          className={`section-header-v2-intro hidden-tablet ${_activeStyleVariant}`}
          tag="div"
        >
          {introText}
        </_Builtin.Block>
      ) : null}
      {hideIntroText ? (
        <_Builtin.Block
          className={`section-header-v2-intro hidden-desktop ${_activeStyleVariant}`}
          tag="div"
        >
          {introTextMobile}
        </_Builtin.Block>
      ) : null}
      {show2ndIntro ? (
        <_Builtin.Block className={`h5-v2 ${_activeStyleVariant}`} tag="div">
          {secondIntroText}
        </_Builtin.Block>
      ) : null}
      {showLink ? (
        <_Builtin.Link
          className={`btn-v2 btn-v2--text ${_activeStyleVariant}`}
          button={false}
          block="inline"
          options={btnLink}
        >
          <_Builtin.Block tag="div">{btnText}</_Builtin.Block>
          <IconArrowRight />
        </_Builtin.Link>
      ) : null}
      {showScrollIcon ? (
        <_Builtin.Block
          className={`section-header-v2-scroll ${_activeStyleVariant}`}
          tag="div"
        >
          <IconScroll />
          <_Builtin.HtmlEmbed
            className={`hidden ${_activeStyleVariant}`}
            value="%3Cstyle%3E%0A%2F*%20Animation%20definition%20for%20the%20arrow%20path%20*%2F%0A%40keyframes%20bounceUpDown%20%7B%0A%20%200%25%20%7B%0A%20%20%20%20transform%3A%20translateY(0)%3B%20%2F*%20Start%20at%20original%20position%20*%2F%0A%20%20%7D%0A%20%2050%25%20%7B%0A%20%20%20%20transform%3A%20translateY(-20px)%3B%20%2F*%20Move%2010px%20up%20*%2F%0A%20%20%7D%0A%20%20100%25%20%7B%0A%20%20%20%20transform%3A%20translateY(0)%3B%20%2F*%20Return%20to%20original%20position%20*%2F%0A%20%20%7D%0A%7D%0A%0A%2F*%20Apply%20the%20animation%20to%20the%20path%20*%2F%0A.animate-arrow-up-down%20%7B%0A%20%20animation%3A%20bounceUpDown%203s%20ease-in-out%20infinite%3B%20%2F*%20Apply%20the%20animation%20*%2F%0A%7D%0A%3C%2Fstyle%3E"
          />
        </_Builtin.Block>
      ) : null}
    </_Component>
  );
}
