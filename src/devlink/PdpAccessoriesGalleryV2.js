"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { SectionHeaderV2 } from "./SectionHeaderV2";
import { IconChevronLeft } from "./IconChevronLeft";

export function PdpAccessoriesGalleryV2({
  as: _Component = _Builtin.Block,
  sectionHeaderV2Label = "CUSTOMIZE",
  sectionHeaderV2Title = "Customize in style.",
  sectionHeaderV2HideIntroText = true,
  sectionHeaderV2IntroText = "Create a space as unique as you are with infinite customization options. Explore some of our featured details that make it easy to stay organized in style.",
  closetsAccessories = true,
  garageAccessories = false,
  laundryAccessories = false,
  officeAccessories = false,
  pantryAccessories = false,
  walltecAccessories = false,
  accessoriesTab = true,
}) {
  return (
    <_Component
      className="section-anchor-v2 section-anchor-process"
      tag="div"
      data-title="Customize"
      id="customize"
    >
      <_Builtin.Block
        className="section-gallery-tabs bg-gradient-white-grey"
        tag="div"
      >
        <_Builtin.Block className="py-120" tag="div">
          <_Builtin.BlockContainer
            className="container-v2"
            grid={{
              type: "container",
            }}
            tag="div"
          >
            <SectionHeaderV2
              label={sectionHeaderV2Label}
              title={sectionHeaderV2Title}
              introText={sectionHeaderV2IntroText}
              hideIntroText={sectionHeaderV2HideIntroText}
              secondIntroText="Find the nearest Closet World location and schedule your free in-home consultation today."
            />
            <_Builtin.Block className="py-120" tag="div">
              <_Builtin.Block className="gallery-tabs" tag="div">
                <_Builtin.Block
                  className="gallery-tab active"
                  tag="div"
                  data-slider="drawers"
                >
                  <_Builtin.Block className="gallery-tab__text" tag="div">
                    {"Drawers"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className="gallery-tab"
                  tag="div"
                  data-slider="doors"
                >
                  <_Builtin.Block className="gallery-tab__text" tag="div">
                    {"Doors"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className="gallery-tab"
                  tag="div"
                  data-slider="handles-knobs"
                >
                  <_Builtin.Block className="gallery-tab__text" tag="div">
                    {"Handles & Knobs"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className="gallery-tab"
                  tag="div"
                  data-slider="lighting"
                >
                  <_Builtin.Block className="gallery-tab__text" tag="div">
                    {"Lighting"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className="gallery-tab"
                  tag="div"
                  data-slider="molding"
                >
                  <_Builtin.Block className="gallery-tab__text" tag="div">
                    {"Molding"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className="gallery-tab"
                  tag="div"
                  data-slider="shelves"
                >
                  <_Builtin.Block className="gallery-tab__text" tag="div">
                    {"Shelves"}
                  </_Builtin.Block>
                </_Builtin.Block>
                {accessoriesTab ? (
                  <_Builtin.Block
                    className="gallery-tab"
                    tag="div"
                    data-slider="accessories"
                  >
                    <_Builtin.Block className="gallery-tab__text" tag="div">
                      {"Accessories"}
                    </_Builtin.Block>
                  </_Builtin.Block>
                ) : null}
              </_Builtin.Block>
              <_Builtin.Block
                className="custom-select-v2 hidden-desktop"
                tag="div"
              >
                <_Builtin.Block className="custom-select-v2__header" tag="div">
                  <_Builtin.Block className="custom-select-v2__arrow" tag="div">
                    <_Builtin.HtmlEmbed
                      className="svg-icon"
                      value="%3Csvg%20width%3D%2222%22%20height%3D%2220%22%20viewBox%3D%220%200%2022%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M20.394%2015.375L11.0001%206L1.60617%2015.375%22%20stroke%3D%22currentColor%22%20stroke-width%3D%223%22%2F%3E%0A%3C%2Fsvg%3E"
                    />
                  </_Builtin.Block>
                  <_Builtin.Block
                    className="custom-select-v2__header__text"
                    tag="div"
                  >
                    {"Drawers"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className="custom-select-v2__options"
                  tag="div"
                />
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.BlockContainer>
          <_Builtin.BlockContainer
            className="container-v2 px-0-mobile"
            grid={{
              type: "container",
            }}
            tag="div"
          >
            <_Builtin.Block
              className="gallery-slider splide active"
              tag="div"
              data-slider="drawers"
            >
              <_Builtin.NotSupported _atom="DynamoWrapper" />
              <_Builtin.Block className="splide__arrows" tag="div">
                <_Builtin.Block
                  className="splide__arrow splide__arrow--prev"
                  tag="div"
                >
                  <IconChevronLeft />
                </_Builtin.Block>
                <_Builtin.Block
                  className="splide__arrow splide__arrow--next"
                  tag="div"
                >
                  <IconChevronLeft />
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className="gallery-slider splide"
              tag="div"
              data-slider="doors"
            >
              <_Builtin.NotSupported _atom="DynamoWrapper" />
              <_Builtin.Block className="splide__arrows" tag="div">
                <_Builtin.Block
                  className="splide__arrow splide__arrow--prev"
                  tag="div"
                >
                  <IconChevronLeft />
                </_Builtin.Block>
                <_Builtin.Block
                  className="splide__arrow splide__arrow--next"
                  tag="div"
                >
                  <IconChevronLeft />
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className="gallery-slider splide"
              tag="div"
              data-slider="handles-knobs"
            >
              <_Builtin.NotSupported _atom="DynamoWrapper" />
              <_Builtin.Block className="splide__arrows" tag="div">
                <_Builtin.Block
                  className="splide__arrow splide__arrow--prev"
                  tag="div"
                >
                  <IconChevronLeft />
                </_Builtin.Block>
                <_Builtin.Block
                  className="splide__arrow splide__arrow--next"
                  tag="div"
                >
                  <IconChevronLeft />
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className="gallery-slider splide focus-center"
              tag="div"
              data-slider="lighting"
            >
              <_Builtin.NotSupported _atom="DynamoWrapper" />
              <_Builtin.Block className="splide__arrows" tag="div">
                <_Builtin.Block
                  className="splide__arrow splide__arrow--prev"
                  tag="div"
                >
                  <IconChevronLeft />
                </_Builtin.Block>
                <_Builtin.Block
                  className="splide__arrow splide__arrow--next"
                  tag="div"
                >
                  <IconChevronLeft />
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className="gallery-slider splide"
              tag="div"
              data-slider="molding"
            >
              <_Builtin.NotSupported _atom="DynamoWrapper" />
              <_Builtin.Block className="splide__arrows" tag="div">
                <_Builtin.Block
                  className="splide__arrow splide__arrow--prev"
                  tag="div"
                >
                  <IconChevronLeft />
                </_Builtin.Block>
                <_Builtin.Block
                  className="splide__arrow splide__arrow--next"
                  tag="div"
                >
                  <IconChevronLeft />
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className="gallery-slider splide"
              tag="div"
              data-slider="shelves"
            >
              <_Builtin.NotSupported _atom="DynamoWrapper" />
              <_Builtin.Block className="splide__arrows" tag="div">
                <_Builtin.Block
                  className="splide__arrow splide__arrow--prev"
                  tag="div"
                >
                  <IconChevronLeft />
                </_Builtin.Block>
                <_Builtin.Block
                  className="splide__arrow splide__arrow--next"
                  tag="div"
                >
                  <IconChevronLeft />
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            {closetsAccessories ? (
              <_Builtin.Block
                className="gallery-slider splide"
                tag="div"
                data-slider="accessories"
              >
                <_Builtin.NotSupported _atom="DynamoWrapper" />
                <_Builtin.Block className="splide__arrows" tag="div">
                  <_Builtin.Block
                    className="splide__arrow splide__arrow--prev"
                    tag="div"
                  >
                    <IconChevronLeft />
                  </_Builtin.Block>
                  <_Builtin.Block
                    className="splide__arrow splide__arrow--next"
                    tag="div"
                  >
                    <IconChevronLeft />
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            ) : null}
            {garageAccessories ? (
              <_Builtin.Block
                className="gallery-slider splide"
                tag="div"
                data-slider="accessories"
              >
                <_Builtin.NotSupported _atom="DynamoWrapper" />
                <_Builtin.Block className="splide__arrows" tag="div">
                  <_Builtin.Block
                    className="splide__arrow splide__arrow--prev"
                    tag="div"
                  >
                    <IconChevronLeft />
                  </_Builtin.Block>
                  <_Builtin.Block
                    className="splide__arrow splide__arrow--next"
                    tag="div"
                  >
                    <IconChevronLeft />
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            ) : null}
            {laundryAccessories ? (
              <_Builtin.Block
                className="gallery-slider splide"
                tag="div"
                data-slider="accessories"
              >
                <_Builtin.NotSupported _atom="DynamoWrapper" />
                <_Builtin.Block className="splide__arrows" tag="div">
                  <_Builtin.Block
                    className="splide__arrow splide__arrow--prev"
                    tag="div"
                  >
                    <IconChevronLeft />
                  </_Builtin.Block>
                  <_Builtin.Block
                    className="splide__arrow splide__arrow--next"
                    tag="div"
                  >
                    <IconChevronLeft />
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            ) : null}
            {officeAccessories ? (
              <_Builtin.Block
                className="gallery-slider splide"
                tag="div"
                data-slider="accessories"
              >
                <_Builtin.NotSupported _atom="DynamoWrapper" />
                <_Builtin.Block className="splide__arrows" tag="div">
                  <_Builtin.Block
                    className="splide__arrow splide__arrow--prev"
                    tag="div"
                  >
                    <IconChevronLeft />
                  </_Builtin.Block>
                  <_Builtin.Block
                    className="splide__arrow splide__arrow--next"
                    tag="div"
                  >
                    <IconChevronLeft />
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            ) : null}
            {pantryAccessories ? (
              <_Builtin.Block
                className="gallery-slider splide"
                tag="div"
                data-slider="accessories"
              >
                <_Builtin.NotSupported _atom="DynamoWrapper" />
                <_Builtin.Block className="splide__arrows" tag="div">
                  <_Builtin.Block
                    className="splide__arrow splide__arrow--prev"
                    tag="div"
                  >
                    <IconChevronLeft />
                  </_Builtin.Block>
                  <_Builtin.Block
                    className="splide__arrow splide__arrow--next"
                    tag="div"
                  >
                    <IconChevronLeft />
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            ) : null}
            {walltecAccessories ? (
              <_Builtin.Block
                className="gallery-slider splide"
                tag="div"
                data-slider="accessories"
              >
                <_Builtin.NotSupported _atom="DynamoWrapper" />
                <_Builtin.Block className="splide__arrows" tag="div">
                  <_Builtin.Block
                    className="splide__arrow splide__arrow--prev"
                    tag="div"
                  >
                    <IconChevronLeft />
                  </_Builtin.Block>
                  <_Builtin.Block
                    className="splide__arrow splide__arrow--next"
                    tag="div"
                  >
                    <IconChevronLeft />
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            ) : null}
            <_Builtin.HtmlEmbed value="%3Cstyle%3E%0A%20%20.gallery-slider%20.splide__arrow--prev%20svg%20%7B%0A%20%20%20%20transform%3A%20scaleX(1)%3B%0A%20%20%20%20fill%3A%20none%3B%0A%20%20%7D%0A%20%20.bg-gradient-white-grey%20%7B%0A%20%20%09background%3A%20linear-gradient(180deg%2C%20rgba(246%2C%20246%2C%20246%2C%200.00)%200%25%2C%20%23EBEBEB%2095.8%25)%3B%0A%20%20%7D%0A%20%20.gallery-slider%20.splide__arrow--next%20svg%20%7B%0A%20%20%20%20transform%3A%20scaleX(-1)%3B%0A%20%20%20%20fill%3A%20none%3B%0A%20%20%7D%0A%20%20.gallery-tab%20%7B%0A%20%20%09position%3A%20relative%3B%0A%20%20%7D%0A%20%20.gallery-slider%20.splide__slide%7B%0A%20%20%09overflow%3A%20hidden%3B%0A%20%20%20%20border-radius%3A%208px%3B%0A%20%20%7D%0A%20%20.gallery-slider%20.splide__slide%3A%3Abefore%20%7B%0A%20%20%20%20content%3A%20''%3B%0A%20%20%20%20display%3A%20block%3B%0A%20%20%20%20position%3A%20absolute%3B%0A%20%20%20%20width%3A%20100%25%3B%0A%20%20%20%20height%3A%20100%25%3B%0A%20%20%20%20left%3A%200%3B%0A%20%20%20%20top%3A%200%3B%0A%20%20%20%20background%3A%20linear-gradient(180deg%2C%20rgba(0%2C%200%2C%200%2C%200.00)%200%25%2C%20rgba(0%2C%200%2C%200%2C%200.40)%20100%25)%3B%0A%20%20%7D%0A%20%20.gallery-slider__modal-text-flex%20.h9-v2%20%7B%0A%20%20%20%20display%3A%20inline%3B%0A%20%20%7D%0A%0A%20%20.gallery-tab__text%20%7B%0A%20%20%09position%3A%20relative%3B%0A%20%20%20%20z-index%3A%203%3B%0A%20%20%20%20color%3A%20var(--heading-color-v2)%3B%0A%20%20%20%20transition%3A%20color%20.3s%20ease%3B%0A%20%20%7D%0A%20%20.gallery-tab%3A%3Aafter%20%7B%0A%20%20%09content%3A%20%22%22%3B%0A%20%20%20%20position%3A%20absolute%3B%0A%20%20%20%20top%3A%200%3B%0A%20%20%20%20bottom%3A%200%3B%0A%20%20%20%20left%3A%200%3B%0A%20%20%20%20right%3A%200%3B%0A%20%20%20%20z-index%3A%202%3B%0A%20%20%20%20background-color%3A%20var(--heading-color-v2)%3B%0A%20%20%20%20border-radius%3A%2062px%3B%0A%20%20%20%20transform%3A%20scaleX(0)%3B%0A%20%20%20%20transform-origin%3A%20right%3B%0A%20%20%20%20transition%3A%20transform%20.3s%20ease%2C%20opacity%20.3s%20ease%3B%0A%20%20%7D%0A%20%20.gallery-tab%3Ahover%20.gallery-tab__text%2C%0A%20%20.gallery-tab.active%20.gallery-tab__text%7B%0A%20%20%09color%3A%20white%3B%0A%20%20%7D%0A%20%20.gallery-tab%3Ahover%3A%3Aafter%2C%0A%20%20.gallery-tab.active%3A%3Aafter%7B%0A%20%20%09transform%3A%20scaleX(1)%3B%0A%20%20%20%20transform-origin%3A%20left%3B%0A%20%20%7D%0A%20%20%0A%20%20%40media%20screen%20and%20(min-width%3A%20768px)%20%7B%0A%20%20%20%20.gallery-slider%20.splide__arrow--next%2C%0A%20%20%20%20.gallery-slider%20.splide__arrow--prev%20%7B%0A%20%20%20%20%20%20background%3A%20transparent%3B%0A%20%20%20%20%20%20font-size%3A%201.5rem%3B%0A%20%20%20%20%7D%0A%20%20%20%20%0A%20%20%20%20.gallery-slider%20.splide__arrow-prev%20svg%20path%2C%0A%20%20%20%20.gallery-slider%20.splide__arrow-next%20svg%20path%7B%0A%20%20%20%20%20%20stroke%3A%20var(--black-v2)%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20%0A%20%20%2F*%20Custom%20Select%20V2%20*%2F%0A%20%20.custom-select-v2__options%20%7B%0A%20%20%09display%3A%20none%3B%0A%20%20%7D%0A%20%20.custom-select-v2__options.open%20%7B%0A%20%20%09display%3A%20flex%3B%0A%20%20%7D%0A%20%20.custom-select-v2__option.active%20%7B%0A%20%20%20%20display%3A%20none%3B%0A%20%20%7D%0A%20%20.custom-select-v2.hidden-desktop.active%20%7B%0A%20%20%20%20border-radius%3A%2016px%2016px%200%200%20!important%3B%0A%20%20%7D%0A%20%20%0A%20%20%40media%20screen%20and%20(max-width%3A%20767px)%20%7B%0A%20%20%20%20.gallery-slider%20.splide__arrows%20.splide__arrow%20%7B%0A%20%20%20%20%20%20position%3A%20static%3B%0A%20%20%20%20%20%20transform%3A%20none%3B%0A%20%20%20%20%20%20width%3A%203rem%3B%0A%20%20%20%20%20%20height%3A%203rem%3B%0A%20%20%20%20%7D%0A%20%20%20%20.gallery-slider%20.splide__arrows%20.splide__arrow%20svg%20%7B%0A%20%20%20%20%20%20fill%3A%20transparent%3B%0A%20%20%20%20%20%20font-size%3A%201.5rem%3B%0A%20%20%20%20%7D%0A%20%20%20%20.gallery-slider%20.splide__arrows%20%7B%0A%20%20%20%20%09grid-column-gap%3A%201rem%3B%0A%20%20%20%20%20%20grid-row-gap%3A%201rem%3B%0A%20%20%20%20%20%20justify-content%3A%20flex-end%3B%0A%20%20%20%20%20%20align-items%3A%20flex-start%3B%0A%20%20%20%20%20%20padding-top%3A%201rem%3B%0A%20%20%20%20%20%20padding-right%3A%201rem%3B%0A%20%20%20%20%20%20display%3A%20flex%3B%0A%20%20%20%20%20%20position%3A%20absolute%3B%0A%20%20%20%20%20%20bottom%3A%200%3B%0A%20%20%20%20%20%20right%3A%200%3B%0A%20%20%20%20%20%20display%3A%20none%20!important%3B%0A%20%20%20%20%7D%0A%20%20%20%20.gallery-slider%20.splide__arrows%20.splide__arrow%20svg%20path%20%7B%0A%20%20%20%20%20%20stroke%3A%20white%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20%0A%20%20%40media%20screen%20and%20(min-width%3A%20992px)%20%7B%0A%20%20%0A%20%20%09.gallery-slider.focus-center%20.splide__list%20%7B%0A%20%20%20%20%09justify-content%3A%20center%3B%0A%20%20%20%20%7D%0A%20%20%0A%20%20%20%20.gallery-slider%20.splide__slide%3Ahover%20.gallery-slider__modal%7B%0A%20%20%20%20%20%20display%3A%20flex%3B%0A%20%20%20%20%7D%0A%20%20%20%20.gallery-slider%20.splide__slide%3Ahover%20.gallery-slider__modal-btn%20.plus-btn%20svg%20rect%3Alast-child%7B%0A%20%20%20%20%09transform%3A%20scale(0)%3B%0A%20%20%20%20%7D%0A%20%20%20%20.gallery-slider%20.splide__slide%3Ahover%20.gallery-slider__name%20%7B%0A%20%20%20%20%09display%3A%20none%3B%0A%20%20%20%20%7D%0A%20%20%09.gallery-slider%20.splide__arrow--prev%20%7B%0A%20%20%20%20%09left%3A%20-1em%3B%0A%20%20%20%20%7D%0A%20%20%20%20.gallery-slider%20.splide__arrow--next%20%7B%0A%20%20%20%20%09right%3A%20-1em%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20%0A%20%20%40media%20screen%20and%20(max-width%3A%20991px)%20%7B%0A%0A%20%20%20%20.gallery-slider%20.splide__slide%20.gallery-slider__modal.open%7B%0A%20%20%20%20%20%20display%3A%20flex%3B%0A%20%20%20%20%7D%0A%20%20%20%20.gallery-slider%20.splide__slide%20.gallery-slider__modal-btn.open%20.plus-btn%20svg%20rect%3Alast-child%7B%0A%20%20%20%20%20%20transform%3A%20scale(0)%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%3C%2Fstyle%3E%0A%3Cscript%3E%0Avar%20Webflow%20%3D%20Webflow%20%7C%7C%20%5B%5D%3B%0AWebflow.push(function%20()%20%7B%0A%20%20const%20section%20%3D%20document.querySelector(%22.section-gallery-tabs%22)%3B%0A%20%20if%20(!section)%20return%3B%0A%0A%20%20const%20sliders%20%3D%20section.querySelectorAll(%22.gallery-slider%22)%3B%0A%20%20const%20customSelect%20%3D%20section.querySelector(%22.custom-select-v2%22)%3B%0A%20%20const%20customHeaderText%20%3D%20section.querySelector(%22.custom-select-v2__header__text%22)%3B%0A%20%20const%20customOptionsContainer%20%3D%20section.querySelector(%22.custom-select-v2__options%22)%3B%0A%0A%20%20const%20tabs%20%3D%20section.querySelectorAll(%22.gallery-tab%22)%3B%0A%20%20tabs.forEach(tab%20%3D%3E%20%7B%0A%20%20%20%20const%20option%20%3D%20document.createElement(%22div%22)%3B%0A%20%20%20%20option.className%20%3D%20%22custom-select-v2__option%22%3B%0A%20%20%20%20option.textContent%20%3D%20tab.textContent%3B%0A%20%20%20%20option.setAttribute(%22data-slider%22%2C%20tab.getAttribute(%22data-slider%22))%3B%0A%20%20%20%20if%20(tab.classList.contains(%22active%22))%20%7B%0A%20%20%20%20%20%20option.classList.add(%22active%22)%3B%0A%20%20%20%20%20%20customHeaderText.textContent%20%3D%20tab.textContent%3B%0A%20%20%20%20%7D%0A%20%20%20%20customOptionsContainer.appendChild(option)%3B%0A%20%20%7D)%3B%0A%0A%20%20customSelect.addEventListener(%22click%22%2C%20()%20%3D%3E%20%7B%0A%20%20%20%20customOptionsContainer.classList.toggle(%22open%22)%3B%0A%20%20%20%20customSelect.classList.toggle(%22active%22)%3B%0A%20%20%7D)%3B%0A%0A%20%20section.addEventListener(%22click%22%2C%20e%20%3D%3E%20%7B%0A%20%20%20%20const%20target%20%3D%20e.target.closest(%22div%5Bdata-slider%5D%22)%3B%0A%20%20%20%20if%20(target)%20%7B%0A%20%20%20%20%20%20const%20sliderId%20%3D%20target.getAttribute(%22data-slider%22)%3B%0A%20%20%20%20%20%20section.querySelectorAll(%22div%5Bdata-slider%5D%22).forEach(el%20%3D%3E%20el.classList.remove(%22active%22))%3B%0A%20%20%20%20%20%20sliders.forEach(slider%20%3D%3E%20slider.classList.remove(%22active%22))%3B%0A%20%20%20%20%20%20section.querySelectorAll(%60div%5Bdata-slider%3D%22%24%7BsliderId%7D%22%5D%60).forEach(el%20%3D%3E%20el.classList.add(%22active%22))%3B%0A%20%20%20%20%20%20const%20activeSlider%20%3D%20section.querySelector(%60.gallery-slider%5Bdata-slider%3D%22%24%7BsliderId%7D%22%5D%60)%3B%0A%20%20%20%20%20%20if%20(activeSlider)%20%7B%0A%20%20%20%20%20%20%20%20activeSlider.classList.add(%22active%22)%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20if%20(target.classList.contains(%22custom-select-v2__option%22))%20%7B%0A%20%20%20%20%20%20%20%20customHeaderText.textContent%20%3D%20target.textContent%3B%0A%20%20%20%20%20%20%20%20customOptionsContainer.classList.remove(%22open%22)%3B%0A%20%20%20%20%20%20%20%20customSelect.classList.remove(%22active%22)%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20if%20(target.classList.contains(%22gallery-tab%22))%20%7B%0A%20%20%20%20%20%20%20%20const%20correspondingOption%20%3D%20section.querySelector(%60.custom-select-v2__option%5Bdata-slider%3D%22%24%7BsliderId%7D%22%5D%60)%3B%0A%20%20%20%20%20%20%20%20if%20(correspondingOption)%20%7B%0A%20%20%20%20%20%20%20%20%20%20customHeaderText.textContent%20%3D%20correspondingOption.textContent%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%2F%2F%20Update%20URL%20hash%0A%20%20%20%20%20%20history.replaceState(null%2C%20%22%22%2C%20%60%23%24%7BsliderId%7D%60)%3B%0A%20%20%20%20%7D%0A%20%20%7D)%3B%0A%0A%20%20const%20openButtons%20%3D%20section.querySelectorAll(%22.gallery-slider__modal-btn%22)%3B%0A%20%20openButtons.forEach(btn%20%3D%3E%20%7B%0A%20%20%20%20btn.addEventListener(%22click%22%2C%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20const%20slide%20%3D%20btn.closest(%22.splide__slide%22)%3B%0A%20%20%20%20%20%20if%20(!slide)%20return%3B%0A%20%20%20%20%20%20const%20modal%20%3D%20slide.querySelector(%22.gallery-slider__modal%22)%3B%0A%20%20%20%20%20%20if%20(!modal)%20return%3B%0A%20%20%20%20%20%20modal.classList.toggle(%22open%22)%3B%0A%20%20%20%20%20%20btn.classList.toggle(%22open%22)%3B%0A%20%20%20%20%7D)%3B%0A%20%20%7D)%3B%0A%0A%20%20%2F%2F%20Anchor%20behavior%20on%20page%20load%0A%20%20%20window.addEventListener(%22load%22%2C%20()%20%3D%3E%20%7B%0A%20%20%20%20const%20hash%20%3D%20window.location.hash%3F.substring(1)%3B%0A%20%20%20%20if%20(!hash)%20return%3B%0A%0A%20%20%20%20const%20section%20%3D%20document.querySelector(%22.section-gallery-tabs%22)%3B%0A%20%20%20%20if%20(!section)%20return%3B%0A%0A%20%20%20%20const%20targetTab%20%3D%20section.querySelector(%60.gallery-tab%5Bdata-slider%3D%22%24%7Bhash%7D%22%5D%60)%3B%0A%20%20%20%20const%20anchorSection%20%3D%20document.querySelector(%22%23customize%22)%3B%0A%0A%20%20%20%20if%20(targetTab%20%26%26%20anchorSection)%20%7B%0A%20%20%20%20%20%20setTimeout(()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20targetTab.click()%3B%0A%0A%20%20%20%20%20%20%20%20setTimeout(()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20const%20baseOffset%20%3D%20-10%3B%0A%20%20%20%20%20%20%20%20%20%20const%20isMobile%20%3D%20window.innerWidth%20%3C%20768%3B%0A%20%20%20%20%20%20%20%20%20%20const%20extraMobileOffset%20%3D%20isMobile%20%3F%20220%20%3A%200%3B%0A%0A%20%20%20%20%20%20%20%20%20%20const%20y%20%3D%20anchorSection.getBoundingClientRect().top%20%2B%20window.pageYOffset%20%2B%20baseOffset%20%2B%20extraMobileOffset%3B%0A%20%20%20%20%20%20%20%20%20%20window.scrollTo(%7B%20top%3A%20y%2C%20behavior%3A%20%22smooth%22%20%7D)%3B%0A%20%20%20%20%20%20%20%20%7D%2C%20350)%3B%0A%20%20%20%20%20%20%7D%2C%20100)%3B%0A%20%20%20%20%7D%0A%20%20%7D)%3B%0A%0A%0A%0A%7D)%3B%0A%3C%2Fscript%3E" />
          </_Builtin.BlockContainer>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
