"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { CtaBanner } from "./CtaBanner";
import { Header } from "./Header";
import { PromoHeader } from "./PromoHeader";

export function HeaderPromo({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className="sticky-header" tag="div" id="header">
      <_Builtin.Block
        tag="div"
        data-optibase-test-id="promo_banner_test"
        data-optibase-variant-id="variant_b"
      >
        <CtaBanner />
      </_Builtin.Block>
      <Header />
      <_Builtin.Block
        tag="div"
        data-optibase-test-id="promo_banner_test"
        data-optibase-variant-id="default"
        style="display:none"
      >
        <PromoHeader />
      </_Builtin.Block>
    </_Component>
  );
}
