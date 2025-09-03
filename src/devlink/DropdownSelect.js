"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { IconChevronDown } from "./IconChevronDown";

export function DropdownSelect({
  as: _Component = _Builtin.Block,
  dropdownListSlot,
}) {
  return (
    <_Component className="dropdown-header" tag="div">
      <_Builtin.BlockContainer
        className="container-v2"
        grid={{
          type: "container",
        }}
        tag="div"
      >
        <_Builtin.Block className="dropdown-header__inner" tag="div">
          <_Builtin.DropdownWrapper
            className="dropdown-select"
            tag="div"
            delay={0}
            hover={false}
          >
            <_Builtin.DropdownToggle
              className="dropdown-select__toggle"
              tag="div"
            >
              <_Builtin.Block tag="div">{"Video category 01"}</_Builtin.Block>
              <_Builtin.Block className="dropdown-select__chevron" tag="div">
                <IconChevronDown />
              </_Builtin.Block>
            </_Builtin.DropdownToggle>
            <_Builtin.DropdownList className="dropdown-list-2" tag="nav">
              <_Builtin.Block tag="div">{dropdownListSlot}</_Builtin.Block>
            </_Builtin.DropdownList>
          </_Builtin.DropdownWrapper>
        </_Builtin.Block>
      </_Builtin.BlockContainer>
    </_Component>
  );
}
