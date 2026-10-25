import { cn } from "@/lib/utils";
import type { AreaCorner } from "@/lib/vademecum/types";
import Image from "next/image";
import type { ReactNode } from "react";

const WIDE_ARROWS = [
  "M30 27 C34 40 52 46 74 44.5",
  "M130 27 C128 38 112 48 96.5 47.5",
  "M28 83 C30 72 44 66 59.5 64.8",
  "M132 83 C128 78 112 77 98 76.8",
];

const NARROW_ARROWS = [
  "M24 26 C25 37 36 44 46 45",
  "M76 26 C75 37 70 46 65.4 48.5",
  "M24 78 C24 72 27 67 30.8 65.3",
  "M76 78 C74 77 70 77 66.8 76.6",
];

const CORNER_CLASS: Record<AreaCorner, string> = {
  tl: "top-0 left-0",
  tr: "top-0 right-0 text-right",
  bl: "bottom-0 left-0",
  br: "right-0 bottom-0 text-right",
};

function Arrows({
  id,
  viewBox,
  paths,
  className,
}: {
  id: string;
  viewBox: string;
  paths: string[];
  className: string;
}) {
  return (
    <svg
      viewBox={viewBox}
      preserveAspectRatio="none"
      aria-hidden="true"
      className={cn(
        "text-muted-foreground pointer-events-none absolute inset-0 size-full overflow-visible",
        className,
      )}
    >
      <defs>
        <marker
          id={id}
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="5"
          markerHeight="5"
          orient="auto"
        >
          <path
            d="M1.5 1.5 L8.5 5 L1.5 8.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </marker>
      </defs>
      {paths.map((d) => (
        <path
          key={d}
          d={d}
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeLinecap="round"
          markerEnd={`url(#${id})`}
        />
      ))}
    </svg>
  );
}

/** Ognisko i cztery wskazówki, jak wybierać obszary życia do próby. */
export function AreasDiagram({
  items,
}: {
  items: {
    corner: AreaCorner;
    id?: string;
    report?: boolean;
    content: ReactNode;
  }[];
}) {
  return (
    <figure className="bg-card @container my-1 rounded-xl border px-3 py-4">
      <div className="relative mx-auto aspect-[160/110] max-w-160 @max-[560px]:aspect-[100/104]">
        <Arrows
          id="areas-head-wide"
          viewBox="0 0 160 110"
          paths={WIDE_ARROWS}
          className="@max-[560px]:hidden"
        />
        <Arrows
          id="areas-head-narrow"
          viewBox="0 0 100 104"
          paths={NARROW_ARROWS}
          className="hidden @max-[560px]:block"
        />
        <Image
          src="/vademecum/obszar-flame.png"
          alt="Ognisko"
          width={761}
          height={926}
          className="absolute top-[25.45%] left-[38.125%] w-[23.75%] @max-[560px]:top-[27.88%] @max-[560px]:left-[31%] @max-[560px]:w-[38%] dark:invert"
        />
        {items.map(({ corner, id, report = true, content }) => (
          <p
            key={corner}
            id={id}
            data-report={report ? "" : undefined}
            className={cn(
              "text-muted-foreground data-hit:animate-hit [&_strong]:text-foreground absolute w-[36%] text-[clamp(0.78rem,2.5cqw,1.05rem)] leading-snug @max-[560px]:w-[46%] @max-[560px]:text-xs",
              CORNER_CLASS[corner],
            )}
          >
            {content}
          </p>
        ))}
      </div>
    </figure>
  );
}
