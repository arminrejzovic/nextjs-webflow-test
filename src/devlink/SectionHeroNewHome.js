"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function SectionHeroNewHome({
  as: _Component = _Builtin.Block,
  heroImageDesktop = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/675b23bdf8c8ae509a24a17d_Contemporary-Bedroom-Closet-Summer-Breeze.webp",
  heroImageMobile = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/675af13910b98949cd8f26e3_Contemporary-Bedroom-Closet-Summer-Breeze-Mobile.webp",
}) {
  return (
    <_Component className="section section-hero-home" tag="div">
      <_Builtin.Block className="hero-new" tag="div">
        <_Builtin.Image
          className="hero-new_image hero-new_image--desktop"
          loading="eager"
          width="auto"
          height="auto"
          alt=""
          src={heroImageDesktop}
        />
        <_Builtin.Image
          className="hero-new_image hero-new_image--mobile"
          loading="eager"
          width="auto"
          height="auto"
          alt=""
          src={heroImageMobile}
        />
        <_Builtin.BlockContainer
          className="container"
          grid={{
            type: "container",
          }}
          tag="div"
        >
          <_Builtin.Block className="hero-new_content" tag="div">
            <_Builtin.Block className="hero-new_box" tag="div">
              <_Builtin.Block className="hero-new_heading" tag="div">
                <_Builtin.Heading className="h1-hero-new" tag="h2">
                  <_Builtin.Span className="hero-new_main">
                    {"Organize your "}
                  </_Builtin.Span>
                </_Builtin.Heading>
                <_Builtin.VFlex className="h1-hero-words" tag="div">
                  <_Builtin.Block tag="div">{"closet."}</_Builtin.Block>
                  <_Builtin.Block tag="div">{"garage."}</_Builtin.Block>
                  <_Builtin.Block tag="div">{"office."}</_Builtin.Block>
                  <_Builtin.Block tag="div">{"home."}</_Builtin.Block>
                  <_Builtin.Block tag="div">{"life."}</_Builtin.Block>
                </_Builtin.VFlex>
                <_Builtin.Block className="hero-new_text-anim" tag="div">
                  <_Builtin.Block className="hero-new_text-wrap" tag="div">
                    <_Builtin.Heading
                      className="h1-hero-new is--flex hero-new_words"
                      tag="h2"
                    />
                    <_Builtin.Block className="hero-new_text-line" tag="div" />
                  </_Builtin.Block>
                  <_Builtin.Heading
                    className="h1-hero-new is--flex hero-new_cursor"
                    tag="h2"
                  >
                    {"|"}
                  </_Builtin.Heading>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Link
                className="btn btn--cta is--hero"
                button={true}
                block=""
                options={{
                  href: "#fdda4eff-2985-6aa7-e773-f4cc13de9fbe",
                }}
              >
                {"Book Your Free Appointment"}
              </_Builtin.Link>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.BlockContainer>
      </_Builtin.Block>
      <_Builtin.HtmlEmbed value="%3Cscript%3E%0A%20%20var%20Webflow%20%3D%20Webflow%20%7C%7C%20%5B%5D%3B%0A%20%20Webflow.push(function%20()%20%7B%0A%20%20%20%20gsap.registerPlugin(TextPlugin)%3B%0A%0A%20%20%20%20%2F%2F%20Words%20to%20display%0A%20%20%20%20%2F%2F%20const%20words%20%3D%20%5B%22closet.%22%2C%20%22garage.%22%2C%20%22office.%22%2C%20%22home.%22%2C%20%22life.%22%5D%3B%0A%20%20%20%20const%20wordsCont%20%3D%20document.querySelector(%22.h1-hero-words%22)%3B%0A%20%20%20%20const%20words%20%3D%20Array.from(wordsCont.children).map(child%20%3D%3E%20child.textContent.trim())%3B%0A%0A%20%20%20%20%2F%2F%20Cursor%20animation%3A%20Blinking%20effect%0A%20%20%20%20const%20cursorAnimation%20%3D%20gsap.to(%22.hero-new_cursor%22%2C%20%7B%0A%20%20%20%20%20%20opacity%3A%200%2C%0A%20%20%20%20%20%20repeat%3A%20-1%2C%20%2F%2F%20Cursor%20keeps%20blinking%20while%20the%20timeline%20runs%0A%20%20%20%20%20%20yoyo%3A%20true%2C%0A%20%20%20%20%20%20duration%3A%200.5%2C%0A%20%20%20%20%20%20ease%3A%20%22power2.inOut%22%0A%20%20%20%20%7D)%3B%0A%0A%20%20%20%20%2F%2F%20Master%20timeline%20(no%20looping%20this%20time)%0A%20%20%20%20let%20tlMaster%20%3D%20gsap.timeline(%7B%0A%20%20%20%20%20%20onComplete%3A%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%2F%2F%20Stop%20the%20cursor%20animation%20and%20hide%20it%20after%20all%20words%20are%20done%0A%20%20%20%20%20%20%20%20cursorAnimation.kill()%3B%20%2F%2F%20Stop%20blinking%0A%20%20%20%20%20%20%20%20gsap.to(%22.hero-new_cursor%22%2C%20%7B%20opacity%3A%200%2C%20duration%3A%200.2%20%7D)%3B%20%2F%2F%20Hide%20cursor%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D)%3B%0A%0A%20%20%20%20%2F%2F%20Add%20each%20word%20animation%20to%20the%20timeline%0A%20%20%20%20words.forEach((word%2C%20index)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%2F%2F%20If%20it's%20the%20last%20word%2C%20don't%20apply%20yoyo%20and%20repeat%0A%20%20%20%20%20%20const%20isLastWord%20%3D%20index%20%3D%3D%3D%20words.length%20-%201%3B%0A%0A%20%20%20%20%20%20let%20tlText%20%3D%20gsap.timeline(%7B%0A%20%20%20%20%20%20%20%20repeat%3A%20isLastWord%20%3F%200%20%3A%201%2C%20%2F%2F%20No%20repeat%20for%20the%20last%20word%0A%20%20%20%20%20%20%20%20yoyo%3A%20!isLastWord%2C%20%2F%2F%20No%20yoyo%20for%20the%20last%20word%20(no%20deletion)%0A%20%20%20%20%20%20%20%20repeatDelay%3A%200.5%2C%20%2F%2F%20Delay%20before%20the%20next%20word%20appears%0A%20%20%20%20%20%20%7D)%3B%0A%0A%20%20%20%20%20%20%2F%2F%20Apply%20the%20word%20text%20transition%20animation%0A%20%20%20%20%20%20tlText.to(%22.hero-new_words%22%2C%20%7B%20duration%3A%200.9%2C%20text%3A%20word%20%7D)%3B%0A%0A%20%20%20%20%20%20%2F%2F%20Add%20the%20word%20animation%20to%20the%20master%20timeline%0A%20%20%20%20%20%20tlMaster.add(tlText)%3B%0A%0A%20%20%20%20%20%20if%20(isLastWord)%20%7B%0A%20%20%20%20%20%20%20%20tlText.add(()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20tlMaster.kill()%3B%20%2F%2F%20Stop%20the%20master%20timeline%0A%09%09%09%09%09console.log('last%20word')%3B%0A%20%20%20%20%20%20%20%20%20%20%2F%2F%20Animate%20the%20%3A%3Abefore%20pseudo-element%20(hero-new_text-line%3A%3Abefore)%0A%20%20%20%20%20%20%20%20%20%20gsap.to(%22.hero-new_text-line%22%2C%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20%2280%25%22%2C%20%20%2F%2F%20Animation%20for%20the%20width%20of%20the%20pseudo-element%0A%20%20%20%20%20%20%20%20%20%20%20%20duration%3A%200.7%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20ease%3A%20%22power2.out%22%20%2F%2F%20Smooth%20easing%0A%20%20%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D)%3B%0A%20%20%7D)%3B%0A%3C%2Fscript%3E" />
    </_Component>
  );
}
