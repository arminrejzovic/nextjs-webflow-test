"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function CtaFormButton({
  as: _Component = _Builtin.Link,
  text = "Book Your Free Appointment",

  link = {
    href: "#88580556-49fe-ee96-c761-383aafe66b89",
  },
}) {
  return (
    <_Component className="btn btn--cta" button={true} block="" options={link}>
      {text}
    </_Component>
  );
}
