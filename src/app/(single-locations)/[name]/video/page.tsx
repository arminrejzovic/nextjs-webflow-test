import CategoryDropdownWrapper from "@/components/atoms/category-dropdown/wrapper";
import GridSection from "@/components/organisms/grid-section";
import { SectionHeaderLocation } from "@/devlink/SectionHeaderLocation";
import { SectionSpacing } from "@/devlink/SectionSpacing";
import { VideoCard } from "@/devlink/VideoCard";
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
    title: `Watch Closet World in ${location?.locationName} | Elegant Closet Ideas`,
    description: `Discover Closet World ${location?.locationName} through video. See our designers’ work, installation process, and the custom closet transformations we create for clients.
  `,
  };
}

const pageConfig = {
  heroText:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum, tellus vitae molestie ultrices, tortor magna iaculis justo, non finibus nibh nisl quis massa.",
};

const VideoPage = async ({ params }: { params: Promise<{ name: string }> }) => {
  const { name } = await params;
  const locationData = await getLocation(name);

  if (!locationData) {
    return notFound();
  }

  return (
    <>
      <SectionHeaderLocation
        variant="py-64"
        title="Video Gallery"
        text={pageConfig.heroText}
      />
      <CategoryDropdownWrapper />
      <GridSection
        variant="Videos grid"
        elements={Array.from({ length: 24 }).map((_, idx) => (
          <div key={idx} className="w-full h-full">
            <VideoCard
              image="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/6866a44b376445ad3f8b320f_Rectangle%206.webp"
              title="Video 1"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum, tellus vitae molestie ultrices, tortor magna iaculis justo, non finibus nibh nisl quis massa."
              videoTime="1:23"
            />
          </div>
        ))}
      />
      <SectionSpacing variant="py-64" />
    </>
  );
};

export default VideoPage;
