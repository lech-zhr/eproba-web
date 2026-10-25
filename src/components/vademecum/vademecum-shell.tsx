"use client";

import type { NavData } from "@/lib/vademecum/pages";
import type { Mode } from "@/lib/vademecum/types";
import { usePathname } from "next/navigation";
import {
  type ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import { SidebarContent } from "./sidebar";
import { VademecumContext } from "./vademecum-context";

const HIT_HIGHLIGHT_MS = 2500;

export function VademecumShell({
  nav,
  children,
}: {
  nav: NavData;
  children: ReactNode;
}) {
  const [mode, setMode] = useState<Mode>("ho");
  const [hit, setHit] = useState<{ id: string; n: number } | null>(null);
  const pathname = usePathname();
  const handledHit = useRef(0);

  const reveal = useCallback(
    (id: string) => setHit((prev) => ({ id, n: (prev?.n ?? 0) + 1 })),
    [],
  );

  // Przewija do trafienia i krótko je podświetla. Po przejściu na inną stronę
  // efekt odpala się ponownie, gdy jej treść już jest w DOM.
  useEffect(() => {
    if (!hit || handledHit.current === hit.n) return;
    // dajemy rozwijanym elementom (FAQ, lejek) chwilę na otwarcie
    const timer = window.setTimeout(() => {
      const el = document.getElementById(hit.id);
      if (!el) return;
      handledHit.current = hit.n;
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      el.setAttribute("data-hit", "");
      window.setTimeout(() => el.removeAttribute("data-hit"), HIT_HIGHLIGHT_MS);
    }, 60);
    return () => window.clearTimeout(timer);
  }, [hit, pathname]);

  return (
    <VademecumContext.Provider value={{ mode, setMode, nav, hit, reveal }}>
      <div
        data-mode={mode}
        className="group/vad grid items-start gap-x-8 lg:grid-cols-[15rem_minmax(0,1fr)] xl:grid-cols-[15rem_minmax(0,1fr)_13rem]"
      >
        <aside className="sticky top-4 hidden max-h-[calc(100dvh-2rem)] overflow-y-auto pr-1 lg:block">
          <SidebarContent />
        </aside>
        {children}
      </div>
    </VademecumContext.Provider>
  );
}
