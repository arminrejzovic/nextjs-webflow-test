"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function LocationBreadcrumbs({
  as: _Component = _Builtin.Section,
  hide1stBreadcrumb = true,
  _1stBreadcrumbs = "Southern California",
  breadcrumb1Link = "#",
  show2ndBreadcrumb = false,
  _2ndBreadcrumbs = "Video Gallery",
  breadcrumb2Link = "#",
  show3rdBreadcrumb = false,
  _3rdBreadcrumbs = "Video Gallery",
  breadcrumb3Link = "#",
}) {
  return (
    <_Component
      className="section-breadcrumbs"
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.BlockContainer
        className="container-v2"
        grid={{
          type: "container",
        }}
        tag="div"
      >
        <_Builtin.HtmlEmbed
          className="hidden-code"
          value="%3Cstyle%3E%0A.breadcrumbs%20.breadcrumbs__list%20.breadcrumbs__list__li%3Alast-child%20.breadcrumb-item%20%7B%0A%09color%3A%20var(--heading-color)%3B%0A%20%20pointer-events%3A%20none%3B%0A%7D%0A%3C%2Fstyle%3E"
        />
        <_Builtin.DOM className="breadcrumbs" tag="nav" aria-label="Breadcrumb">
          <_Builtin.DOM className="breadcrumbs__list" tag="ol">
            <_Builtin.DOM className="breadcrumbs__list__li" tag="li">
              <_Builtin.DOM
                className="breadcrumb-item"
                tag="a"
                href="/locations"
              >
                <_Builtin.DOM tag="span">{"Locations"}</_Builtin.DOM>
              </_Builtin.DOM>
            </_Builtin.DOM>
            {hide1stBreadcrumb ? (
              <_Builtin.DOM className="breadcrumbs__list__li" tag="li" />
            ) : null}
            {show2ndBreadcrumb ? (
              <_Builtin.DOM className="breadcrumbs__list__li" tag="li">
                {show2ndBreadcrumb ? (
                  <_Builtin.DOM
                    className="breadcrumb-item"
                    tag="a"
                    href={breadcrumb2Link}
                  >
                    <_Builtin.DOM
                      className="breadcrumb-item__separator"
                      tag="span"
                    >
                      {"/ "}
                    </_Builtin.DOM>
                    <_Builtin.DOM tag="span">{_2ndBreadcrumbs}</_Builtin.DOM>
                  </_Builtin.DOM>
                ) : null}
              </_Builtin.DOM>
            ) : null}
            {show3rdBreadcrumb ? (
              <_Builtin.DOM className="breadcrumbs__list__li" tag="li">
                {show2ndBreadcrumb ? (
                  <_Builtin.DOM
                    className="breadcrumb-item"
                    tag="a"
                    href={breadcrumb3Link}
                  >
                    <_Builtin.DOM
                      className="breadcrumb-item__separator"
                      tag="span"
                    >
                      {"/ "}
                    </_Builtin.DOM>
                    <_Builtin.DOM tag="span">{_3rdBreadcrumbs}</_Builtin.DOM>
                  </_Builtin.DOM>
                ) : null}
              </_Builtin.DOM>
            ) : null}
          </_Builtin.DOM>
        </_Builtin.DOM>
      </_Builtin.BlockContainer>
    </_Component>
  );
}
