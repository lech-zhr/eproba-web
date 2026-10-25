import { area, areas, ol, olItem, p, strong } from "../dsl";
import type { Page } from "../types";

export const probaObszary: Page = {
  slug: "proba-obszary",
  group: "proba",
  eyebrow: "02 · Układanie próby",
  title: "Nad którymi obszarami pracować?",
  navTitle: "Które obszary wybrać?",
  blocks: [
    p(
      "Człowiek powinien pracować nad wszystkimi obszarami swojego życia, ale nie nad wszystkimi naraz. Możesz w ramach zadania łączyć różne obszary życia, ale nie przejmuj się, jeśli któregoś w ogóle w niej nie poruszysz – ostatecznie służba i praca nad sobą trwają całe życie.",
    ),
    p(
      "Wybierając obszary, w których chcesz się rozwinąć przez zadania próby, kieruj się następującymi wskazówkami.",
    ),
    areas(
      area(
        "tl",
        strong("ogień na środku pozwala szybciej rozpalić całość –"),
        " niektóre obszary są ważniejsze",
      ),
      area(
        "tr",
        strong("wzmacniaj ogień, który już płonie –"),
        " rozwijaj swoje mocne strony",
      ),
      area(
        "bl",
        strong("celem jest rozpalenie całego polana –"),
        " rozwój we wszystkich obszarach",
      ),
      area(
        "br",
        strong("osuszaj zawilgocone obszary –"),
        " zmniejszaj swoje deficyty",
      ),
    ),
    ol(
      olItem([
        "W pierwszej kolejności zwróć uwagę na te obszary, w których: chciałbyś szczególnie podjąć pracę nad sobą, np. masz plany i marzenia z nimi związane, oraz w których jesteś uzdolniony lub masz predyspozycje. Staraj się je rozwinąć tak, aby uczynić z nich Twoje mocne strony.",
      ]),
      olItem([
        "W drugiej kolejności weź pod uwagę te obszary, w których masz wyraźne problemy, niedomagania czy deficyty i staraj się je zredukować.",
      ]),
      olItem([
        "Pamiętaj też, że rozwój człowieka powinien być całościowy, tzn. na swojej ścieżce harcerskiej powinieneś rozwijać się we wszystkich obszarach. Zastanów się, czy jakieś obszary życia nie zostały pominięte w Twoich próbach na wcześniejsze stopnie i czy nie przykładasz zbyt dużej wagi do niektórych z nich (np. do „Zdrowia i sprawności fizycznej”).",
      ]),
    ),
  ],
};
