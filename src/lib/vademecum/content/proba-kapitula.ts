import { kap, p } from "../dsl";
import type { Page } from "../types";

export const probaKapitula: Page = {
  slug: "proba-kapitula",
  group: "proba",
  eyebrow: "02 · Układanie próby",
  title: "Kapituła",
  navTitle: "Kapituła",
  blocks: [
    p(
      "Z układaniem próby indywidualnej nie jesteście z opiekunem pozostawieni sami sobie. W dobrze działających drużynie lub środowisku w zdobywaniu stopni harcerza orlego i harcerza Rzeczypospolitej pomaga kapituła.",
    ),
    p(
      "Kapituła składa się z co najmniej trzech harcerzy, którzy mają zdobywany przez Ciebie stopień. Kapitule przewodniczy instruktor, a jej członkiem jest najprawdopodobniej również Twój drużynowy. Kapituła ma dwa zadania.",
    ),
    kap(
      "Po pierwsze: zatwierdza kształt Twoich zadań indywidualnych.",
      p(
        "Wybrane przez Ciebie i opiekuna zadania indywidualne mogą się Wam bardzo podobać, ale warto, żeby ktoś jeszcze przyjrzał im się „z boku”. Członkowie kapituły już przeszli przez swoje zmagania ze stopniem, który właśnie zdobywasz i mogą podzielić się swoim doświadczeniem. Jej członkiem może być np. dawny drużynowy, który już założył rodzinę, albo były wędrownik, który właśnie kończy studia. Poza tym, co trzy głowy to nie jedna. Warto skorzystać z mądrości kapituły i w swojej próbie uwzględnić jej propozycje.",
      ),
    ),
    kap(
      "Po drugie: kapituła ocenia i zatwierdza wykonanie zadań.",
      p(
        "Próba jest tyle warta, na ile dzięki niej staniesz się lepszym człowiekiem. Jednakże aby móc nazwać ją próbą, to ktoś musi ocenić, czy ją przeszedłeś. Samoocena własnych dokonań to bardzo trudna sztuka – w niektórych aspektach bywamy dla siebie pobłażliwi, w innych jesteśmy wobec siebie nadmiernie surowi. Druhowie z kapituły przychodzą tutaj z pomocą. W braterskiej atmosferze wskażą niedociągnięcia i pochwalą wysiłek. Wspólnie stwierdzicie, czy można uznać każde z zadań za wykonane, czy też trzeba je, w całości albo w części, powtórzyć z ewentualnymi zmianami.",
      ),
    ),
    p(
      "Po stwierdzeniu wykonania zadań indywidualnych kapituła wnioskuje do drużynowego (a w wyjątkowych sytuacjach – do hufcowego) o zamknięcie próby na stopień – który zostaje przyznany rozkazem, o ile wszystkie dodatkowe warunki zostały spełnione.",
    ),
  ],
};
