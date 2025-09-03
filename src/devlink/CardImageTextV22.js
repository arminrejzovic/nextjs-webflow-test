"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function CardImageTextV22({
  as: _Component = _Builtin.Block,
  image = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/685573956cb41793ce9e7b7d_2d94529bb9eeaf5b6757cd86e75af02e88e70a70.jpg",
  title = "Drawers",
  text = "Explore the range and variety of our colors and finishes.",

  link = {
    href: "#",
  },
}) {
  return (
    <_Component
      className="card-it"
      id="w-node-d9cd8a71-8dc4-fd80-4a83-d3bb6b3b1e75-6b3b1e75"
      tag="div"
    >
      <_Builtin.Image
        className="card-it__image"
        loading="lazy"
        width="auto"
        height="auto"
        alt=""
        src={image}
      />
      <_Builtin.Block className="card-it__content" tag="div">
        <_Builtin.Block tag="div">
          <_Builtin.Block
            className="h5-v2 color-heading-v2 text-align--center"
            tag="div"
          >
            {title}
          </_Builtin.Block>
          <_Builtin.Block className="h9-v2 text-align--center" tag="div">
            {text}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Link
          className="btn-v2 btn-v2--secondary is--blue smaller"
          button={false}
          block="inline"
          options={link}
        >
          <_Builtin.Block className="h9-v2 weight--black" tag="div">
            {"Learn more"}
          </_Builtin.Block>
        </_Builtin.Link>
      </_Builtin.Block>
    </_Component>
  );
}
