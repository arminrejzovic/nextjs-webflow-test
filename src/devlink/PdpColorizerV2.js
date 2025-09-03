"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { SectionHeaderV2 } from "./SectionHeaderV2";
import { IconArrowRight2 } from "./IconArrowRight2";
import { ColorizerPopupSwatches1 } from "./ColorizerPopupSwatches1";
import { ColorizerPopupSwatches2 } from "./ColorizerPopupSwatches2";

export function PdpColorizerV2({
  as: _Component = _Builtin.Block,
  sectionHeaderV2Label = "COLORIZE",
  sectionHeaderV2Title = "A strong finish.",
  sectionHeaderV2IntroText = "We offer over 30 finishes, 16 molding options, 4 different panel edges, and 16 deco door and drawer faces—all designed to match perfectly. Explore the range and variety of our colors and finishes.",
  tab1Tab1Title = "Essentials",
  tab1Tab1Slug = "essentials",
  tab1Tab1ActiveSwatch = "1",
  tab1Tab1Visible = true,
  tab2Tab2Title = "Signature",
  tab2Tab2Slug = "signature",
  tab2Tab2ActiveSwatch = "1",
  tab2Tab2Visible = true,
  tab3Tab3Title = "Legacy",
  tab3Tab3Slug = "legacy",
  tab3Tab3ActiveSwatch = "1",
  tab3Tab3Visible = true,
  tab4Tab4Title = "Signia",
  tab4Tab4Slug = "signia",
  tab4Tab4ActiveSwatch = "1",
  tab4Tab4Visible = true,
  tab5Tab5Title = "Chrome3",
  tab5Tab5Slug = "chrome3",
  tab5Tab5ActiveSwatch = "1",
  tab5Tab5Visible = true,
  tab1Tab1Swatch1 = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/679a0497c065220435d52218_Cubbies%20and%20More.webp",
  tab1Tab1Swatch2 = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/679a0497fda6305a09f93d9d_Closets1.webp",
  tab1Tab1Swatch3 = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/679a049776f35ce0ba84e4c0_Play-Rooms.webp",
  tab1Tab1Swatch4 = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/6799f7e59313159a5cc07d89_Trophy-and-Display.webp",
  tab1Tab1Swatch5 = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/679a0497fda6305a09f93d9d_Closets1.webp",
  tab1Tab1Swatch6 = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/679a049776f35ce0ba84e4c0_Play-Rooms.webp",
  tab2Tab2Swatch1 = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/679a0497c065220435d52218_Cubbies%20and%20More.webp",
  tab2Tab2Swatch2 = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/679a0497fda6305a09f93d9d_Closets1.webp",
  tab2Tab2Swatch3 = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/679a049776f35ce0ba84e4c0_Play-Rooms.webp",
  tab2Tab2Swatch4 = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/6799f7e59313159a5cc07d89_Trophy-and-Display.webp",
  tab2Tab2Swatch5 = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/679a0497fda6305a09f93d9d_Closets1.webp",
  tab2Tab2Swatch6 = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/679a049776f35ce0ba84e4c0_Play-Rooms.webp",
  tab3Tab3Swatch1 = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/679a0497c065220435d52218_Cubbies%20and%20More.webp",
  tab3Tab3Swatch2 = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/679a0497fda6305a09f93d9d_Closets1.webp",
  tab3Tab3Swatch3 = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/679a049776f35ce0ba84e4c0_Play-Rooms.webp",
  tab3Tab3Swatch4 = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/679d4fb7c7357fc3768cc7b8_3_customize-min.jpg",
  tab3Tab3Swatch5 = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/679a0497fda6305a09f93d9d_Closets1.webp",
  tab3Tab3Swatch6 = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/679a049776f35ce0ba84e4c0_Play-Rooms.webp",
  tab4Tab4Swatch1 = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/679a0497c065220435d52218_Cubbies%20and%20More.webp",
  tab4Tab4Swatch2 = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/679a0497fda6305a09f93d9d_Closets1.webp",
  tab4Tab4Swatch3 = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/679a049776f35ce0ba84e4c0_Play-Rooms.webp",
  tab4Tab4Swatch4 = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/6799f7e59313159a5cc07d89_Trophy-and-Display.webp",
  tab4Tab4Swatch5 = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/679a0497fda6305a09f93d9d_Closets1.webp",
  tab4Tab4Swatch6 = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/679a049776f35ce0ba84e4c0_Play-Rooms.webp",
  tab5Tab5Swatch1 = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/679a0497c065220435d52218_Cubbies%20and%20More.webp",
  tab5Tab5Swatch2 = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/679a0497fda6305a09f93d9d_Closets1.webp",
  tab5Tab5Swatch3 = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/679a049776f35ce0ba84e4c0_Play-Rooms.webp",
}) {
  return (
    <_Component tag="div">
      <_Builtin.Block className="sw-config" tag="div">
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
            />
          </_Builtin.BlockContainer>
          <_Builtin.Block className="spacer-120" tag="div" />
          <_Builtin.HtmlEmbed value="%3Cstyle%3E%0A%09.sw-config__tab__option.active%2C%0A%20%20.sw-config__tab__option.pointers-none%7B%0A%20%20%09box-shadow%3A%200%204px%204px%20%2300000040%2C%20inset%200px%200px%200px%202px%20rgba(239%2C%2065%2C%2035%2C%201)%3B%0A%20%20%7D%0A%20%20.sw-config__tab__option%3A%3Abefore%2C%0A%20%20.sw-modal__type-box%3A%3Abefore%20%7B%0A%20%20%09content%3A%20attr(data-name)%3B%0A%20%20%20%20display%3A%20flex%3B%0A%20%20%20%20position%3A%20absolute%3B%0A%20%20%20%20left%3A%206%25%3B%0A%20%20%20%20top%3A%200%3B%0A%20%20%20%20width%3A%2088%25%3B%0A%20%20%20%20height%3A%20100%25%3B%0A%20%20%20%20justify-content%3A%20center%3B%0A%20%20%20%20align-items%3A%20center%3B%0A%20%20%20%20text-align%3A%20center%3B%0A%20%20%20%20font-size%3A%200.75rem%3B%0A%20%20%20%20letter-spacing%3A%201.44px%3B%0A%20%20%20%20font-weight%3A%20500%3B%0A%20%20%20%20text-transform%3A%20uppercase%3B%0A%20%20%20%20color%3A%20white%3B%0A%20%20%20%20text-shadow%3A%200px%204px%204px%20rgba(0%2C%200%2C%200%2C%200.25)%3B%0A%20%20%20%20opacity%3A%200.75%3B%0A%20%20%20%20line-height%3A%20150%25%3B%0A%20%20%7D%0A%20%20.sw-config__tab__option%5Bdata-color%3D%22black%22%5D%3A%3Abefore%2C%0A%20%20.sw-modal__type-box%5Bdata-color%3D%22black%22%5D%3A%3Abefore%7B%0A%20%20%20%20color%3A%20black%3B%0A%20%20%7D%0A%20%20%0A%20%20%40media%20screen%20and%20(min-width%3A%20992px)%20and%20(max-width%3A%201150px)%20%7B%0A%20%20%09.sw-config__tab__option%20%7B%0A%20%20%20%20%09width%3A%20100px%3B%0A%20%20%20%20%20%20max-width%3A%20100px%3B%0A%20%20%20%20%7D%0A%20%20%20%20.sw-config__nav__item%20.h8-v2%20%7B%0A%20%20%20%20%09font-size%3A%201rem%3B%0A%20%20%20%20%7D%0A%20%20%20%20.sw-modal__type%20%7B%0A%20%20%20%20%20%20grid-column-gap%3A%201rem%3B%0A%20%20%20%20%09grid-row-gap%3A%201rem%3B%0A%20%20%20%20%7D%0A%20%20%20%20.sw-modal__type-img%2C%0A%20%20%20%20.sw-modal__type-solid%20%7B%0A%20%20%20%20%09max-width%3A%2070px%3B%0A%20%20%20%20%7D%0A%20%20%20%20.sw-config__nav__item%20%7B%0A%20%20%20%20%20%20padding%3A%200.5rem%200.5rem%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%0A%09%40media%20screen%20and%20(max-width%3A%20480px)%20%7B%0A%20%20%20%20.sw-config__tab__option%3A%3Abefore%2C%0A%20%20%09.sw-modal__type-box%3A%3Abefore%20%7B%0A%20%20%20%20%09font-size%3A%200.6rem%3B%0A%20%20%09%7D%0A%20%20%7D%0A%20%20%0A%20%20%40media%20screen%20and%20(max-width%3A%20991px)%20%7B%0A%20%20%09.sw-config__tab%20.subheading-v2%20%7B%0A%20%20%20%20%09display%3A%20none%3B%0A%20%20%20%20%7D%0A%20%20%20%20.sw-config__tab__types%20%7B%0A%20%20%20%20%20%20flex-flow%3A%20row%3B%0A%20%20%20%20%20%20flex-wrap%3A%20nowrap%3B%0A%20%20%20%20%20%20width%3A%20100%25%3B%0A%20%20%20%20%20%20overflow%3A%20scroll%3B%0A%20%20%20%20%20%20align-items%3A%20flex-start%3B%0A%20%20%20%20%20%20justify-content%3A%20flex-start%3B%0A%20%20%20%20%20%20padding-left%3A%201rem%3B%0A%20%20%20%20%7D%0A%20%20%20%20.sw-config__tab__type-wrap%20%7B%0A%20%20%20%20%20%20flex-flow%3A%20row%3B%0A%20%20%20%20%20%20align-items%3A%20center%3B%0A%20%20%20%20%20%20display%3A%20flex%3B%0A%09%09%7D%0A%20%20%20%20.sw-config__tab__type%20%7B%0A%20%20%20%20%20%20flex-flow%3A%20row%3B%0A%20%20%20%20%20%20grid-column-gap%3A%201rem%3B%0A%20%20%20%20%20%20grid-row-gap%3A%201rem%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%3C%2Fstyle%3E%0A%0A%0A%3Cscript%3E%0Avar%20Webflow%20%3D%20Webflow%20%7C%7C%20%5B%5D%3B%0AWebflow.push(function%20()%20%7B%0A%20%20const%20configSection%20%3D%20%24(%22.sw-config%22)%3B%0A%20%20const%20customSelect%20%3D%20configSection.find(%22.custom-select-v2%22)%3B%0A%20%20const%20customSelectHeader%20%3D%20customSelect.find(%22.custom-select-v2__header__text%22)%3B%0A%20%20const%20customOptionsContainer%20%3D%20customSelect.find(%22.custom-select-v2__options%22)%3B%0A%20%20const%20body%20%3D%20%24('body')%3B%0A%0A%20%20%2F%2F%20TYPE%201%0A%20%20const%20modalType1%20%20%20%20%20%20%3D%20%24('.sw-modal.type-1')%3B%0A%20%20const%20modalOpenType1%20%20%3D%20%24('.sw-modal__open.type-1')%3B%0A%20%20const%20modalCloseType1%20%3D%20modalType1.find('.sw-modal__close')%3B%0A%0A%20%20%2F%2F%20TYPE%202%0A%20%20const%20modalType2%20%20%20%20%20%20%3D%20%24('.sw-modal.type-2')%3B%0A%20%20const%20modalOpenType2%20%20%3D%20%24('.sw-modal__open.type-2')%3B%0A%20%20const%20modalCloseType2%20%3D%20modalType2.find('.sw-modal__close')%3B%0A%0A%20%20%2F%2F%20%3D%3D%3D%3D%3D%3D%20OPEN%20%3D%3D%3D%3D%3D%3D%0A%20%20%2F%2F%20Type%201%20open%0A%20%20modalOpenType1.on('click'%2C%20function()%20%7B%0A%20%20%20%20modalType1.addClass('open')%3B%0A%20%20%20%20body.addClass('no-scroll')%3B%0A%20%20%7D)%3B%0A%20%20%2F%2F%20Type%202%20open%0A%20%20modalOpenType2.on('click'%2C%20function()%20%7B%0A%20%20%20%20modalType2.addClass('open')%3B%0A%20%20%20%20body.addClass('no-scroll')%3B%0A%20%20%7D)%3B%0A%0A%20%20%2F%2F%20%3D%3D%3D%3D%3D%3D%20CLOSE%20VIA%20BUTTON%20%3D%3D%3D%3D%3D%3D%0A%20%20modalCloseType1.on('click'%2C%20function()%20%7B%0A%20%20%20%20modalType1.removeClass('open')%3B%0A%20%20%20%20body.removeClass('no-scroll')%3B%0A%20%20%7D)%3B%0A%20%20modalCloseType2.on('click'%2C%20function()%20%7B%0A%20%20%20%20modalType2.removeClass('open')%3B%0A%20%20%20%20body.removeClass('no-scroll')%3B%0A%20%20%7D)%3B%0A%0A%20%20%2F%2F%20%3D%3D%3D%3D%3D%3D%20CLOSE%20VIA%20CLICK-OUTSIDE%20%3D%3D%3D%3D%3D%3D%0A%20%20modalType1.on('click'%2C%20function(e)%20%7B%0A%20%20%20%20if%20(!%24(e.target).closest('.sw-modal__inner').length)%20%7B%0A%20%20%20%20%20%20modalType1.removeClass('open')%3B%0A%20%20%20%20%20%20body.removeClass('no-scroll')%3B%0A%20%20%20%20%7D%0A%20%20%7D)%3B%0A%20%20modalType2.on('click'%2C%20function(e)%20%7B%0A%20%20%20%20if%20(!%24(e.target).closest('.sw-modal__inner').length)%20%7B%0A%20%20%20%20%20%20modalType2.removeClass('open')%3B%0A%20%20%20%20%20%20body.removeClass('no-scroll')%3B%0A%20%20%20%20%7D%0A%20%20%7D)%3B%0A%20%20%0A%20%20%2F%2F%20SW%20SOLID%20COLORS%0A%20%20document.querySelectorAll('.sw-modal__type-solid').forEach(element%20%3D%3E%20%7B%0A%20%20%20%20const%20color%20%3D%20element.getAttribute('data-color')%3B%0A%20%20%20%20if%20(color)%20%7B%0A%20%20%20%20%20%20element.style.backgroundColor%20%3D%20%60%23%24%7Bcolor%7D%60%3B%0A%20%20%20%20%7D%0A%20%20%7D)%3B%0A%0A%0A%20%20%2F%2F%201)%20Initialize%20each%20.sw-config__tab%E2%80%99s%20active%20option%20based%20on%20data-active-swatch%0A%20%20%24(%22.sw-config__tab%22).each(function%20()%20%7B%0A%20%20%20%20const%20%24tab%20%3D%20%24(this)%3B%0A%20%20%20%20%2F%2F%20Read%20the%201-based%20swatch%20index%20or%20default%20to%201%20if%20missing%2Finvalid%0A%20%20%20%20const%20activeSwatch%20%3D%20parseInt(%24tab.attr(%22data-active-swatch%22)%2C%2010)%20%7C%7C%201%3B%0A%20%20%20%20const%20%24options%20%3D%20%24tab.find(%22.sw-config__tab__option%22)%3B%0A%20%20%20%20%24options.removeClass(%22active%22)%3B%0A%20%20%20%20%2F%2F%20Activate%20the%20child%20that%20matches%20this%201-based%20index%0A%20%20%20%20if%20(%24options.length%20%3E%3D%20activeSwatch)%20%7B%0A%20%20%20%20%20%20%24options.eq(activeSwatch%20-%201).addClass(%22active%22)%3B%0A%20%20%20%20%7D%0A%20%20%7D)%3B%0A%0A%20%20%2F%2F%202)%20On%20page%20load%2C%20for%20whichever%20tab%20is%20.active%2C%20set%20the%20main%20image%20from%20its%20active%20option%0A%20%20const%20%24initialActiveTab%20%3D%20%24(%22.sw-config__tab.active%22)%3B%0A%20%20if%20(%24initialActiveTab.length)%20%7B%0A%20%20%20%20const%20%24initialActiveOption%20%3D%20%24initialActiveTab.find(%22.sw-config__tab__option.active%22)%3B%0A%20%20%20%20if%20(%24initialActiveOption.length)%20%7B%0A%20%20%20%20%20%20const%20imageSrc%20%3D%20%24initialActiveOption.find(%22.sw-config__tab__option__img-source%22).attr(%22src%22)%3B%0A%20%20%20%20%20%20const%20imageAlt%20%3D%20%24initialActiveOption.find(%22.sw-config__tab__option__img-source%22).attr(%22alt%22)%3B%0A%20%20%20%20%20%20%24(%22.sw-config__img-main%22).attr(%22src%22%2C%20imageSrc).attr(%22alt%22%2C%20imageAlt)%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%0A%20%20%2F%2F%20%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%20CUSTOM%20SELECT%20%2F%20NAV%20LOGIC%20%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A%20%20%24(%22.sw-config__nav__item%22).each(function%20()%20%7B%0A%20%20%20%20const%20tab%20%3D%20%24(this)%3B%0A%20%20%20%20const%20title%20%3D%20tab.find(%22.h8-v2%22).text()%3B%0A%20%20%20%20const%20tabId%20%3D%20tab.attr(%22data-tab%22)%3B%0A%0A%20%20%20%20const%20option%20%3D%20%24('%3Cdiv%20class%3D%22custom-select-v2__option%22%3E%3C%2Fdiv%3E')%0A%20%20%20%20%20%20.text(title)%0A%20%20%20%20%20%20.attr(%22data-tab%22%2C%20tabId)%3B%0A%0A%20%20%20%20if%20(tab.hasClass(%22active%22))%20%7B%0A%20%20%20%20%20%20option.addClass(%22active%22)%3B%0A%20%20%20%20%20%20customSelectHeader.text(title)%3B%0A%20%20%20%20%7D%0A%20%20%20%20customOptionsContainer.append(option)%3B%0A%20%20%7D)%3B%0A%0A%20%20customSelect.on(%22click%22%2C%20function%20()%20%7B%0A%20%20%20%20customOptionsContainer.toggleClass(%22open%22)%3B%0A%20%20%20%20customSelect.toggleClass(%22active%22)%3B%0A%20%20%7D)%3B%0A%0A%20%20customOptionsContainer.on(%22click%22%2C%20%22.custom-select-v2__option%22%2C%20function%20(e)%20%7B%0A%20%20%20%20e.stopPropagation()%3B%20%2F%2F%20Prevent%20bubbling%20to%20customSelect%0A%20%20%20%20customOptionsContainer.removeClass(%22open%22)%3B%0A%20%20%20%20customSelect.removeClass(%22active%22)%3B%0A%20%20%7D)%3B%0A%0A%20%20%2F%2F%20When%20user%20picks%20from%20the%20custom%20select%2C%20activate%20that%20tab%20%26%20refresh%20the%20main%20image%0A%20%20customOptionsContainer.on(%22click%22%2C%20%22.custom-select-v2__option%22%2C%20function%20()%20%7B%0A%20%20%20%20const%20tabId%20%3D%20%24(this).attr(%22data-tab%22)%3B%0A%0A%20%20%20%20%24(%22.sw-config__nav__item%22).removeClass(%22active%22)%3B%0A%20%20%20%20%24(%22.sw-config__tab%22).removeClass(%22active%22)%3B%0A%0A%20%20%20%20const%20%24targetTab%20%3D%20%24(%60.sw-config__nav__item%5Bdata-tab%3D%22%24%7BtabId%7D%22%5D%60)%3B%0A%20%20%20%20const%20%24targetTabContent%20%3D%20%24(%60.sw-config__tab%5Bdata-tab%3D%22%24%7BtabId%7D%22%5D%60)%3B%0A%20%20%20%20%24targetTab.addClass(%22active%22)%3B%0A%20%20%20%20%24targetTabContent.addClass(%22active%22)%3B%0A%0A%20%20%20%20%24(%22.custom-select-v2__option%22).removeClass(%22active%22)%3B%0A%20%20%20%20%24(this).addClass(%22active%22)%3B%0A%20%20%20%20customSelectHeader.text(%24(this).text())%3B%0A%20%20%20%20%0A%20%20%20%20%2F%2F%20Use%20the%20data-active-swatch%20child%20or%20the%20already-active%20child%0A%20%20%20%20const%20activeSwatch%20%3D%20parseInt(%24targetTabContent.attr(%22data-active-swatch%22)%2C%2010)%20%7C%7C%201%3B%0A%20%20%20%20const%20%24options%20%3D%20%24targetTabContent.find(%22.sw-config__tab__option%22)%3B%0A%20%20%20%20%24options.removeClass(%22active%22)%3B%0A%20%20%20%20if%20(%24options.length%20%3E%3D%20activeSwatch)%20%7B%0A%20%20%20%20%20%20%24options.eq(activeSwatch%20-%201).addClass(%22active%22)%3B%0A%20%20%20%20%20%20const%20imageSrc%20%3D%20%24options.eq(activeSwatch%20-%201).find(%22.sw-config__tab__option__img-source%22).attr(%22src%22)%3B%0A%20%20%20%20%20%20const%20imageAlt%20%3D%20%24options.eq(activeSwatch%20-%201).find(%22.sw-config__tab__option__img-source%22).attr(%22alt%22)%3B%0A%20%20%0A%20%20%20%20%20%20if%20(imageSrc)%20%7B%0A%20%20%20%20%20%20%20%20%24(%22.sw-config__img-main%22).attr(%22src%22%2C%20imageSrc).attr(%22alt%22%2C%20imageAlt)%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20customOptionsContainer.removeClass(%22open%22)%3B%0A%20%20%7D)%3B%0A%0A%20%20%2F%2F%20When%20user%20clicks%20a%20.sw-config__nav__item%20directly%2C%20same%20idea%3A%20activate%20that%20tab%0A%20%20%24(%22.sw-config__nav__item%22).on(%22click%22%2C%20function%20()%20%7B%0A%20%20%20%20const%20tab%20%3D%20%24(this)%3B%0A%20%20%20%20const%20tabId%20%3D%20tab.attr(%22data-tab%22)%3B%0A%20%20%20%20%0A%20%20%20%20if%20(!tab.hasClass(%22active%22))%20%7B%0A%20%20%20%20%20%20%24(%22.sw-config__nav__item%22).removeClass(%22active%22)%3B%0A%20%20%20%20%20%20%24(%22.sw-config__tab%22).removeClass(%22active%22)%3B%0A%0A%20%20%20%20%20%20const%20%24targetTab%20%3D%20%24(%60.sw-config__nav__item%5Bdata-tab%3D%22%24%7BtabId%7D%22%5D%60)%3B%0A%20%20%20%20%20%20const%20%24targetTabContent%20%3D%20%24(%60.sw-config__tab%5Bdata-tab%3D%22%24%7BtabId%7D%22%5D%60)%3B%0A%20%20%20%20%20%20%24targetTab.addClass(%22active%22)%3B%0A%20%20%20%20%20%20%24targetTabContent.addClass(%22active%22)%3B%0A%0A%20%20%20%20%20%20const%20tabTitle%20%3D%20%24targetTab.find(%22.h8-v2%22).text()%3B%0A%20%20%20%20%20%20%24(%22.custom-select-v2__option%22).removeClass(%22active%22)%3B%0A%20%20%20%20%20%20%24(%60.custom-select-v2__option%5Bdata-tab%3D%22%24%7BtabId%7D%22%5D%60).addClass(%22active%22)%3B%0A%20%20%20%20%20%20customSelectHeader.text(tabTitle)%3B%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20%2F%2F%20Again%2C%20use%20data-active-swatch%20to%20decide%20which%20option%20is%20%22active%22%0A%20%20%20%20%20%20const%20activeSwatch%20%3D%20parseInt(%24targetTabContent.attr(%22data-active-swatch%22)%2C%2010)%20%7C%7C%201%3B%0A%20%20%20%20%20%20const%20%24options%20%3D%20%24targetTabContent.find(%22.sw-config__tab__option%22)%3B%0A%20%20%20%20%20%20%24options.removeClass(%22active%22)%3B%0A%20%20%20%20%20%20if%20(%24options.length%20%3E%3D%20activeSwatch)%20%7B%0A%20%20%20%20%20%20%20%20%24options.eq(activeSwatch%20-%201).addClass(%22active%22)%3B%0A%20%20%20%20%20%20%20%20const%20imageSrc%20%3D%20%24options.eq(activeSwatch%20-%201).find(%22.sw-config__tab__option__img-source%22).attr(%22src%22)%3B%0A%20%20%20%20%20%20%20%20const%20imageAlt%20%3D%20%24options.eq(activeSwatch%20-%201).find(%22.sw-config__tab__option__img-source%22).attr(%22alt%22)%3B%0A%20%20%20%20%20%20%20%20if%20(imageSrc)%20%7B%0A%20%20%20%20%20%20%20%20%09%24(%22.sw-config__img-main%22).attr(%22src%22%2C%20imageSrc).attr(%22alt%22%2C%20imageAlt)%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%3B%0A%0A%20%20%2F%2F%20%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%20OPTION%20CLICK%20%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A%20%20%2F%2F%20Keep%20your%20existing%20feature%3A%20clicking%20an%20option%20sets%20it%20active%20%26%20updates%20.sw-config__img-main%0A%20%20%24(%22.sw-config__tab__option%22).on(%22click%22%2C%20function%20()%20%7B%0A%20%20%20%20%2F%2F%20Limit%20removing%20.active%20to%20siblings%20within%20the%20same%20tab%3A%0A%20%20%20%20%24(this).closest(%22.sw-config__tab%22).find(%22.sw-config__tab__option%22).removeClass(%22active%22)%3B%0A%20%20%20%20%24(this).addClass(%22active%22)%3B%0A%0A%20%20%20%20const%20imageSrc%20%3D%20%24(this).find(%22.sw-config__tab__option__img-source%22).attr(%22src%22)%3B%0A%20%20%20%20const%20imageAlt%20%3D%20%24(this).find(%22.sw-config__tab__option__img-source%22).attr(%22alt%22)%3B%0A%20%20%20%20%24(%22.sw-config__img-main%22).attr(%22src%22%2C%20imageSrc).attr(%22alt%22%2C%20imageAlt)%3B%0A%20%20%7D)%3B%0A%7D)%3B%0A%3C%2Fscript%3E" />
          <_Builtin.Block className="sw-config" tag="div">
            <_Builtin.Block className="sw-config__left" tag="div">
              <_Builtin.Block className="sw-config__nav" tag="div">
                {tab1Tab1Visible ? (
                  <_Builtin.Block
                    className="sw-config__nav__item active"
                    tag="div"
                    data-tab={tab1Tab1Slug}
                  >
                    <_Builtin.Block
                      className="h8-v2 color-heading-v2"
                      tag="div"
                    >
                      {tab1Tab1Title}
                    </_Builtin.Block>
                  </_Builtin.Block>
                ) : null}
                {tab2Tab2Visible ? (
                  <_Builtin.Block
                    className="sw-config__nav__item"
                    tag="div"
                    data-tab={tab2Tab2Slug}
                  >
                    <_Builtin.Block
                      className="h8-v2 color-heading-v2"
                      tag="div"
                    >
                      {tab2Tab2Title}
                    </_Builtin.Block>
                  </_Builtin.Block>
                ) : null}
                {tab3Tab3Visible ? (
                  <_Builtin.Block
                    className="sw-config__nav__item"
                    tag="div"
                    data-tab={tab3Tab3Slug}
                  >
                    <_Builtin.Block
                      className="h8-v2 color-heading-v2"
                      tag="div"
                    >
                      {tab3Tab3Title}
                    </_Builtin.Block>
                  </_Builtin.Block>
                ) : null}
                {tab4Tab4Visible ? (
                  <_Builtin.Block
                    className="sw-config__nav__item"
                    tag="div"
                    data-tab={tab4Tab4Slug}
                  >
                    <_Builtin.Block
                      className="h8-v2 color-heading-v2"
                      tag="div"
                    >
                      {tab4Tab4Title}
                    </_Builtin.Block>
                  </_Builtin.Block>
                ) : null}
                {tab5Tab5Visible ? (
                  <_Builtin.Block
                    className="sw-config__nav__item"
                    tag="div"
                    data-tab={tab5Tab5Slug}
                  >
                    <_Builtin.Block
                      className="h8-v2 color-heading-v2"
                      tag="div"
                    >
                      {tab5Tab5Title}
                    </_Builtin.Block>
                  </_Builtin.Block>
                ) : null}
              </_Builtin.Block>
              <_Builtin.Block className="sw-config__left__main" tag="div">
                <_Builtin.Image
                  className="sw-config__img-main"
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src={tab1Tab1Swatch1}
                />
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block className="sw-config__right" tag="div">
              <_Builtin.Block className="custom-select-v2__wrap" tag="div">
                <_Builtin.Block
                  className="custom-select-v2 hidden-desktop is-grey-white is--sw"
                  tag="div"
                >
                  <_Builtin.Block
                    className="custom-select-v2__header"
                    tag="div"
                  >
                    <_Builtin.Block
                      className="custom-select-v2__arrow"
                      tag="div"
                    >
                      <_Builtin.HtmlEmbed
                        className="svg-icon"
                        value="%3Csvg%20width%3D%2222%22%20height%3D%2220%22%20viewBox%3D%220%200%2022%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M20.394%2015.375L11.0001%206L1.60617%2015.375%22%20stroke%3D%22currentColor%22%20stroke-width%3D%223%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="custom-select-v2__header__text"
                      tag="div"
                    >
                      {"Essentials"}
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className="custom-select-v2__options is-grey-white"
                    tag="div"
                  />
                </_Builtin.Block>
              </_Builtin.Block>
              {tab1Tab1Visible ? (
                <_Builtin.Block
                  className="sw-config__tab active"
                  tag="div"
                  data-tab={tab1Tab1Slug}
                  data-active-swatch={tab1Tab1ActiveSwatch}
                >
                  <_Builtin.Block className="sw-config__tab__content" tag="div">
                    <_Builtin.Block
                      className="h8-v2 color-heading-v2 hidden-tablet"
                      tag="div"
                    >
                      {"Choose Your Finish"}
                    </_Builtin.Block>
                    <_Builtin.Block className="sw-config__tab__types" tag="div">
                      <_Builtin.Block
                        className="sw-config__tab__type-wrap"
                        tag="div"
                      >
                        <_Builtin.Block className="subheading-v2" tag="div">
                          {"WOOD"}
                        </_Builtin.Block>
                        <_Builtin.Block
                          className="sw-config__tab__type"
                          tag="div"
                        >
                          <_Builtin.Block
                            className="sw-config__tab__option active"
                            tag="div"
                            data-image="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/678931e59867fcc2f977b4da_Frame%202072750342.webp"
                            data-name="Chocolate Pear"
                            data-color="white"
                            data-default=""
                          >
                            <_Builtin.Image
                              className="sw-config__tab__option__img-circle"
                              loading="lazy"
                              width="auto"
                              height="auto"
                              alt="Closet World Chocolate Pear Swatch Finish"
                              src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/67c08dd32d000bccb491949f_Chocolate-Pear-Swatch-Finish.png"
                            />
                            <_Builtin.Image
                              className="sw-config__tab__option__img-source"
                              loading="lazy"
                              width="auto"
                              height="auto"
                              alt=""
                              src={tab1Tab1Swatch1}
                            />
                          </_Builtin.Block>
                          <_Builtin.Block
                            className="sw-config__tab__option"
                            tag="div"
                            data-image="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/67978809bc786acc56431c38_Rectangle%20271.webp"
                            data-name="Hard Rock Maple"
                            data-color="white"
                          >
                            <_Builtin.Image
                              className="sw-config__tab__option__img-circle"
                              loading="lazy"
                              width="auto"
                              height="auto"
                              alt="Closet World Hard Rock Maple Swatch Finish"
                              src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/67c08dd24d915941725ec954_Hard-Rock-Maple-Swatch-Finish.png"
                            />
                            <_Builtin.Image
                              className="sw-config__tab__option__img-source"
                              loading="lazy"
                              width="auto"
                              height="auto"
                              alt=""
                              src={tab1Tab1Swatch2}
                            />
                          </_Builtin.Block>
                          <_Builtin.Block
                            className="sw-config__tab__option"
                            tag="div"
                            data-image="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/6787c06fc51138323f47eed0_61b393c8aac8ca182683e0c9f1c7f2a8%20(1)%20(1).webp"
                            data-name="Summer Flame"
                            data-color="white"
                          >
                            <_Builtin.Image
                              className="sw-config__tab__option__img-circle"
                              loading="lazy"
                              width="auto"
                              height="auto"
                              alt="Closet World Summer Flame Swatch Finish"
                              src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/67c86c03f65fac38178b4b35_Summer-Flame-Swatch-Finish.webp"
                            />
                            <_Builtin.Image
                              className="sw-config__tab__option__img-source"
                              loading="lazy"
                              width="auto"
                              height="auto"
                              alt=""
                              src={tab1Tab1Swatch3}
                            />
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="sw-config__tab__type-wrap"
                        tag="div"
                      >
                        <_Builtin.Block className="subheading-v2" tag="div">
                          {"SOLIDS"}
                        </_Builtin.Block>
                        <_Builtin.Block
                          className="sw-config__tab__type"
                          tag="div"
                        >
                          <_Builtin.Block
                            className="sw-config__tab__option"
                            tag="div"
                            data-image="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/678931e59867fcc2f977b4da_Frame%202072750342.webp"
                            data-name="White"
                            data-color="black"
                          >
                            <_Builtin.Image
                              className="sw-config__tab__option__img-circle"
                              loading="lazy"
                              width="auto"
                              height="auto"
                              alt="Closet World White Swatch Finish"
                              src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/67c0883fe279c7a9f0defd6b_White-Swatch-Finish.webp"
                            />
                            <_Builtin.Image
                              className="sw-config__tab__option__img-source"
                              loading="lazy"
                              width="auto"
                              height="auto"
                              alt=""
                              src={tab1Tab1Swatch4}
                            />
                          </_Builtin.Block>
                          <_Builtin.Block
                            className="sw-config__tab__option"
                            tag="div"
                            data-image="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/678931e59867fcc2f977b4da_Frame%202072750342.webp"
                            data-name="Almond"
                            data-color="black"
                          >
                            <_Builtin.Image
                              className="sw-config__tab__option__img-circle"
                              loading="lazy"
                              width="auto"
                              height="auto"
                              alt="Closet World Almond Swatch Finish"
                              src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/67c0883cdaa50c266c8791c8_Almond-Swatch-Finish.webp"
                            />
                            <_Builtin.Image
                              className="sw-config__tab__option__img-source"
                              loading="lazy"
                              width="auto"
                              height="auto"
                              alt=""
                              src={tab1Tab1Swatch5}
                            />
                          </_Builtin.Block>
                          <_Builtin.Block
                            className="sw-config__tab__option"
                            tag="div"
                            data-image="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/678931e59867fcc2f977b4da_Frame%202072750342.webp"
                            data-name="Dark Grey"
                            data-color="white"
                          >
                            <_Builtin.Image
                              className="sw-config__tab__option__img-circle"
                              loading="lazy"
                              width="auto"
                              height="auto"
                              alt="Closet World Dark Grey Swatch Finish"
                              src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/67c0883a07b55642ef814472_Dark-Grey-Swatch-Finish.webp"
                            />
                            <_Builtin.Image
                              className="sw-config__tab__option__img-source"
                              loading="lazy"
                              width="auto"
                              height="auto"
                              alt=""
                              src={tab1Tab1Swatch6}
                            />
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Link
                      className="btn-v2 btn-v2--secondary is--blue sw-modal__open type-1"
                      button={false}
                      block="inline"
                      options={{
                        href: "#",
                      }}
                    >
                      <_Builtin.Block tag="div">
                        {"See More Finishes"}
                      </_Builtin.Block>
                      <IconArrowRight2 />
                    </_Builtin.Link>
                  </_Builtin.Block>
                </_Builtin.Block>
              ) : null}
              {tab2Tab2Visible ? (
                <_Builtin.Block
                  className="sw-config__tab"
                  tag="div"
                  data-tab={tab2Tab2Slug}
                  data-active-swatch={tab2Tab2ActiveSwatch}
                >
                  <_Builtin.Block className="sw-config__tab__content" tag="div">
                    <_Builtin.Block
                      className="h8-v2 color-heading-v2 hidden-tablet"
                      tag="div"
                    >
                      {"Choose Your Finish"}
                    </_Builtin.Block>
                    <_Builtin.Block className="sw-config__tab__types" tag="div">
                      <_Builtin.Block
                        className="sw-config__tab__type-wrap"
                        tag="div"
                      >
                        <_Builtin.Block className="subheading-v2" tag="div">
                          {"WOOD"}
                        </_Builtin.Block>
                        <_Builtin.Block
                          className="sw-config__tab__type"
                          tag="div"
                        >
                          <_Builtin.Block
                            className="sw-config__tab__option active"
                            tag="div"
                            data-image="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/678931e59867fcc2f977b4da_Frame%202072750342.webp"
                            data-name="Chocolate Pear"
                            data-color="white"
                            data-default=""
                          >
                            <_Builtin.Image
                              className="sw-config__tab__option__img-circle"
                              loading="lazy"
                              width="auto"
                              height="auto"
                              alt="Closet World Chocolate Pear Swatch Finish"
                              src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/67c08dd32d000bccb491949f_Chocolate-Pear-Swatch-Finish.png"
                            />
                            <_Builtin.Image
                              className="sw-config__tab__option__img-source"
                              loading="lazy"
                              width="auto"
                              height="auto"
                              alt=""
                              src={tab2Tab2Swatch1}
                            />
                          </_Builtin.Block>
                          <_Builtin.Block
                            className="sw-config__tab__option"
                            tag="div"
                            data-image="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/67978809bc786acc56431c38_Rectangle%20271.webp"
                            data-name="Hard Rock Maple"
                            data-color="white"
                          >
                            <_Builtin.Image
                              className="sw-config__tab__option__img-circle"
                              loading="lazy"
                              width="auto"
                              height="auto"
                              alt="Closet World Hard Rock Maple Swatch Finish"
                              src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/67c08dd24d915941725ec954_Hard-Rock-Maple-Swatch-Finish.png"
                            />
                            <_Builtin.Image
                              className="sw-config__tab__option__img-source"
                              loading="lazy"
                              width="auto"
                              height="auto"
                              alt=""
                              src={tab2Tab2Swatch2}
                            />
                          </_Builtin.Block>
                          <_Builtin.Block
                            className="sw-config__tab__option"
                            tag="div"
                            data-image="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/6787c06fc51138323f47eed0_61b393c8aac8ca182683e0c9f1c7f2a8%20(1)%20(1).webp"
                            data-name="Summer Flame"
                            data-color="white"
                          >
                            <_Builtin.Image
                              className="sw-config__tab__option__img-circle"
                              loading="lazy"
                              width="auto"
                              height="auto"
                              alt="Closet World Summer Flame Swatch Finish"
                              src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/67c86c03f65fac38178b4b35_Summer-Flame-Swatch-Finish.webp"
                            />
                            <_Builtin.Image
                              className="sw-config__tab__option__img-source"
                              loading="lazy"
                              width="auto"
                              height="auto"
                              alt=""
                              src={tab2Tab2Swatch3}
                            />
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="sw-config__tab__type-wrap"
                        tag="div"
                      >
                        <_Builtin.Block className="subheading-v2" tag="div">
                          {"SOLIDS"}
                        </_Builtin.Block>
                        <_Builtin.Block
                          className="sw-config__tab__type"
                          tag="div"
                        >
                          <_Builtin.Block
                            className="sw-config__tab__option"
                            tag="div"
                            data-image="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/678931e59867fcc2f977b4da_Frame%202072750342.webp"
                            data-name="White"
                            data-color="black"
                          >
                            <_Builtin.Image
                              className="sw-config__tab__option__img-circle"
                              loading="lazy"
                              width="auto"
                              height="auto"
                              alt="Closet World White Swatch Finish"
                              src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/67c0883fe279c7a9f0defd6b_White-Swatch-Finish.webp"
                            />
                            <_Builtin.Image
                              className="sw-config__tab__option__img-source"
                              loading="lazy"
                              width="auto"
                              height="auto"
                              alt=""
                              src={tab2Tab2Swatch4}
                            />
                          </_Builtin.Block>
                          <_Builtin.Block
                            className="sw-config__tab__option"
                            tag="div"
                            data-image="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/678931e59867fcc2f977b4da_Frame%202072750342.webp"
                            data-name="Almond"
                            data-color="black"
                          >
                            <_Builtin.Image
                              className="sw-config__tab__option__img-circle"
                              loading="lazy"
                              width="auto"
                              height="auto"
                              alt="Closet World Almond Swatch Finish"
                              src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/67c0883cdaa50c266c8791c8_Almond-Swatch-Finish.webp"
                            />
                            <_Builtin.Image
                              className="sw-config__tab__option__img-source"
                              loading="lazy"
                              width="auto"
                              height="auto"
                              alt=""
                              src={tab2Tab2Swatch5}
                            />
                          </_Builtin.Block>
                          <_Builtin.Block
                            className="sw-config__tab__option"
                            tag="div"
                            data-image="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/678931e59867fcc2f977b4da_Frame%202072750342.webp"
                            data-name="Dark Grey"
                            data-color="white"
                          >
                            <_Builtin.Image
                              className="sw-config__tab__option__img-circle"
                              loading="lazy"
                              width="auto"
                              height="auto"
                              alt="Closet World Dark Grey Swatch Finish"
                              src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/67c0883a07b55642ef814472_Dark-Grey-Swatch-Finish.webp"
                            />
                            <_Builtin.Image
                              className="sw-config__tab__option__img-source"
                              loading="lazy"
                              width="auto"
                              height="auto"
                              alt=""
                              src={tab2Tab2Swatch6}
                            />
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Link
                      className="btn-v2 btn-v2--secondary is--blue sw-modal__open type-1"
                      button={false}
                      block="inline"
                      options={{
                        href: "#",
                      }}
                    >
                      <_Builtin.Block tag="div">
                        {"See More Finishes"}
                      </_Builtin.Block>
                      <IconArrowRight2 />
                    </_Builtin.Link>
                  </_Builtin.Block>
                </_Builtin.Block>
              ) : null}
              {tab3Tab3Visible ? (
                <_Builtin.Block
                  className="sw-config__tab"
                  tag="div"
                  data-tab={tab3Tab3Slug}
                  data-active-swatch={tab3Tab3ActiveSwatch}
                >
                  <_Builtin.Block className="sw-config__tab__content" tag="div">
                    <_Builtin.Block
                      className="h8-v2 color-heading-v2 hidden-tablet"
                      tag="div"
                    >
                      {"Choose Your Finish"}
                    </_Builtin.Block>
                    <_Builtin.Block className="sw-config__tab__types" tag="div">
                      <_Builtin.Block
                        className="sw-config__tab__type-wrap"
                        tag="div"
                      >
                        <_Builtin.Block className="subheading-v2" tag="div">
                          {"WOOD"}
                        </_Builtin.Block>
                        <_Builtin.Block
                          className="sw-config__tab__type"
                          tag="div"
                        >
                          <_Builtin.Block
                            className="sw-config__tab__option active"
                            tag="div"
                            data-image="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/678931e59867fcc2f977b4da_Frame%202072750342.webp"
                            data-name="Chocolate Pear"
                            data-color="white"
                            data-default=""
                          >
                            <_Builtin.Image
                              className="sw-config__tab__option__img-circle"
                              loading="lazy"
                              width="auto"
                              height="auto"
                              alt="Closet World Chocolate Pear Swatch Finish"
                              src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/67c08dd32d000bccb491949f_Chocolate-Pear-Swatch-Finish.png"
                            />
                            <_Builtin.Image
                              className="sw-config__tab__option__img-source"
                              loading="lazy"
                              width="auto"
                              height="auto"
                              alt=""
                              src={tab3Tab3Swatch1}
                            />
                          </_Builtin.Block>
                          <_Builtin.Block
                            className="sw-config__tab__option"
                            tag="div"
                            data-image="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/67978809bc786acc56431c38_Rectangle%20271.webp"
                            data-name="Hard Rock Maple"
                            data-color="white"
                          >
                            <_Builtin.Image
                              className="sw-config__tab__option__img-circle"
                              loading="lazy"
                              width="auto"
                              height="auto"
                              alt="Closet World Hard Rock Maple Swatch Finish"
                              src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/67c08dd24d915941725ec954_Hard-Rock-Maple-Swatch-Finish.png"
                            />
                            <_Builtin.Image
                              className="sw-config__tab__option__img-source"
                              loading="lazy"
                              width="auto"
                              height="auto"
                              alt=""
                              src={tab3Tab3Swatch2}
                            />
                          </_Builtin.Block>
                          <_Builtin.Block
                            className="sw-config__tab__option"
                            tag="div"
                            data-image="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/6787c06fc51138323f47eed0_61b393c8aac8ca182683e0c9f1c7f2a8%20(1)%20(1).webp"
                            data-name="Summer Flame"
                            data-color="white"
                          >
                            <_Builtin.Image
                              className="sw-config__tab__option__img-circle"
                              loading="lazy"
                              width="auto"
                              height="auto"
                              alt="Closet World Summer Flame Swatch Finish"
                              src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/67c86c03f65fac38178b4b35_Summer-Flame-Swatch-Finish.webp"
                            />
                            <_Builtin.Image
                              className="sw-config__tab__option__img-source"
                              loading="lazy"
                              width="auto"
                              height="auto"
                              alt=""
                              src={tab3Tab3Swatch3}
                            />
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="sw-config__tab__type-wrap"
                        tag="div"
                      >
                        <_Builtin.Block className="subheading-v2" tag="div">
                          {"SOLIDS"}
                        </_Builtin.Block>
                        <_Builtin.Block
                          className="sw-config__tab__type"
                          tag="div"
                        >
                          <_Builtin.Block
                            className="sw-config__tab__option"
                            tag="div"
                            data-image="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/678931e59867fcc2f977b4da_Frame%202072750342.webp"
                            data-name="White"
                            data-color="black"
                          >
                            <_Builtin.Image
                              className="sw-config__tab__option__img-circle"
                              loading="lazy"
                              width="auto"
                              height="auto"
                              alt="Closet World White Swatch Finish"
                              src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/67c0883fe279c7a9f0defd6b_White-Swatch-Finish.webp"
                            />
                            <_Builtin.Image
                              className="sw-config__tab__option__img-source"
                              loading="lazy"
                              width="auto"
                              height="auto"
                              alt=""
                              src={tab3Tab3Swatch4}
                            />
                          </_Builtin.Block>
                          <_Builtin.Block
                            className="sw-config__tab__option"
                            tag="div"
                            data-image="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/678931e59867fcc2f977b4da_Frame%202072750342.webp"
                            data-name="Almond"
                            data-color="black"
                          >
                            <_Builtin.Image
                              className="sw-config__tab__option__img-circle"
                              loading="lazy"
                              width="auto"
                              height="auto"
                              alt="Closet World Almond Swatch Finish"
                              src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/67c0883cdaa50c266c8791c8_Almond-Swatch-Finish.webp"
                            />
                            <_Builtin.Image
                              className="sw-config__tab__option__img-source"
                              loading="lazy"
                              width="auto"
                              height="auto"
                              alt=""
                              src={tab3Tab3Swatch5}
                            />
                          </_Builtin.Block>
                          <_Builtin.Block
                            className="sw-config__tab__option"
                            tag="div"
                            data-image="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/678931e59867fcc2f977b4da_Frame%202072750342.webp"
                            data-name="Dark Grey"
                            data-color="white"
                          >
                            <_Builtin.Image
                              className="sw-config__tab__option__img-circle"
                              loading="lazy"
                              width="auto"
                              height="auto"
                              alt="Closet World Dark Grey Swatch Finish"
                              src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/67c0883a07b55642ef814472_Dark-Grey-Swatch-Finish.webp"
                            />
                            <_Builtin.Image
                              className="sw-config__tab__option__img-source"
                              loading="lazy"
                              width="auto"
                              height="auto"
                              alt=""
                              src={tab3Tab3Swatch6}
                            />
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Link
                      className="btn-v2 btn-v2--secondary is--blue sw-modal__open type-1"
                      button={false}
                      block="inline"
                      options={{
                        href: "#",
                      }}
                    >
                      <_Builtin.Block tag="div">
                        {"See More Finishes"}
                      </_Builtin.Block>
                      <IconArrowRight2 />
                    </_Builtin.Link>
                  </_Builtin.Block>
                </_Builtin.Block>
              ) : null}
              {tab4Tab4Visible ? (
                <_Builtin.Block
                  className="sw-config__tab"
                  tag="div"
                  data-tab={tab4Tab4Slug}
                  data-active-swatch={tab4Tab4ActiveSwatch}
                >
                  <_Builtin.Block className="sw-config__tab__content" tag="div">
                    <_Builtin.Block
                      className="h8-v2 color-heading-v2 hidden-tablet"
                      tag="div"
                    >
                      {"Choose Your Finish"}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="subheading-v2 text-align--center relative-top-2"
                      tag="div"
                    >
                      {"WOOD"}
                    </_Builtin.Block>
                    <_Builtin.Block className="sw-config__tab__types" tag="div">
                      <_Builtin.Block
                        className="sw-config__tab__type-wrap"
                        tag="div"
                      >
                        <_Builtin.Block
                          className="subheading-v2 hidden"
                          tag="div"
                        >
                          {"WOOD"}
                        </_Builtin.Block>
                        <_Builtin.Block
                          className="sw-config__tab__type"
                          tag="div"
                        >
                          <_Builtin.Block
                            className="sw-config__tab__option active"
                            tag="div"
                            data-image="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/67978809bc786acc56431c38_Rectangle%20271.webp"
                            data-default=""
                            data-name="Light Teak"
                            data-color="white"
                          >
                            <_Builtin.Image
                              className="sw-config__tab__option__img-circle"
                              loading="lazy"
                              width="auto"
                              height="auto"
                              alt="Closet World Light Teak Swatch Finish"
                              src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/67c088403d98ac4104fa7082_Light-Teak-Swatch-Finish.webp"
                            />
                            <_Builtin.Image
                              className="sw-config__tab__option__img-source"
                              loading="lazy"
                              width="auto"
                              height="auto"
                              alt=""
                              src={tab4Tab4Swatch1}
                            />
                          </_Builtin.Block>
                          <_Builtin.Block
                            className="sw-config__tab__option"
                            tag="div"
                            data-image="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/6787c06fc51138323f47eed0_61b393c8aac8ca182683e0c9f1c7f2a8%20(1)%20(1).webp"
                            data-name="Spring Blossom"
                            data-color="white"
                          >
                            <_Builtin.Image
                              className="sw-config__tab__option__img-circle"
                              loading="lazy"
                              width="auto"
                              height="auto"
                              alt="Closet World Spring Blossom Swatch Finish"
                              src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/67c0883fd2bd69dfb7e4e920_Spring-Blossom-Swatch-Finish.webp"
                            />
                            <_Builtin.Image
                              className="sw-config__tab__option__img-source"
                              loading="lazy"
                              width="auto"
                              height="auto"
                              alt=""
                              src={tab4Tab4Swatch2}
                            />
                          </_Builtin.Block>
                          <_Builtin.Block
                            className="sw-config__tab__option"
                            tag="div"
                            data-image="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/678931e59867fcc2f977b4da_Frame%202072750342.webp"
                            data-name="Oyster Pine"
                            data-color="white"
                          >
                            <_Builtin.Image
                              className="sw-config__tab__option__img-circle"
                              loading="lazy"
                              width="auto"
                              height="auto"
                              alt="Closet World Oyster Pine Swatch Finish"
                              src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/67c0883ff9e6af987b5cc46b_Oyster-Pine-Swatch-Finish.webp"
                            />
                            <_Builtin.Image
                              className="sw-config__tab__option__img-source"
                              loading="lazy"
                              width="auto"
                              height="auto"
                              alt=""
                              src={tab4Tab4Swatch3}
                            />
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="sw-config__tab__type-wrap"
                        tag="div"
                      >
                        <_Builtin.Block
                          className="subheading-v2 hidden"
                          tag="div"
                        >
                          {"SOLIDS"}
                        </_Builtin.Block>
                        <_Builtin.Block
                          className="sw-config__tab__type"
                          tag="div"
                        >
                          <_Builtin.Block
                            className="sw-config__tab__option"
                            tag="div"
                            data-image="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/678931e59867fcc2f977b4da_Frame%202072750342.webp"
                            data-name="Winter Cherry"
                            data-color="white"
                          >
                            <_Builtin.Image
                              className="sw-config__tab__option__img-circle"
                              loading="lazy"
                              width="auto"
                              height="auto"
                              alt="Closet World Winter Cherry Swatch Finish"
                              src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/67c088408a5a533e820bdbbb_Winter-Cherry-Swatch-Finish.webp"
                            />
                            <_Builtin.Image
                              className="sw-config__tab__option__img-source"
                              loading="lazy"
                              width="auto"
                              height="auto"
                              alt=""
                              src={tab4Tab4Swatch4}
                            />
                          </_Builtin.Block>
                          <_Builtin.Block
                            className="sw-config__tab__option"
                            tag="div"
                            data-image="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/678931e59867fcc2f977b4da_Frame%202072750342.webp"
                            data-name="River Rock"
                            data-color="white"
                          >
                            <_Builtin.Image
                              className="sw-config__tab__option__img-circle"
                              loading="lazy"
                              width="auto"
                              height="auto"
                              alt="Closet World River Rock Swatch Finish"
                              src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/67c0883fec49be32fa4ad1b9_River-Rock-Swatch-Finish.webp"
                            />
                            <_Builtin.Image
                              className="sw-config__tab__option__img-source"
                              loading="lazy"
                              width="auto"
                              height="auto"
                              alt=""
                              src={tab4Tab4Swatch5}
                            />
                          </_Builtin.Block>
                          <_Builtin.Block
                            className="sw-config__tab__option"
                            tag="div"
                            data-image="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/678931e59867fcc2f977b4da_Frame%202072750342.webp"
                            data-name="Summer Breeze"
                            data-color="black"
                          >
                            <_Builtin.Image
                              className="sw-config__tab__option__img-circle"
                              loading="lazy"
                              width="auto"
                              height="auto"
                              alt="Closet World Summer Breeze Swatch Finish"
                              src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/67c0884198e7bdc03de30306_Summer-Breeze-Swatch-Finish.webp"
                            />
                            <_Builtin.Image
                              className="sw-config__tab__option__img-source"
                              loading="lazy"
                              width="auto"
                              height="auto"
                              alt=""
                              src={tab4Tab4Swatch6}
                            />
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Link
                      className="btn-v2 btn-v2--secondary is--blue sw-modal__open type-1"
                      button={false}
                      block="inline"
                      options={{
                        href: "#",
                      }}
                    >
                      <_Builtin.Block tag="div">
                        {"See More Finishes"}
                      </_Builtin.Block>
                      <IconArrowRight2 />
                    </_Builtin.Link>
                  </_Builtin.Block>
                </_Builtin.Block>
              ) : null}
              {tab5Tab5Visible ? (
                <_Builtin.Block
                  className="sw-config__tab"
                  tag="div"
                  data-tab={tab5Tab5Slug}
                  data-active-swatch={tab5Tab5ActiveSwatch}
                >
                  <_Builtin.Block className="sw-config__tab__content" tag="div">
                    <_Builtin.Block
                      className="h8-v2 color-heading-v2 hidden-tablet"
                      tag="div"
                    >
                      {"The Chrome3 Finish:"}
                    </_Builtin.Block>
                    <_Builtin.Block className="sw-config__tab__types" tag="div">
                      <_Builtin.Block
                        className="sw-config__tab__type-wrap"
                        tag="div"
                      >
                        <_Builtin.Block className="subheading-v2" tag="div">
                          {"Doors & Drawer Faces"}
                        </_Builtin.Block>
                        <_Builtin.Block
                          className="sw-config__tab__type"
                          tag="div"
                        >
                          <_Builtin.Block
                            className="sw-config__tab__option pointers-none"
                            tag="div"
                            data-image="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/678931e59867fcc2f977b4da_Frame%202072750342.webp"
                            data-name="Brushed Aluminum"
                            data-color="black"
                            data-default=""
                          >
                            <_Builtin.Image
                              className="sw-config__tab__option__img-circle"
                              loading="lazy"
                              width="auto"
                              height="auto"
                              alt="Closet World Brushed Aluminum Swatch Finish"
                              src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/67c0883b60d7d42e521c4eab_Brushed-Aluminum-Swatch-Finish.webp"
                            />
                            <_Builtin.Image
                              className="sw-config__tab__option__img-source"
                              loading="lazy"
                              width="auto"
                              height="auto"
                              alt=""
                              src={tab5Tab5Swatch1}
                            />
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="sw-config__tab__type-wrap"
                        tag="div"
                      >
                        <_Builtin.Block className="subheading-v2" tag="div">
                          {"Cabinets & Panels"}
                        </_Builtin.Block>
                        <_Builtin.Block
                          className="sw-config__tab__type"
                          tag="div"
                        >
                          <_Builtin.Block
                            className="sw-config__tab__option pointers-none"
                            tag="div"
                            data-image="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/678931e59867fcc2f977b4da_Frame%202072750342.webp"
                            data-name="Black"
                            data-color="white"
                          >
                            <_Builtin.Image
                              className="sw-config__tab__option__img-circle"
                              loading="lazy"
                              width="auto"
                              height="auto"
                              alt="Closet World Black Swatch Finish"
                              src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/67c0883b107915f2be48b146_Black-Swatch-Finish.webp"
                            />
                            <_Builtin.Image
                              className="sw-config__tab__option__img-source"
                              loading="lazy"
                              width="auto"
                              height="auto"
                              alt=""
                              src={tab5Tab5Swatch2}
                            />
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Link
                      className="btn-v2 btn-v2--secondary is--blue sw-modal__open type-2"
                      button={false}
                      block="inline"
                      options={{
                        href: "#",
                      }}
                    >
                      <_Builtin.Block tag="div">
                        {"See More Finishes"}
                      </_Builtin.Block>
                      <IconArrowRight2 />
                    </_Builtin.Link>
                  </_Builtin.Block>
                </_Builtin.Block>
              ) : null}
            </_Builtin.Block>
            <ColorizerPopupSwatches1 />
            <ColorizerPopupSwatches2 />
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
