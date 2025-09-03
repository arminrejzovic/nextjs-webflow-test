import * as React from "react";
import * as Types from "./types";

declare function CustomerQuote(props: {
  as?: React.ElementType;
  rating?: React.ReactNode;
  ratingValue?: Types.Builtin.Text;
  image?: Types.Asset.Image;
  image2?: Types.Asset.Image;
  image3?: Types.Asset.Image;
}): React.JSX.Element;
