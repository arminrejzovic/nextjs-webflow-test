"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { IconArrowTopRight } from "./IconArrowTopRight";
import { IconPlus } from "./IconPlus";

export function ReviewsCard({
  as: _Component = _Builtin.Block,
  variant = "Base",

  link = {
    href: "#",
  },

  image = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/6867a26faeef4f44f7f26d0a_0c2888ef0c53e2145cbdfffe7bd986cb837ae4e9.webp",
  avatarImage = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/6867a270727f537d9f53d1e8_88674c81cfbdd7614c40e3ec1aedea8e8999f4ee.webp",
  author = "Nick C",
  reviewLocation = "Industry, CA",
  reviewIntro = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  linkText = "Read more",
  sourcePlatformImage = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/6887713cd25df2f4cfb88e99_image%201.png",
}) {
  const _styleVariantMap = {
    Base: "",
    Stacked: "w-variant-b83fe949-1c31-1e73-84ea-b1d8e2b0b8f0",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component className={`review-card ${_activeStyleVariant}`} tag="div">
      <_Builtin.Link
        className={`review-card__header ${_activeStyleVariant}`}
        button={false}
        block="inline"
        options={link}
      >
        <_Builtin.Image
          className={`review-card__image ${_activeStyleVariant}`}
          width="auto"
          height="auto"
          loading="lazy"
          src={image}
        />
      </_Builtin.Link>
      <_Builtin.Block
        className={`review-card__content ${_activeStyleVariant}`}
        tag="div"
      >
        <_Builtin.VFlex
          className={`review-card__info__wrapper ${_activeStyleVariant}`}
          tag="div"
        >
          <_Builtin.Block
            className={`review-card__info ${_activeStyleVariant}`}
            tag="div"
          >
            <_Builtin.Block
              className={`review-card__media ${_activeStyleVariant}`}
              tag="div"
            >
              <_Builtin.Image
                className={`review-card__avatar ${_activeStyleVariant}`}
                loading="lazy"
                width="auto"
                height="auto"
                src={avatarImage}
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={`review-card__author ${_activeStyleVariant}`}
              tag="div"
            >
              <_Builtin.Block
                className={`review-card__author__info ${_activeStyleVariant}`}
                tag="div"
              >
                <_Builtin.Block
                  className={`review-card__author__name ${_activeStyleVariant}`}
                  tag="div"
                >
                  {author}
                </_Builtin.Block>
                <_Builtin.Block
                  className={`review-card__author__location ${_activeStyleVariant}`}
                  tag="div"
                >
                  {reviewLocation}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={`review-card__ratings ${_activeStyleVariant}`}
                tag="div"
              >
                <_Builtin.HtmlEmbed
                  className={`svg-icon ${_activeStyleVariant}`}
                  value="%3Csvg%20width%3D%228%22%20height%3D%228%22%20viewBox%3D%220%200%208%208%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M3.70587%200.190875C3.82658%20-0.063625%204.17342%20-0.063625%204.29413%200.190875L5.28044%202.26938C5.32823%202.37016%205.4202%202.44007%205.52645%202.45655L7.71932%202.79644C7.98782%202.83805%208.0949%203.18334%207.90111%203.38223L6.31784%205.00671C6.24115%205.08547%206.206%205.19858%206.2239%205.30954L6.59275%207.59806C6.63792%207.87834%206.35742%208.09173%206.11683%207.96019L4.15207%206.88568C4.05683%206.83358%203.94317%206.83358%203.84793%206.88568L1.88317%207.96019C1.64258%208.09173%201.36208%207.87834%201.40725%207.59806L1.7761%205.30954C1.794%205.19858%201.75885%205.08547%201.68216%205.00671L0.0988857%203.38223C-0.0948972%203.18332%200.0121752%202.83805%200.28068%202.79644L2.47355%202.45655C2.5798%202.44007%202.67177%202.37016%202.71956%202.26938L3.70587%200.190875Z%22%20fill%3D%22%23FBA70B%22%2F%3E%0A%3C%2Fsvg%3E"
                />
                <_Builtin.HtmlEmbed
                  className={`svg-icon ${_activeStyleVariant}`}
                  value="%3Csvg%20width%3D%228%22%20height%3D%228%22%20viewBox%3D%220%200%208%208%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M3.70587%200.190875C3.82658%20-0.063625%204.17342%20-0.063625%204.29413%200.190875L5.28044%202.26938C5.32823%202.37016%205.4202%202.44007%205.52645%202.45655L7.71932%202.79644C7.98782%202.83805%208.0949%203.18334%207.90111%203.38223L6.31784%205.00671C6.24115%205.08547%206.206%205.19858%206.2239%205.30954L6.59275%207.59806C6.63792%207.87834%206.35742%208.09173%206.11683%207.96019L4.15207%206.88568C4.05683%206.83358%203.94317%206.83358%203.84793%206.88568L1.88317%207.96019C1.64258%208.09173%201.36208%207.87834%201.40725%207.59806L1.7761%205.30954C1.794%205.19858%201.75885%205.08547%201.68216%205.00671L0.0988857%203.38223C-0.0948972%203.18332%200.0121752%202.83805%200.28068%202.79644L2.47355%202.45655C2.5798%202.44007%202.67177%202.37016%202.71956%202.26938L3.70587%200.190875Z%22%20fill%3D%22%23FBA70B%22%2F%3E%0A%3C%2Fsvg%3E"
                />
                <_Builtin.HtmlEmbed
                  className={`svg-icon ${_activeStyleVariant}`}
                  value="%3Csvg%20width%3D%228%22%20height%3D%228%22%20viewBox%3D%220%200%208%208%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M3.70587%200.190875C3.82658%20-0.063625%204.17342%20-0.063625%204.29413%200.190875L5.28044%202.26938C5.32823%202.37016%205.4202%202.44007%205.52645%202.45655L7.71932%202.79644C7.98782%202.83805%208.0949%203.18334%207.90111%203.38223L6.31784%205.00671C6.24115%205.08547%206.206%205.19858%206.2239%205.30954L6.59275%207.59806C6.63792%207.87834%206.35742%208.09173%206.11683%207.96019L4.15207%206.88568C4.05683%206.83358%203.94317%206.83358%203.84793%206.88568L1.88317%207.96019C1.64258%208.09173%201.36208%207.87834%201.40725%207.59806L1.7761%205.30954C1.794%205.19858%201.75885%205.08547%201.68216%205.00671L0.0988857%203.38223C-0.0948972%203.18332%200.0121752%202.83805%200.28068%202.79644L2.47355%202.45655C2.5798%202.44007%202.67177%202.37016%202.71956%202.26938L3.70587%200.190875Z%22%20fill%3D%22%23FBA70B%22%2F%3E%0A%3C%2Fsvg%3E"
                />
                <_Builtin.HtmlEmbed
                  className={`svg-icon ${_activeStyleVariant}`}
                  value="%3Csvg%20width%3D%228%22%20height%3D%228%22%20viewBox%3D%220%200%208%208%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M3.70587%200.190875C3.82658%20-0.063625%204.17342%20-0.063625%204.29413%200.190875L5.28044%202.26938C5.32823%202.37016%205.4202%202.44007%205.52645%202.45655L7.71932%202.79644C7.98782%202.83805%208.0949%203.18334%207.90111%203.38223L6.31784%205.00671C6.24115%205.08547%206.206%205.19858%206.2239%205.30954L6.59275%207.59806C6.63792%207.87834%206.35742%208.09173%206.11683%207.96019L4.15207%206.88568C4.05683%206.83358%203.94317%206.83358%203.84793%206.88568L1.88317%207.96019C1.64258%208.09173%201.36208%207.87834%201.40725%207.59806L1.7761%205.30954C1.794%205.19858%201.75885%205.08547%201.68216%205.00671L0.0988857%203.38223C-0.0948972%203.18332%200.0121752%202.83805%200.28068%202.79644L2.47355%202.45655C2.5798%202.44007%202.67177%202.37016%202.71956%202.26938L3.70587%200.190875Z%22%20fill%3D%22%23FBA70B%22%2F%3E%0A%3C%2Fsvg%3E"
                />
                <_Builtin.HtmlEmbed
                  className={`svg-icon ${_activeStyleVariant}`}
                  value="%3Csvg%20width%3D%228%22%20height%3D%228%22%20viewBox%3D%220%200%208%208%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M3.70587%200.190875C3.82658%20-0.063625%204.17342%20-0.063625%204.29413%200.190875L5.28044%202.26938C5.32823%202.37016%205.4202%202.44007%205.52645%202.45655L7.71932%202.79644C7.98782%202.83805%208.0949%203.18334%207.90111%203.38223L6.31784%205.00671C6.24115%205.08547%206.206%205.19858%206.2239%205.30954L6.59275%207.59806C6.63792%207.87834%206.35742%208.09173%206.11683%207.96019L4.15207%206.88568C4.05683%206.83358%203.94317%206.83358%203.84793%206.88568L1.88317%207.96019C1.64258%208.09173%201.36208%207.87834%201.40725%207.59806L1.7761%205.30954C1.794%205.19858%201.75885%205.08547%201.68216%205.00671L0.0988857%203.38223C-0.0948972%203.18332%200.0121752%202.83805%200.28068%202.79644L2.47355%202.45655C2.5798%202.44007%202.67177%202.37016%202.71956%202.26938L3.70587%200.190875Z%22%20fill%3D%22%23FBA70B%22%2F%3E%0A%3C%2Fsvg%3E"
                />
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Image
            className={`review-card__source ${_activeStyleVariant}`}
            loading="lazy"
            width="auto"
            height="auto"
            alt=""
            src={sourcePlatformImage}
          />
        </_Builtin.VFlex>
        <_Builtin.Block className={`h11-v2 ${_activeStyleVariant}`} tag="div">
          {reviewIntro}
        </_Builtin.Block>
        <_Builtin.Block
          className={`review-card__footer ${_activeStyleVariant}`}
          tag="div"
        >
          <_Builtin.Link
            className={`btn-v2 btn-v2--text btn-v2--blue font-size-inherit ${_activeStyleVariant}`}
            button={false}
            block="inline"
            options={link}
          >
            <_Builtin.Block tag="div">{linkText}</_Builtin.Block>
            <_Builtin.Block
              className={`icon-xxs ${_activeStyleVariant}`}
              tag="div"
            >
              <IconArrowTopRight />
            </_Builtin.Block>
          </_Builtin.Link>
        </_Builtin.Block>
        <_Builtin.Block
          className={`review-card__footer_alt ${_activeStyleVariant}`}
          tag="div"
        >
          <_Builtin.Link
            className={`btn-v2 btn-v2--text btn-v2--blue alt-test-btn ${_activeStyleVariant}`}
            button={false}
            block="inline"
            options={link}
          >
            <_Builtin.Block tag="div">{linkText}</_Builtin.Block>
            <_Builtin.Block
              className={`icon-alt ${_activeStyleVariant}`}
              tag="div"
            >
              <IconPlus />
            </_Builtin.Block>
          </_Builtin.Link>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
