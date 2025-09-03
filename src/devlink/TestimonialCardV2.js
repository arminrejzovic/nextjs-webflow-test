"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { IconPlusCircle } from "./IconPlusCircle";
import { IconMinusCircle } from "./IconMinusCircle";

export function TestimonialCardV2({
  as: _Component = _Builtin.Block,
  userImage = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/6786282ca6f3352612f5a52f_avatar.jpg",
  userName = "Jan Dawdled",
  location = "Whittier, CA",
  introtext = "Great service and design by Marielena Castro. She is very knowledgeable and kind. It’s the second time we called her and the satisfaction is 100%.",
  fullText = "",
}) {
  return (
    <_Component className="ts-card-v2" tag="div">
      <_Builtin.VFlex className="ts-card-v2__stars" tag="div">
        <_Builtin.HtmlEmbed
          className="svg-icon"
          value="%3Csvg%20width%3D%2219%22%20height%3D%2219%22%20viewBox%3D%220%200%2019%2019%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M9.59003%201L7.60503%207.16445H1.18103L6.37804%2010.9735L4.39203%2017.138L9.59003%2013.3289L14.787%2017.138L12.803%2010.9735L18%207.16445H11.575L9.59003%201Z%22%20fill%3D%22currentColor%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
        />
        <_Builtin.HtmlEmbed
          className="svg-icon"
          value="%3Csvg%20width%3D%2219%22%20height%3D%2219%22%20viewBox%3D%220%200%2019%2019%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M9.59003%201L7.60503%207.16445H1.18103L6.37804%2010.9735L4.39203%2017.138L9.59003%2013.3289L14.787%2017.138L12.803%2010.9735L18%207.16445H11.575L9.59003%201Z%22%20fill%3D%22currentColor%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
        />
        <_Builtin.HtmlEmbed
          className="svg-icon"
          value="%3Csvg%20width%3D%2219%22%20height%3D%2219%22%20viewBox%3D%220%200%2019%2019%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M9.59003%201L7.60503%207.16445H1.18103L6.37804%2010.9735L4.39203%2017.138L9.59003%2013.3289L14.787%2017.138L12.803%2010.9735L18%207.16445H11.575L9.59003%201Z%22%20fill%3D%22currentColor%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
        />
        <_Builtin.HtmlEmbed
          className="svg-icon"
          value="%3Csvg%20width%3D%2219%22%20height%3D%2219%22%20viewBox%3D%220%200%2019%2019%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M9.59003%201L7.60503%207.16445H1.18103L6.37804%2010.9735L4.39203%2017.138L9.59003%2013.3289L14.787%2017.138L12.803%2010.9735L18%207.16445H11.575L9.59003%201Z%22%20fill%3D%22currentColor%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
        />
        <_Builtin.HtmlEmbed
          className="svg-icon"
          value="%3Csvg%20width%3D%2219%22%20height%3D%2219%22%20viewBox%3D%220%200%2019%2019%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M9.59003%201L7.60503%207.16445H1.18103L6.37804%2010.9735L4.39203%2017.138L9.59003%2013.3289L14.787%2017.138L12.803%2010.9735L18%207.16445H11.575L9.59003%201Z%22%20fill%3D%22currentColor%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
        />
      </_Builtin.VFlex>
      <_Builtin.Block className="ts-card-v2__header" tag="div">
        <_Builtin.Block className="ts-card-v2__avatar" tag="div">
          <_Builtin.Image
            className="ts-card-v2__avatar__img"
            loading="lazy"
            width="600"
            height="684"
            alt=""
            src={userImage}
          />
        </_Builtin.Block>
        <_Builtin.Block className="ts-card-v2__name" tag="div">
          <_Builtin.Block tag="div">{userName}</_Builtin.Block>
          <_Builtin.Block tag="div">{location}</_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className="ts-card-v2__content" tag="div">
        <_Builtin.Block
          className="ts-card-v2__content__intro js-elipsis"
          tag="div"
        >
          {introtext}
        </_Builtin.Block>
        <_Builtin.RichText
          className="ts-card-v2__content__rich"
          tag="div"
          slot=""
        >
          {fullText}
        </_Builtin.RichText>
      </_Builtin.Block>
      <_Builtin.Block className="ts-card-v2__readmore__cont" tag="div">
        <_Builtin.Link
          className="ts-card-v2__readmore"
          button={false}
          block="inline"
          options={{
            href: "#",
          }}
        >
          <_Builtin.Block className="ts-card-v2__readmore__txt" tag="div">
            {"Read More"}
          </_Builtin.Block>
          <_Builtin.Block className="ts-card-v2__readmore__icon" tag="div">
            <IconPlusCircle />
            <IconMinusCircle />
          </_Builtin.Block>
        </_Builtin.Link>
      </_Builtin.Block>
    </_Component>
  );
}
