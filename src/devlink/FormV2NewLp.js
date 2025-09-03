"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { IconPhone } from "./IconPhone";
import { IconArrowRight2 } from "./IconArrowRight2";

export function FormV2NewLp({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className="new-form" tag="div" id="form">
      <_Builtin.Block className="new-form__left" tag="div">
        <_Builtin.Block className="hidden-tablet" tag="div">
          <_Builtin.Block
            className="schedule-request__header flex-row"
            tag="div"
          >
            <_Builtin.Block
              className="h9-v2 color-heading-v2 is--semibold"
              tag="div"
            >
              {"Call now to Schedule"}
            </_Builtin.Block>
            <_Builtin.Link
              className="btn-v2"
              button={false}
              block="inline"
              options={{
                href: "tel:1-800-434-6018",
              }}
            >
              <IconPhone />
              <_Builtin.Block tag="div">{"1-800-434-6018"}</_Builtin.Block>
            </_Builtin.Link>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className="hidden-tablet" tag="div">
          <_Builtin.Block
            className="h12-v2 is--red-v2 weight--black text-align--center"
            tag="div"
          >
            {"Our phone lines are open"}
          </_Builtin.Block>
          <_Builtin.Block className="open-times" tag="div">
            <_Builtin.Block className="open-times__slot" tag="div">
              <_Builtin.Block className="h12-v2 is--dark-grey-v2" tag="div">
                {"Mon - Fri"}
              </_Builtin.Block>
              <_Builtin.Block
                className="h12-v2 is--dark-grey-v2 is--bold"
                tag="div"
              >
                {"7:00am - 9:00pm"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block className="separator light-grey" tag="div" />
            <_Builtin.Block className="open-times__slot" tag="div">
              <_Builtin.Block className="h12-v2 is--dark-grey-v2" tag="div">
                {"Saturday"}
              </_Builtin.Block>
              <_Builtin.Block
                className="h12-v2 is--dark-grey-v2 is--bold"
                tag="div"
              >
                {"8:00am - 6:00pm"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block className="separator light-grey" tag="div" />
            <_Builtin.Block className="open-times__slot" tag="div">
              <_Builtin.Block className="h12-v2 is--dark-grey-v2" tag="div">
                {"Sunday"}
              </_Builtin.Block>
              <_Builtin.Block
                className="h12-v2 is--dark-grey-v2 is--bold"
                tag="div"
              >
                {"9:00am - 4:00pm"}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className="notice notice--step1" tag="div">
          <_Builtin.NotSupported _atom="DynamoWrapper" />
        </_Builtin.Block>
        <_Builtin.FormWrapper className="form-block is--multistep">
          <_Builtin.Block className="form-block__header" tag="div">
            <_Builtin.Block className="hidden-tablet" tag="div">
              <_Builtin.Block
                className="h8-v2 color-heading-v2 lh-15"
                tag="div"
              >
                {"Or Quickly Complete Our 4-Step Form to "}
                <_Builtin.Strong>{"Book a Free Consultation!"}</_Builtin.Strong>
              </_Builtin.Block>
              <_Builtin.Block
                className="h10-v2 is--dark-grey-v2 lh-2"
                tag="div"
              >
                {
                  "Your Information is Confidential and will never be shared or sold."
                }
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className="hidden-desktop visible-tablet block"
              tag="div"
            >
              <_Builtin.Block className="h8-v2 mobile-h8-v2" tag="div">
                <_Builtin.Strong>{"Call "}</_Builtin.Strong>
                <_Builtin.Link
                  className="is--white-v2"
                  button={false}
                  block=""
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Span className="is--white-v2">
                    <_Builtin.Strong>{"1-800-434-6018"}</_Builtin.Strong>
                  </_Builtin.Span>
                </_Builtin.Link>
                {" or fill in the info below "}
                <_Builtin.Strong>{"for quick scheduling!"}</_Builtin.Strong>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.FormForm
            className="form-vertical form-multi-steps form-checkbox-validation"
            name="wf-form-Appointment-Form-Multi-V1"
            data-name="Appointment Form Multi V1"
            redirect="/thank-you"
            data-redirect="/thank-you"
            method="get"
            id="wf-form-Appointment-Form-Multi-V1"
          >
            <_Builtin.Block
              className="form-steps__wrapper px-16 py-0 color-switch"
              tag="div"
            >
              <_Builtin.Block className="form-steps" tag="div">
                <_Builtin.Block
                  className="form-steps__single active"
                  tag="div"
                  id="schedule-step-0"
                >
                  <_Builtin.Block className="form__col is--vertical" tag="div">
                    <_Builtin.Block className="form__heading-wrap" tag="div">
                      <_Builtin.Block className="form__heading-title" tag="div">
                        <_Builtin.Heading
                          className="h10-v2 color-inherit"
                          tag="h2"
                        >
                          <_Builtin.Strong>{"1. Contact Info"}</_Builtin.Strong>
                        </_Builtin.Heading>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="form-steps2__progress"
                        tag="div"
                      >
                        <_Builtin.Block
                          className="form-steps2__progress-bar"
                          tag="div"
                        />
                        <_Builtin.Block
                          className="form-steps2__dot"
                          tag="div"
                        />
                        <_Builtin.Block
                          className="form-steps2__dot"
                          tag="div"
                        />
                        <_Builtin.Block
                          className="form-steps2__dot"
                          tag="div"
                        />
                        <_Builtin.Block
                          className="form-steps2__dot"
                          tag="div"
                        />
                        <_Builtin.Block
                          className="form-steps2__dot"
                          tag="div"
                        />
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block className="form__group" tag="div">
                      <_Builtin.FormBlockLabel
                        className="form__label"
                        htmlFor="main-form-Email"
                      >
                        {"Email Address"}
                      </_Builtin.FormBlockLabel>
                      <_Builtin.FormTextInput
                        className="form__input form__input--email"
                        name="Email"
                        maxLength="80"
                        data-name="Email"
                        placeholder="jdoe@example.com"
                        disabled={false}
                        type="email"
                        required={true}
                        autoFocus={false}
                        autoComplete="email"
                        id="main-form-Email"
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
                        className="form__label"
                        htmlFor="main-form-Phone-Number"
                      >
                        {"Phone Number"}
                      </_Builtin.FormBlockLabel>
                      <_Builtin.FormTextInput
                        className="form__input form__input--tel"
                        name="Phone-Number"
                        maxLength={256}
                        data-name="Phone Number"
                        placeholder="(201) 555-0123"
                        disabled={false}
                        type="tel"
                        required={true}
                        autoFocus={false}
                        autoComplete="tel-national"
                        id="main-form-Phone-Number"
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
                        className="form__label"
                        htmlFor="main-form-First-Name"
                      >
                        {"First Name"}
                      </_Builtin.FormBlockLabel>
                      <_Builtin.FormTextInput
                        className="form__input"
                        name="First-Name"
                        maxLength="80"
                        data-name="First Name"
                        placeholder="John"
                        disabled={false}
                        type="text"
                        required={true}
                        autoFocus={false}
                        autoComplete="given-name"
                        id="main-form-First-Name"
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
                        className="form__label"
                        htmlFor="main-form-Last-Name"
                      >
                        {"Last Name"}
                      </_Builtin.FormBlockLabel>
                      <_Builtin.FormTextInput
                        className="form__input"
                        name="Last-Name"
                        maxLength="80"
                        data-name="Last Name"
                        placeholder="Doe"
                        disabled={false}
                        type="text"
                        required={true}
                        autoFocus={false}
                        autoComplete="family-name"
                        id="main-form-Last-Name"
                      />
                      <_Builtin.Block
                        className="form__validation-msg"
                        tag="div"
                      >
                        {"This field is required."}
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="form__group mt-24 has-custom-checkbox"
                      tag="div"
                    >
                      <_Builtin.FormCheckboxWrapper className="form__checkbox color-inherit has-custom-checkbox">
                        <_Builtin.FormCheckboxInput
                          className="form__checkbox-input is--consent visibility-hidden"
                          type="checkbox"
                          name="Marketing-Consent-2"
                          data-name="Marketing Consent 2"
                          required={false}
                          checked={true}
                          id="Marketing-Consent-2"
                          form={{
                            type: "checkbox-input",
                            name: "Marketing Consent 2",
                          }}
                          inputType="default"
                        />
                        <_Builtin.FormInlineLabel className="form__checkbox-label is--v1 color-inherit size-2">
                          {
                            "I want to receive exclusive emails and SMS messages with news and special offers."
                          }
                        </_Builtin.FormInlineLabel>
                        <_Builtin.Block className="custom-checkmark" tag="div">
                          <_Builtin.Block
                            className="custom-checkmark__inner"
                            tag="div"
                          />
                        </_Builtin.Block>
                      </_Builtin.FormCheckboxWrapper>
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block className="form__submit" tag="div">
                    <_Builtin.Block className="form__validation-msg" tag="div">
                      {
                        "There are errors in the form. Please check all the fields and try to submit it again."
                      }
                    </_Builtin.Block>
                    <_Builtin.Block className="form__submit-btns" tag="div">
                      <_Builtin.Block
                        className="form__submit-btns--inner mobile-w-100"
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
                          <_Builtin.Block tag="div">{"Next"}</_Builtin.Block>
                          <IconArrowRight2 />
                        </_Builtin.Link>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className="form-steps__single"
                  tag="div"
                  id="schedule-step-1"
                >
                  <_Builtin.Block className="form__col" tag="div">
                    <_Builtin.Block className="form__heading-wrap" tag="div">
                      <_Builtin.Block className="form__heading-title" tag="div">
                        <_Builtin.Heading
                          className="h10-v2 color-inherit"
                          tag="h2"
                        >
                          {"2. Enter your address below:"}
                        </_Builtin.Heading>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="form-steps2__progress"
                        tag="div"
                      >
                        <_Builtin.Block
                          className="form-steps2__progress-bar step-2"
                          tag="div"
                        />
                        <_Builtin.Block
                          className="form-steps2__dot"
                          tag="div"
                        />
                        <_Builtin.Block
                          className="form-steps2__dot"
                          tag="div"
                        />
                        <_Builtin.Block
                          className="form-steps2__dot"
                          tag="div"
                        />
                        <_Builtin.Block
                          className="form-steps2__dot"
                          tag="div"
                        />
                        <_Builtin.Block
                          className="form-steps2__dot"
                          tag="div"
                        />
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block className="form__group" tag="div">
                      <_Builtin.FormBlockLabel
                        className="form__label"
                        htmlFor="main-form-Address"
                      >
                        {"Street Address"}
                      </_Builtin.FormBlockLabel>
                      <_Builtin.FormTextInput
                        className="form__input form__input--address"
                        name="Address"
                        maxLength="255"
                        data-name="Address"
                        placeholder="Street Address*"
                        disabled={false}
                        type="text"
                        required={true}
                        autoFocus={false}
                        autoComplete="address-line1"
                        id="main-form-Address"
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
                        className="form__label"
                        htmlFor="main-form-Unit"
                      >
                        {"Apartment, Unit, Suite, etc."}
                      </_Builtin.FormBlockLabel>
                      <_Builtin.FormTextInput
                        className="form__input form__input--unit"
                        name="Unit"
                        maxLength="255"
                        data-name="Unit"
                        placeholder="Apartment, Unit, Suite, etc."
                        disabled={false}
                        type="text"
                        required={false}
                        autoFocus={false}
                        autoComplete="address-line2"
                        id="main-form-Unit"
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
                        className="form__label"
                        htmlFor="main-form-City"
                      >
                        {"City"}
                      </_Builtin.FormBlockLabel>
                      <_Builtin.FormTextInput
                        className="form__input"
                        name="City"
                        maxLength="50"
                        data-name="City"
                        placeholder="City*"
                        disabled={false}
                        type="text"
                        required={true}
                        autoFocus={false}
                        autoComplete="address-level2"
                        id="main-form-City"
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
                        className="form__label"
                        htmlFor="main-form-ZIP-Code"
                      >
                        {"ZIP Code"}
                      </_Builtin.FormBlockLabel>
                      <_Builtin.FormTextInput
                        className="form__input form__input--zip"
                        name="ZIP-Code"
                        maxLength="7"
                        data-name="ZIP Code"
                        placeholder="ZIP Code*"
                        disabled={false}
                        type="text"
                        required={true}
                        autoFocus={false}
                        autoComplete="postal-code"
                        minLength="5"
                        id="main-form-ZIP-Code"
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
                        className="form__label"
                        htmlFor="main-form-State"
                      >
                        {"State"}
                      </_Builtin.FormBlockLabel>
                      <_Builtin.FormSelect
                        className="form__select"
                        name="State"
                        data-name="State"
                        required={true}
                        multiple={false}
                        autoComplete="address-level1"
                        id="main-form-State"
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
                    <_Builtin.Block
                      className="form__group"
                      id="w-node-_57ad35d6-b1f8-a92e-d8e1-cfa3f8b1ce7b-f8b1cdd7"
                      tag="div"
                    >
                      <_Builtin.FormBlockLabel
                        className="form__label"
                        htmlFor="main-form-Country"
                      >
                        {"Country"}
                      </_Builtin.FormBlockLabel>
                      <_Builtin.FormSelect
                        className="form__select"
                        name="Country"
                        data-name="Country"
                        required={true}
                        multiple={false}
                        autoComplete="country"
                        id="main-form-Country"
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
                  <_Builtin.Block className="form__submit" tag="div">
                    <_Builtin.Block className="form__validation-msg" tag="div">
                      {
                        "There are errors in the form. Please check all the fields and try to submit it again."
                      }
                    </_Builtin.Block>
                    <_Builtin.Block className="form__submit-btns" tag="div">
                      <_Builtin.Block
                        className="form__submit-btns--inner mobile-w-100"
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
                          <_Builtin.Block tag="div">{"Next"}</_Builtin.Block>
                          <IconArrowRight2 />
                        </_Builtin.Link>
                      </_Builtin.Block>
                      <_Builtin.Link
                        className="btn btn--form-back hidden"
                        button={true}
                        block=""
                        options={{
                          href: "#",
                        }}
                      >
                        {"←"}
                      </_Builtin.Link>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className="form-steps__single"
                  tag="div"
                  id="schedule-step-2"
                >
                  <_Builtin.Block className="form__col" tag="div">
                    <_Builtin.Block className="form__heading-wrap" tag="div">
                      <_Builtin.Block className="form__heading-title" tag="div">
                        <_Builtin.Heading
                          className="h10-v2 color-inherit"
                          tag="h2"
                        >
                          {"3. I’m interested in:"}
                        </_Builtin.Heading>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="form-steps2__progress"
                        tag="div"
                      >
                        <_Builtin.Block
                          className="form-steps2__progress-bar step-3"
                          tag="div"
                        />
                        <_Builtin.Block
                          className="form-steps2__dot"
                          tag="div"
                        />
                        <_Builtin.Block
                          className="form-steps2__dot"
                          tag="div"
                        />
                        <_Builtin.Block
                          className="form-steps2__dot"
                          tag="div"
                        />
                        <_Builtin.Block
                          className="form-steps2__dot"
                          tag="div"
                        />
                        <_Builtin.Block
                          className="form-steps2__dot"
                          tag="div"
                        />
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="form__group"
                      id="w-node-_57ad35d6-b1f8-a92e-d8e1-cfa3f8b1ce99-f8b1cdd7"
                      tag="div"
                    >
                      <_Builtin.Block className="form__label-v2" tag="div">
                        {"Area(s) of Interest"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="form__checkbox-group in--multistep is--v2"
                        tag="div"
                      >
                        <_Builtin.FormCheckboxWrapper
                          className="form__checkbox is--multi form__checkbox--v2"
                          id="w-node-_57ad35d6-b1f8-a92e-d8e1-cfa3f8b1ce9d-f8b1cdd7"
                        >
                          <_Builtin.FormCheckboxInput
                            className="form__checkbox-input form__checkbox-input__v2 is--multi"
                            type="checkbox"
                            name="Interests-Closet"
                            data-name="Interests Closet"
                            required={false}
                            checked={false}
                            data-value="1"
                            id="main-form-Interests-Closet"
                            form={{
                              type: "checkbox-input",
                              name: "Interests Closet",
                            }}
                            inputType="default"
                          />
                          <_Builtin.Block
                            className="form__checkbox-number is--v2"
                            id="w-node-_57ad35d6-b1f8-a92e-d8e1-cfa3f8b1ce9f-f8b1cdd7"
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
                            id="main-form-Interests-Garage"
                            form={{
                              type: "checkbox-input",
                              name: "Interests Garage",
                            }}
                            inputType="default"
                          />
                          <_Builtin.Block
                            className="form__checkbox-number is--v2"
                            id="w-node-_57ad35d6-b1f8-a92e-d8e1-cfa3f8b1cea5-f8b1cdd7"
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
                            id="main-form-Interests-Home-Office"
                            form={{
                              type: "checkbox-input",
                              name: "Interests Home Office",
                            }}
                            inputType="default"
                          />
                          <_Builtin.Block
                            className="form__checkbox-number is--v2"
                            id="w-node-_57ad35d6-b1f8-a92e-d8e1-cfa3f8b1ceab-f8b1cdd7"
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
                            id="main-form-Interests-Pantry"
                            form={{
                              type: "checkbox-input",
                              name: "Interests Pantry",
                            }}
                            inputType="default"
                          />
                          <_Builtin.Block
                            className="form__checkbox-number is--v2"
                            id="w-node-_57ad35d6-b1f8-a92e-d8e1-cfa3f8b1ceb1-f8b1cdd7"
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
                            id="main-form-Interests-Laundry"
                            form={{
                              type: "checkbox-input",
                              name: "Interests Laundry",
                            }}
                            inputType="default"
                          />
                          <_Builtin.Block
                            className="form__checkbox-number is--v2"
                            id="w-node-_57ad35d6-b1f8-a92e-d8e1-cfa3f8b1ceb7-f8b1cdd7"
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
                            id="main-form-Interests-Wall-Bed"
                            form={{
                              type: "checkbox-input",
                              name: "Interests Wall Bed",
                            }}
                            inputType="default"
                          />
                          <_Builtin.Block
                            className="form__checkbox-number is--v2"
                            id="w-node-_57ad35d6-b1f8-a92e-d8e1-cfa3f8b1cebd-f8b1cdd7"
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
                            id="main-form-Interests-Sliding-Door"
                            form={{
                              type: "checkbox-input",
                              name: "Interests Sliding Door",
                            }}
                            inputType="default"
                          />
                          <_Builtin.Block
                            className="form__checkbox-number is--v2"
                            id="w-node-_57ad35d6-b1f8-a92e-d8e1-cfa3f8b1cec3-f8b1cdd7"
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
                            id="main-form-Interests-Other"
                            form={{
                              type: "checkbox-input",
                              name: "Interests Other",
                            }}
                            inputType="default"
                          />
                          <_Builtin.Block
                            className="form__checkbox-number is--v2"
                            id="w-node-_57ad35d6-b1f8-a92e-d8e1-cfa3f8b1cec9-f8b1cdd7"
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
                  </_Builtin.Block>
                  <_Builtin.Block className="form__submit" tag="div">
                    <_Builtin.Block className="form__validation-msg" tag="div">
                      {
                        "There are errors in the form. Please check all the fields and try to submit it again."
                      }
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="form__submit-btns mobile-w-100"
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
                          <_Builtin.Block tag="div">{"Next"}</_Builtin.Block>
                          <IconArrowRight2 />
                        </_Builtin.Link>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className="form-steps__single"
                  tag="div"
                  id="schedule-step-3"
                >
                  <_Builtin.Block className="form__col is--vertical" tag="div">
                    <_Builtin.Block className="form__heading-wrap" tag="div">
                      <_Builtin.Block className="form__heading-title" tag="div">
                        <_Builtin.Heading
                          className="h10-v2 color-inherit"
                          tag="h2"
                        >
                          {"4. When are you available?"}
                        </_Builtin.Heading>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="form-steps2__progress"
                        tag="div"
                      >
                        <_Builtin.Block
                          className="form-steps2__progress-bar step-4"
                          tag="div"
                        />
                        <_Builtin.Block
                          className="form-steps2__dot"
                          tag="div"
                        />
                        <_Builtin.Block
                          className="form-steps2__dot"
                          tag="div"
                        />
                        <_Builtin.Block
                          className="form-steps2__dot"
                          tag="div"
                        />
                        <_Builtin.Block
                          className="form-steps2__dot"
                          tag="div"
                        />
                        <_Builtin.Block
                          className="form-steps2__dot"
                          tag="div"
                        />
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="subheading-v2 mb-8 color-switch"
                      tag="div"
                    >
                      {"First Choice"}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="form__grid-2col mobile-1c"
                      tag="div"
                    >
                      <_Builtin.Block className="form__group" tag="div">
                        <_Builtin.FormBlockLabel
                          className="form__label"
                          htmlFor="main-form-First-Choice-Date"
                        >
                          {"First Choice Date"}
                        </_Builtin.FormBlockLabel>
                        <_Builtin.FormTextInput
                          className="form__input form__input--date"
                          name="First-Choice-Date"
                          maxLength={256}
                          data-name="First Choice Date"
                          placeholder="mm/dd/yyyy"
                          disabled={false}
                          type="text"
                          required={true}
                          autoFocus={false}
                          id="main-form-First-Choice-Date"
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
                          className="form__label"
                          htmlFor="main-form-First-Choice-Time"
                        >
                          {"First Choice Time"}
                        </_Builtin.FormBlockLabel>
                        <_Builtin.FormSelect
                          className="form__select form__select__v2"
                          name="First-Choice-Time"
                          data-name="First Choice Time"
                          required={true}
                          multiple={false}
                          form__select--time=""
                          id="main-form-First-Choice-Time"
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
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="subheading-v2 my-8 color-switch"
                      tag="div"
                    >
                      {"SECOND Choice"}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="form__grid-2col mobile-1c"
                      tag="div"
                    >
                      <_Builtin.Block className="form__group" tag="div">
                        <_Builtin.FormBlockLabel
                          className="form__label"
                          htmlFor="main-form-Second-Choice-Date"
                        >
                          {"Second Choice Date"}
                        </_Builtin.FormBlockLabel>
                        <_Builtin.FormTextInput
                          className="form__input form__input--date"
                          name="Second-Choice-Date"
                          maxLength={256}
                          data-name="Second Choice Date"
                          placeholder="mm/dd/yyyy"
                          disabled={false}
                          type="text"
                          required={true}
                          autoFocus={false}
                          id="main-form-Second-Choice-Date"
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
                          className="form__label"
                          htmlFor="main-form-Second-Choice-Time"
                        >
                          {"Second Choice Time"}
                        </_Builtin.FormBlockLabel>
                        <_Builtin.FormSelect
                          className="form__select form__select__v2"
                          name="Second-Choice-Time"
                          data-name="Second Choice Time"
                          required={true}
                          multiple={false}
                          form__select--time=""
                          id="main-form-Second-Choice-Time"
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
                    </_Builtin.Block>
                    <_Builtin.Block className="form__group hidden" tag="div">
                      <_Builtin.FormBlockLabel
                        className="form__label form__label--visible"
                        htmlFor="main-form-Comments"
                      >
                        {"Comments"}
                      </_Builtin.FormBlockLabel>
                      <_Builtin.FormTextarea
                        className="form__textarea"
                        name="Comments"
                        maxLength="2000"
                        data-name="Comments"
                        required={false}
                        autoFocus={false}
                        id="main-form-Comments"
                      />
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block className="form__submit" tag="div">
                    <_Builtin.Block className="form__validation-msg" tag="div">
                      {
                        "There are errors in the form. Please check all the fields and try to submit it again."
                      }
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="form__submit-btns mobile-w-100"
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
                          <_Builtin.Block tag="div">{"Submit"}</_Builtin.Block>
                          <IconArrowRight2 />
                        </_Builtin.Link>
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="subtitle fs-12 color-inherit mobile-text-align--center"
                      tag="div"
                    >
                      {
                        "*By submitting this request you acknowledge having read and agreeing to our "
                      }
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
                      {". "}
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.HtmlEmbed
              className="hidden-html"
              value="%3Cinput%20type%3D%22hidden%22%20id%3D%22main-form-Location-ID%22%20name%3D%22Location-ID%22%20value%3D%220%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22main-form-Status-ID%22%20name%3D%22Status-ID%22%20value%3D%221%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22main-form-Marketing-Code%22%20name%3D%22Marketing-Code%22%20value%3D%22%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22main-form-Request-URL%22%20name%3D%22Request-URL%22%20value%3D%22%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22main-form-HTTP-Referrer%22%20name%3D%22HTTP-Referrer%22%20value%3D%22%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22main-form-Landing-URL%22%20name%3D%22Landing-URL%22%20value%3D%22%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22main-form-Client-IP%22%20name%3D%22Client-IP%22%20value%3D%22%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22main-form-Form-Emails%22%20name%3D%22Form-Emails%22%20value%3D%22%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22main-form-Interests-Label%22%20name%3D%22Interests-Label%22%20value%3D%22%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22main-form-Domain-Name%22%20name%3D%22Domain-Name%22%20value%3D%22%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22main-form-Form-Guid%22%20name%3D%22Form-Guid%22%20value%3D%22%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22main-form-Test-Entry%22%20name%3D%22Test-Entry%22%20value%3D%22false%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22main-form-Language-ID%22%20name%3D%22Language-ID%22%20value%3D%22en%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22main-form-Form-ID%22%20name%3D%22Form-ID%22%20value%3D%2216%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22main-form-Browser-ID%22%20name%3D%22Browser-ID%22%20value%3D%22%22%3E%0A%3C!--%20URL%20Parameters%20--%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22main-form-Parameter-utm_source%22%20name%3D%22Parameter-utm_source%22%20value%3D%22%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22main-form-Parameter-utm_medium%22%20name%3D%22Parameter-utm_medium%22%20value%3D%22%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22main-form-Parameter-utm_campaign%22%20name%3D%22Parameter-utm_campaign%22%20value%3D%22%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22main-form-Parameter-utm_content%22%20name%3D%22Parameter-utm_content%22%20value%3D%22%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22main-form-Parameter-utm_term%22%20name%3D%22Parameter-utm_term%22%20value%3D%22%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22main-form-Parameter-match_type%22%20name%3D%22Parameter-match_type%22%20value%3D%22%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22main-form-Parameter-network%22%20name%3D%22Parameter-network%22%20value%3D%22%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22main-form-Parameter-device%22%20name%3D%22Parameter-device%22%20value%3D%22%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22main-form-Parameter-loc_physical%22%20name%3D%22Parameter-loc_physical%22%20value%3D%22%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22main-form-Parameter-creative%22%20name%3D%22Parameter-creative%22%20value%3D%22%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22main-form-Parameter-gbraid%22%20name%3D%22Parameter-gbraid%22%20value%3D%22%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22main-form-Parameter-wbraid%22%20name%3D%22Parameter-wbraid%22%20value%3D%22%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22main-form-Parameter-gclid%22%20name%3D%22Parameter-gclid%22%20value%3D%22%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22main-form-Parameter-msclkid%22%20name%3D%22Parameter-msclkid%22%20value%3D%22%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22main-form-Parameter-term%22%20name%3D%22Parameter-term%22%20value%3D%22%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22main-form-Parameter-id%22%20name%3D%22Parameter-id%22%20value%3D%22%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22main-form-Parameter-adset%22%20name%3D%22Parameter-adset%22%20value%3D%22%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22main-form-Parameter-fbclid%22%20name%3D%22Parameter-fbclid%22%20value%3D%22%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22main-form-Parameter-utm_id%22%20name%3D%22Parameter-utm_id%22%20value%3D%22%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22main-form-Parameter-epik%22%20name%3D%22Parameter-epik%22%20value%3D%22%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22main-form-Parameter-cto_pld%22%20name%3D%22Parameter-cto_pld%22%20value%3D%22%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22main-form-Parameter-cta%22%20name%3D%22Parameter-cta%22%20value%3D%22%22%3E"
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
      <_Builtin.Block className="new-form__right" tag="div">
        <_Builtin.Block
          className="schedule-request__form-header block h-100"
          tag="div"
        >
          <_Builtin.Block
            className="schedule-request__form-header__title"
            tag="div"
          >
            <_Builtin.Block
              className="h5-v2 is--white-v2 weight--black text-align--center"
              tag="div"
            >
              {"Organize Your Home!"}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block className="schedule-request__form-slider" tag="div">
            <_Builtin.Block className="splide splide-dots h-100" tag="div">
              <_Builtin.Block className="splide__track h-100" tag="div">
                <_Builtin.Block className="splide__list h-100" tag="div">
                  <_Builtin.Block className="splide__slide h-100" tag="div">
                    <_Builtin.Block className="img-rounded h-100" tag="div">
                      <_Builtin.Image
                        className="image-full no-ratio"
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt="Closet World Contemporary walk in closet in Summer Breeze Signia finish"
                        src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/681de1bc769a5964d432dd19_810ca101cc70c9a725ab41bc8123a7764c738db0.webp"
                      />
                      <_Builtin.Block
                        className="img-rounded__gradient"
                        tag="div"
                      />
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block className="splide__slide h-100" tag="div">
                    <_Builtin.Block className="img-rounded h-100" tag="div">
                      <_Builtin.Image
                        className="image-full no-ratio"
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt="Closet World contemporary walk in closet White solid finish"
                        src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/681de1bea36331be9163979e_bd65298a6676405cca1850fe1c5ed5a2e6ba2d60.webp"
                      />
                      <_Builtin.Block
                        className="img-rounded__gradient"
                        tag="div"
                      />
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block className="splide__slide h-100" tag="div">
                    <_Builtin.Block className="img-rounded h-100" tag="div">
                      <_Builtin.Image
                        className="image-full no-ratio"
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt="Closet World Transitional Reach In Closet in Mocha Signia Finish"
                        src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/681de1bc04fcf4a83ffb3b70_9102016a66ea53f2a9cbe082d84565d28af38d91.webp"
                      />
                      <_Builtin.Block
                        className="img-rounded__gradient"
                        tag="div"
                      />
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block className="splide__slide h-100" tag="div">
                    <_Builtin.Block className="img-rounded h-100" tag="div">
                      <_Builtin.Image
                        className="image-full no-ratio"
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt="Closet World Garage in Hard Rock Maple Essentials Finish"
                        src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/681de1bcff7f46b61fe74bd2_e48be6f79f4bf94cadff252fe792ec00dd790e03.webp"
                      />
                      <_Builtin.Block
                        className="img-rounded__gradient"
                        tag="div"
                      />
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block className="splide__slide h-100" tag="div">
                    <_Builtin.Block className="img-rounded h-100" tag="div">
                      <_Builtin.Image
                        className="image-full no-ratio"
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt="Home Office"
                        src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/681de1bd1049b227543f5890_a0ee6ea87f947770a4af946836c8bc1f0b613b49.webp"
                      />
                      <_Builtin.Block
                        className="img-rounded__gradient"
                        tag="div"
                      />
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
