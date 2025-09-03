"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function LocationMap({
  as: _Component = _Builtin.VFlex,
  day1 = "Monday",
  day1Hours = "8:00 AM - 5:00 PM",
  day2 = "Tuesday",
  day2Hours = "8:00 AM - 5:00 PM",
  day3 = "Wednesday",
  day3Hours = "8:00 AM - 5:00 PM",
  day4 = "Thursday",
  day4Hours = "8:00 AM - 5:00 PM",
  day5 = "Friday",
  day5Hours = "8:00 AM - 5:00 PM",
  day6 = "Saturday",
  day6Hours = "8:00 AM - 5:00 PM",
  day7 = "Sunday",
  day7Hours = "8:00 AM - 5:00 PM",
  directionButtonProps = {},
}) {
  return (
    <_Component tag="div">
      <_Builtin.HtmlEmbed
        className="hidden-code"
        value="%3Cscript%3E%0Avar%20Webflow%20%3D%20Webflow%20%7C%7C%20%5B%5D%3B%0AWebflow.push(function%20()%20%7B%0A%20%20%2F%2F%20Toggle%20visibility%20and%20button%20class%20on%20click%0A%20%20%24(document).on('click'%2C%20'%5Bdata-close-box%5D'%2C%20function%20()%20%7B%0A%20%20%20%20const%20%24button%20%3D%20%24(this)%3B%0A%20%20%20%20const%20%24mapInfo%20%3D%20%24button.closest('.map-info')%3B%0A%20%20%20%20const%20%24contentBox%20%3D%20%24mapInfo.find('.map-info__content__wrapper')%3B%0A%0A%20%20%20%20if%20(%24contentBox.is('%3Avisible'))%20%7B%0A%20%20%20%20%20%20%24contentBox.slideUp()%3B%0A%20%20%20%20%20%20%24mapInfo.removeClass('is--open')%3B%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%24contentBox.slideDown()%3B%0A%20%20%20%20%20%20%24mapInfo.addClass('is--open')%3B%0A%20%20%20%20%7D%0A%20%20%7D)%3B%0A%7D)%3B%0A%3C%2Fscript%3E%0A%3Cstyle%3E%0A.is--open%20.map-info__content__wrapper%20%7B%0A%09display%3A%20block%3B%0A%7D%0A.is--open%20.map-info__dropdown__icon%20%7B%0A%09transform%3A%20rotate(0deg)%3B%0A%7D%0A%3C%2Fstyle%3E"
      />
      <_Builtin.BlockContainer
        className="container-v2"
        grid={{
          type: "container",
        }}
        tag="div"
      >
        <_Builtin.Block className="map-container" tag="div">
          <_Builtin.Block className="map-info" tag="div">
            <_Builtin.Block className="map-info__header" tag="div">
              <_Builtin.Block className="map-info__open" tag="div">
                {"Open Now"}
              </_Builtin.Block>
              <_Builtin.Block className="map-info__actions" tag="div">
                <_Builtin.VFlex
                  className="map-info__dropdown"
                  tag="div"
                  data-close-box=""
                >
                  <_Builtin.Block className="map-info__close" tag="div">
                    {"Closes 5 PM"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className="map-info__dropdown__icon"
                    tag="div"
                  >
                    <_Builtin.HtmlEmbed
                      className="svg-icon"
                      value="%3Csvg%20width%3D%2210%22%20height%3D%226%22%20viewBox%3D%220%200%2010%206%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M1%201L5%205L9%201%22%20stroke%3D%22%2335526A%22%2F%3E%0A%3C%2Fsvg%3E"
                    />
                  </_Builtin.Block>
                </_Builtin.VFlex>
                <_Builtin.Link
                  className="map-info__directions"
                  button={false}
                  block="inline"
                  options={{
                    href: "#",
                  }}
                  {...directionButtonProps}
                >
                  <_Builtin.HtmlEmbed
                    className="svg-icon"
                    value="%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20width%3D%2240%22%20height%3D%2240%22%20rx%3D%2220%22%20fill%3D%22%2335526A%22%2F%3E%0A%3Cpath%20d%3D%22M14.5%2017.5556L14.5%2016.8056H13.75L13.75%2017.5556H14.5ZM25.5%2017.5556L26.0102%2018.1053L26.0178%2017.013L25.5%2017.5556ZM14.5%2017.5556L14.5%2018.3056H25.5L25.5%2017.5556L25.5%2016.8056H14.5L14.5%2017.5556ZM21.25%2013.5L20.7322%2014.0426L24.9822%2018.0982L25.5%2017.5556L26.0178%2017.013L21.7678%2012.9574L21.25%2013.5ZM25.5%2017.5556L24.9898%2017.0058L20.7398%2020.9503L21.25%2021.5L21.7602%2022.0497L26.0102%2018.1053L25.5%2017.5556ZM14.5%2017.5556H13.75L13.75%2026.5H14.5H15.25L15.25%2017.5556H14.5Z%22%20fill%3D%22%23FDFDFD%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </_Builtin.Link>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block className="map-info__content__wrapper" tag="div">
              <_Builtin.Block className="map-info__content" tag="div">
                <_Builtin.Block
                  id="w-node-_095dd658-a0b5-52d3-dce8-c5217a4cb259-7a4cb24a"
                  tag="div"
                >
                  {day1}
                </_Builtin.Block>
                <_Builtin.Block
                  id="w-node-_095dd658-a0b5-52d3-dce8-c5217a4cb25b-7a4cb24a"
                  tag="div"
                >
                  {day1Hours}
                </_Builtin.Block>
                <_Builtin.Block
                  id="w-node-_095dd658-a0b5-52d3-dce8-c5217a4cb25d-7a4cb24a"
                  tag="div"
                >
                  {day2}
                </_Builtin.Block>
                <_Builtin.Block
                  id="w-node-_095dd658-a0b5-52d3-dce8-c5217a4cb25f-7a4cb24a"
                  tag="div"
                >
                  {day2Hours}
                </_Builtin.Block>
                <_Builtin.Block
                  id="w-node-_095dd658-a0b5-52d3-dce8-c5217a4cb261-7a4cb24a"
                  tag="div"
                >
                  {day3}
                </_Builtin.Block>
                <_Builtin.Block
                  id="w-node-_095dd658-a0b5-52d3-dce8-c5217a4cb263-7a4cb24a"
                  tag="div"
                >
                  {day3Hours}
                </_Builtin.Block>
                <_Builtin.Block
                  id="w-node-_095dd658-a0b5-52d3-dce8-c5217a4cb265-7a4cb24a"
                  tag="div"
                >
                  {day4}
                </_Builtin.Block>
                <_Builtin.Block
                  id="w-node-_095dd658-a0b5-52d3-dce8-c5217a4cb267-7a4cb24a"
                  tag="div"
                >
                  {day4Hours}
                </_Builtin.Block>
                <_Builtin.Block
                  id="w-node-_095dd658-a0b5-52d3-dce8-c5217a4cb269-7a4cb24a"
                  tag="div"
                >
                  {day5}
                </_Builtin.Block>
                <_Builtin.Block
                  id="w-node-_095dd658-a0b5-52d3-dce8-c5217a4cb26b-7a4cb24a"
                  tag="div"
                >
                  {day5Hours}
                </_Builtin.Block>
                <_Builtin.Block
                  id="w-node-_095dd658-a0b5-52d3-dce8-c5217a4cb26d-7a4cb24a"
                  tag="div"
                >
                  {day6}
                </_Builtin.Block>
                <_Builtin.Block
                  id="w-node-_095dd658-a0b5-52d3-dce8-c5217a4cb26f-7a4cb24a"
                  tag="div"
                >
                  {day6Hours}
                </_Builtin.Block>
                <_Builtin.Block
                  id="w-node-_095dd658-a0b5-52d3-dce8-c5217a4cb271-7a4cb24a"
                  tag="div"
                >
                  {day7}
                </_Builtin.Block>
                <_Builtin.Block
                  id="w-node-_095dd658-a0b5-52d3-dce8-c5217a4cb273-7a4cb24a"
                  tag="div"
                >
                  {day7Hours}
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block className="map-info__directions on-mobile" tag="div">
            <_Builtin.HtmlEmbed
              className="svg-icon"
              value="%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20width%3D%2240%22%20height%3D%2240%22%20rx%3D%2220%22%20fill%3D%22%2335526A%22%2F%3E%0A%3Cpath%20d%3D%22M14.5%2017.5556L14.5%2016.8056H13.75L13.75%2017.5556H14.5ZM25.5%2017.5556L26.0102%2018.1053L26.0178%2017.013L25.5%2017.5556ZM14.5%2017.5556L14.5%2018.3056H25.5L25.5%2017.5556L25.5%2016.8056H14.5L14.5%2017.5556ZM21.25%2013.5L20.7322%2014.0426L24.9822%2018.0982L25.5%2017.5556L26.0178%2017.013L21.7678%2012.9574L21.25%2013.5ZM25.5%2017.5556L24.9898%2017.0058L20.7398%2020.9503L21.25%2021.5L21.7602%2022.0497L26.0102%2018.1053L25.5%2017.5556ZM14.5%2017.5556H13.75L13.75%2026.5H14.5H15.25L15.25%2017.5556H14.5Z%22%20fill%3D%22%23FDFDFD%22%2F%3E%0A%3C%2Fsvg%3E"
            />
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.BlockContainer>
    </_Component>
  );
}
