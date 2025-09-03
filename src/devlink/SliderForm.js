"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function SliderForm({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className="slider-form" tag="div">
      <_Builtin.Block className="text-align--center" tag="div">
        <_Builtin.Heading className="h4 h4--lower" tag="h3">
          {"Book Your Appointment"}
        </_Builtin.Heading>
      </_Builtin.Block>
      <_Builtin.FormWrapper className="form-block margin--top-12">
        <_Builtin.FormForm
          name="wf-form-Appointment-Form-Slider"
          data-name="Appointment Form Slider"
          redirect="/thank-you"
          data-redirect="/thank-you"
          method="get"
          id="wf-form-Appointment-Form-Slider"
        >
          <_Builtin.Block tag="div">
            <_Builtin.Block className="form__col" tag="div">
              <_Builtin.Block className="form__grid-2col" tag="div">
                <_Builtin.Block className="form__group" tag="div">
                  <_Builtin.FormBlockLabel
                    className="form__label"
                    htmlFor="slider-form-First-Name"
                  >
                    {"First Name"}
                  </_Builtin.FormBlockLabel>
                  <_Builtin.FormTextInput
                    className="form__input"
                    name="First-Name"
                    maxLength="80"
                    data-name="First Name"
                    placeholder="First Name"
                    disabled={false}
                    type="text"
                    required={true}
                    autoFocus={false}
                    autoComplete="given-name"
                    id="slider-form-First-Name"
                  />
                  <_Builtin.Block className="form__validation-msg" tag="div">
                    {"This field is required."}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block className="form__group" tag="div">
                  <_Builtin.FormBlockLabel
                    className="form__label"
                    htmlFor="slider-form-Last-Name"
                  >
                    {"Last Name"}
                  </_Builtin.FormBlockLabel>
                  <_Builtin.FormTextInput
                    className="form__input"
                    name="Last-Name"
                    maxLength="80"
                    data-name="Last Name"
                    placeholder="Last Name"
                    disabled={false}
                    type="text"
                    required={true}
                    autoFocus={false}
                    autoComplete="family-name"
                    id="slider-form-Last-Name"
                  />
                  <_Builtin.Block className="form__validation-msg" tag="div">
                    {"This field is required."}
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block className="form__group" tag="div">
                <_Builtin.FormBlockLabel
                  className="form__label"
                  htmlFor="slider-form-Phone-Number"
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
                  id="slider-form-Phone-Number"
                />
                <_Builtin.DOM
                  tag="input"
                  type="hidden"
                  name="Formatted-Phone-Number"
                  id="slider-form-Formatted-Phone-Number"
                  data-name="Formatted Phone Number"
                />
                <_Builtin.Block className="form__validation-msg" tag="div">
                  {"This field is required."}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block className="form__group" tag="div">
                <_Builtin.FormBlockLabel
                  className="form__label"
                  htmlFor="slider-form-Email"
                >
                  {"Email Address"}
                </_Builtin.FormBlockLabel>
                <_Builtin.FormTextInput
                  className="form__input form__input--email"
                  name="Email"
                  maxLength="80"
                  data-name="Email"
                  placeholder="Email Address"
                  disabled={false}
                  type="email"
                  required={true}
                  autoFocus={false}
                  autoComplete="email"
                  id="slider-form-Email"
                />
                <_Builtin.Block className="form__validation-msg" tag="div">
                  {"This field is required."}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block className="form__group" tag="div">
                <_Builtin.FormBlockLabel
                  className="form__label"
                  htmlFor="slider-form-Address"
                >
                  {"Address"}
                </_Builtin.FormBlockLabel>
                <_Builtin.FormTextInput
                  className="form__input form__input--address"
                  name="Address"
                  maxLength="255"
                  data-name="Address"
                  placeholder="Address"
                  disabled={false}
                  type="text"
                  required={true}
                  autoFocus={false}
                  autoComplete="address-line1"
                  id="slider-form-Address"
                />
                <_Builtin.Block className="form__validation-msg" tag="div">
                  {"This field is required."}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block className="form__grid-2col" tag="div">
                <_Builtin.Block
                  className="form__group"
                  id="w-node-_60188107-782b-ff8f-f95e-f4bd77c3b67b-77c3b651"
                  tag="div"
                >
                  <_Builtin.FormBlockLabel
                    className="form__label"
                    htmlFor="slider-form-Country"
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
                    aria-label="Country"
                    id="slider-form-Country"
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
                  <_Builtin.Block className="form__validation-msg" tag="div">
                    {"This field is required."}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block className="form__group" tag="div">
                  <_Builtin.FormBlockLabel
                    className="form__label"
                    htmlFor="slider-form-State"
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
                    aria-label="State"
                    id="slider-form-State"
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
                  <_Builtin.Block className="form__validation-msg" tag="div">
                    {"This field is required."}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block className="form__group" tag="div">
                  <_Builtin.FormBlockLabel
                    className="form__label"
                    htmlFor="slider-form-City"
                  >
                    {"City"}
                  </_Builtin.FormBlockLabel>
                  <_Builtin.FormTextInput
                    className="form__input"
                    name="City"
                    maxLength={256}
                    data-name="City"
                    placeholder="City"
                    disabled={false}
                    type="text"
                    required={true}
                    autoFocus={false}
                    autoComplete="address-level2"
                    id="slider-form-City"
                  />
                  <_Builtin.Block className="form__validation-msg" tag="div">
                    {"This field is required."}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block className="form__group" tag="div">
                  <_Builtin.FormBlockLabel
                    className="form__label"
                    htmlFor="slider-form-ZIP-Code"
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
                    minLength="5"
                    id="slider-form-ZIP-Code"
                  />
                  <_Builtin.Block className="form__validation-msg" tag="div">
                    {"This field is required."}
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block className="form__group" tag="div">
                <_Builtin.Block
                  className="form__checkbox-group-title form__checkbox-group-title--sm"
                  tag="div"
                >
                  {"I'm interested in..."}
                </_Builtin.Block>
                <_Builtin.Block
                  className="form__checkbox-group form__checkbox-group--sm"
                  tag="div"
                >
                  <_Builtin.FormCheckboxWrapper className="form__checkbox">
                    <_Builtin.FormCheckboxInput
                      className="form__checkbox-input"
                      type="checkbox"
                      name="Interests-Closet"
                      data-name="Interests Closet"
                      required={false}
                      checked={false}
                      id="slider-form-Interests-Closet"
                      form={{
                        type: "checkbox-input",
                        name: "Interests Closet",
                      }}
                      inputType="default"
                    />
                    <_Builtin.FormInlineLabel
                      className="form__checkbox-label"
                      htmlFor="slider-form-Interests-Closet"
                    >
                      {"Closet"}
                    </_Builtin.FormInlineLabel>
                  </_Builtin.FormCheckboxWrapper>
                  <_Builtin.FormCheckboxWrapper className="form__checkbox">
                    <_Builtin.FormCheckboxInput
                      className="form__checkbox-input"
                      type="checkbox"
                      name="Interests-Garage"
                      data-name="Interests Garage"
                      required={false}
                      checked={false}
                      id="slider-form-Interests-Garage"
                      form={{
                        type: "checkbox-input",
                        name: "Interests Garage",
                      }}
                      inputType="default"
                    />
                    <_Builtin.FormInlineLabel
                      className="form__checkbox-label"
                      htmlFor="slider-form-Interests-Garage"
                    >
                      {"Garage"}
                    </_Builtin.FormInlineLabel>
                  </_Builtin.FormCheckboxWrapper>
                  <_Builtin.FormCheckboxWrapper className="form__checkbox">
                    <_Builtin.FormCheckboxInput
                      className="form__checkbox-input"
                      type="checkbox"
                      name="Interests-Home-Office"
                      data-name="Interests Home Office"
                      required={false}
                      checked={false}
                      id="slider-form-Interests-Home-Office"
                      form={{
                        type: "checkbox-input",
                        name: "Interests Home Office",
                      }}
                      inputType="default"
                    />
                    <_Builtin.FormInlineLabel
                      className="form__checkbox-label"
                      htmlFor="slider-form-Interests-Home-Office"
                    >
                      {"Home Office"}
                    </_Builtin.FormInlineLabel>
                  </_Builtin.FormCheckboxWrapper>
                  <_Builtin.FormCheckboxWrapper className="form__checkbox">
                    <_Builtin.FormCheckboxInput
                      className="form__checkbox-input"
                      type="checkbox"
                      name="Interests-Pantry"
                      data-name="Interests Pantry"
                      required={false}
                      checked={false}
                      id="slider-form-Interests-Pantry"
                      form={{
                        type: "checkbox-input",
                        name: "Interests Pantry",
                      }}
                      inputType="default"
                    />
                    <_Builtin.FormInlineLabel
                      className="form__checkbox-label"
                      htmlFor="slider-form-Interests-Pantry"
                    >
                      {"Pantry"}
                    </_Builtin.FormInlineLabel>
                  </_Builtin.FormCheckboxWrapper>
                  <_Builtin.FormCheckboxWrapper className="form__checkbox">
                    <_Builtin.FormCheckboxInput
                      className="form__checkbox-input"
                      type="checkbox"
                      name="Interests-Laundry"
                      data-name="Interests Laundry"
                      required={false}
                      checked={false}
                      id="slider-form-Interests-Laundry"
                      form={{
                        type: "checkbox-input",
                        name: "Interests Laundry",
                      }}
                      inputType="default"
                    />
                    <_Builtin.FormInlineLabel
                      className="form__checkbox-label"
                      htmlFor="slider-form-Interests-Laundry"
                    >
                      {"Laundry"}
                    </_Builtin.FormInlineLabel>
                  </_Builtin.FormCheckboxWrapper>
                  <_Builtin.FormCheckboxWrapper className="form__checkbox">
                    <_Builtin.FormCheckboxInput
                      className="form__checkbox-input"
                      type="checkbox"
                      name="Interests-Wall-Bed"
                      data-name="Interests Wall Bed"
                      required={false}
                      checked={false}
                      id="slider-form-Interests-Wall-Bed"
                      form={{
                        type: "checkbox-input",
                        name: "Interests Wall Bed",
                      }}
                      inputType="default"
                    />
                    <_Builtin.FormInlineLabel
                      className="form__checkbox-label"
                      htmlFor="slider-form-Interests-Wall-Bed"
                    >
                      {"Wall Bed"}
                    </_Builtin.FormInlineLabel>
                  </_Builtin.FormCheckboxWrapper>
                  <_Builtin.FormCheckboxWrapper
                    className="form__checkbox"
                    id="w-node-_60188107-782b-ff8f-f95e-f4bd77c3b6af-77c3b651"
                  >
                    <_Builtin.FormCheckboxInput
                      className="form__checkbox-input"
                      type="checkbox"
                      name="Interests-Sliding-Door"
                      data-name="Interests Sliding Door"
                      required={false}
                      checked={false}
                      id="slider-form-Interests-Sliding-Door"
                      form={{
                        type: "checkbox-input",
                        name: "Interests Sliding Door",
                      }}
                      inputType="default"
                    />
                    <_Builtin.FormInlineLabel
                      className="form__checkbox-label"
                      htmlFor="slider-form-Interests-Sliding-Door"
                    >
                      {"Sliding Door"}
                    </_Builtin.FormInlineLabel>
                  </_Builtin.FormCheckboxWrapper>
                  <_Builtin.FormCheckboxWrapper className="form__checkbox">
                    <_Builtin.FormCheckboxInput
                      className="form__checkbox-input"
                      type="checkbox"
                      name="Interests-Other"
                      data-name="Interests Other"
                      required={false}
                      checked={false}
                      id="slider-form-Interests-Other"
                      form={{
                        type: "checkbox-input",
                        name: "Interests Other",
                      }}
                      inputType="default"
                    />
                    <_Builtin.FormInlineLabel
                      className="form__checkbox-label"
                      htmlFor="slider-form-Interests-Other"
                    >
                      {"Other"}
                    </_Builtin.FormInlineLabel>
                  </_Builtin.FormCheckboxWrapper>
                </_Builtin.Block>
                <_Builtin.Block className="form__validation-msg" tag="div">
                  {"This field is required."}
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block className="form__col" tag="div">
              <_Builtin.Block className="form__legend" tag="div">
                <_Builtin.Block className="form__legend-line" tag="div" />
                <_Builtin.Block className="form__legend-title" tag="div">
                  {"Set Your Appointment"}
                </_Builtin.Block>
                <_Builtin.Block className="form__legend-line" tag="div" />
              </_Builtin.Block>
              <_Builtin.Block
                className="form__group-wrapper"
                id="w-node-_60188107-782b-ff8f-f95e-f4bd77c3b6bf-77c3b651"
                tag="div"
              >
                <_Builtin.Block className="form__time-info" tag="div">
                  {"Times are displayed in the entered address's time zone."}
                </_Builtin.Block>
                <_Builtin.DOM
                  className="form__label form__label--visible form__label--required"
                  tag="div"
                >
                  {"First Choice"}
                </_Builtin.DOM>
                <_Builtin.Block className="form__grid-2col" tag="div">
                  <_Builtin.Block className="form__group" tag="div">
                    <_Builtin.FormBlockLabel
                      className="form__label"
                      htmlFor="slider-form-First-Choice-Date"
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
                      id="slider-form-First-Choice-Date"
                    />
                    <_Builtin.Block className="form__validation-msg" tag="div">
                      {"This field is required."}
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block className="form__group" tag="div">
                    <_Builtin.FormBlockLabel
                      className="form__label"
                      htmlFor="slider-form-First-Choice-Time"
                    >
                      {"First Choice Time"}
                    </_Builtin.FormBlockLabel>
                    <_Builtin.FormSelect
                      className="form__select"
                      name="First-Choice-Time"
                      data-name="First Choice Time"
                      required={true}
                      multiple={false}
                      aria-label="First Choice Time"
                      id="slider-form-First-Choice-Time"
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
                    <_Builtin.Block className="form__validation-msg" tag="div">
                      {"This field is required."}
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block className="form__group-wrapper" tag="div">
                <_Builtin.DOM
                  className="form__label form__label--visible form__label--required"
                  tag="div"
                >
                  {"Second Choice"}
                </_Builtin.DOM>
                <_Builtin.Block className="form__grid-2col" tag="div">
                  <_Builtin.Block className="form__group" tag="div">
                    <_Builtin.FormBlockLabel
                      className="form__label"
                      htmlFor="slider-form-Second-Choice-Date"
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
                      id="slider-form-Second-Choice-Date"
                    />
                    <_Builtin.Block className="form__validation-msg" tag="div">
                      {"This field is required."}
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block className="form__group" tag="div">
                    <_Builtin.FormBlockLabel
                      className="form__label"
                      htmlFor="slider-form-Second-Choice-Time"
                    >
                      {"Second Choice Time"}
                    </_Builtin.FormBlockLabel>
                    <_Builtin.FormSelect
                      className="form__select"
                      name="Second-Choice-Time"
                      data-name="Second Choice Time"
                      required={true}
                      multiple={false}
                      aria-label="Second Choice Time"
                      id="slider-form-Second-Choice-Time"
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
                    <_Builtin.Block className="form__validation-msg" tag="div">
                      {"This field is required."}
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block className="form__group" tag="div">
                <_Builtin.FormBlockLabel
                  className="form__label"
                  htmlFor="slider-form-Comments"
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
                  id="slider-form-Comments"
                />
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
              className="btn btn--form btn--form-sm"
              button={true}
              block=""
              options={{
                href: "#",
              }}
            >
              {"SUBMIT"}
            </_Builtin.Link>
            <_Builtin.Block className="subtitle subtitle--sm" tag="div">
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
            value="%3Cinput%20type%3D%22hidden%22%20id%3D%22slider-form-Location-ID%22%20name%3D%22Location-ID%22%20value%3D%220%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22slider-form-Status-ID%22%20name%3D%22Status-ID%22%20value%3D%221%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22slider-form-Browser-ID%22%20name%3D%22Browser-ID%22%20value%3D%22%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22slider-form-Marketing-Code%22%20name%3D%22Marketing-Code%22%20value%3D%22%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22slider-form-Request-URL%22%20name%3D%22Request-URL%22%20value%3D%22%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22slider-form-HTTP-Referrer%22%20name%3D%22HTTP-Referrer%22%20value%3D%22%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22slider-form-Landing-URL%22%20name%3D%22Landing-URL%22%20value%3D%22%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22slider-form-Client-IP%22%20name%3D%22Client-IP%22%20value%3D%22%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22slider-form-Form-Emails%22%20name%3D%22Form-Emails%22%20value%3D%22%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22slider-form-Interests-Label%22%20name%3D%22Interests-Label%22%20value%3D%22%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22slider-form-Domain-Name%22%20name%3D%22Domain-Name%22%20value%3D%22%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22slider-form-Form-Guid%22%20name%3D%22Form-Guid%22%20value%3D%22%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22slider-form-Test-Entry%22%20name%3D%22Test-Entry%22%20value%3D%22false%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22slider-form-Language-ID%22%20name%3D%22Language-ID%22%20value%3D%22%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22slider-form-Form-ID%22%20name%3D%22Form-ID%22%20value%3D%221%22%3E%0A%3C!--%20URL%20Parameter%20--%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22slider-form-Parameter-utm_source%22%20name%3D%22Parameter-utm_source%22%20value%3D%22%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22slider-form-Parameter-utm_medium%22%20name%3D%22Parameter-utm_medium%22%20value%3D%22%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22slider-form-Parameter-utm_campaign%22%20name%3D%22Parameter-utm_campaign%22%20value%3D%22%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22slider-form-Parameter-utm_content%22%20name%3D%22Parameter-utm_content%22%20value%3D%22%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22slider-form-Parameter-utm_term%22%20name%3D%22Parameter-utm_term%22%20value%3D%22%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22slider-form-Parameter-match_type%22%20name%3D%22Parameter-match_type%22%20value%3D%22%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22slider-form-Parameter-network%22%20name%3D%22Parameter-network%22%20value%3D%22%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22slider-form-Parameter-device%22%20name%3D%22Parameter-device%22%20value%3D%22%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22slider-form-Parameter-loc_physical%22%20name%3D%22Parameter-loc_physical%22%20value%3D%22%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22slider-form-Parameter-creative%22%20name%3D%22Parameter-creative%22%20value%3D%22%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22slider-form-Parameter-gbraid%22%20name%3D%22Parameter-gbraid%22%20value%3D%22%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22slider-form-Parameter-wbraid%22%20name%3D%22Parameter-wbraid%22%20value%3D%22%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22slider-form-Parameter-gclid%22%20name%3D%22Parameter-gclid%22%20value%3D%22%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22slider-form-Parameter-msclkid%22%20name%3D%22Parameter-msclkid%22%20value%3D%22%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22slider-form-Parameter-term%22%20name%3D%22Parameter-term%22%20value%3D%22%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22slider-form-Parameter-id%22%20name%3D%22Parameter-id%22%20value%3D%22%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22slider-form-Parameter-adset%22%20name%3D%22Parameter-adset%22%20value%3D%22%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22slider-form-Parameter-fbclid%22%20name%3D%22Parameter-fbclid%22%20value%3D%22%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22slider-form-Parameter-utm_id%22%20name%3D%22Parameter-utm_id%22%20value%3D%22%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22slider-form-Parameter-epik%22%20name%3D%22Parameter-epik%22%20value%3D%22%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22slider-form-Parameter-cto_pld%22%20name%3D%22Parameter-cto_pld%22%20value%3D%22%22%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22slider-form-Parameter-cta%22%20name%3D%22Parameter-cta%22%20value%3D%22%22%3E"
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
        className="hidden-html"
        value="%3Cstyle%3E%0A%20%20.form__checkbox-group.form__checkbox-group--sm%20.form__checkbox-label%20%7B%0A%20%20%20%20font-size%3A%2012px%3B%0A%20%20%20%20padding-top%3A%201px%3B%0A%20%20%7D%0A%20%20.form__checkbox-group.form__checkbox-group--sm%20.form__checkbox%20%7B%0A%20%20%09gap%3A%203px%3B%0A%20%20%7D%0A%20%20.form__checkbox-group.form__checkbox-group--sm%20.form__checkbox-input%20%7B%0A%20%20%09margin-left%3A%20-3px%3B%0A%20%20%7D%0A%20%20.slider-form%20.form__input%2C%0A%20%20.slider-form%20.form__select%20%7B%0A%20%20%09height%3A%2040px%3B%0A%20%20%7D%0A%3C%2Fstyle%3E"
      />
    </_Component>
  );
}
