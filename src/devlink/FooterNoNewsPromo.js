"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { FooterMenu } from "./FooterMenu";
import { FormLogic } from "./FormLogic";

export function FooterNoNewsPromo({ as: _Component = _Builtin.Block }) {
  return (
    <_Component tag="div">
      <_Builtin.Block tag="div">
        <FooterMenu />
      </_Builtin.Block>
      <FormLogic />
    </_Component>
  );
}
