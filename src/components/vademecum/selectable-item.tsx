"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { toggleTrialItemAtom, trialIdsAtom } from "@/state/vademecum-trial";
import { useAtomValue, useSetAtom } from "jotai";
import { CheckIcon } from "lucide-react";
import type { ReactNode } from "react";

import { HIT, dimmedFor } from "./styles";

/** Punkt drogowskazu z przyciskiem dodającym go do „Twojej próby”. */
export function SelectableItem({
  id,
  source,
  text,
  hr,
  children,
}: {
  id: string;
  source: { slug: string; area: string; postawa?: string };
  /** Zwykły tekst punktu, pokazywany na liście wybranych drogowskazów. */
  text: string;
  hr?: boolean;
  children: ReactNode;
}) {
  const selected = useAtomValue(trialIdsAtom).has(id);
  const toggle = useSetAtom(toggleTrialItemAtom);

  return (
    <li
      id={id}
      className={cn(HIT, "relative leading-7 sm:pr-24", hr && dimmedFor("hr"))}
    >
      <span
        className={cn(
          selected && "text-muted-foreground decoration-border line-through",
        )}
      >
        {children}
      </span>
      <Button
        type="button"
        variant={selected ? "secondary" : "outline"}
        size="xs"
        aria-pressed={selected}
        className="mt-1 sm:absolute sm:top-1.5 sm:right-0 sm:mt-0"
        onClick={() => toggle({ id, ...source, text })}
      >
        {selected ? (
          <>
            <CheckIcon /> Dodano
          </>
        ) : (
          "Dodaj"
        )}
      </Button>
    </li>
  );
}
