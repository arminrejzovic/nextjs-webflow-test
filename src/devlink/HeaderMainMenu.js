"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function HeaderMainMenu({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className="header-menu" tag="div">
      <_Builtin.DropdownWrapper
        className="dropdown"
        tag="div"
        delay={0}
        hover={true}
      >
        <_Builtin.DropdownToggle className="dropdown-btn" tag="div">
          <_Builtin.Block className="header-link" tag="div">
            {"Closets"}
          </_Builtin.Block>
          <_Builtin.Block className="dropdown-icon" tag="div">
            <_Builtin.NotSupported _atom="InlineCode" />
          </_Builtin.Block>
        </_Builtin.DropdownToggle>
        <_Builtin.DropdownList
          className="dropdown-list dropdown-list--v1"
          tag="nav"
        >
          <_Builtin.Block className="dropdown-list__inner" tag="div">
            <_Builtin.DropdownLink
              className="dropdown-link dropdown-link--main"
              options={{
                href: "/lp/closet-past-site",
              }}
            >
              {"Closets"}
            </_Builtin.DropdownLink>
            <_Builtin.DropdownLink
              className="dropdown-link"
              options={{
                href: "/lp/bedroom-closet-past-site",
              }}
            >
              {"Bedroom Closets"}
            </_Builtin.DropdownLink>
            <_Builtin.DropdownLink
              className="dropdown-link"
              options={{
                href: "/lp/walk-in-closets-past-site",
              }}
            >
              {"Walk In Closets"}
            </_Builtin.DropdownLink>
          </_Builtin.Block>
        </_Builtin.DropdownList>
      </_Builtin.DropdownWrapper>
      <_Builtin.Link
        className="header-link"
        button={false}
        block=""
        options={{
          href: "/lp/garage-past-site",
        }}
      >
        {"Garages"}
      </_Builtin.Link>
      <_Builtin.Link
        className="header-link"
        button={false}
        block=""
        options={{
          href: "/old-site-pages/office",
        }}
      >
        {"Home Offices"}
      </_Builtin.Link>
      <_Builtin.Link
        className="header-link"
        button={false}
        block=""
        options={{
          href: "/old-site-pages/murphy-beds",
        }}
      >
        {"Murphy Beds"}
      </_Builtin.Link>
      <_Builtin.Link
        className="header-link"
        button={false}
        block=""
        options={{
          href: "/old-site-pages/pantry",
        }}
      >
        {"Pantries"}
      </_Builtin.Link>
      <_Builtin.Link
        className="header-link"
        button={false}
        block=""
        options={{
          href: "/old-site-pages/laundry",
        }}
      >
        {"Laundry Rooms"}
      </_Builtin.Link>
      <_Builtin.Link
        className="header-link"
        button={false}
        block=""
        options={{
          href: "/old-site-pages/sliding-door",
        }}
      >
        {"Sliding Doors"}
      </_Builtin.Link>
      <_Builtin.DropdownWrapper
        className="dropdown"
        tag="div"
        delay={0}
        hover={true}
      >
        <_Builtin.DropdownToggle className="dropdown-btn" tag="div">
          <_Builtin.Block className="header-link" tag="div">
            {"About"}
          </_Builtin.Block>
          <_Builtin.Block className="dropdown-icon" tag="div">
            <_Builtin.NotSupported _atom="InlineCode" />
          </_Builtin.Block>
        </_Builtin.DropdownToggle>
        <_Builtin.DropdownList
          className="dropdown-list dropdown-list--v1"
          tag="nav"
        >
          <_Builtin.Block className="dropdown-list__inner" tag="div">
            <_Builtin.DropdownLink
              className="dropdown-link dropdown-link--main"
              options={{
                href: "/old-site-pages/about-us",
              }}
            >
              {"About us"}
            </_Builtin.DropdownLink>
            <_Builtin.DropdownLink
              className="dropdown-link"
              options={{
                href: "/old-site-pages/client-reviews-old",
              }}
            >
              {"Client Reviews"}
            </_Builtin.DropdownLink>
            <_Builtin.DropdownLink
              className="dropdown-link"
              options={{
                href: "/old-site-pages/faq-old",
              }}
            >
              {"FAQ"}
            </_Builtin.DropdownLink>
            <_Builtin.DropdownLink
              className="dropdown-link"
              options={{
                href: "/old-site-pages/contact-us-old",
              }}
            >
              {"Contact"}
            </_Builtin.DropdownLink>
            <_Builtin.DropdownLink
              className="dropdown-link"
              options={{
                href: "https://closetworld.sfo2.cdn.digitaloceanspaces.com/WebsiteCatalog.pdf",
                target: "_blank",
              }}
            >
              {"Catalog"}
            </_Builtin.DropdownLink>
            <_Builtin.DropdownLink
              className="dropdown-link"
              options={{
                href: "/old-site-pages/locations-old",
              }}
            >
              {"Locations"}
            </_Builtin.DropdownLink>
            <_Builtin.DropdownLink
              className="dropdown-link"
              options={{
                href: "/old-site-pages/blog-old",
              }}
            >
              {"Blog"}
            </_Builtin.DropdownLink>
          </_Builtin.Block>
        </_Builtin.DropdownList>
      </_Builtin.DropdownWrapper>
    </_Component>
  );
}
