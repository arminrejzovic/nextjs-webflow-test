"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { SectionHeaderV2 } from "./SectionHeaderV2";
import { IconChevronLeft } from "./IconChevronLeft";
import { IconArrowRight } from "./IconArrowRight";

export function SectionByStyleV2({
  as: _Component = _Builtin.Block,
  sectionHeaderV2Label = "BY STYLE",
  sectionHeaderV2Title = "Your style, your way.",
  sectionHeaderV2IntroText = "We offer more ways to customize the look of your closet than anyone else. With 1000’s of finishes, molding options, panel edge, and deco door and drawer face combinations—all designed to create a perfectly customizable closet.",
  sectionHeaderV2IntroTextMobile = "We offer more ways to customize the look of your closet than anyone else, all designed to create a perfectly customizable closet.",
  tab1Text = "Contemporary",
  tab1Visibility = true,
  tab1Image1 = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/6819f3329e4c82c7333c7eb8_Contemporary-Reach-In-Closet-2.webp",
  tab1Image2 = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/6819f333807f6ccf929678ad_Contemporary-Reach-In-Closet-Dark-Grey.webp",
  tab1Image3 = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/6819f33373e7714382b57f08_Contemporary-Walk-In-Closet-Spring-Blossom.webp",
  tab1Image4 = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/6819f333e19f27f28f484c20_Reach-In-Closet-White.webp",
  tab1Image5 = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/6819f3333aa25f75d193508d_Contemporary-Reach-In-Closet-White.webp",
  tab1Image6 = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/6819f33373e7714382b57f32_Reach-In-Closet.webp",
  tab2Text = "Modern Farmhouse",
  tab2Visibility = true,
  tab2Image1 = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/6819fda5e5ea3d6b8faf136e_Wardrobe-Closet-Dark-Grey.webp",
  tab2Image2 = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/6819fda771cb8e13d4375b27_Ranch-Reach-In-Closet-Summer-Breeze.webp",
  tab2Image3 = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/6819fda704f353ae5050de4a_Walk-In-Closet-White-2.webp",
  tab2Image4 = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/6819fda512998fb0ce61d379_Walk-In-Closet-White.webp",
  tab2Image5 = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/6819fda7c7d92618f9d97ab4_Modern-Farmhouse-Reach-In-Closet-Summer-Breeze.webp",
  tab2Image6 = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/6819fda5294a38aae8da7cfb_Reach-In-Closet-Latitude-White.webp",
  tab3Text = "Modern",
  tab3Visibility = true,
  tab3Image1 = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/6819ff5331e91753c6ce495b_Modern-Reach-In-Antique-White.webp",
  tab3Image2 = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/6819ff50a86cb468a7a7f823_Modern-Walk-In-Closet-White.webp",
  tab3Image3 = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/6819ff55ac741b0592ef44d0_Modern-Walk-in-Closet-Hard-Rock-Maple-1.webp",
  tab3Image4 = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/6819ff500703abad3b04c8be_Modern-Reach-In-Closet-White.webp",
  tab3Image5 = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/6819ff5033dd2219150df909_Modern-Reach-In-Closet-Autumn-Leaves.webp",
  tab3Image6 = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/6819ff4f04f353ae5051e8ef_Modern-Reach-In-Closet-Autumn-Leaves-2.webp",
  tab4Text = "Craft",
  tab4Visibility = true,
  tab4Image1 = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/681a006200b60e1b4751d37b_Craft-Walk-In-Closet-Summer-Breeze.webp",
  tab4Image2 = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/681a0060d78a2c92a006aeed_Ranch-Reach-In-Closet-Summer-Breeze.webp",
  tab4Image3 = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/681a0060bd7dec96158bac12_Walk-in-Closet-Summer-Breeze.webp",
  tab4Image4 = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/681a0060f1a9d07552b64aab_Craft-Reach-in-Closet-hard-Rock-Maple.webp",
  tab4Image5 = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/681a006044e8a32e29c6b9a1_Craft-Reach-In-Closet-White.webp",
  tab4Image6 = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/6812324cb1aa798b33b8dc54_Walk-in-Closet-Summer-Breeze.webp",
  tab5Text = "Transitional",
  tab5Visibility = true,
  tab5Image1 = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/681a01616c94548a98d3437a_Transitional-Walk-In-Closet-Dark-Teak.webp",
  tab5Image2 = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/681a015926c99dcddcf98508_Transitional-Reach-In-Closet-White.webp",
  tab5Image3 = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/681a0160b06c629a2aa54364_Transitional-Walk-In-Closet-White.webp",
  tab5Image4 = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/681a015b6381f41ce14ec21c_Transitional-Reach-In-Closet-Onyx.webp",
  tab5Image5 = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/681a015ac7d92618f9dbcfa8_Walk-In-Closet-Light-Grey.webp",
  tab5Image6 = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/681a015926c99dcddcf98508_Transitional-Reach-In-Closet-White.webp",
  tab6Text = "Traditional",
  tab6Visibility = true,
  tab6Image1 = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/681a0240c95319c898bbfdd3_Traditional-Walk-In-Closet-Hard-Rock-Maple.webp",
  tab6Image2 = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/681a022c0c009246cb418cf8_Reach-In-Closet-Hard-Rock-Maple.webp",
  tab6Image3 = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/681a022b33dd2219150fd681_Traditional-Walk-in-Closet-Sand-Pine.webp",
  tab6Image4 = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/681a022c4941d5e7ca9a019f_Traditional-Walk-In-Closet-Honey-Maple.webp",
  tab6Image5 = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/681a022b8c9c2c4249c27554_Traditional-Reach-In-Closet-Okanagan-Cherry.webp",
  tab6Image6 = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/681a02298a271d81de5be48f_Walk-In-Closet-White.webp",
}) {
  return (
    <_Component className="section-v2" tag="div">
      <_Builtin.Block className="container-v2" tag="div">
        <_Builtin.Block className="py-120" tag="div">
          <SectionHeaderV2
            label={sectionHeaderV2Label}
            title={sectionHeaderV2Title}
            introText={sectionHeaderV2IntroText}
            introTextMobile={sectionHeaderV2IntroTextMobile}
          />
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className="container-v2" tag="div">
        <_Builtin.HtmlEmbed
          className=""
          value="%3Cstyle%3E%0A%20%20.grid-ms%20.splide__arrow--prev%20svg%20%7B%0A%20%20%20%20transform%3A%20scaleX(1)%3B%0A%20%20%20%20fill%3A%20none%3B%0A%20%20%7D%0A%20%20.grid-ms%20.splide__arrow--next%20svg%20%7B%0A%20%20%20%20transform%3A%20scaleX(-1)%3B%0A%20%20%20%20fill%3A%20none%3B%0A%20%20%7D%0A%20%20.grid-ms__item.splide__slide%20%7B%0A%20%20%20%20will-change%3A%20transform%3B%0A%20%20%20%20transform%3A%20translateZ(0)%3B%0A%20%20%20%20backface-visibility%3A%20hidden%3B%0A%09%7D%0A%20%20.gallery-tab%20%7B%0A%20%20%20%20position%3A%20relative%3B%0A%20%20%7D%0A%20%20.gallery-tab__text%20%7B%0A%20%20%20%20position%3A%20relative%3B%0A%20%20%20%20z-index%3A%203%3B%0A%20%20%20%20color%3A%20var(--heading-color-v2)%3B%0A%20%20%20%20transition%3A%20color%200.3s%20ease%3B%0A%20%20%7D%0A%20%20.gallery-tab%3A%3Aafter%20%7B%0A%20%20%20%20content%3A%20%22%22%3B%0A%20%20%20%20position%3A%20absolute%3B%0A%20%20%20%20top%3A%200%3B%20bottom%3A%200%3B%20left%3A%200%3B%20right%3A%200%3B%0A%20%20%20%20z-index%3A%202%3B%0A%20%20%20%20background-color%3A%20var(--heading-color-v2)%3B%0A%20%20%20%20border-radius%3A%2062px%3B%0A%20%20%20%20transform%3A%20scaleX(0)%3B%0A%20%20%20%20transform-origin%3A%20right%3B%0A%20%20%20%20transition%3A%20transform%200.3s%20ease%2C%20opacity%200.3s%20ease%3B%0A%20%20%7D%0A%20%20.gallery-tab%3Ahover%20.gallery-tab__text%2C%0A%20%20.gallery-tab.active%20.gallery-tab__text%20%7B%0A%20%20%20%20color%3A%20%23fff%3B%0A%20%20%7D%0A%20%20.gallery-tab%3Ahover%3A%3Aafter%2C%0A%20%20.gallery-tab.active%3A%3Aafter%20%7B%0A%20%20%20%20transform%3A%20scaleX(1)%3B%0A%20%20%20%20transform-origin%3A%20left%3B%0A%20%20%7D%0A%20%20.custom-select-v2__options%20%7B%0A%20%20%20%20display%3A%20none%3B%0A%20%20%7D%0A%20%20.custom-select-v2__options.open%20%7B%0A%20%20%20%20display%3A%20flex%3B%0A%20%20%7D%0A%20%20.custom-select-v2__option.active%20%7B%0A%20%20%20%20display%3A%20none%3B%0A%20%20%7D%0A%20%20.custom-select-v2.hidden-desktop.active%20%7B%0A%20%20%20%20border-radius%3A%2016px%2016px%200%200%3B%0A%20%20%7D%0A%20%20%40media%20screen%20and%20(min-width%3A%20992px)%20%7B%0A%20%20%20%20.thumbnails-splide%20%7B%0A%20%20%20%20%20%20display%3A%20none%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20%40media%20(max-width%3A%20991px)%20%7B%0A%20%20%20%20.thumbnails-splide%20%7B%0A%20%20%20%20%20%20margin-right%3A%20-1rem%3B%0A%20%20%20%20%20%20width%3A%20calc(100%25%20%2B%201rem)%3B%0A%20%20%20%20%7D%0A%20%20%20%20.grid-ms%20.splide__arrows%20.splide__arrow%20%7B%0A%20%20%20%20%20%20position%3A%20static%3B%0A%20%20%20%20%20%20transform%3A%20none%3B%0A%20%20%20%20%20%20width%3A%203rem%3B%0A%20%20%20%20%20%20height%3A%203rem%3B%0A%20%20%20%20%7D%0A%20%20%20%20.grid-ms%20.splide__arrows%20.splide__arrow%20svg%20%7B%0A%20%20%20%20%20%20fill%3A%20transparent%3B%0A%20%20%20%20%20%20font-size%3A%201.5rem%3B%0A%20%20%20%20%7D%0A%20%20%20%20.grid-ms%20.splide__arrows%20%7B%0A%20%20%20%20%20%20display%3A%20flex%3B%0A%20%20%20%20%20%20grid-column-gap%3A%201rem%3B%0A%20%20%20%20%20%20grid-row-gap%3A%201rem%3B%0A%20%20%20%20%20%20justify-content%3A%20center%3B%0A%20%20%20%20%20%20align-items%3A%20flex-start%3B%0A%20%20%20%20%20%20padding-top%3A%201rem%3B%0A%20%20%20%20%20%20padding-right%3A%200rem%3B%0A%20%20%20%20%20%20margin-top%3A%202rem%3B%0A%20%20%20%20%7D%0A%20%20%20%20.grid-ms%20.splide__arrows%20.splide__arrow%20svg%20path%20%7B%0A%20%20%20%20%20%20stroke%3A%20%23fff%3B%0A%20%20%20%20%20%20stroke-width%3A%206px%3B%0A%20%20%20%20%7D%0A%20%20%20%20.splide__slide.grid-ms__item.tall%2C%0A%20%20%20%20.splide__slide.grid-ms__item%20%7B%0A%20%20%20%20%20%20aspect-ratio%3A%20288%20%2F%20400%3B%0A%20%20%20%20%7D%0A%20%20%20%20.thumbnails-splide%20.splide__slide.grid-ms__item.tall%2C%0A%20%20%20%20.thumbnails-splide%20.splide__slide.grid-ms__item%20%7B%0A%20%20%20%20%20%20aspect-ratio%3A%201%3B%0A%20%20%20%20%7D%0A%20%20%20%20.thumbnails-splide%20.splide__pagination__page%20%7B%0A%20%20%20%20%20%20background%3A%20var(--light-grey-v2)%3B%0A%20%20%20%20%20%20opacity%3A%201%3B%0A%20%20%20%20%7D%0A%20%20%20%20.thumbnails-splide%20.splide__pagination__page.is-active%20%7B%0A%20%20%20%20%20%20background%3A%20var(--dark-grey-v2)%3B%0A%20%20%20%20%20%20opacity%3A%201%3B%0A%20%20%20%20%20%20transform%3A%20scale(1)%3B%0A%20%20%20%20%7D%0A%20%20%20%20.thumbnails-splide%20.splide__pagination%20%7B%0A%20%20%20%20%20%20bottom%3A%204rem%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20.grid-ms__item%20%7B%0A%20%20%20%20width%3A%20calc(25%25%20-%206px)%3B%0A%20%20%7D%0A%20%20.grid-ms%20.splide%20%7B%0A%20%20%20%20visibility%3A%20visible%3B%0A%20%20%7D%0A%20%20.thumbnails-splide%20.splide__track--nav%3E.splide__list%3E.splide__slide.is-active%2C%0A%20%20.thumbnails-splide%20.splide__track--nav%3E.splide__list%3E.splide__slide%20%7B%0A%20%20%20%20border%3A%200%3B%0A%20%20%7D%0A%20%20.thumbnails-splide%20%7B%0A%20%20%20%20margin-top%3A%200.5rem%3B%0A%20%20%7D%0A%3C%2Fstyle%3E%0A%0A%3Cscript%3E%0Avar%20Webflow%20%3D%20Webflow%20%7C%7C%20%5B%5D%3B%0AWebflow.push(function()%20%7B%0A%20%20function%20initGridMsSliders()%20%7B%0A%20%20%20%20const%20tabs%20%20%20%20%20%20%3D%20document.querySelectorAll('.grid-ms__filters%20.gallery-tab')%3B%0A%20%20%20%20const%20grids%20%20%20%20%20%3D%20document.querySelectorAll('.grid-ms')%3B%0A%20%20%20%20const%20isoMap%20%20%20%20%3D%20new%20Map()%3B%0A%20%20%20%20const%20splideMap%20%3D%20new%20Map()%3B%0A%20%20%20%20const%20customSelect%20%20%20%20%20%20%20%20%20%20%20%3D%20document.querySelector('.custom-select-v2')%3B%0A%20%20%20%20const%20customHeaderText%20%20%20%20%20%20%20%3D%20document.querySelector('.custom-select-v2__header__text')%3B%0A%20%20%20%20const%20customOptionsContainer%20%3D%20document.querySelector('.custom-select-v2__options')%3B%0A%0A%20%20%20%20tabs.forEach(tab%20%3D%3E%20%7B%0A%20%20%20%20%20%20const%20opt%20%3D%20document.createElement('div')%3B%0A%20%20%20%20%20%20opt.className%20%3D%20'custom-select-v2__option'%3B%0A%20%20%20%20%20%20opt.textContent%20%3D%20tab.textContent%3B%0A%20%20%20%20%20%20opt.setAttribute('data-slider'%2C%20tab.getAttribute('data-slider'))%3B%0A%20%20%20%20%20%20if%20(tab.classList.contains('active'))%20%7B%0A%20%20%20%20%20%20%20%20opt.classList.add('active')%3B%0A%20%20%20%20%20%20%20%20if(customHeaderText)%20%7B%0A%20%20%20%20%20%20%20%20%20%20customHeaderText.textContent%20%3D%20tab.textContent%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20if(customOptionsContainer)%20%7B%0A%20%20%20%20%20%20%20%20customOptionsContainer.appendChild(opt)%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D)%3B%0A%20%20%20%20const%20customOptions%20%3D%20document.querySelectorAll('.custom-select-v2__option')%3B%0A%0A%20%20%20%20function%20initIsotope(grid)%7B%0A%20%20%20%20%20%20if(!isoMap.has(grid))%20%7B%0A%20%20%20%20%20%20%20%20const%20msGrid%20%3D%20grid.querySelector('.grid-ms__grid')%3B%0A%20%20%20%20%20%20%20%20if(!msGrid)%20return%3B%0A%20%20%20%20%20%20%20%20const%20iso%20%3D%20new%20Isotope(msGrid%2C%20%7B%0A%20%20%20%20%20%20%20%20%20%20layoutMode%3A%20'packery'%2C%0A%20%20%20%20%20%20%20%20%20%20itemSelector%3A%20'.grid-ms__item'%2C%0A%20%20%20%20%20%20%20%20%20%20percentPosition%3A%20true%2C%0A%20%20%20%20%20%20%20%20%20%20packery%3A%20%7B%20gutter%3A%208%20%7D%0A%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20%20%20imagesLoaded(msGrid).on('always'%2Cfunction()%7B%20iso.layout()%3B%20%7D)%3B%0A%20%20%20%20%20%20%20%20isoMap.set(grid%2C%20iso)%3B%0A%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20isoMap.get(grid).layout()%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%0A%20%20%20%20function%20destroyAllIsotopes()%7B%0A%20%20%20%20%20%20isoMap.forEach((iso)%20%3D%3E%20iso.destroy())%3B%0A%20%20%20%20%20%20isoMap.clear()%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20function%20initSplide(grid)%7B%0A%20%20%20%20%20%20if(splideMap.has(grid))%20%7B%0A%20%20%20%20%20%20%20%20const%20%7B%20main%2C%20thumb%20%7D%20%3D%20splideMap.get(grid)%3B%0A%20%20%20%20%20%20%20%20main.destroy()%3B%0A%20%20%20%20%20%20%20%20thumb.destroy()%3B%0A%20%20%20%20%20%20%20%20splideMap.delete(grid)%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20const%20mainEl%20%20%3D%20grid.querySelector('.splide-ms-mobile-only')%3B%0A%20%20%20%20%20%20const%20thumbEl%20%3D%20grid.querySelector('.thumbnails-splide')%3B%0A%20%20%20%20%20%20if(!mainEl%20%7C%7C%20!thumbEl)%20return%3B%0A%20%20%20%20%20%20const%20mainList%20%20%3D%20mainEl.querySelector('.splide__list')%3B%0A%20%20%20%20%20%20const%20thumbList%20%3D%20thumbEl.querySelector('.splide__list')%3B%0A%20%20%20%20%20%20if(!mainList%20%7C%7C%20!thumbList)%20return%3B%0A%20%20%20%20%20%20thumbList.innerHTML%20%3D%20''%3B%0A%20%20%20%20%20%20const%20slides%20%3D%20mainList.querySelectorAll('.splide__slide')%3B%0A%20%20%20%20%20%20slides.forEach(slide%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20const%20clone%20%3D%20slide.cloneNode(true)%3B%0A%20%20%20%20%20%20%20%20thumbList.appendChild(clone)%3B%0A%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20const%20mainSplide%20%3D%20new%20Splide(mainEl%2C%20%7B%0A%20%20%20%20%20%20%20%20perPage%3A%201%2C%0A%20%20%20%20%20%20%20%20gap%3A%20'8px'%2C%0A%20%20%20%20%20%20%20%20pagination%3A%20false%2C%0A%20%20%20%20%20%20%20%20arrows%3A%20false%2C%0A%20%20%20%20%20%20%20%20padding%3A%200%2C%0A%20%20%20%20%20%20%20%20mediaQuery%3A%20'min'%2C%0A%20%20%20%20%20%20%20%20breakpoints%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20992%3A%20%7B%20destroy%3A%20true%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20const%20thumbSplide%20%3D%20new%20Splide(thumbEl%2C%20%7B%0A%20%20%20%20%20%20%20%20perPage%3A%203%2C%0A%20%20%20%20%20%20%20%20gap%3A%20'8px'%2C%0A%20%20%20%20%20%20%20%20focus%3A%20'center'%2C%0A%20%20%20%20%20%20%20%20isNavigation%3A%20true%2C%0A%20%20%20%20%20%20%20%20padding%3A%20%7B%20right%3A%20'2rem'%20%7D%2C%0A%20%20%20%20%20%20%20%20pagination%3A%20true%2C%0A%20%20%20%20%20%20%20%20mediaQuery%3A%20'min'%2C%0A%20%20%20%20%20%20%20%20breakpoints%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20992%3A%20%7B%20destroy%3A%20true%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20mainSplide.sync(thumbSplide)%3B%0A%20%20%20%20%20%20mainSplide.mount()%3B%0A%20%20%20%20%20%20thumbSplide.mount()%3B%0A%20%20%20%20%20%20splideMap.set(grid%2C%20%7B%20main%3A%20mainSplide%2C%20thumb%3A%20thumbSplide%20%7D)%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20function%20destroyAllSplides()%7B%0A%20%20%20%20%20%20splideMap.forEach((%7B%20main%2C%20thumb%20%7D)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20main.destroy()%3B%0A%20%20%20%20%20%20%20%20thumb.destroy()%3B%0A%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20splideMap.clear()%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20function%20checkWidth()%7B%0A%20%20%20%20%20%20if(window.innerWidth%20%3E%3D%20992)%7B%0A%20%20%20%20%20%20%20%20destroyAllSplides()%3B%0A%20%20%20%20%20%20%20%20const%20activeGrid%20%3D%20document.querySelector('.grid-ms.active')%3B%0A%20%20%20%20%20%20%20%20if(activeGrid)%20initIsotope(activeGrid)%3B%0A%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20destroyAllIsotopes()%3B%0A%20%20%20%20%20%20%20%20const%20activeGrid%20%3D%20document.querySelector('.grid-ms.active')%3B%0A%20%20%20%20%20%20%20%20if(activeGrid)%20initSplide(activeGrid)%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%0A%20%20%20%20function%20setActiveSlider(slider)%7B%0A%20%20%20%20%20%20tabs.forEach(t%20%3D%3E%20t.classList.remove('active'))%3B%0A%20%20%20%20%20%20customOptions.forEach(o%20%3D%3E%20o.classList.remove('active'))%3B%0A%20%20%20%20%20%20grids.forEach(g%20%3D%3E%20g.classList.remove('active'))%3B%0A%20%20%20%20%20%20const%20activeTab%20%20%20%20%3D%20%5B...tabs%5D.find(t%20%3D%3E%20t.dataset.slider%20%3D%3D%3D%20slider)%3B%0A%20%20%20%20%20%20const%20activeOption%20%3D%20%5B...customOptions%5D.find(o%20%3D%3E%20o.dataset.slider%20%3D%3D%3D%20slider)%3B%0A%20%20%20%20%20%20const%20activeGrid%20%20%20%3D%20%5B...grids%5D.find(g%20%3D%3E%20g.dataset.slider%20%3D%3D%3D%20slider)%3B%0A%20%20%20%20%20%20if(activeTab)%20activeTab.classList.add('active')%3B%0A%20%20%20%20%20%20if(activeOption)%20%7B%0A%20%20%20%20%20%20%20%20activeOption.classList.add('active')%3B%0A%20%20%20%20%20%20%20%20if(customHeaderText)%20%7B%0A%20%20%20%20%20%20%20%20%20%20customHeaderText.textContent%20%3D%20activeOption.textContent%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20if(!activeGrid)%20return%3B%0A%20%20%20%20%20%20activeGrid.classList.add('active')%3B%0A%20%20%20%20%20%20if(window.innerWidth%20%3E%3D%20992)%20%7B%0A%20%20%20%20%20%20%20%20initIsotope(activeGrid)%3B%0A%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20initSplide(activeGrid)%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20window.history.replaceState(null%2C%20null%2C%20'%23'%20%2B%20slider)%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20tabs.forEach(tab%20%3D%3E%20%7B%0A%20%20%20%20%20%20tab.addEventListener('click'%2C%20function()%7B%0A%20%20%20%20%20%20%20%20setActiveSlider(this.dataset.slider)%3B%0A%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%7D)%3B%0A%0A%20%20%20%20customOptions.forEach(opt%20%3D%3E%20%7B%0A%20%20%20%20%20%20opt.addEventListener('click'%2C%20function(e)%7B%0A%20%20%20%20%20%20%20%20e.stopPropagation()%3B%0A%20%20%20%20%20%20%20%20customOptionsContainer.classList.remove('open')%3B%0A%20%20%20%20%20%20%20%20customSelect.classList.remove('active')%3B%0A%20%20%20%20%20%20%20%20setActiveSlider(this.dataset.slider)%3B%0A%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%7D)%3B%0A%0A%20%20%20%20if(customSelect)%7B%0A%20%20%20%20%20%20customSelect.addEventListener('click'%2C%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20customOptionsContainer.classList.toggle('open')%3B%0A%20%20%20%20%20%20%20%20customSelect.classList.toggle('active')%3B%0A%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20function%20applyHashSelection()%20%7B%0A%20%20%20%20%20%20const%20hash%20%3D%20window.location.hash.replace('%23'%2C%20'')%3B%0A%20%20%20%20%20%20if(!hash)%20return%3B%0A%20%20%20%20%20%20const%20matchingTab%20%3D%20%5B...tabs%5D.find(t%20%3D%3E%20t.dataset.slider%20%3D%3D%3D%20hash)%3B%0A%20%20%20%20%20%20if(matchingTab)%20setActiveSlider(hash)%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20checkWidth()%3B%0A%20%20%20%20%2F%2Fwindow.addEventListener('resize'%2C%20checkWidth)%3B%0A%20%20%20%20applyHashSelection()%3B%0A%20%20%7D%0A%0A%20%20function%20waitForSplide()%20%7B%0A%20%20%20%20if%20(typeof%20window.Splide%20!%3D%3D%20'undefined')%20%7B%0A%20%20%20%20%20%20initGridMsSliders()%3B%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20setTimeout(waitForSplide%2C%2050)%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20waitForSplide()%3B%0A%7D)%3B%0A%3C%2Fscript%3E"
        />
        <_Builtin.Block className="grid-ms__filters" tag="div">
          <_Builtin.Block className="gallery-tabs" tag="div">
            {tab1Visibility ? (
              <_Builtin.Block
                className="gallery-tab border-lg active"
                tag="div"
                data-slider="contemporary"
              >
                <_Builtin.Block
                  className="gallery-tab__text"
                  tag="div"
                  data-slider="drawers"
                >
                  {tab1Text}
                </_Builtin.Block>
              </_Builtin.Block>
            ) : null}
            {tab2Visibility ? (
              <_Builtin.Block
                className="gallery-tab border-lg"
                tag="div"
                data-slider="modern-farmhouse"
              >
                <_Builtin.Block className="gallery-tab__text" tag="div">
                  {tab2Text}
                </_Builtin.Block>
              </_Builtin.Block>
            ) : null}
            {tab3Visibility ? (
              <_Builtin.Block
                className="gallery-tab border-lg"
                tag="div"
                data-slider="modern"
              >
                <_Builtin.Block className="gallery-tab__text" tag="div">
                  {tab3Text}
                </_Builtin.Block>
              </_Builtin.Block>
            ) : null}
            {tab4Visibility ? (
              <_Builtin.Block
                className="gallery-tab border-lg"
                tag="div"
                data-slider="craft"
              >
                <_Builtin.Block className="gallery-tab__text" tag="div">
                  {tab4Text}
                </_Builtin.Block>
              </_Builtin.Block>
            ) : null}
            {tab5Visibility ? (
              <_Builtin.Block
                className="gallery-tab border-lg"
                tag="div"
                data-slider="transitional"
              >
                <_Builtin.Block className="gallery-tab__text" tag="div">
                  {tab5Text}
                </_Builtin.Block>
              </_Builtin.Block>
            ) : null}
            {tab6Visibility ? (
              <_Builtin.Block
                className="gallery-tab border-lg"
                tag="div"
                data-slider="traditional"
              >
                <_Builtin.Block className="gallery-tab__text" tag="div">
                  {tab6Text}
                </_Builtin.Block>
              </_Builtin.Block>
            ) : null}
          </_Builtin.Block>
          <_Builtin.Block className="custom-select-v2 hidden-desktop" tag="div">
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
            <_Builtin.Block className="custom-select-v2__options" tag="div" />
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className="py-120" tag="div">
          {tab1Visibility ? (
            <_Builtin.Block
              className="grid-ms active"
              tag="div"
              data-slider="contemporary"
            >
              <_Builtin.Block
                className="splide splide-ms-mobile-only"
                tag="div"
              >
                <_Builtin.Block className="splide__track" tag="div">
                  <_Builtin.Block
                    className="splide__list grid-ms__grid"
                    tag="div"
                  >
                    <_Builtin.Block
                      className="splide__slide grid-ms__item tall"
                      tag="div"
                    >
                      <_Builtin.Image
                        className="grid-ms__image"
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt=""
                        src={tab1Image1}
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="splide__slide grid-ms__item regular"
                      tag="div"
                    >
                      <_Builtin.Image
                        className="grid-ms__image"
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt=""
                        src={tab1Image2}
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="splide__slide grid-ms__item tall"
                      tag="div"
                    >
                      <_Builtin.Image
                        className="grid-ms__image"
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt=""
                        src={tab1Image3}
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="splide__slide grid-ms__item regular"
                      tag="div"
                    >
                      <_Builtin.Image
                        className="grid-ms__image"
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt=""
                        src={tab1Image4}
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="splide__slide grid-ms__item regular"
                      tag="div"
                    >
                      <_Builtin.Image
                        className="grid-ms__image"
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt=""
                        src={tab1Image5}
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="splide__slide grid-ms__item regular"
                      tag="div"
                    >
                      <_Builtin.Image
                        className="grid-ms__image"
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt=""
                        src={tab1Image6}
                      />
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block className="splide thumbnails-splide" tag="div">
                <_Builtin.Block className="splide__track" tag="div">
                  <_Builtin.Block className="splide__list" tag="div" />
                </_Builtin.Block>
                <_Builtin.Block
                  className="splide__arrows hidden-desktop"
                  tag="div"
                >
                  <_Builtin.Block
                    className="splide__arrow splide__arrow--prev"
                    tag="div"
                  >
                    <_Builtin.Block tag="div">
                      <IconChevronLeft />
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className="splide__arrow splide__arrow--next"
                    tag="div"
                  >
                    <_Builtin.Block tag="div">
                      <IconChevronLeft />
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          ) : null}
          {tab2Visibility ? (
            <_Builtin.Block
              className="grid-ms"
              tag="div"
              data-slider="modern-farmhouse"
            >
              <_Builtin.Block
                className="splide splide-ms-mobile-only"
                tag="div"
              >
                <_Builtin.Block className="splide__track" tag="div">
                  <_Builtin.Block
                    className="splide__list grid-ms__grid"
                    tag="div"
                  >
                    <_Builtin.Block
                      className="splide__slide grid-ms__item tall"
                      tag="div"
                    >
                      <_Builtin.Image
                        className="grid-ms__image"
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt=""
                        src={tab2Image1}
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="splide__slide grid-ms__item regular"
                      tag="div"
                    >
                      <_Builtin.Image
                        className="grid-ms__image"
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt=""
                        src={tab2Image2}
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="splide__slide grid-ms__item tall"
                      tag="div"
                    >
                      <_Builtin.Image
                        className="grid-ms__image"
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt=""
                        src={tab2Image3}
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="splide__slide grid-ms__item regular"
                      tag="div"
                    >
                      <_Builtin.Image
                        className="grid-ms__image"
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt=""
                        src={tab2Image4}
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="splide__slide grid-ms__item regular"
                      tag="div"
                    >
                      <_Builtin.Image
                        className="grid-ms__image"
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt=""
                        src={tab2Image5}
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="splide__slide grid-ms__item regular"
                      tag="div"
                    >
                      <_Builtin.Image
                        className="grid-ms__image"
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt=""
                        src={tab2Image6}
                      />
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block className="splide thumbnails-splide" tag="div">
                <_Builtin.Block className="splide__track" tag="div">
                  <_Builtin.Block className="splide__list" tag="div" />
                </_Builtin.Block>
                <_Builtin.Block
                  className="splide__arrows hidden-desktop"
                  tag="div"
                >
                  <_Builtin.Block
                    className="splide__arrow splide__arrow--prev"
                    tag="div"
                  >
                    <_Builtin.Block tag="div">
                      <IconChevronLeft />
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className="splide__arrow splide__arrow--next"
                    tag="div"
                  >
                    <_Builtin.Block tag="div">
                      <IconChevronLeft />
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          ) : null}
          {tab3Visibility ? (
            <_Builtin.Block className="grid-ms" tag="div" data-slider="modern">
              <_Builtin.Block
                className="splide splide-ms-mobile-only"
                tag="div"
              >
                <_Builtin.Block className="splide__track" tag="div">
                  <_Builtin.Block
                    className="splide__list grid-ms__grid"
                    tag="div"
                  >
                    <_Builtin.Block
                      className="splide__slide grid-ms__item tall"
                      tag="div"
                    >
                      <_Builtin.Image
                        className="grid-ms__image"
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt=""
                        src={tab3Image1}
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="splide__slide grid-ms__item regular"
                      tag="div"
                    >
                      <_Builtin.Image
                        className="grid-ms__image"
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt=""
                        src={tab3Image2}
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="splide__slide grid-ms__item tall"
                      tag="div"
                    >
                      <_Builtin.Image
                        className="grid-ms__image"
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt=""
                        src={tab3Image3}
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="splide__slide grid-ms__item regular"
                      tag="div"
                    >
                      <_Builtin.Image
                        className="grid-ms__image"
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt=""
                        src={tab3Image4}
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="splide__slide grid-ms__item regular"
                      tag="div"
                    >
                      <_Builtin.Image
                        className="grid-ms__image"
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt=""
                        src={tab3Image5}
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="splide__slide grid-ms__item regular"
                      tag="div"
                    >
                      <_Builtin.Image
                        className="grid-ms__image"
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt=""
                        src={tab3Image6}
                      />
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block className="splide thumbnails-splide" tag="div">
                <_Builtin.Block className="splide__track" tag="div">
                  <_Builtin.Block className="splide__list" tag="div" />
                </_Builtin.Block>
                <_Builtin.Block
                  className="splide__arrows hidden-desktop"
                  tag="div"
                >
                  <_Builtin.Block
                    className="splide__arrow splide__arrow--prev"
                    tag="div"
                  >
                    <_Builtin.Block tag="div">
                      <IconChevronLeft />
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className="splide__arrow splide__arrow--next"
                    tag="div"
                  >
                    <_Builtin.Block tag="div">
                      <IconChevronLeft />
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          ) : null}
          {tab4Visibility ? (
            <_Builtin.Block className="grid-ms" tag="div" data-slider="craft">
              <_Builtin.Block
                className="splide splide-ms-mobile-only"
                tag="div"
              >
                <_Builtin.Block className="splide__track" tag="div">
                  <_Builtin.Block
                    className="splide__list grid-ms__grid"
                    tag="div"
                  >
                    <_Builtin.Block
                      className="splide__slide grid-ms__item tall"
                      tag="div"
                    >
                      <_Builtin.Image
                        className="grid-ms__image"
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt=""
                        src={tab4Image1}
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="splide__slide grid-ms__item regular"
                      tag="div"
                    >
                      <_Builtin.Image
                        className="grid-ms__image"
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt=""
                        src={tab4Image2}
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="splide__slide grid-ms__item tall"
                      tag="div"
                    >
                      <_Builtin.Image
                        className="grid-ms__image"
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt=""
                        src={tab4Image3}
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="splide__slide grid-ms__item regular"
                      tag="div"
                    >
                      <_Builtin.Image
                        className="grid-ms__image"
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt=""
                        src={tab4Image4}
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="splide__slide grid-ms__item regular"
                      tag="div"
                    >
                      <_Builtin.Image
                        className="grid-ms__image"
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt=""
                        src={tab4Image5}
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="splide__slide grid-ms__item regular"
                      tag="div"
                    >
                      <_Builtin.Image
                        className="grid-ms__image"
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt=""
                        src={tab4Image6}
                      />
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block className="splide thumbnails-splide" tag="div">
                <_Builtin.Block className="splide__track" tag="div">
                  <_Builtin.Block className="splide__list" tag="div" />
                </_Builtin.Block>
                <_Builtin.Block
                  className="splide__arrows hidden-desktop"
                  tag="div"
                >
                  <_Builtin.Block
                    className="splide__arrow splide__arrow--prev"
                    tag="div"
                  >
                    <_Builtin.Block tag="div">
                      <IconChevronLeft />
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className="splide__arrow splide__arrow--next"
                    tag="div"
                  >
                    <_Builtin.Block tag="div">
                      <IconChevronLeft />
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          ) : null}
          {tab5Visibility ? (
            <_Builtin.Block
              className="grid-ms"
              tag="div"
              data-slider="transitional"
            >
              <_Builtin.Block
                className="splide splide-ms-mobile-only"
                tag="div"
              >
                <_Builtin.Block className="splide__track" tag="div">
                  <_Builtin.Block
                    className="splide__list grid-ms__grid"
                    tag="div"
                  >
                    <_Builtin.Block
                      className="splide__slide grid-ms__item tall"
                      tag="div"
                    >
                      <_Builtin.Image
                        className="grid-ms__image"
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt=""
                        src={tab5Image1}
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="splide__slide grid-ms__item regular"
                      tag="div"
                    >
                      <_Builtin.Image
                        className="grid-ms__image"
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt=""
                        src={tab5Image2}
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="splide__slide grid-ms__item tall"
                      tag="div"
                    >
                      <_Builtin.Image
                        className="grid-ms__image"
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt=""
                        src={tab5Image3}
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="splide__slide grid-ms__item regular"
                      tag="div"
                    >
                      <_Builtin.Image
                        className="grid-ms__image"
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt=""
                        src={tab5Image4}
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="splide__slide grid-ms__item regular"
                      tag="div"
                    >
                      <_Builtin.Image
                        className="grid-ms__image"
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt=""
                        src={tab5Image5}
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="splide__slide grid-ms__item regular"
                      tag="div"
                    >
                      <_Builtin.Image
                        className="grid-ms__image"
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt=""
                        src={tab5Image6}
                      />
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block className="splide thumbnails-splide" tag="div">
                <_Builtin.Block className="splide__track" tag="div">
                  <_Builtin.Block className="splide__list" tag="div" />
                </_Builtin.Block>
                <_Builtin.Block
                  className="splide__arrows hidden-desktop"
                  tag="div"
                >
                  <_Builtin.Block
                    className="splide__arrow splide__arrow--prev"
                    tag="div"
                  >
                    <_Builtin.Block tag="div">
                      <IconChevronLeft />
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className="splide__arrow splide__arrow--next"
                    tag="div"
                  >
                    <_Builtin.Block tag="div">
                      <IconChevronLeft />
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          ) : null}
          {tab6Visibility ? (
            <_Builtin.Block
              className="grid-ms"
              tag="div"
              data-slider="traditional"
            >
              <_Builtin.Block
                className="splide splide-ms-mobile-only"
                tag="div"
              >
                <_Builtin.Block className="splide__track" tag="div">
                  <_Builtin.Block
                    className="splide__list grid-ms__grid"
                    tag="div"
                  >
                    <_Builtin.Block
                      className="splide__slide grid-ms__item tall"
                      tag="div"
                    >
                      <_Builtin.Image
                        className="grid-ms__image"
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt=""
                        src={tab6Image1}
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="splide__slide grid-ms__item regular"
                      tag="div"
                    >
                      <_Builtin.Image
                        className="grid-ms__image"
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt=""
                        src={tab6Image2}
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="splide__slide grid-ms__item tall"
                      tag="div"
                    >
                      <_Builtin.Image
                        className="grid-ms__image"
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt=""
                        src={tab6Image3}
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="splide__slide grid-ms__item regular"
                      tag="div"
                    >
                      <_Builtin.Image
                        className="grid-ms__image"
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt=""
                        src={tab6Image4}
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="splide__slide grid-ms__item regular"
                      tag="div"
                    >
                      <_Builtin.Image
                        className="grid-ms__image"
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt=""
                        src={tab6Image5}
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="splide__slide grid-ms__item regular"
                      tag="div"
                    >
                      <_Builtin.Image
                        className="grid-ms__image"
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt=""
                        src={tab6Image6}
                      />
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block className="splide thumbnails-splide" tag="div">
                <_Builtin.Block className="splide__track" tag="div">
                  <_Builtin.Block className="splide__list" tag="div" />
                </_Builtin.Block>
                <_Builtin.Block
                  className="splide__arrows hidden-desktop"
                  tag="div"
                >
                  <_Builtin.Block
                    className="splide__arrow splide__arrow--prev"
                    tag="div"
                  >
                    <_Builtin.Block tag="div">
                      <IconChevronLeft />
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className="splide__arrow splide__arrow--next"
                    tag="div"
                  >
                    <_Builtin.Block tag="div">
                      <IconChevronLeft />
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          ) : null}
        </_Builtin.Block>
        <_Builtin.Block className="pb-120" tag="div">
          <_Builtin.Link
            className="btn-v2 btn-v2--text"
            button={false}
            block="inline"
            options={{
              href: "/by-style",
            }}
          >
            <_Builtin.Block tag="div">{"Explore our options"}</_Builtin.Block>
            <IconArrowRight />
          </_Builtin.Link>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
