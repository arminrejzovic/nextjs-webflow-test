"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function CustomerQuote({
  as: _Component = _Builtin.Block,
  rating = "5.0",
  ratingValue = "5.0",
  image = "",
  image2 = "",
  image3 = "",
}) {
  return (
    <_Component className="customers-quotes__item" tag="div">
      <_Builtin.Block className="customers-quotes__top" tag="div">
        <_Builtin.Block tag="div">{rating}</_Builtin.Block>
        <_Builtin.HtmlEmbed
          className="star-rating"
          data-rating={ratingValue}
          value="%3Csvg%20width%3D%22164%22%20height%3D%2220%22%20viewBox%3D%220%200%20164%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22stars%22%3E%0A%20%20%3Cg%20class%3D%22stars-bg%22%3E%0A%20%20%20%20%3Cuse%20href%3D%22%23star%22%20x%3D%220%22%2F%3E%0A%20%20%20%20%3Cuse%20href%3D%22%23star%22%20x%3D%2236%22%2F%3E%0A%20%20%20%20%3Cuse%20href%3D%22%23star%22%20x%3D%2272%22%2F%3E%0A%20%20%20%20%3Cuse%20href%3D%22%23star%22%20x%3D%22108%22%2F%3E%0A%20%20%20%20%3Cuse%20href%3D%22%23star%22%20x%3D%22144%22%2F%3E%0A%20%20%3C%2Fg%3E%0A%0A%20%20%3Cg%20class%3D%22stars-fill%22%20clip-path%3D%22url(%23star-clip)%22%3E%0A%20%20%20%20%3Cuse%20href%3D%22%23star%22%20x%3D%220%22%2F%3E%0A%20%20%20%20%3Cuse%20href%3D%22%23star%22%20x%3D%2236%22%2F%3E%0A%20%20%20%20%3Cuse%20href%3D%22%23star%22%20x%3D%2272%22%2F%3E%0A%20%20%20%20%3Cuse%20href%3D%22%23star%22%20x%3D%22108%22%2F%3E%0A%20%20%20%20%3Cuse%20href%3D%22%23star%22%20x%3D%22144%22%2F%3E%0A%20%20%3C%2Fg%3E%0A%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3Cpath%20id%3D%22star%22%20d%3D%22M10.349%201L8.21208%207.63812H1.29391L6.89063%2011.7399L4.75229%2018.378L10.349%2014.2762L15.9457%2018.378L13.8088%2011.7399L19.4055%207.63812H12.4873L10.349%201Z%22%20fill%3D%22%23E0E0E0%22%20stroke%3D%22%23E0E0E0%22%20stroke-width%3D%222%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%20%20%20%20%3CclipPath%20id%3D%22star-clip%22%3E%0A%20%20%20%20%20%20%3Crect%20class%3D%22clip-rect%22%20x%3D%220%22%20y%3D%220%22%20width%3D%220%22%20height%3D%2220%22%2F%3E%0A%20%20%20%20%3C%2FclipPath%3E%0A%20%20%3C%2Fdefs%3E%0A%3C%2Fsvg%3E"
        />
      </_Builtin.Block>
    </_Component>
  );
}
