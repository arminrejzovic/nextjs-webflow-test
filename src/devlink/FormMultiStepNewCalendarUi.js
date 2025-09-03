"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { PromoAppointment } from "./PromoAppointment";
import { AlreadyScheduledSummary } from "./AlreadyScheduledSummary";

const _interactionsData = JSON.parse(
  '{"events":{"e-17":{"id":"e-17","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-5","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-18"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65e050fd6f910c57af0b433e|b396f403-edb8-df86-78bb-62517cbedf94","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65e050fd6f910c57af0b433e|b396f403-edb8-df86-78bb-62517cbedf94","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1709278060740},"e-18":{"id":"e-18","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-6","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-17"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65e050fd6f910c57af0b433e|b396f403-edb8-df86-78bb-62517cbedf94","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65e050fd6f910c57af0b433e|b396f403-edb8-df86-78bb-62517cbedf94","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1709278060740},"e-19":{"id":"e-19","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-5","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-20"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65e0624c328c82d5cb6da7c7|cb78847b-602d-75ce-361b-715baeed9bb7","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65e0624c328c82d5cb6da7c7|cb78847b-602d-75ce-361b-715baeed9bb7","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1709278335979},"e-20":{"id":"e-20","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-6","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-19"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65e0624c328c82d5cb6da7c7|cb78847b-602d-75ce-361b-715baeed9bb7","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65e0624c328c82d5cb6da7c7|cb78847b-602d-75ce-361b-715baeed9bb7","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1709278335979}},"actionLists":{"a-5":{"id":"a-5","title":"Blog card hover in","actionItemGroups":[{"actionItems":[{"id":"a-5-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".blog-card__img","selectorGuids":["5fb2d686-5bf3-3f4a-656a-ac39eb2a46e9"]},"value":1,"unit":""}},{"id":"a-5-n-2","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".body.is--blog-title","selectorGuids":["ec061e78-9e63-e5f1-b388-06655649261b","72f5058d-32a6-d27b-b755-545a460a1bf5"]},"globalSwatchId":"","rValue":10,"bValue":10,"gValue":10,"aValue":1}}]},{"actionItems":[{"id":"a-5-n-3","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".body.is--blog-title","selectorGuids":["ec061e78-9e63-e5f1-b388-06655649261b","72f5058d-32a6-d27b-b755-545a460a1bf5"]},"globalSwatchId":"","rValue":239,"bValue":32,"gValue":64,"aValue":1}},{"id":"a-5-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".blog-card__img","selectorGuids":["5fb2d686-5bf3-3f4a-656a-ac39eb2a46e9"]},"value":0.7,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1709202474958},"a-6":{"id":"a-6","title":"Blog card hover out","actionItemGroups":[{"actionItems":[{"id":"a-6-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".blog-card__img","selectorGuids":["5fb2d686-5bf3-3f4a-656a-ac39eb2a46e9"]},"value":1,"unit":""}},{"id":"a-6-n-2","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".body.is--blog-title","selectorGuids":["ec061e78-9e63-e5f1-b388-06655649261b","72f5058d-32a6-d27b-b755-545a460a1bf5"]},"globalSwatchId":"","rValue":10,"bValue":10,"gValue":10,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1709202605108}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function FormMultiStepNewCalendarUi({
  as: _Component = _Builtin.Block,
  promoVisibility = false,
}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <_Component className="page-wrapper" tag="div">
      <_Builtin.Section
        className="section"
        grid={{
          type: "section",
        }}
        tag="section"
      >
        <_Builtin.BlockContainer
          className="container"
          grid={{
            type: "container",
          }}
          tag="div"
        >
          <_Builtin.Heading className="hidden-h1" tag="h1">
            {"SCHEDULE AN APPOINTMENT TODAY"}
          </_Builtin.Heading>
          {promoVisibility ? (
            <_Builtin.Block tag="div">
              <_Builtin.Block className="margin-top--40" tag="div">
                <PromoAppointment />
                <_Builtin.Block className="body margin--bot-0" tag="div">
                  {
                    "Let's get started. Simply complete the form, set your appointment and submit."
                  }
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          ) : null}
          <_Builtin.Block
            className="already-scheduled already-scheduled__data hide"
            tag="div"
          >
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
            <AlreadyScheduledSummary />
            <_Builtin.Link
              className="btn btn--resubmit"
              button={true}
              block=""
              options={{
                href: "#",
              }}
            >
              {"SUBMIT ANOTHER REQUEST"}
            </_Builtin.Link>
          </_Builtin.Block>
          <_Builtin.Block className="notice notice--step1" tag="div">
            <_Builtin.NotSupported _atom="DynamoWrapper" />
          </_Builtin.Block>
          <_Builtin.FormWrapper className="form-block is--multistep">
            <_Builtin.FormForm
              className="form-vertical form-multi-steps calendar--inline"
              name="wf-form-Appointment-Form-Multi"
              data-name="Appointment Form Multi"
              redirect="/thank-you"
              data-redirect="/thank-you"
              method="get"
              id="wf-form-Appointment-Form-Multi"
            >
              <_Builtin.Block className="link-holder" tag="div" />
              <_Builtin.Block className="form-steps__wrapper" tag="div">
                <_Builtin.Block className="form-steps" tag="div">
                  <_Builtin.Block
                    className="form-steps__single active"
                    tag="div"
                    id="schedule-step-0"
                  >
                    <_Builtin.Block
                      className="form__col is--vertical"
                      tag="div"
                    >
                      <_Builtin.Block className="form__heading-wrap" tag="div">
                        <_Builtin.Block
                          className="form__heading-title"
                          tag="div"
                        >
                          <_Builtin.Heading
                            className="h3 h3--bold outside-number"
                            tag="h2"
                          >
                            {"1 →"}
                          </_Builtin.Heading>
                          <_Builtin.Heading className="h3 h3--bold" tag="h2">
                            {"Schedule a free design appointment"}
                          </_Builtin.Heading>
                        </_Builtin.Block>
                        <_Builtin.Block className="body-md" tag="div">
                          {
                            "Your contact information is used to personalize your experience and will not be shared or sold."
                          }
                          <br />
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block className="form__group" tag="div">
                        <_Builtin.FormBlockLabel
                          className="form__label form__label--visible form__label--required"
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
                          className="form__label form__label--visible form__label--required"
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
                          className="form__label form__label--visible form__label--required"
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
                          className="form__label form__label--visible form__label--required"
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
                    </_Builtin.Block>
                    <_Builtin.Block className="form__submit" tag="div">
                      <_Builtin.Block
                        className="form__validation-msg"
                        tag="div"
                      >
                        {
                          "There are errors in the form. Please check all the fields and try to submit it again."
                        }
                      </_Builtin.Block>
                      <_Builtin.Block className="form__submit-btns" tag="div">
                        <_Builtin.Block
                          className="form__submit-btns--inner"
                          tag="div"
                        >
                          <_Builtin.Link
                            className="btn btn--form-next"
                            button={true}
                            block=""
                            options={{
                              href: "#",
                            }}
                          >
                            {"Next →"}
                          </_Builtin.Link>
                          <_Builtin.Block
                            className="form__submit-tip"
                            tag="div"
                          >
                            {"or press "}
                            <_Builtin.Strong>{"Enter ↵"}</_Builtin.Strong>
                          </_Builtin.Block>
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
                        <_Builtin.Block
                          className="form__heading-title"
                          tag="div"
                        >
                          <_Builtin.Heading
                            className="h3 h3--bold outside-number"
                            tag="h2"
                          >
                            {"2 →"}
                          </_Builtin.Heading>
                          <_Builtin.Heading className="h3 h3--bold" tag="h2">
                            {"Organization heaven is a form away"}
                          </_Builtin.Heading>
                        </_Builtin.Block>
                        <_Builtin.Block className="body-md" tag="div">
                          {
                            "Provide your service address to pair you with the nearest location."
                          }
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block className="form__group" tag="div">
                        <_Builtin.FormBlockLabel
                          className="form__label form__label--visible form__label--required"
                          htmlFor="main-form-Address"
                        >
                          {"Street Address"}
                        </_Builtin.FormBlockLabel>
                        <_Builtin.FormTextInput
                          className="form__input form__input--address"
                          name="Address"
                          maxLength="255"
                          data-name="Address"
                          placeholder="3860 Capitol Ave"
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
                          className="form__label form__label--visible"
                          htmlFor="main-form-Unit"
                        >
                          {"Apartment, Unit, Suite, etc."}
                        </_Builtin.FormBlockLabel>
                        <_Builtin.FormTextInput
                          className="form__input form__input--unit"
                          name="Unit"
                          maxLength="255"
                          data-name="Unit"
                          placeholder="Suite B"
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
                      <_Builtin.Block
                        className="form__group"
                        id="w-node-_49e8c24c-c992-196c-636d-11d517c57da4-17c57cfd"
                        tag="div"
                      >
                        <_Builtin.FormBlockLabel
                          className="form__label form__label--visible form__label--required"
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
                      <_Builtin.Block className="form__group" tag="div">
                        <_Builtin.FormBlockLabel
                          className="form__label form__label--visible form__label--required"
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
                      <_Builtin.Block className="form__group" tag="div">
                        <_Builtin.FormBlockLabel
                          className="form__label form__label--visible form__label--required"
                          htmlFor="main-form-City"
                        >
                          {"City"}
                        </_Builtin.FormBlockLabel>
                        <_Builtin.FormTextInput
                          className="form__input"
                          name="City"
                          maxLength={256}
                          data-name="City"
                          placeholder="Whittier"
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
                          className="form__label form__label--visible form__label--required"
                          htmlFor="main-form-ZIP-Code"
                        >
                          {"ZIP Code"}
                        </_Builtin.FormBlockLabel>
                        <_Builtin.FormTextInput
                          className="form__input form__input--zip"
                          name="ZIP-Code"
                          maxLength="5"
                          data-name="ZIP Code"
                          placeholder="90601"
                          disabled={false}
                          type="text"
                          required={true}
                          autoFocus={false}
                          autoComplete="postal-code"
                          id="main-form-ZIP-Code"
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
                      <_Builtin.Block
                        className="form__validation-msg"
                        tag="div"
                      >
                        {
                          "There are errors in the form. Please check all the fields and try to submit it again."
                        }
                      </_Builtin.Block>
                      <_Builtin.Block className="form__submit-btns" tag="div">
                        <_Builtin.Block
                          className="form__submit-btns--inner"
                          tag="div"
                        >
                          <_Builtin.Link
                            className="btn btn--form-next"
                            button={true}
                            block=""
                            options={{
                              href: "#",
                            }}
                          >
                            {"Next →"}
                          </_Builtin.Link>
                          <_Builtin.Block
                            className="form__submit-tip"
                            tag="div"
                          >
                            {"or press "}
                            <_Builtin.Strong>{"Enter ↵"}</_Builtin.Strong>
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Link
                          className="btn btn--form-back"
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
                        <_Builtin.Block
                          className="form__heading-title"
                          tag="div"
                        >
                          <_Builtin.Heading
                            className="h3 h3--bold outside-number"
                            tag="h2"
                          >
                            {"3 →"}
                          </_Builtin.Heading>
                          <_Builtin.Heading className="h3 h3--bold" tag="h2">
                            {"Areas of Interest"}
                          </_Builtin.Heading>
                        </_Builtin.Block>
                        <_Builtin.Block className="body-md" tag="div">
                          {"Select as many options that apply. "}
                          <br />
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block className="form__group" tag="div">
                        <_Builtin.Block
                          className="form__label form__label--visible"
                          tag="div"
                        >
                          {"I'm interested in..."}
                        </_Builtin.Block>
                        <_Builtin.Block
                          className="form__checkbox-group in--multistep"
                          tag="div"
                        >
                          <_Builtin.FormCheckboxWrapper
                            className="form__checkbox is--multi"
                            id="w-node-_49e8c24c-c992-196c-636d-11d517c57dd8-17c57cfd"
                          >
                            <_Builtin.FormCheckboxInput
                              className="form__checkbox-input is--multi"
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
                              className="form__checkbox-number"
                              id="w-node-_49e8c24c-c992-196c-636d-11d517c57dda-17c57cfd"
                              tag="div"
                            >
                              {"1"}
                            </_Builtin.Block>
                            <_Builtin.FormInlineLabel className="form__checkbox-label">
                              {"Closet"}
                            </_Builtin.FormInlineLabel>
                          </_Builtin.FormCheckboxWrapper>
                          <_Builtin.FormCheckboxWrapper className="form__checkbox is--multi">
                            <_Builtin.FormCheckboxInput
                              className="form__checkbox-input is--multi"
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
                              className="form__checkbox-number"
                              id="w-node-_49e8c24c-c992-196c-636d-11d517c57de0-17c57cfd"
                              tag="div"
                            >
                              {"2"}
                            </_Builtin.Block>
                            <_Builtin.FormInlineLabel className="form__checkbox-label">
                              {"Garage"}
                            </_Builtin.FormInlineLabel>
                          </_Builtin.FormCheckboxWrapper>
                          <_Builtin.FormCheckboxWrapper className="form__checkbox is--multi">
                            <_Builtin.FormCheckboxInput
                              className="form__checkbox-input is--multi"
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
                              className="form__checkbox-number"
                              id="w-node-_49e8c24c-c992-196c-636d-11d517c57de6-17c57cfd"
                              tag="div"
                            >
                              {"3"}
                            </_Builtin.Block>
                            <_Builtin.FormInlineLabel className="form__checkbox-label">
                              {"Home Office"}
                            </_Builtin.FormInlineLabel>
                          </_Builtin.FormCheckboxWrapper>
                          <_Builtin.FormCheckboxWrapper className="form__checkbox is--multi">
                            <_Builtin.FormCheckboxInput
                              className="form__checkbox-input is--multi"
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
                              className="form__checkbox-number"
                              id="w-node-_49e8c24c-c992-196c-636d-11d517c57dec-17c57cfd"
                              tag="div"
                            >
                              {"4"}
                            </_Builtin.Block>
                            <_Builtin.FormInlineLabel className="form__checkbox-label">
                              {"Pantry"}
                            </_Builtin.FormInlineLabel>
                          </_Builtin.FormCheckboxWrapper>
                          <_Builtin.FormCheckboxWrapper className="form__checkbox is--multi">
                            <_Builtin.FormCheckboxInput
                              className="form__checkbox-input is--multi"
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
                              className="form__checkbox-number"
                              id="w-node-_49e8c24c-c992-196c-636d-11d517c57df2-17c57cfd"
                              tag="div"
                            >
                              {"5"}
                            </_Builtin.Block>
                            <_Builtin.FormInlineLabel className="form__checkbox-label">
                              {"Laundry"}
                            </_Builtin.FormInlineLabel>
                          </_Builtin.FormCheckboxWrapper>
                          <_Builtin.FormCheckboxWrapper className="form__checkbox is--multi">
                            <_Builtin.FormCheckboxInput
                              className="form__checkbox-input is--multi"
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
                              className="form__checkbox-number"
                              id="w-node-_49e8c24c-c992-196c-636d-11d517c57df8-17c57cfd"
                              tag="div"
                            >
                              {"6"}
                            </_Builtin.Block>
                            <_Builtin.FormInlineLabel className="form__checkbox-label">
                              {"Wall Bed"}
                            </_Builtin.FormInlineLabel>
                          </_Builtin.FormCheckboxWrapper>
                          <_Builtin.FormCheckboxWrapper className="form__checkbox is--multi">
                            <_Builtin.FormCheckboxInput
                              className="form__checkbox-input is--multi"
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
                              className="form__checkbox-number"
                              id="w-node-_49e8c24c-c992-196c-636d-11d517c57dfe-17c57cfd"
                              tag="div"
                            >
                              {"7"}
                            </_Builtin.Block>
                            <_Builtin.FormInlineLabel className="form__checkbox-label">
                              {"Sliding Door"}
                            </_Builtin.FormInlineLabel>
                          </_Builtin.FormCheckboxWrapper>
                          <_Builtin.FormCheckboxWrapper className="form__checkbox is--multi">
                            <_Builtin.FormCheckboxInput
                              className="form__checkbox-input is--multi"
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
                              className="form__checkbox-number"
                              id="w-node-_49e8c24c-c992-196c-636d-11d517c57e04-17c57cfd"
                              tag="div"
                            >
                              {"8"}
                            </_Builtin.Block>
                            <_Builtin.FormInlineLabel className="form__checkbox-label">
                              {"Other"}
                            </_Builtin.FormInlineLabel>
                          </_Builtin.FormCheckboxWrapper>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className="form__validation-msg"
                          tag="div"
                        >
                          {"This field is required."}
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block className="form__submit" tag="div">
                      <_Builtin.Block
                        className="form__validation-msg"
                        tag="div"
                      >
                        {
                          "There are errors in the form. Please check all the fields and try to submit it again."
                        }
                      </_Builtin.Block>
                      <_Builtin.Block className="form__submit-btns" tag="div">
                        <_Builtin.Block
                          className="form__submit-btns--inner"
                          tag="div"
                        >
                          <_Builtin.Link
                            className="btn btn--form-next"
                            button={true}
                            block=""
                            options={{
                              href: "#",
                            }}
                          >
                            {"Next →"}
                          </_Builtin.Link>
                          <_Builtin.Block
                            className="form__submit-tip"
                            tag="div"
                          >
                            {"or press "}
                            <_Builtin.Strong>{"Enter ↵"}</_Builtin.Strong>
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Link
                          className="btn btn--form-back"
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
                    id="schedule-step-3"
                  >
                    <_Builtin.Block
                      className="form__col is--vertical"
                      tag="div"
                    >
                      <_Builtin.Block className="form__heading-wrap" tag="div">
                        <_Builtin.Block
                          className="form__heading-title"
                          tag="div"
                        >
                          <_Builtin.Heading
                            className="h3 h3--bold outside-number"
                            tag="h2"
                          >
                            {"4 →"}
                          </_Builtin.Heading>
                          <_Builtin.Heading className="h3 h3--bold" tag="h2">
                            {"Appointment date and time"}
                          </_Builtin.Heading>
                        </_Builtin.Block>
                        <_Builtin.Block className="body-md" tag="div">
                          {
                            "Choose your preferred and secondary appointment. Times are displayed in the entered address's time zone."
                          }
                          <br />
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block className="form__group" tag="div">
                        <_Builtin.Block
                          className="appointment-box"
                          tag="div"
                          id="appt-box-1"
                        >
                          <_Builtin.Block
                            className="appointment-box__heading"
                            tag="div"
                          >
                            <_Builtin.FormBlockLabel
                              className="form__label form__label--visible form__label--required form__label--apointment"
                              id="w-node-_49e8c24c-c992-196c-636d-11d517c57e25-17c57cfd"
                              htmlFor="main-form-First-Choice-Date"
                            >
                              {"Preferred Appointment"}
                            </_Builtin.FormBlockLabel>
                            <_Builtin.Block
                              className="appointment-box__value hidden"
                              id="w-node-_49e8c24c-c992-196c-636d-11d517c57e27-17c57cfd"
                              tag="div"
                            >
                              <_Builtin.Span data-date-appt1="Date">
                                {"Date"}
                              </_Builtin.Span>
                              <_Builtin.Span
                                className="hidden appointment-box__value-time"
                                data-time-appt1="Time"
                              >
                                {"Time"}
                              </_Builtin.Span>
                            </_Builtin.Block>
                            <_Builtin.Block
                              className="appointment-box__btn-wrap"
                              tag="div"
                            >
                              <_Builtin.Link
                                className="btn btn--grey btn--appt-edit hidden"
                                button={false}
                                block=""
                                options={{
                                  href: "#",
                                }}
                              >
                                {"Edit"}
                              </_Builtin.Link>
                            </_Builtin.Block>
                          </_Builtin.Block>
                          <_Builtin.Block
                            className="appointment-box__content max-height-0"
                            tag="div"
                          >
                            <_Builtin.Block
                              className="appointment-box__content-inner"
                              tag="div"
                            >
                              <_Builtin.Block
                                className="appointment-box__calendar"
                                tag="div"
                              >
                                <_Builtin.FormTextInput
                                  className="form__input form__input--date hidden"
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
                              </_Builtin.Block>
                              <_Builtin.Block
                                className="appointment-box__timepick"
                                tag="div"
                              >
                                <_Builtin.Block
                                  className="appointment-box__timepick-wrap"
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className="text-block-3 appointment-box__timepick-value"
                                    tag="div"
                                  >
                                    <_Builtin.Span data-date-appt1="Date">
                                      {"Date"}
                                    </_Builtin.Span>
                                  </_Builtin.Block>
                                </_Builtin.Block>
                                <_Builtin.Block
                                  className="appointment-box__timepick-options"
                                  tag="div"
                                >
                                  <_Builtin.FormRadioWrapper
                                    className="form__radiobutton-wrap"
                                    id="w-node-_49e8c24c-c992-196c-636d-11d517c57e39-17c57cfd"
                                  >
                                    <_Builtin.FormRadioInput
                                      className="form__radiobutton-input"
                                      type="radio"
                                      name="First-Choice-Time"
                                      value="10:00:00"
                                      data-name="First Choice Time"
                                      required={false}
                                      id="10-00-00"
                                      form={{
                                        type: "radio-input",
                                        name: "First Choice Time",
                                      }}
                                      inputType="default"
                                    />
                                    <_Builtin.FormInlineLabel className="form_radiobutton-label">
                                      {"10:00 am"}
                                    </_Builtin.FormInlineLabel>
                                  </_Builtin.FormRadioWrapper>
                                  <_Builtin.FormRadioWrapper className="form__radiobutton-wrap">
                                    <_Builtin.FormRadioInput
                                      className="form__radiobutton-input"
                                      type="radio"
                                      name="First-Choice-Time"
                                      value="13:00:00"
                                      data-name="First Choice Time"
                                      required={false}
                                      id="13-00-00"
                                      form={{
                                        type: "radio-input",
                                        name: "First Choice Time",
                                      }}
                                      inputType="default"
                                    />
                                    <_Builtin.FormInlineLabel className="form_radiobutton-label">
                                      {"1:00 pm"}
                                    </_Builtin.FormInlineLabel>
                                  </_Builtin.FormRadioWrapper>
                                  <_Builtin.FormRadioWrapper className="form__radiobutton-wrap">
                                    <_Builtin.FormRadioInput
                                      className="form__radiobutton-input"
                                      type="radio"
                                      name="First-Choice-Time"
                                      value="16:00:00"
                                      data-name="First Choice Time"
                                      required={false}
                                      id="16-00-00"
                                      form={{
                                        type: "radio-input",
                                        name: "First Choice Time",
                                      }}
                                      inputType="default"
                                    />
                                    <_Builtin.FormInlineLabel className="form_radiobutton-label">
                                      {"4:00 pm"}
                                    </_Builtin.FormInlineLabel>
                                  </_Builtin.FormRadioWrapper>
                                  <_Builtin.FormRadioWrapper className="form__radiobutton-wrap hidden">
                                    <_Builtin.FormRadioInput
                                      className="form__radiobutton-input"
                                      type="radio"
                                      name="First-Choice-Time"
                                      value="09:00:00"
                                      data-name="First Choice Time"
                                      required={false}
                                      id="09-00-00"
                                      form={{
                                        type: "radio-input",
                                        name: "First Choice Time",
                                      }}
                                      inputType="default"
                                    />
                                    <_Builtin.FormInlineLabel className="form_radiobutton-label">
                                      {"9:00 am"}
                                    </_Builtin.FormInlineLabel>
                                  </_Builtin.FormRadioWrapper>
                                  <_Builtin.FormRadioWrapper className="form__radiobutton-wrap hidden">
                                    <_Builtin.FormRadioInput
                                      className="form__radiobutton-input"
                                      type="radio"
                                      name="First-Choice-Time"
                                      value="14:00:00"
                                      data-name="First Choice Time"
                                      required={false}
                                      id="14-00-00"
                                      form={{
                                        type: "radio-input",
                                        name: "First Choice Time",
                                      }}
                                      inputType="default"
                                    />
                                    <_Builtin.FormInlineLabel className="form_radiobutton-label">
                                      {"2:00 pm"}
                                    </_Builtin.FormInlineLabel>
                                  </_Builtin.FormRadioWrapper>
                                  <_Builtin.FormRadioWrapper className="form__radiobutton-wrap hidden">
                                    <_Builtin.FormRadioInput
                                      className="form__radiobutton-input"
                                      type="radio"
                                      name="First-Choice-Time"
                                      value="17:00:00"
                                      data-name="First Choice Time"
                                      required={false}
                                      id="17-00-00"
                                      form={{
                                        type: "radio-input",
                                        name: "First Choice Time",
                                      }}
                                      inputType="default"
                                    />
                                    <_Builtin.FormInlineLabel className="form_radiobutton-label">
                                      {"5:00 pm"}
                                    </_Builtin.FormInlineLabel>
                                  </_Builtin.FormRadioWrapper>
                                  <_Builtin.FormRadioWrapper className="form__radiobutton-wrap hidden">
                                    <_Builtin.FormRadioInput
                                      className="form__radiobutton-input"
                                      type="radio"
                                      name="First-Choice-Time"
                                      value="08:00:00"
                                      data-name="First Choice Time"
                                      required={false}
                                      id="08-00-00"
                                      form={{
                                        type: "radio-input",
                                        name: "First Choice Time",
                                      }}
                                      inputType="default"
                                    />
                                    <_Builtin.FormInlineLabel className="form_radiobutton-label">
                                      {"8:00 am"}
                                    </_Builtin.FormInlineLabel>
                                  </_Builtin.FormRadioWrapper>
                                  <_Builtin.FormRadioWrapper className="form__radiobutton-wrap hidden">
                                    <_Builtin.FormRadioInput
                                      className="form__radiobutton-input"
                                      type="radio"
                                      name="First-Choice-Time"
                                      value="11:00:00"
                                      data-name="First Choice Time"
                                      required={false}
                                      id="11-00-00"
                                      form={{
                                        type: "radio-input",
                                        name: "First Choice Time",
                                      }}
                                      inputType="default"
                                    />
                                    <_Builtin.FormInlineLabel className="form_radiobutton-label">
                                      {"11:00 am"}
                                    </_Builtin.FormInlineLabel>
                                  </_Builtin.FormRadioWrapper>
                                  <_Builtin.FormRadioWrapper className="form__radiobutton-wrap hidden">
                                    <_Builtin.FormRadioInput
                                      className="form__radiobutton-input"
                                      type="radio"
                                      name="First-Choice-Time"
                                      value="15:00:00"
                                      data-name="First Choice Time"
                                      required={false}
                                      id="15-00-00"
                                      form={{
                                        type: "radio-input",
                                        name: "First Choice Time",
                                      }}
                                      inputType="default"
                                    />
                                    <_Builtin.FormInlineLabel className="form_radiobutton-label">
                                      {"3:00 pm"}
                                    </_Builtin.FormInlineLabel>
                                  </_Builtin.FormRadioWrapper>
                                  <_Builtin.FormRadioWrapper className="form__radiobutton-wrap hidden">
                                    <_Builtin.FormRadioInput
                                      className="form__radiobutton-input"
                                      type="radio"
                                      name="First-Choice-Time"
                                      value="12:00:00"
                                      data-name="First Choice Time"
                                      required={false}
                                      id="12-00-00"
                                      form={{
                                        type: "radio-input",
                                        name: "First Choice Time",
                                      }}
                                      inputType="default"
                                    />
                                    <_Builtin.FormInlineLabel className="form_radiobutton-label">
                                      {"12:00 pm"}
                                    </_Builtin.FormInlineLabel>
                                  </_Builtin.FormRadioWrapper>
                                  <_Builtin.FormRadioWrapper className="form__radiobutton-wrap hidden">
                                    <_Builtin.FormRadioInput
                                      className="form__radiobutton-input"
                                      type="radio"
                                      name="First-Choice-Time"
                                      value="18:00:00"
                                      data-name="First Choice Time"
                                      required={false}
                                      id="18-00-00"
                                      form={{
                                        type: "radio-input",
                                        name: "First Choice Time",
                                      }}
                                      inputType="default"
                                    />
                                    <_Builtin.FormInlineLabel className="form_radiobutton-label">
                                      {"6:00 pm"}
                                    </_Builtin.FormInlineLabel>
                                  </_Builtin.FormRadioWrapper>
                                  <_Builtin.FormRadioWrapper
                                    className="form__radiobutton-wrap form__radiobutton-wrap__other"
                                    id="w-node-_49e8c24c-c992-196c-636d-11d517c57e65-17c57cfd"
                                  >
                                    <_Builtin.FormRadioInput
                                      className="form__radiobutton-input"
                                      type="radio"
                                      name="First-Choice-Time"
                                      value="Other"
                                      data-name="First Choice Time"
                                      required={false}
                                      id="Other"
                                      form={{
                                        type: "radio-input",
                                        name: "First Choice Time",
                                      }}
                                      inputType="default"
                                    />
                                    <_Builtin.FormInlineLabel className="form_radiobutton-label">
                                      {"Other"}
                                    </_Builtin.FormInlineLabel>
                                  </_Builtin.FormRadioWrapper>
                                </_Builtin.Block>
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className="form__validation-msg"
                          tag="div"
                        >
                          {"This field is required."}
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block className="form__group" tag="div">
                        <_Builtin.Block
                          className="appointment-box"
                          tag="div"
                          id="appt-box-2"
                        >
                          <_Builtin.Block
                            className="appointment-box__heading"
                            tag="div"
                          >
                            <_Builtin.FormBlockLabel
                              className="form__label form__label--visible form__label--required form__label--apointment"
                              id="w-node-_49e8c24c-c992-196c-636d-11d517c57e6e-17c57cfd"
                              htmlFor="main-form-Second-Choice-Date"
                            >
                              {"Secondary Appointment"}
                            </_Builtin.FormBlockLabel>
                            <_Builtin.Block
                              className="appointment-box__value hidden"
                              id="w-node-_49e8c24c-c992-196c-636d-11d517c57e70-17c57cfd"
                              tag="div"
                            >
                              <_Builtin.Span data-date-appt2="Date">
                                {"Date"}
                              </_Builtin.Span>
                              <_Builtin.Span
                                className="hidden appointment-box__value-time"
                                data-time-appt2="Time"
                              >
                                {"Time"}
                              </_Builtin.Span>
                            </_Builtin.Block>
                            <_Builtin.Block
                              className="appointment-box__btn-wrap"
                              tag="div"
                            >
                              <_Builtin.Link
                                className="btn btn--grey btn--appt-edit hidden"
                                button={false}
                                block=""
                                options={{
                                  href: "#",
                                }}
                              >
                                {"Edit"}
                              </_Builtin.Link>
                            </_Builtin.Block>
                          </_Builtin.Block>
                          <_Builtin.Block
                            className="appointment-box__content max-height-0"
                            tag="div"
                          >
                            <_Builtin.Block
                              className="appointment-box__content-inner"
                              tag="div"
                            >
                              <_Builtin.Block
                                className="appointment-box__calendar"
                                tag="div"
                              >
                                <_Builtin.FormTextInput
                                  className="form__input form__input--date hidden"
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
                              </_Builtin.Block>
                              <_Builtin.Block
                                className="appointment-box__timepick"
                                tag="div"
                              >
                                <_Builtin.Block
                                  className="appointment-box__timepick-wrap"
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className="text-block-3 appointment-box__timepick-value"
                                    tag="div"
                                  >
                                    <_Builtin.Span data-date-appt2="Date">
                                      {"Date"}
                                    </_Builtin.Span>
                                  </_Builtin.Block>
                                </_Builtin.Block>
                                <_Builtin.Block
                                  className="appointment-box__timepick-options"
                                  tag="div"
                                >
                                  <_Builtin.FormRadioWrapper className="form__radiobutton-wrap">
                                    <_Builtin.FormRadioInput
                                      className="form__radiobutton-input"
                                      type="radio"
                                      name="Second-Choice-Time"
                                      value="10:00:00"
                                      data-name="Second Choice Time"
                                      required={false}
                                      id="10-00-00-2"
                                      form={{
                                        type: "radio-input",
                                        name: "Second Choice Time",
                                      }}
                                      inputType="default"
                                    />
                                    <_Builtin.FormInlineLabel className="form_radiobutton-label">
                                      {"10:00 am"}
                                    </_Builtin.FormInlineLabel>
                                  </_Builtin.FormRadioWrapper>
                                  <_Builtin.FormRadioWrapper className="form__radiobutton-wrap">
                                    <_Builtin.FormRadioInput
                                      className="form__radiobutton-input"
                                      type="radio"
                                      name="Second-Choice-Time"
                                      value="13:00:00"
                                      data-name="Second Choice Time"
                                      required={false}
                                      id="13-00-00-2"
                                      form={{
                                        type: "radio-input",
                                        name: "Second Choice Time",
                                      }}
                                      inputType="default"
                                    />
                                    <_Builtin.FormInlineLabel className="form_radiobutton-label">
                                      {"1:00 pm"}
                                    </_Builtin.FormInlineLabel>
                                  </_Builtin.FormRadioWrapper>
                                  <_Builtin.FormRadioWrapper className="form__radiobutton-wrap">
                                    <_Builtin.FormRadioInput
                                      className="form__radiobutton-input"
                                      type="radio"
                                      name="Second-Choice-Time"
                                      value="16:00:00"
                                      data-name="Second Choice Time"
                                      required={false}
                                      id="16-00-00-2"
                                      form={{
                                        type: "radio-input",
                                        name: "Second Choice Time",
                                      }}
                                      inputType="default"
                                    />
                                    <_Builtin.FormInlineLabel className="form_radiobutton-label">
                                      {"4:00 pm"}
                                    </_Builtin.FormInlineLabel>
                                  </_Builtin.FormRadioWrapper>
                                  <_Builtin.FormRadioWrapper className="form__radiobutton-wrap hidden">
                                    <_Builtin.FormRadioInput
                                      className="form__radiobutton-input"
                                      type="radio"
                                      name="Second-Choice-Time"
                                      value="09:00:00"
                                      data-name="Second Choice Time"
                                      required={false}
                                      id="09-00-00-2"
                                      form={{
                                        type: "radio-input",
                                        name: "Second Choice Time",
                                      }}
                                      inputType="default"
                                    />
                                    <_Builtin.FormInlineLabel className="form_radiobutton-label">
                                      {"9:00 am"}
                                    </_Builtin.FormInlineLabel>
                                  </_Builtin.FormRadioWrapper>
                                  <_Builtin.FormRadioWrapper className="form__radiobutton-wrap hidden">
                                    <_Builtin.FormRadioInput
                                      className="form__radiobutton-input"
                                      type="radio"
                                      name="Second-Choice-Time"
                                      value="14:00:00"
                                      data-name="Second Choice Time"
                                      required={false}
                                      id="14-00-00-2"
                                      form={{
                                        type: "radio-input",
                                        name: "Second Choice Time",
                                      }}
                                      inputType="default"
                                    />
                                    <_Builtin.FormInlineLabel className="form_radiobutton-label">
                                      {"2:00 pm"}
                                    </_Builtin.FormInlineLabel>
                                  </_Builtin.FormRadioWrapper>
                                  <_Builtin.FormRadioWrapper className="form__radiobutton-wrap hidden">
                                    <_Builtin.FormRadioInput
                                      className="form__radiobutton-input"
                                      type="radio"
                                      name="Second-Choice-Time"
                                      value="17:00:00"
                                      data-name="Second Choice Time"
                                      required={false}
                                      id="17-00-00-2"
                                      form={{
                                        type: "radio-input",
                                        name: "Second Choice Time",
                                      }}
                                      inputType="default"
                                    />
                                    <_Builtin.FormInlineLabel className="form_radiobutton-label">
                                      {"5:00 pm"}
                                    </_Builtin.FormInlineLabel>
                                  </_Builtin.FormRadioWrapper>
                                  <_Builtin.FormRadioWrapper className="form__radiobutton-wrap hidden">
                                    <_Builtin.FormRadioInput
                                      className="form__radiobutton-input"
                                      type="radio"
                                      name="Second-Choice-Time"
                                      value="08:00:00"
                                      data-name="Second Choice Time"
                                      required={false}
                                      id="08-00-00-2"
                                      form={{
                                        type: "radio-input",
                                        name: "Second Choice Time",
                                      }}
                                      inputType="default"
                                    />
                                    <_Builtin.FormInlineLabel className="form_radiobutton-label">
                                      {"8:00 am"}
                                    </_Builtin.FormInlineLabel>
                                  </_Builtin.FormRadioWrapper>
                                  <_Builtin.FormRadioWrapper className="form__radiobutton-wrap hidden">
                                    <_Builtin.FormRadioInput
                                      className="form__radiobutton-input"
                                      type="radio"
                                      name="Second-Choice-Time"
                                      value="11:00:00"
                                      data-name="Second Choice Time"
                                      required={false}
                                      id="11-00-00-2"
                                      form={{
                                        type: "radio-input",
                                        name: "Second Choice Time",
                                      }}
                                      inputType="default"
                                    />
                                    <_Builtin.FormInlineLabel className="form_radiobutton-label">
                                      {"11:00 am"}
                                    </_Builtin.FormInlineLabel>
                                  </_Builtin.FormRadioWrapper>
                                  <_Builtin.FormRadioWrapper className="form__radiobutton-wrap hidden">
                                    <_Builtin.FormRadioInput
                                      className="form__radiobutton-input"
                                      type="radio"
                                      name="Second-Choice-Time"
                                      value="15:00:00"
                                      data-name="Second Choice Time"
                                      required={false}
                                      id="15-00-00-2"
                                      form={{
                                        type: "radio-input",
                                        name: "Second Choice Time",
                                      }}
                                      inputType="default"
                                    />
                                    <_Builtin.FormInlineLabel className="form_radiobutton-label">
                                      {"3:00 pm"}
                                    </_Builtin.FormInlineLabel>
                                  </_Builtin.FormRadioWrapper>
                                  <_Builtin.FormRadioWrapper className="form__radiobutton-wrap hidden">
                                    <_Builtin.FormRadioInput
                                      className="form__radiobutton-input"
                                      type="radio"
                                      name="Second-Choice-Time"
                                      value="12:00:00"
                                      data-name="Second Choice Time"
                                      required={false}
                                      id="12-00-00-2"
                                      form={{
                                        type: "radio-input",
                                        name: "Second Choice Time",
                                      }}
                                      inputType="default"
                                    />
                                    <_Builtin.FormInlineLabel className="form_radiobutton-label">
                                      {"12:00 pm"}
                                    </_Builtin.FormInlineLabel>
                                  </_Builtin.FormRadioWrapper>
                                  <_Builtin.FormRadioWrapper className="form__radiobutton-wrap hidden">
                                    <_Builtin.FormRadioInput
                                      className="form__radiobutton-input"
                                      type="radio"
                                      name="Second-Choice-Time"
                                      value="18:00:00"
                                      data-name="Second Choice Time"
                                      required={false}
                                      id="18-00-00-2"
                                      form={{
                                        type: "radio-input",
                                        name: "Second Choice Time",
                                      }}
                                      inputType="default"
                                    />
                                    <_Builtin.FormInlineLabel className="form_radiobutton-label">
                                      {"6:00 pm"}
                                    </_Builtin.FormInlineLabel>
                                  </_Builtin.FormRadioWrapper>
                                  <_Builtin.FormRadioWrapper
                                    className="form__radiobutton-wrap form__radiobutton-wrap__other"
                                    id="w-node-_49e8c24c-c992-196c-636d-11d517c57eae-17c57cfd"
                                  >
                                    <_Builtin.FormRadioInput
                                      className="form__radiobutton-input"
                                      type="radio"
                                      name="Second-Choice-Time"
                                      value="Other"
                                      data-name="Second Choice Time"
                                      required={false}
                                      id="Other-2"
                                      form={{
                                        type: "radio-input",
                                        name: "Second Choice Time",
                                      }}
                                      inputType="default"
                                    />
                                    <_Builtin.FormInlineLabel className="form_radiobutton-label">
                                      {"Other"}
                                    </_Builtin.FormInlineLabel>
                                  </_Builtin.FormRadioWrapper>
                                </_Builtin.Block>
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className="form__validation-msg"
                          tag="div"
                        >
                          {"This field is required."}
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block className="form__group" tag="div">
                        <_Builtin.FormBlockLabel
                          className="form__label form__label--visible"
                          htmlFor="main-form-Comments"
                        >
                          {"Comments"}
                        </_Builtin.FormBlockLabel>
                        <_Builtin.FormTextarea
                          className="form__textarea-2"
                          name="Comments"
                          maxLength="2000"
                          data-name="Comments"
                          required={false}
                          autoFocus={false}
                          id="main-form-Comments"
                        />
                      </_Builtin.Block>
                      <_Builtin.Block className="form__group" tag="div">
                        <_Builtin.FormCheckboxWrapper className="form__checkbox">
                          <_Builtin.FormCheckboxInput
                            className="form__checkbox-input is--consent"
                            type="checkbox"
                            name="Marketing-Consent"
                            data-name="Marketing Consent"
                            required={false}
                            checked={true}
                            id="Marketing-Consent"
                            form={{
                              type: "checkbox-input",
                              name: "Marketing Consent",
                            }}
                            inputType="default"
                          />
                          <_Builtin.FormInlineLabel className="form__checkbox-label">
                            {
                              "I want to receive exclusive emails and SMS messages with status updates and recent news."
                            }
                          </_Builtin.FormInlineLabel>
                        </_Builtin.FormCheckboxWrapper>
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block className="form__submit" tag="div">
                      <_Builtin.Block
                        className="form__validation-msg"
                        tag="div"
                      >
                        {
                          "There are errors in the form. Please check all the fields and try to submit it again."
                        }
                      </_Builtin.Block>
                      <_Builtin.Block className="form__submit-btns" tag="div">
                        <_Builtin.Block
                          className="form__submit-btns--inner"
                          tag="div"
                        >
                          <_Builtin.Link
                            className="btn btn--form btn--form-submit"
                            button={true}
                            block=""
                            options={{
                              href: "#",
                            }}
                          >
                            {"Submit →"}
                          </_Builtin.Link>
                          <_Builtin.Block
                            className="form__submit-tip"
                            tag="div"
                          >
                            {"or press "}
                            <_Builtin.Strong>{"Enter ↵"}</_Builtin.Strong>
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Link
                          className="btn btn--form-back"
                          button={true}
                          block=""
                          options={{
                            href: "#",
                          }}
                        >
                          {"←"}
                        </_Builtin.Link>
                      </_Builtin.Block>
                      <_Builtin.Block className="subtitle" tag="div">
                        <_Builtin.Emphasized>
                          {
                            "*By submitting this request you acknowledge having read and agreeing to our "
                          }
                        </_Builtin.Emphasized>
                        <_Builtin.Link
                          className="body-link-3 text-color--primary"
                          button={false}
                          block=""
                          options={{
                            href: "#",
                          }}
                        >
                          <_Builtin.Emphasized>
                            {"Terms & Conditions"}
                          </_Builtin.Emphasized>
                        </_Builtin.Link>
                        <_Builtin.Emphasized>{" and "}</_Builtin.Emphasized>
                        <_Builtin.Link
                          className="body-link-3 text-color--primary"
                          button={false}
                          block=""
                          options={{
                            href: "#",
                          }}
                        >
                          <_Builtin.Emphasized>
                            {"Privacy Policy"}
                          </_Builtin.Emphasized>
                        </_Builtin.Link>
                        <_Builtin.Emphasized>{". "}</_Builtin.Emphasized>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.HtmlEmbed
                className="hidden-html"
                value="%3Cinput%20type%3D%22hidden%22%20id%3D%22main-form-Location-ID%22%20name%3D%22Location-ID%22%20value%3D%220%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22main-form-Status-ID%22%20name%3D%22Status-ID%22%20value%3D%221%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22main-form-Browser-ID%22%20name%3D%22Browser-ID%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22main-form-Marketing-Code%22%20name%3D%22Marketing-Code%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22main-form-Request-URL%22%20name%3D%22Request-URL%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22main-form-HTTP-Referrer%22%20name%3D%22HTTP-Referrer%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22main-form-Landing-URL%22%20name%3D%22Landing-URL%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22main-form-Client-IP%22%20name%3D%22Client-IP%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22main-form-Form-Emails%22%20name%3D%22Form-Emails%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22main-form-Interests-Label%22%20name%3D%22Interests-Label%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22main-form-Domain-Name%22%20name%3D%22Domain-Name%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22main-form-Form-Guid%22%20name%3D%22Form-Guid%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22main-form-Test-Entry%22%20name%3D%22Test-Entry%22%20value%3D%22false%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22main-form-Language-ID%22%20name%3D%22Language-ID%22%20value%3D%22en%22%3E%0A%3C!--%20URL%20Parameters%20--%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22main-form-Parameter-utm_source%22%20name%3D%22Parameter-utm_source%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22main-form-Parameter-utm_medium%22%20name%3D%22Parameter-utm_medium%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22main-form-Parameter-utm_campaign%22%20name%3D%22Parameter-utm_campaign%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22main-form-Parameter-utm_content%22%20name%3D%22Parameter-utm_content%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22main-form-Parameter-utm_term%22%20name%3D%22Parameter-utm_term%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22main-form-Parameter-match_type%22%20name%3D%22Parameter-match_type%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22main-form-Parameter-network%22%20name%3D%22Parameter-network%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22main-form-Parameter-device%22%20name%3D%22Parameter-device%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22main-form-Parameter-loc_physical%22%20name%3D%22Parameter-loc_physical%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22main-form-Parameter-creative%22%20name%3D%22Parameter-creative%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22main-form-Parameter-gbraid%22%20name%3D%22Parameter-gbraid%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22main-form-Parameter-wbraid%22%20name%3D%22Parameter-wbraid%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22main-form-Parameter-gclid%22%20name%3D%22Parameter-gclid%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22main-form-Parameter-msclkid%22%20name%3D%22Parameter-msclkid%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22main-form-Parameter-term%22%20name%3D%22Parameter-term%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22main-form-Parameter-id%22%20name%3D%22Parameter-id%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22main-form-Parameter-adset%22%20name%3D%22Parameter-adset%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22main-form-Parameter-fbclid%22%20name%3D%22Parameter-fbclid%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22main-form-Parameter-utm_id%22%20name%3D%22Parameter-utm_id%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22main-form-Parameter-epik%22%20name%3D%22Parameter-epik%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22main-form-Parameter-cto_pld%22%20name%3D%22Parameter-cto_pld%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22main-form-Parameter-cta%22%20name%3D%22Parameter-cta%22%20value%3E"
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
        </_Builtin.BlockContainer>
      </_Builtin.Section>
      <_Builtin.HtmlEmbed value="%3Cstyle%3E%0A%20%20%2F*%20iframe%20styling%20-%20Google%20Maps%20*%2F%0A%20%20%23map-address-iframe%20%7B%0A%20%20%20%20width%3A%20100%25%3B%20!important%3B%0A%20%20%7D%0A%20%20%0A%20%20%40keyframes%20text-white%20%7B%0A%20%20%090%25%20%7B%0A%20%20%20%20%20%20color%3A%20var(--black)%3B%0A%20%20%20%20%7D%0A%20%20%20%2060%25%20%7B%0A%20%20%20%20%20%20color%3A%20var(--black)%3B%0A%20%20%20%20%7D%0A%20%20%20%20100%25%20%7B%0A%20%20%20%20%20%20color%3A%20white%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20%0A%20%20%40keyframes%20radio-pulsate%20%7B%0A%20%20%20%200%25%20%7B%0A%20%20%20%20%20%20opacity%3A%200.2%3B%0A%20%20%20%20%20%20transform%3A%20scale(0.75)%3B%0A%20%20%20%20%7D%0A%20%20%20%2025%25%20%7B%0A%20%20%20%20%09opacity%3A%200.4%3B%0A%20%20%20%20%20%20transform%3A%20scale(2)%3B%0A%20%20%20%20%7D%0A%20%20%20%2050%25%20%7B%0A%20%20%20%20%20%20opacity%3A%200.2%3B%0A%20%20%20%20%20%20transform%3A%20scale(0.75)%3B%0A%20%20%20%20%7D%0A%20%20%20%2080%25%20%7B%0A%20%20%20%20%09opacity%3A%200.6%3B%0A%20%20%20%20%7D%0A%20%20%20%20100%25%20%7B%0A%20%20%20%20%20%20opacity%3A%201%3B%0A%20%20%20%20%20%20transform%3A%20scale(24)%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%0A%20%20%2F*%20Multi%20Step%20Form%20Styling%20*%2F%0A%0A%20%20%2F*%20Fixed%20Progress%20Button%20*%2F%0A%20%20%40media%20screen%20and%20(max-width%3A%20991px)%20%7B%0A%20%20%20%20.form-multi-steps%20.form-steps__single%20.form__submit-btns--inner.is--fixed%20%7B%0A%20%20%20%20%20%20position%3A%20fixed%3B%0A%20%20%20%20%20%20left%3A%200%3B%0A%20%20%20%20%20%20bottom%3A%200%3B%0A%20%20%20%20%20%20z-index%3A%2099%3B%0A%20%20%20%20%20%20width%3A%20100%25%3B%0A%20%20%20%20%20%20padding-top%3A%2020px%3B%0A%20%20%20%20%20%20padding-bottom%3A%2020px%3B%0A%20%20%20%20%20%20padding-left%3A%2086px%3B%0A%20%20%20%20%20%20padding-right%3A%2066px%3B%0A%20%20%20%20%20%20background%3A%20rgba(205%2C223%2C253%2C0.4)%3B%0A%20%20%20%20%20%20background%3A%20linear-gradient(0deg%2C%20rgba(205%2C223%2C253%2C0.4)%200%25%2C%20rgba(205%2C223%2C253%2C0.4)%2070%25%2C%20rgba(0%2C0%2C0%2C0)%20100%25)%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20%40media%20screen%20and%20(max-width%3A%20767px)%20%7B%0A%20%20%20%20.form-multi-steps%20.form-steps__single%20.form__submit-btns--inner.is--fixed%20%7B%0A%20%20%20%20%20%20padding-left%3A%2076px%3B%0A%20%20%20%20%20%20padding-right%3A%2056px%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20.form-block.is--multistep%20.form__input.form__input--date%7B%0A%20%20%20%20%20%20padding-top%3A%200%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20%40media%20screen%20and%20(max-width%3A%20479px)%20%7B%0A%20%20%20%20.form-multi-steps%20.form-steps__single%20.form__submit-btns--inner.is--fixed%20%7B%0A%20%20%20%20%20%20padding-left%3A%2064px%3B%0A%20%20%20%20%20%20padding-right%3A%2044px%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%0A%20%20%2F*%20Fields%20*%2F%0A%20%20.form-block.is--multistep%20.form__select%2C%0A%20%20.form-block.is--multistep%20.form__input%20%7B%0A%20%20%20%20border-top%3A%20none%3B%0A%20%20%20%20border-left%3A%20none%3B%0A%20%20%20%20border-right%3A%20none%3B%0A%20%20%20%20border-radius%3A%200%3B%0A%20%20%20%20border-width%3A%202px%3B%0A%20%20%20%20transition%3A%20border-color%200.2s%20ease%3B%0A%20%20%20%20padding-left%3A%200%3B%0A%20%20%20%20padding-right%3A%200%3B%0A%20%20%20%20height%3A%20auto%3B%0A%20%20%7D%0A%0A%20%20.form-block.is--multistep%20.form__input.form__input--date%20%7B%0A%20%20%20%20background-position%3A%20center%20right%3B%0A%20%20%20%20border-bottom%3A%20none%3B%0A%20%20%7D%0A%20%20.form-block.is--multistep%20.form__select%3Afocus%2C%0A%20%20.form-block.is--multistep%20.form__input%3Afocus%20%7B%0A%20%20%20%20border-color%3A%20black%3B%0A%20%20%7D%0A%20%20.form-block.is--multistep%20.form__group%20%7B%0A%20%20%20%20margin-bottom%3A%2024px%3B%0A%20%20%7D%0A%20%20.form-block.is--multistep%20.form__label%20%7B%0A%20%20%20%20font-weight%3A%20700%3B%0A%20%20%7D%0A%20%20.form-block.is--multistep%20.form__heading-wrap%20%7B%0A%20%20%20%20margin-bottom%3A%2032px%3B%0A%20%20%7D%0A%20%20.form__checkbox.is--multi.is--active%2C%0A%20%20.form__checkbox.is--multi.is--active%20.form__checkbox-number%20%7B%0A%20%20%20%20border-color%3A%20var(--primary-color)%3B%0A%20%20%20%20color%3A%20var(--primary-color)%3B%0A%20%20%20%20background-color%3A%20rgba(239%2C%2064%2C%2032%2C%200.1)%3B%0A%20%20%7D%0A%20%20.form__radiobutton-wrap%20%7B%0A%20%20%09position%3A%20relative%3B%0A%20%20%20%20overflow%3A%20hidden%3B%0A%20%20%7D%0A%20%20.form__radiobutton-wrap%20span%20%7B%0A%20%20%09position%3A%20relative%3B%0A%20%20%20%20z-index%3A%201%3B%0A%20%20%7D%0A%20%20.form__radiobutton-wrap%3A%3Abefore%20%7B%0A%09%09display%3A%20block%3B%0A%20%20%20%20width%3A%2020px%3B%0A%20%20%20%20height%3A%2020px%3B%0A%20%20%20%20border-radius%3A%2050%25%3B%0A%20%20%20%20position%3A%20absolute%3B%0A%20%20%20%20left%3A%20calc(50%25%20-%2010px)%3B%0A%20%20%20%20right%3A%200%3B%0A%20%20%20%20bottom%3A%20calc(50%25%20-%2010px)%3B%0A%20%20%20%20background-color%3A%20var(--primary-color)%3B%0A%20%20%20%20opacity%3A%200%3B%0A%20%20%20%20transform%3A%20scale(0)%3B%0A%20%20%20%20transform-origin%3A%20center%3B%0A%20%20%7D%0A%20%20.form__radiobutton-wrap.is--active%20%7B%0A%20%20%09border-color%3A%20var(--primary-color)%3B%0A%20%20%7D%0A%20%20.form__radiobutton-wrap.is--active%3A%3Abefore%20%7B%0A%20%20%20%20animation%3A%20radio-pulsate%200.8s%20forwards%3B%20%0A%20%20%7D%0A%20%20.form__radiobutton-wrap.is--active%20.form_radiobutton-label%20%7B%0A%20%20%20%20animation%3A%20text-white%200.8s%20forwards%3B%20%0A%20%20%7D%0A%20%20.form-block.is--multistep%20.btn.is--grey%20%7B%0A%20%20%20%20background-color%3A%20var(--menu-item-color)%3B%0A%20%20%7D%0A%3C%2Fstyle%3E%0A%0A%3Cscript%3E%0A%20%20var%20Webflow%20%3D%20Webflow%20%7C%7C%20%5B%5D%3B%0A%20%20Webflow.push(function%20()%20%7B%0A%20%20%20%20function%20checkVisible(elm%2C%20evalType)%20%7B%0A%20%20%20%20%20%20evalType%20%3D%20evalType%20%7C%7C%20%22visible%22%3B%0A%0A%20%20%20%20%20%20var%20vpH%20%3D%20%24(window).height()%2C%20%2F%2F%20Viewport%20Height%0A%20%20%20%20%20%20%20%20st%20%3D%20%24(window).scrollTop()%2C%20%2F%2F%20Scroll%20Top%0A%20%20%20%20%20%20%20%20y%20%3D%20%24(elm).offset().top%2C%0A%20%20%20%20%20%20%20%20elementHeight%20%3D%20%24(elm).height()%3B%0A%0A%20%20%20%20%20%20if%20(evalType%20%3D%3D%3D%20%22visible%22)%20return%20y%20%3C%20vpH%20%2B%20st%20%26%26%20y%20%3E%20st%20-%20elementHeight%3B%0A%20%20%20%20%20%20if%20(evalType%20%3D%3D%3D%20%22above%22)%20return%20y%20%3C%20vpH%20%2B%20st%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20function%20makeFixedBtn()%20%7B%0A%20%20%20%20%20%20let%20el%20%3D%20%24(%0A%20%20%20%20%20%20%20%20%22.form-multi-steps%20.form-steps__single.active%20.form__submit-btns%22%2C%0A%20%20%20%20%20%20)%3B%0A%20%20%20%20%20%20if%20(checkVisible(el%2C%20%22above%22))%20%7B%0A%20%20%20%20%20%20%20%20el.find(%22.form__submit-btns--inner%22).removeClass(%22is--fixed%22)%3B%0A%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20el.find(%22.form__submit-btns--inner%22).addClass(%22is--fixed%22)%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%0A%20%20%20%20makeFixedBtn()%3B%0A%0A%20%20%20%20%24(window).scroll(function%20()%20%7B%0A%20%20%20%20%20%20makeFixedBtn()%3B%0A%20%20%20%20%7D)%3B%0A%0A%20%20%20%20%24(window).on(%22resize%22%2C%20function%20()%20%7B%0A%20%20%20%20%20%20makeFixedBtn()%3B%0A%20%20%20%20%7D)%3B%0A%0A%20%20%20%20%2F%2F%20new%20multi-form%20appointment%20time%20flow%0A%20%20%20%20%24(document).ready(function%20()%20%7B%0A%20%20%20%20%20%20%24(%22.appointment-box%22).each(function%20()%20%7B%0A%20%20%20%20%20%20%20%20let%20appt%20%3D%20%24(this)%3B%0A%20%20%20%20%20%20%20%20let%20editButton%20%3D%20appt.find(%22.btn--appt-edit%22)%3B%0A%20%20%20%20%20%20%20%20let%20headingDateTime%20%3D%20appt.find(%0A%20%20%20%20%20%20%20%20%20%20%22.appointment-box__heading%20.appointment-box__value%22%2C%0A%20%20%20%20%20%20%20%20)%3B%0A%20%20%20%20%20%20%20%20let%20headingTime%20%3D%20headingDateTime.find(%22.appointment-box__value-time%22)%3B%0A%20%20%20%20%20%20%20%20let%20apptContent%20%3D%20appt.find(%22.appointment-box__content%22)%3B%0A%20%20%20%20%20%20%20%20let%20apptContentInner%20%3D%20apptContent.find(%0A%20%20%20%20%20%20%20%20%20%20%22.appointment-box__content-inner%22%2C%0A%20%20%20%20%20%20%20%20)%3B%0A%20%20%20%20%20%20%20%20let%20timeRadioButtons%20%3D%20appt.find(%22.form__radiobutton-input%22)%3B%0A%20%20%20%20%20%20%20%20let%20hiddenOptions%20%3D%20appt.find(%22.form__radiobutton-wrap.hidden%22)%3B%0A%20%20%20%20%20%20%20%20let%20showOptionsStep%20%3D%203%3B%0A%20%20%20%20%20%20%20%20let%20apptNumber%20%3D%20appt.is(%22%23appt-box-1%22)%20%3F%20%221%22%20%3A%20%222%22%3B%0A%20%20%20%20%20%20%20%20let%20sessionData%20%3D%20getFormSession(formSessionKey)%3B%0A%20%20%20%20%20%20%20%20let%20sessionDataApptTime%20%3D%20sessionData%5B%60apptTime%24%7BapptNumber%7D%60%5D%3B%0A%0A%0A%20%20%20%20%20%20%20%20%2F%2F%20If%20Time%20is%20already%20set%20from%20sessionStorage%20show%20the%20heading%2C%20else%20show%20Content%20to%20pick%20time%0A%20%20%20%20%20%20%20%20if%20(sessionDataApptTime%20!%3D%3D%20undefined%20%26%26%20sessionDataApptTime%20!%3D%20%22%22)%20%7B%0A%20%20%20%20%20%20%20%20%20%20console.log(%22time%20is%20set%22%2C%20sessionDataApptTime)%3B%0A%20%20%20%20%20%20%20%20%20%20headingDateTime.show(400)%3B%0A%20%20%20%20%20%20%20%20%20%20headingTime.show(400)%3B%0A%20%20%20%20%20%20%20%20%20%20editButton.show(400)%3B%0A%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20console.log(%22time%20is%20not%20set%22%2C%20sessionDataApptTime)%3B%0A%20%20%20%20%20%20%20%20%20%20%2F%2F%20Show%20only%20the%20first%20appointment%20box%20content%0A%20%20%20%20%20%20%20%20%20%20if%20(appt.is(%22%23appt-box-1%22))%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20apptContent.css(%22max-height%22%2C%20%22unset%22)%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20%2F%2F%20Check%20for%20the%20presence%20of%20appTime1%20and%20appTime2%0A%20%20%20%20%20%20%20%20if%20(%0A%20%20%20%20%20%20%20%20%20%20sessionData%5B%22apptTime1%22%5D%20!%3D%3D%20undefined%20%26%26%0A%20%20%20%20%20%20%20%20%20%20sessionData%5B%22apptTime1%22%5D%20!%3D%3D%20%22%22%20%26%26%0A%20%20%20%20%20%20%20%20%20%20(sessionData%5B%22apptTime2%22%5D%20%3D%3D%3D%20undefined%20%7C%7C%0A%20%20%20%20%20%20%20%20%20%20%20%20sessionData%5B%22apptTime2%22%5D%20%3D%3D%3D%20%22%22)%0A%20%20%20%20%20%20%20%20)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%24(%22%23appt-box-2%20.appointment-box__content%22).css(%22max-height%22%2C%20%22unset%22)%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20%2F%2F%20Show%20content%20on%20Edit%0A%20%20%20%20%20%20%20%20editButton.on(%22click%22%2C%20function%20(e)%20%7B%0A%20%20%20%20%20%20%20%20%20%20e.preventDefault()%3B%0A%20%20%20%20%20%20%20%20%20%20if%20(apptContent.hasClass(%22expanded%22))%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20collapseContent(apptContent)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20editButton.text(%22Edit%22)%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20expandContent(apptContent%2C%20apptContentInner)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20editButton.text(%22Close%22)%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D)%3B%0A%0A%20%20%20%20%20%20%20%20%2F%2F%20Make%20sure%20we%20show%20footer%20on%20time%20click%20to%20allow%20confirmation%0A%20%20%20%20%20%20%20%20timeRadioButtons.each(function%20()%20%7B%0A%20%20%20%20%20%20%20%20%20%20let%20el%20%3D%20%24(this)%3B%0A%20%20%20%20%20%20%20%20%20%20el.on(%22click%22%2C%20function%20()%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20let%20locationInputValue%20%3D%20%24(%22%23main-form-Location-ID%22).val()%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20Function%20to%20check%20if%20location%20input%20value%20is%201%2C%202%2C%20or%2031%0A%20%20%20%20%20%20%20%20%20%20%20%20function%20isLocationValid()%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20%5B%221%22%2C%20%222%22%2C%20%2231%22%5D.includes(locationInputValue)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%09console.log('is%20location%20valid%3A'%2C%20isLocationValid())%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20Check%20if%20it's%20Other%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20(%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20el%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20.closest(%22.form__radiobutton-wrap%22)%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20.hasClass(%22form__radiobutton-wrap__other%22)%0A%20%20%20%20%20%20%20%20%20%20%20%20)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20Check%20if%20Location-ID%20is%20valid%20(1%2C%202%2C%20or%2031)%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20Check%20if%20there%20are%20hidden%20Options%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(hiddenOptions.filter(%22.hidden%22).length%20%3D%3D%3D%200%20%7C%7C%20!isLocationValid())%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20This%20Other%20should%20get%20active%20only%20if%20there%20are%20no%20more%20hidden%20options%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20el.closest(%22.form__radiobutton-wrap%22).addClass(%22is--active%22)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20setTimeout(function%20()%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20collapseContent(apptContent%2C%20function%20()%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20headingDateTime.show(400)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20headingTime.show(400)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20editButton.show(400)%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(appt.is(%22%23appt-box-1%22))%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20let%20apptBox2%20%3D%20%24(%22%23appt-box-2%22)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20let%20apptBox2Content%20%3D%20%24(%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22%23appt-box-2%20.appointment-box__content%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20let%20apptBox2InnerContent%20%3D%20%24(%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22%23appt-box-2%20.appointment-box__content-inner%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20)%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(window.innerWidth%20%3C%20768)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20scrollToElement(apptBox2).then(()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20expandContent(apptBox2Content%2C%20apptBox2InnerContent)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%24(%22%23appt-box-2%20.btn--appt-edit%22).text(%22Close%22)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20expandContent(apptBox2Content%2C%20apptBox2InnerContent)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%24(%22%23appt-box-2%20.btn--appt-edit%22).text(%22Close%22)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20Change%20edit%20button%20text%20to%20Close%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20editButton.text(%22Edit%22)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%20800)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20el.closest(%22.form__radiobutton-wrap%22).removeClass(%22is--active%22)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20Show%203%20options%20on%20click%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20hiddenOptions%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20.filter(%22.hidden%22)%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20.slice(0%2C%20showOptionsStep)%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20.removeClass(%22hidden%22)%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20.show()%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(window.innerWidth%20%3C%20767)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20let%20newHeight%20%3D%20apptContentInner.outerHeight()%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20let%20currentHeight%20%3D%20apptContent.outerHeight()%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(newHeight%20%3E%20currentHeight)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20apptContent.css(%22max-height%22%2C%20newHeight)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(hiddenOptions.filter(%22.hidden%22).length%20%3D%3D%3D%200%20%7C%7C%20!isLocationValid())%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20appt%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20.find(%22.form__radiobutton-wrap__other%22)%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20.removeClass(%22is--active%22)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20else%20make%20Other%20active%0A%09%09%09%09%09%09%09console.log('here%20test3')%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20if(el%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20.closest(%22.form__radiobutton-wrap%22)%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20.hasClass(%22form__radiobutton-wrap__other%22)%20%26%26%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20!isLocationValid())%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20el.closest(%22.form__radiobutton-wrap%22).addClass(%22is--active%22)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20console.log('here%20test4')%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20Confirmation%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20setTimeout(function%20()%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20collapseContent(apptContent%2C%20function%20()%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20headingDateTime.show(400)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20headingTime.show(400)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20editButton.show(400)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20editButton.text(%22Edit%22)%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(appt.is(%22%23appt-box-1%22))%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20let%20apptBox2%20%3D%20%24(%22%23appt-box-2%22)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20let%20apptBox2Content%20%3D%20%24(%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22%23appt-box-2%20.appointment-box__content%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20let%20apptBox2InnerContent%20%3D%20%24(%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22%23appt-box-2%20.appointment-box__content-inner%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20)%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(window.innerWidth%20%3C%20768)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20scrollToElement(apptBox2).then(()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20expandContent(apptBox2Content%2C%20apptBox2InnerContent)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%24(%22%23appt-box-2%20.btn--appt-edit%22).text(%22Close%22)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20expandContent(apptBox2Content%2C%20apptBox2InnerContent)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%24(%22%23appt-box-2%20.btn--appt-edit%22).text(%22Close%22)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(appt.is(%22%23appt-box-2%22))%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20let%20apptBox2%20%3D%20%24(%22%23appt-box-2%22)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20let%20comments%20%3D%20apptBox2%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20.closest(%22form%22)%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20.find(%22%23main-form-Comments%22)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20console.log(comments)%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(window.innerWidth%20%3C%20768%20%26%26%20comments)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20scrollToElement(comments)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%20800)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20%7D)%3B%0A%0A%20%20%20%20%20%20%2F%2F%20Function%20to%20expand%20the%20content%0A%20%20%20%20%20%20function%20expandContent(content%2C%20innerContent)%20%7B%0A%20%20%20%20%20%20%20%20let%20contentHeight%20%3D%20innerContent.outerHeight()%3B%0A%20%20%20%20%20%20%20%20content.animate(%7B%20maxHeight%3A%20contentHeight%20%7D%2C%20400%2C%20function%20()%20%7B%0A%20%20%20%20%20%20%20%20%20%20content.addClass(%22expanded%22)%3B%0A%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%2F%2F%20Function%20to%20collapse%20the%20content%0A%20%20%20%20%20%20function%20collapseContent(content%2C%20callback)%20%7B%0A%20%20%20%20%20%20%20%20content.animate(%7B%20maxHeight%3A%200%20%7D%2C%20400%2C%20function%20()%20%7B%0A%20%20%20%20%20%20%20%20%20%20content.removeClass(%22expanded%22)%3B%0A%20%20%20%20%20%20%20%20%20%20if%20(typeof%20callback%20%3D%3D%3D%20%22function%22)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20callback()%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%2F%2F%20Scroll%20to%20an%20element%20and%20return%20a%20promise%0A%20%20%20%20%20%20function%20scrollToElement(element)%20%7B%0A%20%20%20%20%20%20%20%20const%20headerHeight%20%3D%20%24(%22.sticky-header%22).outerHeight()%3B%0A%20%20%20%20%20%20%20%20return%20new%20Promise((resolve)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%24(%22html%2C%20body%22).animate(%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20scrollTop%3A%20element.offset().top%20-%20headerHeight%20-%2050%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20400%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20resolve%2C%0A%20%20%20%20%20%20%20%20%20%20)%3B%0A%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D)%3B%0A%20%20%7D)%3B%0A%0A%0A%3C%2Fscript%3E" />
    </_Component>
  );
}
