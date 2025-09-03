import * as React from "react";
import * as Types from "./types";

declare function ModalZoomImage(props: {
  as?: React.ElementType;
  image?: Types.Asset.Image;
  modalProps?: Types.Devlink.RuntimeProps;
  closeButtonProps?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
