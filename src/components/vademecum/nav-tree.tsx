"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import { pageHref } from "@/lib/vademecum/config";
import type { NavData, NavPage } from "@/lib/vademecum/pages";
import {
  BrainIcon,
  ChevronDownIcon,
  ChurchIcon,
  GlobeIcon,
  HandHeartIcon,
  HeartPulseIcon,
  HouseIcon,
  LeafIcon,
  type LucideIcon,
  MessagesSquareIcon,
  ShieldIcon,
  SparklesIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { ContainerLink, type NavContainer } from "./nav-link";

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

const rowClass = (active = false) =>
  cn(
    "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-muted hover:text-foreground",
    active ? "bg-muted font-medium text-foreground" : "text-muted-foreground",
  );

function NavLink({
  page,
  number,
  active,
  container,
}: {
  page: NavPage;
  number?: string;
  active: boolean;
  container: NavContainer;
}) {
  const Icon = AREA_ICONS[page.slug];
  return (
    <ContainerLink
      container={container}
      href={pageHref(page.slug)}
      aria-current={active ? "page" : undefined}
      className={rowClass(active)}
    >
      {number && (
        <span className="text-muted-foreground w-5 shrink-0 text-xs tabular-nums">
          {number}
        </span>
      )}
      {Icon && <Icon className="size-4 shrink-0" />}
      {page.navTitle}
    </ContainerLink>
  );
}

function NavGroup({
  number,
  title,
  pages,
  container,
}: {
  number: string;
  title: string;
  pages: NavPage[];
  container: NavContainer;
}) {
  const pathname = usePathname();
  // W wąskim menu otwieramy tylko grupę z bieżącą stroną. Wartość ustalamy raz
  // przy montowaniu, bo Collapsible nie lubi zmiany `defaultOpen` w locie.
  const [defaultOpen] = useState(
    () =>
      container === "sidebar" ||
      pages.some((page) => pathname === pageHref(page.slug)),
  );
  return (
    <Collapsible defaultOpen={defaultOpen}>
      <CollapsibleTrigger className="group/trigger text-muted-foreground hover:bg-muted hover:text-foreground flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors">
        <span className="w-5 shrink-0 text-left text-xs tabular-nums">
          {number}
        </span>
        {title}
        <ChevronDownIcon className="ml-auto size-4 transition-transform group-aria-expanded/trigger:rotate-180" />
      </CollapsibleTrigger>
      <CollapsibleContent className="flex flex-col gap-0.5 pt-1 pl-6">
        {pages.map((page) => (
          <NavLink
            key={page.slug}
            page={page}
            active={pathname === pageHref(page.slug)}
            container={container}
          />
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
}

/**
 * Spis treści Vademecum: rozdziały i rozwijane grupy stron. Używany w bocznym
 * menu na desktopie oraz w menu głównym aplikacji (Drawer) na telefonie.
 */
export function NavTree({
  nav,
  container = "sidebar",
}: {
  nav: NavData;
  container?: NavContainer;
}) {
  const pathname = usePathname();
  return (
    <nav aria-label="Spis treści Vademecum" className="flex flex-col gap-1">
      {nav.entries.map((entry) =>
        entry.type === "page" ? (
          <NavLink
            key={entry.page.slug}
            page={entry.page}
            number={entry.number}
            active={pathname === pageHref(entry.page.slug)}
            container={container}
          />
        ) : (
          <NavGroup
            key={entry.title}
            number={entry.number}
            title={entry.title}
            pages={entry.pages}
            container={container}
          />
        ),
      )}
    </nav>
  );
}
