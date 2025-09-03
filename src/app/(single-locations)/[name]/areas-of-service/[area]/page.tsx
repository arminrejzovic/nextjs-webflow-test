import SectionHeader from "@/components/molecules/section-header";
import DesignerGridSection from "@/components/organisms/designer-grid-section";
import InstallersGridSection from "@/components/organisms/installers-grid-section";
import StaticMapSection from "@/components/organisms/static-map-section";
// import WorkGridSection from "@/components/organisms/work-grid-section";
import { AreaZipCard } from "@/devlink/AreaZipCard";
import { AreaZipGrid } from "@/devlink/AreaZipGrid";
import { LocationHeroHeader } from "@/devlink/LocationHeroHeader";
import { SectionSpacing } from "@/devlink/SectionSpacing";
import { ToolkitSidebarV2 } from "@/devlink/ToolkitSidebarV2";
import { notFound } from "next/navigation";
import { getArea, getAreas } from "@/services/area-service";
import { Employee } from "@/types/locations";
import { AreaPayloadFull } from "@/types/areas";
import { headers } from "next/headers";
import { getLocation } from "@/services/location-service";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ name: string; area: string }>;
}) {
  const { name, area } = await params;
  const headersList = await headers();
  const rewrittenLocation = headersList.get("x-rewritten-location-slug");
  const slug = rewrittenLocation ? rewrittenLocation : name;
  const location = await getLocation(slug);
  const areaData = await getArea(area);

  return {
    title: `Custom Closets for ${areaData?.name} Homes | Closet World`,
    description: `Closet World serves ${areaData?.name} in ${location?.locationName} with elegant custom closets. From design to installation, we create personalized solutions to enhance every home.`,
  };
}

export async function generateStaticParams() {
  try {
    const areasPayload: AreaPayloadFull | null = await getAreas();

    if (!areasPayload || !areasPayload.areas) {
      console.error("Failed to fetch areas for static params generation.");
      return [];
    }

    // Create an array to hold all generated slugs
    const params = [];

    // Iterate through each area
    for (const area of areasPayload.areas) {
      // For each area, iterate through its locations
      for (const location of area.locations) {
        // Push a unique object for each combination of location and area
        params.push({
          name: location.slug,
          area: area.slug,
        });
      }
    }

    return params;
  } catch (error) {
    console.error("Error fetching areas:", error);
    return [];
  }
}

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";
const mapId = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID || "";

const AreaPage = async ({
  params,
}: {
  params: Promise<{ name: string; area: string }>;
}) => {
  const { name, area } = await params;
  const areaData = await getArea(area);

  if (!areaData) {
    return notFound();
  }

  const zipCodes = areaData.postalCodes.map((item) => item.postalCode);
  const areaZipList = areaData.postalCodes;
  const designersData = areaData.users.filter(
    (user) => user.employeeRole === "designer"
  );
  const installersData = areaData.users.filter(
    (user) => user.employeeRole === "installer"
  );

  const designers: Employee[] = designersData.map((designer) => {
    return {
      ...designer,
      name: `${designer.firstName} ${designer.lastName}`,
      jobTitle: designer.employeeTitle,
    };
  });

  const installers: Employee[] = installersData.map((installer) => {
    return {
      ...installer,
      name: `${installer.firstName} ${installer.lastName}`,
      jobTitle: installer.employeeTitle,
    };
  });

  return (
    <>
      <SectionSpacing variant="py-32" />
      <LocationHeroHeader title={areaData.name} titleTag="h1" />
      <StaticMapSection
        zipCodes={zipCodes}
        apiKey={apiKey}
        mapId={mapId}
        className="max-w-4xl"
        alt="Our service area covering Pasadena, CA ZIP codes"
      />
      <SectionSpacing
        variant="py-64"
        sectionSlot={
          <>
            <SectionHeader
              title="Areas covered by this location"
              text={`At Closet World, we’re proud to bring our custom storage solutions and design expertise to homes throughout the ${areaData.name} area. Our local team is committed to helping residents create beautifully organized spaces tailored to their lifestyle and needs. Below are some of the cities we currently serve in this region:`}
              titleTag="h2"
              variant="Base"
            />
            <SectionSpacing variant="pt-32" />
            <AreaZipGrid
              as="div"
              cardsSlot={areaZipList.map((item) => (
                <AreaZipCard
                  key={item.city}
                  longName={`${item.city}, ${item.state.toUpperCase()}`}
                  zip={item.postalCode}
                />
              ))}
            />
          </>
        }
      />
      {designers.length > 0 && (
        <DesignerGridSection
          designerList={designers}
          title="Meet our designers"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut purus sit amet nisi accumsan luctus. Donec finibus, tortor sed mattis egestas, nibh metus eleifend orci, ut elementum quam dolor sed mass."
          currentPath={`/${process.env.NEXT_PUBLIC_BASE_PATH}/${name}/profile/`}
        />
      )}
      {installers.length > 0 && (
        <InstallersGridSection
          installerList={installers}
          title="Meet our installers"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut purus sit amet nisi accumsan luctus. Donec finibus, tortor sed mattis egestas, nibh metus eleifend orci, ut elementum quam dolor sed mass."
          currentPath={`/${process.env.NEXT_PUBLIC_BASE_PATH}/${name}/profile/`}
        />
      )}
      <SectionSpacing variant="py-32" />
      {/* currently not provided in api
        <WorkGridSection />
      */}
      <SectionSpacing variant="py-32" />
      <ToolkitSidebarV2 />
    </>
  );
};

export default AreaPage;
