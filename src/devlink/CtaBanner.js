"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function CtaBanner({
  as: _Component = _Builtin.Block,
  bannerSpeed = "<script>\n  const bannerSpeed = 3000;\n</script>",
}) {
  return (
    <_Component className="promo-banner" tag="div">
      <_Builtin.RichText className="hidden-code" tag="div" slot="">
        {bannerSpeed}
      </_Builtin.RichText>
      <_Builtin.Block className="promo-banner__inner" tag="div">
        <_Builtin.NotSupported _atom="DynamoWrapper" />
        <_Builtin.Block
          className="swiper-button swiper-button--prev"
          tag="div"
        />
        <_Builtin.Block
          className="swiper-button swiper-button--next"
          tag="div"
        />
      </_Builtin.Block>
      <_Builtin.HtmlEmbed
        className="hidden-code"
        value="%3Cstyle%3E%0A%20%20.promo-banner%20.swiper%20%7B%0A%20%20%20%20width%3A%20auto%3B%0A%20%20%20%20margin%3A%20auto%3B%0A%20%20%20%20overflow%3A%20hidden%3B%0A%20%20%7D%0A%0A%20%20.promo-banner%20.swiper-wrapper%20%7B%0A%20%20%20%20flex-direction%3A%20column%3B%0A%20%20%7D%0A%0A%20%20.promo-banner%20.swiper-button%20%7B%0A%20%20%20%20width%3A%20auto%3B%0A%20%20%20%20height%3A%20auto%3B%0A%20%20%20%20background-color%3A%20transparent%3B%0A%20%20%20%20border-radius%3A%200%3B%0A%20%20%20%20position%3A%20absolute%3B%0A%20%20%20%20top%3A%20calc(50%25%20-%2010px)%3B%0A%20%20%20%20z-index%3A%201%3B%0A%20%20%20%20box-shadow%3A%20none%3B%0A%20%20%7D%0A%0A%20%20.promo-banner%20.swiper-button%3Aafter%20%7B%0A%20%20%20%20font-family%3A%20swiper-icons%3B%0A%20%20%20%20font-size%3A%2019px%3B%0A%20%20%20%20text-transform%3A%20none!important%3B%0A%20%20%20%20letter-spacing%3A%200%3B%0A%20%20%20%20font-variant%3A%20initial%3B%0A%20%20%20%20line-height%3A%201%3B%0A%20%20%20%20color%3A%20var(--white)%3B%0A%20%20%7D%0A%0A%20%20.promo-banner%20.swiper-button.swiper-button--prev%3Aafter%20%7B%0A%20%20%20%20content%3A%20'prev'%3B%0A%20%20%7D%0A%0A%20%20.promo-banner%20.swiper-button.swiper-button--prev%20%7B%0A%20%20%20%20left%3A%200%3B%0A%20%20%20%20right%3A%20auto%3B%0A%20%20%7D%0A%0A%20%20.promo-banner%20.swiper-button.swiper-button--next%3Aafter%20%7B%0A%20%20%20%20content%3A%20'next'%3B%0A%20%20%7D%0A%0A%20%20.promo-banner%20.swiper-button.swiper-button--next%20%7B%0A%20%20%20%20left%3A%20auto%3B%0A%20%20%20%20right%3A%200%3B%0A%20%20%7D%0A%0A%20%20%40media%20(max-width%3A%20767px)%20%7B%0A%20%20%20%20.promo-banner%20.swiper%20%7B%0A%20%20%20%20%20%20width%3A%20100%25%3B%0A%20%20%20%20%7D%0A%20%20%20%20.promo-banner%20.swiper-button.swiper-button--prev%20%7B%0A%20%20%20%20%20%20left%3A%208px%3B%0A%20%20%20%20%20%20right%3A%20auto%3B%0A%20%20%20%20%7D%0A%20%20%20%20.promo-banner%20.swiper-button.swiper-button--next%20%7B%0A%20%20%20%20%20%20left%3A%20auto%3B%0A%20%20%20%20%20%20right%3A%208px%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%3C%2Fstyle%3E"
      />
      <_Builtin.HtmlEmbed
        className="hidden-code"
        value="%3Cscript%3E%0A%20%20window.addEventListener(%22load%22%2C%20(event)%20%3D%3E%20%7B%0A%20%20%20%20let%20speed%20%3D%203000%0A%20%20%20%20if(bannerSpeed)%20speed%20%3D%20bannerSpeed%3B%0A%20%20%20%20const%20bannerSlider%20%3D%20new%20Swiper(%22.swiper-promo-banner%22%2C%20%7B%0A%20%20%20%20%20%20autoplay%3A%20%7B%0A%20%20%20%20%20%20%20%20delay%3A%20speed%2C%0A%20%20%20%20%20%20%20%20disableOnInteraction%3A%20false%2C%0A%20%20%20%20%20%20%20%20pauseOnMouseEnter%3A%20true%2C%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20rewind%3A%20true%2C%0A%20%20%20%20%20%20direction%3A%20%22vertical%22%2C%0A%20%20%20%20%20%20navigation%3A%20%7B%0A%20%20%20%20%20%20%20%20nextEl%3A%20%22.promo-banner%20.swiper-button--next%22%2C%0A%20%20%20%20%20%20%20%20prevEl%3A%20%22.promo-banner%20.swiper-button--prev%22%2C%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%7D)%3B%0A%20%20%7D)%3B%20%20%0A%3C%2Fscript%3E"
      />
    </_Component>
  );
}
