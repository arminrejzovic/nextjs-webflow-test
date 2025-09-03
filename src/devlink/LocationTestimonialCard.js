"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function LocationTestimonialCard({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className="loc-test-card" tag="div">
      <_Builtin.Block className="loc-test-card__header" tag="div">
        <_Builtin.Block className="loc-test-card__author" tag="div">
          <_Builtin.Block className="loc-test-card__avatar" tag="div">
            <_Builtin.Image
              className="loc-test-card__avatar__img"
              loading="lazy"
              width="auto"
              height="auto"
              alt=""
              src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/6867a270727f537d9f53d1e8_88674c81cfbdd7614c40e3ec1aedea8e8999f4ee.webp"
            />
          </_Builtin.Block>
          <_Builtin.Block className="loc-test-card__author__info" tag="div">
            <_Builtin.Block tag="div">{"Jessica R."}</_Builtin.Block>
            <_Builtin.Block tag="div">{"Pasadena, CA"}</_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className="loc-test-card__rating" tag="div">
          <_Builtin.Block className="loc-test-card__rating__nb" tag="div">
            {"5.0"}
          </_Builtin.Block>
          <_Builtin.HtmlEmbed
            className="svg-icon"
            value="%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M8.18948%200.98584L6.4645%206.34428H0.880005L5.3978%209.65533L3.67168%2015.0138L8.18948%2011.7027L12.7073%2015.0138L10.9823%209.65533L15.5001%206.34428H9.9156L8.18948%200.98584Z%22%20fill%3D%22%23EF4123%22%20stroke%3D%22%23EF4123%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
          />
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className="loc-test-card__content" tag="div">
        <_Builtin.Block tag="div">
          {
            "“Closet World didn’t just organize my closet—it gave me time back with my family.”"
          }
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
