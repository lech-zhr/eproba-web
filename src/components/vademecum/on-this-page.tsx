"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const SCROLL_OFFSET = 110;

export function OnThisPage({
  sections,
}: {
  sections: { id: string; label: string }[];
}) {
  const [active, setActive] = useState(sections[0]?.id);

  // Aktywna jest ostatnia sekcja, której początek minął górę ekranu.
  useEffect(() => {
    const update = () => {
      let current = sections[0]?.id;
      for (const { id } of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top - SCROLL_OFFSET <= 0) {
          current = id;
        }
      }
      setActive(current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [sections]);

  return (
    <aside className="sticky top-4 hidden xl:block">
      {sections.length > 0 && (
        <nav aria-label="Na tej stronie" className="flex flex-col gap-2">
          <h2 className="text-muted-foreground text-xs font-semibold tracking-wider uppercase">
            Na tej stronie
          </h2>
          <ul className="border-l">
            {sections.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={active === id ? "location" : undefined}
                  className={cn(
                    "text-muted-foreground hover:text-foreground -ml-px block border-l-2 border-transparent py-1 pl-3 text-sm leading-snug transition-colors",
                    active === id &&
                      "border-foreground text-foreground font-medium",
                  )}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </aside>
  );
}
