"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function __404Section({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className="text-align--center" tag="div">
      <_Builtin.Image
        className="image-404"
        loading="lazy"
        width="auto"
        height="auto"
        alt=""
        src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/671bae411ca024735704f8e3_CW_404_1_V2_2.gif"
      />
      <_Builtin.Heading className="heading-404 hidden" tag="h1">
        {"404"}
      </_Builtin.Heading>
      <_Builtin.Paragraph className="body-md">
        {"Uh-oh, looks like we misplaced that page in one of our drawers!"}
        <br />
        {"Go to our "}
        <_Builtin.Link
          className="body-link text-color--primary"
          button={false}
          block=""
          options={{
            href: "/",
          }}
        >
          <_Builtin.Strong>{"Home page"}</_Builtin.Strong>
        </_Builtin.Link>
      </_Builtin.Paragraph>
    </_Component>
  );
}
