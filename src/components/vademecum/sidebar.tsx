"use client";

import { buttonVariants } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { cn } from "@/lib/utils";
import { MIN_QUERY_LENGTH, PDF_URL, pageHref } from "@/lib/vademecum/config";
import { DownloadIcon, FlameIcon, SearchIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { NavTree } from "./nav-tree";
import { SearchResults } from "./search-results";
import { useVademecum } from "./vademecum-context";

/** Boczne menu Vademecum (od szerokości lg); na telefonie spis jest w menu głównym. */
export function SidebarContent() {
  const { nav } = useVademecum();
  const [query, setQuery] = useState("");
  const searching = query.trim().length >= MIN_QUERY_LENGTH;

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

      <InputGroup>
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
        <InputGroupInput
          type="text"
          inputMode="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Escape" && setQuery("")}
          placeholder="Szukaj"
          aria-label="Szukaj w Vademecum"
          autoComplete="off"
        />
        {query && (
          <InputGroupAddon align="inline-end">
            <InputGroupButton
              size="icon-xs"
              aria-label="Wyczyść wyszukiwanie"
              onClick={() => setQuery("")}
            >
              <XIcon />
            </InputGroupButton>
          </InputGroupAddon>
        )}
      </InputGroup>

      {searching ? <SearchResults query={query} /> : <NavTree nav={nav} />}

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
