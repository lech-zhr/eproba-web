"use client";

import { type Getter, type Setter, atom } from "jotai";

export interface Hit {
  id: string;
  /** Numer kolejnego otwarcia; pozwala wrócić do tego samego wyniku. */
  n: number;
}

/** Ostatnio otwarty wynik wyszukiwania w Vademecum. */
export const hitAtom = atom<Hit | null>(null);

export const revealAtom = atom(null, (get: Getter, set: Setter, id: string) => {
  set(hitAtom, { id, n: (get(hitAtom)?.n ?? 0) + 1 });
});
