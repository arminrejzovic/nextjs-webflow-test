"use client";

import { FooterV2 } from "@/devlink/FooterV2";
import { useEffect, useState } from "react";

const FooterWrapper = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted ? <FooterV2 /> : null;
};

export default FooterWrapper;
