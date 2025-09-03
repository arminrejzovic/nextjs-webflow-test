import * as React from "react";
import * as Types from "./types";

declare function SectionHeroSubpage(props: {
  as?: React.ElementType;
  title?: React.ReactNode;
  text?: React.ReactNode;
  heroImageDesktop?: Types.Asset.Image;
  heroImageMobile?: Types.Asset.Image;
}): React.JSX.Element;
