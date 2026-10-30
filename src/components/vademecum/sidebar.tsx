"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PDF_URL, pageHref } from "@/lib/vademecum/config";
import { DownloadIcon, FlameIcon } from "lucide-react";
import Link from "next/link";

import { NavTree } from "./nav-tree";
import { SearchableNav } from "./searchable-nav";
import { useVademecum } from "./vademecum-context";

/** Boczne menu Vademecum (od szerokości lg); na węższych ekranach spis jest w pasku nawigacji. */
export function SidebarContent() {
  const { nav } = useVademecum();

  return (
    <div className="flex flex-col gap-4">
      <Link
        href={pageHref(nav.start.slug)}
        className="flex items-center gap-3 px-1"
        aria-label="Vademecum – strona główna"
      >
        <FlameIcon className="size-7 shrink-0" />
        <div>
          <div className="text-lg leading-tight font-bold">Vademecum</div>
          <div className="text-muted-foreground text-xs">
            Próby indywidualne · HO / HR
          </div>
        </div>
      </Link>

      <SearchableNav container="sidebar">
        <NavTree nav={nav} />
      </SearchableNav>

      <a
        href={PDF_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(buttonVariants({ variant: "outline" }), "w-full")}
      >
        <DownloadIcon />
        Pobierz pełne wydanie (PDF)
      </a>
    </div>
  );
}
