"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { IconArrowRight2 } from "./IconArrowRight2";

export function PopupForm({
  as: _Component = _Builtin.Block,
  popupFormFirst = true,
  summerModalFirst = false,
  variant = "Base",
  title = (
    <>
      {"Schedule Today! "}
      <br />
      {"Start Your Free "}
      <br />
      {"In-Home Consultation Tomorrow."}
    </>
  ),
  topTItle = "Mother’s Day Savings",
  topTitleVisibility = false,
  pinkPinkVisibility = false,
  pinkPinkImageDesktop = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/680bf6482657589e8c3aaad0_Walk-in-closet-mother-child-mobile.webp",
  pinkPinkImageMobile = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/680bf6482657589e8c3aaad0_Walk-in-closet-mother-child-mobile.webp",
  baseBaseVisibility = true,
  baseImage1 = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/67f8df134f1aaf10deaab48d_Walk-In-Closet-White.webp",
  baseImage2 = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/67f8df1203cd4f39e5f8fedb_Transitional-Reach-In-Closet-Candlelight.webp",
  titleMobile = "Schedule your free, in-home marketing consultation.",
}) {
  const _styleVariantMap = {
    Base: "",
    Pink: "w-variant-9c9cc5e3-5d94-82d4-e323-e095138cf1dc",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component tag="div" element-purpose="popup-form">
      <_Builtin.HtmlEmbed
        className={`hidden-css ${_activeStyleVariant}`}
        value="%3Cstyle%3E%0A%20.popup-lightbox%20.form__select%2C%0A%20%20.popup-lightbox%20.form__input%2C%0A%20%20.popup-lightbox%20.form__input%3A%3Aplaceholder%20%7B%0A%20%20%20%20color%3A%20var(--dark-grey-v2)%3B%0A%20%20%7D%0A%20%20.popup-lightbox-img-half%3A%3Abefore%20%7B%0A%20%20%20%20content%3A%20''%3B%0A%20%20%20%20display%3A%20block%3B%0A%20%20%20%20width%3A%20100%25%3B%0A%20%20%20%20height%3A%20100%25%3B%0A%20%20%20%20position%3A%20absolute%3B%0A%20%20%20%20left%3A%200%3B%0A%20%20%20%20top%3A%200%3B%0A%20%20%20%20background%3A%20linear-gradient(0deg%2C%20rgba(0%2C%200%2C%200%2C%200.00)%2050%25%2C%20rgba(0%2C%200%2C%200%2C%200.20)%2059.26%25)%2C%20linear-gradient(0deg%2C%20rgba(0%2C%200%2C%200%2C%200.20)%200%25%2C%20rgba(0%2C%200%2C%200%2C%200.20)%20100%25)%3B%0A%20%20%7D%0A%20%20.popup-lightbox%20.form-block.is--multistep%20.form__input.form__input--date%20%7B%0A%20%20%20%20background-image%3A%20url(https%3A%2F%2Fcdn.prod.website-files.com%2F65dc50a9ff2046f1c1b27199%2F67924e28c926e270bac52089_Calque.svg)%3B%0A%20%20%20%20background-position-x%3A%20calc(100%25%20-%2010px)%3B%0A%20%20%20%20background-position-y%3A%20center%3B%0A%20%20%7D%0A%20%20.popup-lightbox%20.form-block.is--multistep%20.form__select.form__select__v2%5Bform__select--time%5D%20%7B%0A%20%20%20%20background-image%3A%20url(https%3A%2F%2Fcdn.prod.website-files.com%2F65dc50a9ff2046f1c1b27199%2F67aefe5d5ea1db942993e310_Calque_1.svg)%3B%0A%20%20%20%20background-size%3A%2020px%3B%0A%20%20%20%20background-position-x%3A%20calc(100%25%20-%2010px)%3B%0A%20%20%7D%0A%20%20.popup-lightbox%20.form-block.is--multistep%20.form__select%3Afocus%2C%0A%20%20.popup-lightbox%20.form-block.is--multistep%20.form__input%3Afocus%20%7B%0A%20%20%20%20border-color%3A%20black%3B%0A%20%20%7D%0A%20%20.popup-lightbox%20.form__validation-msg%20%7B%0A%20%20%20%20margin-top%3A%200.5rem%3B%0A%20%20%20%20font-size%3A%200.75rem%3B%0A%20%20%20%20line-height%3A%201%3B%0A%20%20%7D%0A%20%20.popup-lightbox%20.form__checkbox.is--multi.form__checkbox--v2%20%7B%0A%20%20%20%20min-height%3A%2025px%3B%0A%20%20%20%20padding%3A%200.25rem%200.5rem%3B%0A%20%20%20%20font-size%3A%20.75rem%3B%0A%20%20%20%20line-height%3A%201%3B%0A%20%20%20%20grid-column-gap%3A%200%3B%0A%20%20%20%20grid-row-gap%3A%200%3B%0A%20%20%20%20border-color%3A%20var(--light-grey-v2)%3B%0A%20%20%20%20color%3A%20var(--light-grey-v2)%3B%0A%20%20%7D%0A%20%20.popup-lightbox%20.form__checkbox-number.is--v2%20%7B%0A%20%20%20%20border-color%3A%20var(--light-grey-v2)%3B%0A%20%20%20%20color%3A%20var(--light-grey-v2)%3B%0A%20%20%20%20border-radius%3A%2016px%3B%0A%20%20%20%20font-size%3A%200.625rem%3B%0A%20%20%20%20padding%3A%200%207px%3B%0A%20%20%20%20margin-right%3A%200.5rem%3B%0A%20%20%20%20line-height%3A%2015px%3B%0A%20%20%20%20min-height%3A%2017px%3B%0A%20%20%20%20display%3A%20none%3B%0A%20%20%7D%0A%20%20.popup-lightbox%20.form__checkbox.is--multi.form__checkbox--v2.is--active%20%7B%0A%20%20%20%20border-color%3A%20var(--black-v2)%3B%0A%20%20%20%20background%3A%20var(--black-v2)%3B%0A%20%20%20%20color%3A%20var(--off-white-v2)%3B%0A%20%20%7D%0A%0A%20%20%2F*%20iframe%20styling%20-%20Google%20Maps%20*%2F%0A%20%20.popup-lightbox%20%23map-address-iframe%20%7B%0A%20%20%20%20width%3A%20100%25%3B%20!important%3B%0A%20%20%7D%0A%0A%20%20%40media%20screen%20and%20(min-width%3A%20992px)%20%7B%0A%0A%20%20%20%20.popup-form-wrap%20%7B%0A%20%20%20%20%20%20height%3A%20100%25%3B%0A%20%20%20%20%20%20overflow%3A%20scroll%3B%0A%20%20%20%20%20%20padding-bottom%3A%202rem%3B%0A%20%20%20%20%7D%0A%0A%20%20%7D%0A%20%20%2F*%20Multi%20Step%20Form%20Styling%20*%2F%0A%0A%20%20%2F*%20Fixed%20Progress%20Button%20*%2F%0A%20%20%40media%20screen%20and%20(max-width%3A%20991px)%20%7B%0A%20%20%20%20.popup-lightbox-img-cont.form-step1-triggered%20%7B%0A%20%20%20%20%20%20display%3A%20none%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20.form-multi-steps%20.form-steps__single%20.form__submit-btns--inner.is--fixed%20%7B%0A%20%20%20%20%20%20position%3A%20fixed%3B%0A%20%20%20%20%20%20left%3A%200%3B%0A%20%20%20%20%20%20bottom%3A%200%3B%0A%20%20%20%20%20%20z-index%3A%2099%3B%0A%20%20%20%20%20%20width%3A%20100%25%3B%0A%20%20%20%20%20%20padding-top%3A%2020px%3B%0A%20%20%20%20%20%20padding-bottom%3A%2020px%3B%0A%20%20%20%20%20%20padding-left%3A%2086px%3B%0A%20%20%20%20%20%20padding-right%3A%2066px%3B%0A%20%20%20%20%20%20background%3A%20rgba(205%2C223%2C253%2C0.4)%3B%0A%20%20%20%20%20%20background%3A%20linear-gradient(0deg%2C%20rgba(205%2C223%2C253%2C0.4)%200%25%2C%20rgba(205%2C223%2C253%2C0.4)%2070%25%2C%20rgba(0%2C0%2C0%2C0)%20100%25)%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20.w-variant-9c9cc5e3-5d94-82d4-e323-e095138cf1dc%20.mobile-is-red-v2%7B%0A%20%20%20%20%09color%3A%20var(--pink-v2)%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20%40media%20screen%20and%20(max-width%3A%20767px)%20%7B%0A%20%20%20%20.form-multi-steps%20.form-steps__single%20.form__submit-btns--inner.is--fixed%20%7B%0A%20%20%20%20%20%20padding-left%3A%2076px%3B%0A%20%20%20%20%20%20padding-right%3A%2056px%3B%0A%20%20%20%20%7D%0A%20%20%20%20.popup-lightbox-title%20.h5-v2%7B%0A%20%20%20%20%20%20font-size%3A%201.25rem%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20%40media%20screen%20and%20(max-width%3A%20479px)%20%7B%0A%20%20%20%20.form-multi-steps%20.form-steps__single%20.form__submit-btns--inner.is--fixed%20%7B%0A%20%20%20%20%20%20padding-left%3A%2064px%3B%0A%20%20%20%20%20%20padding-right%3A%2044px%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%0A%20%20.popup-lightbox%20.form__label%20%7B%0A%20%20%20%20font-size%3A%2012px%3B%0A%20%20%20%20color%3A%20%231C1C1C%3B%0A%20%20%7D%0A%20%20.popup-lightbox%20.form__checkbox%20.form__checkbox-input.is--consent%20%7B%0A%20%20%20%20accent-color%3A%20%231C1C1C%3B%0A%20%20%20%20position%3A%20relative%3B%0A%20%20%20%20top%3A%200.1rem%3B%0A%20%20%7D%0A%0A%20%20%2F*%20Fields%20*%2F%0A%20%20.popup-lightbox%20.form-block.is--multistep%20.form__select%2C%0A%20%20.popup-lightbox%20.form-block.is--multistep%20.form__input%20%7B%0A%20%20%20%20border%3A%201px%20solid%20%23E8E8E8%3B%0A%20%20%20%20border-radius%3A%208px%3B%0A%20%20%20%20transition%3A%20border-color%200.2s%20ease%3B%0A%20%20%20%20padding%3A%206px%2016px%3B%0A%20%20%20%20height%3A%20auto%3B%0A%20%20%7D%0A%0A%20%20.popup-lightbox%20.form__col.is--grid%20%7B%0A%20%20%20%20grid-column-gap%3A%200.25rem%3B%0A%20%20%20%20grid-row-gap%3A%200%3B%0A%20%20%7D%0A%0A%20%20.popup-lightbox%20.form-block.is--multistep%20.form__input.form__input--date%20%7B%0A%20%20%20%20background-position-x%3A%20calc(100%25%20-%2010px)%3B%0A%20%20%20%20background-position-y%3A%20center%3B%0A%20%20%7D%0A%20%20.popup-lightbox%20.form-block.is--multistep%20.form__select%3Afocus%2C%0A%20%20.popup-lightbox%20.form-block.is--multistep%20.form__input%3Afocus%20%7B%0A%20%20%20%20border-color%3A%20black%3B%0A%20%20%7D%0A%20%20.popup-lightbox%20.form-block.is--multistep%20.form__group%20%7B%0A%20%20%20%20margin-bottom%3A%204px%3B%0A%20%20%7D%0A%20%20.popup-lightbox%20.form-block.is--multistep%20.form__group.mb-24%20%7B%0A%20%20%20%20margin-bottom%3A%2024px%3B%0A%20%20%7D%0A%20%20.popup-lightbox%20.form-block.is--multistep%20.form__group.mb-36%20%7B%0A%20%20%20%20margin-bottom%3A%2036px%3B%0A%20%20%7D%0A%20%20.popup-lightbox%20.form-block.is--multistep%20.form__label%20%7B%0A%20%20%20%20font-weight%3A%20500%3B%0A%20%20%7D%0A%20%20.popup-lightbox%20.form__checkbox.is--multi.is--active%2C%0A%20%20.popup-lightbox%20.form__checkbox.is--multi.is--active%20.form__checkbox-number%20%7B%0A%20%20%20%20border-color%3A%20var(--primary-color)%3B%0A%20%20%20%20color%3A%20var(--primary-color)%3B%0A%20%20%20%20background-color%3A%20rgba(239%2C%2064%2C%2032%2C%200.1)%3B%0A%20%20%7D%0A%20%20.popup-lightbox%20.form__checkbox.is--active%3Ahover%20input%5Btype%3Dcheckbox%5D%20%7B%0A%20%20%20%20filter%3A%20brightness(1.25)%3B%0A%20%20%7D%0A%20%20.popup-lightbox.show%20%7B%0A%20%20%20%20display%3A%20flex%3B%0A%20%20%20%20opacity%3A%201%3B%0A%20%20%20%20pointer-events%3A%20all%3B%0A%20%20%7D%0A%20%20.popup-lightbox.show%20.popup-lightbox-container%20%7B%0A%20%20%20%20transform%3A%20translateY(0)%3B%0A%20%20%7D%0A%20%20.popup-lightbox%20.form-steps__single%20%5Bdata-save-step%3D%22true%22%5D%20%7B%0A%20%20%20%20pointer-events%3A%20none%3B%0A%20%20%20%20opacity%3A%200.5%3B%0A%20%20%20%20cursor%3A%20not-allowed%3B%0A%20%20%7D%0A%20%20.popup-lightbox%20.form-steps__single.active%20%5Bdata-save-step%3D%22true%22%5D%20%7B%0A%20%20%20%20pointer-events%3A%20all%3B%0A%20%20%20%20opacity%3A%201%3B%0A%20%20%20%20cursor%3A%20pointer%3B%0A%20%20%7D%0A%20%20.popup-lightbox%20.form__checkbox-label%20%7B%0A%20%20%20%20font-size%3A%200.875rem%3B%0A%20%20%20%20font-weight%3A%20500%3B%0A%20%20%7D%0A%20%20.popup-lightbox%20.form__checkbox-group%20.form__checkbox%20%7B%0A%20%20%20%20align-items%3A%20center%3B%0A%20%20%7D%0A%20%20.popup-lightbox%20.form__checkbox-group.is--popup%20%7B%0A%20%20%20%20padding%3A%200%202rem%3B%0A%20%20%20%20grid-row-gap%3A%200%3B%0A%20%20%7D%0A%20%20.popup-lightbox%20.btn.btn--form%2C%0A%20%20.popup-lightbox%20.btn.btn--form-next%20%7B%0A%20%20%20%20font-weight%3A%20700%3B%0A%20%20%7D%0A%20%20%40media%20screen%20and%20(max-width%3A%20390px)%20%7B%0A%20%20%20%20.popup-lightbox%20.form__checkbox-group.is--popup%20%7B%0A%20%20%20%20%20%20padding%3A%200%201rem%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20.popup-lightbox%20.form__validation-msg%20%7B%0A%20%20%20%20font-size%3A%200.875rem%3B%0A%20%20%20%20line-height%3A%201.5%3B%0A%20%20%7D%0A%20%20%0A%20%20%40media%20screen%20and%20(max-width%3A%20767px)%20%7B%0A%20%20%20%20.summer-modal%20br%20%7B%0A%20%20%20%20%20%20display%3A%20none%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%3C%2Fstyle%3E"
      />
      {popupFormFirst ? (
        <_Builtin.HtmlEmbed
          className={`popup-form-first-js ${_activeStyleVariant}`}
          value="%3Cscript%3E%0A%20%20window.onload%20%3D%20function()%20%7B%0A%20%20%20%20%2F%2F%20%3D%3D%3D%20POPUP%20FORM%20LOGIC%20%3D%3D%3D%0A%20%20%20%20const%20POPUP_KEY%20%3D%20%22popup-shown%22%3B%0A%20%20%20%20const%20POPUP_SHOWN_TIMESTAMP_KEY%20%3D%20%22popupShownAt%22%3B%0A%20%20%20%20const%20MS_48_HOURS%20%3D%2048%20*%2060%20*%2060%20*%201000%3B%0A%20%20%20%20const%20popupContainer%20%3D%20document.querySelector(%22.popup-lightbox%22)%3B%0A%20%20%20%20const%20popupCloseButton%20%3D%20document.querySelector(%22.popup-lighbox-close%22)%3B%0A%20%20%20%20const%20timeOutPopup%20%3D%201%20*%2045%20*%201000%3B%20%2F%2F%2045%20seconds%0A%0A%20%20%20%20%2F%2F%20%3D%3D%3D%20SUMMER%20MODAL%20LOGIC%20(SIMPLIFIED)%20%3D%3D%3D%0A%20%20%20%20const%20SUMMER_MODAL_SHOWN_KEY%20%3D%20%22summerModalShown%22%3B%0A%20%20%20%20const%20POPUP_FORM_INTERACTED_KEY%20%3D%20%22popupFormInteracted%22%3B%20%2F%2F%20New%20simplified%20key%0A%20%20%20%20const%20LEAD_FORM_SUBMITTED_KEY%20%3D%20%22schedule-request-submitted%22%3B%0A%20%20%20%20const%20summerModal%20%3D%20document.querySelector('.summer-modal')%3B%0A%20%20%20%20const%20summerCloseBtn%20%3D%20document.querySelector('.summer-modal__close')%3B%0A%20%20%20%20const%20delay%20%3D%2060000%3B%20%2F%2F%2060s%0A%20%20%20%20let%20summerModalAlreadyShown%20%3D%20localStorage.getItem(SUMMER_MODAL_SHOWN_KEY)%20%3D%3D%3D%20%22true%22%3B%0A%0A%20%20%20%20%2F%2F%20%3D%3D%3D%20POPUP%20FORM%20FUNCTIONS%20%3D%3D%3D%0A%20%20%20%20%2F%2F%20Note%3A%20Form%20submission%20is%20handled%20elsewhere%20in%20the%20codebase%0A%0A%20%20%20%20function%20checkIfStep1()%20%7B%0A%20%20%20%20%20%20const%20checkPopupGuid%20%3D%20JSON.parse(localStorage.getItem(formPopupSessionKey)%20%7C%7C%20'%7B%7D')%3B%0A%20%20%20%20%20%20if%20(checkPopupGuid%20%26%26%20checkPopupGuid.guid)%20%7B%0A%20%20%20%20%20%20%20%20const%20formPopupImg%20%3D%20document.querySelector(%22.popup-lightbox-img-cont%22)%3B%0A%20%20%20%20%20%20%20%20if%20(formPopupImg)%20%7B%0A%20%20%20%20%20%20%20%20%20%20formPopupImg.classList.add(%22form-step1-triggered%22)%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20checkIfStep1()%3B%0A%0A%20%20%20%20function%20showPopup()%20%7B%0A%20%20%20%20%20%20console.log('showpopup')%3B%0A%20%20%20%20%20%20if%20(document.querySelector(%22.popup-lightbox%22))%20%7B%0A%20%20%20%20%20%20%20%20if%20(%0A%20%20%20%20%20%20%20%20%20%20!window.location.pathname.includes(%22%2Fschedule%22)%20%26%26%0A%20%20%20%20%20%20%20%20%20%20!window.location.pathname.includes(%22%2Fthank-you%22)%0A%20%20%20%20%20%20%20%20)%20%7B%0A%20%20%20%20%20%20%20%20%20%20popupContainer.classList.add(%22show%22)%3B%0A%20%20%20%20%20%20%20%20%20%20document.querySelector(%22body%22).classList.add(%22no-scroll%22)%3B%0A%20%20%20%20%20%20%20%20%20%20localStorage.setItem(POPUP_KEY%2C%20%22true%22)%3B%0A%20%20%20%20%20%20%20%20%20%20localStorage.setItem(POPUP_SHOWN_TIMESTAMP_KEY%2C%20Date.now().toString())%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%0A%20%20%20%20function%20closePopup()%20%7B%0A%20%20%20%20%20%20if%20(popupContainer)%20%7B%0A%20%20%20%20%20%20%20%20popupContainer.classList.remove(%22show%22)%3B%0A%20%20%20%20%20%20%20%20document.querySelector(%22body%22).classList.remove(%22no-scroll%22)%3B%0A%0A%20%20%20%20%20%20%20%20%2F%2F%20Mark%20that%20popup%20form%20was%20interacted%20with%20(closed)%0A%20%20%20%20%20%20%20%20localStorage.setItem(POPUP_FORM_INTERACTED_KEY%2C%20%22true%22)%3B%0A%0A%20%20%20%20%20%20%20%20%2F%2F%20Schedule%20summer%20modal%20after%20popup%20closes%0A%20%20%20%20%20%20%20%20scheduleSummerModal()%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%0A%20%20%20%20function%20isUserFocusedInForm()%20%7B%0A%20%20%20%20%20%20let%20activeElement%20%3D%20document.activeElement%3B%0A%20%20%20%20%20%20while%20(activeElement)%20%7B%0A%20%20%20%20%20%20%20%20if%20(activeElement.tagName%20%3D%3D%3D%20%22FORM%22)%20%7B%0A%20%20%20%20%20%20%20%20%20%20return%20true%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20activeElement%20%3D%20activeElement.parentElement%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20return%20false%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20function%20shouldShowPopup()%20%7B%0A%20%20%20%20%20%20const%20popupShown%20%3D%20localStorage.getItem(POPUP_KEY)%3B%0A%20%20%20%20%20%20const%20isPopupActive%20%3D%20popupShown%20%3D%3D%3D%20%22true%22%20%3F%20true%20%3A%20false%3B%0A%20%20%20%20%20%20const%20scheduleRequestSubmitted%20%3D%20localStorage.getItem('schedule-request-submitted')%3B%0A%20%20%20%20%20%20let%20formIsSubmitted%20%3D%20scheduleRequestSubmitted%20%3F%20true%20%3A%20false%3B%0A%0A%20%20%20%20%20%20if%20(isPopupActive%20%7C%7C%20formIsSubmitted%20%7C%7C%20isUserFocusedInForm())%20%7B%0A%20%20%20%20%20%20%20%20return%20false%3B%0A%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20const%20shownAt%20%3D%20localStorage.getItem(POPUP_SHOWN_TIMESTAMP_KEY)%3B%0A%20%20%20%20%20%20if%20(shownAt)%20%7B%0A%20%20%20%20%20%20%20%20const%20timeSinceShown%20%3D%20Date.now()%20-%20parseInt(shownAt%2C%2010)%3B%0A%20%20%20%20%20%20%20%20if%20(timeSinceShown%20%3C%20MS_48_HOURS)%20%7B%0A%20%20%20%20%20%20%20%20%20%20return%20false%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20return%20true%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20%2F%2F%20%3D%3D%3D%20SIMPLIFIED%20SUMMER%20MODAL%20FUNCTIONS%20%3D%3D%3D%0A%20%20%20%20function%20showSummerModal()%20%7B%0A%20%20%20%20%20%20if%20(summerModalAlreadyShown)%20return%3B%0A%0A%20%20%20%20%20%20%2F%2F%20Don't%20show%20summer%20modal%20on%20certain%20pages%0A%20%20%20%20%20%20if%20(window.location.pathname.includes(%22%2Fschedule%22)%20%7C%7C%20%0A%20%20%20%20%20%20%20%20%20%20window.location.pathname.includes(%22%2Fthank-you%22))%20%7B%0A%20%20%20%20%20%20%20%20return%3B%0A%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20summerModal%3F.classList.add('show')%3B%0A%20%20%20%20%20%20document.body.classList.add('no-scroll')%3B%0A%20%20%20%20%20%20localStorage.setItem(SUMMER_MODAL_SHOWN_KEY%2C%20%22true%22)%3B%0A%20%20%20%20%20%20summerModalAlreadyShown%20%3D%20true%3B%0A%20%20%20%20%20%20console.log(%22%E2%9C%85%20Summer%20modal%20shown%22)%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20function%20hideSummerModal()%20%7B%0A%20%20%20%20%20%20summerModal%3F.classList.remove('show')%3B%0A%20%20%20%20%20%20document.body.classList.remove('no-scroll')%3B%0A%20%20%20%20%20%20console.log(%22%E2%9D%8C%20Summer%20modal%20closed%22)%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20function%20scheduleSummerModal()%20%7B%0A%20%20%20%20%20%20if%20(summerModalAlreadyShown)%20return%3B%0A%0A%20%20%20%20%20%20console.log(%60%E2%8F%B3%20Scheduling%20summer%20modal%20in%20%24%7Bdelay%20%2F%201000%7Ds%60)%3B%0A%0A%20%20%20%20%20%20setTimeout(()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20showSummerModal()%3B%0A%20%20%20%20%20%20%7D%2C%20delay)%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20%2F%2F%20%3D%3D%3D%20SIMPLIFIED%20INITIALIZATION%20%3D%3D%3D%0A%0A%20%20%20%20%2F%2F%20Check%20on%20page%20load%3A%20if%20popup%20was%20ever%20interacted%20with%20and%20summer%20modal%20hasn't%20been%20shown%0A%20%20%20%20function%20checkSummerModalOnLoad()%20%7B%0A%20%20%20%20%20%20const%20popupInteracted%20%3D%20localStorage.getItem(POPUP_FORM_INTERACTED_KEY)%20%3D%3D%3D%20%22true%22%3B%0A%0A%20%20%20%20%20%20if%20((!summerModalAlreadyShown%20%26%26%20popupInteracted)%20%7C%7C%20(!summerModalAlreadyShown%20%26%26%20localStorage.getItem(LEAD_FORM_SUBMITTED_KEY)%20!%3D%3D%20null))%20%7B%0A%20%20%20%20%20%20%20%20%2F%2F%20Popup%20was%20shown%20before%20(and%20closed%2Fsubmitted)%2C%20schedule%20summer%20modal%0A%20%20%20%20%20%20%20%20scheduleSummerModal()%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%0A%20%20%20%20%2F%2F%20Run%20the%20check%20on%20page%20load%0A%20%20%20%20checkSummerModalOnLoad()%3B%0A%0A%20%20%20%20%2F%2F%20%3D%3D%3D%20EVENT%20LISTENERS%20%3D%3D%3D%0A%0A%20%20%20%20%2F%2F%20Popup%20form%20events%0A%20%20%20%20if%20(popupCloseButton)%20%7B%0A%20%20%20%20%20%20popupCloseButton.addEventListener(%22click%22%2C%20closePopup)%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20%2F%2F%20Summer%20modal%20events%0A%20%20%20%20summerCloseBtn%3F.addEventListener('click'%2C%20hideSummerModal)%3B%0A%20%20%20%20summerModal%3F.addEventListener('click'%2C%20function%20(e)%20%7B%0A%20%20%20%20%20%20if%20(e.target%20%3D%3D%3D%20summerModal)%20%7B%0A%20%20%20%20%20%20%20%20hideSummerModal()%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D)%3B%0A%0A%20%20%20%20document.querySelectorAll('.open-summer-modal').forEach(trigger%20%3D%3E%20%7B%0A%20%20%20%20%20%20trigger.addEventListener('click'%2C%20function%20()%20%7B%0A%20%20%20%20%20%20%20%20showSummerModal()%3B%0A%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%7D)%3B%0A%0A%20%20%20%20%2F%2F%20%3D%3D%3D%20POPUP%20FORM%20TRIGGERS%20%3D%3D%3D%0A%0A%20%20%20%20%2F%2F%20Exit%20intent%0A%20%20%20%20let%20mouseY%3B%0A%20%20%20%20document.querySelector('body').addEventListener('mouseleave'%2C%20(event)%20%3D%3E%20%7B%0A%20%20%20%20%20%20mouseY%20%3D%20event.clientY%3B%0A%20%20%20%20%20%20if%20(mouseY%20%3C%200)%20%7B%0A%20%20%20%20%20%20%20%20console.log('Exit%20Intent')%3B%0A%20%20%20%20%20%20%20%20%2F%2F%20if%20(shouldShowPopup())%20%7B%0A%20%20%20%20%20%20%20%20%2F%2F%20%20%20showPopup()%3B%0A%20%20%20%20%20%20%20%20%2F%2F%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D)%3B%0A%0A%20%20%20%20%2F%2F%20Mobile%20exit%20intent%0A%20%20%20%20document.addEventListener(%22touchstart%22%2C%20(event)%20%3D%3E%20%7B%0A%20%20%20%20%20%20window.lastTouchY%20%3D%20event.touches%5B0%5D.clientY%3B%0A%20%20%20%20%7D)%3B%0A%0A%20%20%20%20document.addEventListener(%22touchend%22%2C%20(event)%20%3D%3E%20%7B%0A%20%20%20%20%20%20const%20deltaY%20%3D%20window.lastTouchY%20-%20event.changedTouches%5B0%5D.clientY%3B%0A%20%20%20%20%20%20if%20(deltaY%20%3E%20100)%20%7B%0A%20%20%20%20%20%20%20%20console.log(%22Exit%20Intent%20on%20Mobile%22)%3B%0A%20%20%20%20%20%20%20%20%2F%2F%20if%20(shouldShowPopup())%20%7B%0A%20%20%20%20%20%20%20%20%2F%2F%20%20%20showPopup()%3B%0A%20%20%20%20%20%20%20%20%2F%2F%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D)%3B%0A%0A%20%20%20%20%2F%2F%20Show%20popup%20after%20timeout%0A%20%20%20%20setTimeout(()%20%3D%3E%20%7B%0A%20%20%20%20%20%20if%20(shouldShowPopup())%20%7B%0A%20%20%20%20%20%20%20%20showPopup()%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%20timeOutPopup)%3B%0A%20%20%7D%0A%3C%2Fscript%3E"
        />
      ) : null}
      {summerModalFirst ? (
        <_Builtin.HtmlEmbed
          className={`summer-modal-first-js ${_activeStyleVariant}`}
          value="%3Cscript%3E%0A%20%20window.onload%20%3D%20function()%20%7B%0A%20%20%20%20const%20SUMMER_MODAL_SHOWN_KEY%20%3D%20%22summerModalShown%22%3B%0A%20%20%20%20const%20SUMMER_MODAL_CLOSED_KEY%20%3D%20%22summerModalClosedAt%22%3B%0A%20%20%20%20const%20POPUP_KEY%20%3D%20%22popup-shown%22%3B%0A%20%20%20%20const%20POPUP_SHOWN_TIMESTAMP_KEY%20%3D%20%22popupShownAt%22%3B%0A%20%20%20%20const%20LEAD_FORM_SUBMITTED_KEY%20%3D%20%22schedule-request-submitted%22%3B%0A%20%20%20%20const%20POPUP_FORM_INTERACTED_KEY%20%3D%20%22popupFormInteracted%22%3B%0A%20%20%20%20const%20MS_48_HOURS%20%3D%2048%20*%2060%20*%2060%20*%201000%3B%0A%20%20%20%20const%20delay%20%3D%2060000%3B%0A%0A%20%20%20%20const%20summerModal%20%3D%20document.querySelector('.summer-modal')%3B%0A%20%20%20%20const%20summerCloseBtn%20%3D%20document.querySelector('.summer-modal__close')%3B%0A%20%20%20%20const%20popupContainer%20%3D%20document.querySelector(%22.popup-lightbox%22)%3B%0A%20%20%20%20const%20popupCloseButton%20%3D%20document.querySelector(%22.popup-lightbox-close%22)%3B%0A%0A%20%20%20%20let%20summerModalAlreadyShown%20%3D%20localStorage.getItem(SUMMER_MODAL_SHOWN_KEY)%20%3D%3D%3D%20%22true%22%3B%0A%20%20%20%20let%20popupScheduled%20%3D%20false%3B%0A%0A%20%20%20%20function%20showSummerModal()%20%7B%0A%20%20%20%20%20%20if%20(summerModalAlreadyShown)%20return%3B%0A%20%20%20%20%20%20summerModal%3F.classList.add('show')%3B%0A%20%20%20%20%20%20document.body.classList.add('no-scroll')%3B%0A%20%20%20%20%20%20localStorage.setItem(SUMMER_MODAL_SHOWN_KEY%2C%20%22true%22)%3B%0A%20%20%20%20%20%20summerModalAlreadyShown%20%3D%20true%3B%0A%20%20%20%20%20%20console.log(%22%E2%9C%85%20Summer%20modal%20shown%22)%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20function%20hideSummerModal()%20%7B%0A%20%20%20%20%20%20summerModal%3F.classList.remove('show')%3B%0A%20%20%20%20%20%20document.body.classList.remove('no-scroll')%3B%0A%20%20%20%20%20%20localStorage.setItem(SUMMER_MODAL_CLOSED_KEY%2C%20Date.now().toString())%3B%0A%20%20%20%20%20%20console.log(%22%E2%9D%8C%20Summer%20modal%20closed%22)%3B%0A%20%20%20%20%20%20schedulePopupForm()%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20function%20checkIfStep1()%20%7B%0A%20%20%20%20%20%20const%20checkPopupGuid%20%3D%20JSON.parse(localStorage.getItem(formPopupSessionKey)%20%7C%7C%20'%7B%7D')%3B%0A%20%20%20%20%20%20if%20(checkPopupGuid%20%26%26%20checkPopupGuid.guid)%20%7B%0A%20%20%20%20%20%20%20%20const%20formPopupImg%20%3D%20document.querySelector(%22.popup-lightbox-img-cont%22)%3B%0A%20%20%20%20%20%20%20%20if%20(formPopupImg)%20%7B%0A%20%20%20%20%20%20%20%20%20%20formPopupImg.classList.add(%22form-step1-triggered%22)%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20checkIfStep1()%3B%0A%0A%20%20%20%20function%20showPopup()%20%7B%0A%20%20%20%20%20%20console.log('showpopup')%3B%0A%20%20%20%20%20%20if%20(!popupContainer)%20return%3B%0A%20%20%20%20%20%20if%20(window.location.pathname.includes(%22%2Fschedule%22)%20%7C%7C%20window.location.pathname.includes(%22%2Fthank-you%22))%20return%3B%0A%20%20%20%20%20%20popupContainer.classList.add(%22show%22)%3B%0A%20%20%20%20%20%20document.body.classList.add(%22no-scroll%22)%3B%0A%20%20%20%20%20%20localStorage.setItem(POPUP_KEY%2C%20%22true%22)%3B%0A%20%20%20%20%20%20localStorage.setItem(POPUP_SHOWN_TIMESTAMP_KEY%2C%20Date.now().toString())%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20function%20closePopup()%20%7B%0A%20%20%20%20%20%20if%20(!popupContainer)%20return%3B%0A%20%20%20%20%20%20popupContainer.classList.remove(%22show%22)%3B%0A%20%20%20%20%20%20document.body.classList.remove(%22no-scroll%22)%3B%0A%20%20%20%20%20%20localStorage.setItem(POPUP_FORM_INTERACTED_KEY%2C%20%22true%22)%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20function%20isUserFocusedInForm()%20%7B%0A%20%20%20%20%20%20let%20activeElement%20%3D%20document.activeElement%3B%0A%20%20%20%20%20%20while%20(activeElement)%20%7B%0A%20%20%20%20%20%20%20%20if%20(activeElement.tagName%20%3D%3D%3D%20%22FORM%22)%20return%20true%3B%0A%20%20%20%20%20%20%20%20activeElement%20%3D%20activeElement.parentElement%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20return%20false%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20function%20shouldShowPopup()%20%7B%0A%20%20%20%20%20%20console.log(%22Should%20Show%20Summer%20Popup%3F%22)%3B%0A%20%20%20%20%20%20if%20(localStorage.getItem(POPUP_KEY)%20%3D%3D%3D%20%22true%22)%20%7B%0A%20%20%20%20%20%20%20%20console.log(%22Condition%201%22)%3B%0A%20%20%20%20%20%20%20%20return%20false%3B%0A%20%20%20%20%20%20%7D%20%0A%20%20%20%20%20%20if%20(localStorage.getItem(LEAD_FORM_SUBMITTED_KEY))%20%7B%0A%20%20%20%20%20%20%20%20console.log(%22Condition%202%22)%3B%0A%20%20%20%20%20%20%20%20return%20false%3B%0A%20%20%20%20%20%20%7D%20%0A%20%20%20%20%20%20if%20(isUserFocusedInForm())%20%7B%0A%20%20%20%20%20%20%20%20console.log(%22Condition%203%22)%3B%0A%20%20%20%20%20%20%20%20return%20false%3B%0A%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20const%20shownAt%20%3D%20parseInt(localStorage.getItem(POPUP_SHOWN_TIMESTAMP_KEY)%2C%2010)%3B%0A%20%20%20%20%20%20if%20(!isNaN(shownAt)%20%26%26%20Date.now()%20-%20shownAt%20%3C%20MS_48_HOURS)%20%7B%0A%20%20%20%20%20%20%20%20console.log(%22Condition%204%22)%3B%0A%20%20%20%20%20%20%20%20return%20false%3B%0A%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20console.log(%22Showing%20Summer%20Popup!%22)%3B%0A%20%20%20%20%20%20return%20true%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20function%20schedulePopupForm()%20%7B%0A%20%20%20%20%20%20if%20(popupScheduled)%20return%3B%0A%20%20%20%20%20%20popupScheduled%20%3D%20true%3B%0A%20%20%20%20%20%20console.log(%60%E2%8F%B3%20Scheduling%20popup%20form%20in%20%24%7Bdelay%20%2F%201000%7Ds%60)%3B%0A%20%20%20%20%20%20setTimeout(()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20if%20(shouldShowPopup())%20%7B%0A%20%20%20%20%20%20%20%20%20%20showPopup()%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%2C%20delay)%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20function%20checkAndSchedulePopup()%20%7B%0A%20%20%20%20%20%20const%20summerModalClosedAt%20%3D%20parseInt(localStorage.getItem(SUMMER_MODAL_CLOSED_KEY)%2C%2010)%3B%0A%20%20%20%20%20%20if%20(!isNaN(summerModalClosedAt)%20%26%26%20!popupScheduled)%20%7B%0A%20%20%20%20%20%20%20%20const%20timeSinceClosed%20%3D%20Date.now()%20-%20summerModalClosedAt%3B%0A%20%20%20%20%20%20%20%20const%20remaining%20%3D%20delay%20-%20timeSinceClosed%3B%0A%20%20%20%20%20%20%20%20if%20(remaining%20%3C%3D%200)%20%7B%0A%20%20%20%20%20%20%20%20%20%20if%20(shouldShowPopup())%20showPopup()%3B%0A%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20popupScheduled%20%3D%20true%3B%0A%20%20%20%20%20%20%20%20%20%20console.log(%60%E2%8F%B3%20Scheduling%20popup%20form%20in%20%24%7BMath.ceil(remaining%20%2F%201000)%7Ds%60)%3B%0A%20%20%20%20%20%20%20%20%20%20setTimeout(()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20(shouldShowPopup())%20showPopup()%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%20remaining)%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%0A%20%20%20%20if%20(!summerModalAlreadyShown)%20%7B%0A%20%20%20%20%20%20setTimeout(()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20showSummerModal()%3B%0A%20%20%20%20%20%20%7D%2C%20delay)%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20checkAndSchedulePopup()%3B%0A%0A%20%20%20%20summerCloseBtn%3F.addEventListener('click'%2C%20hideSummerModal)%3B%0A%20%20%20%20summerModal%3F.addEventListener('click'%2C%20function%20(e)%20%7B%0A%20%20%20%20%20%20if%20(e.target%20%3D%3D%3D%20summerModal)%20hideSummerModal()%3B%0A%20%20%20%20%7D)%3B%0A%0A%20%20%20%20document.querySelectorAll('.open-summer-modal').forEach(trigger%20%3D%3E%20%7B%0A%20%20%20%20%20%20trigger.addEventListener('click'%2C%20function%20()%20%7B%0A%20%20%20%20%20%20%20%20showSummerModal()%3B%0A%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%7D)%3B%0A%0A%20%20%20%20if%20(popupCloseButton)%20%7B%0A%20%20%20%20%20%20popupCloseButton.addEventListener(%22click%22%2C%20closePopup)%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20document.addEventListener(%22visibilitychange%22%2C%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20if%20(document.visibilityState%20%3D%3D%3D%20%22visible%22%20%26%26%20shouldShowPopup())%20%7B%0A%20%20%20%20%20%20%20%20const%20summerModalClosedAt%20%3D%20parseInt(localStorage.getItem(SUMMER_MODAL_CLOSED_KEY)%2C%2010)%3B%0A%20%20%20%20%20%20%20%20if%20(!isNaN(summerModalClosedAt))%20%7B%0A%20%20%20%20%20%20%20%20%20%20%2F%2F%20Optional%3A%20showPopup()%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D)%3B%0A%0A%20%20%20%20document.querySelector('body').addEventListener('mouseleave'%2C%20(event)%20%3D%3E%20%7B%0A%20%20%20%20%20%20if%20(event.clientY%20%3C%200)%20%7B%0A%20%20%20%20%20%20%20%20console.log('Exit%20Intent')%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D)%3B%0A%0A%20%20%20%20document.addEventListener(%22touchstart%22%2C%20(event)%20%3D%3E%20%7B%0A%20%20%20%20%20%20window.lastTouchY%20%3D%20event.touches%5B0%5D.clientY%3B%0A%20%20%20%20%7D)%3B%0A%0A%20%20%20%20document.addEventListener(%22touchend%22%2C%20(event)%20%3D%3E%20%7B%0A%20%20%20%20%20%20const%20deltaY%20%3D%20window.lastTouchY%20-%20event.changedTouches%5B0%5D.clientY%3B%0A%20%20%20%20%20%20if%20(deltaY%20%3E%20100)%20%7B%0A%20%20%20%20%20%20%20%20console.log(%22Exit%20Intent%20on%20Mobile%22)%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D)%3B%0A%0A%20%20%7D%3B%0A%3C%2Fscript%3E"
        />
      ) : null}
      <_Builtin.Block
        className={`popup-lightbox ${_activeStyleVariant}`}
        tag="div"
      >
        <_Builtin.Block
          className={`popup-lightbox-container popup-lightbox-form-scroll ${_activeStyleVariant}`}
          tag="div"
        >
          <_Builtin.Block
            className={`popup-lightbox-img-cont ${_activeStyleVariant}`}
            tag="div"
          >
            {baseBaseVisibility ? (
              <_Builtin.Block
                className={`promo-banner2-v2 is--modal ${_activeStyleVariant}`}
                tag="div"
              >
                <_Builtin.Block
                  className={`h8-v2 is--bold is--white-v2 ${_activeStyleVariant}`}
                  tag="div"
                >
                  <_Builtin.Span data-replace="percent">{"50"}</_Builtin.Span>
                  {"%* OFF "}
                  <_Builtin.Span
                    className={`hidden-tablet ${_activeStyleVariant}`}
                  >
                    {"+"}
                  </_Builtin.Span>
                  <_Builtin.Span
                    className={`hidden-desktop visible-tablet promo-banner2-plus-text ${_activeStyleVariant}`}
                  >
                    {"Plus"}
                  </_Builtin.Span>
                  {" Free Installation"}
                </_Builtin.Block>
                <_Builtin.Block
                  className={`h8-v2 is--bold is--white-v2 ${_activeStyleVariant}`}
                  tag="div"
                >
                  <_Builtin.Span data-replace="months">{"18"}</_Builtin.Span>
                  {" Month Special Financing On Approved Credit"}
                </_Builtin.Block>
              </_Builtin.Block>
            ) : null}
            {pinkPinkVisibility ? (
              <_Builtin.Block
                className={`promo-banner2-v2 is--modal ${_activeStyleVariant}`}
                tag="div"
              >
                <_Builtin.Block
                  className={`h8-v2 is--bold is--white-v2 ${_activeStyleVariant}`}
                  tag="div"
                >
                  {"MOTHER’S DAY 50% OFF"}
                </_Builtin.Block>
                <_Builtin.Block
                  className={`h8-v2 is--bold is--white-v2 ${_activeStyleVariant}`}
                  tag="div"
                >
                  {"Schedule a Free In-Home Consultation Now"}
                </_Builtin.Block>
              </_Builtin.Block>
            ) : null}
            <_Builtin.HtmlEmbed
              className={`promo-banner-css ${_activeStyleVariant}`}
              value="%3Cstyle%3E%0A.promo-banner2-v2%20%7B%0A%20%20background%3A%20rgb(120%2C121%2C121)%3B%0A%20%20background%3A%20linear-gradient(-45deg%2C%20rgba(120%2C121%2C121%2C1)%200%25%2C%20rgba(120%2C121%2C121%2C1)%2050%25%2C%20rgba(239%2C65%2C35%2C1)%2050%25%2C%20rgba(239%2C65%2C35%2C1)%20100%25)%3B%0A%7D%0A%0A%40media%20screen%20and%20(min-width%3A%20992px)%20%7B%0A%20%20.promo-banner2-v2%20%7B%0A%20%20%09text-transform%3A%20uppercase%3B%0A%20%20%7D%0A%7D%0A%0A%40media%20screen%20and%20(max-width%3A%20992px)%20%7B%0A%09.promo-banner2-v2%20%7B%0A%20%20%20%20flex-direction%3A%20column%3B%0A%20%20%20%20justify-content%3A%20center%3B%0A%20%20%20%20align-items%3A%20center%3B%0A%20%20%20%20padding%3A%200%3B%0A%20%20%20%20gap%3A%200%3B%0A%20%20%20%20background%3A%20transparent%3B%0A%20%20%7D%0A%20%20%0A%20%20.promo-banner2-v2%20.h8-v2%20%7B%0A%20%20%09width%3A%20100%25%3B%0A%20%20%20%20text-align%3A%20center%3B%0A%20%20%20%20padding%3A%200%200.5rem%3B%0A%20%20%20%20line-height%3A%201.75rem%3B%0A%20%20%20%20padding-top%3A%200.25rem%3B%0A%20%20%20%20font-size%3A%2020px%3B%0A%20%20%20%20font-weight%3A%20500%3B%0A%20%20%7D%0A%20%20%0A%20%20.promo-banner2-v2%20.h8-v2%3Afirst-child%20span%5Bdata-replace%5D%20%7B%0A%20%20%09font-weight%3A%20900%3B%0A%20%20%7D%0A%20%20%0A%20%20.promo-banner2-v2%20.h8-v2%3Afirst-child%20%7B%0A%20%20%20%20background-color%3A%20var(--red-v2)%3B%0A%20%20%7D%0A%20%20%0A%20%20.promo-banner2-plus-text%20%7B%0A%20%20%09font-size%3A%200.75rem%3B%0A%20%20%7D%0A%20%20%0A%20%20.promo-banner2-v2%20.h8-v2%3Alast-child%20%7B%0A%20%20%20%20background-color%3A%20var(--dark-grey-v2)%3B%0A%20%20%20%20font-size%3A%200.75rem%3B%0A%20%20%20%20line-height%3A%201.25rem%3B%0A%20%20%20%20font-weight%3A%20400%3B%0A%20%20%20%20padding-top%3A%200%3B%0A%20%20%7D%0A%20%20%0A%20%20.w-variant-9c9cc5e3-5d94-82d4-e323-e095138cf1dc%20.promo-banner2-v2%20.h8-v2%3Afirst-child%20%7B%0A%20%20%20%20background-color%3A%20var(--pink-v2)%3B%0A%20%20%7D%0A%20%20.w-variant-9c9cc5e3-5d94-82d4-e323-e095138cf1dc%20.promo-banner2-v2%20.h8-v2%3Alast-child%20%7B%0A%20%20%20%20background-color%3A%20var(--pink-light-v2)%3B%0A%20%20%20%20color%3A%20var(--pink-v2)%3B%0A%20%20%20%20font-weight%3A%20bold%3B%0A%20%20%7D%0A%20%20%0A%7D%0A%3C%2Fstyle%3E"
            />
            <_Builtin.Block
              className={`popup-lightbox-title ${_activeStyleVariant}`}
              tag="div"
            >
              {topTitleVisibility ? (
                <_Builtin.Block
                  className={`subheading-v2 is--white-v2 text-align--center ${_activeStyleVariant}`}
                  tag="div"
                >
                  {topTItle}
                </_Builtin.Block>
              ) : null}
              <_Builtin.Block
                className={`h5-v2 text-align--center is--white-v2 hidden-tablet ${_activeStyleVariant}`}
                tag="div"
              >
                {title}
              </_Builtin.Block>
              <_Builtin.Block
                className={`h5-v2 text-align--center is--white-v2 hidden-desktop ${_activeStyleVariant}`}
                tag="div"
              >
                {titleMobile}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={`popup-lightbox-img-cont-inner ${_activeStyleVariant}`}
              tag="div"
            >
              <_Builtin.Block
                className={`popup-lightbox-img-half full-desktop ${_activeStyleVariant}`}
                tag="div"
              >
                {baseBaseVisibility ? (
                  <_Builtin.Image
                    className={`image-cover ${_activeStyleVariant}`}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt=""
                    src={baseImage1}
                  />
                ) : null}
                {pinkPinkVisibility ? (
                  <_Builtin.Image
                    className={`image-cover ${_activeStyleVariant}`}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt=""
                    src={pinkPinkImageDesktop}
                  />
                ) : null}
              </_Builtin.Block>
              <_Builtin.Block
                className={`popup-lightbox-img-half hidden-tablet ${_activeStyleVariant}`}
                tag="div"
              >
                {baseBaseVisibility ? (
                  <_Builtin.Image
                    className={`image-cover ${_activeStyleVariant}`}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt=""
                    src={baseImage2}
                  />
                ) : null}
                {pinkPinkVisibility ? (
                  <_Builtin.Image
                    className={`image-cover ${_activeStyleVariant}`}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt=""
                    src={pinkPinkImageMobile}
                  />
                ) : null}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={`popup-form-wrap ${_activeStyleVariant}`}
            tag="div"
          >
            <_Builtin.HtmlEmbed
              className={`form-custom-css ${_activeStyleVariant}`}
              value="%3Cstyle%3E%0A%40media%20screen%20and%20(max-width%3A%20991px)%20%7B%0A%09.mobile-h8-v2%20%7B%0A%20%20%20%20font-size%3A%201.5rem%3B%0A%20%20%20%20line-height%3A%201.15%3B%0A%20%20%20%20font-weight%3A%20400%3B%0A%20%20%7D%0A%20%20.mobile-is-red-v2%20%7B%0A%20%20%09color%3A%20var(--red-v2)%3B%0A%20%20%7D%0A%7D%0A%3C%2Fstyle%3E"
            />
            <_Builtin.FormWrapper
              className={`form-block is--multistep ${_activeStyleVariant}`}
            >
              <_Builtin.FormForm
                className={`form-vertical form-multi-steps ${_activeStyleVariant}`}
                name="wf-form-Appointment-Form-Popup"
                data-name="Appointment Form Popup"
                redirect="/thank-you"
                data-redirect="/thank-you"
                method="get"
                id="wf-form-Appointment-Form-Popup"
              >
                <_Builtin.Block
                  className={`link-holder ${_activeStyleVariant}`}
                  tag="div"
                />
                <_Builtin.Block
                  className={`form-steps__wrapper is--popup ${_activeStyleVariant}`}
                  tag="div"
                >
                  <_Builtin.Block
                    className={`form-steps ${_activeStyleVariant}`}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={`form-steps__single active ${_activeStyleVariant}`}
                      tag="div"
                      id="schedule-step-0"
                    >
                      <_Builtin.Block
                        className={`form__col is--vertical ${_activeStyleVariant}`}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={`form__heading-wrap ${_activeStyleVariant}`}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={`popup-header-form ${_activeStyleVariant}`}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={`form__heading-title ${_activeStyleVariant}`}
                              tag="div"
                            >
                              <_Builtin.Block
                                className={`form-heading hidden-tablet ${_activeStyleVariant}`}
                                tag="div"
                              >
                                <_Builtin.Block
                                  className={`h6-v2 is--red-v2 weight--medium ${_activeStyleVariant}`}
                                  tag="div"
                                >
                                  <_Builtin.Span data-replace="percent">
                                    {"50"}
                                  </_Builtin.Span>
                                  {"%* OFF "}
                                </_Builtin.Block>
                                <_Builtin.Block
                                  className={`h9-v2 is--red-v2 weight--medium ${_activeStyleVariant}`}
                                  tag="div"
                                >
                                  {"+FREE INSTALLATION"}
                                </_Builtin.Block>
                                <_Builtin.Block
                                  className={`h9-v2 is--red-v2 weight--medium lh-166 ${_activeStyleVariant}`}
                                  tag="div"
                                >
                                  <_Builtin.Span data-replace="months">
                                    {"18"}
                                  </_Builtin.Span>
                                  {
                                    " Months Special Financing with ApprovedCredit"
                                  }
                                </_Builtin.Block>
                              </_Builtin.Block>
                              <_Builtin.Heading
                                className={`h10-v2 mobile-h8-v2 mobile-is-red-v2 ${_activeStyleVariant}`}
                                tag="h2"
                              >
                                {"Get a Custom Design, For Free!"}
                              </_Builtin.Heading>
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={`body-xs fs-12 lh-150 ${_activeStyleVariant}`}
                              tag="div"
                            >
                              {
                                "Get a complimentary in-home design and a complete estimate for your custom project valued at over $700.00"
                              }
                              <br />
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={`form__group ${_activeStyleVariant}`}
                          tag="div"
                        >
                          <_Builtin.FormBlockLabel
                            className={`form__label ${_activeStyleVariant}`}
                            htmlFor="popup-form-Email"
                          >
                            {"Email Address"}
                          </_Builtin.FormBlockLabel>
                          <_Builtin.FormTextInput
                            className={`form__input form__input--email ${_activeStyleVariant}`}
                            name="Email"
                            maxLength={256}
                            data-name="Email"
                            placeholder="Email"
                            disabled={false}
                            type="email"
                            required={true}
                            autoFocus={false}
                            autoComplete="email"
                            id="popup-form-Email"
                          />
                          <_Builtin.Block
                            className={`form__validation-msg ${_activeStyleVariant}`}
                            tag="div"
                          >
                            {"This field is required."}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={`form__group ${_activeStyleVariant}`}
                          tag="div"
                        >
                          <_Builtin.FormBlockLabel
                            className={`form__label ${_activeStyleVariant}`}
                            htmlFor="popup-form-Phone-Number"
                          >
                            {"Phone Number"}
                          </_Builtin.FormBlockLabel>
                          <_Builtin.FormTextInput
                            className={`form__input form__input--tel ${_activeStyleVariant}`}
                            name="Phone-Number"
                            maxLength={256}
                            data-name="Phone Number"
                            placeholder="Phone Number"
                            disabled={false}
                            type="tel"
                            required={true}
                            autoFocus={false}
                            autoComplete="tel-national"
                            id="popup-form-Phone-Number"
                          />
                          <_Builtin.DOM
                            tag="input"
                            type="hidden"
                            name="Formatted-Phone-Number"
                            id="main-form-Formatted-Phone-Number"
                            data-name="Formatted Phone Number"
                          />
                          <_Builtin.Block
                            className={`form__validation-msg ${_activeStyleVariant}`}
                            tag="div"
                          >
                            {"This field is required."}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={`form__group ${_activeStyleVariant}`}
                          tag="div"
                        >
                          <_Builtin.FormBlockLabel
                            className={`form__label ${_activeStyleVariant}`}
                            htmlFor="popup-form-First-Name"
                          >
                            {"First Name"}
                          </_Builtin.FormBlockLabel>
                          <_Builtin.FormTextInput
                            className={`form__input ${_activeStyleVariant}`}
                            name="First-Name"
                            maxLength={256}
                            data-name="First Name"
                            placeholder="First Name"
                            disabled={false}
                            type="text"
                            required={true}
                            autoFocus={false}
                            autoComplete="given-name"
                            id="popup-form-First-Name"
                          />
                          <_Builtin.Block
                            className={`form__validation-msg ${_activeStyleVariant}`}
                            tag="div"
                          >
                            {"This field is required."}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={`form__group mb-24 ${_activeStyleVariant}`}
                          tag="div"
                        >
                          <_Builtin.FormBlockLabel
                            className={`form__label ${_activeStyleVariant}`}
                            htmlFor="popup-form-Last-Name"
                          >
                            {"Last Name"}
                          </_Builtin.FormBlockLabel>
                          <_Builtin.FormTextInput
                            className={`form__input ${_activeStyleVariant}`}
                            name="Last-Name"
                            maxLength={256}
                            data-name="Last Name"
                            placeholder="Last Name"
                            disabled={false}
                            type="text"
                            required={true}
                            autoFocus={false}
                            autoComplete="family-name"
                            id="popup-form-Last-Name"
                          />
                          <_Builtin.Block
                            className={`form__validation-msg ${_activeStyleVariant}`}
                            tag="div"
                          >
                            {"This field is required."}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={`form__group mb-36 ${_activeStyleVariant}`}
                          tag="div"
                        >
                          <_Builtin.FormCheckboxWrapper
                            className={`form__checkbox ${_activeStyleVariant}`}
                          >
                            <_Builtin.FormCheckboxInput
                              className={`form__checkbox-input is--consent ${_activeStyleVariant}`}
                              type="checkbox"
                              name="Marketing-Consent"
                              data-name="Marketing Consent"
                              required={false}
                              checked={true}
                              id="popup-form-Marketing-Consent"
                              form={{
                                type: "checkbox-input",
                                name: "Marketing Consent",
                              }}
                              inputType="default"
                            />
                            <_Builtin.FormInlineLabel
                              className={`form__checkbox-label lh-140 fs-12 ${_activeStyleVariant}`}
                            >
                              {
                                "I want to receive exclusive emails and SMS messages with status updates and recent news."
                              }
                            </_Builtin.FormInlineLabel>
                          </_Builtin.FormCheckboxWrapper>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={`form__submit is--center gap-2 mt-2 ${_activeStyleVariant}`}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={`form__validation-msg ${_activeStyleVariant}`}
                          tag="div"
                        >
                          {
                            "There are errors in the form. Please check all the fields and try to submit it again."
                          }
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={`form__submit-btns is--center ${_activeStyleVariant}`}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={`form__submit-btns--inner ${_activeStyleVariant}`}
                            tag="div"
                          >
                            <_Builtin.Link
                              className={`btn btn--form-next btn--form--v2 ${_activeStyleVariant}`}
                              button={false}
                              data-save-step="true"
                              block="inline"
                              options={{
                                href: "#",
                              }}
                            >
                              <_Builtin.Block
                                className={_activeStyleVariant}
                                tag="div"
                              >
                                {"Schedule Now"}
                              </_Builtin.Block>
                              <IconArrowRight2 />
                            </_Builtin.Link>
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={`form-steps__single ${_activeStyleVariant}`}
                      tag="div"
                      id="schedule-step-1"
                    >
                      <_Builtin.Block
                        className={`form__col ${_activeStyleVariant}`}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={`form__heading-wrap ${_activeStyleVariant}`}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={`popup-header-form ${_activeStyleVariant}`}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={`form__heading-title ${_activeStyleVariant}`}
                              tag="div"
                            >
                              <_Builtin.Heading
                                className={`h3 h3--bold outside-number is--hidden ${_activeStyleVariant}`}
                                tag="h2"
                              >
                                {"2 →"}
                              </_Builtin.Heading>
                              <_Builtin.Heading
                                className={`h4-new is--orange mb-8 ${_activeStyleVariant}`}
                                tag="h2"
                              >
                                {"Your Dream Closet is Just a Few Clicks Away"}
                              </_Builtin.Heading>
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={`body-xs fs-12 lh-150 ${_activeStyleVariant}`}
                              tag="div"
                            >
                              {
                                "Tell us just a little bit more about your space, and we’ll find you a local designer. No obligations, just inspiration!"
                              }
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={`form__group ${_activeStyleVariant}`}
                          tag="div"
                        >
                          <_Builtin.FormBlockLabel
                            className={`form__label ${_activeStyleVariant}`}
                            htmlFor="popup-form-Address"
                          >
                            {"Street Address"}
                          </_Builtin.FormBlockLabel>
                          <_Builtin.FormTextInput
                            className={`form__input form__input--address ${_activeStyleVariant}`}
                            name="Address"
                            maxLength={256}
                            data-name="Address"
                            placeholder="Address"
                            disabled={false}
                            type="text"
                            required={true}
                            autoFocus={false}
                            autoComplete="address-line1"
                            id="popup-form-Address"
                          />
                          <_Builtin.Block
                            className={`form__validation-msg ${_activeStyleVariant}`}
                            tag="div"
                          >
                            {"This field is required."}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={`form__group ${_activeStyleVariant}`}
                          tag="div"
                        >
                          <_Builtin.FormBlockLabel
                            className={`form__label ${_activeStyleVariant}`}
                            htmlFor="popup-form-Unit"
                          >
                            {"Apartment, Unit, Suite, etc."}
                          </_Builtin.FormBlockLabel>
                          <_Builtin.FormTextInput
                            className={`form__input form__input--unit ${_activeStyleVariant}`}
                            name="Unit"
                            maxLength={256}
                            data-name="Unit"
                            placeholder="Suite B"
                            disabled={false}
                            type="text"
                            required={false}
                            autoFocus={false}
                            autoComplete="address-line2"
                            id="popup-form-Unit"
                          />
                          <_Builtin.Block
                            className={`form__validation-msg ${_activeStyleVariant}`}
                            tag="div"
                          >
                            {"This field is required."}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={`form__col is--grid ${_activeStyleVariant}`}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={`form__group ${_activeStyleVariant}`}
                            id="w-node-_1f5c8066-7403-d296-58c4-374d10b710ba-32251f1b"
                            tag="div"
                          >
                            <_Builtin.FormBlockLabel
                              className={`form__label ${_activeStyleVariant}`}
                              htmlFor="popup-form-Country"
                            >
                              {"Country"}
                            </_Builtin.FormBlockLabel>
                            <_Builtin.FormSelect
                              className={`form__select ${_activeStyleVariant}`}
                              name="Country"
                              data-name="Country"
                              required={true}
                              multiple={false}
                              autoComplete="country"
                              id="popup-form-Country"
                              options={[
                                {
                                  t: "United States",
                                  v: "US",
                                },
                                {
                                  t: "Canada",
                                  v: "CA",
                                },
                              ]}
                            />
                            <_Builtin.Block
                              className={`form__validation-msg ${_activeStyleVariant}`}
                              tag="div"
                            >
                              {"This field is required."}
                            </_Builtin.Block>
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={`form__group ${_activeStyleVariant}`}
                            tag="div"
                          >
                            <_Builtin.FormBlockLabel
                              className={`form__label ${_activeStyleVariant}`}
                              htmlFor="popup-form-State"
                            >
                              {"State"}
                            </_Builtin.FormBlockLabel>
                            <_Builtin.FormSelect
                              className={`form__select ${_activeStyleVariant}`}
                              name="State"
                              data-name="State"
                              required={true}
                              multiple={false}
                              autoComplete="address-level1"
                              id="popup-form-State"
                              options={[
                                {
                                  t: "State",
                                  v: "",
                                },
                                {
                                  t: "Alabama",
                                  v: "AL",
                                },
                                {
                                  t: "Alaska",
                                  v: "AK",
                                },
                                {
                                  t: "American Samoa",
                                  v: "AS",
                                },
                                {
                                  t: "Arizona",
                                  v: "AZ",
                                },
                                {
                                  t: "Arkansas",
                                  v: "AR",
                                },
                                {
                                  t: "California",
                                  v: "CA",
                                },
                                {
                                  t: "Colorado",
                                  v: "CO",
                                },
                                {
                                  t: "Connecticut",
                                  v: "CT",
                                },
                                {
                                  t: "Delaware",
                                  v: "DE",
                                },
                                {
                                  t: "District of Columbia",
                                  v: "DC",
                                },
                                {
                                  t: "Florida",
                                  v: "FL",
                                },
                                {
                                  t: "Georgia",
                                  v: "GA",
                                },
                                {
                                  t: "Guam",
                                  v: "GU",
                                },
                                {
                                  t: "Hawaii",
                                  v: "HI",
                                },
                                {
                                  t: "Idaho",
                                  v: "ID",
                                },
                                {
                                  t: "Illinois",
                                  v: "IL",
                                },
                                {
                                  t: "Indiana",
                                  v: "IN",
                                },
                                {
                                  t: "Iowa",
                                  v: "IA",
                                },
                                {
                                  t: "Kansas",
                                  v: "KS",
                                },
                                {
                                  t: "Kentucky",
                                  v: "KY",
                                },
                                {
                                  t: "Louisiana",
                                  v: "LA",
                                },
                                {
                                  t: "Maine",
                                  v: "ME",
                                },
                                {
                                  t: "Maryland",
                                  v: "MD",
                                },
                                {
                                  t: "Massachusetts",
                                  v: "MA",
                                },
                                {
                                  t: "Michigan",
                                  v: "MI",
                                },
                                {
                                  t: "Minnesota",
                                  v: "MN",
                                },
                                {
                                  t: "Mississippi",
                                  v: "MS",
                                },
                                {
                                  t: "Missouri",
                                  v: "MO",
                                },
                                {
                                  t: "Montana",
                                  v: "MT",
                                },
                                {
                                  t: "Nebraska",
                                  v: "NE",
                                },
                                {
                                  t: "Nevada",
                                  v: "NV",
                                },
                                {
                                  t: "New Hampshire",
                                  v: "NH",
                                },
                                {
                                  t: "New Jersey",
                                  v: "NJ",
                                },
                                {
                                  t: "New Mexico",
                                  v: "NM",
                                },
                                {
                                  t: "New York",
                                  v: "NY",
                                },
                                {
                                  t: "North Carolina",
                                  v: "NC",
                                },
                                {
                                  t: "North Dakota",
                                  v: "ND",
                                },
                                {
                                  t: "Northern Mariana Islands",
                                  v: "MP",
                                },
                                {
                                  t: "Ohio",
                                  v: "OH",
                                },
                                {
                                  t: "Oklahoma",
                                  v: "OK",
                                },
                                {
                                  t: "Oregon",
                                  v: "OR",
                                },
                                {
                                  t: "Pennsylvania",
                                  v: "PA",
                                },
                                {
                                  t: "Puerto Rico",
                                  v: "PR",
                                },
                                {
                                  t: "Rhode Island",
                                  v: "RI",
                                },
                                {
                                  t: "South Carolina",
                                  v: "SC",
                                },
                                {
                                  t: "South Dakota",
                                  v: "SD",
                                },
                                {
                                  t: "Tennessee",
                                  v: "TN",
                                },
                                {
                                  t: "Texas",
                                  v: "TX",
                                },
                                {
                                  t: "Utah",
                                  v: "UT",
                                },
                                {
                                  t: "U.S. Virgin Islands",
                                  v: "VI",
                                },
                                {
                                  t: "Vermont",
                                  v: "VT",
                                },
                                {
                                  t: "Virginia",
                                  v: "VA",
                                },
                                {
                                  t: "Washington",
                                  v: "WA",
                                },
                                {
                                  t: "West Virginia",
                                  v: "WV",
                                },
                                {
                                  t: "Wisconsin",
                                  v: "WI",
                                },
                                {
                                  t: "Wyoming",
                                  v: "WY",
                                },
                                {
                                  t: "Armed Forces Americas",
                                  v: "AA",
                                },
                                {
                                  t: "Armed Forces Europe",
                                  v: "AE",
                                },
                                {
                                  t: "Armed Forces Pacific",
                                  v: "AP",
                                },
                              ]}
                            />
                            <_Builtin.Block
                              className={`form__validation-msg ${_activeStyleVariant}`}
                              tag="div"
                            >
                              {"This field is required."}
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={`form__col is--grid ${_activeStyleVariant}`}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={`form__group ${_activeStyleVariant}`}
                            tag="div"
                          >
                            <_Builtin.FormBlockLabel
                              className={`form__label ${_activeStyleVariant}`}
                              htmlFor="popup-form-City"
                            >
                              {"City"}
                            </_Builtin.FormBlockLabel>
                            <_Builtin.FormTextInput
                              className={`form__input ${_activeStyleVariant}`}
                              name="City"
                              maxLength={256}
                              data-name="City"
                              placeholder="City"
                              disabled={false}
                              type="text"
                              required={true}
                              autoFocus={false}
                              autoComplete="address-level2"
                              id="popup-form-City"
                            />
                            <_Builtin.Block
                              className={`form__validation-msg ${_activeStyleVariant}`}
                              tag="div"
                            >
                              {"This field is required."}
                            </_Builtin.Block>
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={`form__group ${_activeStyleVariant}`}
                            tag="div"
                          >
                            <_Builtin.FormBlockLabel
                              className={`form__label ${_activeStyleVariant}`}
                              htmlFor="popup-form-ZIP-Code"
                            >
                              {"ZIP Code"}
                            </_Builtin.FormBlockLabel>
                            <_Builtin.FormTextInput
                              className={`form__input form__input--zip ${_activeStyleVariant}`}
                              name="ZIP-Code"
                              maxLength="7"
                              data-name="ZIP Code"
                              placeholder="ZIP Code"
                              disabled={false}
                              type="text"
                              required={true}
                              autoFocus={false}
                              autoComplete="postal-code"
                              minLength="5"
                              id="popup-form-ZIP-Code"
                            />
                            <_Builtin.Block
                              className={`form__validation-msg ${_activeStyleVariant}`}
                              tag="div"
                            >
                              {"This field is required."}
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={`form__group ${_activeStyleVariant}`}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={`form__label-v2 form__label--visible lp-form__legend ${_activeStyleVariant}`}
                            tag="div"
                          >
                            {"Area(s) of Interest"}
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={`form__checkbox-group in--multistep is--v2 gap-4 ${_activeStyleVariant}`}
                            tag="div"
                          >
                            <_Builtin.FormCheckboxWrapper
                              className={`form__checkbox is--multi form__checkbox--v2 ${_activeStyleVariant}`}
                              id="w-node-_1f5c8066-7403-d296-58c4-374d10b710d7-32251f1b"
                            >
                              <_Builtin.FormCheckboxInput
                                className={`form__checkbox-input form__checkbox-input__v2 is--multi ${_activeStyleVariant}`}
                                type="checkbox"
                                name="Interests-Closet"
                                data-name="Interests Closet"
                                required={false}
                                checked={false}
                                data-value="1"
                                id="popup-form-Interests-Closet"
                                form={{
                                  type: "checkbox-input",
                                  name: "Interests Closet",
                                }}
                                inputType="default"
                              />
                              <_Builtin.Block
                                className={`form__checkbox-number is--v2 ${_activeStyleVariant}`}
                                id="w-node-_1f5c8066-7403-d296-58c4-374d10b710d9-32251f1b"
                                tag="div"
                              >
                                {"1"}
                              </_Builtin.Block>
                              <_Builtin.FormInlineLabel
                                className={`form__checkbox-label is--v2 ${_activeStyleVariant}`}
                              >
                                {"Closet"}
                              </_Builtin.FormInlineLabel>
                            </_Builtin.FormCheckboxWrapper>
                            <_Builtin.FormCheckboxWrapper
                              className={`form__checkbox is--multi form__checkbox--v2 ${_activeStyleVariant}`}
                            >
                              <_Builtin.FormCheckboxInput
                                className={`form__checkbox-input form__checkbox-input__v2 is--multi ${_activeStyleVariant}`}
                                type="checkbox"
                                name="Interests-Garage"
                                data-name="Interests Garage"
                                required={false}
                                checked={false}
                                data-value="2"
                                id="popup-form-Interests-Garage"
                                form={{
                                  type: "checkbox-input",
                                  name: "Interests Garage",
                                }}
                                inputType="default"
                              />
                              <_Builtin.Block
                                className={`form__checkbox-number is--v2 ${_activeStyleVariant}`}
                                id="w-node-_1f5c8066-7403-d296-58c4-374d10b710df-32251f1b"
                                tag="div"
                              >
                                {"2"}
                              </_Builtin.Block>
                              <_Builtin.FormInlineLabel
                                className={`form__checkbox-label is--v2 ${_activeStyleVariant}`}
                              >
                                {"Garage"}
                              </_Builtin.FormInlineLabel>
                            </_Builtin.FormCheckboxWrapper>
                            <_Builtin.FormCheckboxWrapper
                              className={`form__checkbox is--multi form__checkbox--v2 ${_activeStyleVariant}`}
                            >
                              <_Builtin.FormCheckboxInput
                                className={`form__checkbox-input form__checkbox-input__v2 is--multi ${_activeStyleVariant}`}
                                type="checkbox"
                                name="Interests-Home-Office"
                                data-name="Interests Home Office"
                                required={false}
                                checked={false}
                                data-value="3"
                                id="popup-form-Interests-Home-Office"
                                form={{
                                  type: "checkbox-input",
                                  name: "Interests Home Office",
                                }}
                                inputType="default"
                              />
                              <_Builtin.Block
                                className={`form__checkbox-number is--v2 ${_activeStyleVariant}`}
                                id="w-node-_1f5c8066-7403-d296-58c4-374d10b710e5-32251f1b"
                                tag="div"
                              >
                                {"3"}
                              </_Builtin.Block>
                              <_Builtin.FormInlineLabel
                                className={`form__checkbox-label is--v2 ${_activeStyleVariant}`}
                              >
                                {"Home Office"}
                              </_Builtin.FormInlineLabel>
                            </_Builtin.FormCheckboxWrapper>
                            <_Builtin.FormCheckboxWrapper
                              className={`form__checkbox is--multi form__checkbox--v2 ${_activeStyleVariant}`}
                            >
                              <_Builtin.FormCheckboxInput
                                className={`form__checkbox-input form__checkbox-input__v2 is--multi ${_activeStyleVariant}`}
                                type="checkbox"
                                name="Interests-Pantry"
                                data-name="Interests Pantry"
                                required={false}
                                checked={false}
                                data-value="4"
                                id="popup-form-Interests-Pantry"
                                form={{
                                  type: "checkbox-input",
                                  name: "Interests Pantry",
                                }}
                                inputType="default"
                              />
                              <_Builtin.Block
                                className={`form__checkbox-number is--v2 ${_activeStyleVariant}`}
                                id="w-node-_1f5c8066-7403-d296-58c4-374d10b710eb-32251f1b"
                                tag="div"
                              >
                                {"4"}
                              </_Builtin.Block>
                              <_Builtin.FormInlineLabel
                                className={`form__checkbox-label is--v2 ${_activeStyleVariant}`}
                              >
                                {"Pantry"}
                              </_Builtin.FormInlineLabel>
                            </_Builtin.FormCheckboxWrapper>
                            <_Builtin.FormCheckboxWrapper
                              className={`form__checkbox is--multi form__checkbox--v2 ${_activeStyleVariant}`}
                            >
                              <_Builtin.FormCheckboxInput
                                className={`form__checkbox-input form__checkbox-input__v2 is--multi ${_activeStyleVariant}`}
                                type="checkbox"
                                name="Interests-Laundry"
                                data-name="Interests Laundry"
                                required={false}
                                checked={false}
                                data-value="5"
                                id="popup-form-Interests-Laundry"
                                form={{
                                  type: "checkbox-input",
                                  name: "Interests Laundry",
                                }}
                                inputType="default"
                              />
                              <_Builtin.Block
                                className={`form__checkbox-number is--v2 ${_activeStyleVariant}`}
                                id="w-node-_1f5c8066-7403-d296-58c4-374d10b710f1-32251f1b"
                                tag="div"
                              >
                                {"5"}
                              </_Builtin.Block>
                              <_Builtin.FormInlineLabel
                                className={`form__checkbox-label is--v2 ${_activeStyleVariant}`}
                              >
                                {"Laundry"}
                              </_Builtin.FormInlineLabel>
                            </_Builtin.FormCheckboxWrapper>
                            <_Builtin.FormCheckboxWrapper
                              className={`form__checkbox is--multi form__checkbox--v2 ${_activeStyleVariant}`}
                            >
                              <_Builtin.FormCheckboxInput
                                className={`form__checkbox-input form__checkbox-input__v2 is--multi ${_activeStyleVariant}`}
                                type="checkbox"
                                name="Interests-Wall-Bed"
                                data-name="Interests Wall Bed"
                                required={false}
                                checked={false}
                                data-value="6"
                                id="popup-form-Interests-Wall-Bed"
                                form={{
                                  type: "checkbox-input",
                                  name: "Interests Wall Bed",
                                }}
                                inputType="default"
                              />
                              <_Builtin.Block
                                className={`form__checkbox-number is--v2 ${_activeStyleVariant}`}
                                id="w-node-_1f5c8066-7403-d296-58c4-374d10b710f7-32251f1b"
                                tag="div"
                              >
                                {"6"}
                              </_Builtin.Block>
                              <_Builtin.FormInlineLabel
                                className={`form__checkbox-label is--v2 ${_activeStyleVariant}`}
                              >
                                {"Wall Bed"}
                              </_Builtin.FormInlineLabel>
                            </_Builtin.FormCheckboxWrapper>
                            <_Builtin.FormCheckboxWrapper
                              className={`form__checkbox is--multi form__checkbox--v2 ${_activeStyleVariant}`}
                            >
                              <_Builtin.FormCheckboxInput
                                className={`form__checkbox-input form__checkbox-input__v2 is--multi ${_activeStyleVariant}`}
                                type="checkbox"
                                name="Interests-Sliding-Door"
                                data-name="Interests Sliding Door"
                                required={false}
                                checked={false}
                                data-value="7"
                                id="popup-form-Interests-Sliding-Door"
                                form={{
                                  type: "checkbox-input",
                                  name: "Interests Sliding Door",
                                }}
                                inputType="default"
                              />
                              <_Builtin.Block
                                className={`form__checkbox-number is--v2 ${_activeStyleVariant}`}
                                id="w-node-_1f5c8066-7403-d296-58c4-374d10b710fd-32251f1b"
                                tag="div"
                              >
                                {"7"}
                              </_Builtin.Block>
                              <_Builtin.FormInlineLabel
                                className={`form__checkbox-label is--v2 ${_activeStyleVariant}`}
                              >
                                {"Sliding Door"}
                              </_Builtin.FormInlineLabel>
                            </_Builtin.FormCheckboxWrapper>
                            <_Builtin.FormCheckboxWrapper
                              className={`form__checkbox is--multi form__checkbox--v2 ${_activeStyleVariant}`}
                            >
                              <_Builtin.FormCheckboxInput
                                className={`form__checkbox-input form__checkbox-input__v2 is--multi ${_activeStyleVariant}`}
                                type="checkbox"
                                name="Interests-Other"
                                data-name="Interests Other"
                                required={false}
                                checked={false}
                                data-value="8"
                                id="popup-form-Interests-Other"
                                form={{
                                  type: "checkbox-input",
                                  name: "Interests Other",
                                }}
                                inputType="default"
                              />
                              <_Builtin.Block
                                className={`form__checkbox-number is--v2 ${_activeStyleVariant}`}
                                id="w-node-_1f5c8066-7403-d296-58c4-374d10b71103-32251f1b"
                                tag="div"
                              >
                                {"8"}
                              </_Builtin.Block>
                              <_Builtin.FormInlineLabel
                                className={`form__checkbox-label is--v2 ${_activeStyleVariant}`}
                              >
                                {"Other"}
                              </_Builtin.FormInlineLabel>
                            </_Builtin.FormCheckboxWrapper>
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={`form__validation-msg ${_activeStyleVariant}`}
                            tag="div"
                          >
                            {"This field is required."}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={`form__group ${_activeStyleVariant}`}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={`form__label-v2 form__label--visible lp-form__legend mb-0 ${_activeStyleVariant}`}
                            tag="div"
                          >
                            {"Set Your Appointment"}
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={`form__time-info is--v2 lh-24 ${_activeStyleVariant}`}
                            tag="div"
                          >
                            {
                              "Times are displayed in the entered address's time zone."
                            }
                          </_Builtin.Block>
                          <_Builtin.FormBlockLabel
                            className={`form__label ${_activeStyleVariant}`}
                            htmlFor="popup-form-First-Choice-Date"
                          >
                            {"First Choice Date"}
                          </_Builtin.FormBlockLabel>
                          <_Builtin.FormTextInput
                            className={`form__input form__input--date ${_activeStyleVariant}`}
                            name="First-Choice-Date"
                            maxLength={256}
                            data-name="First Choice Date"
                            placeholder="mm/dd/yyyy"
                            disabled={false}
                            type="text"
                            required={true}
                            autoFocus={false}
                            id="popup-form-First-Choice-Date"
                          />
                          <_Builtin.Block
                            className={`form__validation-msg ${_activeStyleVariant}`}
                            tag="div"
                          >
                            {"This field is required."}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={`form__group ${_activeStyleVariant}`}
                          tag="div"
                        >
                          <_Builtin.FormBlockLabel
                            className={`form__label ${_activeStyleVariant}`}
                            htmlFor="popup-form-First-Choice-Time"
                          >
                            {"First Choice Time"}
                          </_Builtin.FormBlockLabel>
                          <_Builtin.FormSelect
                            className={`form__select form__select__v2 ${_activeStyleVariant}`}
                            name="First-Choice-Time"
                            data-name="First Choice Time"
                            required={true}
                            multiple={false}
                            form__select--time=""
                            id="popup-form-First-Choice-Time"
                            options={[
                              {
                                t: "Time",
                                v: "",
                              },
                              {
                                t: "10:00 am",
                                v: "10:00:00",
                              },
                              {
                                t: "1:00 pm",
                                v: "13:00:00",
                              },
                              {
                                t: "4:00 pm",
                                v: "16:00:00",
                              },
                              {
                                t: "Other",
                                v: "Other",
                              },
                            ]}
                          />
                          <_Builtin.Block
                            className={`form__validation-msg ${_activeStyleVariant}`}
                            tag="div"
                          >
                            {"This field is required."}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={`form__group hidden ${_activeStyleVariant}`}
                          tag="div"
                        >
                          <_Builtin.FormBlockLabel
                            className={`form__label form__label--visible ${_activeStyleVariant}`}
                            htmlFor="popup-form-Comments"
                          >
                            {"Comments"}
                          </_Builtin.FormBlockLabel>
                          <_Builtin.FormTextarea
                            className={`form__textarea ${_activeStyleVariant}`}
                            name="Comments"
                            maxLength={5000}
                            data-name="Comments"
                            required={false}
                            autoFocus={false}
                            id="popup-form-Comments"
                          />
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={`form__submit is--center gap-1 mt-2 ${_activeStyleVariant}`}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={`form__validation-msg ${_activeStyleVariant}`}
                          tag="div"
                        >
                          {
                            "There are errors in the form. Please check all the fields and try to submit it again."
                          }
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={`form__submit-btns is--center ${_activeStyleVariant}`}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={`form__submit-btns--inner ${_activeStyleVariant}`}
                            tag="div"
                          >
                            <_Builtin.Link
                              className={`btn btn--form btn--form-submit btn--form--v2 ${_activeStyleVariant}`}
                              button={true}
                              block=""
                              options={{
                                href: "#",
                              }}
                            >
                              <_Builtin.Span>
                                {"Confirm Appointment"}
                              </_Builtin.Span>
                            </_Builtin.Link>
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={`subtitle fs-12 ${_activeStyleVariant}`}
                          tag="div"
                        >
                          {
                            "*By submitting this request you acknowledge having read and agreeing to our "
                          }
                          <_Builtin.Link
                            className={`body-link text-color--primary ${_activeStyleVariant}`}
                            button={false}
                            block=""
                            options={{
                              href: "/terms-and-conditions",
                              target: "_blank",
                            }}
                          >
                            {"Terms & Conditions"}
                          </_Builtin.Link>
                          {" and "}
                          <_Builtin.Link
                            className={`body-link text-color--primary ${_activeStyleVariant}`}
                            button={false}
                            block=""
                            options={{
                              href: "/privacy-policy",
                              target: "_blank",
                            }}
                          >
                            {"Privacy Policy"}
                          </_Builtin.Link>
                          {". "}
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.HtmlEmbed
                  className={`hidden-html ${_activeStyleVariant}`}
                  value="%3Cinput%20type%3D%22hidden%22%20id%3D%22popup-form-Location-ID%22%20name%3D%22Location-ID%22%20value%3D%220%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22popup-form-Status-ID%22%20name%3D%22Status-ID%22%20value%3D%221%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22popup-form-Marketing-Code%22%20name%3D%22Marketing-Code%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22popup-form-Request-URL%22%20name%3D%22Request-URL%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22popup-form-HTTP-Referrer%22%20name%3D%22HTTP-Referrer%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22popup-form-Landing-URL%22%20name%3D%22Landing-URL%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22popup-form-Client-IP%22%20name%3D%22Client-IP%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22popup-form-Form-Emails%22%20name%3D%22Form-Emails%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22popup-form-Interests-Label%22%20name%3D%22Interests-Label%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22popup-form-Domain-Name%22%20name%3D%22Domain-Name%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22popup-form-Form-Guid%22%20name%3D%22Form-Guid%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22popup-form-Test-Entry%22%20name%3D%22Test-Entry%22%20value%3D%22false%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22popup-form-Form-Id%22%20name%3D%22Form-ID%22%20value%3D%225%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22popup-form-Corporate%22%20name%3D%22Corporate%22%20value%3D%22true%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22popup-form-Service%22%20name%3D%22Service%22%20value%3D%22true%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22popup-form-Language-ID%22%20name%3D%22Language-ID%22%20value%3D%22en%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22popup-form-Browser-ID%22%20name%3D%22Browser-ID%22%20value%3E%0A%3C!--%20URL%20Parameters%20--%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22popup-form-Parameter-utm_source%22%20name%3D%22Parameter-utm_source%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22popup-form-Parameter-utm_medium%22%20name%3D%22Parameter-utm_medium%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22popup-form-Parameter-utm_campaign%22%20name%3D%22Parameter-utm_campaign%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22popup-form-Parameter-utm_content%22%20name%3D%22Parameter-utm_content%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22popup-form-Parameter-utm_term%22%20name%3D%22Parameter-utm_term%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22popup-form-Parameter-match_type%22%20name%3D%22Parameter-match_type%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22popup-form-Parameter-network%22%20name%3D%22Parameter-network%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22popup-form-Parameter-device%22%20name%3D%22Parameter-device%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22popup-form-Parameter-loc_physical%22%20name%3D%22Parameter-loc_physical%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22popup-form-Parameter-creative%22%20name%3D%22Parameter-creative%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22popup-form-Parameter-gbraid%22%20name%3D%22Parameter-gbraid%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22popup-form-Parameter-wbraid%22%20name%3D%22Parameter-wbraid%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22popup-form-Parameter-gclid%22%20name%3D%22Parameter-gclid%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22popup-form-Parameter-msclkid%22%20name%3D%22Parameter-msclkid%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22popup-form-Parameter-term%22%20name%3D%22Parameter-term%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22popup-form-Parameter-id%22%20name%3D%22Parameter-id%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22popup-form-Parameter-adset%22%20name%3D%22Parameter-adset%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22popup-form-Parameter-fbclid%22%20name%3D%22Parameter-fbclid%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22popup-form-Parameter-utm_id%22%20name%3D%22Parameter-utm_id%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22popup-form-Parameter-epik%22%20name%3D%22Parameter-epik%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22popup-form-Parameter-cto_pld%22%20name%3D%22Parameter-cto_pld%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22popup-form-Parameter-cta%22%20name%3D%22Parameter-cta%22%20value%3E"
                />
              </_Builtin.FormForm>
              <_Builtin.FormSuccessMessage
                className={`popup-success ${_activeStyleVariant}`}
              >
                <_Builtin.Block
                  className={`h1 popup-success ${_activeStyleVariant}`}
                  tag="div"
                >
                  {"Thank You!"}
                </_Builtin.Block>
                <_Builtin.Block tag="div">
                  {
                    "We’ll give you a call in just a few moments to confirm your appointment."
                  }
                </_Builtin.Block>
              </_Builtin.FormSuccessMessage>
              <_Builtin.FormErrorMessage>
                <_Builtin.Block tag="div">
                  {"Oops! Something went wrong while submitting the form."}
                </_Builtin.Block>
              </_Builtin.FormErrorMessage>
            </_Builtin.FormWrapper>
          </_Builtin.Block>
          <_Builtin.Block
            className={`popup-lighbox-close ${_activeStyleVariant}`}
            id="w-node-_1f5c8066-7403-d296-58c4-374d10b71136-32251f1b"
            tag="div"
          >
            <_Builtin.HtmlEmbed value="%3Csvg%20width%3D%2221%22%20height%3D%2220%22%20viewBox%3D%220%200%2021%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M15.9731%205L5.97229%2015.0009%22%20stroke%3D%22%231A1A1A%22%20stroke-width%3D%221.66678%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3Cpath%20d%3D%22M5.97229%205L15.9731%2015.0009%22%20stroke%3D%22%231A1A1A%22%20stroke-width%3D%221.66678%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E" />
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={`modal-v2 summer-modal ${_activeStyleVariant}`}
        tag="div"
      >
        <_Builtin.Block
          className={`summer-modal__inner ${_activeStyleVariant}`}
          tag="div"
        >
          <_Builtin.Block
            className={`modal-v2__close summer-modal__close ${_activeStyleVariant}`}
            tag="div"
          >
            <_Builtin.HtmlEmbed
              className={`svg-icon ${_activeStyleVariant}`}
              value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2214%22%20height%3D%2214%22%20viewBox%3D%220%200%2014%2014%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20d%3D%22M13.0001%201L1.00012%2013%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.6%22%20stroke-miterlimit%3D%2210%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M13.0004%2013L1.00037%201%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.6%22%20stroke-miterlimit%3D%2210%22%2F%3E%0A%3C%2Fsvg%3E"
            />
          </_Builtin.Block>
          <_Builtin.Block
            className={`summer-modal__left ${_activeStyleVariant}`}
            tag="div"
          >
            <_Builtin.Image
              className={`summer-modal__image ${_activeStyleVariant}`}
              width="auto"
              height="auto"
              loading="lazy"
              alt=""
              src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/687149ddb826e13bdbe63039_Frame%202072750501%20(1).webp"
            />
          </_Builtin.Block>
          <_Builtin.Block
            className={`summer-modal__right ${_activeStyleVariant}`}
            tag="div"
          >
            <_Builtin.Block
              className={`summer-modal__right__content ${_activeStyleVariant}`}
              tag="div"
            >
              <_Builtin.Block
                className={`h6-v2 color-heading-v2 weight--medium mobile-h6-smaller ${_activeStyleVariant}`}
                tag="div"
              >
                {"Get your "}
                <br />
                <_Builtin.Span className={`is--red-v2 ${_activeStyleVariant}`}>
                  <_Builtin.Strong>{"FREE"}</_Builtin.Strong>
                </_Builtin.Span>
                {" Summer Organization Board!"}
              </_Builtin.Block>
              <_Builtin.Block
                className={`h10-v2 color-heading-v2 lh-200 ${_activeStyleVariant}`}
                tag="div"
              >
                {"Make organizing fun, fast, and family-friendly"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.HtmlEmbed
              className={`_w-100 ${_activeStyleVariant}`}
              value="%3Cstyle%3E%0A.klaviyo-form%20%3E%20.needsclick.kl-private-reset-css-Xuajs1%20%7B%0A%20%20flex-direction%3A%20column%3B%0A%20%20flex-wrap%3A%20wrap%3B%0A%20%20width%3A%20100%25%3B%0A%20%20gap%3A%200%3B%0A%20%20padding%3A%200%20!important%3B%0A%20%20margin%3A%200%20!important%3B%0A%20%20min-width%3A%20100%25%3B%0A%7D%0A.klaviyo-form%20input%20%7B%0A%20%20background%3A%20transparent%20!important%3B%0A%20%20border-radius%3A%2070px%20!important%3B%0A%20%20border-color%3A%20%2335526A%20!important%3B%0A%20%20padding%3A%200.25rem%201rem%20!important%3B%0A%20%20font-size%3A%2016px%20!important%3B%0A%20%20color%3A%20%2335526A%20!important%3B%0A%20%20margin-bottom%3A%208px%20!important%3B%0A%20%20font-family%3A%20Avenir%2C%20Arial%2C%20sans-serif%20!important%3B%0A%20%20line-height%3A%20150%25%20!important%3B%0A%20%20height%3A%2044px%20!important%3B%0A%20%20text-align%3A%20center%20!%20important%3B%0A%20%20font-weight%3A%20500%20!important%3B%0A%7D%0A.klaviyo-form%20input%3A%3Aplaceholder%20%7B%0A%20%20text-align%3A%20center%20!%20important%3B%0A%20%20font-family%3A%20Avenir%2C%20Arial%2C%20sans-serif%20!important%3B%0A%20%20font-size%3A%2016px%20!important%3B%0A%20%20color%3A%20%2335526A%20!important%3B%0A%20%20font-weight%3A%20500%20!important%3B%0A%7D%0A.klaviyo-form%20button%20%7B%0A%20%20font-family%3A%20Avenir%2C%20Arial%2C%20sans-serif%20!important%3B%0A%20%20font-size%3A%2016px%20!important%3B%0A%20%20font-weight%3A%20900%20!important%3B%0A%20%20transition%3A%20background-color%20.15s%20ease-in-out%3B%0A%7D%0Ainput.needsclick.kl-private-reset-css-Xuajs1%20%7B%0A%20%20margin-bottom%3A%208px%20!important%3B%0A%7D%0Abutton.needsclick.go300628013.kl-private-reset-css-Xuajs1%3Ahover%20%7B%0A%20%20background-color%3A%20var(--dark-black-v2)%20!important%3B%0A%7D%0A%0Adiv%5Bdata-testid%3D%22form-row%22%5D%3Afirst-child%20p%20span%7B%0A%20%20font-family%3A%20Avenir%2C%20Arial%2C%20sans-serif%20!important%3B%0A%20%20font-weight%3A%20900%20!important%3B%0A%20%20margin-bottom%3A%208px%20!important%3B%0A%20%20display%3A%20block%3B%0A%20%20line-height%3A%201.5%20!important%3B%0A%20%20color%3A%20%2335526A%20!important%3B%0A%20%20text-align%3A%20center%20!important%3B%0A%20%20font-size%3A%202rem%20!important%3B%0A%7D%0A.klaviyo-form%20p%20span%20%7B%0A%20%20color%3A%20var(--heading-color-v2)%20!important%3B%0A%20%20font-weight%3A%20500%20!important%3B%0A%20%20font-size%3A%201rem%20!important%3B%0A%20%20text-align%3A%20center%20!important%3B%0A%20%20line-height%3A%20200%25%3B%0A%20%20font-family%3A%20Avenir%2C%20Arial%2C%20sans-serif%20!important%3B%0A%7D%0A.summer-modal__right.is-center%20%7B%0A%20%20justify-content%3A%20center%3B%0A%7D%0A.summer-modal__right__content.hidden%20%7B%0A%20%20display%3A%20none%3B%0A%7D%0A%40media%20screen%20and%20(max-width%3A%20767px)%20%7B%0A%20%20div%5Bdata-testid%3D%22form-row%22%5D%3Afirst-child%20p%20span%7B%0A%20%20%20%20font-size%3A%201.25rem%20!important%3B%0A%20%20%7D%0A%7D%0A%3C%2Fstyle%3E%0A%0A%3Cdiv%20class%3D%22klaviyo-form-Vsu8wX%22%3E%3C%2Fdiv%3E%0A%0A%3Cscript%3E%0A%20%20%20%20window.addEventListener(%22klaviyoForms%22%2C%20function(e)%20%7B%20%0A%20%20%20%20%20%20%20%20if%20(e.detail.type%20%3D%3D%20'submit')%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20summerModalContent%20%3D%20document.querySelector('.summer-modal__right__content')%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20summerModalRight%20%3D%20document.querySelector('.summer-modal__right')%3B%0A%09%09%09%09%09%09summerModalContent.classList.add('hidden')%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20summerModalRight.classList.add('is-center')%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20console.log('submit%3F'%2C%20summerModalContent)%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D)%3B%0A%3C%2Fscript%3E"
            />
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
