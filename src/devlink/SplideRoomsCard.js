"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { RoomCard } from "./RoomCard";

export function SplideRoomsCard({
  as: _Component = _Builtin.Block,
  hideRoomCard1 = true,
  roomCardTitle = "Entryway Closets",
  roomCardIntro = "Organization at your doorstep.",
  roomCardLabel = "Start working smarter.",

  roomCardLink = {
    href: "#",
  },

  roomCardImage = "https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/67939d4a6588b74915cebf62_Entryway-Closets.webp",
}) {
  return hideRoomCard1 ? (
    <_Component className="splide__slide" tag="div">
      <RoomCard
        title={roomCardTitle}
        intro={roomCardIntro}
        label={roomCardLabel}
        link={roomCardLink}
        image={roomCardImage}
      />
    </_Component>
  ) : null;
}
