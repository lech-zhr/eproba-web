import { inlineText } from "@/lib/vademecum/text";
import type { Page } from "@/lib/vademecum/types";

import { Blocks } from "./blocks";
import { ModeToggle } from "./mode-toggle";
import { OnThisPage } from "./on-this-page";
import { Pager } from "./pager";

/** Treść jednej strony Vademecum: kolumna główna i spis „Na tej stronie”. */
export function PageView({ page }: { page: Page }) {
  const sections = page.blocks.flatMap((block) =>
    block.t === "section"
      ? [{ id: block.id, label: inlineText(block.title) }]
      : [],
  );

  return (
    <>
      <div className="min-w-0">
        <div className="bg-background/90 sticky top-0 z-20 mb-6 flex items-center justify-end gap-3 border-b py-2 backdrop-blur">
          <ModeToggle />
        </div>
        <div className="max-w-3xl">
          <article className="flex flex-col gap-4">
            <header className="mb-2 flex flex-col gap-3">
              <p className="text-muted-foreground flex items-center gap-2 text-xs font-medium tracking-wider uppercase">
                <span className="bg-foreground size-1.5 rounded-full" />
                {page.eyebrow}
              </p>
              <h1 className="text-3xl font-bold tracking-tight text-balance md:text-4xl">
                {page.title}
              </h1>
            </header>
            <Blocks blocks={page.blocks} />
          </article>
          <Pager page={page} />
        </div>
      </div>
      <OnThisPage sections={sections} />
    </>
  );
}
