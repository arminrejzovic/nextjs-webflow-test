// import BreadcrumbWrapper from "@/components/molecules/breadcrumb-wrapper";
import SectionHeader from "@/components/molecules/section-header";
import { DesignerAwardCard } from "@/devlink";
import { AboutDesigner } from "@/devlink/AboutDesigner";
import { AreaCard } from "@/devlink/AreaCard";
import { DesignerHero } from "@/devlink/DesignerHero";
import { SectionSpacing } from "@/devlink/SectionSpacing";
import { WorkGrid } from "@/devlink/WorkGrid";
import { capitalize } from "@/lib/utils";
import { getUser, getUsers } from "@/services/user-service";
import { notFound } from "next/navigation";
import { EmployeeApi } from "@/types/locations";
import { headers } from "next/headers";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ name: string; designer: string }>;
}) {
  const { designer } = await params;
  const userData = await getUser(designer);

  return {
    title:
      userData?.employeeRole === "designer"
        ? `Meet ${userData?.firstName} ${userData?.lastName} | Closet World Designer`
        : `Meet ${userData?.firstName} ${userData?.lastName} | Closet World Installer`,
    description:
      userData?.employeeRole === "designer"
        ? `This is ${userData?.firstName} ${userData?.lastName}, your Closet World designer${userData?.locations?.[0]?.name ? ` in ${userData.locations[0].name }`: ''}. Explore their approach, past projects, and personalized closet designs crafted for your lifestyle.
back up (in case the first option is not possible) - Meet your Closet World designer. Explore their portfolio, design approach, and custom solutions that elevate your space with fine finishes and a tailored fit.`
        : `This is ${userData?.firstName} ${userData?.lastName}, your Closet World installer${userData?.locations?.[0]?.name ? ` in ${userData.locations[0].name }`: ''}. Explore their approach, past projects, and personalized closet designs crafted for your lifestyle.`,
  };
}

export async function generateStaticParams() {
  try {
    const usersPayload: EmployeeApi | null = await getUsers();

    if (!usersPayload || !usersPayload.users) {
      return [];
    }

    return usersPayload.users.map((user: any) => ({
      name: user.locationSlug,
      designer: user.slug,
    }));
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
}

const DesignerPage = async ({
  params,
}: {
  params: Promise<{ name: string; designer: string }>;
}) => {
  const { name, designer } = await params;
  const userData = await getUser(designer);

  if (!name || !userData) {
    return notFound();
  }

  // const locationData = await getLocation(name);

  // Capitalize the name for display
  const capitalizedDesigner = capitalize(
    userData.firstName + " " + userData.lastName
  );

  return (
    <>
      {/*
      <BreadcrumbWrapper
        _1stBreadcrumbs="Locations"
        breadcrumb1Link={process.env.NEXT_PUBLIC_BASE_PATH}
        show2ndBreadcrumb
        _2ndBreadcrumbs={locationData?.locationName}
        breadcrumb2Link={`/${process.env.NEXT_PUBLIC_BASE_PATH}/${name}`}
        show3rdBreadcrumb
        _3rdBreadcrumbs={capitalizedDesigner}
        breadcrumb3Link={`${process.env.NEXT_PUBLIC_BASE_PATH}/${name}/${designer}`}
      />
      */}
      <DesignerHero
        name={capitalizedDesigner}
        jobTitle={userData.employeeTitle}
        employeeRating={userData.rating}
        image={userData.profileImage}
        employeeCity={userData.locations?.[0]?.name}
        boxesSlot={
          <>
            {userData.awards?.map((award) => (
              <DesignerAwardCard
                key={award.title}
                title={award.title}
                icon={award.icon}
                withText={false}
              />
            ))}
          </>
        }
      />
      <SectionSpacing variant="py-32" />
      <AboutDesigner
        title={userData.employeeBio?.title}
        aboutText={userData.employeeBio?.description}
      />
      {/*
      Reviews currently commented out because we don't have any reviews yet. JSON is returning only links to platforms.
      <SectionSpacing variant="py-32" />
      <SectionSpacing
        variant="py-64"
        sectionSlot={
          <>
            <SectionHeader
              title="Headline about the reviews"
              hideText={false}
              titleTag="h2"
              variant="Left align/pb-16"
            />
            <LocationHeroSliderWrapper
              slides={[
                <ReviewsCardWrapper />,
                <ReviewsCardWrapper />,
                <ReviewsCardWrapper />,
                <ReviewsCardWrapper />,
                <ReviewsCardWrapper />,
                <ReviewsCardWrapper />,
                <ReviewsCardWrapper />,
                <ReviewsCardWrapper />,
                <ReviewsCardWrapper />,
              ]}
              sliderType="responsive-grid-four"
            />
          </>
        }
      />
      <SectionSpacing
        variant="py-32"
        sectionSlot={
          <>
            <SectionHeader
              title="Headline about the customer designs"
              hideText={false}
              titleTag="h2"
              variant="Left align/pb-16"
            />
            <LocationHeroSliderWrapper
              slides={[
                <JobCardWrapper />,
                <JobCardWrapper />,
                <JobCardWrapper />,
                <JobCardWrapper />,
                <JobCardWrapper />,
                <JobCardWrapper />,
                <JobCardWrapper />,
              ]}
              sliderType="responsive-grid-four"
            />
          </>
        }
      />*/}
      <SectionSpacing
        variant="py-32"
        sectionSlot={
          <>
            <SectionHeader
              title="Areas of service"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor interdum lobortis."
              titleTag="h2"
              variant="Left align/pb-16"
            />
            <WorkGrid
              as="div"
              areasGrid={userData.locations?.[0]?.areas?.map((area, idx) => (
                <AreaCard
                  key={idx}
                  variant="Pointer default"
                  hideText={false}
                  hideLinkIcon={false}
                  title={area.name}
                />
              ))}
            />
          </>
        }
      />
    </>
  );
};

export default DesignerPage;
