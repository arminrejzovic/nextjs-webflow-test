"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function JobCard({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className="job-card" tag="div">
      <_Builtin.Block className="job-card__header" tag="div">
        <_Builtin.Image
          className="job-card__header__img"
          width="auto"
          height="auto"
          loading="lazy"
          alt=""
          src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/6866a44b376445ad3f8b320f_Rectangle%206.webp"
        />
        <_Builtin.Block className="job-card__icon" tag="div">
          <_Builtin.HtmlEmbed
            className="svg-icon"
            value="%3Csvg%20width%3D%2232%22%20height%3D%2232%22%20viewBox%3D%220%200%2032%2032%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%220.5%22%20y%3D%220.5%22%20width%3D%2231%22%20height%3D%2231%22%20rx%3D%223.5%22%20stroke%3D%22%23FDFDFD%22%2F%3E%0A%3Cpath%20d%3D%22M24.5%2017.0001L24.5%207.0001L14.5%207.00009%22%20stroke%3D%22%23FDFDFD%22%20stroke-width%3D%222%22%2F%3E%0A%3Cpath%20d%3D%22M24.5%207.00012L17.5%2014.5001%22%20stroke%3D%22%23FDFDFD%22%20stroke-width%3D%222%22%2F%3E%0A%3Cpath%20d%3D%22M7.5%2014.9999V24.9999H17.5%22%20stroke%3D%22%23FDFDFD%22%20stroke-width%3D%222%22%2F%3E%0A%3Cpath%20d%3D%22M7.5%2024.9999L14.5%2017.4999%22%20stroke%3D%22%23FDFDFD%22%20stroke-width%3D%222%22%2F%3E%0A%3C%2Fsvg%3E"
          />
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className="job-card__content" tag="div">
        <_Builtin.Heading className="h9-v2 color-heading-v2" tag="h4">
          {"Customer name"}
        </_Builtin.Heading>
        <_Builtin.Block className="h11-v2 is--blue" tag="div">
          {"City name, State, ZIP code"}
        </_Builtin.Block>
        <_Builtin.Block className="job-card__footer" tag="div">
          <_Builtin.Block className="job-card__label" tag="div">
            {"Walk-in closet"}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
