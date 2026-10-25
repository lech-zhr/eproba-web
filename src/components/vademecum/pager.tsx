import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { pageHref } from "@/lib/vademecum/config";
import { getNeighbors, pagerLabel } from "@/lib/vademecum/pages";
import type { Page } from "@/lib/vademecum/types";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import Link from "next/link";

const LINK =
  "h-auto flex-col items-start gap-0.5 p-3 text-left whitespace-normal";

export function Pager({ page }: { page: Page }) {
  const { prev, next } = getNeighbors(page.slug);
  return (
    <nav
      aria-label="Poprzednia i następna strona"
      className="mt-12 grid gap-3 sm:grid-cols-2"
    >
      {prev && (
        <Link
          href={pageHref(prev.slug)}
          className={cn(buttonVariants({ variant: "outline" }), LINK)}
        >
          <span className="text-muted-foreground text-xs tracking-wider uppercase">
            Wstecz
          </span>
          <span className="flex items-center gap-1.5 font-semibold">
            <ArrowLeftIcon className="shrink-0" />
            {pagerLabel(page, prev)}
          </span>
        </Link>
      )}
      {next && (
        <Link
          href={pageHref(next.slug)}
          className={cn(
            buttonVariants({ variant: "outline" }),
            LINK,
            "sm:col-start-2 sm:items-end sm:text-right",
          )}
        >
          <span className="text-muted-foreground text-xs tracking-wider uppercase">
            Dalej
          </span>
          <span className="flex items-center gap-1.5 font-semibold">
            {pagerLabel(page, next)}
            <ArrowRightIcon className="shrink-0" />
          </span>
        </Link>
      )}
    </nav>
  );
}
