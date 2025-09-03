"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function FilterTag({
  as: _Component = _Builtin.Link,
  filterName = "News category 1",
}) {
  return (
    <_Component
      className="filter-tag"
      button={false}
      block="inline"
      options={{
        href: "#",
      }}
    >
      <_Builtin.Block tag="div">{filterName}</_Builtin.Block>
    </_Component>
  );
}
