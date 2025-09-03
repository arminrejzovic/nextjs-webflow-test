"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e":{"id":"e","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2"}},"mediaQueries":["main"],"target":{"selector":".masonry-gallery__col__item","originalId":"65dc7a3f04bbddb69f27b338|6df81e38-fb49-a28a-823a-e0b5ef03a359","appliesTo":"CLASS"},"targets":[{"selector":".masonry-gallery__col__item","originalId":"65dc7a3f04bbddb69f27b338|6df81e38-fb49-a28a-823a-e0b5ef03a359","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1709034513223},"e-2":{"id":"e-2","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e"}},"mediaQueries":["main"],"target":{"selector":".masonry-gallery__col__item","originalId":"65dc7a3f04bbddb69f27b338|6df81e38-fb49-a28a-823a-e0b5ef03a359","appliesTo":"CLASS"},"targets":[{"selector":".masonry-gallery__col__item","originalId":"65dc7a3f04bbddb69f27b338|6df81e38-fb49-a28a-823a-e0b5ef03a359","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1709034513224}},"actionLists":{"a":{"id":"a","title":"Gallery hover in","actionItemGroups":[{"actionItems":[{"id":"a-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".masonry-gallery__underline","selectorGuids":["9cad07a3-d141-0cbe-86f4-c4e8a3d06b53"]},"yValue":101,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-n-2","actionTypeId":"STYLE_FILTER","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".masonry-gallery__col__item__bg","selectorGuids":["757388b0-6ca7-23b7-8431-a9cb5dd85112"]},"filters":[{"type":"grayscale","filterId":"c817","value":0,"unit":"%"}]}}]},{"actionItems":[{"id":"a-n-3","actionTypeId":"STYLE_FILTER","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".masonry-gallery__col__item__bg","selectorGuids":["757388b0-6ca7-23b7-8431-a9cb5dd85112"]},"filters":[{"type":"grayscale","filterId":"0d67","value":100,"unit":"%"}]}},{"id":"a-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".masonry-gallery__underline","selectorGuids":["9cad07a3-d141-0cbe-86f4-c4e8a3d06b53"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1709034525923},"a-2":{"id":"a-2","title":"Gallery hover out","actionItemGroups":[{"actionItems":[{"id":"a-2-n","actionTypeId":"STYLE_FILTER","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".masonry-gallery__col__item__bg","selectorGuids":["757388b0-6ca7-23b7-8431-a9cb5dd85112"]},"filters":[{"type":"grayscale","filterId":"5295","value":0,"unit":"%"}]}},{"id":"a-2-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".masonry-gallery__underline","selectorGuids":["9cad07a3-d141-0cbe-86f4-c4e8a3d06b53"]},"yValue":101,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1709035211264}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function SectionMasonryGallery({ as: _Component = _Builtin.Section }) {
  _interactions.useInteractions(_interactionsData);

  return (
    <_Component
      className="section"
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.BlockContainer
        className="container of--hidden"
        grid={{
          type: "container",
        }}
        tag="div"
      >
        <_Builtin.Block className="flex-v" tag="div">
          <_Builtin.Heading tag="h2">
            {"Your Garage, Your Way"}
          </_Builtin.Heading>
          <_Builtin.Heading className="text-color--body" tag="h3">
            {"Choose your system, finish & more"}
            <br />
          </_Builtin.Heading>
          <_Builtin.Block className="divider" tag="div" />
        </_Builtin.Block>
        <_Builtin.Block className="masonry-gallery-wrap" tag="div">
          <_Builtin.Block className="masonry-gallery swiper-wrapper" tag="div">
            <_Builtin.Block
              className="masonry-gallery__col__item swiper-slide"
              id="w-node-_11c74e71-e70c-7af1-44de-8cb162a75805-62a757fa"
              tag="div"
            >
              <_Builtin.NotSupported _atom="LightboxWrapper" />
            </_Builtin.Block>
            <_Builtin.Block
              className="masonry-gallery__col__item swiper-slide"
              id="w-node-_11c74e71-e70c-7af1-44de-8cb162a75809-62a757fa"
              tag="div"
            >
              <_Builtin.NotSupported _atom="LightboxWrapper" />
            </_Builtin.Block>
            <_Builtin.Block
              className="masonry-gallery__col__item swiper-slide"
              id="w-node-_11c74e71-e70c-7af1-44de-8cb162a7580d-62a757fa"
              tag="div"
            >
              <_Builtin.NotSupported _atom="LightboxWrapper" />
            </_Builtin.Block>
            <_Builtin.Block
              className="masonry-gallery__col__item swiper-slide"
              id="w-node-_11c74e71-e70c-7af1-44de-8cb162a75811-62a757fa"
              tag="div"
            >
              <_Builtin.NotSupported _atom="LightboxWrapper" />
            </_Builtin.Block>
            <_Builtin.Block
              className="masonry-gallery__col__item swiper-slide"
              id="w-node-_11c74e71-e70c-7af1-44de-8cb162a75815-62a757fa"
              tag="div"
            >
              <_Builtin.NotSupported _atom="LightboxWrapper" />
            </_Builtin.Block>
            <_Builtin.Block
              className="masonry-gallery__col__item swiper-slide"
              id="w-node-_11c74e71-e70c-7af1-44de-8cb162a75819-62a757fa"
              tag="div"
            >
              <_Builtin.NotSupported _atom="LightboxWrapper" />
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block className="mobile-swiper-pagination" tag="div" />
          <_Builtin.HtmlEmbed
            className="hidden-html"
            value="%3Cstyle%3E%0A%20%20%2F*%20Swiper%20styles%20*%2F%0A%20%20%3Aroot%20%7B%0A%20%20%20%20--swiper-pagination-bullet-width%3A%209px%3B%0A%20%20%20%20--swiper-pagination-bullet-height%3A%209px%3B%0A%20%20%20%20--swiper-pagination-bullet-border-radius%3A%2050%25%3B%0A%20%20%20%20--swiper-pagination-bullet-inactive-opacity%3A%200.5%3B%0A%20%20%20%20--swiper-pagination-bullet-inactive-color%3A%20var(--black)%3B%0A%20%20%20%20--swiper-pagination-bullet-horizontal-gap%3A%200%3B%0A%20%20%20%20--swiper-pagination-bullet-opacity%3A%201%3B%0A%20%20%20%20--swiper-pagination-color%3A%20var(--primary-color)%3B%0A%20%20%7D%0A%20%20.swiper-pagination-bullets%20%7B%0A%20%20%20%20display%3A%20flex%3B%0A%20%20%20%20flex-direction%3A%20row%3B%0A%20%20%20%20align-items%3A%20center%3B%0A%20%20%20%20justify-content%3A%20center%3B%0A%20%20%20%20grid-column-gap%3A%2010px%3B%0A%20%20%20%20grid-row-gap%3A%2010px%3B%0A%20%20%7D%0A%20%20.swiper-pagination-bullet%20%7B%0A%20%20%20%20transition%3A%20all%200.2s%20ease%3B%0A%20%20%7D%0A%20%20.swiper-pagination-bullet.swiper-pagination-bullet-active%20%7B%0A%20%20%20%20width%3A%2011px%3B%0A%20%20%20%20height%3A%2011px%3B%0A%20%20%7D%0A%0A%20%20%2F*%20Masonry%20styles%20*%2F%0A%20%20.masonry-gallery-wrap.swiper-disabled%20.swiper-wrapper%20%7B%0A%20%20%20%20display%3A%20grid%20!important%3B%0A%20%20%20%20height%3A%20535px%20!important%3B%0A%20%20%7D%0A%20%20%20%2F*%20Lightbox%20styles%20*%2F%0A%20%20%20%20.w-lightbox-item.w-lightbox-active%2C%0A%20%20.w-lightbox-item%20%7B%0A%20%20%20%20opacity%3A%201%3B%0A%20%20%7D%0A%20%20.w-lightbox-item%3Anot(.w-lightbox-active)%20.w-lightbox-img%20%7B%0A%20%20%20%20opacity%3A%200.3%3B%0A%20%20%7D%0A%3C%2Fstyle%3E%0A%3Cscript%3E%0A%20%20document.addEventListener('DOMContentLoaded'%2C%20()%20%3D%3E%20%7B%0A%20%20%20%20const%20swiperClass%20%3D%20'.masonry-gallery-wrap'%3B%0A%20%20%20%20const%20swiperEl%20%3D%20document.querySelector(swiperClass)%3B%0A%20%20%20%20let%20isInit%20%3D%20false%3B%0A%20%20%20%20let%20swiper%20%3D%20null%3B%0A%0A%20%20%20%20const%20resizeHandler%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20if%20(window.innerWidth%20%3E%20767)%20%7B%0A%20%20%20%20%20%20%20%20%2F%2F%20Grid%20style%0A%20%20%20%20%20%20%20%20swiperEl.classList.add('swiper-disabled')%3B%0A%20%20%20%20%20%20%20%20if%20(isInit)%20%7B%0A%20%20%20%20%20%20%20%20%20%20swiper.disable()%3B%0A%20%20%20%20%20%20%20%20%20%20swiper.destroy()%3B%0A%20%20%20%20%20%20%20%20%20%20isInit%20%3D%20false%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%2F%2F%20Swiper%20style%0A%20%20%20%20%20%20%20%20if%20(isInit)%20return%3B%0A%20%20%20%20%20%20%20%20isInit%20%3D%20true%3B%0A%20%20%20%20%20%20%20%20swiperEl.classList.remove('swiper-disabled')%3B%0A%20%20%20%20%20%20%20%20swiper%20%3D%20new%20Swiper(swiperClass%2C%20%7B%0A%20%20%20%20%20%20%20%20%20%20slidesPerView%3A%201%2C%0A%20%20%20%20%20%20%20%20%20%20spaceBetween%3A%2016%2C%0A%20%20%20%20%20%20%20%20%20%20loop%3A%20true%2C%0A%20%20%20%20%20%20%20%20%20%20pagination%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20el%3A%20'.mobile-swiper-pagination'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20clickable%3A%20true%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%3B%0A%20%20%20%20resizeHandler()%3B%0A%20%20%20%20window.addEventListener('resize'%2C%20resizeHandler)%3B%0A%20%20%7D)%3B%0A%3C%2Fscript%3E"
          />
        </_Builtin.Block>
      </_Builtin.BlockContainer>
    </_Component>
  );
}
