"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function PromoFooter({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className="section-promo-footer__wrap"
      grid={{
        type: "section",
      }}
      tag="div"
    >
      <_Builtin.NotSupported _atom="DynamoWrapper" />
      <_Builtin.Block className="section-promo-footer__alt hidden" tag="div">
        <_Builtin.Block className="section-promo-footer" tag="div">
          <_Builtin.BlockContainer
            className="container"
            grid={{
              type: "container",
            }}
            tag="div"
          >
            <_Builtin.Paragraph className="section-promo-footer__text">
              {
                "40% off any order of $980 or more, 35% off any order of $680 or more, on any Closets, Garages, Home Offices, or other products with any complete unit purchase. Free installation with any complete unit order of $850 or more. Not valid with any other offer. Offers and prices are subject to change without notice. With incoming order, at time of purchase only."
              }
            </_Builtin.Paragraph>
          </_Builtin.BlockContainer>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
