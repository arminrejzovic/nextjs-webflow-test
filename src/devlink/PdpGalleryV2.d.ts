import * as React from "react";
import * as Types from "./types";

declare function PdpGalleryV2(props: {
  as?: React.ElementType;
  hasDescriptions?: Types.Visibility.VisibilityConditions;
  image1?: Types.Asset.Image;
  descriptionImage1?: React.ReactNode;
  image2?: Types.Asset.Image;
  descriptionImage2?: React.ReactNode;
  image3?: Types.Asset.Image;
  descriptionImage3?: React.ReactNode;
  image4?: Types.Asset.Image;
  descriptionImage4?: React.ReactNode;
  staticImage1?: Types.Asset.Image;
  staticImage2?: Types.Asset.Image;
  staticImages?: Types.Visibility.VisibilityConditions;
  galleryImages?: Types.Visibility.VisibilityConditions;
  hideSection?: Types.Visibility.VisibilityConditions;
  image1AltText?: Types.Basic.AltText;
  image2AltText?: Types.Basic.AltText;
  image3AltText?: Types.Basic.AltText;
  image4AltText?: Types.Basic.AltText;
}): React.JSX.Element;
