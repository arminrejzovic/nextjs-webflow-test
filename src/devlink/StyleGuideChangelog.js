"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function StyleGuideChangelog({
  as: _Component = _Builtin.Block,
  type = "Changed",
  date = "July 10, 2025",
  title = "Created file",
  text = "All Elements, components plus template of pages were created for the document.",
}) {
  const _styleVariantMap = {
    Changed: "",
    Added: "w-variant-84270db3-18c6-22f5-0c38-77d65a510e50",
    Deleted: "w-variant-b3171d0a-ed29-d095-c3ed-bbf8b3e8e7c3",
  };

  const _activeStyleVariant = _styleVariantMap[type];

  return (
    <_Component
      className={`sg-changelog__item ${_activeStyleVariant}`}
      tag="div"
    >
      <_Builtin.Block tag="div">
        <_Builtin.Block
          className={`h12-v2 is--dark-grey-v2 ${_activeStyleVariant}`}
          tag="div"
        >
          {date}
        </_Builtin.Block>
        <_Builtin.Block
          className={`h10-v2 is--black-2-v2 weight--medium ${_activeStyleVariant}`}
          tag="div"
        >
          {title}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block tag="div">
        <_Builtin.Block
          className={`sg-changelog__status weight--medium ${_activeStyleVariant}`}
          tag="div"
        >
          {"Changed"}
        </_Builtin.Block>
        <_Builtin.Block
          className={`sg-changelog__status weight--medium deleted ${_activeStyleVariant}`}
          tag="div"
        >
          {"Deleted"}
        </_Builtin.Block>
        <_Builtin.Block
          className={`sg-changelog__status weight--medium added ${_activeStyleVariant}`}
          tag="div"
        >
          {"Added"}
        </_Builtin.Block>
        <_Builtin.Block className={`h11-v2 ${_activeStyleVariant}`} tag="div">
          {text}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
