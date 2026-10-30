"use client";

import type { NavData } from "@/lib/vademecum/pages";

import { NavTree } from "./nav-tree";
import { SearchableNav } from "./searchable-nav";

/** Zawartość rozwijanego menu „Vademecum” na pasku nawigacji (tablet). */
export function VademecumTabletMenu({ nav }: { nav: NavData }) {
  return (
    <div className="max-h-[70vh] w-72 overflow-y-auto p-1">
      <SearchableNav container="menu">
        <NavTree nav={nav} container="menu" />
      </SearchableNav>
    </div>
  );
}
