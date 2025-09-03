"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { FooterSocial } from "./FooterSocial";
import { IconClose } from "./IconClose";

export function NavbarV2Menu({ as: _Component = _Builtin.NavbarMenu }) {
  return (
    <_Component
      className="navbar-v2-menu"
      tag="nav"
      role="navigation"
      data-anim-menu-cont=""
    >
      <_Builtin.VFlex className="navbar-v2-menu-inner" tag="div">
        <_Builtin.DropdownWrapper
          className="nav-v2-dropdown"
          tag="div"
          data-anim-menu-stagger=""
          delay={0}
          hover={true}
        >
          <_Builtin.DropdownToggle className="nav-v2-link" tag="div">
            <_Builtin.Link
              className="nav-v2-link__inner-link mobile-pointers-none"
              button={false}
              block="inline"
              options={{
                href: "/custom-closets",
              }}
            >
              <_Builtin.Block tag="div">{"Custom Closets"}</_Builtin.Block>
              <_Builtin.VFlex className="dropdown-v2-icon" tag="div">
                <_Builtin.HtmlEmbed
                  className="svg-icon"
                  value="%3Csvg%20width%3D%2210%22%20height%3D%2210%22%20viewBox%3D%220%200%2010%2010%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M5%201V9%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3Cpath%20d%3D%22M9%205H1%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
                />
              </_Builtin.VFlex>
            </_Builtin.Link>
          </_Builtin.DropdownToggle>
          <_Builtin.DropdownList
            className="nav-v2-dropdown-menu-cont"
            tag="nav"
          >
            <_Builtin.VFlex className="nav-v2-dropdown-menu" tag="div">
              <_Builtin.Link
                className="nav-v2-dropdown-link hidden-desktop"
                button={false}
                block="inline"
                options={{
                  href: "/custom-closets",
                }}
              >
                <_Builtin.Image
                  className="nav-v2-dropdown-link__img"
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/68417ab308840778b7e295be_walk-in.svg"
                />
                <_Builtin.Block tag="div">{"All Closets"}</_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Link
                className="nav-v2-dropdown-link"
                button={false}
                block="inline"
                options={{
                  href: "/walk-in-closets",
                }}
              >
                <_Builtin.Image
                  className="nav-v2-dropdown-link__img"
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/68417ab308840778b7e295be_walk-in.svg"
                />
                <_Builtin.Block tag="div">{"Walk-In"}</_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Link
                className="nav-v2-dropdown-link"
                button={false}
                block="inline"
                options={{
                  href: "/reach-in-closets",
                }}
              >
                <_Builtin.Image
                  className="nav-v2-dropdown-link__img"
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/68417ab3aaf7e27f1c9e2736_reach-in.svg"
                />
                <_Builtin.Block tag="div">{"Reach-In"}</_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Link
                className="nav-v2-dropdown-link"
                button={false}
                block="inline"
                options={{
                  href: "/wardrobe-closets",
                }}
              >
                <_Builtin.Image
                  className="nav-v2-dropdown-link__img"
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/68417ab34393331d9eca3e83_wardrobe.svg"
                />
                <_Builtin.Block tag="div">{"Wardrobe"}</_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Link
                className="nav-v2-dropdown-link"
                button={false}
                block="inline"
                options={{
                  href: "/kids-closets",
                }}
              >
                <_Builtin.Image
                  className="nav-v2-dropdown-link__img"
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/68417ab351e55dab396b24f0_kids-closet.svg"
                />
                <_Builtin.Block tag="div">{"Kids' Closets"}</_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Link
                className="nav-v2-dropdown-link"
                button={false}
                block="inline"
                options={{
                  href: "/closet-sliding-doors",
                }}
              >
                <_Builtin.Image
                  className="nav-v2-dropdown-link__img"
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/68417ab3e967a83d32ab65c6_sliding-doors.svg"
                />
                <_Builtin.Block tag="div">{"Closet Doors"}</_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Link
                className="nav-v2-dropdown-link"
                button={false}
                block="inline"
                options={{
                  href: "/closets-anywhere",
                }}
              >
                <_Builtin.Image
                  className="nav-v2-dropdown-link__img"
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/68417ab3ac0a9e295650959f_closets-anywhere.svg"
                />
                <_Builtin.Block tag="div">{"Closets Anywhere"}</_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.VFlex className="nav-v2-dropdown-sub__cont" tag="div">
                <_Builtin.VFlex className="nav-v2-dropdown-sub" tag="div">
                  <_Builtin.Block className="nav-v2-dropdown-label" tag="div">
                    {"Build"}
                  </_Builtin.Block>
                  <_Builtin.Link
                    className="nav-v2-dropdown-link-sub"
                    button={false}
                    block="inline"
                    options={{
                      href: "/closet-collections",
                    }}
                  >
                    <_Builtin.Block tag="div">
                      {"Collection Series"}
                    </_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.VFlex>
                <_Builtin.VFlex className="nav-v2-dropdown-sub" tag="div">
                  <_Builtin.Block className="nav-v2-dropdown-label" tag="div">
                    {"Inspiration"}
                  </_Builtin.Block>
                  <_Builtin.Link
                    className="nav-v2-dropdown-link-sub"
                    button={false}
                    block="inline"
                    options={{
                      href: "/by-style",
                    }}
                  >
                    <_Builtin.Block tag="div">{"By Style"}</_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.VFlex>
                <_Builtin.VFlex className="nav-v2-dropdown-sub" tag="div">
                  <_Builtin.Block className="nav-v2-dropdown-label" tag="div">
                    {"Organization"}
                  </_Builtin.Block>
                  <_Builtin.Link
                    className="nav-v2-dropdown-link-sub"
                    button={false}
                    block="inline"
                    options={{
                      href: "/custom-closet-walk-in-best-organizer-system#design",
                    }}
                  >
                    <_Builtin.Block tag="div">
                      {"Design Process"}
                    </_Builtin.Block>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className="nav-v2-dropdown-link-sub"
                    button={false}
                    block="inline"
                    options={{
                      href: "/locations",
                    }}
                  >
                    <_Builtin.Block tag="div">{"Location"}</_Builtin.Block>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className="nav-v2-dropdown-link-sub"
                    button={false}
                    block="inline"
                    options={{
                      href: "/contact-us#warranty",
                    }}
                  >
                    <_Builtin.Block tag="div">{"Warranty"}</_Builtin.Block>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className="nav-v2-dropdown-link-sub"
                    button={false}
                    block="inline"
                    options={{
                      href: "/faq",
                    }}
                  >
                    <_Builtin.Block tag="div">{"FAQ"}</_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.VFlex>
              </_Builtin.VFlex>
            </_Builtin.VFlex>
          </_Builtin.DropdownList>
        </_Builtin.DropdownWrapper>
        <_Builtin.DropdownWrapper
          className="nav-v2-dropdown"
          tag="div"
          data-anim-menu-stagger=""
          delay={0}
          hover={true}
        >
          <_Builtin.DropdownToggle className="nav-v2-link" tag="div">
            <_Builtin.Block tag="div">{"Custom Garages"}</_Builtin.Block>
            <_Builtin.VFlex className="dropdown-v2-icon" tag="div">
              <_Builtin.HtmlEmbed
                className="svg-icon"
                value="%3Csvg%20width%3D%2210%22%20height%3D%2210%22%20viewBox%3D%220%200%2010%2010%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M5%201V9%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3Cpath%20d%3D%22M9%205H1%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
              />
            </_Builtin.VFlex>
          </_Builtin.DropdownToggle>
          <_Builtin.DropdownList
            className="nav-v2-dropdown-menu-cont"
            tag="nav"
          >
            <_Builtin.VFlex className="nav-v2-dropdown-menu" tag="div">
              <_Builtin.Link
                className="nav-v2-dropdown-link"
                button={false}
                block="inline"
                options={{
                  href: "/custom-garage-cabinets",
                }}
              >
                <_Builtin.Image
                  className="nav-v2-dropdown-link__img"
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/68417ab3b50b6e3c8f9fc61c_cabinets.svg"
                />
                <_Builtin.Block tag="div">{"Garage Cabinets"}</_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Link
                className="nav-v2-dropdown-link"
                button={false}
                block="inline"
                options={{
                  href: "/garage-rolling-storage",
                }}
              >
                <_Builtin.Image
                  className="nav-v2-dropdown-link__img"
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/68417ab3bb99752d5d341cf2_rolling-storage.svg"
                />
                <_Builtin.Block tag="div">{"Rolling Storage"}</_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Link
                className="nav-v2-dropdown-link"
                button={false}
                block="inline"
                options={{
                  href: "/garage-wall-organizing",
                }}
              >
                <_Builtin.Image
                  className="nav-v2-dropdown-link__img"
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/68417ab35cb0e1ed0efb71aa_garage-walls.svg"
                />
                <_Builtin.Block tag="div">{"Garage Wall"}</_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Link
                className="nav-v2-dropdown-link"
                button={false}
                block="inline"
                options={{
                  href: "/garage-flooring",
                }}
              >
                <_Builtin.Image
                  className="nav-v2-dropdown-link__img"
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/68417ab3b559c42985d45888_garage-flooring.svg"
                />
                <_Builtin.Block tag="div">{"Garage Flooring"}</_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.VFlex className="nav-v2-dropdown-sub__cont" tag="div">
                <_Builtin.VFlex className="nav-v2-dropdown-sub" tag="div">
                  <_Builtin.Block className="nav-v2-dropdown-label" tag="div">
                    {"Build"}
                  </_Builtin.Block>
                  <_Builtin.Link
                    className="nav-v2-dropdown-link-sub"
                    button={false}
                    block="inline"
                    options={{
                      href: "/garage-collections",
                    }}
                  >
                    <_Builtin.Block tag="div">
                      {"Collection Series"}
                    </_Builtin.Block>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className="nav-v2-dropdown-link-sub"
                    button={false}
                    block="inline"
                    options={{
                      href: "/garage-flooring-collections",
                    }}
                  >
                    <_Builtin.Block tag="div">{"Chrome 3"}</_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.VFlex>
                <_Builtin.VFlex className="nav-v2-dropdown-sub" tag="div">
                  <_Builtin.Block className="nav-v2-dropdown-label" tag="div">
                    {"Inspiration"}
                  </_Builtin.Block>
                  <_Builtin.Link
                    className="nav-v2-dropdown-link-sub"
                    button={false}
                    block="inline"
                    options={{
                      href: "/by-style",
                    }}
                  >
                    <_Builtin.Block tag="div">{"By Style"}</_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.VFlex>
                <_Builtin.VFlex className="nav-v2-dropdown-sub" tag="div">
                  <_Builtin.Block className="nav-v2-dropdown-label" tag="div">
                    {"Organization"}
                  </_Builtin.Block>
                  <_Builtin.Link
                    className="nav-v2-dropdown-link-sub"
                    button={false}
                    block="inline"
                    options={{
                      href: "/custom-garage-best-cabinets-shelving-storage#design",
                    }}
                  >
                    <_Builtin.Block tag="div">
                      {"Design Process"}
                    </_Builtin.Block>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className="nav-v2-dropdown-link-sub"
                    button={false}
                    block="inline"
                    options={{
                      href: "/locations",
                    }}
                  >
                    <_Builtin.Block tag="div">{"Location"}</_Builtin.Block>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className="nav-v2-dropdown-link-sub"
                    button={false}
                    block="inline"
                    options={{
                      href: "/contact-us#warranty",
                    }}
                  >
                    <_Builtin.Block tag="div">{"Warranty"}</_Builtin.Block>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className="nav-v2-dropdown-link-sub"
                    button={false}
                    block="inline"
                    options={{
                      href: "/faq",
                    }}
                  >
                    <_Builtin.Block tag="div">{"FAQ"}</_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.VFlex>
              </_Builtin.VFlex>
            </_Builtin.VFlex>
          </_Builtin.DropdownList>
        </_Builtin.DropdownWrapper>
        <_Builtin.DropdownWrapper
          className="nav-v2-dropdown"
          tag="div"
          data-anim-menu-stagger=""
          delay={0}
          hover={true}
        >
          <_Builtin.DropdownToggle className="nav-v2-link" tag="div">
            <_Builtin.Block tag="div">{"Home Offices"}</_Builtin.Block>
            <_Builtin.VFlex className="dropdown-v2-icon" tag="div">
              <_Builtin.HtmlEmbed
                className="svg-icon"
                value="%3Csvg%20width%3D%2210%22%20height%3D%2210%22%20viewBox%3D%220%200%2010%2010%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M5%201V9%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3Cpath%20d%3D%22M9%205H1%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
              />
            </_Builtin.VFlex>
          </_Builtin.DropdownToggle>
          <_Builtin.DropdownList
            className="nav-v2-dropdown-menu-cont"
            tag="nav"
          >
            <_Builtin.VFlex className="nav-v2-dropdown-menu" tag="div">
              <_Builtin.Link
                className="nav-v2-dropdown-link"
                button={false}
                block="inline"
                options={{
                  href: "/home-office",
                }}
              >
                <_Builtin.Image
                  className="nav-v2-dropdown-link__img"
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/68417ab3094e788d26f5b3ca_home-office.svg"
                />
                <_Builtin.Block tag="div">{"Home Office"}</_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Link
                className="nav-v2-dropdown-link"
                button={false}
                block="inline"
                options={{
                  href: "/work-office",
                }}
              >
                <_Builtin.Image
                  className="nav-v2-dropdown-link__img"
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/68417ab20142eabf09be01fc_work-office.svg"
                />
                <_Builtin.Block tag="div">{"Work Office"}</_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Link
                className="nav-v2-dropdown-link"
                button={false}
                block="inline"
                options={{
                  href: "/library",
                }}
              >
                <_Builtin.Image
                  className="nav-v2-dropdown-link__img"
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/68417ac17b13012da3e62c5b_library.svg"
                />
                <_Builtin.Block tag="div">
                  {"Custom Bookshelves"}
                </_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Link
                className="nav-v2-dropdown-link"
                button={false}
                block="inline"
                options={{
                  href: "/office-sleep-work",
                }}
              >
                <_Builtin.Image
                  className="nav-v2-dropdown-link__img"
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/68417ab2c19b7370ee7cfd19_sleep-work.svg"
                />
                <_Builtin.Block tag="div">{"Sleep & Work"}</_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.VFlex className="nav-v2-dropdown-sub__cont" tag="div">
                <_Builtin.VFlex className="nav-v2-dropdown-sub" tag="div">
                  <_Builtin.Block className="nav-v2-dropdown-label" tag="div">
                    {"Inspiration"}
                  </_Builtin.Block>
                  <_Builtin.Link
                    className="nav-v2-dropdown-link-sub"
                    button={false}
                    block="inline"
                    options={{
                      href: "/by-style",
                    }}
                  >
                    <_Builtin.Block tag="div">{"By Style"}</_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.VFlex>
                <_Builtin.VFlex className="nav-v2-dropdown-sub" tag="div">
                  <_Builtin.Block className="nav-v2-dropdown-label" tag="div">
                    {"Organization"}
                  </_Builtin.Block>
                  <_Builtin.Link
                    className="nav-v2-dropdown-link-sub"
                    button={false}
                    block="inline"
                    options={{
                      href: "/office-home-design-setup#design",
                    }}
                  >
                    <_Builtin.Block tag="div">
                      {"Design Process"}
                    </_Builtin.Block>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className="nav-v2-dropdown-link-sub"
                    button={false}
                    block="inline"
                    options={{
                      href: "/locations",
                    }}
                  >
                    <_Builtin.Block tag="div">{"Location"}</_Builtin.Block>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className="nav-v2-dropdown-link-sub"
                    button={false}
                    block="inline"
                    options={{
                      href: "/contact-us#warranty",
                    }}
                  >
                    <_Builtin.Block tag="div">{"Warranty"}</_Builtin.Block>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className="nav-v2-dropdown-link-sub"
                    button={false}
                    block="inline"
                    options={{
                      href: "/faq",
                    }}
                  >
                    <_Builtin.Block tag="div">{"FAQ"}</_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.VFlex>
              </_Builtin.VFlex>
            </_Builtin.VFlex>
          </_Builtin.DropdownList>
        </_Builtin.DropdownWrapper>
        <_Builtin.NavbarLink
          className="nav-v2-link"
          data-anim-menu-stagger=""
          options={{
            href: "/laundry-room",
          }}
        >
          {"Laundry"}
        </_Builtin.NavbarLink>
        <_Builtin.NavbarLink
          className="nav-v2-link"
          data-anim-menu-stagger=""
          options={{
            href: "/murphy-beds",
          }}
        >
          {"Murphy Beds"}
        </_Builtin.NavbarLink>
        <_Builtin.NavbarLink
          className="nav-v2-link"
          data-anim-menu-stagger=""
          options={{
            href: "/specialty",
          }}
        >
          {"Specialty Rooms"}
        </_Builtin.NavbarLink>
        <_Builtin.DropdownWrapper
          className="nav-v2-dropdown"
          tag="div"
          data-anim-menu-stagger=""
          delay={0}
          hover={true}
        >
          <_Builtin.DropdownToggle className="nav-v2-link" tag="div">
            <_Builtin.Block tag="div">{"Our Story"}</_Builtin.Block>
            <_Builtin.VFlex className="dropdown-v2-icon" tag="div">
              <_Builtin.HtmlEmbed
                className="svg-icon"
                value="%3Csvg%20width%3D%2210%22%20height%3D%2210%22%20viewBox%3D%220%200%2010%2010%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M5%201V9%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3Cpath%20d%3D%22M9%205H1%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
              />
            </_Builtin.VFlex>
          </_Builtin.DropdownToggle>
          <_Builtin.DropdownList
            className="nav-v2-dropdown-menu-cont drop-right"
            tag="nav"
          >
            <_Builtin.VFlex className="nav-v2-dropdown-menu" tag="div">
              <_Builtin.Link
                className="nav-v2-dropdown-link"
                button={false}
                block="inline"
                options={{
                  href: "/our-story",
                }}
              >
                <_Builtin.Image
                  className="nav-v2-dropdown-link__img"
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/68417ab29d5950df402b3cd4_our-story.svg"
                />
                <_Builtin.Block tag="div">{"Our Story"}</_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Link
                className="nav-v2-dropdown-link"
                button={false}
                block="inline"
                options={{
                  href: "/locations",
                }}
              >
                <_Builtin.Image
                  className="nav-v2-dropdown-link__img"
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/68417ab2a0b4e2f27ff4f90b_locations.svg"
                />
                <_Builtin.Block tag="div">{"Locations"}</_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Link
                className="nav-v2-dropdown-link"
                button={false}
                block="inline"
                options={{
                  href: "/faq",
                }}
              >
                <_Builtin.Image
                  className="nav-v2-dropdown-link__img"
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/68417ab4ab99e48936fb053d_faq.svg"
                />
                <_Builtin.Block tag="div">{"FAQ"}</_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Link
                className="nav-v2-dropdown-link"
                button={false}
                block="inline"
                options={{
                  href: "/contact-us",
                }}
              >
                <_Builtin.Image
                  className="nav-v2-dropdown-link__img"
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/68417ab2bb99752d5d341c53_contact.svg"
                />
                <_Builtin.Block tag="div">{"Contact"}</_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Link
                className="nav-v2-dropdown-link"
                button={false}
                block="inline"
                options={{
                  href: "/ceo-letter",
                }}
              >
                <_Builtin.Image
                  className="nav-v2-dropdown-link__img"
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/68417ab2d4f97d43ef155460_ceo-letter.svg"
                />
                <_Builtin.Block tag="div">{"CEO Letter"}</_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Link
                className="nav-v2-dropdown-link open-catalog"
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Image
                  className="nav-v2-dropdown-link__img"
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/68417ab2e6508a2571d8fcd7_catalog.svg"
                />
                <_Builtin.Block tag="div">{"Catalog"}</_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Link
                className="nav-v2-dropdown-link"
                button={false}
                block="inline"
                options={{
                  href: "/blog",
                }}
              >
                <_Builtin.Image
                  className="nav-v2-dropdown-link__img"
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/68417ab27d48ba8d763d0660_blog.svg"
                />
                <_Builtin.Block tag="div">{"Blog"}</_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Link
                className="nav-v2-dropdown-link"
                button={false}
                block="inline"
                options={{
                  href: "/client-reviews",
                }}
              >
                <_Builtin.Image
                  className="nav-v2-dropdown-link__img"
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/68417ab20392f5805eefb478_client-reviews.svg"
                />
                <_Builtin.Block tag="div">{"Client Reviews"}</_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.VFlex className="nav-v2-dropdown-sub__cont" tag="div">
                <_Builtin.VFlex className="nav-v2-dropdown-sub" tag="div">
                  <_Builtin.Block className="nav-v2-dropdown-label" tag="div">
                    {"Resources"}
                  </_Builtin.Block>
                  <_Builtin.Link
                    className="nav-v2-dropdown-link-sub"
                    button={false}
                    block="inline"
                    options={{
                      href: "/contact-us#warranty",
                    }}
                  >
                    <_Builtin.Block tag="div">{"Warranty"}</_Builtin.Block>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className="nav-v2-dropdown-link-sub"
                    button={false}
                    block="inline"
                    options={{
                      href: "/sustainability",
                    }}
                  >
                    <_Builtin.Block tag="div">
                      {"Sustainability"}
                    </_Builtin.Block>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className="nav-v2-dropdown-link-sub"
                    button={false}
                    block="inline"
                    options={{
                      href: "/ceo-letter",
                    }}
                  >
                    <_Builtin.Block tag="div">
                      {"Letter from the CEO"}
                    </_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.VFlex>
                <_Builtin.VFlex className="nav-v2-dropdown-sub" tag="div">
                  <_Builtin.Block className="nav-v2-dropdown-label" tag="div">
                    {"Inspiration"}
                  </_Builtin.Block>
                  <_Builtin.Link
                    className="nav-v2-dropdown-link-sub"
                    button={false}
                    block="inline"
                    options={{
                      href: "/by-style",
                    }}
                  >
                    <_Builtin.Block tag="div">{"By Style"}</_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.VFlex>
                <_Builtin.Block
                  className="nav-v2-dropdown-sub__social"
                  tag="div"
                >
                  <_Builtin.Block
                    className="nav-v2-dropdown-sub__social__title"
                    tag="div"
                  >
                    {"CHECK OUT OUR SOCIALS"}
                  </_Builtin.Block>
                  <FooterSocial />
                </_Builtin.Block>
              </_Builtin.VFlex>
            </_Builtin.VFlex>
          </_Builtin.DropdownList>
        </_Builtin.DropdownWrapper>
      </_Builtin.VFlex>
    </_Component>
  );
}
