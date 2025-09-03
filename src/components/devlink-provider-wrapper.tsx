"use client";

import { DevLinkProvider } from "@/devlink/DevLinkProvider";
import { useEffect, useState } from "react";

const DevLinkProviderWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return <DevLinkProvider>{children}</DevLinkProvider>;
};

export default DevLinkProviderWrapper;
