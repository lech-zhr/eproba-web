"use client";

import { Badge } from "@/components/ui/badge";
import { trialItemsAtom } from "@/state/vademecum-trial";
import { useAtomValue } from "jotai";
import { CheckIcon } from "lucide-react";

export function TrialCounter() {
  const count = useAtomValue(trialItemsAtom).length;
  return (
    <Badge
      variant="secondary"
      className="h-7 gap-1.5 px-2.5"
      aria-live="polite"
    >
      <CheckIcon />
      {count}
      <span className="sr-only sm:not-sr-only">dodane</span>
    </Badge>
  );
}
