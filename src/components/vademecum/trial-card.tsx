"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { pageHref } from "@/lib/vademecum/config";
import { trialItemsAtom } from "@/state/vademecum-trial";
import { useAtomValue } from "jotai";
import Link from "next/link";

import { useVademecum } from "./vademecum-context";

const MAX_TEXT_LENGTH = 78;

const shorten = (text: string) =>
  text.length > MAX_TEXT_LENGTH
    ? `${text.slice(0, MAX_TEXT_LENGTH - 3)}…`
    : text;

/** „Twoja próba”: lista drogowskazów wybranych z różnych stron. */
export function TrialCard() {
  const items = useAtomValue(trialItemsAtom);
  const { reveal } = useVademecum();

  return (
    <Card size="sm">
      <CardHeader>
        <CardTitle>Wybrane drogowskazy</CardTitle>
        <CardAction>
          <Badge variant="secondary">{items.length}</Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        {items.length === 0 ? (
          <p className="text-muted-foreground text-xs">
            Kliknij „Dodaj” przy drogowskazie, aby zebrać inspiracje do własnych
            zadań.
          </p>
        ) : (
          <ul className="flex max-h-56 flex-col gap-1.5 overflow-y-auto">
            {items.map((item) => (
              <li key={item.id}>
                <Link
                  href={`${pageHref(item.slug)}#${item.id}`}
                  onClick={() => reveal(item.id)}
                  className="bg-muted hover:bg-accent block rounded-md px-2 py-1.5 text-xs leading-snug"
                >
                  {shorten(item.text)}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}
