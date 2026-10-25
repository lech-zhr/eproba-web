import { Card } from "@/components/ui/card";
import Image from "next/image";
import type { ReactNode } from "react";

const ARROWS = [
  "M22.6 2.23 C24.8 6.33 32.5 7.23 41 7.23",
  "M22.6 13.86 C24.8 17.96 32.5 18.86 41 18.86",
  "M22.6 23.74 C24.8 27.84 32.5 28.74 41 28.74",
  "M21.1 47.54 C25.1 47.54 25.7 45.84 29.7 44.24",
  "M28 60.52 C30 60.52 31.31 58.62 32.81 56.42",
  "M62.4 36.2 C59 38.5 56.59 40.88 53.59 42.88",
  "M66.6 66.49 C70.6 66.49 73.16 59.3 72.16 51.3",
];

type Label = { text: ReactNode; top: number } & (
  { left: number; right?: never } | { right: number; left?: never }
);

const LABELS: Label[] = [
  { text: "siła ducha", right: 71.79, top: 0.07 },
  { text: "siła umysłu", right: 71.79, top: 16.48 },
  { text: "siła ciała", right: 71.79, top: 30.43 },
  { text: "służba", right: 73.72, top: 64 },
  { text: "praca nad sobą", right: 64.87, top: 82.33 },
  { text: "wyczyn", left: 80.77, top: 48.01 },
  {
    text: (
      <>
        szukanie miejsca
        <br />w społeczeństwie
      </>
    ),
    right: 15.38,
    top: 87.67,
  },
];

const FEATHER =
  "linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent), linear-gradient(0deg, transparent, #000 6%, #000 94%, transparent)";

/** Znak Watry Wędrowniczej z opisanymi strzałkami (pola i cele pracy). */
export function WatraDiagram({
  id,
  children,
}: {
  id?: string;
  children: ReactNode;
}) {
  return (
    <Card className="gap-4 p-4">
      <p
        id={id}
        className="text-muted-foreground data-hit:animate-hit scroll-mt-24 border-b border-dashed pb-4 text-center text-sm"
      >
        {children}
      </p>
      <div className="mx-auto w-full max-w-110 overflow-hidden rounded-2xl bg-[#1b2e1c] p-3.5 shadow-lg">
        <div className="@container">
          <div className="relative aspect-[78/70.86]">
            <div className="absolute top-[-12%] left-[17.95%] aspect-square w-[97.44%]">
              <Image
                src="/vademecum/watra.webp"
                alt="Watra Wędrownicza"
                width={2000}
                height={2000}
                className="block size-full"
                style={{
                  WebkitMaskImage: FEATHER,
                  maskImage: FEATHER,
                  WebkitMaskComposite: "source-in",
                  maskComposite: "intersect",
                }}
              />
            </div>
            <svg
              viewBox="0 0 78 70.86"
              preserveAspectRatio="none"
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 size-full overflow-visible"
            >
              <defs>
                <marker
                  id="watra-arrow-head"
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
                    stroke="#efeadb"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </marker>
              </defs>
              {ARROWS.map((d) => (
                <path
                  key={d}
                  d={d}
                  fill="none"
                  stroke="#efeadb"
                  strokeWidth="0.32"
                  strokeLinecap="round"
                  markerEnd="url(#watra-arrow-head)"
                />
              ))}
            </svg>
            {LABELS.map(({ text, top, left, right }, i) => (
              <p
                key={i}
                className="absolute m-0 text-[4.872cqw] leading-[1.15] font-bold whitespace-nowrap text-[#efeadb]"
                style={{
                  top: `${top}%`,
                  ...(right !== undefined
                    ? { right: `${right}%`, textAlign: "right" }
                    : { left: `${left}%` }),
                }}
              >
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
