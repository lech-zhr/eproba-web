import { MAX_RESULTS, MIN_QUERY_LENGTH } from "./config";
import { PAGES } from "./pages";
import { collapse, fold, inlineText } from "./text";
import type { Block, Inline, Page } from "./types";

const MIN_TEXT_LENGTH = 8;

export interface SearchEntry {
  /** Identyfikator elementu na stronie (kotwica wyniku). */
  id: string;
  slug: string;
  /** Tytuł strony, na której jest wynik. */
  area: string;
  /** Nagłówek części strony (postawa, krok, pytanie). */
  group: string;
  text: string;
  folded: string;
  foldedGroup: string;
  hr: boolean;
}

export type Range = [start: number, end: number];

function pageEntries(page: Page): SearchEntry[] {
  const entries: SearchEntry[] = [];

  const add = (
    id: string | undefined,
    content: Inline[],
    group: string,
    hr = false,
  ) => {
    const text = inlineText(content);
    if (!id || text.length < MIN_TEXT_LENGTH) return;
    entries.push({
      id,
      slug: page.slug,
      area: page.title,
      group,
      text,
      folded: fold(text),
      foldedGroup: fold(group),
      hr,
    });
  };

  const walk = (blocks: Block[], group: string) => {
    for (const block of blocks) {
      switch (block.t) {
        case "p":
          if (block.v !== "signature") add(block.id, block.c, group);
          break;
        case "list":
          for (const item of block.items) add(item.id, item.c, group, item.hr);
          break;
        case "lede":
        case "kap":
        case "callout":
          walk(block.blocks, group);
          break;
        case "section":
          walk(block.blocks, inlineText(block.title));
          break;
        case "stepper":
          for (const step of block.steps) walk(step.blocks, step.title);
          break;
        case "funnel":
          for (const step of block.steps) add(step.id, step.c, "");
          break;
        case "ol":
          for (const item of block.items) {
            add(item.id, item.c, group);
            if (item.blocks) walk(item.blocks, group);
          }
          break;
        case "faq":
          for (const item of block.items) {
            add(item.id, item.q, "");
            walk(item.a, inlineText(item.q));
          }
          break;
        case "watra":
          add(block.id, block.caption, group);
          break;
        case "areas":
          for (const item of block.items) add(item.id, item.c, group);
          break;
        case "h3":
          break;
      }
    }
  };

  walk(page.blocks, "");
  return entries;
}

let index: SearchEntry[] | null = null;

const getIndex = () => (index ??= PAGES.flatMap(pageEntries));

/** Wszystkie wystąpienia szukanych słów jako połączone przedziały [start, end). */
export function matchRanges(folded: string, terms: string[]): Range[] {
  const ranges: Range[] = [];
  for (const term of terms) {
    for (
      let i = folded.indexOf(term);
      i >= 0;
      i = folded.indexOf(term, i + term.length)
    ) {
      ranges.push([i, i + term.length]);
    }
  }
  ranges.sort((a, b) => a[0] - b[0]);
  const merged: Range[] = [];
  for (const range of ranges) {
    const last = merged[merged.length - 1];
    if (last && range[0] <= last[1]) last[1] = Math.max(last[1], range[1]);
    else merged.push([...range]);
  }
  return merged;
}

export interface SearchResults {
  total: number;
  terms: string[];
  entries: SearchEntry[];
}

export function search(rawQuery: string): SearchResults | null {
  const query = collapse(rawQuery);
  if (query.length < MIN_QUERY_LENGTH) return null;
  const terms = fold(query).split(" ");
  const matches = getIndex().filter((entry) => {
    const haystack = `${entry.folded} ${entry.foldedGroup}`;
    return terms.every((term) => haystack.includes(term));
  });
  return {
    total: matches.length,
    terms,
    entries: matches.slice(0, MAX_RESULTS),
  };
}
