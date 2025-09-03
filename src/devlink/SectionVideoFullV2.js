"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function SectionVideoFullV2({
  as: _Component = _Builtin.Block,
  content = '<video class="video-full" autoplay="" loop="" muted="" playsinline="" data-wf-ignore="true" data-object-fit="cover">\n<source src="https://r2.vidzflow.com/v/zCJqboA1Ro_1080p_1746016061.mp4" data-wf-ignore="true">\n</video>',
}) {
  return (
    <_Component className="section-v2" tag="div">
      <_Builtin.BlockContainer
        className="container-v2"
        grid={{
          type: "container",
        }}
        tag="div"
      >
        <_Builtin.Block className="section-video-v2" tag="div">
          <_Builtin.RichText className="video-full" tag="div" slot="">
            {content}
          </_Builtin.RichText>
        </_Builtin.Block>
      </_Builtin.BlockContainer>
    </_Component>
  );
}
