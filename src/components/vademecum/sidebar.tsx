"use client";

import { buttonVariants } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { cn } from "@/lib/utils";
import { MIN_QUERY_LENGTH, PDF_URL, pageHref } from "@/lib/vademecum/config";
import type { NavPage } from "@/lib/vademecum/pages";
import {
  BrainIcon,
  ChevronDownIcon,
  ChurchIcon,
  DownloadIcon,
  FlameIcon,
  GlobeIcon,
  HandHeartIcon,
  HeartPulseIcon,
  HouseIcon,
  LeafIcon,
  type LucideIcon,
  MessagesSquareIcon,
  SearchIcon,
  ShieldIcon,
  SparklesIcon,
  XIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { SearchResults } from "./search-results";
import { useVademecum } from "./vademecum-context";

const AREA_ICONS: Record<string, LucideIcon> = {
  "obszar-bog": ChurchIcon,
  "obszar-charakter": ShieldIcon,
  "obszar-intelekt": BrainIcon,
  "obszar-zdrowie": HeartPulseIcon,
  "obszar-sluzba": HandHeartIcon,
  "obszar-ojczyzny": GlobeIcon,
  "obszar-rodzina": HouseIcon,
  "obszar-pasje": SparklesIcon,
  "obszar-kultura": MessagesSquareIcon,
  "obszar-przyroda": LeafIcon,
};

const linkClass = (active: boolean) =>
  cn(
    "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-muted hover:text-foreground",
    active ? "bg-muted font-medium text-foreground" : "text-muted-foreground",
  );

function NavLink({
  page,
  href,
  number,
  active,
  onNavigate,
}: {
  page: NavPage;
  href: string;
  number?: string;
  active: boolean;
  onNavigate?: () => void;
}) {
  const Icon = AREA_ICONS[page.slug];
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      onClick={onNavigate}
      className={linkClass(active)}
    >
      {number && (
        <span className="text-muted-foreground w-5 shrink-0 text-xs tabular-nums">
          {number}
        </span>
      )}
      {Icon && <Icon className="size-4 shrink-0" />}
      {page.navTitle}
    </Link>
  );
}

export function SidebarContent({ onNavigate }: { onNavigate?: () => void }) {
  const { nav } = useVademecum();
  const pathname = usePathname();
  const [query, setQuery] = useState("");
  const searching = query.trim().length >= MIN_QUERY_LENGTH;

  const hrefOf = (page: NavPage) => pageHref(page.slug);

  return (
    <div className="flex flex-col gap-4">
      <Link
        href={hrefOf(nav.start)}
        onClick={onNavigate}
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

      {searching ? (
        <SearchResults query={query} onNavigate={onNavigate} />
      ) : (
        <nav aria-label="Spis treści" className="flex flex-col gap-1">
          {nav.entries.map((entry) =>
            entry.type === "page" ? (
              <NavLink
                key={entry.page.slug}
                page={entry.page}
                href={hrefOf(entry.page)}
                number={entry.number}
                active={pathname === hrefOf(entry.page)}
                onNavigate={onNavigate}
              />
            ) : (
              <Collapsible key={entry.title} defaultOpen>
                <CollapsibleTrigger className="group/trigger text-muted-foreground hover:bg-muted hover:text-foreground flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors">
                  <span className="w-5 shrink-0 text-left text-xs tabular-nums">
                    {entry.number}
                  </span>
                  {entry.title}
                  <ChevronDownIcon className="ml-auto size-4 transition-transform group-aria-expanded/trigger:rotate-180" />
                </CollapsibleTrigger>
                <CollapsibleContent className="flex flex-col gap-0.5 pt-1 pl-6">
                  {entry.pages.map((page) => (
                    <NavLink
                      key={page.slug}
                      page={page}
                      href={hrefOf(page)}
                      active={pathname === hrefOf(page)}
                      onNavigate={onNavigate}
                    />
                  ))}
                </CollapsibleContent>
              </Collapsible>
            ),
          )}
        </nav>
      )}

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
