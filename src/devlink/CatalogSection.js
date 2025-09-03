"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { IconArrowRight2 } from "./IconArrowRight2";

export function CatalogSection({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className="section-catalog"
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.VFlex className="section-catalog__img" tag="div">
        <_Builtin.Image
          className="section-catalog__img__img hide-mobile"
          loading="lazy"
          width="772"
          height="auto"
          alt="Closet World Catalog Book"
          src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/67c09c4d4fc8855d30fc245a_Closet-World-Catalog.webp"
        />
        <_Builtin.Image
          className="section-catalog__img__img hide-desktop"
          loading="lazy"
          width="auto"
          height="auto"
          alt="Closet World Catalog Book"
          src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/67c09b9bc4a334c6636dbb67_Closet-World-Catalog.webp"
        />
      </_Builtin.VFlex>
      <_Builtin.Block className="section-catalog-content" tag="div">
        <_Builtin.Heading className="h6-v2 is--blue" tag="h2">
          {"Download our catalog and explore our full collection!"}
        </_Builtin.Heading>
        <_Builtin.FormWrapper className="hero-static-v2__form-block-cta">
          <_Builtin.FormForm
            className="cta-static-v2__form-wrap form__group mb-0 catalog-form-download"
            name="wf-form-Catalog-Form-Section"
            data-name="Catalog Form Section"
            method="get"
            id="wf-form-Catalog-Form-Section"
          >
            <_Builtin.Block className="cta-static-v2__form" tag="div">
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
                id="Email"
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
              <_Builtin.FormButton
                className="form-submit__hidden"
                type="submit"
                value="Submit"
                data-wait="Please wait..."
              />
              <_Builtin.HtmlEmbed
                className="hidden-html"
                value="%3Cinput%20type%3D%22hidden%22%20id%3D%22catalog-section-form-Marketing-Code%22%20name%3D%22Marketing-Code%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22catalog-section-form-Request-URL%22%20name%3D%22Request-URL%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22catalog-section-form-HTTP-Referrer%22%20name%3D%22HTTP-Referrer%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22catalog-section-form-Landing-URL%22%20name%3D%22Landing-URL%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22catalog-section-form-Client-IP%22%20name%3D%22Client-IP%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22catalog-section-form-Test-Entry%22%20name%3D%22Test-Entry%22%20value%3D%22false%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22catalog-section-form-Language-ID%22%20name%3D%22Language-ID%22%20value%3D%22en%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22catalog-section-form-Form-ID%22%20name%3D%22Form-ID%22%20value%3D%229%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22catalog-section-form-Domain-Name%22%20name%3D%22Domain-Name%22%20value%3E%0A%3C!--%20URL%20Parameters%20--%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22catalog-section-form-Parameter-utm_source%22%20name%3D%22Parameter-utm_source%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22catalog-section-form-Parameter-utm_medium%22%20name%3D%22Parameter-utm_medium%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22catalog-section-form-Parameter-utm_campaign%22%20name%3D%22Parameter-utm_campaign%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22catalog-section-form-Parameter-utm_content%22%20name%3D%22Parameter-utm_content%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22catalog-section-form-Parameter-utm_term%22%20name%3D%22Parameter-utm_term%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22catalog-section-form-Parameter-match_type%22%20name%3D%22Parameter-match_type%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22catalog-section-form-Parameter-network%22%20name%3D%22Parameter-network%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22catalog-section-form-Parameter-device%22%20name%3D%22Parameter-device%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22catalog-section-form-Parameter-loc_physical%22%20name%3D%22Parameter-loc_physical%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22catalog-section-form-Parameter-creative%22%20name%3D%22Parameter-creative%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22catalog-section-form-Parameter-gbraid%22%20name%3D%22Parameter-gbraid%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22catalog-section-form-Parameter-wbraid%22%20name%3D%22Parameter-wbraid%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22catalog-section-form-Parameter-gclid%22%20name%3D%22Parameter-gclid%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22catalog-section-form-Parameter-msclkid%22%20name%3D%22Parameter-msclkid%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22catalog-section-form-Parameter-term%22%20name%3D%22Parameter-term%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22catalog-section-form-Parameter-id%22%20name%3D%22Parameter-id%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22catalog-section-form-Parameter-adset%22%20name%3D%22Parameter-adset%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22catalog-section-form-Parameter-fbclid%22%20name%3D%22Parameter-fbclid%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22catalog-section-form-Parameter-utm_id%22%20name%3D%22Parameter-utm_id%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22catalog-section-form-Parameter-epik%22%20name%3D%22Parameter-epik%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22catalog-section-form-Parameter-cto_pld%22%20name%3D%22Parameter-cto_pld%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22catalog-section-form-Parameter-cta%22%20name%3D%22Parameter-cta%22%20value%3E"
              />
            </_Builtin.Block>
            <_Builtin.Block className="form__validation-msg" tag="div">
              {"Invalid e-mail address format."}
            </_Builtin.Block>
            <_Builtin.Link
              className="btn-v2 hidden-desktop form-trigger"
              button={false}
              block="inline"
              options={{
                href: "#",
              }}
            >
              <_Builtin.Block tag="div">{"Start Now"}</_Builtin.Block>
              <IconArrowRight2 />
            </_Builtin.Link>
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
    </_Component>
  );
}
