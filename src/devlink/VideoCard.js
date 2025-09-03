"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function VideoCard({
  as: _Component = _Builtin.Block,
  image = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/6867a26faeef4f44f7f26d0a_0c2888ef0c53e2145cbdfffe7bd986cb837ae4e9.webp",
  titleTag = "h3",
  title = "Job name",
  text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  videoTime = "5:00",
}) {
  return (
    <_Component className="video-card" tag="div">
      <_Builtin.Block className="video-card__header" tag="div">
        <_Builtin.Image
          className="video-card__image"
          loading="lazy"
          width="auto"
          height="auto"
          src={image}
        />
        <_Builtin.Image
          className="video-card__play"
          loading="lazy"
          width="48"
          height="auto"
          alt=""
          src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/6883a0986f81f0de2af20156_Frame%202072750754.png"
        />
        <_Builtin.Block className="video-card__overlay" tag="div" />
      </_Builtin.Block>
      <_Builtin.Block className="video-card__content" tag="div">
        <_Builtin.Heading className="h9-v2 color-heading-v2" tag={titleTag}>
          {title}
        </_Builtin.Heading>
        <_Builtin.Block className="h11-v2 color-heading-v2" tag="div">
          {text}
        </_Builtin.Block>
        <_Builtin.Block className="video-card__footer" tag="div">
          <_Builtin.Block className="watch-label" tag="div">
            <_Builtin.Block tag="div">{"Watch"}</_Builtin.Block>
            <_Builtin.HtmlEmbed
              className="svg-icon"
              value="%3Csvg%20width%3D%229%22%20height%3D%2212%22%20viewBox%3D%220%200%209%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M7.25%206.43262L1.25%209.89746L0.5%2010.3301L0.5%201.66992L1.25%202.10254L7.25%205.56738L8%206L7.25%206.43262Z%22%20stroke%3D%22%23F3F3F4%22%2F%3E%0A%3C%2Fsvg%3E"
            />
          </_Builtin.Block>
          <_Builtin.Block className="time-label" tag="div">
            <_Builtin.Block tag="div">{videoTime}</_Builtin.Block>
            <_Builtin.HtmlEmbed
              className="svg-icon"
              value="%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M6%2011C8.76142%2011%2011%208.76142%2011%206C11%203.23858%208.76142%201%206%201C3.23858%201%201%203.23858%201%206C1%208.76142%203.23858%2011%206%2011Z%22%20stroke%3D%22currentColor%22%20stroke-miterlimit%3D%2210%22%2F%3E%0A%3Cpath%20d%3D%22M6%203.67389V5.9998H8.24171%22%20stroke%3D%22currentColor%22%20stroke-miterlimit%3D%2210%22%20stroke-linecap%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
            />
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
