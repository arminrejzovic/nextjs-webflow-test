import DevLinkProviderWrapper from "@/components/devlink-provider-wrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Find a Location Near You | Closet World",
  description:
    "Discover Closet World locations. Experience stylish, custom closet designs with premium finishes and expert service to transform any room beautifully.",
};

export default function LocationsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <DevLinkProviderWrapper>{children}</DevLinkProviderWrapper>
    </main>
  );
}
