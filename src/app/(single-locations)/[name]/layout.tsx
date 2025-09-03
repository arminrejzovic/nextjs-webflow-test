import { headers } from "next/headers";
import { SubnavLocations } from "@/components/molecules/subnav-locations";
import { notFound } from "next/navigation";
import { getLocation, getLocations } from "@/services/location-service";
import { LocationApiLocation, LocationsApiPayload } from "@/types/locations";

export async function generateMetadata({
  params,
}: {
  params: { name: string };
}) {
  const { name } = await params;
  const headersList = await headers();
  const rewrittenLocation = headersList.get("x-rewritten-location-slug");
  const slug = rewrittenLocation ? rewrittenLocation : name;
  const location = await getLocation(slug);

  return {
    title: `Closet World in ${location?.locationName} | Custom Closet Solutions`,
    description: `Discover Closet World in ${location?.locationName} for custom closets, stylish storage, and expert service. Transform your home with designs crafted to fit your space beautifully.
  `,
  };
}

export async function generateStaticParams() {
  try {
    const locationsPayload: LocationsApiPayload | null = await getLocations();

    if (!locationsPayload || !locationsPayload.locations) {
      console.error("Failed to fetch locations for static params generation.");
      return [];
    }

    return locationsPayload.locations.map((location: LocationApiLocation) => ({
      name: location.slug,
    }));
  } catch (error) {
    console.error("Error fetching locations:", error);
    return [];
  }
}

export default async function SingleLocationLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { name: string };
}>) {
  const { name } = await params;
  const headersList = await headers();
  const currentPath = headersList.get("x-current-pathname");
  const rewrittenLocation = headersList.get("x-rewritten-location-slug");
  const isProfilePage = currentPath?.includes("/profile/");
  const slug = rewrittenLocation ? rewrittenLocation : name;
  const location = await getLocation(slug);

  if (!location) {
    notFound();
  }

  return (
    <main>
      {!isProfilePage && (
        <SubnavLocations
          location={location.locationName}
          aboutLink={{ href: `/${location.slug}` }}
          videoGalleryLink={{ href: `/${location.slug}/video` }}
          newsLink={{ href: `/${location.slug}/news` }}
          reviewsLink={{ href: `/${location.slug}/reviews` }}
          serviceAreasLink={{
            href: `/${location.slug}/areas-of-service`,
          }}
          contactLink={{ href: `/${location.slug}/contact` }}
        />
      )}
      {children}
    </main>
  );
}
