export type Mode = "ho" | "hr";

export type Inline = string | InlineNode;

export type InlineNode =
  | { t: "strong" | "em" | "b" | "sup"; c: Inline[] }
  | { t: "br" }
  | { t: "link"; page: string; c: Inline[] }
  | { t: "hr-chip" }
  | { t: "xref"; c: Inline[] };

export interface ListItem {
  id?: string;
  c: Inline[];
  /** Drogowskaz adresowany głównie do zdobywających HR. */
  hr?: boolean;
}

export interface Step {
  id?: string;
  /** Numer w kółku (np. "1"); "•" oznacza krok opcjonalny. */
  n: string;
  title: string;
  optional?: boolean;
  /** Podpis wyświetlany między tym a następnym krokiem. */
  gapAfter?: string;
  blocks: Block[];
}

export interface FunnelStep {
  id?: string;
  n: string;
  label: string;
  /** Szerokość paska w procentach. */
  width: number;
  c: Inline[];
}

export interface OlItem {
  id?: string;
  c: Inline[];
  blocks?: Block[];
}

export interface FaqItem {
  id?: string;
  q: Inline[];
  a: Block[];
}

export type AreaCorner = "tl" | "tr" | "bl" | "br";

export type Block =
  | { t: "p"; id?: string; c: Inline[]; v?: "lead" | "signature" | "right" }
  | { t: "lede"; blocks: Block[] }
  | { t: "h3"; c: Inline[] }
  | {
      t: "list";
      items: ListItem[];
      /** Punkty drogowskazów, które można dodać do „Twojej próby”. */
      selectable?: boolean;
      /** Skąd pochodzi lista (uzupełniane w pages.ts). */
      source?: { slug: string; area: string; postawa?: string };
    }
  | {
      t: "callout";
      kind: "info" | "note";
      title?: string;
      blocks: Block[];
    }
  | { t: "stepper"; steps: Step[] }
  | { t: "kap"; label: string; blocks: Block[] }
  | { t: "funnel"; steps: FunnelStep[] }
  | { t: "ol"; items: OlItem[] }
  | { t: "faq"; items: FaqItem[] }
  | { t: "watra"; id?: string; caption: Inline[] }
  | {
      t: "areas";
      items: { pos: AreaCorner; id?: string; c: Inline[] }[];
    }
  | {
      t: "section";
      id: string;
      title: Inline[];
      /** Numer postawy wyświetlany przed tytułem (np. "01"). */
      idx?: string;
      /** Sekcja adresowana tylko do jednego ze stopni. */
      mode?: Mode;
      blocks: Block[];
    };

export type GroupId = "proba" | "obszary";

export interface Page {
  slug: string;
  group?: GroupId;
  eyebrow: string;
  title: string;
  /** Krótszy tytuł w menu bocznym. */
  navTitle: string;
  blocks: Block[];
}
