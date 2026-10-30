"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { DrawerClose } from "@/components/ui/drawer";
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
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type ReactElement, useState } from "react";

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
  inDrawer,
}: {
  page: NavPage;
  number?: string;
  active: boolean;
  inDrawer: boolean;
}) {
  const Icon = AREA_ICONS[page.slug];
  const content = (
    <>
      {number && (
        <span className="text-muted-foreground w-5 shrink-0 text-xs tabular-nums">
          {number}
        </span>
      )}
      {Icon && <Icon className="size-4 shrink-0" />}
      {page.navTitle}
    </>
  );
  const link: ReactElement = (
    <Link
      href={pageHref(page.slug)}
      aria-current={active ? "page" : undefined}
      className={rowClass(active)}
    />
  );
  // W menu głównym (Drawer) wybór strony zamyka panel.
  return inDrawer ? (
    <DrawerClose nativeButton={false} render={link}>
      {content}
    </DrawerClose>
  ) : (
    <Link
      href={pageHref(page.slug)}
      aria-current={active ? "page" : undefined}
      className={rowClass(active)}
    >
      {content}
    </Link>
  );
}

function NavGroup({
  number,
  title,
  pages,
  inDrawer,
}: {
  number: string;
  title: string;
  pages: NavPage[];
  inDrawer: boolean;
}) {
  const pathname = usePathname();
  // W wąskim menu otwieramy tylko grupę z bieżącą stroną. Wartość ustalamy raz
  // przy montowaniu, bo Collapsible nie lubi zmiany `defaultOpen` w locie.
  const [defaultOpen] = useState(
    () => !inDrawer || pages.some((page) => pathname === pageHref(page.slug)),
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
            inDrawer={inDrawer}
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
  inDrawer = false,
}: {
  nav: NavData;
  inDrawer?: boolean;
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
            inDrawer={inDrawer}
          />
        ) : (
          <NavGroup
            key={entry.title}
            number={entry.number}
            title={entry.title}
            pages={entry.pages}
            inDrawer={inDrawer}
          />
        ),
      )}
    </nav>
  );
}
