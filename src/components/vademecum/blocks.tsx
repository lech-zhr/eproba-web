import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { inlineText } from "@/lib/vademecum/text";
import type { Block } from "@/lib/vademecum/types";
import { ArrowRightIcon } from "lucide-react";
import { Fragment } from "react";

import { AreasDiagram } from "./areas-diagram";
import { Callout } from "./callout";
import { FaqAccordion } from "./faq-accordion";
import { Funnel } from "./funnel";
import { InlineContent } from "./inline";
import { SelectableItem } from "./selectable-item";
import { HIT, dimmedFor } from "./styles";
import { WatraDiagram } from "./watra-diagram";

const PARAGRAPH = {
  default: "leading-7",
  lead: "text-muted-foreground max-w-prose leading-7",
  signature: "text-muted-foreground text-sm",
  right: "text-right",
} as const;

export function Blocks({ blocks }: { blocks: Block[] }) {
  return blocks.map((block, i) => <BlockView key={i} block={block} />);
}

function BlockView({ block }: { block: Block }) {
  switch (block.t) {
    case "p":
      return (
        <p id={block.id} className={cn(HIT, PARAGRAPH[block.v ?? "default"])}>
          <InlineContent content={block.c} />
        </p>
      );

    case "lede":
      return (
        <div className="bg-card flex flex-col gap-3 rounded-xl border p-5 shadow-sm md:text-base">
          <Blocks blocks={block.blocks} />
        </div>
      );

    case "h3":
      return (
        <h3 className="mt-2 text-lg font-semibold">
          <InlineContent content={block.c} />
        </h3>
      );

    case "list":
      return (
        <ul className="marker:text-muted-foreground flex list-disc flex-col gap-2 pl-5">
          {block.items.map((item, i) => {
            const content = (
              <>
                <InlineContent content={item.c} />
                {item.hr && (
                  <Badge
                    variant="secondary"
                    className="mx-1.5 h-4 px-1.5 align-middle text-[0.65rem]"
                  >
                    HR
                  </Badge>
                )}
              </>
            );
            return block.selectable && item.id && block.source ? (
              <SelectableItem
                key={i}
                id={item.id}
                source={block.source}
                text={inlineText(item.c)}
                hr={item.hr}
              >
                {content}
              </SelectableItem>
            ) : (
              <li
                key={i}
                id={item.id}
                className={cn(HIT, "leading-7", item.hr && dimmedFor("hr"))}
              >
                {content}
              </li>
            );
          })}
        </ul>
      );

    case "ol":
      return (
        <ol className="marker:text-muted-foreground flex list-decimal flex-col gap-3 pl-6 marker:font-semibold">
          {block.items.map((item, i) => (
            <li key={i} className="flex flex-col gap-2 leading-7">
              <span id={item.id} className={HIT}>
                <InlineContent content={item.c} />
              </span>
              {item.blocks && <Blocks blocks={item.blocks} />}
            </li>
          ))}
        </ol>
      );

    case "callout":
      return (
        <Callout kind={block.kind} title={block.title}>
          <Blocks blocks={block.blocks} />
        </Callout>
      );

    case "kap":
      return (
        <div className="border-foreground my-2 flex flex-col gap-2 border-l-2 pl-4">
          <div className="flex items-center gap-2 font-bold">
            <ArrowRightIcon className="size-4 shrink-0" />
            {block.label}
          </div>
          <Blocks blocks={block.blocks} />
        </div>
      );

    case "stepper":
      return (
        <ol className="flex flex-col">
          {block.steps.map((step, i) => {
            const last = i === block.steps.length - 1;
            return (
              <Fragment key={step.id ?? i}>
                <li className="relative grid grid-cols-[2rem_1fr] gap-x-4 pb-6 last:pb-0">
                  <span
                    className={cn(
                      "bg-background z-10 flex size-8 items-center justify-center rounded-full border-2 text-sm font-semibold",
                      step.optional
                        ? "text-muted-foreground border-dashed"
                        : "border-foreground",
                    )}
                  >
                    {step.n}
                  </span>
                  {!last && (
                    <span
                      aria-hidden
                      className="bg-border absolute top-8 bottom-0 left-4 w-px"
                    />
                  )}
                  <div className="flex min-w-0 flex-col gap-3">
                    <h3
                      className={cn(
                        "text-lg leading-8 font-semibold",
                        step.optional && "text-muted-foreground",
                      )}
                    >
                      {step.title}
                    </h3>
                    <Blocks blocks={step.blocks} />
                  </div>
                </li>
                {step.gapAfter && (
                  <li className="text-muted-foreground mb-6 ml-12 w-fit rounded-full border border-dashed px-3 py-0.5 text-xs">
                    {step.gapAfter}
                  </li>
                )}
              </Fragment>
            );
          })}
        </ol>
      );

    case "funnel":
      return (
        <Funnel
          steps={block.steps.map((step, i) => ({
            id: step.id ?? String(i),
            n: step.n,
            label: step.label,
            width: step.width,
            body: (
              <span>
                <InlineContent content={step.c} />
              </span>
            ),
          }))}
        />
      );

    case "faq":
      return (
        <FaqAccordion
          items={block.items.map((item, i) => ({
            id: item.id ?? String(i),
            hitIds: [item.id, ...collectIds(item.a)].filter(
              (id): id is string => !!id,
            ),
            question: <InlineContent content={item.q} />,
            answer: (
              <div className="flex flex-col gap-3 leading-7">
                <Blocks blocks={item.a} />
              </div>
            ),
          }))}
        />
      );

    case "watra":
      return (
        <WatraDiagram id={block.id}>
          <InlineContent content={block.caption} />
        </WatraDiagram>
      );

    case "areas":
      return (
        <AreasDiagram
          items={block.items.map((item) => ({
            corner: item.pos,
            id: item.id,
            content: <InlineContent content={item.c} />,
          }))}
        />
      );

    case "section":
      return (
        <section
          id={block.id}
          className={cn(
            "mt-6 flex scroll-mt-24 flex-col gap-4 first:mt-0",
            dimmedFor(block.mode),
          )}
        >
          <h2 className="text-xl font-semibold tracking-tight text-balance">
            {block.idx && (
              <span className="text-muted-foreground mr-2 font-normal tabular-nums">
                {block.idx}
              </span>
            )}
            <InlineContent content={block.title} />
          </h2>
          <Blocks blocks={block.blocks} />
        </section>
      );
  }
}

function collectIds(blocks: Block[]): string[] {
  return blocks.flatMap((block): string[] => {
    switch (block.t) {
      case "p":
        return block.id ? [block.id] : [];
      case "list":
        return block.items.flatMap((item) => (item.id ? [item.id] : []));
      case "lede":
      case "kap":
      case "callout":
      case "section":
        return collectIds(block.blocks);
      default:
        return [];
    }
  });
}
