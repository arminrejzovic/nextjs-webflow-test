import LoadMoreCtaWrapper from "@/components/atoms/load-more-button";
import BreadcrumbWrapper from "@/components/molecules/breadcrumb-wrapper";
import LocationHeroSliderWrapper from "@/components/molecules/location-hero-slider-wrapper";
import LocationMap from "@/components/molecules/location-map";
import SectionHeader from "@/components/molecules/section-header";
import DesignerGridSection from "@/components/organisms/designer-grid-section";
import InstallersGridSection from "@/components/organisms/installers-grid-section";
import { AreaCard } from "@/devlink/AreaCard";
import { LocationHeaderSlide } from "@/devlink/LocationHeaderSlide";
import { LocationHeroHeader } from "@/devlink/LocationHeroHeader";
import { SectionHeaderLocation } from "@/devlink/SectionHeaderLocation";
import { SectionSpacing } from "@/devlink/SectionSpacing";
import { ToolkitSidebarV2 } from "@/devlink/ToolkitSidebarV2";
import { WorkGrid } from "@/devlink/WorkGrid";
import { getLocation } from "@/services/location-service";
import { GoogleGeocodeResponse } from "@/types/google-geo-code";
import { notFound } from "next/navigation";

const LocationPage = async ({
  params,
}: {
  params: Promise<{ name: string }>;
}) => {
  const { name } = await params;

  if (!name) {
    return notFound();
  }

  const locationData = await getLocation(name);

  if (!locationData) {
    return notFound();
  }

  let coordinates;

  const placeId = locationData.reviewLinks?.google?.placeId;

  if (placeId) {
    const geoCodeResults: GoogleGeocodeResponse = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?placeId=${placeId}&components=country:US&key=${
        process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""
      }`
    ).then((resp) => resp.json());

    if (geoCodeResults.results.length) {
      coordinates = geoCodeResults.results[0].geometry.location;
    }
  }

  // Capitalize the name for display
  const capitalizedName = locationData?.locationName;

  return (
    <>
      <BreadcrumbWrapper
        _1stBreadcrumbs="Locations"
        breadcrumb1Link={process.env.NEXT_PUBLIC_BASE_PATH}
        show2ndBreadcrumb
        _2ndBreadcrumbs={capitalizedName}
        breadcrumb2Link={`${process.env.NEXT_PUBLIC_BASE_PATH}/${name}`}
      />
      <LocationHeroHeader
        labelAboveTitle={`${locationData.address.city}, ${locationData.address.shortState}`}
        title={locationData.locationName || ""}
        fullAddress={
          locationData.address.address1 +
          ` ${locationData.address.city}, ${locationData.address.shortState} ${locationData.address.zip}`
        }
        ratingNumber={locationData.rating ? `${locationData.rating}+` : ""}
      />
      {locationData.mainImage && (
        <LocationHeroSliderWrapper
          slides={
            Array.isArray(locationData.mainImage)
              ? locationData.mainImage.map((image) => (
                  <LocationHeaderSlide key={image} image={image} />
                ))
              : [<LocationHeaderSlide image={locationData.mainImage} />]
          }
          sliderType="dots"
        />
      )}
      {locationData.description && (
        <SectionHeaderLocation
          variant="py-64"
          hideTitle={false}
          text={locationData.description}
        />
      )}
      {coordinates && (
        <SectionSpacing
          variant="Base"
          sectionSlot={
            <LocationMap
              day1Hours={
                locationData.openingHours?.[0]?.openTime +
                " - " +
                locationData.openingHours?.[0]?.closeTime
              }
              day2Hours={
                locationData.openingHours?.[1]?.openTime +
                " - " +
                locationData.openingHours?.[1]?.closeTime
              }
              day3Hours={
                locationData.openingHours?.[2]?.openTime +
                " - " +
                locationData.openingHours?.[2]?.closeTime
              }
              day4Hours={
                locationData.openingHours?.[3]?.openTime +
                " - " +
                locationData.openingHours?.[3]?.closeTime
              }
              day5Hours={
                locationData.openingHours?.[4]?.openTime +
                " - " +
                locationData.openingHours?.[4]?.closeTime
              }
              day6Hours={
                locationData.openingHours?.[5]?.openTime +
                " - " +
                locationData.openingHours?.[5]?.closeTime
              }
              day7Hours={
                locationData.openingHours?.[6]?.openTime +
                " - " +
                locationData.openingHours?.[6]?.closeTime
              }
              coordinates={coordinates}
            />
          }
        />
      )}
      {/* <WorkGridSection
        text={`Explore custom closets, garage systems, and more from homes near you. See real Closet World projects in ${locationData.locationName} and imagine what we can do in your space.`}
      /> */}
      {locationData.employeeGroups?.map((group) => {
        if (group.groupName === "Designers" && group.employees.length) {
          return (
            <DesignerGridSection
              designerList={group.employees}
              title="Meet our designers"
              text={`Our certified Designers in ${locationData.locationName} listen, plan, and sketch custom closet solutions built to maximize your space and simplify your life. No prefab, no stress, all style.`}
              currentPath={`/${process.env.NEXT_PUBLIC_BASE_PATH}/profile/`}
              key={group.groupName}
            />
          );
        }

        if (group.groupName === "Installers" && group.employees.length) {
          return (
            <InstallersGridSection
              installerList={group.employees}
              title="Meet our installers"
              text={`Our Installers in ${locationData.locationName} deliver expert work with clean precision. Every system is installed quickly and carefully so you get flawless results with zero mess.`}
              currentPath={`/${process.env.NEXT_PUBLIC_BASE_PATH}/profile/`}
              key={group.groupName}
            />
          );
        }

        return null;
      })}
      <SectionSpacing variant="py-32" />
      {/*
      Reviews currently commented out because we don't have any reviews yet. JSON is returning only links to platforms.
      <LocationHeroSliderWrapper
        slides={[
          <LocationTestimonialCard />,
          <LocationTestimonialCard />,
          <LocationTestimonialCard />,
          <LocationTestimonialCard />,
          <LocationTestimonialCard />,
          <LocationTestimonialCard />,
          <LocationTestimonialCard />,
          <LocationTestimonialCard />,
          <LocationTestimonialCard />,
          <LocationTestimonialCard />,
          <LocationTestimonialCard />,
          <LocationTestimonialCard />,
        ]}
        sliderType="responsive-grid"
      />*/}
      <SectionSpacing variant="py-32" />
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
            <WorkGrid
              as="div"
              areasGrid={locationData.areasConnected?.map((area, idx) => (
                <AreaCard
                  key={idx}
                  link={{
                    href: `/${process.env.NEXT_PUBLIC_BASE_PATH}/${name}/areas-of-service/${area.slug}`,
                  }}
                  title={area.areaName}
                />
              ))}
            />
            <SectionSpacing variant="py-32" />
            <LoadMoreCtaWrapper
              as="button"
              text="See all areas"
              link={{
                href: `/${process.env.NEXT_PUBLIC_BASE_PATH}/${name}/areas-of-service`,
              }}
            />
          </>
        }
      />
      <ToolkitSidebarV2 />
    </>
  );
};

export default LocationPage;
