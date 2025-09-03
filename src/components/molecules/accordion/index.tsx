"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

interface AccordionProps {
  question: string;
  answer: string;
  isOpen?: boolean;
  className?: string;
  itemId?: string;
}

function AccordionComponent({
  question,
  answer,
  isOpen = false,
  className,
  itemId = "item-1",
}: AccordionProps) {
  return (
    <li className={cn("w-full border-b border-[#7879794D] py-4", className)}>
      <Accordion
        type="single"
        collapsible
        defaultValue={isOpen ? itemId : undefined}
      >
        <AccordionItem
          value={itemId}
          className="border-none flex flex-col gap-4"
        >
          <AccordionTrigger className="text-left hover:no-underline font-medium text-base leading-8 text-[#1D1D1F] !mb-0">
            <span className="text-base font-medium text-gray-900">
              {question}
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-secondary text-base leading-8 font-medium">
              {answer}
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </li>
  );
}

export { AccordionComponent };
export type { AccordionProps };
