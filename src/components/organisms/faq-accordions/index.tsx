import { AccordionComponent } from "@/components/molecules/accordion";

const FaqAccordions = () => {
  return (
    <ul className="flex flex-col gap-0 bg-white rounded-2xl border border-[#C8C7C5] faq-accordions">
      <AccordionComponent
        question="Do I need appointment to visit?"
        answer="Yes—but schedule your consult soon to secure availability."
        isOpen={true}
      />
      <AccordionComponent
        question="Do your locations have a showroom?"
        answer="A personalized design plan, expert guidance, and a clear quote."
      />
      <AccordionComponent
        question="What areas do you service?"
        answer="Nope. It’s no-pressure, no-obligation, just smart planning."
      />
      <AccordionComponent
        question="Are your location locally owned?"
        answer="Nope—our systems work for pantries, laundry rooms, home offices, and more."
        className="border-b-0"
      />
    </ul>
  );
};

export { FaqAccordions };
