"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { ReactNode } from "react";

import { useOpenOnHit } from "./use-open-on-hit";

export interface FaqEntry {
  id: string;
  /** Elementy wewnątrz pozycji, które mogą być celem wyniku wyszukiwania. */
  hitIds: string[];
  question: ReactNode;
  answer: ReactNode;
}

export function FaqAccordion({ items }: { items: FaqEntry[] }) {
  const [open, setOpen] = useOpenOnHit(items);

  return (
    <Accordion multiple value={open} onValueChange={setOpen}>
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          value={item.id}
          className="mb-2 rounded-lg border px-4 not-last:border-b"
        >
          <AccordionTrigger
            id={item.id}
            data-report=""
            className="scroll-mt-24 text-base"
          >
            {item.question}
          </AccordionTrigger>
          <AccordionContent keepMounted hiddenUntilFound className="text-base">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
