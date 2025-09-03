"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { IconArrowRight3 } from "./IconArrowRight3";

export function PdpGalleryV2({
  as: _Component = _Builtin.Block,
  hasDescriptions = false,
  image1 = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/67bf1e1bf60ceaa8dd5808d7_Walk-In-Closet-Mocha.webp",
  descriptionImage1 = "Dark Teak Signia™ pantry with scalloped & lattice wine racks, vertical tray storage, and lucite-front drawers for easy visibility.",
  image2 = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/6787e36a4e423f0905a9a095_8a69cdd8e12861bc8bcaf957ad654400.webp",
  descriptionImage2 = "Dark Teak Signia™ pantry with scalloped & lattice wine racks, vertical tray storage, and lucite-front drawers for easy visibility.",
  image3 = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/67878cc14190d5b02e1733be_20a52c1ebd27a36b814e4f140987b82c.webp",
  descriptionImage3 = "Dark Teak Signia™ pantry with scalloped & lattice wine racks, vertical tray storage, and lucite-front drawers for easy visibility.",
  image4 = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/6787c06fc51138323f47eed0_61b393c8aac8ca182683e0c9f1c7f2a8%20(1)%20(1).webp",
  descriptionImage4 = "Dark Teak Signia™ pantry with scalloped & lattice wine racks, vertical tray storage, and lucite-front drawers for easy visibility.",
  staticImage1 = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/679a0497c065220435d52218_Cubbies%20and%20More.webp",
  staticImage2 = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/679a0497fda6305a09f93d9d_Closets1.webp",
  staticImages = false,
  galleryImages = true,
  hideSection = true,
  image1AltText = "__wf_reserved_inherit",
  image2AltText = "__wf_reserved_inherit",
  image3AltText = "__wf_reserved_inherit",
  image4AltText = "__wf_reserved_inherit",
}) {
  return hideSection ? (
    <_Component
      className="section-photo-gallery section-anchor-v2"
      tag="div"
      id="gallery"
    >
      <_Builtin.HtmlEmbed
        className="categories-css-js-1"
        value="%3Cstyle%3E%0A%0A.featured-category%20%7B%0A%09width%3A%20100%25%3B%0A%20%20min-height%3A%20unset%3B%0A%20%20aspect-ratio%3A%201.06%3B%0A%7D%0A%0A.gallery-static-v2__image%20%7B%0A%20%20min-height%3A%20unset%3B%0A%20%20aspect-ratio%3A%201.06%3B%0A%7D%0A%0A.featured-categories.splide__list%20%7B%0A%09margin-top%3A%208px%20!important%3B%0A%7D%0A%0A.featured-category__arrow%20%7B%0A%09display%3A%20none%3B%0A%7D%0A%0A%40media%20screen%20and%20(max-width%3A%20991px)%20%7B%0A%20%20.featured-category.splide__slide.is-active%20.featured-category__image__overlay%20%7B%0A%20%20%20%20opacity%3A%200%3B%0A%20%20%7D%0A%7D%0A%0A%40media%20screen%20and%20(min-width%3A%20992px)%20%7B%0A%0A%20%20.featured-categories.splide__list%20%7B%0A%20%20%20%20display%3A%20flex%20!important%3B%0A%20%20%20%20padding%3A%208px%20!important%3B%0A%20%20%20%20gap%3A%208px%20!important%3B%0A%20%20%20%20margin%3A0%20!important%3B%0A%20%20%7D%0A%20%20%0A%20%20.featured-category%20%7B%0A%20%20%20%20flex%3A%201%201%20calc(12%25%20-%208px)%3B%0A%20%20%20%20transition%3A%20flex%200.6s%20ease%3B%0A%20%20%20%20min-height%3A%20635px%3B%0A%20%20%20%20aspect-ratio%3A%20unset%3B%0A%20%20%20%20position%3A%20relative%3B%0A%20%20%20%20overflow%3A%20hidden%3B%0A%20%20%20%20border-radius%3A%208px%3B%0A%20%20%7D%0A%20%20%0A%20%20.featured-category__image%20%7B%0A%20%20%09will-change%3A%20transform%3B%0A%20%20%20%20transition%3A%20all%201s%20ease%3B%0A%20%20%20%20transform%3A%20scale(1)%3B%0A%20%20%7D%0A%0A%20%20.featured-category%20.featured-category__image%20%7B%0A%20%20%20%20transform%3A%20scale(1)%3B%0A%20%20%20%20transition%3A%20transform%201s%20ease%3B%0A%20%20%20%20will-change%3A%20transform%3B%0A%20%20%7D%0A%0A%20%20.featured-category%20.featured-category__arrow%2C%0A%20%20.featured-category%20.featured-category__image__overlay%20%7B%0A%20%20%20%20opacity%3A%201%3B%0A%20%20%20%20transition%3A%20opacity%200.3s%20ease%3B%0A%20%20%20%20display%3A%20flex%3B%0A%20%20%7D%0A%0A%20%20.featured-category.is-hovered%20%7B%0A%20%20%20%20flex%3A%201%201%20calc(64%25%20-%208px)%3B%0A%20%20%7D%0A%0A%20%20.featured-category.is-hovered%20.featured-category__image%20%7B%0A%20%20%20%20transform%3A%20scale(1.2)%3B%0A%20%20%7D%0A%0A%20%20.featured-category.is-hovered%20.featured-category__arrow%2C%0A%20%20.featured-category.is-hovered%20.featured-category__image__overlay%20%7B%0A%20%20%20%20opacity%3A%200%3B%0A%20%20%7D%0A%0A%0A%7D%0A%3C%2Fstyle%3E%0A%0A%3Cscript%3E%0Avar%20Webflow%20%3D%20Webflow%20%7C%7C%20%5B%5D%3B%0AWebflow.push(function%20()%20%7B%0A%20%20const%20categories%20%3D%20document.querySelectorAll('.featured-category')%3B%0A%0A%20%20%2F%2F%20Set%20first%20item%20as%20initially%20hovered%0A%20%20if%20(categories.length%20%3E%200)%20%7B%0A%20%20%20%20categories%5B0%5D.classList.add('is-hovered')%3B%0A%20%20%7D%0A%0A%20%20categories.forEach(category%20%3D%3E%20%7B%0A%20%20%20%20category.addEventListener('mouseenter'%2C%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20categories.forEach(cat%20%3D%3E%20cat.classList.remove('is-hovered'))%3B%0A%20%20%20%20%20%20category.classList.add('is-hovered')%3B%0A%20%20%20%20%7D)%3B%0A%20%20%7D)%3B%0A%7D)%3B%0A%0A%3C%2Fscript%3E"
      />
      <_Builtin.HtmlEmbed
        className="categories-click-js"
        value="%3Cstyle%3E%0A%09.featured-category%20.featured-category__plus%20svg%20rect%20%7B%0A%20%20%20%20transition%3A%20all%20.2s%20ease-in-out%3B%0A%20%20%7D%0A%09.featured-category.active%20.featured-category__description%20%7B%0A%20%20%09opacity%3A%201%3B%0A%20%20%20%20visibility%3A%20visible%3B%0A%20%20%7D%0A%20%20.featured-category.is-hovered%20.featured-category__plus%20%7B%0A%20%20%09opacity%3A%201%3B%0A%20%20%7D%0A%20%20.featured-category.active%20.featured-category__plus%20%7B%0A%20%20%20%20transform%3A%20rotate(90deg)%3B%0A%20%20%7D%0A%20%20.featured-category.active%20.featured-category__plus%20.plus-rect1%20%7B%0A%20%20%20%20transform%3A%20scale(0)%3B%0A%20%20%7D%0A%09%40media%20screen%20and%20(max-width%3A%20991px)%20%7B%0A%20%20%20%20.featured-category%20.featured-category__plus%20%7B%0A%20%20%20%20%20%20opacity%3A%201%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%3C%2Fstyle%3E%0A%3Cscript%3E%0Avar%20Webflow%20%3D%20Webflow%20%7C%7C%20%5B%5D%3B%0AWebflow.push(function%20()%20%7B%0A%20%20const%20categories%20%3D%20document.querySelectorAll('.featured-category')%3B%0A%0A%20%20document.addEventListener('click'%2C%20function%20(e)%20%7B%0A%20%20%20%20const%20target%20%3D%20e.target.closest('.featured-category.is-hovered')%3B%0A%20%20%20%20if%20(!target)%20return%3B%0A%0A%20%20%20%20if%20(target.classList.contains('active'))%20%7B%0A%20%20%20%20%20%20target.classList.remove('active')%3B%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20categories.forEach(el%20%3D%3E%20el.classList.remove('active'))%3B%0A%20%20%20%20%20%20target.classList.add('active')%3B%0A%20%20%20%20%7D%0A%20%20%7D)%3B%0A%0A%20%20categories.forEach(category%20%3D%3E%20%7B%0A%20%20%20%20category.addEventListener('mouseenter'%2C%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20const%20currentActive%20%3D%20document.querySelector('.featured-category.active')%3B%0A%20%20%20%20%20%20if%20(currentActive%20%26%26%20currentActive%20!%3D%3D%20category)%20%7B%0A%20%20%20%20%20%20%20%20currentActive.classList.remove('active')%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D)%3B%0A%20%20%7D)%3B%0A%7D)%3B%0A%3C%2Fscript%3E"
      />
      {galleryImages ? (
        <_Builtin.Block className="gallery-hover-v2" tag="div">
          <_Builtin.Block className="splide splide-mobile-only" tag="div">
            <_Builtin.Block className="splide__track" tag="div">
              <_Builtin.Section
                className="featured-categories splide__list"
                grid={{
                  type: "section",
                }}
                tag="section"
              >
                <_Builtin.Block
                  className="featured-category splide__slide"
                  tag="div"
                >
                  <_Builtin.Image
                    className="featured-category__image"
                    loading="lazy"
                    width="auto"
                    height="auto"
                    src={image1}
                  />
                  <_Builtin.Block
                    className="featured-category__arrow"
                    tag="div"
                  >
                    <IconArrowRight3 />
                  </_Builtin.Block>
                  <_Builtin.Block
                    className="featured-category__image__overlay"
                    tag="div"
                  />
                  {hasDescriptions ? (
                    <_Builtin.Block
                      className="featured-category__plus"
                      tag="div"
                    >
                      <_Builtin.HtmlEmbed
                        className="svg-icon"
                        value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2230%22%20height%3D%2230%22%20viewBox%3D%220%200%2030%2030%22%20fill%3D%22none%22%3E%0A%20%20%3Crect%20class%3D%22plus-rect1%22%20x%3D%222.42871%22%20y%3D%2213.4282%22%20width%3D%2225.1413%22%20height%3D%223.14266%22%20fill%3D%22%23FDFDFD%22%2F%3E%0A%20%20%3Crect%20class%3D%22plus-rect2%22%20x%3D%2213.4287%22%20y%3D%2227.5708%22%20width%3D%2225.1413%22%20height%3D%223.14266%22%20transform%3D%22rotate(-90%2013.4287%2027.5708)%22%20fill%3D%22%23FDFDFD%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                    </_Builtin.Block>
                  ) : null}
                  {hasDescriptions ? (
                    <_Builtin.Block
                      className="featured-category__description"
                      tag="div"
                    >
                      <_Builtin.Block className="h9-v2 is--white-v2" tag="div">
                        {descriptionImage1}
                      </_Builtin.Block>
                    </_Builtin.Block>
                  ) : null}
                </_Builtin.Block>
                <_Builtin.Block
                  className="featured-category splide__slide"
                  tag="div"
                >
                  <_Builtin.Image
                    className="featured-category__image"
                    loading="lazy"
                    width="auto"
                    height="auto"
                    src={image2}
                  />
                  <_Builtin.Block
                    className="featured-category__arrow"
                    tag="div"
                  >
                    <IconArrowRight3 />
                  </_Builtin.Block>
                  <_Builtin.Block
                    className="featured-category__image__overlay"
                    tag="div"
                  />
                  {hasDescriptions ? (
                    <_Builtin.Block
                      className="featured-category__plus"
                      tag="div"
                    >
                      <_Builtin.HtmlEmbed
                        className="svg-icon"
                        value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2230%22%20height%3D%2230%22%20viewBox%3D%220%200%2030%2030%22%20fill%3D%22none%22%3E%0A%20%20%3Crect%20class%3D%22plus-rect1%22%20x%3D%222.42871%22%20y%3D%2213.4282%22%20width%3D%2225.1413%22%20height%3D%223.14266%22%20fill%3D%22%23FDFDFD%22%2F%3E%0A%20%20%3Crect%20class%3D%22plus-rect2%22%20x%3D%2213.4287%22%20y%3D%2227.5708%22%20width%3D%2225.1413%22%20height%3D%223.14266%22%20transform%3D%22rotate(-90%2013.4287%2027.5708)%22%20fill%3D%22%23FDFDFD%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                    </_Builtin.Block>
                  ) : null}
                  {hasDescriptions ? (
                    <_Builtin.Block
                      className="featured-category__description"
                      tag="div"
                    >
                      <_Builtin.Block className="h9-v2 is--white-v2" tag="div">
                        {descriptionImage2}
                      </_Builtin.Block>
                    </_Builtin.Block>
                  ) : null}
                </_Builtin.Block>
                <_Builtin.Block
                  className="featured-category splide__slide"
                  tag="div"
                >
                  <_Builtin.Image
                    className="featured-category__image"
                    loading="lazy"
                    width="auto"
                    height="auto"
                    src={image3}
                  />
                  <_Builtin.Block
                    className="featured-category__arrow"
                    tag="div"
                  >
                    <IconArrowRight3 />
                  </_Builtin.Block>
                  <_Builtin.Block
                    className="featured-category__image__overlay"
                    tag="div"
                  />
                  {hasDescriptions ? (
                    <_Builtin.Block
                      className="featured-category__plus"
                      tag="div"
                    >
                      <_Builtin.HtmlEmbed
                        className="svg-icon"
                        value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2230%22%20height%3D%2230%22%20viewBox%3D%220%200%2030%2030%22%20fill%3D%22none%22%3E%0A%20%20%3Crect%20class%3D%22plus-rect1%22%20x%3D%222.42871%22%20y%3D%2213.4282%22%20width%3D%2225.1413%22%20height%3D%223.14266%22%20fill%3D%22%23FDFDFD%22%2F%3E%0A%20%20%3Crect%20class%3D%22plus-rect2%22%20x%3D%2213.4287%22%20y%3D%2227.5708%22%20width%3D%2225.1413%22%20height%3D%223.14266%22%20transform%3D%22rotate(-90%2013.4287%2027.5708)%22%20fill%3D%22%23FDFDFD%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                    </_Builtin.Block>
                  ) : null}
                  {hasDescriptions ? (
                    <_Builtin.Block
                      className="featured-category__description"
                      tag="div"
                    >
                      <_Builtin.Block className="h9-v2 is--white-v2" tag="div">
                        {descriptionImage3}
                      </_Builtin.Block>
                    </_Builtin.Block>
                  ) : null}
                </_Builtin.Block>
                <_Builtin.Block
                  className="featured-category splide__slide"
                  tag="div"
                >
                  <_Builtin.Image
                    className="featured-category__image"
                    loading="lazy"
                    width="auto"
                    height="auto"
                    src={image4}
                  />
                  <_Builtin.Block
                    className="featured-category__arrow"
                    tag="div"
                  >
                    <_Builtin.Block className="rotate-180" tag="div">
                      <IconArrowRight3 />
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className="featured-category__image__overlay"
                    tag="div"
                  />
                  {hasDescriptions ? (
                    <_Builtin.Block
                      className="featured-category__plus"
                      tag="div"
                    >
                      <_Builtin.HtmlEmbed
                        className="svg-icon"
                        value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2230%22%20height%3D%2230%22%20viewBox%3D%220%200%2030%2030%22%20fill%3D%22none%22%3E%0A%20%20%3Crect%20class%3D%22plus-rect1%22%20x%3D%222.42871%22%20y%3D%2213.4282%22%20width%3D%2225.1413%22%20height%3D%223.14266%22%20fill%3D%22%23FDFDFD%22%2F%3E%0A%20%20%3Crect%20class%3D%22plus-rect2%22%20x%3D%2213.4287%22%20y%3D%2227.5708%22%20width%3D%2225.1413%22%20height%3D%223.14266%22%20transform%3D%22rotate(-90%2013.4287%2027.5708)%22%20fill%3D%22%23FDFDFD%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                    </_Builtin.Block>
                  ) : null}
                  {hasDescriptions ? (
                    <_Builtin.Block
                      className="featured-category__description"
                      tag="div"
                    >
                      <_Builtin.Block className="h9-v2 is--white-v2" tag="div">
                        {descriptionImage4}
                      </_Builtin.Block>
                    </_Builtin.Block>
                  ) : null}
                </_Builtin.Block>
              </_Builtin.Section>
            </_Builtin.Block>
            <_Builtin.Block
              className="splide__arrows custom-mobile-arrows"
              tag="div"
            />
          </_Builtin.Block>
        </_Builtin.Block>
      ) : null}
      {staticImages ? (
        <_Builtin.Block className="gallery-static-v2" tag="div">
          <_Builtin.Image
            className="gallery-static-v2__image"
            loading="lazy"
            width="auto"
            height="auto"
            src={staticImage1}
          />
          <_Builtin.Image
            className="gallery-static-v2__image"
            loading="lazy"
            width="auto"
            height="auto"
            src={staticImage2}
          />
        </_Builtin.Block>
      ) : null}
    </_Component>
  ) : null;
}
