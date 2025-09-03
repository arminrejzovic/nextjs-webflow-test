"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function LpCardImageWithTextOnHover({
  as: _Component = _Builtin.Block,
  title = "Design",
  text = "Customized closets expertly designed to double your space:",
  extraText = "",
  backgroundImage = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/67ea773dc0927a03e04840e8_Closet-World-Designers.webp",
}) {
  return (
    <_Component className="difference-grid-v2__item splide__slide" tag="div">
      <_Builtin.Image
        className="difference-grid-v2__image"
        loading="lazy"
        width="auto"
        height="auto"
        alt=""
        src={backgroundImage}
      />
      <_Builtin.Block className="difference-grid-v2__content" tag="div">
        <_Builtin.Block className="h5-v2 is--white-v2" tag="div">
          {title}
        </_Builtin.Block>
        <_Builtin.Block className="h10-v2 is--white-v2" tag="div">
          {text}
        </_Builtin.Block>
        <_Builtin.Block className="difference-grid-v2__content-extra" tag="div">
          <_Builtin.RichText className="rich-text-v2" tag="div" slot="">
            {extraText}
          </_Builtin.RichText>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className="difference-grid-v2__trigger" tag="div">
        <_Builtin.HtmlEmbed
          className="images-grid-v2__ico svg-icon"
          value="%3Csvg%20width%3D%2230%22%20height%3D%2230%22%20viewBox%3D%220%200%2030%2030%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%3Crect%20x%3D%222.4295%22%20y%3D%2213.4283%22%20width%3D%2225.1413%22%20height%3D%223.14266%22%20fill%3D%22%23FDFDFD%22%2F%3E%0A%20%20%3Crect%20x%3D%2213.4287%22%20y%3D%2227.5709%22%20width%3D%2225.1413%22%20height%3D%223.14266%22%20transform%3D%22rotate(-90%2013.4287%2027.5709)%22%20fill%3D%22%23FDFDFD%22%2F%3E%0A%3C%2Fsvg%3E"
        />
      </_Builtin.Block>
    </_Component>
  );
}
