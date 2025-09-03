"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function SectionFaqV2({
  as: _Component = _Builtin.Section,
  title = "Questions?",
  text = "We’ve got answers! Explore the information below, or give us a call. Our certified professionals are ready to give you all the information—backed by our experience as the trusted organizational expert of over 1 million homes.",
}) {
  return (
    <_Component
      className="py-5"
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.BlockContainer
        className="container-v2"
        grid={{
          type: "container",
        }}
        tag="div"
      >
        <_Builtin.Block className="section-header-small-v2 bigger" tag="div">
          <_Builtin.Heading
            className="h2-v2 is--red-v2 text-align--center"
            tag="h2"
          >
            {title}
          </_Builtin.Heading>
          <_Builtin.Block className="h9-v2 text-align--center" tag="div">
            {text}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className="pt-80" tag="div">
          <_Builtin.Block className="faq-container-small" tag="div">
            <_Builtin.NotSupported _atom="DynamoWrapper" />
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.BlockContainer>
    </_Component>
  );
}
