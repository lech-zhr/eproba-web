"use client";

import { type Getter, type Setter, atom } from "jotai";

export interface TrialItem {
  id: string;
  /** Strona Vademecum, na której jest drogowskaz. */
  slug: string;
  text: string;
}

// Drogowskazy wybrane do „Twojej próby”. Stan żyje tylko w pamięci
// przeglądarki; zapis na stałe pojawi się razem z kreatorem próby.
export const trialItemsAtom = atom<TrialItem[]>([]);

export const trialIdsAtom = atom(
  (get: Getter) => new Set(get(trialItemsAtom).map((item) => item.id)),
);

export const toggleTrialItemAtom = atom(
  null,
  (get: Getter, set: Setter, item: TrialItem) => {
    const items = get(trialItemsAtom);
    set(
      trialItemsAtom,
      items.some((existing) => existing.id === item.id)
        ? items.filter((existing) => existing.id !== item.id)
        : [...items, item],
    );
  },
);
