"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function CardV2Alt2({
  as: _Component = _Builtin.Link,

  link = {
    href: "#",
  },

  title = "Endless Customization",
  text = "Largest selection in the industry.",
  textVisibility = true,
  image = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/678e4961c591e784e9de5352_endless-customization.webp",
  icon = "",
  iconAltText = "__wf_reserved_inherit",
  iconVisibility = true,
  hasModal = false,
  modalText = "We’ll double your space with a one-of-a-kind solution, built just for you. We never use prefab products, and have the largest selection of finishes, materials, features, and accessories to personalize your space.",
}) {
  return (
    <_Component
      className="card-v2-alt"
      button={false}
      block="inline"
      options={link}
    >
      <_Builtin.VFlex className="card-v2-alt__header" tag="div">
        <_Builtin.Heading className="card-v2-alt__title" tag="h3">
          {title}
        </_Builtin.Heading>
        {textVisibility ? (
          <_Builtin.Block className="card-v2-alt__content" tag="div">
            <_Builtin.Block className="card-v2-alt__text" tag="div">
              {text}
            </_Builtin.Block>
          </_Builtin.Block>
        ) : null}
      </_Builtin.VFlex>
      <_Builtin.Image
        className="card-v2-alt__img"
        width="Auto"
        height="auto"
        loading="lazy"
        alt=""
        src={image}
      />
      {iconVisibility ? (
        <_Builtin.Block className="card-v2-alt__icon" tag="div">
          <_Builtin.Image
            className="card-v2-alt__icon__img"
            width="72"
            height="72"
            loading="lazy"
            alt=""
            src={icon}
          />
        </_Builtin.Block>
      ) : null}
      <_Builtin.Block className="card-v2-alt__overlay" tag="div" />
      {hasModal ? (
        <_Builtin.Block className="card-v2-alt__modal" tag="div">
          <_Builtin.Block className="h8-v2" tag="div">
            {modalText}
          </_Builtin.Block>
          <_Builtin.Block className="card-v2-alt__modal__close" tag="div">
            <_Builtin.HtmlEmbed
              className="svg-icon"
              value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2217%22%20height%3D%2220%22%20viewBox%3D%220%200%2017%2020%22%20fill%3D%22none%22%3E%0A%20%20%3Crect%20width%3D%2223.2059%22%20height%3D%222.90073%22%20transform%3D%22matrix(0.642744%200.766081%20-0.642744%200.766081%201.86475%200)%22%20fill%3D%22%23C8C7C5%22%2F%3E%0A%20%20%3Crect%20width%3D%2223.2059%22%20height%3D%222.90073%22%20transform%3D%22matrix(0.642744%20-0.766081%200.642744%200.766081%200%2017.7778)%22%20fill%3D%22%23C8C7C5%22%2F%3E%0A%3C%2Fsvg%3E"
            />
          </_Builtin.Block>
        </_Builtin.Block>
      ) : null}
    </_Component>
  );
}
