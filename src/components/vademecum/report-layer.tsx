"use client";

import { cn } from "@/lib/utils";
import { CONTENT_DIR, REPORT_EMAIL } from "@/lib/vademecum/config";
import { collapse } from "@/lib/vademecum/text";
import { PencilLineIcon } from "lucide-react";
import {
  type MouseEvent,
  type ReactNode,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

const MIN_TEXT_LENGTH = 12;
const QUOTE_LENGTH = 60;
const EDGE_GAP = 8;

const asQuote = (s: string) => collapse(s).replace(/"/g, "'");

function quoteOf(el: Element) {
  const text = asQuote(el.textContent ?? "");
  if (text.length <= QUOTE_LENGTH) return text;
  const cut = text.slice(0, QUOTE_LENGTH);
  const space = cut.lastIndexOf(" ");
  return `${space > QUOTE_LENGTH / 2 ? cut.slice(0, space) : cut}...`;
}

/** Najbliższy fragment tekstu, który da się zgłosić do poprawki. */
function reportableAt(node: EventTarget | null) {
  if (!(node instanceof Element)) return null;
  let el = node.closest<HTMLElement>("[data-report]");
  while (el) {
    if ((el.textContent ?? "").trim().length >= MIN_TEXT_LENGTH) return el;
    el = el.parentElement?.closest<HTMLElement>("[data-report]") ?? null;
  }
  return null;
}

/**
 * Pływający przycisk „Zgłoś poprawkę”: podąża za akapitem, nad którym jest
 * kursor (lub który dotknięto), i otwiera maila z cytatem oraz plikiem treści.
 */
export function ReportLayer({
  slug,
  children,
}: {
  slug: string;
  children: ReactNode;
}) {
  const [target, setTarget] = useState<HTMLElement | null>(null);
  const [position, setPosition] = useState<{ top: number; left: number }>();
  const button = useRef<HTMLAnchorElement>(null);

  const place = useCallback(() => {
    if (!target || !button.current) return;
    const r = target.getBoundingClientRect();
    const { offsetWidth: w, offsetHeight: h } = button.current;
    setPosition({
      top: Math.min(
        Math.max(r.top - h / 2, EDGE_GAP),
        Math.max(r.bottom - h, EDGE_GAP),
      ),
      left: Math.max(
        EDGE_GAP,
        Math.min(r.right - w - 4, window.innerWidth - w - EDGE_GAP),
      ),
    });
  }, [target]);

  useLayoutEffect(place, [place]);

  useEffect(() => {
    const hide = () => setTarget(null);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && hide();
    window.addEventListener("scroll", hide, { passive: true });
    window.addEventListener("resize", hide);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", hide);
      window.removeEventListener("resize", hide);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  const select = (e: MouseEvent) => {
    const el = reportableAt(e.target);
    if (el) setTarget(el);
  };

  const onClick = (e: MouseEvent) => {
    const el = reportableAt(e.target);
    if (!el) {
      if (!(e.target as Element).closest("[data-report-button]")) {
        setTarget(null);
      }
      return;
    }
    setTarget(el);
    // układ może się przesunąć po kliknięciu (rozwinięcie FAQ, lejka)
    window.setTimeout(place, 400);
  };

  const quote = target ? quoteOf(target) : "";
  const subject = `Vademecum: zgłoszenie poprawki (${slug})`;
  const message = `do poprawy "${quote}" plik: ${CONTENT_DIR}/${slug}.ts`;

  return (
    <div onMouseOver={select} onClick={onClick}>
      {children}
      <a
        ref={button}
        data-report-button=""
        href={`mailto:${REPORT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`}
        aria-label="Zgłoś poprawkę do tego akapitu"
        style={position}
        className={cn(
          "bg-background text-muted-foreground hover:bg-muted hover:text-foreground fixed z-40 flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium shadow-md transition-opacity",
          target ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <PencilLineIcon className="size-3" />
        Zgłoś poprawkę
      </a>
    </div>
  );
}
