"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { IconArrowRight } from "./IconArrowRight";

export function BlogPostV2({
  as: _Component = _Builtin.Block,

  link = {
    href: "#",
  },

  featuredImage = "",
  featuredImageAltText = "__wf_reserved_inherit",
  publishDate = "This is some text inside of a div block.",
  name = "Heading",
  metaDescription = "This is some text inside of a div block.",
  postLink = true,
}) {
  return (
    <_Component className="related-posts__item grey-bg" tag="div">
      {postLink ? (
        <_Builtin.Link
          className="related-posts__media"
          button={false}
          block="inline"
          options={link}
        >
          <_Builtin.Image
            className="related-posts__img"
            width="auto"
            height="auto"
            loading="lazy"
            src={featuredImage}
          />
        </_Builtin.Link>
      ) : null}
      <_Builtin.Block className="related-posts__content" tag="div">
        <_Builtin.Block className="related-posts__content__cont" tag="div">
          <_Builtin.Block className="related-posts__header" tag="div">
            <_Builtin.Block
              tag="div"
              fs-cmsnest-element="nest-target"
              fs-cmsnest-collection="categories"
            />
            <_Builtin.Block className="related-posts__date" tag="div">
              {publishDate}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Heading className="blog-posts__title" tag="h5">
            {name}
          </_Builtin.Heading>
          <_Builtin.Block className="blog-posts__intro" tag="div">
            {metaDescription}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.VFlex className="flex-block" tag="div">
          <_Builtin.Link
            className="btn-v2 btn-v2--text no-padd"
            button={false}
            block="inline"
            options={link}
          >
            <_Builtin.Block tag="div">{"Read more"}</_Builtin.Block>
            <IconArrowRight />
          </_Builtin.Link>
        </_Builtin.VFlex>
      </_Builtin.Block>
    </_Component>
  );
}
