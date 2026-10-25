"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { WorksheetEditor } from "@/components/worksheets/editor/worksheet-editor";
import type { Task } from "@/lib/schemas/worksheet";
import { cn } from "@/lib/utils";
import { trialTasks } from "@/lib/vademecum/trial";
import { trialItemsAtom } from "@/state/vademecum-trial";
import { User } from "@/types/user";
import { useAtomValue } from "jotai";
import Link from "next/link";
import React, { useState } from "react";
import { useIsClient } from "usehooks-ts";

/**
 * Kreator próby z drogowskazów wybranych w Vademecum („Twoja próba”).
 * Działa jak tworzenie próby z szablonu: najpierw wybór zadań, potem edytor.
 */
export const CreateWorksheetFromVademecum = ({
  redirectTo,
  currentUser,
}: {
  redirectTo: string;
  currentUser: User;
}) => {
  const isClient = useIsClient();
  const items = useAtomValue(trialItemsAtom);
  const [excluded, setExcluded] = useState<string[]>([]);
  const [tasks, setTasks] = useState<Task[] | null>(null);

  // Wybór czytamy z sessionStorage, więc przed hydracją nic nie pokazujemy.
  if (!isClient) return null;

  if (tasks) {
    return (
      <WorksheetEditor
        mode="create"
        redirectTo={redirectTo}
        initialData={{ tasks }}
        currentUser={currentUser}
      />
    );
  }

  const selected = items.filter((item) => !excluded.includes(item.id));

  return (
    <Card>
      <CardHeader>
        <CardTitle>Próba z drogowskazów Vademecum</CardTitle>
        <CardDescription>
          Wybrane drogowskazy staną się zadaniami indywidualnymi w nowej próbie.
          Treść drogowskazu jest punktem wyjścia, w edytorze ułożysz z niej
          własne, konkretne zadanie.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        {items.length === 0 ? (
          <p className="text-muted-foreground text-sm">
            Nie wybrano jeszcze żadnych drogowskazów. Wybierz je w Vademecum
            przyciskiem „Dodaj”.
          </p>
        ) : (
          items.map((item) => {
            const checkboxId = `vademecum-${item.id}`;
            return (
              <div
                key={item.id}
                className="flex items-start gap-3 rounded-md border p-3"
              >
                <Checkbox
                  id={checkboxId}
                  checked={!excluded.includes(item.id)}
                  onCheckedChange={(checked) =>
                    setExcluded((prev) =>
                      checked
                        ? prev.filter((id) => id !== item.id)
                        : [...prev, item.id],
                    )
                  }
                />
                <Label
                  htmlFor={checkboxId}
                  className="flex-1 cursor-pointer flex-col items-start gap-1"
                >
                  <span className="leading-snug font-medium">{item.text}</span>
                  <span className="text-muted-foreground text-xs font-normal">
                    {item.area}
                    {item.postawa ? ` · ${item.postawa}` : ""}
                  </span>
                </Label>
              </div>
            );
          })
        )}
      </CardContent>
      <CardFooter className="justify-between">
        <Link
          href="/vademecum"
          className={cn(buttonVariants({ variant: "outline" }))}
        >
          Wróć do Vademecum
        </Link>
        <Button
          disabled={selected.length === 0}
          onClick={() => setTasks(trialTasks(selected))}
        >
          Przejdź do edycji
        </Button>
      </CardFooter>
    </Card>
  );
};
