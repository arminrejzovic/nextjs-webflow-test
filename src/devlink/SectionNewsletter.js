"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function SectionNewsletter({
  as: _Component = _Builtin.Section,
  visibility,
  newsletterFormVisibility = true,
}) {
  return newsletterFormVisibility ? (
    <_Component
      className="section-form-newsletter"
      grid={{
        type: "section",
      }}
      tag="section"
      id="newsletter-subscribe"
    >
      <_Builtin.BlockContainer
        className="container"
        grid={{
          type: "container",
        }}
        tag="div"
      >
        <_Builtin.Block className="form-newsletter" tag="div">
          <_Builtin.Block className="h4" tag="div">
            {"Join Our Email List"}
          </_Builtin.Block>
          <_Builtin.FormWrapper className="form-block">
            <_Builtin.FormForm
              name="wf-form-Newsletter-Form"
              data-name="Newsletter Form"
              method="get"
              id="wf-form-Newsletter-Form"
            >
              <_Builtin.Block className="form__group-wrapper" tag="div">
                <_Builtin.DOM
                  className="form__label form__label--visible form__label--required"
                  tag="div"
                >
                  {"Name"}
                </_Builtin.DOM>
                <_Builtin.Block className="form__grid-2col" tag="div">
                  <_Builtin.Block className="form__group" tag="div">
                    <_Builtin.FormBlockLabel
                      className="form__label"
                      htmlFor="news-form-First-Name"
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
                      id="news-form-First-Name"
                    />
                    <_Builtin.Block className="form__validation-msg" tag="div">
                      {"This field is required."}
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block className="form__group" tag="div">
                    <_Builtin.FormBlockLabel
                      className="form__label"
                      htmlFor="news-form-Last-Name"
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
                      id="news-form-Last-Name"
                    />
                    <_Builtin.Block className="form__validation-msg" tag="div">
                      {"This field is required."}
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block className="form__group" tag="div">
                <_Builtin.FormBlockLabel
                  className="form__label form__label--visible form__label--required"
                  htmlFor="news-form-Email"
                >
                  {"Email"}
                </_Builtin.FormBlockLabel>
                <_Builtin.FormTextInput
                  className="form__input form__input--email"
                  name="Email"
                  maxLength={256}
                  data-name="Email"
                  placeholder="jdoe@closetworld.com"
                  disabled={false}
                  type="email"
                  required={true}
                  autoFocus={false}
                  autoComplete="email"
                  id="news-form-Email"
                />
                <_Builtin.Block className="form__validation-msg" tag="div">
                  {"This field is required."}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block className="form__submit" tag="div">
                <_Builtin.HtmlEmbed
                  className="hidden-html"
                  value="%3Cinput%20type%3D%22hidden%22%20id%3D%22news-form-Domain-Name%22%20name%3D%22Domain-Name%22%20value%3E"
                />
                <_Builtin.FormButton
                  className="btn btn--form"
                  type="submit"
                  value="Subscribe"
                  data-wait="Please wait..."
                />
                <_Builtin.Block tag="div">
                  <_Builtin.Block className="subtitle" tag="div">
                    {
                      "*By submitting this newsletter form you acknowledge having read and agreeing to our "
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
                  <_Builtin.Block className="subtitle" tag="div">
                    {
                      "**By clicking subscribe you agree to receive promotional and marketing emails on a regular basis, we do not sell or share your data or email with any external third-parties."
                    }
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.FormForm>
            <_Builtin.FormSuccessMessage className="form__success-msg">
              <_Builtin.Block className="body-md text-color--primary" tag="div">
                {"Thanks for subscribing to our newsletter!"}
              </_Builtin.Block>
            </_Builtin.FormSuccessMessage>
            <_Builtin.FormErrorMessage>
              <_Builtin.Block tag="div">
                {"Oops! Something went wrong while submitting the form."}
              </_Builtin.Block>
            </_Builtin.FormErrorMessage>
          </_Builtin.FormWrapper>
        </_Builtin.Block>
      </_Builtin.BlockContainer>
    </_Component>
  ) : null;
}
