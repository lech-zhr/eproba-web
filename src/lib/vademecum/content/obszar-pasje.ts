import { hrChip, hrLi, lede, li, p, section, signature, ul } from "../dsl";
import type { Page } from "../types";

export const obszarPasje: Page = {
  slug: "obszar-pasje",
  group: "obszary",
  eyebrow: "03 · Drogowskazy",
  title: "Pasje i umiejętności",
  navTitle: "Pasje i umiejętności",
  blocks: [
    lede(
      p(
        "Harcerstwo jest pociągające o tyle, o ile robisz w nim nowe, ciekawe i inspirujące dla Ciebie rzeczy. Tak samo jest w naszym życiu – w dużej mierze od Ciebie zależy, czy będzie ono nudne i czy będziesz tylko biernie brał to, co przyniesie Ci los, czy raczej przejdziesz je aktywnie, szukając ciekawego zawodu i fascynujących wyzwań.",
      ),
      signature(
        "Przełącz tryb powyżej — drogowskazy oznaczone ",
        hrChip,
        " są zaadresowane głównie do zdobywających Harcerza Rzeczypospolitej, ale każdy może się nimi zainspirować.",
      ),
    ),
    section(
      {
        id: "pasje-p1",
        title: ["Rozwijam nowe umiejętności praktyczne"],
        idx: "01",
      },
      ul(
        li(
          "Biorę udział w kursach, warsztatach i/lub zajęciach indywidualnych.",
        ),
        li("Zdobywam uprawnienia państwowe i certyfikaty."),
        hrLi(
          "Poszukuję swojego przyszłego kierunku zawodowego (np. korzystam z doradztwa zawodowego, rozmawiam z pracownikami różnych branż, odwiedzam miejsca pracy).",
        ),
        hrLi("Biorę udział w stażach lub praktykach zawodowych."),
      ),
    ),
    section(
      {
        id: "pasje-p2",
        title: [
          "Znam trud pracy zarobkowej i potrafię gospodarować swoimi pieniędzmi",
        ],
        idx: "02",
      },
      ul(
        li("Potrafię zarobić na swoje potrzeby 1000 zł."),
        li("Pracowałem fizycznie zarobkowo."),
        li(
          "Potrafię przygotować szczegółowy kilkumiesięczny budżet obejmujący wszystkie moje wpływy i wydatki na moje potrzeby.",
        ),
        li("Potrafię zaoszczędzić pieniądze na swoje wakacje lub na inny cel."),
      ),
    ),
    section(
      {
        id: "pasje-p3",
        title: ["Mam zainteresowania, które efektywnie rozwijam"],
        idx: "03",
      },
      ul(
        li(
          "Dzielę się swoimi zainteresowaniami z innymi, uczę ich i dzielę się swoją pasją.",
        ),
        hrLi(
          "W wybranej dziedzinie postawiłem sobie ponadprzeciętny cel i go osiągnąłem.",
        ),
      ),
    ),
    section(
      {
        id: "pasje-p4",
        title: ["Wolny czas spędzam w sposób kreatywny i ambitny"],
        idx: "04",
      },
      ul(
        li(
          "Próbuję poszerzać swoje zainteresowania, zdobywając umiejętności i wiedzę z nowych dziedzin.",
        ),
        li("Regularnie czytam książki."),
        hrLi(
          "Świadomie i systematycznie uprawiam swoją pasję w celu zachowania równowagi psychicznej.",
        ),
      ),
    ),
  ],
};
