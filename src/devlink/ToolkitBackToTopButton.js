"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function ToolkitBackToTopButton({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className="toolkit-up" tag="div">
      <_Builtin.Block className="toolkit-menu__up" tag="div">
        <_Builtin.HtmlEmbed
          className="svg-icon"
          value="%3Csvg%20width%3D%2239%22%20height%3D%2239%22%20viewBox%3D%220%200%2039%2039%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M6.63012%2024.375L17.2251%2013.78C18.4764%2012.5287%2020.5239%2012.5287%2021.7751%2013.78L32.3701%2024.375%22%20stroke%3D%22%23FDFDFD%22%20stroke-miterlimit%3D%2210%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
        />
      </_Builtin.Block>
      <_Builtin.HtmlEmbed
        className="hidden-code"
        value="%3Cstyle%3E%0A.toolkit-menu__item%3Alast-child%20%7B%0A%09border-bottom%3A%200%3B%0A%7D%0A.toolkit-menu__up%20%7B%0A%09transform%3A%20translateX(100%25)%3B%0A%20%20will-change%3A%20transform%3B%0A%7D%0A.toolkit-menu__up.active%20%7B%0A%09transform%3A%20translateX(0%25)%3B%0A%7D%0A%3C%2Fstyle%3E%0A%0A%3Cscript%3E%0Avar%20Webflow%20%3D%20Webflow%20%7C%7C%20%5B%5D%3B%0AWebflow.push(function%20()%20%7B%0A%20%20const%20upButton%20%3D%20document.querySelector(%22.toolkit-menu__up%22)%3B%0A%0A%20%20function%20toggleUpButtonClass()%20%7B%0A%20%20%20%20if%20(window.scrollY%20%3E%20window.innerHeight)%20%7B%0A%20%20%20%20%20%20upButton.classList.add(%22active%22)%3B%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20upButton.classList.remove(%22active%22)%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%0A%20%20if%20(upButton)%20%7B%0A%20%20%20%20upButton.addEventListener(%22click%22%2C%20function%20()%20%7B%0A%20%20%20%20%20%20window.scrollTo(%7B%20top%3A%200%2C%20behavior%3A%20%22smooth%22%20%7D)%3B%0A%20%20%20%20%7D)%3B%0A%0A%20%20%20%20window.addEventListener(%22scroll%22%2C%20toggleUpButtonClass)%3B%0A%20%20%20%20toggleUpButtonClass()%3B%20%2F%2F%20Check%20on%20page%20load%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E"
      />
    </_Component>
  );
}
