import { START_SLUG } from "./config";
import { PAGES as RAW_PAGES } from "./content";
import type { Block, GroupId, Page } from "./types";

export const GROUPS: Record<GroupId, { number: string; title: string }> = {
  proba: { number: "02", title: "Układanie próby" },
  obszary: { number: "03", title: "Drogowskazy" },
};

export type NavEntry =
  | { type: "page"; slug: string; number: string }
  | { type: "group"; id: GroupId };

export const NAV: NavEntry[] = [
  { type: "page", slug: "wedrownik", number: "01" },
  { type: "group", id: "proba" },
  { type: "group", id: "obszary" },
];

// Nadaje stabilne identyfikatory blokom tekstowym. Używają ich kotwice
// wyników wyszukiwania i przycisk „Zgłoś poprawkę”.
function withIds(page: Page): Page {
  let n = 0;
  const nextId = () => `${page.slug}-${++n}`;

  const mapBlocks = (blocks: Block[]): Block[] => blocks.map(mapBlock);

  const mapBlock = (block: Block): Block => {
    switch (block.t) {
      case "p":
        return { ...block, id: nextId() };
      case "list":
        return {
          ...block,
          slug: page.slug,
          items: block.items.map((item) => ({ ...item, id: nextId() })),
        };
      case "lede":
      case "kap":
      case "callout":
      case "section":
        return { ...block, blocks: mapBlocks(block.blocks) };
      case "stepper":
        return {
          ...block,
          steps: block.steps.map((step) => ({
            ...step,
            id: nextId(),
            blocks: mapBlocks(step.blocks),
          })),
        };
      case "funnel":
        return {
          ...block,
          steps: block.steps.map((step) => ({ ...step, id: nextId() })),
        };
      case "ol":
        return {
          ...block,
          items: block.items.map((item) => ({
            ...item,
            id: nextId(),
            blocks: item.blocks && mapBlocks(item.blocks),
          })),
        };
      case "faq":
        return {
          ...block,
          items: block.items.map((item) => ({
            ...item,
            id: nextId(),
            a: mapBlocks(item.a),
          })),
        };
      case "watra":
        return { ...block, id: nextId() };
      case "areas":
        return {
          ...block,
          items: block.items.map((item) => ({ ...item, id: nextId() })),
        };
      default:
        return block;
    }
  };

  return { ...page, blocks: mapBlocks(page.blocks) };
}

export const PAGES: Page[] = RAW_PAGES.map(withIds);

const BY_SLUG = new Map(PAGES.map((page) => [page.slug, page]));

export const getPage = (slug: string) => BY_SLUG.get(slug);

export const pagesInGroup = (id: GroupId) =>
  PAGES.filter((page) => page.group === id);

export function getNeighbors(slug: string) {
  const i = PAGES.findIndex((page) => page.slug === slug);
  return {
    prev: i > 0 ? PAGES[i - 1] : undefined,
    next: i >= 0 && i < PAGES.length - 1 ? PAGES[i + 1] : undefined,
  };
}

/** Tytuł sąsiedniej strony; przy przejściu między grupami z jej nazwą. */
export function pagerLabel(from: Page, to: Page) {
  const crossesGroups = from.group && to.group && from.group !== to.group;
  return crossesGroups ? `${GROUPS[to.group!].title}: ${to.title}` : to.title;
}

export interface NavPage {
  slug: string;
  title: string;
  navTitle: string;
}

export interface NavData {
  start: NavPage;
  entries: (
    | { type: "page"; number: string; page: NavPage }
    | { type: "group"; number: string; title: string; pages: NavPage[] }
  )[];
}

const toNavPage = ({ slug, title, navTitle }: Page): NavPage => ({
  slug,
  title,
  navTitle,
});

/** Lekka reprezentacja menu przekazywana do komponentów klienckich. */
export function buildNav(): NavData {
  return {
    start: toNavPage(BY_SLUG.get(START_SLUG)!),
    entries: NAV.map((entry) =>
      entry.type === "page"
        ? {
            type: "page",
            number: entry.number,
            page: toNavPage(BY_SLUG.get(entry.slug)!),
          }
        : {
            type: "group",
            number: GROUPS[entry.id].number,
            title: GROUPS[entry.id].title,
            pages: pagesInGroup(entry.id).map(toNavPage),
          },
    ),
  };
}
