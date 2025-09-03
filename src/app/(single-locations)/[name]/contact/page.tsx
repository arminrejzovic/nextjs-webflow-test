import { ContactFormWrapper } from "@/components/molecules/contact-form-wrapper";
import SectionHeader from "@/components/molecules/section-header";
import { HeroImage } from "@/devlink/HeroImage";
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
    title: `Contact Closet World ${location?.locationName} | Closet World`,
    description: `Get in touch with Closet World ${location?.locationName}. Call or message our team for design appointments, service inquiries, and expert guidance on your custom closets.`,
  };
}

const ContactPage = async ({
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
      <SectionSpacing variant="py-32" />
      <HeroImage
        image="https://cdn.prod.website-files.com/65dc50a9ff2046f1c1b27199/68835dd006bf2ec2f9dcfdfa_Frame%202072750702.webp"
        altText="Contact"
      />
      <SectionHeader
        title="Contact us"
        text="Complete the form below, send us an email, or give us a call."
        titleTag="h2"
        variant="H5 pt-64-pb-32"
      />
      <ContactFormWrapper />
      <SectionSpacing variant="py-64" />
    </>
  );
};

export default ContactPage;
