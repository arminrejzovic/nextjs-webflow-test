"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function LogosCarousel({
  as: _Component = _Builtin.Block,
  variant = "Base",
}) {
  const _styleVariantMap = {
    Base: "",
    Grey: "w-variant-37e15f70-1388-609c-2993-8171ba83de86",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component className={`logos-inf ${_activeStyleVariant}`} tag="div">
      <_Builtin.BlockContainer
        className={`container-v2-small px-0-tablet ${_activeStyleVariant}`}
        grid={{
          type: "container",
        }}
        tag="div"
      >
        <_Builtin.Block
          className={`logos-inf__wrap ${_activeStyleVariant}`}
          tag="div"
        >
          <_Builtin.Block
            className={`logos-inf__inner ${_activeStyleVariant}`}
            tag="div"
          >
            <_Builtin.Image
              className={`logos-inf__image ${_activeStyleVariant}`}
              width="auto"
              height="auto"
              loading="lazy"
              alt=""
              src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/6838245d61efcfacfc3f42ed_191-1914565_logo-universal-studios.webp"
            />
            <_Builtin.Image
              className={`logos-inf__image ${_activeStyleVariant}`}
              width="auto"
              height="auto"
              loading="lazy"
              alt=""
              src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/6838245ce1aa4ebead750684_clipart101058.webp"
            />
            <_Builtin.Image
              className={`logos-inf__image ${_activeStyleVariant}`}
              width="auto"
              height="auto"
              loading="lazy"
              alt=""
              src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/6838245df06180e7285c6c94_clipart943005.webp"
            />
            <_Builtin.Image
              className={`logos-inf__image ${_activeStyleVariant}`}
              width="auto"
              height="auto"
              loading="lazy"
              alt=""
              src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/6838245c9a754ab4abb8038a_clipart1640735.webp"
            />
            <_Builtin.Image
              className={`logos-inf__image ${_activeStyleVariant}`}
              width="auto"
              height="auto"
              loading="lazy"
              alt=""
              src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/6838245c6479ebd4f9d4c48e_clipart2369792.webp"
            />
            <_Builtin.Image
              className={`logos-inf__image ${_activeStyleVariant}`}
              width="auto"
              height="auto"
              loading="lazy"
              alt=""
              src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/6838245df06180e7285c6dc7_clipart2634793.webp"
            />
            <_Builtin.Image
              className={`logos-inf__image ${_activeStyleVariant}`}
              width="auto"
              height="auto"
              loading="lazy"
              alt=""
              src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/6838245c5f89c46708259be6_clipart2785138.webp"
            />
            <_Builtin.Image
              className={`logos-inf__image ${_activeStyleVariant}`}
              width="auto"
              height="auto"
              loading="lazy"
              alt=""
              src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/6838245d82f7aa28b6e2b32f_pngimg.com%20-%20disneyland_PNG21.webp"
            />
            <_Builtin.Image
              className={`logos-inf__image ${_activeStyleVariant}`}
              width="auto"
              height="auto"
              loading="lazy"
              alt=""
              src="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/6838245dac8934b15fbbfd74_the-ritz-carlton-logo-png-transparent.webp"
            />
          </_Builtin.Block>
          <_Builtin.Block
            className={`logos-inf__overlay ${_activeStyleVariant}`}
            tag="div"
          />
          <_Builtin.Block
            className={`logos-inf__overlay right ${_activeStyleVariant}`}
            tag="div"
          />
          <_Builtin.HtmlEmbed
            className={`hidden-code ${_activeStyleVariant}`}
            value="%3Cscript%3E%0A%20%20var%20Webflow%20%3D%20Webflow%20%7C%7C%20%5B%5D%3B%0A%20%20Webflow.push(function%20()%20%7B%0A%20%20%20%20%2F*%0A%20%20const%20track%20%3D%20document.querySelector(%22.logos-inf__inner%22)%3B%0A%20%20const%20logos%20%3D%20Array.from(track.children)%3B%0A%20%20logos.forEach(logo%20%3D%3E%20%7B%0A%20%20%20%20const%20clone%20%3D%20logo.cloneNode(true)%3B%0A%20%20%20%20track.appendChild(clone)%3B%0A%20%20%7D)%3B%0A%20%20gsap.to(track%2C%20%7B%0A%20%20%20%20xPercent%3A%20-50%2C%0A%20%20%20%20duration%3A%2015%2C%0A%20%20%20%20ease%3A%20%22none%22%2C%0A%20%20%20%20repeat%3A%20-1%0A%20%20%7D)%3B*%2F%0A%0A%20%20%20%20const%20track%20%3D%20document.querySelector(%22.logos-inf__inner%22)%3B%0A%20%20%20%20const%20originalLogos%20%3D%20Array.from(track.children)%3B%0A%20%20%20%20let%20clones%20%3D%20%5B%5D%3B%0A%20%20%20%20let%20animation%3B%0A%0A%20%20%20%20function%20cloneLogos()%20%7B%0A%20%20%20%20%20%20%2F%2F%20Remove%20old%20clones%20if%20present%0A%20%20%20%20%20%20clones.forEach(clone%20%3D%3E%20clone.remove())%3B%0A%20%20%20%20%20%20clones%20%3D%20%5B%5D%3B%0A%0A%20%20%20%20%20%20%2F%2F%20Clone%20each%20logo%20and%20append%0A%20%20%20%20%20%20originalLogos.forEach(logo%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20const%20clone%20%3D%20logo.cloneNode(true)%3B%0A%20%20%20%20%20%20%20%20track.appendChild(clone)%3B%0A%20%20%20%20%20%20%20%20clones.push(clone)%3B%0A%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20function%20getTotalWidth(elements)%20%7B%0A%20%20%20%20%20%20let%20total%20%3D%200%3B%0A%20%20%20%20%20%20elements.forEach(el%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20const%20style%20%3D%20getComputedStyle(el)%3B%0A%20%20%20%20%20%20%20%20const%20marginLeft%20%3D%20parseFloat(style.marginLeft)%20%7C%7C%200%3B%0A%20%20%20%20%20%20%20%20const%20marginRight%20%3D%20parseFloat(style.marginRight)%20%7C%7C%200%3B%0A%20%20%20%20%20%20%20%20total%20%2B%3D%20el.offsetWidth%20%2B%20marginLeft%20%2B%20marginRight%3B%0A%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20return%20total%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20function%20startAnimation()%20%7B%0A%20%20%20%20%20%20if%20(animation)%20animation.kill()%3B%0A%20%20%20%20%20%20gsap.set(track%2C%20%7B%20x%3A%200%20%7D)%3B%20%2F%2F%20Reset%20position%0A%0A%20%20%20%20%20%20const%20totalWidth%20%3D%20getTotalWidth(originalLogos)%3B%0A%0A%20%20%20%20%20%20animation%20%3D%20gsap.to(track%2C%20%7B%0A%20%20%20%20%20%20%20%20x%3A%20%60-%3D%24%7BtotalWidth%7D%60%2C%0A%20%20%20%20%20%20%20%20duration%3A%2020%2C%0A%20%20%20%20%20%20%20%20ease%3A%20%22none%22%2C%0A%20%20%20%20%20%20%20%20repeat%3A%20-1%2C%0A%20%20%20%20%20%20%20%20modifiers%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20x%3A%20gsap.utils.unitize(x%20%3D%3E%20parseFloat(x)%20%25%20totalWidth)%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20function%20initSlider()%20%7B%0A%20%20%20%20%20%20cloneLogos()%3B%0A%20%20%20%20%20%20%2F%2F%20Wait%20a%20tick%20for%20layout%20to%20stabilize%20(fonts%2Fimages%20loading)%0A%20%20%20%20%20%20requestAnimationFrame(()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20requestAnimationFrame(()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20startAnimation()%3B%0A%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20window.addEventListener(%22load%22%2C%20initSlider)%3B%0A%0A%20%20%20%20%2F%2F%20Re-initialize%20on%20resize%0A%20%20%20%20let%20resizeTimeout%3B%0A%20%20%20%20window.addEventListener(%22resize%22%2C%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20clearTimeout(resizeTimeout)%3B%0A%20%20%20%20%20%20resizeTimeout%20%3D%20setTimeout(()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20initSlider()%3B%0A%20%20%20%20%20%20%7D%2C%20300)%3B%0A%20%20%20%20%7D)%3B%0A%20%20%7D)%3B%0A%3C%2Fscript%3E"
          />
        </_Builtin.Block>
      </_Builtin.BlockContainer>
    </_Component>
  );
}
