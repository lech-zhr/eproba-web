import { li, p, section, strong, ul, watra } from "../dsl";
import type { Page } from "../types";

export const wedrownik: Page = {
  slug: "wedrownik",
  eyebrow: "01 · Rozdział",
  title: "Droga Wędrownika",
  navTitle: "Droga Wędrownika",
  blocks: [
    section(
      { id: "w-symbolika", title: ["Symbolika Watry Wędrowniczej"] },
      p(
        "Harcerz orli i harcerz Rzeczypospolitej to stopnie zdobywane przez wędrowników. Niezależnie od tego, w jakiej drużynie teraz jesteś, zdobywając je, podążasz wędrowniczym szlakiem, którego treść i cel wskazuje symbol Watry Wędrowniczej – oznaka ruchu wędrowników. Przedstawia on ognisko ułożone sposobem skautowym na długotrwałe palenie, umieszczone na zielonym tle. Znak Watry symbolizuje wędrówkę na szlaku i w codziennym życiu.",
      ),
      p(
        "Trzy polana symbolizują trzy główne pola pracy wędrowniczej. Jak drewno dokładane do ogniska, są paliwem do utrzymania symbolicznych płomieni – celów pracy wędrownika. Te pola to:",
      ),
      ul(
        li(strong("praca nad sobą"), ","),
        li(strong("szukanie swojego miejsca w społeczeństwie"), ","),
        li(strong("służba"), "."),
      ),
      p(
        "Trzy płomienie symbolizują cele pracy wędrownika. W kolejności od najmniejszego płomienia są to:",
      ),
      ul(
        li(strong("siła ciała"), ","),
        li(strong("siła umysłu"), ","),
        li("oraz najważniejsza – ", strong("siła ducha"), "."),
      ),
      watra(
        strong("WATRA"),
        " to znak życia harcerskiego na wędrówce i w codzienności. Ułożona jest w gwiazdę sposobem skautowym na długotrwałe palenie.",
      ),
      p(
        "Znak watry haftuje się na zielonym tle, co ma przypominać, że wszystko realizuje się na tle harcerskiego życia – wędrówce przez świat. Polana i płomienie watry połączone są żarem symbolizującym realizację pracy wędrowniczej poprzez ",
        strong("wyczyn"),
        ".",
      ),
      p(
        "Wędrownik poznaje specyfikę pracy wędrowniczej podczas próby na naramiennik, realizowanej w drużynie wędrowników. Jeśli masz taką możliwość, przed otwarciem próby indywidualnej na HO podejdź do próby na naramiennik – szczegóły znajdziesz w Regulaminie Naramiennika Wędrowniczego Organizacji Harcerzy ZHR.",
      ),
    ),
  ],
};
