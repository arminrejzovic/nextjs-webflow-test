"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { SectionHeaderV2 } from "./SectionHeaderV2";
import { IconArrowRight4 } from "./IconArrowRight4";
import { IconPlus } from "./IconPlus";
import { IconSignatureStraightEdge } from "./IconSignatureStraightEdge";
import { IconEssentialsStraightEdge } from "./IconEssentialsStraightEdge";
import { IconSignatureHalfOverlay } from "./IconSignatureHalfOverlay";
import { IconSignatureSoftEdge } from "./IconSignatureSoftEdge";

export function PdpCollectionsCardsV2({
  as: _Component = _Builtin.Block,
  sectionHeaderV2Label = "PRECISION QUALITY",
  sectionHeaderV2Title = "What sets our collections apart?",
  sectionHeaderV2HideIntroText = true,
  sectionHeaderV2IntroText = "Each of our series and collections have subtle differences in panel thickness, edge details, and finishes. Deluxe upgrades are available on our Signature Series and Legacy Collection, and allow you to combine style and function with precision-made quality.",
}) {
  return (
    <_Component
      className="section-anchor-v2 section-anchor-process"
      tag="div"
      data-title="Collections"
      id="collections"
    >
      <_Builtin.BlockContainer
        className="container-v2"
        grid={{
          type: "container",
        }}
        tag="div"
      >
        <_Builtin.Block className="py-120" tag="div">
          <SectionHeaderV2
            label={sectionHeaderV2Label}
            title={sectionHeaderV2Title}
            introText={sectionHeaderV2IntroText}
            hideIntroText={sectionHeaderV2HideIntroText}
          />
        </_Builtin.Block>
      </_Builtin.BlockContainer>
      <_Builtin.BlockContainer
        className="container-v2-fullwidth"
        grid={{
          type: "container",
        }}
        tag="div"
      >
        <_Builtin.Block className="content-tabs" tag="div">
          <_Builtin.Block className="content-tabs__nav" tag="div">
            <_Builtin.Block
              className="content-tabs__link active"
              tag="div"
              data-tab="essentials"
            >
              <_Builtin.Block className="content-tabs__link__text" tag="div">
                {"Essentials"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className="content-tabs__link"
              tag="div"
              data-tab="legacy"
            >
              <_Builtin.Block className="content-tabs__link__text" tag="div">
                {"Legacy"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className="content-tabs__link"
              tag="div"
              data-tab="signature"
            >
              <_Builtin.Block className="content-tabs__link__text" tag="div">
                {"Signature"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className="content-tabs__link"
              tag="div"
              data-tab="signia"
            >
              <_Builtin.Block className="content-tabs__link__text" tag="div">
                {"Signia"}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className="content-tab active"
            tag="div"
            data-tab="essentials"
          >
            <_Builtin.Block className="content-tab__inner" tag="div">
              <_Builtin.Block className="content-tab__left" tag="div">
                <_Builtin.Image
                  className="content-tab__img-bg"
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/67894df0268c1616787202ba_essentials-bg.webp"
                />
                <_Builtin.Block
                  className="content-tab__img-overlay"
                  tag="div"
                />
                <_Builtin.Block className="content-tab__links" tag="div">
                  <_Builtin.Link
                    className="btn-v2-transparent-2"
                    button={false}
                    block="inline"
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Block tag="div">{"Compare"}</_Builtin.Block>
                    <IconArrowRight4 />
                  </_Builtin.Link>
                  <_Builtin.Link
                    className="btn-v2-transparent-2"
                    button={false}
                    block="inline"
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Block tag="div">{"Learn More"}</_Builtin.Block>
                    <IconPlus />
                  </_Builtin.Link>
                </_Builtin.Block>
                <_Builtin.Block className="content-tab__close" tag="div">
                  <_Builtin.Link
                    className="btn-v2-transparent-2 no-border"
                    button={false}
                    block="inline"
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Block tag="div">{"Close"}</_Builtin.Block>
                    <_Builtin.Block
                      className="content-tab__close-icon close-more"
                      tag="div"
                    >
                      <_Builtin.HtmlEmbed
                        className="svg-icon"
                        value="%3Csvg%20width%3D%2228%22%20height%3D%2228%22%20viewBox%3D%220%200%2028%2028%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%220.701172%22%20y%3D%220.600586%22%20width%3D%2226.799%22%20height%3D%2226.799%22%20rx%3D%2213.3995%22%20stroke%3D%22%23FDFDFD%22%2F%3E%0A%3Cpath%20d%3D%22M9.6167%208.58448L14.1006%2013.0684L18.5845%208.58448L19.5162%209.51619L15.0323%2014.0001L19.5162%2018.484L18.5845%2019.4157L14.1006%2014.9318L9.6167%2019.4157L8.68498%2018.484L13.1689%2014.0001L8.68498%209.51619L9.6167%208.58448Z%22%20fill%3D%22%23FDFDFD%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                    </_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block className="content-tab__right" tag="div">
                <_Builtin.VFlex className="content-tab__right__subs" tag="div">
                  <_Builtin.Block className="subheading-v2" tag="div">
                    {"FUNCTIONAL EXCELLENCE"}
                  </_Builtin.Block>
                  <_Builtin.Block className="tabheading-v2" tag="div">
                    {"ESSENTIALS"}
                  </_Builtin.Block>
                </_Builtin.VFlex>
                <_Builtin.Block className="content-tab__content" tag="div">
                  <_Builtin.Block
                    className="content-tab__features-list"
                    tag="div"
                  >
                    <_Builtin.Block className="content-tab__features" tag="div">
                      <_Builtin.Block
                        className="smallheading-v2 uppercase hidden-tablet"
                        tag="div"
                      >
                        {"3 FEATURES"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="content-tab__features-wrap"
                        tag="div"
                      >
                        <_Builtin.Block
                          className="content-tab__feature"
                          tag="div"
                        >
                          <_Builtin.Block
                            className="content-tab__feature__icon"
                            tag="div"
                          >
                            <IconSignatureStraightEdge />
                          </_Builtin.Block>
                          <_Builtin.Block
                            className="content-tab__feature__details"
                            tag="div"
                          >
                            <_Builtin.Block
                              className="h10-v2 weight--black"
                              tag="div"
                            >
                              {"3/4” Straight Edge"}
                            </_Builtin.Block>
                            <_Builtin.Block
                              className="h10-v2 hidden-tablet"
                              tag="div"
                            >
                              {"Side panels"}
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className="content-tab__feature"
                          tag="div"
                        >
                          <_Builtin.Block
                            className="content-tab__feature__icon"
                            tag="div"
                          >
                            <IconEssentialsStraightEdge />
                          </_Builtin.Block>
                          <_Builtin.Block
                            className="content-tab__feature__details"
                            tag="div"
                          >
                            <_Builtin.Block
                              className="h10-v2 weight--black"
                              tag="div"
                            >
                              {"3/4” Soft Edge"}
                            </_Builtin.Block>
                            <_Builtin.Block
                              className="h10-v2 hidden-tablet"
                              tag="div"
                            >
                              {"Shelves"}
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className="content-tab__feature"
                          tag="div"
                        >
                          <_Builtin.Block
                            className="content-tab__feature__icon"
                            tag="div"
                          >
                            <IconSignatureHalfOverlay />
                          </_Builtin.Block>
                          <_Builtin.Block
                            className="content-tab__feature__details"
                            tag="div"
                          >
                            <_Builtin.Block
                              className="h10-v2 weight--black"
                              tag="div"
                            >
                              {"Half Overlay"}
                            </_Builtin.Block>
                            <_Builtin.Block
                              className="h10-v2 hidden-tablet"
                              tag="div"
                            >
                              {"Flat Face Doors & Drawers"}
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className="content-tab__description"
                    tag="div"
                  >
                    <_Builtin.Block className="paragraph-v2" tag="div">
                      {
                        "Simple and modern, the Essentials series is our entry-level solution that fits any space and any budget."
                      }
                    </_Builtin.Block>
                    <_Builtin.Block className="paragraph-v2" tag="div">
                      {
                        "Simple and modern, the Essentials series is our entry-level solution that fits any space and any budget."
                      }
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className="content-tab__trigger-more"
                    tag="div"
                  >
                    <_Builtin.Link
                      className="btn-v2-transparent-2 is--red open-more no-border"
                      button={false}
                      block="inline"
                      options={{
                        href: "#",
                      }}
                    >
                      <_Builtin.Block tag="div">{"Show more"}</_Builtin.Block>
                      <_Builtin.HtmlEmbed
                        className="svg-icon"
                        value="%3Csvg%20width%3D%2219%22%20height%3D%2218%22%20viewBox%3D%220%200%2019%2018%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M9.49414%200.5V17.5%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%2F%3E%0A%3Cpath%20d%3D%22M18.4941%209L0.49414%209%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                    </_Builtin.Link>
                    <_Builtin.Link
                      className="btn-v2-transparent-2 is--dark close-more no-border"
                      button={false}
                      block="inline"
                      options={{
                        href: "#",
                      }}
                    >
                      <_Builtin.Block className="rotate-180" tag="div">
                        <_Builtin.HtmlEmbed
                          className="svg-icon"
                          value="%3Csvg%20width%3D%2226%22%20height%3D%2216%22%20viewBox%3D%220%200%2026%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M0.505859%208.45244H25.4941M25.4941%208.45244C25.4941%208.45244%2022.119%207.19961%2020.5085%205.59961C18.8981%203.99961%2018.8981%200%2018.8981%200M25.4941%208.45244C25.4941%208.45244%2022.119%209.59961%2020.5085%2011.1996C18.8981%2012.7996%2018.8981%2016%2018.8981%2016%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linejoin%3D%22bevel%22%2F%3E%0A%3C%2Fsvg%3E"
                        />
                      </_Builtin.Block>
                      <_Builtin.Block tag="div">{"Go back"}</_Builtin.Block>
                    </_Builtin.Link>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className="content-tab"
            tag="div"
            data-tab="signature"
          >
            <_Builtin.Block className="content-tab__inner" tag="div">
              <_Builtin.Block className="content-tab__left" tag="div">
                <_Builtin.Image
                  className="content-tab__img-bg"
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/67894d5516dcf1c9f882c0e4_signature-bg.webp"
                />
                <_Builtin.Block
                  className="content-tab__img-overlay"
                  tag="div"
                />
                <_Builtin.Block className="content-tab__links" tag="div">
                  <_Builtin.Link
                    className="btn-v2-transparent-2"
                    button={false}
                    block="inline"
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Block tag="div">{"Compare"}</_Builtin.Block>
                    <IconArrowRight4 />
                  </_Builtin.Link>
                  <_Builtin.Link
                    className="btn-v2-transparent-2"
                    button={false}
                    block="inline"
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Block tag="div">{"Learn More"}</_Builtin.Block>
                    <IconPlus />
                  </_Builtin.Link>
                </_Builtin.Block>
                <_Builtin.Block className="content-tab__close" tag="div">
                  <_Builtin.Link
                    className="btn-v2-transparent-2 no-border"
                    button={false}
                    block="inline"
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Block tag="div">{"Close"}</_Builtin.Block>
                    <_Builtin.Block
                      className="content-tab__close-icon close-more"
                      tag="div"
                    >
                      <_Builtin.HtmlEmbed
                        className="svg-icon"
                        value="%3Csvg%20width%3D%2228%22%20height%3D%2228%22%20viewBox%3D%220%200%2028%2028%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%220.701172%22%20y%3D%220.600586%22%20width%3D%2226.799%22%20height%3D%2226.799%22%20rx%3D%2213.3995%22%20stroke%3D%22%23FDFDFD%22%2F%3E%0A%3Cpath%20d%3D%22M9.6167%208.58448L14.1006%2013.0684L18.5845%208.58448L19.5162%209.51619L15.0323%2014.0001L19.5162%2018.484L18.5845%2019.4157L14.1006%2014.9318L9.6167%2019.4157L8.68498%2018.484L13.1689%2014.0001L8.68498%209.51619L9.6167%208.58448Z%22%20fill%3D%22%23FDFDFD%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                    </_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block className="content-tab__right" tag="div">
                <_Builtin.VFlex className="content-tab__right__subs" tag="div">
                  <_Builtin.Block className="subheading-v2" tag="div">
                    {"A signature transformation"}
                  </_Builtin.Block>
                  <_Builtin.Block className="tabheading-v2" tag="div">
                    {"SIGNATURE"}
                  </_Builtin.Block>
                </_Builtin.VFlex>
                <_Builtin.Block className="content-tab__content" tag="div">
                  <_Builtin.Block
                    className="content-tab__features-list"
                    tag="div"
                  >
                    <_Builtin.Block className="content-tab__features" tag="div">
                      <_Builtin.Block
                        className="smallheading-v2 uppercase hidden-tablet"
                        tag="div"
                      >
                        {"3 FEATURES"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="content-tab__features-wrap"
                        tag="div"
                      >
                        <_Builtin.Block
                          className="content-tab__feature"
                          tag="div"
                        >
                          <_Builtin.Block
                            className="content-tab__feature__icon"
                            tag="div"
                          >
                            <IconSignatureStraightEdge />
                          </_Builtin.Block>
                          <_Builtin.Block
                            className="content-tab__feature__details"
                            tag="div"
                          >
                            <_Builtin.Block
                              className="h10-v2 weight--black"
                              tag="div"
                            >
                              {"3/4” Straight Edge"}
                            </_Builtin.Block>
                            <_Builtin.Block
                              className="h10-v2 hidden-tablet"
                              tag="div"
                            >
                              {"Side panels"}
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className="content-tab__feature"
                          tag="div"
                        >
                          <_Builtin.Block
                            className="content-tab__feature__icon"
                            tag="div"
                          >
                            <IconSignatureSoftEdge />
                          </_Builtin.Block>
                          <_Builtin.Block
                            className="content-tab__feature__details"
                            tag="div"
                          >
                            <_Builtin.Block
                              className="h10-v2 weight--black"
                              tag="div"
                            >
                              {"3/4” Soft Edge"}
                            </_Builtin.Block>
                            <_Builtin.Block
                              className="h10-v2 hidden-tablet"
                              tag="div"
                            >
                              {"Shelves"}
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className="content-tab__feature"
                          tag="div"
                        >
                          <_Builtin.Block
                            className="content-tab__feature__icon"
                            tag="div"
                          >
                            <IconSignatureHalfOverlay />
                          </_Builtin.Block>
                          <_Builtin.Block
                            className="content-tab__feature__details"
                            tag="div"
                          >
                            <_Builtin.Block
                              className="h10-v2 weight--black"
                              tag="div"
                            >
                              {"Half Overlay"}
                            </_Builtin.Block>
                            <_Builtin.Block
                              className="h10-v2 hidden-tablet"
                              tag="div"
                            >
                              {"Flat face doors and drawers with soft edge"}
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block className="content-tab__features" tag="div">
                      <_Builtin.Block
                        className="smallheading-v2 uppercase hidden-tablet"
                        tag="div"
                      >
                        {"3 deluxe FEATURES"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="content-tab__features-wrap"
                        tag="div"
                      >
                        <_Builtin.Block
                          className="content-tab__feature"
                          tag="div"
                        >
                          <_Builtin.Block
                            className="content-tab__feature__icon"
                            tag="div"
                          >
                            <_Builtin.HtmlEmbed
                              className="svg-icon"
                              value="%3Csvg%20width%3D%2265%22%20height%3D%2264%22%20viewBox%3D%220%200%2065%2064%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M26.0711%2062.2659C9.10756%2058.656%20-1.83052%2042.1539%201.64361%2025.4346C5.11774%208.71539%2021.7284%20-1.92414%2038.7191%201.71284C55.7098%205.32268%2066.6207%2021.8248%2063.1466%2038.5441C59.6453%2055.2633%2043.0618%2065.9028%2026.0711%2062.293%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-miterlimit%3D%2210%22%2F%3E%0A%3Cpath%20d%3D%22M24.1982%201.46826L47.4315%2026.6557M48.4629%2059.09L49.2228%2030.1841C46.9972%2021.1188%2035.8963%2025.3258%2036.1134%2030.2927L36.0049%2063.2969%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-miterlimit%3D%2210%22%2F%3E%0A%3C%2Fsvg%3E"
                            />
                          </_Builtin.Block>
                          <_Builtin.Block
                            className="content-tab__feature__details"
                            tag="div"
                          >
                            <_Builtin.Block
                              className="h10-v2 weight--black"
                              tag="div"
                            >
                              {"Soft edge panels"}
                            </_Builtin.Block>
                            <_Builtin.Block
                              className="h10-v2 hidden-tablet"
                              tag="div"
                            />
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className="content-tab__feature"
                          tag="div"
                        >
                          <_Builtin.Block
                            className="content-tab__feature__icon"
                            tag="div"
                          >
                            <_Builtin.HtmlEmbed
                              className="svg-icon"
                              value="%3Csvg%20width%3D%2264%22%20height%3D%2264%22%20viewBox%3D%220%200%2064%2064%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M4.21719%2018.6226C-3.35822%2034.043%202.89621%2052.5367%2018.2357%2059.9234C33.5752%2067.3101%2052.1498%2060.7861%2059.7252%2045.3387C67.3006%2029.9183%2061.0462%2011.4247%2045.7067%204.03797C30.3671%20-3.34872%2011.7926%203.20225%204.21719%2018.6226Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-miterlimit%3D%2210%22%2F%3E%0A%3Cpath%20d%3D%22M39.8832%2049.1397L42.1477%2048.1692L42.0938%2050.4876L39.8293%2051.4581M24.7863%2061.8642L27.8596%208.08153L58.97%2016.6814L57.2446%2048.8701M37.0525%201.07227L14.515%2015.5761M12.4931%2056.9577L14.7307%2015.3334L8.15279%2012.5297L5.99609%2049.3823M36.8369%2047.5221C37.3221%2046.1742%2039.6675%2046.2281%2039.9371%2047.603L39.8562%2049.9754L39.3979%2061.9451L36.4325%2062.6729L36.8099%2047.4952L36.8369%2047.5221Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-miterlimit%3D%2210%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
                            />
                          </_Builtin.Block>
                          <_Builtin.Block
                            className="content-tab__feature__details"
                            tag="div"
                          >
                            <_Builtin.Block
                              className="h10-v2 weight--black"
                              tag="div"
                            >
                              {"Doors & drawers are inset"}
                            </_Builtin.Block>
                            <_Builtin.Block
                              className="h10-v2 hidden-tablet"
                              tag="div"
                            />
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className="content-tab__feature"
                          tag="div"
                        >
                          <_Builtin.Block
                            className="content-tab__feature__icon"
                            tag="div"
                          >
                            <_Builtin.HtmlEmbed
                              className="svg-icon"
                              value="%3Csvg%20width%3D%2264%22%20height%3D%2264%22%20viewBox%3D%220%200%2064%2064%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M4.21854%2018.6301C-3.36005%2034.0569%202.89701%2052.5584%2018.243%2059.9482C33.589%2067.338%2052.1713%2060.8113%2059.7499%2045.3574C67.3285%2029.9305%2061.0715%2011.429%2045.7255%204.03925C30.3795%20-3.35056%2011.7971%203.20317%204.21854%2018.6301Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-miterlimit%3D%2210%22%2F%3E%0A%3Cpath%20d%3D%22M22.7743%2048.9442L21.8843%2061.9437M62.9597%2038.1831L28.5998%2052.0188M62.5282%2028.4739L29.2471%2041.5274C28.438%2036.8346%2029.9214%2033.787%2033.1848%2032.007M3.7604%2018.3062L33.5623%2031.8182L60.8291%2021.0841M1.19824%2037.9134L28.3032%2051.5872L29.0314%2041.2847L1.49491%2027.1793%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-miterlimit%3D%2210%22%2F%3E%0A%3C%2Fsvg%3E"
                            />
                          </_Builtin.Block>
                          <_Builtin.Block
                            className="content-tab__feature__details"
                            tag="div"
                          >
                            <_Builtin.Block
                              className="h10-v2 weight--black"
                              tag="div"
                            >
                              {"Accent top shelves"}
                            </_Builtin.Block>
                            <_Builtin.Block
                              className="h10-v2 hidden-tablet"
                              tag="div"
                            />
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className="content-tab__description"
                    tag="div"
                  >
                    <_Builtin.Block className="paragraph-v2" tag="div">
                      {
                        "A step up from our Essentials collection, the Signature Series seamlessly balances style, functionality, and organization."
                      }
                    </_Builtin.Block>
                    <_Builtin.Block className="paragraph-v2" tag="div">
                      {
                        "A step up from our Essentials collection, the Signature Series seamlessly balances style, functionality, and organization."
                      }
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className="content-tab__trigger-more"
                    tag="div"
                  >
                    <_Builtin.Link
                      className="btn-v2-transparent-2 no-border is--red open-more"
                      button={false}
                      block="inline"
                      options={{
                        href: "#",
                      }}
                    >
                      <_Builtin.Block tag="div">{"Show more"}</_Builtin.Block>
                      <_Builtin.HtmlEmbed
                        className="svg-icon"
                        value="%3Csvg%20width%3D%2219%22%20height%3D%2218%22%20viewBox%3D%220%200%2019%2018%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M9.49414%200.5V17.5%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%2F%3E%0A%3Cpath%20d%3D%22M18.4941%209L0.49414%209%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                    </_Builtin.Link>
                    <_Builtin.Link
                      className="btn-v2-transparent-2 no-border is--dark close-more"
                      button={false}
                      block="inline"
                      options={{
                        href: "#",
                      }}
                    >
                      <_Builtin.Block className="rotate-180" tag="div">
                        <_Builtin.HtmlEmbed
                          className="svg-icon"
                          value="%3Csvg%20width%3D%2226%22%20height%3D%2216%22%20viewBox%3D%220%200%2026%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M0.505859%208.45244H25.4941M25.4941%208.45244C25.4941%208.45244%2022.119%207.19961%2020.5085%205.59961C18.8981%203.99961%2018.8981%200%2018.8981%200M25.4941%208.45244C25.4941%208.45244%2022.119%209.59961%2020.5085%2011.1996C18.8981%2012.7996%2018.8981%2016%2018.8981%2016%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linejoin%3D%22bevel%22%2F%3E%0A%3C%2Fsvg%3E"
                        />
                      </_Builtin.Block>
                      <_Builtin.Block tag="div">{"Go back"}</_Builtin.Block>
                    </_Builtin.Link>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block className="content-tab" tag="div" data-tab="legacy">
            <_Builtin.Block className="content-tab__inner" tag="div">
              <_Builtin.Block className="content-tab__left" tag="div">
                <_Builtin.Image
                  className="content-tab__img-bg"
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/678a238535525179019ff228_b54618f50c9978c5ec71267f73b8870e%20(1).webp"
                />
                <_Builtin.Block
                  className="content-tab__img-overlay"
                  tag="div"
                />
                <_Builtin.Block className="content-tab__links" tag="div">
                  <_Builtin.Link
                    className="btn-v2-transparent-2"
                    button={false}
                    block="inline"
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Block tag="div">{"Compare"}</_Builtin.Block>
                    <IconArrowRight4 />
                  </_Builtin.Link>
                  <_Builtin.Link
                    className="btn-v2-transparent-2"
                    button={false}
                    block="inline"
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Block tag="div">{"Learn More"}</_Builtin.Block>
                    <IconPlus />
                  </_Builtin.Link>
                </_Builtin.Block>
                <_Builtin.Block className="content-tab__close" tag="div">
                  <_Builtin.Link
                    className="btn-v2-transparent-2 no-border"
                    button={false}
                    block="inline"
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Block tag="div">{"Close"}</_Builtin.Block>
                    <_Builtin.Block
                      className="content-tab__close-icon close-more"
                      tag="div"
                    >
                      <_Builtin.HtmlEmbed
                        className="svg-icon"
                        value="%3Csvg%20width%3D%2228%22%20height%3D%2228%22%20viewBox%3D%220%200%2028%2028%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%220.701172%22%20y%3D%220.600586%22%20width%3D%2226.799%22%20height%3D%2226.799%22%20rx%3D%2213.3995%22%20stroke%3D%22%23FDFDFD%22%2F%3E%0A%3Cpath%20d%3D%22M9.6167%208.58448L14.1006%2013.0684L18.5845%208.58448L19.5162%209.51619L15.0323%2014.0001L19.5162%2018.484L18.5845%2019.4157L14.1006%2014.9318L9.6167%2019.4157L8.68498%2018.484L13.1689%2014.0001L8.68498%209.51619L9.6167%208.58448Z%22%20fill%3D%22%23FDFDFD%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                    </_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block className="content-tab__right" tag="div">
                <_Builtin.VFlex className="content-tab__right__subs" tag="div">
                  <_Builtin.Block className="subheading-v2" tag="div">
                    {"New levels of elegance"}
                  </_Builtin.Block>
                  <_Builtin.Block className="tabheading-v2" tag="div">
                    {"LEGACY"}
                  </_Builtin.Block>
                </_Builtin.VFlex>
                <_Builtin.Block className="content-tab__content" tag="div">
                  <_Builtin.Block
                    className="content-tab__features-list"
                    tag="div"
                  >
                    <_Builtin.Block className="content-tab__features" tag="div">
                      <_Builtin.Block
                        className="smallheading-v2 uppercase hidden-tablet"
                        tag="div"
                      >
                        {"3 FEATURES"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="content-tab__features-wrap"
                        tag="div"
                      >
                        <_Builtin.Block
                          className="content-tab__feature"
                          tag="div"
                        >
                          <_Builtin.Block
                            className="content-tab__feature__icon"
                            tag="div"
                          >
                            <IconSignatureStraightEdge />
                          </_Builtin.Block>
                          <_Builtin.Block
                            className="content-tab__feature__details"
                            tag="div"
                          >
                            <_Builtin.Block
                              className="h10-v2 weight--black"
                              tag="div"
                            >
                              {"1 1/8” Straight Edge"}
                            </_Builtin.Block>
                            <_Builtin.Block
                              className="h10-v2 hidden-tablet"
                              tag="div"
                            >
                              {"Side panels"}
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className="content-tab__feature"
                          tag="div"
                        >
                          <_Builtin.Block
                            className="content-tab__feature__icon"
                            tag="div"
                          >
                            <IconSignatureSoftEdge />
                          </_Builtin.Block>
                          <_Builtin.Block
                            className="content-tab__feature__details"
                            tag="div"
                          >
                            <_Builtin.Block
                              className="h10-v2 weight--black"
                              tag="div"
                            >
                              {"3/4” Soft Edge"}
                            </_Builtin.Block>
                            <_Builtin.Block
                              className="h10-v2 hidden-tablet"
                              tag="div"
                            >
                              {"Shelves"}
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className="content-tab__feature"
                          tag="div"
                        >
                          <_Builtin.Block
                            className="content-tab__feature__icon"
                            tag="div"
                          >
                            <IconSignatureHalfOverlay />
                          </_Builtin.Block>
                          <_Builtin.Block
                            className="content-tab__feature__details"
                            tag="div"
                          >
                            <_Builtin.Block
                              className="h10-v2 weight--black"
                              tag="div"
                            >
                              {"Half Overlay"}
                            </_Builtin.Block>
                            <_Builtin.Block
                              className="h10-v2 hidden-tablet"
                              tag="div"
                            >
                              {"Flat face doors and drawers with soft edge"}
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block className="content-tab__features" tag="div">
                      <_Builtin.Block
                        className="smallheading-v2 uppercase hidden-tablet"
                        tag="div"
                      >
                        {"3 deluxe FEATURES"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="content-tab__features-wrap"
                        tag="div"
                      >
                        <_Builtin.Block
                          className="content-tab__feature"
                          tag="div"
                        >
                          <_Builtin.Block
                            className="content-tab__feature__icon"
                            tag="div"
                          >
                            <_Builtin.HtmlEmbed
                              className="svg-icon"
                              value="%3Csvg%20width%3D%2264%22%20height%3D%2264%22%20viewBox%3D%220%200%2064%2064%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M4.21719%2018.6226C-3.35822%2034.043%202.89621%2052.5367%2018.2357%2059.9234C33.5752%2067.3101%2052.1498%2060.7861%2059.7252%2045.3387C67.3006%2029.9183%2061.0462%2011.4247%2045.7067%204.03797C30.3671%20-3.34872%2011.7926%203.20225%204.21719%2018.6226Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-miterlimit%3D%2210%22%2F%3E%0A%3Cpath%20d%3D%22M39.8832%2049.1397L42.1477%2048.1692L42.0938%2050.4876L39.8293%2051.4581M24.7863%2061.8642L27.8596%208.08153L58.97%2016.6814L57.2446%2048.8701M37.0525%201.07227L14.515%2015.5761M12.4931%2056.9577L14.7307%2015.3334L8.15279%2012.5297L5.99609%2049.3823M36.8369%2047.5221C37.3221%2046.1742%2039.6675%2046.2281%2039.9371%2047.603L39.8562%2049.9754L39.3979%2061.9451L36.4325%2062.6729L36.8099%2047.4952L36.8369%2047.5221Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-miterlimit%3D%2210%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
                            />
                          </_Builtin.Block>
                          <_Builtin.Block
                            className="content-tab__feature__details"
                            tag="div"
                          >
                            <_Builtin.Block
                              className="h10-v2 weight--black"
                              tag="div"
                            >
                              {"Inset doors and drawers"}
                            </_Builtin.Block>
                            <_Builtin.Block
                              className="h10-v2 hidden-tablet"
                              tag="div"
                            />
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className="content-tab__feature"
                          tag="div"
                        >
                          <_Builtin.Block
                            className="content-tab__feature__icon"
                            tag="div"
                          >
                            <_Builtin.HtmlEmbed
                              className="svg-icon"
                              value="%3Csvg%20width%3D%2265%22%20height%3D%2264%22%20viewBox%3D%220%200%2065%2064%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M26.0711%2062.2659C9.10756%2058.656%20-1.83052%2042.1539%201.64361%2025.4346C5.11774%208.71539%2021.7284%20-1.92414%2038.7191%201.71284C55.7098%205.32268%2066.6207%2021.8248%2063.1466%2038.5441C59.6453%2055.2633%2043.0618%2065.9028%2026.0711%2062.293%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-miterlimit%3D%2210%22%2F%3E%0A%3Cpath%20d%3D%22M24.1982%201.46826L47.4315%2026.6557M48.4629%2059.09L49.2228%2030.1841C46.9972%2021.1188%2035.8963%2025.3258%2036.1134%2030.2927L36.0049%2063.2969%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-miterlimit%3D%2210%22%2F%3E%0A%3C%2Fsvg%3E"
                            />
                          </_Builtin.Block>
                          <_Builtin.Block
                            className="content-tab__feature__details"
                            tag="div"
                          >
                            <_Builtin.Block
                              className="h10-v2 weight--black"
                              tag="div"
                            >
                              {"Soft edge panels"}
                            </_Builtin.Block>
                            <_Builtin.Block
                              className="h10-v2 hidden-tablet"
                              tag="div"
                            />
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className="content-tab__feature"
                          tag="div"
                        >
                          <_Builtin.Block
                            className="content-tab__feature__icon"
                            tag="div"
                          >
                            <_Builtin.HtmlEmbed
                              className="svg-icon"
                              value="%3Csvg%20width%3D%2264%22%20height%3D%2264%22%20viewBox%3D%220%200%2064%2064%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M4.21854%2018.6301C-3.36005%2034.0569%202.89701%2052.5584%2018.243%2059.9482C33.589%2067.338%2052.1713%2060.8113%2059.7499%2045.3574C67.3285%2029.9305%2061.0715%2011.429%2045.7255%204.03925C30.3795%20-3.35056%2011.7971%203.20317%204.21854%2018.6301Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-miterlimit%3D%2210%22%2F%3E%0A%3Cpath%20d%3D%22M22.7743%2048.9442L21.8843%2061.9437M62.9597%2038.1831L28.5998%2052.0188M62.5282%2028.4739L29.2471%2041.5274C28.438%2036.8346%2029.9214%2033.787%2033.1848%2032.007M3.7604%2018.3062L33.5623%2031.8182L60.8291%2021.0841M1.19824%2037.9134L28.3032%2051.5872L29.0314%2041.2847L1.49491%2027.1793%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-miterlimit%3D%2210%22%2F%3E%0A%3C%2Fsvg%3E"
                            />
                          </_Builtin.Block>
                          <_Builtin.Block
                            className="content-tab__feature__details"
                            tag="div"
                          >
                            <_Builtin.Block
                              className="h10-v2 weight--black"
                              tag="div"
                            >
                              {"Accent top shelves"}
                            </_Builtin.Block>
                            <_Builtin.Block
                              className="h10-v2 hidden-tablet"
                              tag="div"
                            />
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className="content-tab__description"
                    tag="div"
                  >
                    <_Builtin.Block className="paragraph-v2" tag="div">
                      {
                        "This premium collection radiates class and elegance while illuminating your unique style."
                      }
                    </_Builtin.Block>
                    <_Builtin.Block className="paragraph-v2" tag="div">
                      {
                        "This premium collection radiates class and elegance while illuminating your unique style."
                      }
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className="content-tab__trigger-more"
                    tag="div"
                  >
                    <_Builtin.Link
                      className="btn-v2-transparent-2 no-border is--red open-more"
                      button={false}
                      block="inline"
                      options={{
                        href: "#",
                      }}
                    >
                      <_Builtin.Block tag="div">{"Show more"}</_Builtin.Block>
                      <_Builtin.HtmlEmbed
                        className="svg-icon"
                        value="%3Csvg%20width%3D%2219%22%20height%3D%2218%22%20viewBox%3D%220%200%2019%2018%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M9.49414%200.5V17.5%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%2F%3E%0A%3Cpath%20d%3D%22M18.4941%209L0.49414%209%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                    </_Builtin.Link>
                    <_Builtin.Link
                      className="btn-v2-transparent-2 no-border is--dark close-more"
                      button={false}
                      block="inline"
                      options={{
                        href: "#",
                      }}
                    >
                      <_Builtin.Block className="rotate-180" tag="div">
                        <_Builtin.HtmlEmbed
                          className="svg-icon"
                          value="%3Csvg%20width%3D%2226%22%20height%3D%2216%22%20viewBox%3D%220%200%2026%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M0.505859%208.45244H25.4941M25.4941%208.45244C25.4941%208.45244%2022.119%207.19961%2020.5085%205.59961C18.8981%203.99961%2018.8981%200%2018.8981%200M25.4941%208.45244C25.4941%208.45244%2022.119%209.59961%2020.5085%2011.1996C18.8981%2012.7996%2018.8981%2016%2018.8981%2016%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linejoin%3D%22bevel%22%2F%3E%0A%3C%2Fsvg%3E"
                        />
                      </_Builtin.Block>
                      <_Builtin.Block tag="div">{"Go back"}</_Builtin.Block>
                    </_Builtin.Link>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block className="content-tab" tag="div" data-tab="signia">
            <_Builtin.Block className="content-tab__inner" tag="div">
              <_Builtin.Block className="content-tab__left" tag="div">
                <_Builtin.Image
                  className="content-tab__img-bg"
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/678a26f4bfb42daea3fdf19d_c6433a73801c2e721fbee68e0e471290.webp"
                />
                <_Builtin.Block
                  className="content-tab__img-overlay"
                  tag="div"
                />
                <_Builtin.Block className="content-tab__links" tag="div">
                  <_Builtin.Link
                    className="btn-v2-transparent-2"
                    button={false}
                    block="inline"
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Block tag="div">{"Compare"}</_Builtin.Block>
                    <IconArrowRight4 />
                  </_Builtin.Link>
                  <_Builtin.Link
                    className="btn-v2-transparent-2"
                    button={false}
                    block="inline"
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Block tag="div">{"Learn More"}</_Builtin.Block>
                    <IconPlus />
                  </_Builtin.Link>
                </_Builtin.Block>
                <_Builtin.Block className="content-tab__close" tag="div">
                  <_Builtin.Link
                    className="btn-v2-transparent-2 no-border"
                    button={false}
                    block="inline"
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Block tag="div">{"Close"}</_Builtin.Block>
                    <_Builtin.Block
                      className="content-tab__close-icon close-more"
                      tag="div"
                    >
                      <_Builtin.HtmlEmbed
                        className="svg-icon"
                        value="%3Csvg%20width%3D%2228%22%20height%3D%2228%22%20viewBox%3D%220%200%2028%2028%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%220.701172%22%20y%3D%220.600586%22%20width%3D%2226.799%22%20height%3D%2226.799%22%20rx%3D%2213.3995%22%20stroke%3D%22%23FDFDFD%22%2F%3E%0A%3Cpath%20d%3D%22M9.6167%208.58448L14.1006%2013.0684L18.5845%208.58448L19.5162%209.51619L15.0323%2014.0001L19.5162%2018.484L18.5845%2019.4157L14.1006%2014.9318L9.6167%2019.4157L8.68498%2018.484L13.1689%2014.0001L8.68498%209.51619L9.6167%208.58448Z%22%20fill%3D%22%23FDFDFD%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                    </_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block className="content-tab__right" tag="div">
                <_Builtin.VFlex className="content-tab__right__subs" tag="div">
                  <_Builtin.Block className="subheading-v2" tag="div">
                    {"The texture of luxury"}
                  </_Builtin.Block>
                  <_Builtin.Block className="tabheading-v2" tag="div">
                    {"SIGNIA"}
                  </_Builtin.Block>
                </_Builtin.VFlex>
                <_Builtin.Block className="content-tab__content" tag="div">
                  <_Builtin.Block
                    className="content-tab__features-list"
                    tag="div"
                  >
                    <_Builtin.Block className="content-tab__features" tag="div">
                      <_Builtin.Block
                        className="smallheading-v2 uppercase hidden-tablet"
                        tag="div"
                      >
                        {"5 FEATURES"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="content-tab__features-wrap"
                        tag="div"
                      >
                        <_Builtin.Block
                          className="content-tab__feature"
                          tag="div"
                        >
                          <_Builtin.Block
                            className="content-tab__feature__icon"
                            tag="div"
                          >
                            <IconSignatureStraightEdge />
                          </_Builtin.Block>
                          <_Builtin.Block
                            className="content-tab__feature__details"
                            tag="div"
                          >
                            <_Builtin.Block
                              className="h10-v2 weight--black"
                              tag="div"
                            >
                              {"3/4” Straight Edge"}
                            </_Builtin.Block>
                            <_Builtin.Block
                              className="h10-v2 hidden-tablet"
                              tag="div"
                            >
                              {"Side panels"}
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className="content-tab__feature"
                          tag="div"
                        >
                          <_Builtin.Block
                            className="content-tab__feature__icon"
                            tag="div"
                          >
                            <IconEssentialsStraightEdge />
                          </_Builtin.Block>
                          <_Builtin.Block
                            className="content-tab__feature__details"
                            tag="div"
                          >
                            <_Builtin.Block
                              className="h10-v2 weight--black"
                              tag="div"
                            >
                              {"3/4” Straight Edge"}
                            </_Builtin.Block>
                            <_Builtin.Block
                              className="h10-v2 hidden-tablet"
                              tag="div"
                            >
                              {"Shelves"}
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className="content-tab__feature"
                          tag="div"
                        >
                          <_Builtin.Block
                            className="content-tab__feature__icon"
                            tag="div"
                          >
                            <_Builtin.HtmlEmbed
                              className="svg-icon"
                              value="%3Csvg%20width%3D%2264%22%20height%3D%2264%22%20viewBox%3D%220%200%2064%2064%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20id%3D%22Group%2095167%22%3E%0A%3Cg%20id%3D%22Clip%20path%20group%22%3E%0A%3Cmask%20id%3D%22mask0_914_1420%22%20style%3D%22mask-type%3Aluminance%22%20maskUnits%3D%22userSpaceOnUse%22%20x%3D%220%22%20y%3D%220%22%20width%3D%2264%22%20height%3D%2264%22%3E%0A%3Cg%20id%3D%22clippath%22%3E%0A%3Cpath%20id%3D%22Vector%22%20d%3D%22M64%200H0V64H64V0Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fmask%3E%0A%3Cg%20mask%3D%22url(%23mask0_914_1420)%22%3E%0A%3Cg%20id%3D%22Group%22%3E%0A%3Cpath%20id%3D%22Vector_2%22%20d%3D%22M23.4911%2061.7074C7.0394%2056.8797%20-2.48104%2039.6458%202.21175%2023.2211C6.90455%206.82325%2024.0575%20-2.56234%2040.5093%202.29228C56.961%207.14689%2066.5084%2024.3538%2061.8156%2040.7786C57.1228%2057.2034%2039.9699%2066.562%2023.5181%2061.7343%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-miterlimit%3D%2210%22%2F%3E%0A%3Cpath%20id%3D%22Vector_3%22%20d%3D%22M1.05176%2026.8622H32.337M32.337%2044.6085H3.2633M52.6455%208.52255L32.364%208.3877M32.364%208.3877V63.1909M32.364%208.3877H12.0286M47.1706%2050.3262L48.7079%2049.6249V51.2432L47.1706%2051.9444M45.0669%2049.2743C45.3636%2048.3304%2046.9818%2048.3304%2047.1706%2049.2743V50.9195L47.1976%2059.0914L45.04%2059.7657V49.2743H45.0669Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-miterlimit%3D%2210%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3Cpath%20id%3D%22Vector_4%22%20d%3D%22M14.4561%2053.5356H24.8126M14.4561%2036.032H24.8126M14.4561%2017.6924H24.8126%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-miterlimit%3D%2210%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E"
                            />
                          </_Builtin.Block>
                          <_Builtin.Block
                            className="content-tab__feature__details"
                            tag="div"
                          >
                            <_Builtin.Block
                              className="h10-v2 weight--black"
                              tag="div"
                            >
                              {"Deco doors and drawers"}
                            </_Builtin.Block>
                            <_Builtin.Block
                              className="h10-v2 hidden-tablet"
                              tag="div"
                            />
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="content-tab__features-wrap m_mt-1"
                        tag="div"
                      >
                        <_Builtin.Block
                          className="content-tab__feature"
                          tag="div"
                        >
                          <_Builtin.Block
                            className="content-tab__feature__icon"
                            tag="div"
                          >
                            <_Builtin.HtmlEmbed
                              className="svg-icon"
                              value="%3Csvg%20width%3D%2266%22%20height%3D%2264%22%20viewBox%3D%220%200%2066%2064%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20id%3D%22Layer_1%22%20clip-path%3D%22url(%23clip0_914_1484)%22%3E%0A%3Cg%20id%3D%22Clip%20path%20group%22%3E%0A%3Cmask%20id%3D%22mask0_914_1484%22%20style%3D%22mask-type%3Aluminance%22%20maskUnits%3D%22userSpaceOnUse%22%20x%3D%220%22%20y%3D%220%22%20width%3D%2266%22%20height%3D%2264%22%3E%0A%3Cg%20id%3D%22clippath%22%3E%0A%3Cpath%20id%3D%22Vector%22%20d%3D%22M65.0572%200H0V64H65.0572V0Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fmask%3E%0A%3Cg%20mask%3D%22url(%23mask0_914_1484)%22%3E%0A%3Cg%20id%3D%22Group%22%3E%0A%3Cpath%20id%3D%22Vector_2%22%20d%3D%22M32.5411%2063.0203C15.11%2063.0203%200.979492%2049.1476%200.979492%2032.0001C0.979492%2014.8527%2015.11%200.97998%2032.5411%200.97998C49.9722%200.97998%2064.1028%2014.8784%2064.1028%2032.0001C64.1028%2049.1218%2049.9722%2063.0203%2032.5411%2063.0203Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-miterlimit%3D%2210%22%2F%3E%0A%3Cpath%20id%3D%22Vector_3%22%20d%3D%22M11.5518%2025.7856L23.9289%2031.0459M23.9289%2031.0459L24.6509%2062.3239M23.9289%2031.0459L49.9724%206.52374M12.1448%2056.1611L11.5518%2025.8114L37.6468%201.34082%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-miterlimit%3D%2210%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3Cpath%20id%3D%22Vector_4%22%20d%3D%22M63.9741%2026.5077L56.9604%2052.4481M62.5559%2020.8091L52.68%2056.6254M60.4157%2017.9727L48.709%2059.1782M58.2754%2014.6979L45.0474%2060.88M55.8516%2011.9646L41.5148%2062.0146M53.4535%209.46343L37.9563%2062.685M50.8234%207.45215L34.7331%2062.5819M47.0329%209.74707L31.4584%2062.3756M42.6493%2013.3828L28.3641%2062.0662M37.5696%2018.2821L25.0377%2060.9832M32.3866%2023.8518L24.9604%2049.6633M27.7452%2028.2096L24.8057%2038.8591%22%20stroke%3D%22currentColor%22%20stroke-miterlimit%3D%2210%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3CclipPath%20id%3D%22clip0_914_1484%22%3E%0A%3Crect%20width%3D%2265.0572%22%20height%3D%2264%22%20fill%3D%22white%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E"
                            />
                          </_Builtin.Block>
                          <_Builtin.Block
                            className="content-tab__feature__details"
                            tag="div"
                          >
                            <_Builtin.Block
                              className="h10-v2 weight--black"
                              tag="div"
                            >
                              {"Richly textured finishes"}
                            </_Builtin.Block>
                            <_Builtin.Block
                              className="h10-v2 hidden-tablet"
                              tag="div"
                            />
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className="content-tab__feature"
                          tag="div"
                        >
                          <_Builtin.Block
                            className="content-tab__feature__icon"
                            tag="div"
                          >
                            <_Builtin.HtmlEmbed
                              className="svg-icon"
                              value="%3Csvg%20width%3D%2266%22%20height%3D%2264%22%20viewBox%3D%220%200%2066%2064%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20id%3D%22Layer_1%22%20clip-path%3D%22url(%23clip0_914_1504)%22%3E%0A%3Cg%20id%3D%22Clip%20path%20group%22%3E%0A%3Cmask%20id%3D%22mask0_914_1504%22%20style%3D%22mask-type%3Aluminance%22%20maskUnits%3D%22userSpaceOnUse%22%20x%3D%220%22%20y%3D%220%22%20width%3D%2266%22%20height%3D%2264%22%3E%0A%3Cg%20id%3D%22clippath%22%3E%0A%3Cpath%20id%3D%22Vector%22%20d%3D%22M65.0572%200H0V64H65.0572V0Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fmask%3E%0A%3Cg%20mask%3D%22url(%23mask0_914_1504)%22%3E%0A%3Cg%20id%3D%22Group%22%3E%0A%3Cpath%20id%3D%22Vector_2%22%20d%3D%22M32.5411%2063.0203C15.11%2063.0203%200.979492%2049.1476%200.979492%2032.0001C0.979492%2014.8527%2015.11%200.97998%2032.5411%200.97998C49.9722%200.97998%2064.1028%2014.8784%2064.1028%2032.0259C64.1028%2049.1734%2049.9722%2063.0461%2032.5411%2063.0461%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-miterlimit%3D%2210%22%2F%3E%0A%3Cpath%20id%3D%22Vector_3%22%20d%3D%22M11.5518%2025.7856L23.9289%2031.0459M23.9289%2031.0459L24.6509%2062.3239M23.9289%2031.0459L49.9724%206.52374M12.1448%2056.1611L11.5518%2025.8114L37.6468%201.34082%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-miterlimit%3D%2210%22%2F%3E%0A%3Cpath%20id%3D%22Vector_4%22%20d%3D%22M12.0156%2055.0525L23.9802%2060.3386M12.0156%2053.2475L23.9802%2058.5336M12.0156%2051.4683L23.9802%2056.7544M12.0156%2049.6633L23.9802%2054.9236M12.0156%2047.8583L23.9802%2053.1186M12.0156%2046.0791L23.9802%2051.3394M12.0156%2044.2741L23.9802%2049.5602M12.0156%2042.4691L23.9802%2047.7552M12.0156%2040.6899L23.9802%2045.9759M12.0156%2038.8849L23.9802%2044.1452M12.0156%2037.0799L23.4902%2041.876M12.0156%2035.3007L23.4902%2040.0968M12.0156%2033.4957L23.4902%2038.2918M14.7231%2023.8519L26.1977%2028.648M17.147%2021.4022L28.6216%2026.1983M37.1566%202.7334L48.6313%207.52953M33.4951%206.36918L44.9697%2011.1653M17.7143%2020.5513L29.1889%2025.3474M12.0156%2031.7165L23.4902%2036.5126M12.0156%2029.9115L23.4902%2034.7076M12.0156%2028.1065L23.4902%2032.9026M45.2018%2011.5779C46.5168%2012.4804%2047.9093%2014.1564%2049.4564%2017.8954C50.7457%2021.2475%2052.4475%2026.9719%2052.9375%2029.731C53.4016%2032.49%2054.6135%2040.6641%2054.6135%2040.6641C55.5934%2046.0017%2056.2896%2048.9155%2056.9342%2051.2104M56.96%2012.5319C56.96%2012.5319%2058.2235%2023.2588%2058.3009%2025.0122C58.3782%2026.7656%2058.7392%2030.3241%2058.9197%2031.6649C59.1002%2033.0058%2059.8222%2037.1315%2059.8222%2037.1315L60.8021%2044.042M54.8198%2010.2112C56.1349%2016.0388%2057.089%2021.4538%2057.4242%2026.0178C57.7852%2030.2983%2058.3782%2033.2894%2058.9455%2036.2548C59.5902%2040.4062%2059.9254%2043.1137%2060.209%2045.486M48.9665%208.32889C51.3903%2014.4917%2052.6796%2019.1073%2053.0922%2022.4336C54.3815%2029.009%2055.2582%2033.9856%2055.6965%2037.2346C56.4443%2042.6754%2057.0374%2046.3885%2057.5789%2049.5344M48.7344%2057.8631C47.6514%2054.15%2046.5942%2050.1274%2045.4081%2048.1935C45.2018%2047.9614%2044.9697%2047.9099%2044.6861%2048.1162C43.1647%2049.3281%2042.5458%2051.2104%2042.3138%2053.3506V57.3216L42.0817%2060.9574M40.122%2061.37L39.8641%2044.0678C39.5289%2042.4949%2039.4516%2041.1025%2039.6321%2039.9421C38.8327%2035.0686%2039.1164%2031.2265%2041.1276%2029.0863L41.8496%2028.0549C43.5773%2027.7971%2044.8923%2028.2354%2045.6659%2029.7052L47.0841%2034.3982C48.1413%2036.0485%2048.6828%2037.2862%2048.7344%2038.1113C50.23%2044.3257%2050.462%2050.5142%2050.7199%2056.2902M39.0648%2061.2668C39.2969%2057.6053%2039.2969%2052.7834%2038.6006%2044.532C37.8271%2038.5239%2037.7497%2033.8051%2038.4459%2030.5046C39.0132%2028.9316%2039.7868%2027.5908%2040.8956%2026.6109L41.927%2025.038C42.5974%2024.6254%2043.2936%2024.7801%2044.0672%2025.2701C47.0841%2028.0549%2048.425%2032.3353%2049.6885%2036.6931C50.9004%2041.2314%2051.3388%2044.0678%2051.4419%2046.1307C51.545%2050.3853%2051.545%2053.6343%2051.4419%2055.8261M36.4346%2062.0146C36.6667%2056.5996%2037.0793%2050.6174%2036.6925%2045.8212L35.9705%2040.9735C35.4032%2032.1033%2036.512%2029.7568%2037.1566%2025.5795C38.4459%2021.3506%2041.1276%2019.8551%2044.6861%2020.1129C45.3823%2020.6029%2045.9753%2021.4796%2046.3621%2022.9751C47.703%2025.9663%2048.657%2025.2701%2049.3017%2027.1782C51.5193%2032.7221%2052.0092%2039.8647%2052.1639%2041.6955C52.3186%2043.5263%2052.396%2046.6206%2052.8085%2048.4256C53.1953%2050.2564%2054.1494%2053.5827%2054.1494%2053.5827M29.3178%2026.6367C31.2775%2039.7616%2032.2058%2051.623%2032.3347%2062.4014M25.6562%2030.1178C25.6562%2030.1178%2026.6877%2040.0195%2026.9197%2042.6496C27.1518%2045.254%2027.3839%2053.3506%2027.3839%2055.2588C27.3839%2057.1669%2027.6933%2061.9888%2027.6933%2061.9888M28.1059%2027.5908C28.8537%2032.1033%2029.6788%2038.7818%2029.8593%2040.8446C30.014%2042.9075%2029.4467%2048.3482%2029.8593%2051.0042L30.3492%2054.2531C30.7876%2058.7914%2030.5813%2060.2612%2030.4266%2062.0146%22%20stroke%3D%22currentColor%22%20stroke-miterlimit%3D%2210%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3CclipPath%20id%3D%22clip0_914_1504%22%3E%0A%3Crect%20width%3D%2265.0572%22%20height%3D%2264%22%20fill%3D%22white%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E"
                            />
                          </_Builtin.Block>
                          <_Builtin.Block
                            className="content-tab__feature__details"
                            tag="div"
                          >
                            <_Builtin.Block
                              className="h10-v2 weight--black"
                              tag="div"
                            >
                              {"Natural,"}
                              <br />
                              {"wood-grain colors"}
                            </_Builtin.Block>
                            <_Builtin.Block
                              className="h10-v2 hidden-tablet"
                              tag="div"
                            />
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className="content-tab__feature"
                          tag="div"
                        />
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className="content-tab__description"
                    tag="div"
                  >
                    <_Builtin.Block className="paragraph-v2" tag="div">
                      {
                        "Our premiere collection features modern textures and colors inspired by nature."
                      }
                    </_Builtin.Block>
                    <_Builtin.Block className="paragraph-v2" tag="div">
                      {
                        "Our premiere collection features modern textures and colors inspired by nature."
                      }
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className="content-tab__trigger-more"
                    tag="div"
                  >
                    <_Builtin.Link
                      className="btn-v2-transparent-2 no-border is--red open-more"
                      button={false}
                      block="inline"
                      options={{
                        href: "#",
                      }}
                    >
                      <_Builtin.Block tag="div">{"Show more"}</_Builtin.Block>
                      <_Builtin.HtmlEmbed
                        className="svg-icon"
                        value="%3Csvg%20width%3D%2219%22%20height%3D%2218%22%20viewBox%3D%220%200%2019%2018%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M9.49414%200.5V17.5%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%2F%3E%0A%3Cpath%20d%3D%22M18.4941%209L0.49414%209%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                    </_Builtin.Link>
                    <_Builtin.Link
                      className="btn-v2-transparent-2 no-border is--dark close-more"
                      button={false}
                      block="inline"
                      options={{
                        href: "#",
                      }}
                    >
                      <_Builtin.Block className="rotate-180" tag="div">
                        <_Builtin.HtmlEmbed
                          className="svg-icon"
                          value="%3Csvg%20width%3D%2226%22%20height%3D%2216%22%20viewBox%3D%220%200%2026%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M0.505859%208.45244H25.4941M25.4941%208.45244C25.4941%208.45244%2022.119%207.19961%2020.5085%205.59961C18.8981%203.99961%2018.8981%200%2018.8981%200M25.4941%208.45244C25.4941%208.45244%2022.119%209.59961%2020.5085%2011.1996C18.8981%2012.7996%2018.8981%2016%2018.8981%2016%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linejoin%3D%22bevel%22%2F%3E%0A%3C%2Fsvg%3E"
                        />
                      </_Builtin.Block>
                      <_Builtin.Block tag="div">{"Go back"}</_Builtin.Block>
                    </_Builtin.Link>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.HtmlEmbed
          className="hidden-code"
          value="%3Cstyle%3E%0A%20%20.content-tab__feature__icon%20svg%20%7B%0A%20%20%09transition%3A%20fill%200.5s%20ease-in-out%3B%0A%20%20%20%20fill%3A%20var(--grey-white-v2)%3B%0A%20%20%7D%0A%20%20%0A%20%20.content-tab__feature__icon%20path%20%7B%0A%20%20%20%20transition%3A%20stroke%200.5s%20ease-in-out%3B%0A%20%20%7D%0A%20%20%0A%20%20.content-tab__feature%20%7B%0A%20%20%09transition%3A%20margin-bottom%200.3s%20ease-in-out%3B%0A%20%20%7D%0A%0A%20%20.content-tab__feature__icon%7B%0A%20%20%20%20transition%3A%20all%200.7s%20ease-in-out%3B%0A%20%20%7D%0A%20%20%0A%20%20%40media%20screen%20and%20(min-width%3A%20992px)%20%7B%0A%20%20%20%20.content-tab__feature__details%20%7B%0A%20%20%20%20%20%20position%3A%20absolute%3B%0A%20%20%20%20%20%20left%3A%204.5rem%3B%0A%20%20%20%20%20%20top%3A%200%3B%0A%20%20%20%20%20%20transition%3A%20all%200.6s%20ease-in-out%3B%0A%20%20%20%20%20%20max-width%3A%20155px%3B%0A%20%20%20%20%7D%0A%20%20%20%20%0A%20%20%20%20.h10-v2.weight--black%20%7B%0A%20%20%20%20%20%20font-weight%3A%20var(--font-weight-400)%3B%0A%20%20%20%20%7D%0A%20%20%20%20%0A%20%20%20%20.content-tab__feature%3Ahover%20.content-tab__feature__details%20.h10-v2.weight--black%20%7B%0A%20%20%20%20%09font-weight%3A%20900%3B%0A%20%20%20%20%7D%0A%20%20%20%20%0A%20%20%20%20.content-tab%20%7B%0A%20%20%20%20%09min-height%3A%20600px%3B%0A%20%20%20%20%7D%0A%20%20%20%20%0A%20%20%20%20.content-tab__img-overlay%20%7B%0A%20%20%20%20%20%20background%3A%20linear-gradient(180deg%2C%20rgba(0%2C%200%2C%200%2C%200.5)%200%25%2C%20rgba(0%2C%200%2C%200%2C%200)%2016.75%25%2C%20rgba(0%2C%200%2C%200%2C%200)%2084.75%25%2C%20rgba(0%2C%200%2C%200%2C%200.5)%2097.5%25)%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20.content-tab__feature%3Ahover%20.content-tab__feature__details%20%7B%0A%20%20%20%20%20%20top%3A%20100%25%3B%0A%20%20%20%20%20%20left%3A%200%3B%0A%20%20%20%20%20%20max-width%3A%20160px%3B%0A%20%20%20%20%20%20width%3A%20100%25%3B%0A%20%20%20%20%20%20text-align%3A%20center%3B%0A%20%20%20%20%7D%0A%20%20%20%20%0A%20%20%20%20.content-tab__feature%3Ahover%20.content-tab__feature__details%20.h10-v2%3Alast-child%20%7B%0A%20%20%20%20%20%20display%3A%20none%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20.content-tab__feature%3Ahover%20.content-tab__feature__details%20.h10-v2%3Afirst-child%20%7B%0A%20%20%20%20%20%20color%3A%20var(--heading-color-v2)%3B%0A%20%20%20%20%7D%0A%20%20%20%20%0A%20%20%20%20.content-tab__feature%3Ahover%20.content-tab__feature__icon%20%7B%0A%20%20%20%20%09font-size%3A%2010rem%3B%0A%20%20%20%20%7D%0A%20%20%20%20%20%20%0A%20%20%20%20.content-tab__feature%3Ahover%20%7B%0A%20%20%20%20%20%20margin-bottom%3A%202rem%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20.content-tab__feature%3Ahover%20path%20%7B%0A%20%20%20%20%20%20stroke%3A%20var(--grey-white-v2)%3B%0A%20%20%20%20%7D%0A%20%20%20%20%0A%20%20%20%20.content-tab__feature%3Ahover%20svg%20%7B%0A%20%20%20%20%20%20fill%3A%20var(--heading-color-v2)%3B%0A%20%20%20%20%7D%0A%20%20%20%20%0A%20%20%20%20.content-tabs__link__text%20%7B%0A%20%20%20%20%20%20position%3A%20relative%3B%0A%20%20%20%20%20%20z-index%3A%203%3B%0A%20%20%20%20%20%20color%3A%20white%3B%0A%20%20%20%20%20%20transition%3A%20color%20.3s%20ease%3B%0A%20%20%20%20%7D%0A%20%20%20%20.content-tabs__link%3A%3Aafter%20%7B%0A%20%20%20%20%20%20content%3A%20%22%22%3B%0A%20%20%20%20%20%20position%3A%20absolute%3B%0A%20%20%20%20%20%20top%3A%200%3B%0A%20%20%20%20%20%20bottom%3A%200%3B%0A%20%20%20%20%20%20left%3A%200%3B%0A%20%20%20%20%20%20right%3A%200%3B%0A%20%20%20%20%20%20z-index%3A%202%3B%0A%20%20%20%20%20%20background-color%3A%20var(--heading-color-v2)%3B%0A%20%20%20%20%20%20border-radius%3A%2062px%3B%0A%20%20%20%20%20%20transform%3A%20scaleX(0)%3B%0A%20%20%20%20%20%20transform-origin%3A%20right%3B%0A%20%20%20%20%20%20transition%3A%20transform%20.3s%20ease%2C%20opacity%20.3s%20ease%3B%0A%20%20%20%20%7D%0A%20%20%20%20.content-tabs__link%3Ahover%20.content-tabs__link__text%2C%0A%20%20%20%20.content-tabs__link.active%20.content-tabs__link__text%7B%0A%20%20%20%20%20%20color%3A%20white%3B%0A%20%20%20%20%7D%0A%20%20%20%20.content-tabs__link%3Ahover%3A%3Aafter%2C%0A%20%20%20%20.content-tabs__link.active%3A%3Aafter%7B%0A%20%20%20%20%20%20transform%3A%20scaleX(1)%3B%0A%20%20%20%20%20%20transform-origin%3A%20left%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%0A%20%20%0A%20%20%40media%20screen%20and%20(max-width%3A%20992px)%20%7B%0A%20%20%09.content-tab%20%7B%0A%20%20%20%20%20%20--top-offset%3A%2032px%3B%0A%20%20%20%20%20%20top%3A%20calc(var(--header-height-tablet)%20%2B%20var(--top-offset))%3B%0A%20%20%20%20%7D%0A%20%20%20%20.content-tab__feature__icon%20svg%20path%20%7B%0A%20%20%20%20%20%20stroke-width%3A%201%3B%0A%20%20%20%20%7D%0A%20%20%20%20.content-tab__img-overlay%20%7B%0A%20%20%20%20%09background%3A%20linear-gradient(180deg%2C%20rgba(0%2C%200%2C%200%2C%200.60)%200%25%2C%20rgba(0%2C%200%2C%200%2C%200.00)%2028%25%2C%20rgba(0%2C%200%2C%200%2C%200.00)%2060%25%2C%20rgba(0%2C%200%2C%200%2C%200.60)%20100%25)%3B%0A%20%20%7D%0A%20%20%20%20.content-tab%3Anth-child(3)%20%7B%0A%20%20%20%20%20%20--top-offset%3A%2064px%3B%0A%20%20%20%20%7D%0A%20%20%20%20.content-tab%3Anth-child(4)%20%7B%0A%20%20%20%20%20%20--top-offset%3A%2096px%3B%0A%20%20%20%20%7D%0A%20%20%20%20.content-tab%3Anth-child(5)%20%7B%0A%20%20%20%20%20%20--top-offset%3A%20128px%3B%0A%20%20%20%20%7D%0A%20%20%20%20.content-tab.opened%20%7B%0A%20%20%20%20%20%20position%3A%20fixed%3B%0A%20%20%20%20%20%20z-index%3A%20950%3B%0A%20%20%20%20%20%20width%3A%20100vw%3B%0A%20%20%20%20%20%20height%3A%20100vh%3B%0A%20%20%20%20%20%20top%3A%20var(--header-height-tablet)%3B%0A%20%20%20%20%20%20left%3A%200%3B%0A%20%20%20%20%20%20background-color%3A%20var(--grey-white-v2)%3B%0A%20%20%20%20%20%20overflow-y%3A%20scroll%3B%0A%20%20%20%20%7D%0A%20%20%20%20.content-tab.opened%20.content-tab__inner%20%7B%0A%20%20%20%20%09padding-bottom%3A%2010rem%3B%0A%20%20%20%20%7D%0A%20%20%20%20.content-tab.opened%20.content-tab__left%20%7B%0A%20%20%20%20%09border-radius%3A%200%3B%0A%20%20%20%20%7D%0A%20%20%20%20.content-tab.opened%20.content-tab__close%20%7B%0A%20%20%20%20%09display%3A%20block%3B%0A%20%20%20%20%7D%0A%20%20%20%20.content-tab.opened%20.content-tab__features-list%20%7B%0A%20%20%20%20%09display%3A%20flex%3B%0A%20%20%20%20%7D%0A%20%20%20%20.content-tab.opened%20.content-tab__trigger-more%20%7B%0A%20%20%20%20%09margin-top%3A%200%3B%0A%20%20%20%20%7D%0A%20%20%20%20.content-tab__trigger-more%20.close-more%20%7B%0A%20%20%20%20%09display%3A%20none%3B%0A%20%20%20%20%7D%0A%20%20%20%20.content-tab.opened%20.content-tab__trigger-more%20.close-more%20%7B%0A%20%20%20%20%09display%3A%20flex%3B%0A%20%20%20%20%7D%0A%20%20%20%20.content-tab.opened%20.content-tab__trigger-more%20.open-more%20%7B%0A%20%20%20%20%09display%3A%20none%3B%0A%20%20%20%20%7D%0A%20%20%20%20.content-tab%20%7B%0A%20%20%20%20%09will-change%3A%20transform%3B%0A%20%20%20%20%20%20transition%3A%20all%200.4s%20ease-in-out%3B%0A%20%20%20%20%7D%0A%20%20%20%20.content-tab%3Anot(.opened).in-back%20%7B%0A%20%20%20%20%20%20transform%3A%20scale(0.95)%3B%20%2F*%20Slightly%20smaller%20*%2F%0A%20%20%20%20%20%20filter%3A%20blur(4px)%3B%20%2F*%20Add%20blur%20effect%20*%2F%0A%20%20%20%20%20%20z-index%3A%200%3B%20%2F*%20Ensure%20proper%20stacking%20*%2F%0A%20%20%20%20%7D%0A%20%20%20%20.content-tab%20.content-tab__description%20.paragraph-v2%3Alast-child%20%7B%0A%20%20%20%20%09display%3A%20none%3B%0A%20%20%20%20%7D%0A%20%20%20%20.content-tab.opened%20.content-tab__description%20.paragraph-v2%3Alast-child%20%7B%0A%20%20%20%20%09display%3A%20block%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%0A%20%20%40media%20screen%20and%20(min-width%3A%20992px)%20and%20(max-width%3A%201281px)%20%7B%0A%20%20%20%20.content-tab__features-list%7B%0A%20%20%20%20%09margin-bottom%3A%204rem%3B%0A%20%20%20%20%20%20grid-row-gap%3A%204rem%3B%0A%20%20%20%20%7D%0A%20%20%20%20.content-tab__features-wrap%20%7B%0A%20%20%20%20%20%20grid-column-gap%3A%202rem%3B%0A%20%20%20%20%20%20grid-row-gap%3A%202rem%3B%0A%20%20%20%20%20%20flex-wrap%3A%20wrap%3B%0A%20%20%20%20%7D%0A%20%20%20%20.content-tab__feature%20%7B%0A%20%20%20%20%09width%3A%2045%25%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%3C%2Fstyle%3E%0A%0A%3Cscript%3E%0A%20%20var%20Webflow%20%3D%20Webflow%20%7C%7C%20%5B%5D%3B%0A%20%20Webflow.push(function%20()%20%7B%0A%20%20%20%20const%20tabLinks%20%3D%20document.querySelectorAll('.content-tabs__link')%3B%0A%20%20%20%20const%20tabContents%20%3D%20document.querySelectorAll('.content-tab')%3B%0A%20%20%20%20const%20headerHeightTablet%20%3D%2046%3B%20%2F%2F%20px%0A%20%20%20%20const%20topOffsets%20%3D%20%5B32%2C%2064%2C%2096%2C%20128%5D%3B%20%2F%2F%20px%0A%0A%20%20%20%20tabLinks.forEach(function(link)%20%7B%0A%20%20%20%20%20%20link.addEventListener('click'%2C%20function()%20%7B%0A%20%20%20%20%20%20%20%20const%20targetTab%20%3D%20this.getAttribute('data-tab')%3B%0A%0A%20%20%20%20%20%20%20%20%2F%2F%20Remove%20'active'%20class%20from%20all%20links%20and%20tabs%0A%20%20%20%20%20%20%20%20tabLinks.forEach(function(link)%20%7B%0A%20%20%20%20%20%20%20%20%20%20link.classList.remove('active')%3B%0A%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20%20%20tabContents.forEach(function(tab)%20%7B%0A%20%20%20%20%20%20%20%20%20%20tab.classList.remove('active')%3B%0A%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%2F%2F%20Add%20'active'%20class%20to%20the%20clicked%20link%20and%20corresponding%20tab%0A%20%20%20%20%20%20%20%20this.classList.add('active')%3B%0A%20%20%20%20%20%20%20%20document.querySelector(%60.content-tab%5Bdata-tab%3D%22%24%7BtargetTab%7D%22%5D%60).classList.add('active')%3B%0A%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%7D)%3B%0A%20%20%20%20%0A%20%20%20%20tabLinks.forEach(function%20(link)%20%7B%0A%20%20%20%20%20%20link.addEventListener('mouseenter'%2C%20function%20()%20%7B%0A%20%20%20%20%20%20%20%20const%20targetTab%20%3D%20document.querySelector(%60.content-tab%5Bdata-tab%3D%22%24%7Bthis.getAttribute('data-tab')%7D%22%5D%60)%3B%0A%0A%20%20%20%20%20%20%20%20if%20(targetTab)%20%7B%0A%20%20%20%20%20%20%20%20%20%20targetTab.classList.add('is-hover')%3B%0A%20%20%20%20%20%20%20%20%20%20tabContents.forEach((tab)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20(tab%20!%3D%3D%20targetTab)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20tab.classList.add('no-hover')%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D)%3B%0A%0A%20%20%20%20%20%20link.addEventListener('mouseleave'%2C%20function%20()%20%7B%0A%20%20%20%20%20%20%20%20tabContents.forEach((tab)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20tab.classList.remove('is-hover'%2C%20'no-hover')%3B%0A%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%7D)%3B%0A%20%20%20%0A%0A%20%20%20%20tabContents.forEach(function(tab)%20%7B%0A%20%20%20%20%20%20const%20openMoreLink%20%3D%20tab.querySelector('.open-more')%3B%0A%20%20%20%20%20%20const%20closeMoreLinks%20%3D%20tab.querySelectorAll('.close-more')%3B%0A%0A%20%20%20%20%20%20if%20(openMoreLink)%20%7B%0A%20%20%20%20%20%20%20%20openMoreLink.addEventListener('click'%2C%20function%20()%20%7B%0A%20%20%20%20%20%20%20%20%20%20tab.classList.add('opened')%3B%0A%20%20%20%20%20%20%20%20%20%20document.querySelector('body').classList.add('no-scroll')%3B%0A%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20if%20(closeMoreLinks.length)%20%7B%0A%20%20%20%20%20%20%20%20closeMoreLinks.forEach(function(closeLink)%20%7B%0A%20%20%20%20%20%20%20%20%20%20closeLink.addEventListener('click'%2C%20function%20()%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20tab.classList.remove('opened')%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20document.querySelector('body').classList.remove('no-scroll')%3B%0A%20%20%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D)%3B%0A%20%20%20%20%0A%20%20%20%20const%20observer%20%3D%20new%20IntersectionObserver(%0A%20%20%20%20%20%20(entries)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20entries.forEach((entry)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20const%20tab%20%3D%20entry.target%3B%0A%20%20%20%20%20%20%20%20%20%20const%20prevTab%20%3D%20tab.previousElementSibling%3B%0A%0A%20%20%20%20%20%20%20%20%20%20if%20(entry.isIntersecting)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20Current%20tab%20is%20entering%20the%20viewport%20-%20blur%20the%20previous%20tab%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20(prevTab)%20prevTab.classList.add('in-back')%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%20else%20if%20(entry.intersectionRatio%20%3C%200.8)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20Current%20tab%20is%20leaving%20the%20viewport%20-%20unblur%20the%20previous%20tab%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20(prevTab)%20prevTab.classList.remove('in-back')%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20threshold%3A%200.8%2C%20%2F%2F%20Trigger%20when%2050%25%20of%20the%20tab%20is%20in%20view%0A%20%20%20%20%20%20%7D%0A%20%20%20%20)%3B%0A%0A%20%20%20%20tabContents.forEach((tab)%20%3D%3E%20observer.observe(tab))%3B%0A%0A%20%20%7D)%3B%0A%0A%3C%2Fscript%3E"
        />
      </_Builtin.BlockContainer>
    </_Component>
  );
}
