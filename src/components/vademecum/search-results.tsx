"use client";

import { MAX_RESULTS, pageHref } from "@/lib/vademecum/config";
import type { Range, SearchResults as Results } from "@/lib/vademecum/search";
import Link from "next/link";
import { type ReactNode, useEffect, useState } from "react";

import { useVademecum } from "./vademecum-context";

const plural = (n: number) => {
  if (n === 1) return "wynik";
  const last = n % 10;
  const teens = n % 100 >= 12 && n % 100 <= 14;
  return last >= 2 && last <= 4 && !teens ? "wyniki" : "wyników";
};

type SearchModule = typeof import("@/lib/vademecum/search");

function Highlighted({ text, ranges }: { text: string; ranges: Range[] }) {
  const nodes: ReactNode[] = [];
  let pos = 0;
  ranges.forEach(([start, end], i) => {
    nodes.push(text.slice(pos, start));
    nodes.push(
      <mark key={i} className="bg-warning/30 rounded-sm text-inherit">
        {text.slice(start, end)}
      </mark>,
    );
    pos = end;
  });
  nodes.push(text.slice(pos));
  return <>{nodes}</>;
}

export function SearchResults({ query }: { query: string }) {
  const { reveal } = useVademecum();
  // Indeks z treścią ładujemy dopiero przy pierwszym wyszukiwaniu.
  const [searchModule, setSearchModule] = useState<SearchModule | null>(null);
  useEffect(() => {
    let cancelled = false;
    import("@/lib/vademecum/search").then((m) => {
      if (!cancelled) setSearchModule(m);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  if (!searchModule) {
    return <p className="text-muted-foreground px-1 text-sm">Szukam…</p>;
  }

  const results: Results | null = searchModule.search(query);
  if (!results) return null;
  if (results.total === 0) {
    return (
      <p className="text-muted-foreground px-1 text-sm">
        Żaden drogowskaz nie pasuje do wyszukiwania.
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-1 text-sm" aria-live="polite">
      <p className="text-muted-foreground px-1 text-xs">
        {results.total} {plural(results.total)}
      </p>
      {results.entries.map((entry, i, entries) => {
        const heading = entry.area !== entries[i - 1]?.area ? entry.area : null;
        const href = `${pageHref(entry.slug)}#${entry.id}`;
        return (
          <div key={entry.id} className="flex flex-col gap-1">
            {heading && (
              <h3 className="text-muted-foreground mt-2 px-1 text-xs font-semibold tracking-wide uppercase">
                {heading}
              </h3>
            )}
            <Link
              href={href}
              onClick={() => reveal(entry.id)}
              className="hover:bg-muted flex flex-col gap-0.5 rounded-md px-2 py-1.5"
            >
              {(entry.group || entry.hr) && (
                <span className="text-muted-foreground flex items-center gap-1.5 text-xs">
                  {entry.group}
                  {entry.hr && (
                    <span className="bg-secondary rounded px-1 text-[0.65rem] font-semibold">
                      HR
                    </span>
                  )}
                </span>
              )}
              <span className="text-foreground/90 leading-snug">
                <Highlighted
                  text={entry.text}
                  ranges={searchModule.matchRanges(entry.folded, results.terms)}
                />
              </span>
            </Link>
          </div>
        );
      })}
      {results.total > MAX_RESULTS && (
        <p className="text-muted-foreground px-1 text-xs">
          …i jeszcze {results.total - MAX_RESULTS}. Zawęź wyszukiwanie.
        </p>
      )}
    </div>
  );
}
