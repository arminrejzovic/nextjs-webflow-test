"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { IconArrowLeft2 } from "./IconArrowLeft2";
import { IconArrowRight2 } from "./IconArrowRight2";

export function MsFormV2LandingNew({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className="py-40"
      tag="section"
      grid={{
        type: "section",
      }}
      padding-bottom=""
      padding-top=""
    >
      <_Builtin.BlockContainer
        className="container-v2-small"
        tag="div"
        grid={{
          type: "container",
        }}
      >
        <_Builtin.Block
          className="already-scheduled hide already-scheduled__data"
          tag="div"
        >
          <_Builtin.VFlex className="already-scheduled__thank" tag="div">
            <_Builtin.Block className="form__heading__progress" tag="div">
              <_Builtin.Block
                className="form__heading__progress__step is--active"
                tag="div"
              />
              <_Builtin.Block
                className="form__heading__progress__line is--active"
                tag="div"
              />
              <_Builtin.Block
                className="form__heading__progress__step is--active"
                tag="div"
              />
              <_Builtin.Block
                className="form__heading__progress__line is--second is--active"
                tag="div"
              />
              <_Builtin.Block
                className="form__heading__progress__step is--active"
                tag="div"
              />
            </_Builtin.Block>
            <_Builtin.Block className="h2-v2" tag="div">
              {"Thank You!"}
            </_Builtin.Block>
            <_Builtin.Block className="h8-v2" tag="div">
              {"We’ll give you a call shortly to confirm your appointment."}
            </_Builtin.Block>
            <_Builtin.Link
              className="btn-v2 btn-v2--text btn--resubmit btn--resubmit-v2"
              button={false}
              block="inline"
              options={{
                href: "#",
              }}
            >
              <IconArrowLeft2 />
              <_Builtin.Block tag="div">{"Back to Form"}</_Builtin.Block>
            </_Builtin.Link>
          </_Builtin.VFlex>
          <_Builtin.VFlex className="hidden" tag="div">
            <_Builtin.NotSupported _atom="Animation" />
            <_Builtin.Heading className="h3 h3--bold" tag="h2">
              <_Builtin.Span id="submitted-First-Name">{"Hi"}</_Builtin.Span>
              {", schedule another appointment?"}
            </_Builtin.Heading>
            <_Builtin.Block className="body-md" tag="div">
              {"We got your request on "}
              <_Builtin.Span
                className="already-scheduled__time"
                data-key="timestamp"
                id="submitted-timestamp"
              >
                {"24 Aug 2024"}
              </_Builtin.Span>
              {"."}
              <br />
            </_Builtin.Block>
            <_Builtin.Block className="already-scheduled__summary" tag="div">
              <_Builtin.Heading
                className="h4 h4--lower h4--body-color"
                tag="h3"
              >
                {"Appointment Summary"}
              </_Builtin.Heading>
              <_Builtin.Block
                className="form__grid-2col is--vertical"
                tag="div"
              >
                <_Builtin.Block
                  className="already-scheduled__group already-scheduled__group--1col"
                  tag="div"
                >
                  <_Builtin.Block
                    id="w-node-ff670802-73cd-4892-eec4-8fcfdd2a8937-dd2a8914"
                    tag="div"
                  >
                    <_Builtin.Block
                      className="already-scheduled__label is--icon is--icon-calendar"
                      id="w-node-ff670802-73cd-4892-eec4-8fcfdd2a8938-dd2a8914"
                      tag="div"
                    >
                      {"Preferred Date"}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="already-scheduled__info"
                      tag="div"
                    >
                      <_Builtin.Span
                        className="already-scheduled__time"
                        data-key="First-Choice-Time"
                        id="submitted-First-Choice-Time"
                      >
                        {"10:00 AM"}
                      </_Builtin.Span>{" "}
                      <_Builtin.Span
                        data-key="First-Choice-Date"
                        id="submitted-First-Choice-Date"
                      >
                        {"Thursday, 08/24/2024"}
                      </_Builtin.Span>
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className="margin--bot-12"
                    id="w-node-ff670802-73cd-4892-eec4-8fcfdd2a8940-dd2a8914"
                    tag="div"
                  >
                    <_Builtin.Block
                      className="already-scheduled__label-2 is--icon is--icon-calendar"
                      id="w-node-ff670802-73cd-4892-eec4-8fcfdd2a8941-dd2a8914"
                      tag="div"
                    >
                      {"Secondary Date"}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="already-scheduled__info-2"
                      tag="div"
                    >
                      <_Builtin.Span
                        className="already-scheduled__time"
                        data-key="Second-Choice-Time"
                        id="submitted-Second-Choice-Time"
                      >
                        {"10:00 AM"}
                      </_Builtin.Span>{" "}
                      <_Builtin.Span
                        data-key="Second-Choice-Date"
                        id="submitted-Second-Choice-Date"
                      >
                        {"Thursday, 08/24/2024"}
                      </_Builtin.Span>
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    id="w-node-ff670802-73cd-4892-eec4-8fcfdd2a8949-dd2a8914"
                    tag="div"
                  >
                    <_Builtin.Block
                      className="already-scheduled__label is--icon is--icon-address"
                      id="w-node-ff670802-73cd-4892-eec4-8fcfdd2a894a-dd2a8914"
                      tag="div"
                    >
                      {"Address"}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="already-scheduled__info"
                      tag="div"
                      data-key="Address"
                      id="submitted-Address"
                    >
                      {
                        "6728 Edgewater Commerce Pkwy, Orlando, FL 32810, United States"
                      }
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className="marker-map"
                  tag="div"
                  id="address-map"
                />
              </_Builtin.Block>
              <_Builtin.Block
                className="form__seperator no--margin"
                tag="div"
              />
              <_Builtin.Block className="already-scheduled__section" tag="div">
                <_Builtin.Heading className="h5-2" tag="h3">
                  {"Your information"}
                </_Builtin.Heading>
                <_Builtin.Block className="already-scheduled__group" tag="div">
                  <_Builtin.Block
                    id="w-node-ff670802-73cd-4892-eec4-8fcfdd2a8954-dd2a8914"
                    tag="div"
                  >
                    <_Builtin.Block
                      className="already-scheduled__label"
                      id="w-node-ff670802-73cd-4892-eec4-8fcfdd2a8955-dd2a8914"
                      tag="div"
                    >
                      {"Email Address"}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="already-scheduled__info"
                      tag="div"
                      data-key="Email"
                      id="submitted-Email"
                    >
                      {"john.doe@email.com"}
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    id="w-node-ff670802-73cd-4892-eec4-8fcfdd2a8959-dd2a8914"
                    tag="div"
                  >
                    <_Builtin.Block
                      className="already-scheduled__label"
                      id="w-node-ff670802-73cd-4892-eec4-8fcfdd2a895a-dd2a8914"
                      tag="div"
                    >
                      {"Phone Number"}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="already-scheduled__info"
                      tag="div"
                      data-key="Phone-Number"
                      id="submitted-Phone-Number"
                    >
                      {"+1 (555) 000-0000"}
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    id="w-node-ff670802-73cd-4892-eec4-8fcfdd2a895e-dd2a8914"
                    tag="div"
                  >
                    <_Builtin.Block
                      className="already-scheduled__label"
                      id="w-node-ff670802-73cd-4892-eec4-8fcfdd2a895f-dd2a8914"
                      tag="div"
                    >
                      {"First Name"}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="already-scheduled__info"
                      tag="div"
                      data-key="First-Name"
                    >
                      {"John"}
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    id="w-node-ff670802-73cd-4892-eec4-8fcfdd2a8963-dd2a8914"
                    tag="div"
                  >
                    <_Builtin.Block
                      className="already-scheduled__label"
                      id="w-node-ff670802-73cd-4892-eec4-8fcfdd2a8964-dd2a8914"
                      tag="div"
                    >
                      {"Last Name"}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="already-scheduled__info"
                      tag="div"
                      data-key="Last-Name"
                      id="submitted-Last-Name"
                    >
                      {"Doe"}
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    id="w-node-ff670802-73cd-4892-eec4-8fcfdd2a8968-dd2a8914"
                    tag="div"
                  >
                    <_Builtin.Block
                      className="already-scheduled__label"
                      id="w-node-ff670802-73cd-4892-eec4-8fcfdd2a8969-dd2a8914"
                      tag="div"
                    >
                      {"I’m interested in"}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="already-scheduled__info"
                      tag="div"
                      data-key="Interests-Label"
                      id="submitted-Interests-Label"
                    >
                      {"Closet, Garage"}
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    id="w-node-ff670802-73cd-4892-eec4-8fcfdd2a896d-dd2a8914"
                    tag="div"
                  >
                    <_Builtin.Block
                      className="already-scheduled__label"
                      id="w-node-ff670802-73cd-4892-eec4-8fcfdd2a896e-dd2a8914"
                      tag="div"
                    >
                      {"Comments"}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="already-scheduled__info"
                      tag="div"
                      data-key="Comments"
                      id="submitted-Comments"
                    >
                      {
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae vehicula dolor. Cras et aliquam neque. Donec eleifend lacus a ex lacinia egestas."
                      }
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.VFlex>
        </_Builtin.Block>
        <_Builtin.FormWrapper className="form-block is--multistep">
          <_Builtin.Block className="section-header-v2" tag="div">
            <_Builtin.Heading className="h5-v2" tag="h2">
              {"Schedule your next day appointment."}
            </_Builtin.Heading>
          </_Builtin.Block>
          <_Builtin.FormForm
            className="form-vertical form-multi-steps form-checkbox-validation form-new-v2 form-smaller-v2"
            name="wf-form-Appointment-Form-Landing-Top"
            data-name="Appointment Form Landing Top"
            redirect="/thank-you"
            data-redirect="/thank-you"
            method="get"
            id="wf-form-Appointment-Form-Landing-Top"
          >
            <_Builtin.Block className="link-holder" tag="div" />
            <_Builtin.Block className="form-steps__wrapper-v2" tag="div">
              <_Builtin.Block className="form-steps" tag="div">
                <_Builtin.Block
                  className="form-steps__single active"
                  tag="div"
                  id="schedule-step-0"
                >
                  <_Builtin.Block className="form__heading-wrap-v2" tag="div">
                    <_Builtin.Block className="h8-v2" tag="div">
                      {
                        "Book now! You’ll be enjoying your new custom space in as little as 9-14 days."
                      }
                      <br />
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block className="form__col is--grid" tag="div">
                    <_Builtin.Block className="form__group" tag="div">
                      <_Builtin.FormBlockLabel
                        className="form__label-v2"
                        htmlFor="main-form-Email"
                      >
                        {"Email Address"}
                      </_Builtin.FormBlockLabel>
                      <_Builtin.FormTextInput
                        className="form__input form__input--email form__input__v2"
                        name="Email"
                        maxLength="80"
                        data-name="Email"
                        placeholder="jdoe@example.com"
                        disabled={false}
                        type="email"
                        required={true}
                        autoFocus={false}
                        autoComplete="email"
                        id="landing-top-form-Email"
                      />
                      <_Builtin.Block
                        className="form__validation-msg"
                        tag="div"
                      >
                        {"This field is required."}
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block className="form__group" tag="div">
                      <_Builtin.FormBlockLabel
                        className="form__label-v2"
                        htmlFor="main-form-Phone-Number"
                      >
                        {"Phone Number"}
                      </_Builtin.FormBlockLabel>
                      <_Builtin.FormTextInput
                        className="form__input form__input--tel form__input__v2"
                        name="Phone-Number"
                        maxLength={256}
                        data-name="Phone Number"
                        placeholder="(201) 555-0123"
                        disabled={false}
                        type="tel"
                        required={true}
                        autoFocus={false}
                        autoComplete="tel-national"
                        id="landing-top-form-Phone-Number"
                      />
                      <_Builtin.DOM
                        tag="input"
                        type="hidden"
                        name="Formatted-Phone-Number"
                        id="main-form-Formatted-Phone-Number"
                        data-name="Formatted Phone Number"
                      />
                      <_Builtin.Block
                        className="form__validation-msg"
                        tag="div"
                      >
                        {"This field is required."}
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block className="form__group" tag="div">
                      <_Builtin.FormBlockLabel
                        className="form__label-v2"
                        htmlFor="main-form-First-Name"
                      >
                        {"First Name"}
                      </_Builtin.FormBlockLabel>
                      <_Builtin.FormTextInput
                        className="form__input form__input__v2"
                        name="First-Name"
                        maxLength="80"
                        data-name="First Name"
                        placeholder="John"
                        disabled={false}
                        type="text"
                        required={true}
                        autoFocus={false}
                        autoComplete="given-name"
                        id="landing-top-form-First-Name"
                      />
                      <_Builtin.Block
                        className="form__validation-msg"
                        tag="div"
                      >
                        {"This field is required."}
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block className="form__group" tag="div">
                      <_Builtin.FormBlockLabel
                        className="form__label-v2"
                        htmlFor="main-form-Last-Name"
                      >
                        {"Last Name"}
                      </_Builtin.FormBlockLabel>
                      <_Builtin.FormTextInput
                        className="form__input form__input__v2"
                        name="Last-Name"
                        maxLength="80"
                        data-name="Last Name"
                        placeholder="Doe"
                        disabled={false}
                        type="text"
                        required={true}
                        autoFocus={false}
                        autoComplete="family-name"
                        id="landing-top-form-Last-Name"
                      />
                      <_Builtin.Block
                        className="form__validation-msg"
                        tag="div"
                      >
                        {"This field is required."}
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="form__group"
                      id="w-node-ff670802-73cd-4892-eec4-8fcfdd2a8999-dd2a8914"
                      tag="div"
                    >
                      <_Builtin.FormCheckboxWrapper className="form__checkbox form__checkbox__v2">
                        <_Builtin.FormCheckboxInput
                          className="form__checkbox-input is--consent is--consent-v2"
                          type="checkbox"
                          name="Marketing-Consent-3"
                          data-name="Marketing Consent 3"
                          required={false}
                          checked={true}
                          id="Marketing-Consent-3"
                          form={{
                            type: "checkbox-input",
                            name: "Marketing Consent 3",
                          }}
                          inputType="default"
                        />
                        <_Builtin.FormInlineLabel className="form__checkbox-label-v2">
                          {
                            "I want to receive exclusive emails and SMS messages with news and special offers."
                          }
                        </_Builtin.FormInlineLabel>
                      </_Builtin.FormCheckboxWrapper>
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className="form__submit is--center form__submit__v2"
                    tag="div"
                  >
                    <_Builtin.Block className="form__validation-msg" tag="div">
                      {
                        "There are errors in the form. Please check all the fields and try to submit it again."
                      }
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="form__submit-btns is--center form__submit-btns__v2"
                      tag="div"
                    >
                      <_Builtin.Block
                        className="form__submit-btns--inner"
                        tag="div"
                      >
                        <_Builtin.Link
                          className="btn btn--form-next btn--form--v2"
                          button={false}
                          data-save-step="true"
                          block="inline"
                          options={{
                            href: "#",
                          }}
                        >
                          <_Builtin.Block tag="div">
                            {"Confirm Contact "}
                            <_Builtin.Span className="hidden-on-mobile">
                              {"Info"}
                            </_Builtin.Span>
                          </_Builtin.Block>
                          <IconArrowRight2 />
                        </_Builtin.Link>
                        <_Builtin.Block
                          className="form__submit-tip hidden"
                          tag="div"
                        >
                          {"or press "}
                          <_Builtin.Strong>{"Enter ↵"}</_Builtin.Strong>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block className="h12-v2 agree-terms" tag="div">
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
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className="form-steps__single"
                  tag="div"
                  id="schedule-step-1"
                >
                  <_Builtin.Block className="form__heading-wrap-v2" tag="div">
                    <_Builtin.Block className="h8-v2" tag="div">
                      {
                        "Confirm your address, and one of our local designers can stop by as soon as tomorrow!"
                      }
                      <br />
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block className="form__col is--grid" tag="div">
                    <_Builtin.Block className="form__group" tag="div">
                      <_Builtin.FormBlockLabel
                        className="form__label-v2"
                        htmlFor="main-form-Address"
                      >
                        {"Street Address"}
                      </_Builtin.FormBlockLabel>
                      <_Builtin.FormTextInput
                        className="form__input form__input--address form__input__v2"
                        name="Address"
                        maxLength="255"
                        data-name="Address"
                        placeholder="3860 Capitol Ave"
                        disabled={false}
                        type="text"
                        required={true}
                        autoFocus={false}
                        autoComplete="address-line1"
                        id="landing-top-form-Address"
                      />
                      <_Builtin.Block
                        className="form__validation-msg"
                        tag="div"
                      >
                        {"This field is required."}
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block className="form__group" tag="div">
                      <_Builtin.FormBlockLabel
                        className="form__label-v2"
                        htmlFor="main-form-Unit"
                      >
                        {"Apartment, Unit, Suite, etc."}
                      </_Builtin.FormBlockLabel>
                      <_Builtin.FormTextInput
                        className="form__input form__input--unit form__input__v2"
                        name="Unit"
                        maxLength="255"
                        data-name="Unit"
                        placeholder="Suite B"
                        disabled={false}
                        type="text"
                        required={false}
                        autoFocus={false}
                        autoComplete="address-line2"
                        id="landing-top-form-Unit"
                      />
                      <_Builtin.Block
                        className="form__validation-msg"
                        tag="div"
                      >
                        {"This field is required."}
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block className="form__group" tag="div">
                      <_Builtin.FormBlockLabel
                        className="form__label-v2"
                        htmlFor="main-form-City"
                      >
                        {"City"}
                      </_Builtin.FormBlockLabel>
                      <_Builtin.FormTextInput
                        className="form__input form__input__v2"
                        name="City"
                        maxLength="50"
                        data-name="City"
                        placeholder="Whittier"
                        disabled={false}
                        type="text"
                        required={true}
                        autoFocus={false}
                        autoComplete="address-level2"
                        id="landing-top-form-City"
                      />
                      <_Builtin.Block
                        className="form__validation-msg"
                        tag="div"
                      >
                        {"This field is required."}
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block className="form__group" tag="div">
                      <_Builtin.FormBlockLabel
                        className="form__label-v2"
                        htmlFor="main-form-State"
                      >
                        {"State"}
                      </_Builtin.FormBlockLabel>
                      <_Builtin.FormSelect
                        className="form__select form__select__v2"
                        name="State"
                        data-name="State"
                        required={true}
                        multiple={false}
                        autoComplete="address-level1"
                        id="landing-top-form-State"
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
                        className="form__validation-msg"
                        tag="div"
                      >
                        {"This field is required."}
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block className="form__group" tag="div">
                      <_Builtin.FormBlockLabel
                        className="form__label-v2"
                        htmlFor="main-form-ZIP-Code"
                      >
                        {"Zipcode"}
                      </_Builtin.FormBlockLabel>
                      <_Builtin.FormTextInput
                        className="form__input form__input--zip form__input__v2"
                        name="ZIP-Code"
                        maxLength="7"
                        data-name="ZIP Code"
                        placeholder="90601"
                        disabled={false}
                        type="text"
                        required={true}
                        autoFocus={false}
                        autoComplete="postal-code"
                        minLength="5"
                        id="landing-top-form-ZIP-Code"
                      />
                      <_Builtin.Block
                        className="form__validation-msg"
                        tag="div"
                      >
                        {"This field is required."}
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="form__group"
                      id="w-node-ff670802-73cd-4892-eec4-8fcfdd2a89dd-dd2a8914"
                      tag="div"
                    >
                      <_Builtin.FormBlockLabel
                        className="form__label-v2"
                        htmlFor="main-form-Country"
                      >
                        {"Country"}
                      </_Builtin.FormBlockLabel>
                      <_Builtin.FormSelect
                        className="form__select form__select__v2"
                        name="Country"
                        data-name="Country"
                        required={true}
                        multiple={false}
                        autoComplete="country"
                        id="landing-top-form-Country"
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
                        className="form__validation-msg"
                        tag="div"
                      >
                        {"This field is required."}
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className="form__submit is--center form__submit__v2"
                    tag="div"
                  >
                    <_Builtin.Block className="form__validation-msg" tag="div">
                      {
                        "There are errors in the form. Please check all the fields and try to submit it again."
                      }
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="form__submit-btns is--center form__submit-btns__v2"
                      tag="div"
                    >
                      <_Builtin.Block
                        className="form__submit-btns--inner"
                        tag="div"
                      >
                        <_Builtin.Link
                          className="btn btn--form-next btn--form--v2"
                          button={false}
                          block="inline"
                          options={{
                            href: "#",
                          }}
                        >
                          <_Builtin.Block tag="div">
                            {"Confirm Address"}
                          </_Builtin.Block>
                          <IconArrowRight2 />
                        </_Builtin.Link>
                        <_Builtin.Block
                          className="form__submit-tip hidden"
                          tag="div"
                        >
                          {"or press "}
                          <_Builtin.Strong>{"Enter ↵"}</_Builtin.Strong>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Link
                        className="btn btn--form-back btn--form-back-v2 hidden"
                        button={false}
                        block="inline"
                        options={{
                          href: "#",
                        }}
                      >
                        <IconArrowLeft2 />
                        <_Builtin.Block tag="div">
                          {"Previous Step"}
                        </_Builtin.Block>
                      </_Builtin.Link>
                      <_Builtin.Block className="h12-v2 agree-terms" tag="div">
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
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className="form-steps__single"
                  tag="div"
                  id="schedule-step-2"
                >
                  <_Builtin.Block className="form__heading-wrap-v2" tag="div">
                    <_Builtin.VFlex className="max-w-560" tag="div">
                      <_Builtin.Block className="h8-v2" tag="div">
                        {
                          "Select the space, the date, and the time, and we’ll call you to confirm your in-home consultation."
                        }
                        <br />
                      </_Builtin.Block>
                    </_Builtin.VFlex>
                  </_Builtin.Block>
                  <_Builtin.Block className="form__col is--grid" tag="div">
                    <_Builtin.Block
                      className="form__group"
                      id="w-node-ff670802-73cd-4892-eec4-8fcfdd2a8a07-dd2a8914"
                      tag="div"
                    >
                      <_Builtin.Block
                        className="form__label-v2 form__label--visible form__label--required is--center"
                        tag="div"
                      >
                        {"Area(s) of Interest"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="form__checkbox-group in--multistep is--v2"
                        tag="div"
                      >
                        <_Builtin.FormCheckboxWrapper
                          className="form__checkbox is--multi form__checkbox--v2"
                          id="w-node-ff670802-73cd-4892-eec4-8fcfdd2a8a0b-dd2a8914"
                        >
                          <_Builtin.FormCheckboxInput
                            className="form__checkbox-input form__checkbox-input__v2 is--multi"
                            type="checkbox"
                            name="Interests-Closet"
                            data-name="Interests Closet"
                            required={false}
                            checked={false}
                            data-value="1"
                            id="landing-top-form-Interests-Closet"
                            form={{
                              type: "checkbox-input",
                              name: "Interests Closet",
                            }}
                            inputType="default"
                          />
                          <_Builtin.Block
                            className="form__checkbox-number is--v2"
                            id="w-node-ff670802-73cd-4892-eec4-8fcfdd2a8a0d-dd2a8914"
                            tag="div"
                          >
                            {"1"}
                          </_Builtin.Block>
                          <_Builtin.FormInlineLabel className="form__checkbox-label is--v2">
                            {"Closet"}
                          </_Builtin.FormInlineLabel>
                        </_Builtin.FormCheckboxWrapper>
                        <_Builtin.FormCheckboxWrapper className="form__checkbox is--multi form__checkbox--v2">
                          <_Builtin.FormCheckboxInput
                            className="form__checkbox-input form__checkbox-input__v2 is--multi"
                            type="checkbox"
                            name="Interests-Garage"
                            data-name="Interests Garage"
                            required={false}
                            checked={false}
                            data-value="2"
                            id="landing-top-form-Interests-Garage"
                            form={{
                              type: "checkbox-input",
                              name: "Interests Garage",
                            }}
                            inputType="default"
                          />
                          <_Builtin.Block
                            className="form__checkbox-number is--v2"
                            id="w-node-ff670802-73cd-4892-eec4-8fcfdd2a8a13-dd2a8914"
                            tag="div"
                          >
                            {"2"}
                          </_Builtin.Block>
                          <_Builtin.FormInlineLabel className="form__checkbox-label is--v2">
                            {"Garage"}
                          </_Builtin.FormInlineLabel>
                        </_Builtin.FormCheckboxWrapper>
                        <_Builtin.FormCheckboxWrapper className="form__checkbox is--multi form__checkbox--v2">
                          <_Builtin.FormCheckboxInput
                            className="form__checkbox-input form__checkbox-input__v2 is--multi"
                            type="checkbox"
                            name="Interests-Home-Office"
                            data-name="Interests Home Office"
                            required={false}
                            checked={false}
                            data-value="3"
                            id="landing-top-form-Interests-Home-Office"
                            form={{
                              type: "checkbox-input",
                              name: "Interests Home Office",
                            }}
                            inputType="default"
                          />
                          <_Builtin.Block
                            className="form__checkbox-number is--v2"
                            id="w-node-ff670802-73cd-4892-eec4-8fcfdd2a8a19-dd2a8914"
                            tag="div"
                          >
                            {"3"}
                          </_Builtin.Block>
                          <_Builtin.FormInlineLabel className="form__checkbox-label is--v2">
                            {"Home Office"}
                          </_Builtin.FormInlineLabel>
                        </_Builtin.FormCheckboxWrapper>
                        <_Builtin.FormCheckboxWrapper className="form__checkbox is--multi form__checkbox--v2">
                          <_Builtin.FormCheckboxInput
                            className="form__checkbox-input form__checkbox-input__v2 is--multi"
                            type="checkbox"
                            name="Interests-Pantry"
                            data-name="Interests Pantry"
                            required={false}
                            checked={false}
                            data-value="4"
                            id="landing-top-form-Interests-Pantry"
                            form={{
                              type: "checkbox-input",
                              name: "Interests Pantry",
                            }}
                            inputType="default"
                          />
                          <_Builtin.Block
                            className="form__checkbox-number is--v2"
                            id="w-node-ff670802-73cd-4892-eec4-8fcfdd2a8a1f-dd2a8914"
                            tag="div"
                          >
                            {"4"}
                          </_Builtin.Block>
                          <_Builtin.FormInlineLabel className="form__checkbox-label is--v2">
                            {"Pantry"}
                          </_Builtin.FormInlineLabel>
                        </_Builtin.FormCheckboxWrapper>
                        <_Builtin.FormCheckboxWrapper className="form__checkbox is--multi form__checkbox--v2">
                          <_Builtin.FormCheckboxInput
                            className="form__checkbox-input form__checkbox-input__v2 is--multi"
                            type="checkbox"
                            name="Interests-Laundry"
                            data-name="Interests Laundry"
                            required={false}
                            checked={false}
                            data-value="5"
                            id="landing-top-form-Interests-Laundry"
                            form={{
                              type: "checkbox-input",
                              name: "Interests Laundry",
                            }}
                            inputType="default"
                          />
                          <_Builtin.Block
                            className="form__checkbox-number is--v2"
                            id="w-node-ff670802-73cd-4892-eec4-8fcfdd2a8a25-dd2a8914"
                            tag="div"
                          >
                            {"5"}
                          </_Builtin.Block>
                          <_Builtin.FormInlineLabel className="form__checkbox-label is--v2">
                            {"Laundry"}
                          </_Builtin.FormInlineLabel>
                        </_Builtin.FormCheckboxWrapper>
                        <_Builtin.FormCheckboxWrapper className="form__checkbox is--multi form__checkbox--v2">
                          <_Builtin.FormCheckboxInput
                            className="form__checkbox-input form__checkbox-input__v2 is--multi"
                            type="checkbox"
                            name="Interests-Wall-Bed"
                            data-name="Interests Wall Bed"
                            required={false}
                            checked={false}
                            data-value="6"
                            id="landing-top-form-Interests-Wall-Bed"
                            form={{
                              type: "checkbox-input",
                              name: "Interests Wall Bed",
                            }}
                            inputType="default"
                          />
                          <_Builtin.Block
                            className="form__checkbox-number is--v2"
                            id="w-node-ff670802-73cd-4892-eec4-8fcfdd2a8a2b-dd2a8914"
                            tag="div"
                          >
                            {"6"}
                          </_Builtin.Block>
                          <_Builtin.FormInlineLabel className="form__checkbox-label is--v2">
                            {"Wall Bed"}
                          </_Builtin.FormInlineLabel>
                        </_Builtin.FormCheckboxWrapper>
                        <_Builtin.FormCheckboxWrapper className="form__checkbox is--multi form__checkbox--v2">
                          <_Builtin.FormCheckboxInput
                            className="form__checkbox-input form__checkbox-input__v2 is--multi"
                            type="checkbox"
                            name="Interests-Sliding-Door"
                            data-name="Interests Sliding Door"
                            required={false}
                            checked={false}
                            data-value="7"
                            id="landing-top-form-Interests-Sliding-Door"
                            form={{
                              type: "checkbox-input",
                              name: "Interests Sliding Door",
                            }}
                            inputType="default"
                          />
                          <_Builtin.Block
                            className="form__checkbox-number is--v2"
                            id="w-node-ff670802-73cd-4892-eec4-8fcfdd2a8a31-dd2a8914"
                            tag="div"
                          >
                            {"7"}
                          </_Builtin.Block>
                          <_Builtin.FormInlineLabel className="form__checkbox-label is--v2">
                            {"Sliding Door"}
                          </_Builtin.FormInlineLabel>
                        </_Builtin.FormCheckboxWrapper>
                        <_Builtin.FormCheckboxWrapper className="form__checkbox is--multi form__checkbox--v2">
                          <_Builtin.FormCheckboxInput
                            className="form__checkbox-input form__checkbox-input__v2 is--multi"
                            type="checkbox"
                            name="Interests-Other"
                            data-name="Interests Other"
                            required={false}
                            checked={false}
                            data-value="8"
                            id="landing-top-form-Interests-Other"
                            form={{
                              type: "checkbox-input",
                              name: "Interests Other",
                            }}
                            inputType="default"
                          />
                          <_Builtin.Block
                            className="form__checkbox-number is--v2"
                            id="w-node-ff670802-73cd-4892-eec4-8fcfdd2a8a37-dd2a8914"
                            tag="div"
                          >
                            {"8"}
                          </_Builtin.Block>
                          <_Builtin.FormInlineLabel className="form__checkbox-label is--v2">
                            {"Other"}
                          </_Builtin.FormInlineLabel>
                        </_Builtin.FormCheckboxWrapper>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="form__validation-msg text-align--center"
                        tag="div"
                      >
                        {"This field is required."}
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="form__group"
                      id="w-node-ff670802-73cd-4892-eec4-8fcfdd2a8a3d-dd2a8914"
                      tag="div"
                    >
                      <_Builtin.FormBlockLabel
                        className="form__label-v2 form__label--visible form__label--required"
                        htmlFor="main-form-First-Choice-Date"
                      >
                        {"Pick First Date"}
                      </_Builtin.FormBlockLabel>
                      <_Builtin.FormTextInput
                        className="form__input form__input--date form__input__v2"
                        name="First-Choice-Date"
                        maxLength={256}
                        data-name="First Choice Date"
                        placeholder="mm/dd/yyyy"
                        disabled={false}
                        type="text"
                        required={true}
                        autoFocus={false}
                        id="landing-top-form-First-Choice-Date"
                      />
                      <_Builtin.Block
                        className="form__validation-msg"
                        tag="div"
                      >
                        {"This field is required."}
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="form__group"
                      id="w-node-ff670802-73cd-4892-eec4-8fcfdd2a8a43-dd2a8914"
                      tag="div"
                    >
                      <_Builtin.FormBlockLabel
                        className="form__label-v2 form__label--visible form__label--required"
                        htmlFor="main-form-First-Choice-Time"
                      >
                        {"Pick First Time"}
                      </_Builtin.FormBlockLabel>
                      <_Builtin.FormSelect
                        className="form__select form__select__v2"
                        name="First-Choice-Time"
                        data-name="First Choice Time"
                        required={true}
                        multiple={false}
                        form__select--time=""
                        id="landing-top-form-First-Choice-Time"
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
                        className="form__validation-msg"
                        tag="div"
                      >
                        {"This field is required."}
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.VFlex
                      className="form__col__bg"
                      id="w-node-ff670802-73cd-4892-eec4-8fcfdd2a8a49-dd2a8914"
                      tag="div"
                    >
                      <_Builtin.Block className="form__group" tag="div">
                        <_Builtin.FormBlockLabel
                          className="form__label-v2 form__label--visible"
                          htmlFor="main-form-Second-Choice-Date"
                        >
                          {"Pick Second Date"}
                        </_Builtin.FormBlockLabel>
                        <_Builtin.FormTextInput
                          className="form__input form__input--date form__input__v2"
                          name="Second-Choice-Date"
                          maxLength={256}
                          data-name="Second Choice Date"
                          placeholder="mm/dd/yyyy"
                          disabled={false}
                          type="text"
                          required={false}
                          autoFocus={false}
                          id="landing-top-form-Second-Choice-Date"
                        />
                        <_Builtin.Block
                          className="form__validation-msg"
                          tag="div"
                        >
                          {"This field is required."}
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block className="form__group" tag="div">
                        <_Builtin.FormBlockLabel
                          className="form__label-v2 form__label--visible"
                          htmlFor="main-form-Second-Choice-Time"
                        >
                          {"Pick Second Time"}
                        </_Builtin.FormBlockLabel>
                        <_Builtin.FormSelect
                          className="form__select form__select__v2"
                          name="Second-Choice-Time"
                          data-name="Second Choice Time"
                          required={false}
                          multiple={false}
                          form__select--time=""
                          id="landing-top-form-Second-Choice-Time"
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
                          className="form__validation-msg"
                          tag="div"
                        >
                          {"This field is required."}
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.VFlex>
                    <_Builtin.Block
                      className="form__group hidden"
                      id="w-node-ff670802-73cd-4892-eec4-8fcfdd2a8a56-dd2a8914"
                      tag="div"
                    >
                      <_Builtin.FormBlockLabel
                        className="form__label"
                        htmlFor="main-form-Comments"
                      >
                        {"Additional Comments"}
                      </_Builtin.FormBlockLabel>
                      <_Builtin.FormTextarea
                        className="form__textarea"
                        name="Comments"
                        maxLength="2000"
                        data-name="Comments"
                        placeholder="Additional Comments"
                        required={false}
                        autoFocus={false}
                        id="main-form-Comments"
                      />
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className="form__submit is--center form__submit__v2"
                    tag="div"
                  >
                    <_Builtin.Block className="form__validation-msg" tag="div">
                      {
                        "There are errors in the form. Please check all the fields and try to submit it again."
                      }
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="form__submit-btns is--center form__submit-btns__v2"
                      tag="div"
                    >
                      <_Builtin.Block
                        className="form__submit-btns--inner"
                        tag="div"
                      >
                        <_Builtin.Link
                          className="btn btn--form btn--form-submit btn--form--v2"
                          button={false}
                          block="inline"
                          options={{
                            href: "#",
                          }}
                        >
                          <_Builtin.Block tag="div">
                            {"Confirm Appointment"}
                          </_Builtin.Block>
                          <IconArrowRight2 />
                        </_Builtin.Link>
                        <_Builtin.Block
                          className="form__submit-tip hidden"
                          tag="div"
                        >
                          {"or press "}
                          <_Builtin.Strong>{"Enter ↵"}</_Builtin.Strong>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Link
                        className="btn btn--form-back btn--form-back-v2"
                        button={false}
                        block="inline"
                        options={{
                          href: "#",
                        }}
                      >
                        <IconArrowLeft2 />
                        <_Builtin.Block tag="div">
                          {"Previous Step"}
                        </_Builtin.Block>
                      </_Builtin.Link>
                      <_Builtin.Block className="h12-v2 agree-terms" tag="div">
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
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.HtmlEmbed
              className="hidden-html"
              value="%3Cinput%20type%3D%22hidden%22%20id%3D%22landing-top-form-Location-ID%22%20name%3D%22Location-ID%22%20value%3D%220%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22landing-top-form-Status-ID%22%20name%3D%22Status-ID%22%20value%3D%221%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22landing-top-form-Form-ID%22%20name%3D%22Form-ID%22%20value%3D%2214%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22landing-top-form-Browser-ID%22%20name%3D%22Browser-ID%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22landing-top-form-Marketing-Code%22%20name%3D%22Marketing-Code%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22landing-top-form-Request-URL%22%20name%3D%22Request-URL%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22landing-top-form-HTTP-Referrer%22%20name%3D%22HTTP-Referrer%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22landing-top-form-Landing-URL%22%20name%3D%22Landing-URL%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22landing-top-form-Client-IP%22%20name%3D%22Client-IP%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22landing-top-form-Form-Emails%22%20name%3D%22Form-Emails%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22landing-top-form-Interests-Label%22%20name%3D%22Interests-Label%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22landing-top-form-Domain-Name%22%20name%3D%22Domain-Name%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22landing-top-form-Form-Guid%22%20name%3D%22Form-Guid%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22landing-top-form-Test-Entry%22%20name%3D%22Test-Entry%22%20value%3D%22false%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22landing-top-form-Language-ID%22%20name%3D%22Language-ID%22%20value%3E%0A%3C!--%20URL%20Parameter%20--%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22landing-top-form-Parameter-utm_source%22%20name%3D%22Parameter-utm_source%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22landing-top-form-Parameter-utm_medium%22%20name%3D%22Parameter-utm_medium%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22landing-top-form-Parameter-utm_campaign%22%20name%3D%22Parameter-utm_campaign%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22landing-top-form-Parameter-utm_content%22%20name%3D%22Parameter-utm_content%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22landing-top-form-Parameter-utm_term%22%20name%3D%22Parameter-utm_term%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22landing-top-form-Parameter-match_type%22%20name%3D%22Parameter-match_type%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22landing-top-form-Parameter-network%22%20name%3D%22Parameter-network%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22landing-top-form-Parameter-device%22%20name%3D%22Parameter-device%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22landing-top-form-Parameter-loc_physical%22%20name%3D%22Parameter-loc_physical%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22landing-top-form-Parameter-creative%22%20name%3D%22Parameter-creative%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22landing-top-form-Parameter-gbraid%22%20name%3D%22Parameter-gbraid%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22landing-top-form-Parameter-wbraid%22%20name%3D%22Parameter-wbraid%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22landing-top-form-Parameter-gclid%22%20name%3D%22Parameter-gclid%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22landing-top-form-Parameter-msclkid%22%20name%3D%22Parameter-msclkid%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22landing-top-form-Parameter-term%22%20name%3D%22Parameter-term%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22landing-top-form-Parameter-id%22%20name%3D%22Parameter-id%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22landing-top-form-Parameter-adset%22%20name%3D%22Parameter-adset%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22landing-top-form-Parameter-fbclid%22%20name%3D%22Parameter-fbclid%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22landing-top-form-Parameter-utm_id%22%20name%3D%22Parameter-utm_id%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22landing-top-form-Parameter-epik%22%20name%3D%22Parameter-epik%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22landing-top-form-Parameter-cto_pld%22%20name%3D%22Parameter-cto_pld%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22landing-top-form-Parameter-cta%22%20name%3D%22Parameter-cta%22%20value%3E"
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
        <_Builtin.HtmlEmbed
          className="hidden-code"
          value="%3Cstyle%3E%0A%20%20%2F*%20iframe%20styling%20-%20Google%20Maps%20*%2F%0A%20%20%23map-address-iframe%20%7B%0A%20%20%20%20width%3A%20100%25%3B%20!important%3B%0A%20%20%7D%0A%0A%20%20%2F*%20Multi%20Step%20Form%20Styling%20*%2F%0A%20%20%2F*%20Fields%20*%2F%0A%20%20%2F*%0A%20%20.form-block.is--multistep%20.form__select%2C%0A%20%20.form-block.is--multistep%20.form__input%20%7B%0A%20%20%20%20border-top%3A%20none%3B%0A%20%20%20%20border-left%3A%20none%3B%0A%20%20%20%20border-right%3A%20none%3B%0A%20%20%20%20border-radius%3A%200%3B%0A%20%20%20%20border-width%3A%202px%3B%0A%20%20%20%20transition%3A%20border-color%200.2s%20ease%3B%0A%20%20%20%20padding-left%3A%200%3B%0A%20%20%20%20padding-right%3A%200%3B%0A%20%20%20%20height%3A%20auto%3B%0A%20%20%7D%0A%20%20*%2F%0A%20%20.form-block.is--multistep%20.form__input.form__input--date%20%7B%0A%20%20%09background-image%3A%20url(https%3A%2F%2Fcdn.prod.website-files.com%2F65dc50a9ff2046f1c1b27199%2F67924e28c926e270bac52089_Calque.svg)%3B%0A%20%20%20%20background-position-x%3A%20calc(100%25%20-%2010px)%3B%0A%20%20%20%20background-position-y%3A%20center%3B%0A%20%20%7D%0A%20%20.form-block.is--multistep%20.form__select.form__select__v2%5Bform__select--time%5D%20%7B%0A%20%20%09background-image%3A%20url(https%3A%2F%2Fcdn.prod.website-files.com%2F65dc50a9ff2046f1c1b27199%2F67aefe5d5ea1db942993e310_Calque_1.svg)%3B%0A%20%20%20%20background-size%3A%2020px%3B%0A%20%20%20%20background-position-x%3A%20calc(100%25%20-%2010px)%3B%0A%20%20%7D%0A%20%20.form-block.is--multistep%20.form__select%3Afocus%2C%0A%20%20.form-block.is--multistep%20.form__input%3Afocus%20%7B%0A%20%20%20%20border-color%3A%20black%3B%0A%20%20%7D%0A%20%20%2F*%0A%20%20.form-block.is--multistep%20.form__group%20%7B%0A%20%20%20%20margin-bottom%3A%2024px%3B%0A%20%20%7D%0A%20%20%0A%20%20.form-block.is--multistep%20.form__label%20%7B%0A%20%20%20%20font-weight%3A%20700%3B%0A%20%20%7D%0A%20%20.form-block.is--multistep%20.form__heading-wrap%20%7B%0A%20%20%20%20margin-bottom%3A%2032px%3B%0A%20%20%7D%0A%20%20*%2F%0A%20%20.form__checkbox.is--multi.is--active%20%7B%0A%20%20%20%20border-color%3A%20%23383838%3B%0A%20%20%20%20color%3A%20%23fff%3B%0A%20%20%20%20background-color%3A%20%23383838%3B%0A%20%20%7D%0A%20%20.form__checkbox.is--multi.is--active%20.form__checkbox-number%20%7B%0A%20%20%09border-color%3A%20%23fff%3B%0A%20%20%20%20color%3A%20%23fff%3B%0A%20%20%7D%0A%3C%2Fstyle%3E%0A%0A%3C!--%0A%3Cscript%3E%0A%20%20var%20Webflow%20%3D%20Webflow%20%7C%7C%20%5B%5D%3B%0A%20%20Webflow.push(function%20()%20%7B%0A%20%20%20%20function%20checkVisible(%20elm%2C%20evalType%20)%20%7B%0A%20%20%20%20%20%20evalType%20%3D%20evalType%20%7C%7C%20%22visible%22%3B%0A%0A%20%20%20%20%20%20var%20vpH%20%3D%20%24(window).height()%2C%20%2F%2F%20Viewport%20Height%0A%20%20%20%20%20%20%20%20%20%20st%20%3D%20%24(window).scrollTop()%2C%20%2F%2F%20Scroll%20Top%0A%20%20%20%20%20%20%20%20%20%20y%20%3D%20%24(elm).offset().top%2C%0A%20%20%20%20%20%20%20%20%20%20elementHeight%20%3D%20%24(elm).height()%3B%0A%0A%20%20%20%20%20%20if%20(evalType%20%3D%3D%3D%20%22visible%22)%20return%20((y%20%3C%20(vpH%20%2B%20st))%20%26%26%20(y%20%3E%20(st%20-%20elementHeight)))%3B%0A%20%20%20%20%20%20if%20(evalType%20%3D%3D%3D%20%22above%22)%20return%20((y%20%3C%20(vpH%20%2B%20st)))%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20function%20makeFixedBtn()%20%7B%0A%20%20%20%20%20%20let%20el%20%3D%20%24(%22.form-multi-steps%20.form-steps__single.active%20.form__submit-btns%22)%3B%0A%20%20%20%20%20%20if%20(checkVisible(el%2C%20%22above%22))%20%7B%0A%20%20%20%20%20%20%20%20el.find(%22.form__submit-btns--inner%22).removeClass(%22is--fixed%22)%3B%0A%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20el.find(%22.form__submit-btns--inner%22).addClass(%22is--fixed%22)%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%0A%20%20%20%20makeFixedBtn()%3B%0A%0A%20%20%20%20%24(window).scroll(function()%20%7B%0A%20%20%20%20%20%20makeFixedBtn()%3B%0A%20%20%20%20%7D)%3B%0A%0A%20%20%20%20%24(window).on(%22resize%22%2C%20function()%20%7B%0A%20%20%20%20%20%20makeFixedBtn()%3B%0A%20%20%20%20%7D)%3B%0A%20%20%7D)%3B%0A%3C%2Fscript%3E%20--%3E"
        />
        <_Builtin.HtmlEmbed value="%3Cstyle%3E%0A.form-smaller-v2%20.form__input.form__input__v2%2C%0A.form-smaller-v2%20.form__select.form__select__v2%20%7B%0A%20%20height%3A%2049px%3B%0A%20%20padding%3A%201rem%3B%0A%7D%0A%3C%2Fstyle%3E" />
      </_Builtin.BlockContainer>
    </_Component>
  );
}
