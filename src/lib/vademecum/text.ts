import type { Inline } from "./types";

export const collapse = (s: string) => s.replace(/\s+/g, " ").trim();

/** Zwykły tekst z treści z formatowaniem (do wyszukiwarki i zgłoszeń). */
export function inlineText(content: Inline[]): string {
  return collapse(
    content
      .map((node) => {
        if (typeof node === "string") return node;
        if (node.t === "br") return " ";
        if (node.t === "hr-chip") return "HR";
        return inlineText(node.c);
      })
      .join(""),
  );
}

// Zamienia na małe litery i usuwa polskie znaki diakrytyczne znak po znaku,
// więc zachowuje te same indeksy co oryginalny tekst.
export function fold(s: string) {
  return s
    .split("")
    .map((c) => {
      const f = c
        .toLowerCase()
        .normalize("NFD")
        .replace(/[̀-ͯ]/g, "")
        .replace("ł", "l");
      return f.length === 1 ? f : c.toLowerCase();
    })
    .join("");
}
