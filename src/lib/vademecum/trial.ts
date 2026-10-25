import type { Task } from "@/lib/schemas/worksheet";
import type { TrialItem } from "@/state/vademecum-trial";
import { v4 as uuid } from "uuid";

/** Opis zadania wskazujący, z którego miejsca Vademecum pochodzi drogowskaz. */
export function trialItemDescription({ area, postawa }: TrialItem) {
  return postawa
    ? `Drogowskaz z Vademecum. Obszar: ${area}. Postawa: ${postawa}.`
    : `Drogowskaz z Vademecum. Obszar: ${area}.`;
}

/**
 * Zadania indywidualne ułożone z wybranych drogowskazów. Treść drogowskazu
 * jest punktem wyjścia, który harcerz przeredaguje w kreatorze próby.
 */
export function trialTasks(items: TrialItem[]): Task[] {
  return items.map((item, order) => ({
    id: uuid(),
    name: item.text,
    description: trialItemDescription(item),
    category: "individual",
    order,
    templateNotes: "",
  }));
}
