"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function LinkComponent({
  as: _Component = _Builtin.DropdownLink,
  text = "Link 1",

  link = {
    href: "#",
  },
}) {
  return (
    <_Component className="custom-dropdown-link" options={link}>
      {text}
    </_Component>
  );
}
