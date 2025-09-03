"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { IconArrowRight2 } from "./IconArrowRight2";

export function PdpHeroStaticV2({
  as: _Component = _Builtin.Section,
  backgroundImage = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/678778cb2c5c35b739aed390_MAIN%20PANO%20(HERO%20BANNER).webp",
  title = "Walk-in to luxury everyday.",
  text = "Customize your walk-in closet.",

  buttonLink = {
    href: "#",
  },

  imageVisibility = true,
  videoVisibility = true,
  videoEmbed = '<video class="hero-static-v2__video" autoplay="" loop="" muted="" playsinline="" data-wf-ignore="true" data-object-fit="cover">\n<source src="https://r2.vidzflow.com/v/NK2Xv38VQ9_1080p_1738319950.mp4" data-wf-ignore="true">\n</video>',
  formVisibility = true,
  buttonVisibility = false,
  bgImageAltText = "__wf_reserved_inherit",
  subheading = false,
  subheadingText = "Fire Resources",
  variant = "Base",
}) {
  const _styleVariantMap = {
    Base: "",
    Wide: "w-variant-0824a29a-81b7-dccc-25db-b5fa00099a52",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component
      className={`hero-static-v2 section-anchor-v2 ${_activeStyleVariant}`}
      grid={{
        type: "section",
      }}
      tag="section"
      id="overview"
    >
      <_Builtin.HtmlEmbed
        className={`hidden-code ${_activeStyleVariant}`}
        value="%3Cstyle%3E%0A%0A.hero-static-v2%20%7B%0A%09background-color%3A%20var(--off-white-v2)%3B%0A%09%2F*%20min-height%3A%20calc(100vh%20-%202%20*%20var(--header-height))%3B%20*%2F%0A%7D%0A%0A.form__input-transparent%3A%3Aplaceholder%20%7B%0A%20%20color%3A%20white%3B%0A%7D%0A.form__input-transparent%3A-ms-input-placeholder%20%7B%0A%09color%3A%20white%3B%0A%7D%0A.form__input-transparent%3A%3A-ms-input-placeholder%20%7B%0A%20%20color%3A%20white%3B%0A%7D%0A%0A%3C%2Fstyle%3E%0A%0A%3Cscript%3E%0Avar%20Webflow%20%3D%20Webflow%20%7C%7C%20%5B%5D%3B%0AWebflow.push(function%20()%20%7B%0A%20%20%2F%2F%20Select%20all%20buttons%20that%20match%20.hero-static-v2__form-submit-btn%0A%20%20document.querySelectorAll('.hero-static-v2__form-submit-btn').forEach((button)%20%3D%3E%20%7B%0A%20%20%20%20button.addEventListener('click'%2C%20function(event)%20%7B%0A%20%20%20%20%20%20event.preventDefault()%3B%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20%2F%2F%20If%20they%20all%20go%20to%20the%20same%20form%3A%0A%20%20%20%20%20%20const%20form%20%3D%20document.getElementById('wf-form-Newsletter-Hero')%3B%0A%20%20%20%20%20%20const%20submitButton%20%3D%20form.querySelector('.form-submit__hidden')%3B%0A%0A%20%20%20%20%20%20if%20(submitButton)%20%7B%0A%20%20%20%20%20%20%20%20submitButton.click()%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D)%3B%0A%20%20%7D)%3B%0A%20%20%0A%20%20const%20form%20%3D%20document.getElementById('wf-form-Newsletter-Hero')%3B%0A%20%20if(form)%20%7B%0A%20%20%09form.addEventListener('keydown'%2C%20function%20(event)%20%7B%0A%20%20%20%20%20%20if%20(event.key%20%3D%3D%3D%20'Enter')%20%7B%0A%20%20%20%20%20%20%20%20event.preventDefault()%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D)%3B%0A%20%20%7D%0A%7D)%3B%0A%0A%3C%2Fscript%3E"
      />
      {imageVisibility ? (
        <_Builtin.Image
          className={`hero-static-v2__bg-image ${_activeStyleVariant}`}
          loading="lazy"
          width="auto"
          height="auto"
          src={backgroundImage}
        />
      ) : null}
      {imageVisibility ? (
        <_Builtin.Block
          className={`hero-static-v2__overlay ${_activeStyleVariant}`}
          tag="div"
        />
      ) : null}
      <_Builtin.Block
        className={`hero-static-v2__content ${_activeStyleVariant}`}
        tag="div"
      >
        {subheading ? (
          <_Builtin.Block
            className={`hero-static-v2__subheading ${_activeStyleVariant}`}
            tag="div"
          >
            <_Builtin.Block
              className={`subheading-v2 is--white-v2 ${_activeStyleVariant}`}
              tag="div"
            >
              {subheadingText}
            </_Builtin.Block>
          </_Builtin.Block>
        ) : null}
        <_Builtin.Heading
          className={`h1-v2 is--white-v2 ${_activeStyleVariant}`}
          tag="h1"
        >
          {title}
        </_Builtin.Heading>
        <_Builtin.Block
          className={`hero-static-v2__cta ${_activeStyleVariant}`}
          tag="div"
        >
          <_Builtin.Block
            className={`h4-v2 is--white-v2 ${_activeStyleVariant}`}
            tag="div"
          >
            {text}
          </_Builtin.Block>
          {formVisibility ? (
            <_Builtin.Block
              className={`hero-static-v2__form-box ${_activeStyleVariant}`}
              tag="div"
            >
              <_Builtin.Block
                className={`h8-v2 is--white-v2 ${_activeStyleVariant}`}
                tag="div"
              >
                {"Organize your home today!"}
              </_Builtin.Block>
              {formVisibility ? (
                <_Builtin.Block
                  className={`hero-static-v2__form-wrap ${_activeStyleVariant}`}
                  tag="div"
                >
                  <_Builtin.FormWrapper
                    className={`hero-static-v2__form-block ${_activeStyleVariant}`}
                  >
                    <_Builtin.FormForm
                      className={`hero-static-v2__form-wrap ${_activeStyleVariant}`}
                      name="wf-form-Newsletter-Hero"
                      data-name="Newsletter Hero"
                      method="get"
                      id="wf-form-Newsletter-Hero"
                    >
                      <_Builtin.Block
                        className={`hero-static-v2__form ${_activeStyleVariant}`}
                        tag="div"
                      >
                        <_Builtin.FormTextInput
                          className={`form__input-transparent hero-static-v2__form__input form__input form__input--email ${_activeStyleVariant}`}
                          name="Email"
                          maxLength={256}
                          data-name="Email"
                          placeholder="youremail@example.com"
                          disabled={false}
                          type="email"
                          required={true}
                          autoFocus={false}
                          id="Email"
                        />
                        <_Builtin.Block
                          className={`hero-static-v2__form-submit ${_activeStyleVariant}`}
                          tag="div"
                        >
                          <_Builtin.Link
                            className={`btn-v2 btn-v2--secondary is--white hiddenn-mobile ${_activeStyleVariant}`}
                            button={false}
                            block="inline"
                            options={{
                              href: "/schedulerequests-ms",
                            }}
                          >
                            <_Builtin.Block tag="div">
                              {"Start Now"}
                            </_Builtin.Block>
                            <IconArrowRight2 />
                          </_Builtin.Link>
                          <_Builtin.FormButton
                            className={`form-submit__hidden ${_activeStyleVariant}`}
                            type="submit"
                            value="Submit"
                            data-wait="Please wait..."
                          />
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Link
                        className={`btn-v2 btn-v2--secondary is--white hidden-desktop ${_activeStyleVariant}`}
                        button={false}
                        block="inline"
                        options={{
                          href: "/schedulerequests-ms",
                        }}
                      >
                        <_Builtin.Block tag="div">{"Start Now"}</_Builtin.Block>
                        <IconArrowRight2 />
                      </_Builtin.Link>
                      <_Builtin.HtmlEmbed
                        className={`hidden-html ${_activeStyleVariant}`}
                        value="%3Cinput%20type%3D%22hidden%22%20id%3D%22hero-pdp-form-Marketing-Code%22%20name%3D%22Marketing-Code%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22hero-pdp-form-Request-URL%22%20name%3D%22Request-URL%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22hero-pdp-form-HTTP-Referrer%22%20name%3D%22HTTP-Referrer%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22hero-pdp-form-Landing-URL%22%20name%3D%22Landing-URL%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22hero-pdp-form-Client-IP%22%20name%3D%22Client-IP%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22hero-pdp-form-Test-Entry%22%20name%3D%22Test-Entry%22%20value%3D%22false%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22hero-pdp-form-Language-ID%22%20name%3D%22Language-ID%22%20value%3D%22en%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22hero-pdp-form-Form-ID%22%20name%3D%22Form-ID%22%20value%3D%2211%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22hero-pdp-form-Domain-Name%22%20name%3D%22Domain-Name%22%20value%3E%0A%3C!--%20URL%20Parameters%20--%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22hero-pdp-form-Parameter-utm_source%22%20name%3D%22Parameter-utm_source%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22hero-pdp-form-Parameter-utm_medium%22%20name%3D%22Parameter-utm_medium%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22hero-pdp-form-Parameter-utm_campaign%22%20name%3D%22Parameter-utm_campaign%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22hero-pdp-form-Parameter-utm_content%22%20name%3D%22Parameter-utm_content%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22hero-pdp-form-Parameter-utm_term%22%20name%3D%22Parameter-utm_term%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22hero-pdp-form-Parameter-match_type%22%20name%3D%22Parameter-match_type%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22hero-pdp-form-Parameter-network%22%20name%3D%22Parameter-network%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22hero-pdp-form-Parameter-device%22%20name%3D%22Parameter-device%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22hero-pdp-form-Parameter-loc_physical%22%20name%3D%22Parameter-loc_physical%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22hero-pdp-form-Parameter-creative%22%20name%3D%22Parameter-creative%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22hero-pdp-form-Parameter-gbraid%22%20name%3D%22Parameter-gbraid%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22hero-pdp-form-Parameter-wbraid%22%20name%3D%22Parameter-wbraid%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22hero-pdp-form-Parameter-gclid%22%20name%3D%22Parameter-gclid%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22hero-pdp-form-Parameter-msclkid%22%20name%3D%22Parameter-msclkid%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22hero-pdp-form-Parameter-term%22%20name%3D%22Parameter-term%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22hero-pdp-form-Parameter-id%22%20name%3D%22Parameter-id%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22hero-pdp-form-Parameter-adset%22%20name%3D%22Parameter-adset%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22hero-pdp-form-Parameter-fbclid%22%20name%3D%22Parameter-fbclid%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22hero-pdp-form-Parameter-utm_id%22%20name%3D%22Parameter-utm_id%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22hero-pdp-form-Parameter-epik%22%20name%3D%22Parameter-epik%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22hero-pdp-form-Parameter-cto_pld%22%20name%3D%22Parameter-cto_pld%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22hero-pdp-form-Parameter-cta%22%20name%3D%22Parameter-cta%22%20value%3E"
                      />
                    </_Builtin.FormForm>
                    <_Builtin.FormSuccessMessage
                      className={`hero-static-v2__form-succcess ${_activeStyleVariant}`}
                    >
                      <_Builtin.Block
                        className={`h7-v2 is--white-v2 ${_activeStyleVariant}`}
                        tag="div"
                      >
                        {"Thank you!"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={`h9-v2 is--white-v2 ${_activeStyleVariant}`}
                        tag="div"
                      >
                        {"Your submission has been received!"}
                      </_Builtin.Block>
                    </_Builtin.FormSuccessMessage>
                    <_Builtin.FormErrorMessage
                      className={`hero-static-v2__form-succcess ${_activeStyleVariant}`}
                    >
                      <_Builtin.Block
                        className={`h7-v2 is--red-v2 ${_activeStyleVariant}`}
                        tag="div"
                      >
                        {"Oops!"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={`h9-v2 is--red-v2 ${_activeStyleVariant}`}
                        tag="div"
                      >
                        {"Something went wrong while submitting the form."}
                      </_Builtin.Block>
                    </_Builtin.FormErrorMessage>
                  </_Builtin.FormWrapper>
                </_Builtin.Block>
              ) : null}
              {buttonVisibility ? (
                <_Builtin.Block
                  className={`hero-static-v2__btn ${_activeStyleVariant}`}
                  tag="div"
                >
                  <_Builtin.Link
                    className={`btn btn--form-next btn--form--v2 ${_activeStyleVariant}`}
                    button={false}
                    block="inline"
                    options={{
                      href: "/schedulerequests-ms",
                    }}
                  >
                    <_Builtin.Block tag="div">{"Book Now"}</_Builtin.Block>
                    <IconArrowRight2 />
                  </_Builtin.Link>
                </_Builtin.Block>
              ) : null}
            </_Builtin.Block>
          ) : null}
        </_Builtin.Block>
      </_Builtin.Block>
      {videoVisibility ? (
        <_Builtin.RichText tag="div" slot="">
          {videoEmbed}
        </_Builtin.RichText>
      ) : null}
    </_Component>
  );
}
