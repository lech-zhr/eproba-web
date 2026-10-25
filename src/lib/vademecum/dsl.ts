import type {
  AreaCorner,
  Block,
  FaqItem,
  FunnelStep,
  Inline,
  ListItem,
  Mode,
  OlItem,
  Step,
} from "./types";

// Skróty do zapisywania treści Vademecum jako danych (patrz content/*.ts).

export const strong = (...c: Inline[]): Inline => ({ t: "strong", c });
export const em = (...c: Inline[]): Inline => ({ t: "em", c });
export const b = (...c: Inline[]): Inline => ({ t: "b", c });
export const sup = (...c: Inline[]): Inline => ({ t: "sup", c });
export const br: Inline = { t: "br" };
export const hrChip: Inline = { t: "hr-chip" };
export const link = (page: string, ...c: Inline[]): Inline => ({
  t: "link",
  page,
  c,
});
export const xref = (...c: Inline[]): Inline => ({ t: "xref", c });

export const p = (...c: Inline[]): Block => ({ t: "p", c });
export const lead = (...c: Inline[]): Block => ({ t: "p", c, v: "lead" });
export const signature = (...c: Inline[]): Block => ({
  t: "p",
  c,
  v: "signature",
});
export const right = (...c: Inline[]): Block => ({ t: "p", c, v: "right" });
export const lede = (...blocks: Block[]): Block => ({ t: "lede", blocks });
export const h3 = (...c: Inline[]): Block => ({ t: "h3", c });

export const li = (...c: Inline[]): ListItem => ({ c });
export const hrLi = (...c: Inline[]): ListItem => ({ c, hr: true });
export const ul = (...items: ListItem[]): Block => ({ t: "list", items });

export const callout = (
  kind: "info" | "note",
  opts: { title?: string },
  ...blocks: Block[]
): Block => ({ t: "callout", kind, ...opts, blocks });

export const step = (
  opts: {
    n: string;
    title: string;
    optional?: boolean;
    gapAfter?: string;
  },
  ...blocks: Block[]
): Step => ({ ...opts, blocks });
export const stepper = (...steps: Step[]): Block => ({ t: "stepper", steps });

export const kap = (label: string, ...blocks: Block[]): Block => ({
  t: "kap",
  label,
  blocks,
});

export const funnelStep = (
  n: string,
  label: string,
  width: number,
  ...c: Inline[]
): FunnelStep => ({ n, label, width, c });
export const funnel = (...steps: FunnelStep[]): Block => ({
  t: "funnel",
  steps,
});

export const olItem = (c: Inline[], ...blocks: Block[]): OlItem => ({
  c,
  ...(blocks.length > 0 ? { blocks } : {}),
});
export const ol = (...items: OlItem[]): Block => ({ t: "ol", items });

export const faqItem = (q: Inline[], ...a: Block[]): FaqItem => ({ q, a });
export const faq = (...items: FaqItem[]): Block => ({ t: "faq", items });

export const watra = (...caption: Inline[]): Block => ({
  t: "watra",
  caption,
});
export const areas = (...items: { pos: AreaCorner; c: Inline[] }[]): Block => ({
  t: "areas",
  items,
});
export const area = (pos: AreaCorner, ...c: Inline[]) => ({ pos, c });

export const section = (
  opts: { id: string; title: Inline[]; idx?: string; mode?: Mode },
  ...blocks: Block[]
): Block => ({ t: "section", ...opts, blocks });
