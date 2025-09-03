"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function ContactUsScheduleCardV2({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className="contact-us__schedule-v2" tag="div">
      <_Builtin.Block className="contact-grid__schedule__media" tag="div">
        <_Builtin.Image
          className="contact-us__schedule__img"
          width="auto"
          height="auto"
          loading="lazy"
          alt="Closet World Modern Farmhouse Home Office in Winter Cherry Signia Finish"
          src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/67c230311a3e306bbcc96c45_Modern-Farmhouse-Home-Office-Winter-cherry.webp"
        />
      </_Builtin.Block>
      <_Builtin.VFlex className="contact-us__schedule__content-v2" tag="div">
        <_Builtin.Block className="h10-v2 color-inherit" tag="div">
          {"Let us show you how easy it is to get organized."}
        </_Builtin.Block>
        <_Builtin.Link
          className="btn-v2 btn-v2--tertiary-inverted"
          button={false}
          block="inline"
          options={{
            href: "/schedulerequests-ms",
          }}
        >
          <_Builtin.Block tag="div">{"Schedule Appointment"}</_Builtin.Block>
        </_Builtin.Link>
      </_Builtin.VFlex>
    </_Component>
  );
}
