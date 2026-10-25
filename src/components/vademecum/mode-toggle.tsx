"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Mode } from "@/lib/vademecum/types";

import { useVademecum } from "./vademecum-context";

export function ModeToggle() {
  const { mode, setMode } = useVademecum();
  return (
    <Tabs value={mode} onValueChange={(value) => setMode(value as Mode)}>
      <TabsList aria-label="Zdobywany stopień">
        <TabsTrigger value="ho">
          <span aria-hidden className="sm:hidden">
            HO
          </span>
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
            Harcerz Orli
          </span>
        </TabsTrigger>
        <TabsTrigger value="hr">
          <span aria-hidden className="sm:hidden">
            HR
          </span>
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
            Harcerz Rzeczypospolitej
          </span>
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
