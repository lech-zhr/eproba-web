"use client";

import type { NavData } from "@/lib/vademecum/pages";
import type { Mode } from "@/lib/vademecum/types";
import { createContext, useContext } from "react";

interface VademecumContextValue {
  mode: Mode;
  setMode: (mode: Mode) => void;
  nav: NavData;
}

export const VademecumContext = createContext<VademecumContextValue | null>(
  null,
);

export function useVademecum() {
  const value = useContext(VademecumContext);
  if (!value)
    throw new Error("useVademecum must be used inside VademecumShell");
  return value;
}
