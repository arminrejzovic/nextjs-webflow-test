"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function AreaCard({
  as: _Component = _Builtin.Link,
  variant = "Base",

  link = {
    href: "#",
  },

  title = "Whittier, CA",
  hideText = true,
  text = "This is some text inside of a div block.",
  image = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/68b043f3066461376ef95f88_area-no-image-2x.png",
  altText = "__wf_reserved_inherit",
  hideLinkIcon = true,
}) {
  const _styleVariantMap = {
    Base: "",
    "Pointer default": "w-variant-6f1ad52d-22fa-3ffd-fe77-c135fc12b9de",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component
      className={`area-card ${_activeStyleVariant}`}
      button={false}
      block="inline"
      options={link}
    >
      <_Builtin.Block
        className={`area-card__media ${_activeStyleVariant}`}
        tag="div"
      >
        <_Builtin.Image
          className={`area-card__image ${_activeStyleVariant}`}
          loading="lazy"
          width="auto"
          height="auto"
          src={image}
        />
      </_Builtin.Block>
      <_Builtin.Block
        className={`area-card__content ${_activeStyleVariant}`}
        tag="div"
      >
        <_Builtin.Block
          className={`area-card__header ${_activeStyleVariant}`}
          tag="div"
        >
          <_Builtin.Heading
            className={`h9-v2 color-heading-v2 is--bold ${_activeStyleVariant}`}
            tag="h3"
          >
            {title}
          </_Builtin.Heading>
          {hideText ? (
            <_Builtin.Block
              className={`h11-v2 ${_activeStyleVariant}`}
              tag="div"
            >
              {text}
            </_Builtin.Block>
          ) : null}
          {hideLinkIcon ? (
            <_Builtin.Block
              className={`area-card__icon ${_activeStyleVariant}`}
              tag="div"
            >
              <_Builtin.HtmlEmbed
                className={`svg-icon ${_activeStyleVariant}`}
                value="%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%220.5%22%20y%3D%220.5%22%20width%3D%2239%22%20height%3D%2239%22%20rx%3D%2219.5%22%20stroke%3D%22%2335526A%22%2F%3E%0A%3Cpath%20d%3D%22M14.7526%2025.6571L25.5305%2014.6267M25.5305%2014.6267L13.837%2014.8494M25.5305%2014.6267L25.1507%2026.1631%22%20stroke%3D%22%2335526A%22%20stroke-linejoin%3D%22bevel%22%2F%3E%0A%3C%2Fsvg%3E"
              />
            </_Builtin.Block>
          ) : null}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
