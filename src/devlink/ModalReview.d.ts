import * as React from "react";
import * as Types from "./types";

declare function ModalReview(props: {
  as?: React.ElementType;
  avatar?: Types.Asset.Image;
  authorName?: React.ReactNode;
  reviewLocation?: React.ReactNode;
  reviewPlatform?: Types.Asset.Image;
  reviewText?: React.ReactNode;
  modalProps?: Types.Devlink.RuntimeProps;
  closeButtonProps?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
