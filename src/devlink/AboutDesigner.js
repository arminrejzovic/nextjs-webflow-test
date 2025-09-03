"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function AboutDesigner({
  as: _Component = _Builtin.Block,
  titleTag = "h2",
  title = "Key highlights and essential details about the closet designer career.",
  aboutText = "This section contains the complete professional biography, including detailed background information, career achievements, education, skills, and any other relevant experiences that showcase the closet designer’s expertise and journey. This section contains the complete professional biography, including detailed background information, career achievements, education, skills, and any other relevant experiences that showcase the closet designer’s expertise and journey.",
}) {
  return (
    <_Component className="bg-grey-white py-64" tag="div">
      <_Builtin.BlockContainer
        className="container-v2"
        grid={{
          type: "container",
        }}
        tag="div"
      >
        <_Builtin.Block className="designer-about" tag="div">
          <_Builtin.Block
            className="designer-about__media"
            id="w-node-_3caf9c3a-7353-8d17-59e8-cc81937bc4b3-937bc4b0"
            tag="div"
          >
            <_Builtin.Image
              className="designer-about__img"
              loading="lazy"
              width="auto"
              height="auto"
              alt=""
              src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/68876c1e618ab6d143f6f68e_designer%20photo.png"
            />
          </_Builtin.Block>
          <_Builtin.Block
            className="designer-about__content"
            id="w-node-_3caf9c3a-7353-8d17-59e8-cc81937bc4b5-937bc4b0"
            tag="div"
          >
            <_Builtin.Block className="subheading-v2" tag="div">
              {"ABOUT"}
            </_Builtin.Block>
            <_Builtin.Heading className="h8-v2 color-heading-v2" tag={titleTag}>
              {title}
            </_Builtin.Heading>
            <_Builtin.Block tag="div">{aboutText}</_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.BlockContainer>
    </_Component>
  );
}
