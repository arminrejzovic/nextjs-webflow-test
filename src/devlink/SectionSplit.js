"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-17":{"id":"e-17","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-5","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-18"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65e050fd6f910c57af0b433e|b396f403-edb8-df86-78bb-62517cbedf94","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65e050fd6f910c57af0b433e|b396f403-edb8-df86-78bb-62517cbedf94","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1709278060740},"e-18":{"id":"e-18","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-6","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-17"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65e050fd6f910c57af0b433e|b396f403-edb8-df86-78bb-62517cbedf94","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65e050fd6f910c57af0b433e|b396f403-edb8-df86-78bb-62517cbedf94","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1709278060740},"e-19":{"id":"e-19","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-5","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-20"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65e0624c328c82d5cb6da7c7|cb78847b-602d-75ce-361b-715baeed9bb7","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65e0624c328c82d5cb6da7c7|cb78847b-602d-75ce-361b-715baeed9bb7","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1709278335979},"e-20":{"id":"e-20","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-6","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-19"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65e0624c328c82d5cb6da7c7|cb78847b-602d-75ce-361b-715baeed9bb7","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65e0624c328c82d5cb6da7c7|cb78847b-602d-75ce-361b-715baeed9bb7","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1709278335979}},"actionLists":{"a-5":{"id":"a-5","title":"Blog card hover in","actionItemGroups":[{"actionItems":[{"id":"a-5-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".blog-card__img","selectorGuids":["5fb2d686-5bf3-3f4a-656a-ac39eb2a46e9"]},"value":1,"unit":""}},{"id":"a-5-n-2","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".body.is--blog-title","selectorGuids":["ec061e78-9e63-e5f1-b388-06655649261b","72f5058d-32a6-d27b-b755-545a460a1bf5"]},"globalSwatchId":"","rValue":10,"bValue":10,"gValue":10,"aValue":1}}]},{"actionItems":[{"id":"a-5-n-3","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".body.is--blog-title","selectorGuids":["ec061e78-9e63-e5f1-b388-06655649261b","72f5058d-32a6-d27b-b755-545a460a1bf5"]},"globalSwatchId":"","rValue":239,"bValue":32,"gValue":64,"aValue":1}},{"id":"a-5-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".blog-card__img","selectorGuids":["5fb2d686-5bf3-3f4a-656a-ac39eb2a46e9"]},"value":0.7,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1709202474958},"a-6":{"id":"a-6","title":"Blog card hover out","actionItemGroups":[{"actionItems":[{"id":"a-6-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".blog-card__img","selectorGuids":["5fb2d686-5bf3-3f4a-656a-ac39eb2a46e9"]},"value":1,"unit":""}},{"id":"a-6-n-2","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".body.is--blog-title","selectorGuids":["ec061e78-9e63-e5f1-b388-06655649261b","72f5058d-32a6-d27b-b755-545a460a1bf5"]},"globalSwatchId":"","rValue":10,"bValue":10,"gValue":10,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1709202605108}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function SectionSplit({
  as: _Component = _Builtin.Section,
  image = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/65dd078a21bb7183ff194932_CW12.webp",
  heading = "Organize Your Home, Organize Your Life",
  body = "You’ll work with experienced experts who practice specialized techniques in organization. These techniques utilize your space to the absolute fullest to create elegant and thoughtfully designed custom wall-bed solutions. Plus, they are made-to-order and built to last using the finest materials available.",
  ctaVisibility = true,

  ctaLink = {
    href: "#fdda4eff-2985-6aa7-e773-f4cc13de9fbe",
  },

  ctaText = "Book Your Free Appointment",
}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <_Component
      className="section section--spacing-1"
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.BlockContainer
        className="container section-split__container"
        grid={{
          type: "container",
        }}
        tag="div"
      >
        <_Builtin.Block className="section-wrapper" tag="div">
          <_Builtin.Block
            className="section-split__media section-split__left-vertical-img"
            tag="div"
          >
            <_Builtin.Image
              className="img-auto-height img-full-width"
              loading="lazy"
              width="auto"
              height="546"
              alt=""
              src={image}
            />
          </_Builtin.Block>
          <_Builtin.Block className="section-split__content" tag="div">
            <_Builtin.Heading tag="h2">{heading}</_Builtin.Heading>
            <_Builtin.Block className="divider" tag="div" />
            <_Builtin.Paragraph className="body">{body}</_Builtin.Paragraph>
            {ctaVisibility ? (
              <_Builtin.Block className="cta-wrapper" tag="div">
                <_Builtin.Link
                  className="btn btn--cta"
                  button={true}
                  block=""
                  options={ctaLink}
                >
                  {ctaText}
                </_Builtin.Link>
              </_Builtin.Block>
            ) : null}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.BlockContainer>
    </_Component>
  );
}
