"use client";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { DrawerClose } from "@/components/ui/drawer";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { BASE_PATH } from "@/lib/vademecum/config";
import type { NavData } from "@/lib/vademecum/pages";
import { ChevronDownIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { NavTree } from "./nav-tree";

/**
 * Pozycja „Vademecum” w menu głównym na telefonie: odnośnik do strony
 * głównej i zwijany pod nim spis treści. Renderowana wewnątrz Drawera.
 */
export function VademecumMobileNav({ nav }: { nav: NavData }) {
  const pathname = usePathname();
  // Rozwinięte od razu, jeśli menu otwarto na stronie Vademecum.
  const [defaultOpen] = useState(
    () => pathname === BASE_PATH || pathname.startsWith(`${BASE_PATH}/`),
  );

  return (
    <Collapsible defaultOpen={defaultOpen}>
      <div className="flex items-center gap-1">
        <DrawerClose
          nativeButton={false}
          render={
            <Link
              href={BASE_PATH}
              className={cn(
                navigationMenuTriggerStyle(),
                "h-auto flex-1 justify-start py-1.5",
              )}
            />
          }
        >
          Vademecum
        </DrawerClose>
        <CollapsibleTrigger
          render={
            <Button
              variant="ghost"
              size="icon-sm"
              className="group/vademecum"
              aria-label="Pokaż spis treści Vademecum"
            />
          }
        >
          <ChevronDownIcon className="transition-transform group-aria-expanded/vademecum:rotate-180" />
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="pt-1 pl-3">
        <NavTree nav={nav} inDrawer />
      </CollapsibleContent>
    </Collapsible>
  );
}
