import * as React from "react";
import * as Types from "./types";

declare function PdpHeroStaticV2(props: {
  as?: React.ElementType;
  backgroundImage?: Types.Asset.Image;
  title?: React.ReactNode;
  text?: React.ReactNode;
  buttonLink?: Types.Basic.Link;
  imageVisibility?: Types.Visibility.VisibilityConditions;
  videoVisibility?: Types.Visibility.VisibilityConditions;
  videoEmbed?: Types.Basic.RichTextChildren;
  formVisibility?: Types.Visibility.VisibilityConditions;
  buttonVisibility?: Types.Visibility.VisibilityConditions;
  bgImageAltText?: Types.Basic.AltText;
  subheading?: Types.Visibility.VisibilityConditions;
  subheadingText?: React.ReactNode;
  variant?: "Base" | "Wide";
}): React.JSX.Element;
