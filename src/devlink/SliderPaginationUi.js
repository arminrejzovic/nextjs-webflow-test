"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function SliderPaginationUi({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className="custom-slide-pagination" tag="div">
      <_Builtin.Block className="custom-slide-pagination__dot" tag="div" />
      <_Builtin.Block className="custom-slide-pagination__dot" tag="div" />
      <_Builtin.Block
        className="custom-slide-pagination__dot is--active"
        tag="div"
      />
      <_Builtin.Block className="custom-slide-pagination__dot" tag="div" />
    </_Component>
  );
}
