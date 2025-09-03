"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function PromoBannerIndependenceDay({
  as: _Component = _Builtin.Block,
}) {
  return (
    <_Component className="promo-banner-lp" tag="div">
      <_Builtin.HtmlEmbed
        className="promo-banner-css"
        value="%3Cstyle%3E%0A%09%40media%20screen%20and%20(min-width%3A%20992px)%20and%20(max-width%3A%201200px)%20%7B%0A%20%20%09.promo-banner-new%20%7B%0A%20%20%20%20%20%20grid-column-gap%3A%204rem%3B%0A%20%20%20%20%20%20grid-row-gap%3A%204rem%3B%0A%20%20%20%20%7D%0A%20%20%20%20.promo-banner-new%20.h8-v2%20%7B%0A%20%20%20%20%09font-size%3A%201.25rem%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%3C%2Fstyle%3E"
      />
      <_Builtin.Block
        className="promo-banner-new indep-day-2 indep-day"
        tag="div"
      >
        <_Builtin.Block
          className="promo-banner-new__cell left indep-day-2 indep-day"
          tag="div"
        >
          <_Builtin.Block
            className="h8-v2 is--bold is--white-v2 lh-166 hidden-tablet"
            tag="div"
          >
            {"JULY 4TH SAVINGS!"}
            <_Builtin.Span data-replace="percent">{"50"}</_Builtin.Span>
            {"% OFF"}
          </_Builtin.Block>
          <_Builtin.Block
            className="h8-v2 is--bold is--white-v2 lh-166 hidden-desktop visible-tablet mobile-fs20"
            tag="div"
          >
            {"JULY 4TH SAVINGS! "}
            <_Builtin.Span data-replace="percent">{"50"}</_Builtin.Span>
            {"% OFF"}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className="promo-banner-new__cell right indep-day-2 indep-day"
          tag="div"
        >
          <_Builtin.Block
            className="h8-v2 is--bold is--white-v2 lh-166 mobile-fs14"
            tag="div"
          >
            {"Schedule a Free In-Home Consultation Now"}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
