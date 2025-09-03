import * as React from "react";
import * as Types from "./types";

declare function SubnavLocations(props: {
  as?: React.ElementType;
  locationPhone?: Types.Basic.Link;
  showPhoneIcon?: Types.Visibility.VisibilityConditions;
  aboutLink?: Types.Basic.Link;
  videoGalleryLink?: Types.Basic.Link;
  financingLink?: Types.Basic.Link;
  newsLink?: Types.Basic.Link;
  reviewsLink?: Types.Basic.Link;
  serviceAreasLink?: Types.Basic.Link;
  contactLink?: Types.Basic.Link;
  location?: React.ReactNode;
}): React.JSX.Element;
