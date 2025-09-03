"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { IconArrowTopRight } from "./IconArrowTopRight";

export function NewsCard({
  as: _Component = _Builtin.Block,
  image = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/6867a26faeef4f44f7f26d0a_0c2888ef0c53e2145cbdfffe7bd986cb837ae4e9.webp",
  titleTag = "h3",
  title = "News Title",
  text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",

  link = {
    href: "#",
  },

  linkText = "Real full article",
}) {
  return (
    <_Component className="news-card" tag="div">
      <_Builtin.Link
        className="news-card__header"
        button={false}
        block="inline"
        options={link}
      >
        <_Builtin.Image
          className="news-card__image"
          width="auto"
          height="auto"
          loading="lazy"
          src={image}
        />
      </_Builtin.Link>
      <_Builtin.Block className="news-card__content" tag="div">
        <_Builtin.Heading className="h9-v2 color-heading-v2" tag={titleTag}>
          {title}
        </_Builtin.Heading>
        <_Builtin.Block className="h11-v2 color-heading-v2" tag="div">
          {text}
        </_Builtin.Block>
        <_Builtin.Block className="news-card__footer" tag="div">
          <_Builtin.Link
            className="btn-v2 btn-v2--secondary is--blue"
            button={false}
            block="inline"
            options={link}
          >
            <_Builtin.Block tag="div">{linkText}</_Builtin.Block>
            <_Builtin.Block className="icon-xxs" tag="div">
              <IconArrowTopRight />
            </_Builtin.Block>
          </_Builtin.Link>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
