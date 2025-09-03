"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function ModalZoomImage({
  as: _Component = _Builtin.Block,
  image = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/67b7bd096052e08452eb514d_Walk-In-Closet-Chocolate-Pearl-L.webp",
  modalProps = {},
  closeButtonProps = {},
}) {
  return (
    <_Component
      className="modal-v2 sw-config__modal show"
      tag="div"
      {...modalProps}
    >
      <_Builtin.Block className="sw-config__modal__inner" tag="div">
        <_Builtin.Block className="sw-config__modal__image-wrap" tag="div">
          <_Builtin.Image
            className="sw-config__modal__image"
            loading="lazy"
            width="auto"
            height="auto"
            alt=""
            src={image}
          />
        </_Builtin.Block>
        <_Builtin.Link
          className="modal-v2__close sw-config__modal__close"
          button={false}
          block="inline"
          options={{
            href: "#",
          }}
          {...closeButtonProps}
        >
          <_Builtin.HtmlEmbed
            className="svg-icon"
            value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2214%22%20height%3D%2214%22%20viewBox%3D%220%200%2014%2014%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20d%3D%22M12.5605%201L0.560546%2013%22%20stroke%3D%22%23FDFDFD%22%20stroke-width%3D%221.6%22%20stroke-miterlimit%3D%2210%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M12.5615%2013L0.561523%201%22%20stroke%3D%22%23FDFDFD%22%20stroke-width%3D%221.6%22%20stroke-miterlimit%3D%2210%22%2F%3E%0A%3C%2Fsvg%3E"
          />
        </_Builtin.Link>
        <_Builtin.Block className="ci-modal__zoom-info" tag="div">
          <_Builtin.Block className="rounded-blob" tag="div">
            <_Builtin.HtmlEmbed
              className="svg-icon"
              value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2215%22%20height%3D%2214%22%20viewBox%3D%220%200%2015%2014%22%20fill%3D%22none%22%3E%0A%20%20%3Cg%20clip-path%3D%22url(%23clip0_13130_2355)%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M14.3105%2011.4408L11.8056%208.93548L10.8837%208.01349C10.5779%207.70759%2010.0459%207.70759%209.74221%208.01349L9.48159%208.27414L8.71482%207.50726C10.2591%205.72575%2010.1902%203.0201%208.49728%201.32907C6.72682%20-0.44166%203.84928%20-0.439506%202.07882%201.32907C0.308361%203.09981%200.308361%205.97779%202.07882%207.74852C2.96405%208.63389%204.12498%209.0755%205.28805%209.0755C6.3499%209.0755%207.40744%208.70282%208.25821%207.96609L9.02498%208.73298L8.76436%208.99364C8.4499%209.30815%208.4499%209.82084%208.76436%2010.1354L12.1911%2013.5626C12.4841%2013.8556%2012.8674%2014.0021%2013.2508%2014.0021C13.6342%2014.0021%2014.0197%2013.8556%2014.3105%2013.5626C14.5927%2013.2805%2014.7499%2012.9035%2014.7499%2012.5028C14.7499%2012.1021%2014.5948%2011.7251%2014.3105%2011.4429V11.4408ZM2.53328%207.28968C1.01482%205.77099%201.01482%203.3023%202.53328%201.78361C3.29144%201.02533%204.28867%200.6462%205.2859%200.6462C6.28313%200.6462%207.28036%201.02533%208.03851%201.78361C9.55482%203.3023%209.55698%205.77099%208.03851%207.28968C6.52005%208.80838%204.05175%208.80838%202.53328%207.28968ZM9.17144%209.56234C9.17144%209.53649%209.1779%209.4891%209.21882%209.44817L10.1988%208.46802C10.2397%208.42709%2010.2871%208.42063%2010.313%208.42063C10.3388%208.42063%2010.3862%208.42709%2010.4271%208.46802L11.1207%209.16166L9.91236%2010.3702L9.21882%209.67651C9.1779%209.63558%209.17144%209.58819%209.17144%209.56234ZM13.8539%2013.106C13.5201%2013.4377%2012.9794%2013.4377%2012.6456%2013.106L10.369%2010.829L11.5773%209.6205L13.8539%2011.8975C14.1856%2012.2314%2014.1856%2012.7721%2013.8539%2013.106Z%22%20fill%3D%22%23FDFDFD%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M7.39911%204.21351H5.61142V2.42554C5.61142%202.24675%205.46711%202.10242%205.28834%202.10242C5.10957%202.10242%204.96526%202.24675%204.96526%202.42554V4.21351H3.17757C2.9988%204.21351%202.85449%204.35784%202.85449%204.53664C2.85449%204.71543%202.9988%204.85976%203.17757%204.85976H4.96526V6.64773C4.96526%206.82653%205.10957%206.97086%205.28834%206.97086C5.46711%206.97086%205.61142%206.82653%205.61142%206.64773V4.85976H7.39911C7.57788%204.85976%207.72218%204.71543%207.72218%204.53664C7.72218%204.35784%207.57788%204.21351%207.39911%204.21351Z%22%20fill%3D%22%23FDFDFD%22%2F%3E%0A%20%20%3C%2Fg%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3CclipPath%20id%3D%22clip0_13130_2355%22%3E%0A%20%20%20%20%20%20%3Crect%20width%3D%2214%22%20height%3D%2214%22%20fill%3D%22white%22%20transform%3D%22translate(0.75)%22%2F%3E%0A%20%20%20%20%3C%2FclipPath%3E%0A%20%20%3C%2Fdefs%3E%0A%3C%2Fsvg%3E"
            />
            <_Builtin.Block className="h12-v2 is--white-v2" tag="div">
              {"Click to zoom"}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className="modal-v2__dw" tag="div">
        <_Builtin.NotSupported _atom="Animation" />
        <_Builtin.Block className="modal-v2__dw__content" tag="div">
          <_Builtin.Block
            className="h11-v2 is--white-v2 weight--black"
            tag="div"
          >
            {"Double tap to Zoom"}
          </_Builtin.Block>
          <_Builtin.Block className="h11-v2 is--white-v2" tag="div">
            {
              "Double tap to zoom on the image. Move finger around to inspect it. Double tap the image to reset the zoom and position."
            }
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
