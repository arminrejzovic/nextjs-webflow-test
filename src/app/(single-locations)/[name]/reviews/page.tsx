import GridSection from "@/components/organisms/grid-section";
import { ReviewsCard } from "@/devlink/ReviewsCard";
import { SectionHeaderLocation } from "@/devlink/SectionHeaderLocation";
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
    title: `Client Reviews in ${location?.locationName} | Closet World`,
    description: `Discover Closet World ${location?.locationName} reviews. Hear directly from clients about their design journey, installation quality, and satisfaction with custom closets.`,
  };
}

const pageConfig = {
  heroText:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum, tellus vitae molestie ultrices, tortor magna iaculis justo, non finibus nibh nisl quis massa.",
};

const ReviewsPage = async ({
  params,
}: {
  params: Promise<{ name: string }>;
}) => {
  const { name } = await params;
  const locationData = await getLocation(name);

  if (!locationData) {
    return notFound();
  }

  return (
    <>
      <SectionHeaderLocation
        variant="py-64"
        title="Our clients love us!"
        text={pageConfig.heroText}
      />
      <GridSection
        variant="Videos grid"
        elements={Array.from({ length: 24 }).map((_, idx) => (
          <div key={idx} className="w-full h-full">
            <ReviewsCard
              variant="Base"
              image="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/6866a44b376445ad3f8b320f_Rectangle%206.webp"
              avatarImage="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/6867a26faeef4f44f7f26d0a_0c2888ef0c53e2145cbdfffe7bd986cb837ae4e9.webp"
              author="Nick C"
              reviewLocation="Industry, CA"
              reviewIntro="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              linkText="See more"
            />
          </div>
        ))}
      />
      <SectionSpacing variant="py-64" />
    </>
  );
};

export default ReviewsPage;
