"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function FaqAccordionV2({
  as: _Component = _Builtin.Block,
  title = "Are your products expensive?",
  text = "",
}) {
  return (
    <_Component className="faq-item-v2" tag="div">
      <_Builtin.Block className="faq-question-v2" tag="div">
        <_Builtin.Block tag="div">{title}</_Builtin.Block>
        <_Builtin.Block className="faq-btn-v2" tag="div">
          <_Builtin.Block
            className="faq-btn__line-v2 faq-btn__minus"
            tag="div"
          />
          <_Builtin.Block
            className="faq-btn__line-v2 faq-btn__plus"
            tag="div"
          />
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className="faq-answer-v2" tag="div">
        <_Builtin.Block className="faq-answer__wrap-v2" tag="div">
          <_Builtin.RichText
            className="faq-answer__content-v2"
            tag="div"
            slot=""
          >
            {text}
          </_Builtin.RichText>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
