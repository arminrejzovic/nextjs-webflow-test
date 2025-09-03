"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function SummerBoardTable({
  as: _Component = _Builtin.Block,
  image = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/686669a01360e23d15e95963_aa08f6baad88958dd5eaad3a44dcffad67afe795.webp",
  title = (
    <>
      {"Your Summer "}
      {""}
    </>
  ),
  text = "Quick, fun, and stress-free ways to keep the whole family organized all summer.",
  box1Text = " Quick, simple chores and fun activities your family can complete in minutes each day.",
  box2Text = "Celebrate every task with stickers, badges, and exciting mini-prizes to keep your kids engaged and proud.",
  box3Text = "Daily structured check-ins designed for meaningful family connection and learning.",
}) {
  return (
    <_Component className="sb-table__border" tag="div">
      <_Builtin.Block className="sb-table" tag="div">
        <_Builtin.Block className="sb-table__image-wrap" tag="div">
          <_Builtin.Image
            className="sb-table__image"
            loading="lazy"
            width="auto"
            height="auto"
            alt=""
            src={image}
          />
        </_Builtin.Block>
        <_Builtin.Block className="sb-table__content" tag="div">
          <_Builtin.Block className="h6-v2 is--white-v2" tag="div">
            {title}
          </_Builtin.Block>
          <_Builtin.Block
            className="h9-v2 is--white-v2 weight--medium m-h9"
            tag="div"
          >
            {text}
          </_Builtin.Block>
          <_Builtin.Block className="sb-table__boxes" tag="div">
            <_Builtin.Block className="sb-table__box" tag="div">
              <_Builtin.Block className="sb-table__icon" tag="div">
                <_Builtin.HtmlEmbed
                  className="svg-icon"
                  value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20d%3D%22M0%206.30018L5.59144%205.63327L7.94982%200.5H8.0173L10.3748%205.63327L16%206.30018V6.36696L11.8568%2010.0996V10.1664L12.9348%2015.4332L12.8673%2015.5L8.0173%2012.9H7.94982L3.16643%2015.5L3.09895%2015.4332L4.17692%2010.1664L4.10944%2010.0996L0%206.36696V6.30018Z%22%20fill%3D%22%23FDD54A%22%2F%3E%0A%3C%2Fsvg%3E"
                />
              </_Builtin.Block>
              <_Builtin.Block className="sb-table__box__content" tag="div">
                <_Builtin.Block className="h10-v2 is--white-v2" tag="div">
                  {box1Text}
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block className="sb-table__box" tag="div">
              <_Builtin.Block className="sb-table__icon" tag="div">
                <_Builtin.HtmlEmbed
                  className="svg-icon"
                  value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20d%3D%22M0%206.30018L5.59144%205.63327L7.94982%200.5H8.0173L10.3748%205.63327L16%206.30018V6.36696L11.8568%2010.0996V10.1664L12.9348%2015.4332L12.8673%2015.5L8.0173%2012.9H7.94982L3.16643%2015.5L3.09895%2015.4332L4.17692%2010.1664L4.10944%2010.0996L0%206.36696V6.30018Z%22%20fill%3D%22%23FDD54A%22%2F%3E%0A%3C%2Fsvg%3E"
                />
              </_Builtin.Block>
              <_Builtin.Block className="sb-table__box__content" tag="div">
                <_Builtin.Block className="h10-v2 is--white-v2" tag="div">
                  {box2Text}
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block className="sb-table__box" tag="div">
              <_Builtin.Block className="sb-table__icon" tag="div">
                <_Builtin.HtmlEmbed
                  className="svg-icon"
                  value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20d%3D%22M0%206.30018L5.59144%205.63327L7.94982%200.5H8.0173L10.3748%205.63327L16%206.30018V6.36696L11.8568%2010.0996V10.1664L12.9348%2015.4332L12.8673%2015.5L8.0173%2012.9H7.94982L3.16643%2015.5L3.09895%2015.4332L4.17692%2010.1664L4.10944%2010.0996L0%206.36696V6.30018Z%22%20fill%3D%22%23FDD54A%22%2F%3E%0A%3C%2Fsvg%3E"
                />
              </_Builtin.Block>
              <_Builtin.Block className="sb-table__box__content" tag="div">
                <_Builtin.Block className="h10-v2 is--white-v2" tag="div">
                  {box3Text}
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.HtmlEmbed
          className="sb-table__stars"
          value="%3Csvg%20width%3D%2271%22%20height%3D%22108%22%20viewBox%3D%220%200%2071%20108%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M5.47235%2032.386L21.5054%2025.1319L23.6902%207.575L23.8913%207.5115L35.7598%2020.6309L53.1518%2017.3305L53.2148%2017.53L44.39%2032.5815L44.453%2032.781L52.6344%2047.5035L52.4963%2047.7665L35.5904%2044.5616L35.3893%2044.625L23.588%2056.8947L23.324%2056.7587L21.5671%2040.0075L21.303%2039.8715L5.53535%2032.5855L5.47235%2032.386Z%22%20fill%3D%22%23FDD54A%22%2F%3E%0A%3Cpath%20d%3D%22M42.4811%2057.7849L51.3247%2060.0973L57.9455%2053.7238L58.0475%2053.7639L58.5503%2062.9396L66.6502%2067.2922L66.6104%2067.3934L58.128%2070.5849L58.0882%2070.6861L56.5786%2079.3037L56.4369%2079.3648L50.6597%2072.5449L50.5577%2072.5048L41.783%2073.6005L41.7209%2073.4592L46.4872%2066.1226L46.425%2065.9814L42.4413%2057.8861L42.4811%2057.7849Z%22%20fill%3D%22%23FDD54A%22%2F%3E%0A%3Cpath%20d%3D%22M52.4004%2093.45L57.8867%2094.8845L61.9941%2090.9305L62.0574%2090.9554L62.3693%2096.6478L67.3943%2099.348L67.3696%2099.4108L62.1073%20101.391L62.0826%20101.454L61.1461%20106.8L61.0582%20106.838L57.4742%20102.607L57.4109%20102.582L51.9673%20103.262L51.9288%20103.174L54.8856%2098.6225L54.8471%2098.5349L52.3757%2093.5127L52.4004%2093.45Z%22%20fill%3D%22%23FDD54A%22%2F%3E%0A%3C%2Fsvg%3E"
        />
      </_Builtin.Block>
    </_Component>
  );
}
