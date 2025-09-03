"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function Step1FormTop({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className="step1-form" tag="div">
      <_Builtin.FormWrapper className="form-block is--step1">
        <_Builtin.FormForm
          name="wf-form-Step-1-Form-Section-Top"
          data-name="Step 1 Form Section Top"
          method="get"
          data-optibase-submit-conversion-id="schedule_an_appointment_middle"
          id="wf-form-Step-1-Form-Section-Top"
        >
          <_Builtin.Block className="form__col" tag="div">
            <_Builtin.Block className="form__group" tag="div">
              <_Builtin.FormBlockLabel
                className="form__label form__label--visible"
                htmlFor="step1-top-First-Name"
              >
                {"First Name"}
              </_Builtin.FormBlockLabel>
              <_Builtin.FormTextInput
                className="form__input"
                name="First-Name"
                maxLength={256}
                data-name="First Name"
                placeholder="First Name"
                disabled={false}
                type="text"
                required={true}
                autoFocus={false}
                autoComplete="given-name"
                id="step1-top-First-Name"
              />
              <_Builtin.Block className="form__validation-msg" tag="div">
                {"This field is required."}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block className="form__group" tag="div">
              <_Builtin.FormBlockLabel
                className="form__label form__label--visible"
                htmlFor="step1-top-Last-Name"
              >
                {"Last Name"}
              </_Builtin.FormBlockLabel>
              <_Builtin.FormTextInput
                className="form__input"
                name="Last-Name"
                maxLength={256}
                data-name="Last Name"
                placeholder="Last Name"
                disabled={false}
                type="text"
                required={true}
                autoFocus={false}
                autoComplete="family-name"
                id="step1-top-Last-Name"
              />
              <_Builtin.Block className="form__validation-msg" tag="div">
                {"This field is required."}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block className="form__group" tag="div">
              <_Builtin.FormBlockLabel
                className="form__label form__label--visible"
                htmlFor="step1-top-Email"
              >
                {"Email Address"}
              </_Builtin.FormBlockLabel>
              <_Builtin.FormTextInput
                className="form__input form__input--email"
                name="Email"
                maxLength={256}
                data-name="Email"
                placeholder="Email Address"
                disabled={false}
                type="email"
                required={true}
                autoFocus={false}
                autoComplete="email"
                id="step1-top-Email"
              />
              <_Builtin.Block className="form__validation-msg" tag="div">
                {"This field is required."}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block className="form__group" tag="div">
              <_Builtin.FormBlockLabel
                className="form__label form__label--visible"
                htmlFor="step1-top-Phone-Number"
              >
                {"Phone Number"}
              </_Builtin.FormBlockLabel>
              <_Builtin.FormTextInput
                className="form__input form__input--tel"
                name="Phone-Number"
                maxLength={256}
                data-name="Phone Number"
                placeholder="Phone Number"
                disabled={false}
                type="tel"
                required={true}
                autoFocus={false}
                autoComplete="tel-national"
                id="step1-top-Phone-Number"
              />
              <_Builtin.DOM
                tag="input"
                type="hidden"
                name="Formatted-Phone-Number"
                id="step1-top-Formatted-Phone-Number"
                data-name="Formatted Phone Number"
              />
              <_Builtin.Block className="form__validation-msg" tag="div">
                {"This field is required."}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block className="form__group" tag="div">
              <_Builtin.FormBlockLabel
                className="form__label form__label--visible"
                htmlFor="step1-top-ZIP-Code"
              >
                {"ZIP Code"}
              </_Builtin.FormBlockLabel>
              <_Builtin.FormTextInput
                className="form__input form__input--zip"
                name="ZIP-Code"
                maxLength="7"
                data-name="ZIP Code"
                placeholder="ZIP Code"
                disabled={false}
                type="text"
                required={true}
                autoFocus={false}
                autoComplete="postal-code"
                id="step1-top-ZIP-Code"
              />
              <_Builtin.Block className="form__validation-msg" tag="div">
                {"This field is required."}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className="form__submit form__submit--center"
            tag="div"
          >
            <_Builtin.Block className="form__validation-msg" tag="div">
              {
                "There are errors in the form. Please check all the fields and try to submit it again."
              }
            </_Builtin.Block>
            <_Builtin.Link
              className="btn btn--form"
              button={true}
              block=""
              options={{
                href: "#",
              }}
            >
              {"SUBMIT"}
            </_Builtin.Link>
            <_Builtin.Block className="subtitle" tag="div">
              {
                "*By submitting this request you acknowledge having read and agreeing to our "
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
              {". "}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.HtmlEmbed
            className="hidden-html"
            value="%3Cinput%20type%3D%22hidden%22%20id%3D%22step1-top-Form-ID%22%20name%3D%22Form-ID%22%20value%3D%226%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22step1-top-Location-ID%22%20name%3D%22Location-ID%22%20value%3D%220%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22step1-top-Marketing-Code%22%20name%3D%22Marketing-Code%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22step1-top-Submitted-Time%22%20name%3D%22Submitted-Time%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22step1-top-Request-URL%22%20name%3D%22Request-URL%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22step1-top-HTTP-Referrer%22%20name%3D%22HTTP-Referrer%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22step1-top-Landing-URL%22%20name%3D%22Landing-URL%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22step1-top-Client-IP%22%20name%3D%22Client-IP%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22step1-top-Form-Emails%22%20name%3D%22Form-Emails%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22step1-top-Domain-Name%22%20name%3D%22Domain-Name%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22step1-top-Form-Guid%22%20name%3D%22Form-Guid%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22step1-top-Test-Entry%22%20name%3D%22Test-Entry%22%20value%3D%22false%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22step1-top-Corporate%22%20name%3D%22Corporate%22%20value%3D%22true%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22step1-top-Serviced%22%20name%3D%22Service%22%20value%3D%22true%22%3E%0A%3C!--%20URL%20Parameters%20--%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22step1-top-Parameter-utm_source%22%20name%3D%22Parameter-utm_source%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22step1-top-Parameter-utm_medium%22%20name%3D%22Parameter-utm_medium%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22step1-top-Parameter-utm_campaign%22%20name%3D%22Parameter-utm_campaign%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22step1-top-Parameter-utm_content%22%20name%3D%22Parameter-utm_content%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22step1-top-Parameter-utm_term%22%20name%3D%22Parameter-utm_term%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22step1-top-Parameter-match_type%22%20name%3D%22Parameter-match_type%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22step1-top-Parameter-network%22%20name%3D%22Parameter-network%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22step1-top-Parameter-device%22%20name%3D%22Parameter-device%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22step1-top-Parameter-loc_physical%22%20name%3D%22Parameter-loc_physical%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22step1-top-Parameter-creative%22%20name%3D%22Parameter-creative%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22step1-top-Parameter-gbraid%22%20name%3D%22Parameter-gbraid%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22step1-top-Parameter-wbraid%22%20name%3D%22Parameter-wbraid%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22step1-top-Parameter-gclid%22%20name%3D%22Parameter-gclid%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22step1-top-Parameter-msclkid%22%20name%3D%22Parameter-msclkid%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22step1-top-Parameter-term%22%20name%3D%22Parameter-term%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22step1-top-Parameter-id%22%20name%3D%22Parameter-id%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22step1-top-Parameter-adset%22%20name%3D%22Parameter-adset%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22step1-top-Parameter-fbclid%22%20name%3D%22Parameter-fbclid%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22step1-top-Parameter-utm_id%22%20name%3D%22Parameter-utm_id%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22step1-top-Parameter-epik%22%20name%3D%22Parameter-epik%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22step1-top-Parameter-cto_pld%22%20name%3D%22Parameter-cto_pld%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22step1-top-Parameter-cta%22%20name%3D%22Parameter-cta%22%20value%3E"
          />
        </_Builtin.FormForm>
        <_Builtin.FormSuccessMessage>
          <_Builtin.Block tag="div">
            {"Thank you! Your submission has been received!"}
          </_Builtin.Block>
        </_Builtin.FormSuccessMessage>
        <_Builtin.FormErrorMessage>
          <_Builtin.Block tag="div">
            {"Oops! Something went wrong while submitting the form."}
          </_Builtin.Block>
        </_Builtin.FormErrorMessage>
      </_Builtin.FormWrapper>
      <_Builtin.Link
        className="btn btn--continue"
        button={true}
        block=""
        options={{
          href: "/schedulerequests-ms-new",
        }}
      >
        {"Continue"}
      </_Builtin.Link>
    </_Component>
  );
}
