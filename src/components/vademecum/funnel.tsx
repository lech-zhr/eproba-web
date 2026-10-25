"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

import { useOpenOnHit } from "./use-open-on-hit";

export interface FunnelEntry {
  id: string;
  n: string;
  label: string;
  /** Szerokość paska w procentach. */
  width: number;
  body: ReactNode;
}

export function Funnel({ steps }: { steps: FunnelEntry[] }) {
  const [open, setOpen] = useOpenOnHit(
    steps.map((step) => ({ id: step.id, hitIds: [step.id] })),
    steps.slice(0, 1).map((step) => step.id),
  );

  return (
    <Accordion
      multiple
      value={open}
      onValueChange={setOpen}
      className="my-2 gap-1"
    >
      {steps.map((step, i) => {
        const last = i === steps.length - 1;
        return (
          <AccordionItem
            key={step.id}
            value={step.id}
            className="not-last:border-b-0"
          >
            <AccordionTrigger
              id={step.id}
              style={{ width: `${step.width}%` }}
              className={cn(
                "mx-auto flex-none scroll-mt-24 items-center gap-3 rounded-lg border px-4 py-2.5 hover:no-underline",
                last
                  ? "border-primary bg-primary text-primary-foreground **:data-[slot=accordion-trigger-icon]:text-primary-foreground"
                  : "bg-muted/60",
              )}
            >
              <span className="text-xs font-bold tabular-nums">{step.n}</span>
              <span className="flex-1 text-center">{step.label}</span>
            </AccordionTrigger>
            <AccordionContent
              keepMounted
              hiddenUntilFound
              className="mx-auto max-w-prose pt-2 text-base leading-7"
            >
              {step.body}
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
