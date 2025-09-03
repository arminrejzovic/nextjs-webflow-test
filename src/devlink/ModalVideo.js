"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function ModalVideo({
  as: _Component = _Builtin.Block,
  videoEmbed = '<video class="hero-static-v2__video" autoplay="" loop="" muted="" playsinline="" data-wf-ignore="true" data-object-fit="cover">\n<source src="https://r2.vidzflow.com/v/NK2Xv38VQ9_1080p_1738319950.mp4" data-wf-ignore="true">\n</video>',
}) {
  return (
    <_Component className="modal-v2" tag="div">
      <_Builtin.Block className="modal-v2__inner_test" tag="div">
        <_Builtin.Block className="modal-v2__video" tag="div">
          <_Builtin.RichText tag="div" slot="">
            {videoEmbed}
          </_Builtin.RichText>
          <_Builtin.Block className="modal-v2__close is--testimonial" tag="div">
            <_Builtin.HtmlEmbed
              className="svg-icon"
              value="%3Csvg%20width%3D%2241%22%20height%3D%2241%22%20viewBox%3D%220%200%2041%2041%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%221%22%20y%3D%221%22%20width%3D%2239%22%20height%3D%2239%22%20rx%3D%2219.5%22%20stroke%3D%22%23ffffff%22%2F%3E%0A%3Cpath%20d%3D%22M26.5%2014.5L14.5%2026.5%22%20stroke%3D%22%23ffffff%22%20stroke-width%3D%221.6%22%20stroke-miterlimit%3D%2210%22%2F%3E%0A%3Cpath%20d%3D%22M26.5002%2026.5L14.5002%2014.5%22%20stroke%3D%22%23ffffff%22%20stroke-width%3D%221.6%22%20stroke-miterlimit%3D%2210%22%2F%3E%0A%3C%2Fsvg%3E"
            />
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
