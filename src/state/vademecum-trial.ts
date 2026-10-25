"use client";

import { type Getter, type Setter, atom } from "jotai";
import { atomWithStorage, createJSONStorage } from "jotai/utils";

export interface TrialItem {
  id: string;
  /** Strona Vademecum, na której jest drogowskaz. */
  slug: string;
  /** Tytuł obszaru (strony), w którym jest drogowskaz. */
  area: string;
  /** Postawa, pod którą wymieniony jest drogowskaz. */
  postawa?: string;
  text: string;
}

// Drogowskazy wybrane do „Twojej próby”. Trzymamy je w sessionStorage, żeby
// wybór przetrwał przeładowanie strony i logowanie przed kreatorem próby, ale
// nie zostawał w przeglądarce na stałe.
export const trialItemsAtom = atomWithStorage<TrialItem[]>(
  "vademecum-trial",
  [],
  createJSONStorage(() => sessionStorage),
);

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

export const clearTrialAtom = atom(null, (_get: Getter, set: Setter) => {
  set(trialItemsAtom, []);
});
