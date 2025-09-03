"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { ContactUsScheduleCardV2 } from "./ContactUsScheduleCardV2";
import { IconArrowRight2 } from "./IconArrowRight2";

export function ContactLocation({
  as: _Component = _Builtin.Block,
  formProps = {},
}) {
  return (
    <_Component tag="div">
      <_Builtin.BlockContainer
        className="container-v2"
        grid={{
          type: "container",
        }}
        tag="div"
      >
        <_Builtin.Block className="contact-grid" tag="div">
          <_Builtin.Block
            className="contact-grid__item"
            id="w-node-_18a29de1-d368-3213-22f6-848bd04a2122-d04a211f"
            tag="div"
          >
            <_Builtin.Block className="contact-grid__group" tag="div">
              <_Builtin.Link
                className="contact-grid__link"
                button={false}
                block="inline"
                options={{
                  href: "https://maps.app.goo.gl/VmzCKMakeNEbAWcr7",
                  target: "_blank",
                }}
              >
                <_Builtin.VFlex
                  className="contact-grid__link-v2__icon"
                  tag="div"
                >
                  <_Builtin.Image
                    loading="lazy"
                    width="8"
                    height="auto"
                    alt=""
                    src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/6883a3f71ea1ce906d09e1ce_Vector%20(3).png"
                  />
                </_Builtin.VFlex>
                <_Builtin.Block tag="div">
                  {"3860 Capitol Ave. Whittier, CA 90601"}
                </_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Link
                className="contact-grid__link"
                button={false}
                block="inline"
                options={{
                  href: "tel:18005767717",
                }}
              >
                <_Builtin.VFlex
                  className="contact-grid__link-v2__icon"
                  tag="div"
                >
                  <_Builtin.Image
                    loading="lazy"
                    width="10"
                    height="auto"
                    alt=""
                    src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/6883a423e31f28353592b2e4_Vector%20(4).png"
                  />
                </_Builtin.VFlex>
                <_Builtin.Block tag="div">{"1-800-576-7717"}</_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Block className="contact-grid__link" tag="div">
                <_Builtin.VFlex
                  className="contact-grid__link-v2__icon"
                  tag="div"
                >
                  <_Builtin.Image
                    loading="lazy"
                    width="13"
                    height="auto"
                    alt=""
                    src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/6883a445c9493444b24c31a1_Group%201.png"
                  />
                </_Builtin.VFlex>
                <_Builtin.Block tag="div">
                  {"Mon - Fri | 8:00am to 4:00pm"}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Link
                className="contact-grid__link is--email"
                button={false}
                block="inline"
                options={{
                  href: "mailto:customerservice@closetworld.com",
                }}
              >
                <_Builtin.VFlex
                  className="contact-grid__link-v2__icon"
                  tag="div"
                >
                  <_Builtin.Image
                    loading="lazy"
                    width="13"
                    height="auto"
                    alt=""
                    src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/6883a4689b02324b3392c2c1_Group%20115.png"
                  />
                </_Builtin.VFlex>
                <_Builtin.Block tag="div">
                  {"customerservice@closetworld.com"}
                </_Builtin.Block>
              </_Builtin.Link>
            </_Builtin.Block>
            <_Builtin.Block className="contact-grid__group" tag="div">
              <ContactUsScheduleCardV2 />
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className="contact-grid__item"
            id="w-node-_18a29de1-d368-3213-22f6-848bd04a213a-d04a211f"
            tag="div"
          >
            <_Builtin.Block className="contact-grid__form" tag="div">
              <_Builtin.FormWrapper {...formProps}>
                <_Builtin.FormForm
                  className="form-normal-v3"
                  name="wf-form-Contact-Form"
                  data-name="Contact Form"
                  method="get"
                  id="wf-form-Contact-Form"
                >
                  <_Builtin.Block className="form__group is--v2" tag="div">
                    <_Builtin.FormBlockLabel
                      className="form__label-v2"
                      htmlFor="contact-First-Name"
                    >
                      {"First Name"}
                    </_Builtin.FormBlockLabel>
                    <_Builtin.FormTextInput
                      className="form__input form__input__v2 is--rounded"
                      name="First-Name"
                      maxLength="80"
                      data-name="First Name"
                      placeholder="First Name"
                      disabled={false}
                      type="text"
                      required={true}
                      autoFocus={false}
                      autoComplete="given-name"
                      id="contact-First-Name"
                    />
                    <_Builtin.Block className="form__validation-msg" tag="div">
                      {"This field is required."}
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block className="form__group is--v2" tag="div">
                    <_Builtin.FormBlockLabel
                      className="form__label-v2"
                      htmlFor="contact-Last-Name"
                    >
                      {"Last Name"}
                    </_Builtin.FormBlockLabel>
                    <_Builtin.FormTextInput
                      className="form__input form__input__v2 is--rounded"
                      name="Last-Name"
                      maxLength="80"
                      data-name="Last Name"
                      placeholder="Last Name"
                      disabled={false}
                      type="text"
                      required={true}
                      autoFocus={false}
                      autoComplete="family-name"
                      id="contact-Last-Name"
                    />
                    <_Builtin.Block className="form__validation-msg" tag="div">
                      {"This field is required."}
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block className="form__group is--v2" tag="div">
                    <_Builtin.FormBlockLabel
                      className="form__label-v2"
                      htmlFor="contact-Phone-Number"
                    >
                      {"Phone Number"}
                    </_Builtin.FormBlockLabel>
                    <_Builtin.FormTextInput
                      className="form__input form__input--tel form__input__v2 is--rounded"
                      name="Phone-Number"
                      maxLength={256}
                      data-name="Phone Number"
                      placeholder="Phone Number"
                      disabled={false}
                      type="tel"
                      required={true}
                      autoFocus={false}
                      autoComplete="tel-national"
                      id="contact-Phone-Number"
                    />
                    <_Builtin.DOM
                      tag="input"
                      type="hidden"
                      name="Formatted-Phone-Number"
                      id="contact-Formatted-Phone-Number"
                      data-name="Formatted Phone Number"
                    />
                    <_Builtin.Block className="form__validation-msg" tag="div">
                      {"This field is required."}
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block className="form__group is--v2" tag="div">
                    <_Builtin.FormBlockLabel
                      className="form__label-v2"
                      htmlFor="contact-Email"
                    >
                      {"Email"}
                    </_Builtin.FormBlockLabel>
                    <_Builtin.FormTextInput
                      className="form__input form__input--email form__input__v2 is--rounded"
                      name="Email"
                      maxLength="80"
                      data-name="Email"
                      placeholder="Email Address"
                      disabled={false}
                      type="email"
                      required={true}
                      autoFocus={false}
                      autoComplete="email"
                      id="contact-Email"
                    />
                    <_Builtin.Block className="form__validation-msg" tag="div">
                      {"This field is required."}
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block className="form__group is--v2" tag="div">
                    <_Builtin.FormBlockLabel
                      className="form__label-v2"
                      htmlFor="contact-Comments"
                    >
                      {"Message"}
                    </_Builtin.FormBlockLabel>
                    <_Builtin.FormTextarea
                      className="form__textarea form__textarea--lg form__textarea-v2 is--rounded"
                      name="Comments"
                      maxLength="2000"
                      data-name="Comments"
                      placeholder="Your Comments"
                      required={true}
                      autoFocus={false}
                      id="contact-Comments"
                    />
                  </_Builtin.Block>
                  <_Builtin.FormTextInput
                    className="form__input visually-hidden"
                    name="Prevention-String-2"
                    maxLength={256}
                    data-name="Prevention String 2"
                    disabled={false}
                    type="text"
                    required={false}
                    autoFocus={false}
                    id="Prevention-String-2"
                  />
                  <_Builtin.Block
                    className="form__submit form__submit--center is--v3"
                    tag="div"
                  >
                    <_Builtin.Block className="form__validation-msg" tag="div">
                      {
                        "There are errors in the form. Please check all the fields and try to submit it again."
                      }
                    </_Builtin.Block>
                    <_Builtin.Link
                      className="btn btn--form btn--form-submit btn--form--v2"
                      button={false}
                      block="inline"
                      options={{
                        href: "#",
                      }}
                    >
                      <_Builtin.Block tag="div">{"Send"}</_Builtin.Block>
                      <IconArrowRight2 />
                    </_Builtin.Link>
                    <_Builtin.Block
                      className="h12-v2 agree-terms-v2 is--center is--dark-grey"
                      tag="div"
                    >
                      {
                        "*By submitting this request you acknowledge having read and agreeing to our"
                      }
                      <_Builtin.Emphasized> </_Builtin.Emphasized>
                      <_Builtin.Link
                        className="body-link text-color--primary"
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
                        className="body-link text-color--primary"
                        button={false}
                        block=""
                        options={{
                          href: "/privacy-policy",
                          target: "_blank",
                        }}
                      >
                        {"Privacy Policy"}
                      </_Builtin.Link>
                      {"."}
                      <_Builtin.Emphasized> </_Builtin.Emphasized>
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.HtmlEmbed
                    className="hidden-html"
                    value="%3Cinput%20type%3D%22hidden%22%20id%3D%22contact-Client-IP%22%20name%3D%22Client-IP%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22contact-Domain-Name%22%20name%3D%22Domain-Name%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22contact-Form-Guid%22%20name%3D%22Form-Guid%22%20value%3E"
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
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.BlockContainer>
    </_Component>
  );
}
