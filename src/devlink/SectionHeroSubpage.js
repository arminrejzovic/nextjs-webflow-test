"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { SliderForm } from "./SliderForm";

export function SectionHeroSubpage({
  as: _Component = _Builtin.Block,
  title = "We'll transform your garage from floor to finish.",
  text = "From simple and modern to sleek and spacious, choose from an array of made-to-order garage storage systems.",
  heroImageDesktop = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/675af4f96b586032f020043d_Contemporary-Bedroom-Closet-Summer-Breeze.jpg",
  heroImageMobile = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/675af4f9b4d1f0c1ee05dd22_Contemporary-Bedroom-Closet-Summer-Breeze-Mobile.webp",
}) {
  return (
    <_Component className="section section-hero-subpage" tag="div">
      <_Builtin.Block className="hero-subpage" tag="div">
        <_Builtin.Image
          className="hero-subpage_image hero-subpage_image--desktop"
          loading="eager"
          width="auto"
          height="auto"
          alt=""
          src={heroImageDesktop}
        />
        <_Builtin.Image
          className="hero-subpage_image hero-subpage_image--mobile"
          loading="eager"
          width="auto"
          height="auto"
          alt=""
          src={heroImageMobile}
        />
        <_Builtin.BlockContainer
          className="container-lg is--relative"
          grid={{
            type: "container",
          }}
          tag="div"
        >
          <_Builtin.Block className="hero-subpage_inner" tag="div">
            <_Builtin.Block className="hero-subpage_content" tag="div">
              <_Builtin.Block className="hero-subpage_box" tag="div">
                <_Builtin.Heading
                  className="h1-hero-new h1-hero-subpage"
                  tag="h2"
                >
                  {title}
                </_Builtin.Heading>
                <_Builtin.Paragraph className="body-medium hero-subpage_text">
                  {text}
                </_Builtin.Paragraph>
              </_Builtin.Block>
              <_Builtin.Block className="ratings ratings--left" tag="div">
                <_Builtin.Block
                  className="ratings__single ratings__single--first"
                  tag="div"
                >
                  <_Builtin.Image
                    className="ratings__img ratings__img--lg"
                    loading="lazy"
                    width="275"
                    height="61"
                    alt="Closet World Google Rating 4.6+"
                    src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/65df5a81c140f991d522bda7_google1.svg"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className="ratings__single ratings__single--middle"
                  tag="div"
                >
                  <_Builtin.Image
                    className="ratings__img"
                    loading="lazy"
                    width="189"
                    height="80"
                    alt="Closet World BBB Rating A+"
                    src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/65ddf3aacf51a6eee6bc1dc7_bbb-ratings.webp"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className="ratings__single last ratings__single--last"
                  tag="div"
                >
                  <_Builtin.Image
                    className="ratings__img"
                    loading="lazy"
                    width="216"
                    height="80"
                    alt="Closet World Consumer Awards Accredited 4.3+ stars"
                    src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/65df5a92519e57f33c34edda_consumer1.png"
                  />
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block className="hero-subpage_form" tag="div">
              <SliderForm />
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.BlockContainer>
      </_Builtin.Block>
    </_Component>
  );
}
