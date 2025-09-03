import { FaqAccordions } from "@/components/organisms/faq-accordions";

const FaqSection = () => {
  return (
    <section className="bg-background-secondary-gray">
      <div className="w-full flex flex-col w-layout-blockcontainer container-v2 w-container py-8 md:py-16 gap-8 md:gap-4">
        <h2 className="text-center !font-medium !leading-8 !text-[28px] !text-[#EF4123] !mb-0">
          FAQs
        </h2>
        <FaqAccordions />
      </div>
    </section>
  );
};

export { FaqSection };
