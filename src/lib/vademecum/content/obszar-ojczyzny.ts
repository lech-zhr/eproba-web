import {
  em,
  hrChip,
  hrLi,
  lede,
  li,
  link,
  p,
  section,
  signature,
  ul,
  xref,
} from "../dsl";
import type { Page } from "../types";

export const obszarOjczyzny: Page = {
  slug: "obszar-ojczyzny",
  group: "obszary",
  eyebrow: "03 · Drogowskazy",
  title: "Małe ojczyzny, Polska i świat",
  navTitle: "Małe ojczyzny i Polska",
  blocks: [
    lede(
      p(
        "Baden-Powell napisał kiedyś, że obywatelskość to „aktywna wierność wobec wspólnoty”. Aktywna, czyli w czynach, a nie tylko w słowach. Wierność, czyli bycie przy niej również wtedy, gdy jest to dla mnie trudne, wymaga wysiłku lub poświęcenia. Wobec wspólnoty, czyli wobec ludzi żyjących razem i połączonych historią, językiem, kulturą.",
      ),
      p(
        "Zawołanie „Czuwaj!” oznacza dla nas również: ",
        em(
          "bądź wierny swojej wspólnocie oraz Polsce i szukaj przyjaciół na całym świecie!",
        ),
      ),
      signature(
        "Przełącz tryb powyżej — drogowskazy oznaczone ",
        hrChip,
        " są zaadresowane głównie do zdobywających Harcerza Rzeczypospolitej, ale każdy może się nimi zainspirować.",
      ),
    ),
    section(
      {
        id: "ojczyzny-p1",
        title: ["Znam polską historię i jej wpływ na teraźniejszość"],
        idx: "01",
      },
      ul(
        li("Potrafię opisać historię Polski od czasu I-go rozbioru."),
        li(
          "Potrafię zorganizować akcję patriotyczną towarzyszącą świętu narodowemu.",
        ),
        li(
          "Znam polskie miasta, regiony i ich rolę w historii Polski, podczas ich odwiedzania świadomie pogłębiam tę wiedzę.",
        ),
        li(
          "Potrafię wygłosić referat lub zrobić prezentację na temat wybranej kontrowersji z historii Polski.",
        ),
      ),
    ),
    section(
      { id: "ojczyzny-p2", title: ["Jestem lokalnym patriotą"], idx: "02" },
      ul(
        li(
          "Potrafię oprowadzić wycieczkę po miejscu mojego pochodzenia, prezentując elementy jego historii.",
        ),
        li(
          "Potrafię nawiązać współpracę drużyny z innymi organizacjami lub instytucjami działającymi lokalnie.",
        ),
        hrLi(
          "Dokonałem pozytywnej zmiany w mojej lokalnej społeczności (wspólnymi siłami „sąsiadów” lub np. przy pomocy budżetu obywatelskiego).",
        ),
      ),
    ),
    section(
      {
        id: "ojczyzny-p3",
        title: ["Buduję braterstwo z ludźmi z Europy i z całego świata"],
        idx: "03",
      },
      ul(
        li("Potrafię godnie zaprezentować Polskę w międzynarodowym gronie."),
        li(
          "Potrafię zorganizować kilkudniową podróż do innego kraju, w ramach której poznam jego kulturę i historię.",
        ),
        li("Potrafię porozumieć się po angielsku w codziennych sytuacjach."),
        li("Uczę się wybranego języka obcego (innego niż angielski)."),
        hrLi("Potrafię dyskutować w języku obcym."),
        hrLi(
          "Potrafię ugościć obcokrajowca lub wspomóc imigranta w integracji w polskim społeczeństwie (np. nauka języka, pomoc w sprawach urzędowych, pomoc w znalezieniu pracy).",
        ),
        hrLi(
          "Potrafię zorganizować działanie, które angażuje Polaków żyjących poza Polską.",
        ),
      ),
    ),
    section(
      {
        id: "ojczyzny-p4",
        title: ["Jestem gotów do obrony ojczyzny"],
        idx: "04",
      },
      ul(
        li("Uczestniczę w działaniach Pogotowia Harcerek i Harcerzy."),
        li(
          "Umiem zachować spokój i opanowanie w sytuacji kryzysowej (np. w razie wypadku, ewakuacji).",
        ),
        li("Przeszedłem kurs Sanitariusza HOPR."),
        li(
          "Potrafię strzelać z broni ostrej (realizując tę umiejętność wyłącznie na strzelnicy pod okiem instruktora strzeleckiego).",
        ),
        li("Posiadam uprawnienia dronowe."),
        li("Posiadam świadectwo operatora radiotelefonisty VHF."),
        hrLi("Zdałem kurs Kwalifikowanej Pierwszej Pomocy."),
        hrLi(
          "Przeszedłem podstawowe szkolenie obronne (tzw. „szesnastka” WOT).",
        ),
      ),
    ),
    section(
      {
        id: "ojczyzny-p5",
        title: ["Jestem świadomym i aktywnym obywatelem"],
        idx: "05",
      },
      ul(
        li(
          "Znam polskie partie polityczne, ich programy, profile ideowe i poglądy na najważniejsze kwestie społeczno-gospodarcze.",
        ),
        li(
          "Potrafię bronić swojego stanowiska w wybranej kwestii dotyczącej Polski w debacie z rówieśnikami.",
        ),
        li(
          "Mam doświadczenie zaangażowania w działalność samorządową, obywatelską lub polityczną (np. w organizacji pozarządowej, partii politycznej, Młodzieżowej Radzie Miasta).",
        ),
        hrLi(
          "Uczestniczę w wyborach, decyzje podejmuję w duchu odpowiedzialności za Polskę.",
          xref(
            "Sprawdź również: „",
            link("obszar-intelekt", "Rozum i intelekt"),
            '">Kształtuję swój światopogląd” w obszarze „Rozum i intelekt”.',
          ),
        ),
      ),
    ),
  ],
};
