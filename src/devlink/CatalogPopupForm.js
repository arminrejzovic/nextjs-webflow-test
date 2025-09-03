"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { IconArrowRight2 } from "./IconArrowRight2";

export function CatalogPopupForm({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className="catalog-popup" tag="div">
      <_Builtin.Block className="catalog-popup__inner" tag="div">
        <_Builtin.Image
          className="catalog-popup__img"
          loading="lazy"
          width="auto"
          height="auto"
          alt="Closet World Catalog Book"
          src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/67c09b9bc4a334c6636dbb67_Closet-World-Catalog.webp"
        />
        <_Builtin.Block className="catalog-popup__content" tag="div">
          <_Builtin.Heading
            className="h6-v2 is--blue text-align--center"
            tag="h2"
          >
            {"Download our catalog and explore our full collection!"}
          </_Builtin.Heading>
          <_Builtin.FormWrapper className="hero-static-v2__form-block-cta catalog-popup-form-block">
            <_Builtin.FormForm
              className="cta-static-v2__form-wrap catalog-form-download"
              name="wf-form-Catalog-Form-Popup"
              data-name="Catalog Form Popup"
              method="get"
              id="wf-form-Catalog-Form-Popup"
            >
              <_Builtin.Block className="form__group mb-0" tag="div">
                <_Builtin.Block
                  className="cta-static-v2__form catalog-form"
                  tag="div"
                >
                  <_Builtin.FormTextInput
                    className="form__input-transparent-cta form__input--email"
                    name="Email"
                    maxLength={256}
                    data-name="Email"
                    placeholder="youremail@example.com"
                    disabled={false}
                    type="email"
                    required={true}
                    autoFocus={false}
                    autoComplete="email"
                    id="Email"
                  />
                  <_Builtin.FormButton
                    className="form-submit__hidden"
                    type="submit"
                    value="Submit"
                    data-wait="Please wait..."
                  />
                  <_Builtin.Link
                    className="btn-v2 hidden-mobile form-trigger"
                    button={false}
                    block="inline"
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Block tag="div">{"Download"}</_Builtin.Block>
                    <IconArrowRight2 />
                  </_Builtin.Link>
                </_Builtin.Block>
                <_Builtin.Block className="mt-05" tag="div">
                  <_Builtin.Block className="form__validation-msg" tag="div">
                    {"Invalid e-mail address format."}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Link
                  className="btn-v2 hidden-desktop form-trigger"
                  button={false}
                  block="inline"
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Block tag="div">{"Download"}</_Builtin.Block>
                  <IconArrowRight2 />
                </_Builtin.Link>
              </_Builtin.Block>
              <_Builtin.HtmlEmbed
                className="hidden-html"
                value="%3Cinput%20type%3D%22hidden%22%20id%3D%22catalog-popup-form-Marketing-Code%22%20name%3D%22Marketing-Code%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22catalog-popup-form-Request-URL%22%20name%3D%22Request-URL%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22catalog-popup-form-HTTP-Referrer%22%20name%3D%22HTTP-Referrer%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22catalog-popup-form-Landing-URL%22%20name%3D%22Landing-URL%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22catalog-popup-form-Client-IP%22%20name%3D%22Client-IP%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22catalog-popup-form-Test-Entry%22%20name%3D%22Test-Entry%22%20value%3D%22false%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22catalog-popup-form-Language-ID%22%20name%3D%22Language-ID%22%20value%3D%22en%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22catalog-popup-form-Form-ID%22%20name%3D%22Form-ID%22%20value%3D%2210%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22catalog-popup-form-Domain-Name%22%20name%3D%22Domain-Name%22%20value%3E%0A%3C!--%20URL%20Parameters%20--%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22catalog-popup-form-Parameter-utm_source%22%20name%3D%22Parameter-utm_source%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22catalog-popup-form-Parameter-utm_medium%22%20name%3D%22Parameter-utm_medium%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22catalog-popup-form-Parameter-utm_campaign%22%20name%3D%22Parameter-utm_campaign%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22catalog-popup-form-Parameter-utm_content%22%20name%3D%22Parameter-utm_content%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22catalog-popup-form-Parameter-utm_term%22%20name%3D%22Parameter-utm_term%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22catalog-popup-form-Parameter-match_type%22%20name%3D%22Parameter-match_type%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22catalog-popup-form-Parameter-network%22%20name%3D%22Parameter-network%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22catalog-popup-form-Parameter-device%22%20name%3D%22Parameter-device%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22catalog-popup-form-Parameter-loc_physical%22%20name%3D%22Parameter-loc_physical%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22catalog-popup-form-Parameter-creative%22%20name%3D%22Parameter-creative%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22catalog-popup-form-Parameter-gbraid%22%20name%3D%22Parameter-gbraid%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22catalog-popup-form-Parameter-wbraid%22%20name%3D%22Parameter-wbraid%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22catalog-popup-form-Parameter-gclid%22%20name%3D%22Parameter-gclid%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22catalog-popup-form-Parameter-msclkid%22%20name%3D%22Parameter-msclkid%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22catalog-popup-form-Parameter-term%22%20name%3D%22Parameter-term%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22catalog-popup-form-Parameter-id%22%20name%3D%22Parameter-id%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22catalog-popup-form-Parameter-adset%22%20name%3D%22Parameter-adset%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22catalog-popup-form-Parameter-fbclid%22%20name%3D%22Parameter-fbclid%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22catalog-popup-form-Parameter-utm_id%22%20name%3D%22Parameter-utm_id%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22catalog-popup-form-Parameter-epik%22%20name%3D%22Parameter-epik%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22catalog-popup-form-Parameter-cto_pld%22%20name%3D%22Parameter-cto_pld%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22catalog-popup-form-Parameter-cta%22%20name%3D%22Parameter-cta%22%20value%3E"
              />
            </_Builtin.FormForm>
            <_Builtin.FormSuccessMessage className="form-v2-nl-success">
              <_Builtin.Block className="h7-v2 is--red-v2" tag="div">
                {"Thank you!"}
              </_Builtin.Block>
              <_Builtin.Block
                className="h9-v2 is--red-v2 line-height-1-5"
                tag="div"
              >
                {"Your submission has been received!"}
              </_Builtin.Block>
              <_Builtin.Block className="h10-v2 mb-1 mt-1" tag="div">
                {
                  "Your catalog file should open automatically. If this doesn’t happen, please click the button."
                }
              </_Builtin.Block>
              <_Builtin.Link
                className="btn-v2"
                button={false}
                block="inline"
                options={{
                  href: "https://closetworld.sfo2.cdn.digitaloceanspaces.com/WebsiteCatalog.pdf",
                  target: "_blank",
                }}
              >
                <_Builtin.Block tag="div">{"Download Catalog"}</_Builtin.Block>
                <IconArrowRight2 />
              </_Builtin.Link>
            </_Builtin.FormSuccessMessage>
            <_Builtin.FormErrorMessage>
              <_Builtin.Block tag="div">
                {"Oops! Something went wrong while submitting the form."}
              </_Builtin.Block>
            </_Builtin.FormErrorMessage>
          </_Builtin.FormWrapper>
          <_Builtin.Block className="cta-v2-terms" tag="div">
            {
              "*By submitting this form you acknowledge having read and agreeing to our "
            }
            <_Builtin.Link
              className="body-link text-color--primary"
              button={false}
              block=""
              options={{
                href: "#",
                target: "_blank",
              }}
            >
              {"Terms & Conditions"}
            </_Builtin.Link>
            {" and "}
            <_Builtin.Link
              className="body-link text-color--primary"
              button={false}
              block=""
              options={{
                href: "#",
                target: "_blank",
              }}
            >
              {"Privacy Policy"}
            </_Builtin.Link>
            {"."}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className="catalog-popup__close" tag="div">
          <_Builtin.HtmlEmbed
            className="catalog-popup__close-icon"
            value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2214%22%20height%3D%2214%22%20viewBox%3D%220%200%2014%2014%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20d%3D%22M2.16943%200.516863L7%205.34744L11.8306%200.516863L13.4831%202.16943L8.65256%207L13.4831%2011.8306L11.8306%2013.4831L7%208.65256L2.16943%2013.4831L0.516865%2011.8306L5.34744%207L0.516864%202.16943L2.16943%200.516863Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
          />
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.HtmlEmbed
        className="catalog-open-js"
        value="%3Cscript%3E%0Avar%20Webflow%20%3D%20Webflow%20%7C%7C%20%5B%5D%3B%0AWebflow.push(function%20()%20%7B%0A%0A%20%20%20%20%2F*%20----------%20tiny%20helpers%20----------%20*%2F%0A%20%20%20%20const%20openCatalog%20%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20document.querySelector('.catalog-popup').classList.add('open')%3B%0A%20%20%20%20%20%20%20%20document.body.classList.add('no-scroll')%3B%0A%20%20%20%20%7D%3B%0A%20%20%20%20const%20closeCatalog%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20document.querySelector('.catalog-popup').classList.remove('open')%3B%0A%20%20%20%20%20%20%20%20document.body.classList.remove('no-scroll')%3B%0A%20%20%20%20%7D%3B%0A%0A%20%20%20%20%2F*%20----------%201%20%C2%B7%20open%20on%20page-load%20if%20URL%20says%20so%20----------%20*%2F%0A%20%20%20%20const%20params%20%3D%20new%20URLSearchParams(window.location.search)%3B%0A%20%20%20%20if%20(params.get('catalog')%20%3D%3D%3D%20'open'%20%7C%7C%20window.location.hash%20%3D%3D%3D%20'%23catalog')%20%7B%0A%20%20%20%20%20%20%20%20openCatalog()%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20%2F*%20----------%202%20%C2%B7%20open%20via%20buttons%20----------%20*%2F%0A%20%20%20%20document.querySelectorAll('.open-catalog').forEach(btn%20%3D%3E%0A%20%20%20%20%20%20%20%20btn.addEventListener('click'%2C%20openCatalog)%0A%20%20%20%20)%3B%0A%0A%20%20%20%20%2F*%20----------%203%20%C2%B7%20close%20via%20%E2%80%9C%C3%97%E2%80%9D%20button%20----------%20*%2F%0A%20%20%20%20document.querySelector('.catalog-popup__close')%0A%20%20%20%20%20%20%20%20%20%20%20%20.addEventListener('click'%2C%20closeCatalog)%3B%0A%0A%20%20%20%20%2F*%20----------%204%20%C2%B7%20close%20on%20background%20click%20----------%20*%2F%0A%20%20%20%20document.querySelector('.catalog-popup')%0A%20%20%20%20%20%20%20%20%20%20%20%20.addEventListener('click'%2C%20e%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(e.target%20%3D%3D%3D%20e.currentTarget)%20closeCatalog()%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D)%3B%0A%7D)%3B%0A%3C%2Fscript%3E"
      />
    </_Component>
  );
}
