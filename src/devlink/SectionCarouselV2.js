"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { SectionHeaderV2 } from "./SectionHeaderV2";
import { CardV2Alt2 } from "./CardV2Alt2";
import { IconChevronLeft } from "./IconChevronLeft";

export function SectionCarouselV2({
  as: _Component = _Builtin.Section,
  sectionHeaderV2Variant = null,
  sectionHeaderV2Label = "organize anywhere",
  sectionHeaderV2HideTitle = true,
  sectionHeaderV2Title = "Closets of every kind.",
  sectionHeaderV2HideIntroText = true,
  sectionHeaderV2IntroText = "Our certified designers are experts at assessing what you need, and maximizing your space. We can help you conquer clutter and create a functional home with a custom, flexible storage solution anywhere you can imagine.",
  sectionHeaderV2ShowScrollIcon = false,
  sectionHeaderV2ShowLink = false,
  sectionHeaderV2BtnText = "Our Story",

  sectionHeaderV2BtnLink = {
    href: "#",
  },

  sectionHeaderV2Show2ndIntro = false,
  sectionHeaderV2SecondIntroText = "Find the nearest Closet World location and schedule your free in-home consultation today.",

  cardV2Alt21Link = {
    href: "#",
  },

  cardV2Alt21Title = "Entryway Closets",
  cardV2Alt21Text = "",
  cardV2Alt21TextVisibility = false,
  cardV2Alt21Image = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/6810bf857c1659d1a2564ffe_Contemporary-Entryway-Closet-Dark-Grey.webp",
  cardV2Alt21Icon = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/67c22c3f32a9913f09cfe975_Clock-Icon.svg",
  cardV2Alt21IconVisibility = false,
  cardV2Alt21HasModal = false,
  cardV2Alt21ModalText = "We’ll double your space with a one-of-a-kind solution, built just for you. We never use prefab products, and have the largest selection of finishes, materials, features, and accessories to personalize your space.",

  cardV2Alt22Link = {
    href: "#",
  },

  cardV2Alt22Title = "Linen Closets",
  cardV2Alt22Text = "",
  cardV2Alt22TextVisibility = false,
  cardV2Alt22Image = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/6810bf84156ddd2f4dc764c5_Modern-Entryway-Closet-White.webp",
  cardV2Alt22Icon = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/67c22c496849cbf3810a41bb_Infinity-Icon.svg",
  cardV2Alt22IconVisibility = false,
  cardV2Alt22HasModal = false,
  cardV2Alt22ModalText = "We’ll double your space with a one-of-a-kind solution, built just for you. We never use prefab products, and have the largest selection of finishes, materials, features, and accessories to personalize your space.",

  cardV2Alt23Link = {
    href: "#",
  },

  cardV2Alt23Title = "WardrobeClosets",
  cardV2Alt23Text = "",
  cardV2Alt23TextVisibility = false,
  cardV2Alt23Image = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/6810bf847380984347b7d57c_Contemporary-mudroom-antique-white.webp",
  cardV2Alt23Icon = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/67c22c496849cbf3810a41bb_Infinity-Icon.svg",
  cardV2Alt23IconVisibility = false,
  cardV2Alt23HasModal = false,
  cardV2Alt23ModalText = "We own our entire state-of-the-art manufacturing process from start to finish. Our products are sourced locally in California and made in the USA with proprietary production technology operated by local craftsmen.",
}) {
  return (
    <_Component
      className="section-v2 section-carousel-v2"
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.BlockContainer
        className="container-v2"
        grid={{
          type: "container",
        }}
        tag="div"
      >
        <_Builtin.Block className="py-148" tag="div">
          <SectionHeaderV2
            title={sectionHeaderV2Title}
            label={sectionHeaderV2Label}
            introText={sectionHeaderV2IntroText}
            showLink={sectionHeaderV2ShowLink}
            btnText={sectionHeaderV2BtnText}
            hideTitle={sectionHeaderV2HideTitle}
            variant={sectionHeaderV2Variant}
            hideIntroText={sectionHeaderV2HideIntroText}
            showScrollIcon={sectionHeaderV2ShowScrollIcon}
            btnLink={sectionHeaderV2BtnLink}
            show2ndIntro={sectionHeaderV2Show2ndIntro}
            secondIntroText={sectionHeaderV2SecondIntroText}
          />
        </_Builtin.Block>
      </_Builtin.BlockContainer>
      <_Builtin.Block className="splide center-slider-card" tag="div">
        <_Builtin.Block
          className="splide__track center-slider-card-padding"
          tag="div"
        >
          <_Builtin.Block className="splide__list" tag="div">
            <_Builtin.Block className="splide__slide" tag="div">
              <_Builtin.Block className="center-slider-card__inner" tag="div">
                <CardV2Alt2
                  icon={cardV2Alt21Icon}
                  image={cardV2Alt21Image}
                  title={cardV2Alt21Title}
                  text={cardV2Alt21Text}
                  link={cardV2Alt21Link}
                  textVisibility={cardV2Alt21TextVisibility}
                  iconVisibility={cardV2Alt21IconVisibility}
                  hasModal={cardV2Alt21HasModal}
                  modalText={cardV2Alt21ModalText}
                />
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block className="splide__slide" tag="div">
              <_Builtin.Block className="center-slider-card__inner" tag="div">
                <CardV2Alt2
                  icon={cardV2Alt22Icon}
                  text={cardV2Alt22Text}
                  image={cardV2Alt22Image}
                  link={cardV2Alt22Link}
                  title={cardV2Alt22Title}
                  textVisibility={cardV2Alt22TextVisibility}
                  iconVisibility={cardV2Alt22IconVisibility}
                  hasModal={cardV2Alt22HasModal}
                  modalText={cardV2Alt22ModalText}
                />
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block className="splide__slide" tag="div">
              <_Builtin.Block className="center-slider-card__inner" tag="div">
                <CardV2Alt2
                  icon={cardV2Alt23Icon}
                  image={cardV2Alt23Image}
                  title={cardV2Alt23Title}
                  text={cardV2Alt23Text}
                  modalText={cardV2Alt23ModalText}
                  link={cardV2Alt23Link}
                  textVisibility={cardV2Alt23TextVisibility}
                  iconVisibility={cardV2Alt23IconVisibility}
                  hasModal={cardV2Alt23HasModal}
                />
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className="splide__arrows hidden-mobile" tag="div">
          <_Builtin.DOM
            className="splide__arrow splide__arrow--prev splide__arrow__cw"
            tag="button"
            aria-label="Previous slide"
          >
            <IconChevronLeft />
          </_Builtin.DOM>
          <_Builtin.DOM
            className="splide__arrow splide__arrow--next splide__arrow__cw"
            tag="button"
            aria-label="Next slide"
          >
            <IconChevronLeft />
          </_Builtin.DOM>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.HtmlEmbed
        className="card-v2-alt-modal-js-css"
        value="%3Cstyle%3E%0A%09.card-v2-alt.open%20.card-v2-alt__modal%7B%0A%20%20%09display%3A%20flex%3B%0A%20%20%7D%0A%20%20%0A%20%20.card-v2-alt.open%20.card-v2-alt__header%7B%0A%20%09%09display%3A%20none%3B%0A%20%20%7D%0A%20%20%0A%20%20%40media%20screen%20and%20(max-width%3A%20767px)%20%7B%0A%20%20%20.card-v2-alt__modal%20.h8-v2%20%7B%0A%20%20%20%20%20font-size%3A%200.875rem%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%3C%2Fstyle%3E%0A%0A%3Cscript%3E%0Avar%20Webflow%20%3D%20Webflow%20%7C%7C%20%5B%5D%3B%0AWebflow.push(function%20()%20%7B%0A%0A%20%09const%20cards%20%3D%20document.querySelectorAll('.card-v2-alt')%3B%0A%0A%20%20cards.forEach((card)%20%3D%3E%20%7B%0A%20%20%20%20const%20modal%20%3D%20card.querySelector('.card-v2-alt__modal')%3B%0A%20%20%20%20const%20closeBtn%20%3D%20card.querySelector('.card-v2-alt__modal__close')%3B%0A%0A%20%20%20%20card.addEventListener('click'%2C%20(e)%20%3D%3E%20%7B%0A%20%20%20%20%20%20const%20slide%20%3D%20card.closest('.splide__slide')%3B%0A%20%20%20%20%20%20if%20(%0A%20%20%20%20%20%20%20%20modal%20%26%26%0A%20%20%20%20%20%20%20%20slide%20%26%26%0A%20%20%20%20%20%20%20%20slide.classList.contains('is-active')%20%26%26%0A%20%20%20%20%20%20%20%20slide.classList.contains('is-visible')%0A%20%20%20%20%20%20)%20%7B%0A%20%20%20%20%20%20%20%20e.preventDefault()%3B%0A%20%20%20%20%20%20%20%20card.classList.add('open')%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D)%3B%0A%0A%20%20%20%20if%20(closeBtn)%20%7B%0A%20%20%20%20%20%20closeBtn.addEventListener('click'%2C%20(e)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20e.preventDefault()%3B%0A%20%20%20%20%20%20%20%20e.stopPropagation()%3B%0A%20%20%20%20%20%20%20%20card.classList.remove('open')%3B%0A%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%7D%0A%20%20%7D)%3B%0A%0A%0A%7D)%3B%0A%3C%2Fscript%3E"
      />
      <_Builtin.HtmlEmbed
        className="hidden-css"
        value="%3Cstyle%3E%0A%40media%20screen%20and%20(max-width%3A%20991px)%20%7B%0A%09.section-carousel-v2%20.splide__arrows.hidden-mobile%20%7B%0A%20%20%09display%3A%20flex%3B%0A%20%20%20%20justify-content%3A%20center%3B%0A%20%20%20%20margin-top%3A%201rem%3B%0A%20%20%20%20gap%3A%201rem%3B%0A%20%20%7D%0A%20%20.section-carousel-v2%20.splide__arrow%20%7B%0A%20%20%09position%3A%20static%3B%0A%20%20%20%20transform%3A%20none%20!important%3B%0A%20%20%20%20width%3A%2046px%20!important%3B%0A%20%20%20%20height%3A%2046px%20!important%3B%0A%20%20%20%20font-size%3A%201.25rem%20!important%3B%0A%20%20%7D%0A%20%20.section-carousel-v2%20.splide__arrows%20.splide__arrow__cw.splide__arrow--prev%20%7B%0A%20%20%09transform%3A%20rotate(-180deg)!important%3B%0A%20%20%7D%0A%20%20.section-carousel-v2%20.splide__arrows%20.splide__arrow__cw.splide__arrow--next%20%7B%0A%20%20%09transform%3A%20rotate(-180deg)!important%3B%0A%20%20%7D%0A%7D%0A%3C%2Fstyle%3E"
      />
    </_Component>
  );
}
