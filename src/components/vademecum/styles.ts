import { cn } from "@/lib/utils";
import type { Mode } from "@/lib/vademecum/types";

/** Stylowanie elementu, do którego przewija wynik wyszukiwania. */
export const HIT = "scroll-mt-24 rounded-sm data-hit:animate-hit";

const DIM = "transition-opacity";
const DIM_IN_HO =
  "group-data-[mode=ho]/vad:opacity-45 group-data-[mode=ho]/vad:hover:opacity-85";
const DIM_IN_HR =
  "group-data-[mode=hr]/vad:opacity-45 group-data-[mode=hr]/vad:hover:opacity-85";

/** Przyciemnia treść adresowaną do drugiego ze stopni (HO / HR). */
export const dimmedFor = (mode?: Mode) =>
  mode === "hr" ? cn(DIM, DIM_IN_HO) : mode === "ho" ? cn(DIM, DIM_IN_HR) : "";
