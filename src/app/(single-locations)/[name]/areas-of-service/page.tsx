import SectionHeader from "@/components/molecules/section-header";
import AreaCardsGridSection from "@/components/organisms/area-cards-grid-section";
import { SectionSpacing } from "@/devlink/SectionSpacing";
import { getLocation } from "@/services/location-service";
import { headers } from "next/headers";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  const headersList = await headers();
  const rewrittenLocation = headersList.get("x-rewritten-location-slug");
  const slug = rewrittenLocation ? rewrittenLocation : name;
  const location = await getLocation(slug);

  return {
    title: `Service Areas in ${location?.locationName} & Nearby | Closet World`,
    description: `Explore Closet World service areas in and around ${location?.locationName}. Our team delivers custom closet designs and expert installation across your local community.`,
  };
}

const AreasOfServicePage = async ({
  params,
}: {
  params: Promise<{ name: string }>;
}) => {
  const { name } = await params;
  const LocationData = await getLocation(name);

  if (!LocationData) {
    return notFound();
  }

  // Transform areasConnected to match the format expected by AreaCardsGridSection
  const areaList =
    LocationData.areasConnected?.map((area, index) => ({
      id: index + 1,
      title: area.areaName,
      description: `Service area for ${area.areaName}`,
      link: `/${area.slug}`,
    })) || [];

  return (
    <>
      <SectionSpacing
        variant="py-64"
        sectionSlot={
          <>
            <SectionHeader
              title="Areas of service"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor interdum lobortis."
              titleTag="h2"
              variant="Left align/pb-16"
            />
            <SectionSpacing variant="pt-32" />
            <AreaCardsGridSection
              areaList={areaList}
              currentPath={`/${process.env.NEXT_PUBLIC_BASE_PATH}/${name}/areas-of-service`}
            />
            <SectionSpacing variant="pt-32" />
          </>
        }
      />
    </>
  );
};

export default AreasOfServicePage;
