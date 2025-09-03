"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function SectionRatings({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className="section-ratings section--spacing-1"
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.BlockContainer
        className="container"
        grid={{
          type: "container",
        }}
        tag="div"
      >
        <_Builtin.Block className="ratings" tag="div">
          <_Builtin.Block className="ratings__single" tag="div">
            <_Builtin.Image
              className="ratings__img ratings__img--lg"
              loading="lazy"
              width="275"
              height="61"
              alt="Closet World Google Rating 4.6+"
              src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/65df5a81c140f991d522bda7_google1.svg"
            />
          </_Builtin.Block>
          <_Builtin.Block className="ratings__single" tag="div">
            <_Builtin.Image
              className="ratings__img"
              loading="lazy"
              width="189"
              height="80"
              alt="Closet World BBB Rating A+"
              src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/65ddf3aacf51a6eee6bc1dc7_bbb-ratings.webp"
            />
          </_Builtin.Block>
          <_Builtin.Block className="ratings__single last" tag="div">
            <_Builtin.Image
              className="ratings__img"
              loading="lazy"
              width="216"
              height="80"
              alt="Closet World Consumer Awards Accredited 4.3+ stars"
              src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/65df5a92519e57f33c34edda_consumer1.png"
            />
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.BlockContainer>
    </_Component>
  );
}
