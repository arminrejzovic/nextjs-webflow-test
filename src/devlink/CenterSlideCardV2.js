"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { CardV2Alt2 } from "./CardV2Alt2";

export function CenterSlideCardV2({
  as: _Component = _Builtin.Block,

  cardV2Alt2Link = {
    href: "#",
  },

  cardV2Alt2Title = "Stairway/ Spandrel Storage",
  cardV2Alt2Text = "Largest selection in the industry.",
  cardV2Alt2Image = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/678e4961c591e784e9de5352_endless-customization.webp",
  cardV2Alt2Icon = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/678e5b9d7488216cc34a7553_Infinity-icon2.svg",
}) {
  return (
    <_Component className="splide__slide" tag="div">
      <_Builtin.Block className="center-slider-card__inner" tag="div">
        <CardV2Alt2
          title={cardV2Alt2Title}
          icon={cardV2Alt2Icon}
          link={cardV2Alt2Link}
          text={cardV2Alt2Text}
          image={cardV2Alt2Image}
        />
      </_Builtin.Block>
    </_Component>
  );
}
