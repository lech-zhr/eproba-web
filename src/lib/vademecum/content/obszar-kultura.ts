import {
  callout,
  em,
  hrChip,
  hrLi,
  lede,
  li,
  p,
  section,
  signature,
  signposts,
} from "../dsl";
import type { Page } from "../types";

export const obszarKultura: Page = {
  slug: "obszar-kultura",
  group: "obszary",
  eyebrow: "03 · Drogowskazy",
  title: "Kultura i komunikacja",
  navTitle: "Kultura i komunikacja",
  blocks: [
    lede(
      p(
        "„O co chodzi z tą kulturą w stopniach? Na co to komu?” – to pytanie zadawało sobie już wielu przed Tobą i zapewne zada je sobie wielu po Tobie.",
      ),
      p(
        "Pomyśl o tym jako o sztafecie, w której z pokolenia na pokolenie przekazujemy sobie szczególny „język”. Dzięki niemu nie tylko możesz porozumieć się z naszymi przodkami i następcami (czyli również zrozumieć ich) – bez tego języka trudno nam się dogadać między sobą nawet dzisiaj.",
      ),
      signature(
        "Przełącz tryb powyżej — drogowskazy oznaczone ",
        hrChip,
        " są zaadresowane głównie do zdobywających Harcerza Rzeczypospolitej, ale każdy może się nimi zainspirować.",
      ),
    ),
    section(
      {
        id: "kultura-p1",
        title: ["Trzymam klasę i zachowuję kulturę osobistą"],
        idx: "01",
      },
      signposts(
        li(
          "Znam zasady dobrego ubioru (np. wiem, jak łączyć kolory i wzory, jak dobrać rozmiar ubrania itp.), potrafię ubrać się na randkę lub formalną okazję.",
        ),
        li("Jestem punktualny i komunikuję o ewentualnych opóźnieniach."),
        li("Nie przeklinam i nie podnoszę niepotrzebnie głosu."),
        li("Znam i stosuję zasady porozumienia bez przemocy (NVC)."),
        hrLi(
          "Potrafię przeanalizować swoja postawę w odbytej dyskusji – również pod kątem stosowania nieuczciwych chwytów.",
        ),
      ),
    ),
    section(
      {
        id: "kultura-p2",
        title: ["Wypowiadam się w sposób zrozumiały"],
        idx: "02",
      },
      signposts(
        li(
          "Potrafię przygotować i nagrać kilkuminutowe wystąpienie, poprawne pod kątem retorycznym (ustrukturyzowane, z użyciem gestykulacji, bez mówienia „yyy” itp.).",
        ),
        li(
          "Poznałem zasady dobrego i ciekawego pisania (np. na kursie lub z książki) i potrafię napisać artykuł, uwzględniając te zasady.",
        ),
        li(
          "Potrafię przygotować konspekt i przeprowadzić ciekawe zajęcia na kursie zastępowych.",
        ),
        li(
          "Potrafię porozumieć się w codziennych sytuacjach w czasie podróży za granicą.",
        ),
      ),
    ),
    section(
      {
        id: "kultura-p3",
        title: [
          "Poznaję klasyczne dzieła kultury i kształtuję swoją wrażliwość jako odbiorca sztuki",
        ],
        idx: "03",
      },
      signposts(
        li(
          "Umiem przedstawić w dyskusji, w jaki sposób wybrane dzieła z kanonu lektur zmieniły moje spojrzenie na świat i wartości lub prawa nim rządzące.",
        ),
        li("Co najmniej raz w roku odwiedzam wystawę sztuki."),
        li(
          "Potrafię, świadomie wybierając repertuar, zorganizować wyjście do teatru, opery lub filharmonii.",
        ),
        hrLi(
          "Znam klasyki kina polskiego (np. filmy Kieślowskiego, Wajdy, Kawalerowicza, Koterskiego, Holland) oraz europejskiego (np. filmy Felliniego, Bergmana).",
        ),
        hrLi("Potrafię tańczyć dwa tańce towarzyskie."),
      ),
    ),
    section(
      { id: "kultura-p4", title: ["Wyrażam się za pomocą sztuki"], idx: "04" },
      signposts(
        li(
          "Staram się uczyć technik artystycznych (również amatorsko) i tworzyć wybrane formy sztuki (np. uczę się gry na nowym instrumencie, założyłem zespół muzyczny z kolegami, gram w teatrze szkolnym, majsterkuję z elementem artystycznym).",
        ),
        li(
          "Potrafię podzielić się swoimi umiejętnościami artystycznymi w harcerstwie na forum szerszym niż drużyna.",
        ),
      ),
    ),
    callout(
      "note",
      { title: "Uwaga" },
      p(
        em(
          "Jeżeli jesteś uczniem szkoły artystycznej (np. muzycznej czy plastycznej), to prawdopodobnie ważniejsza dla Twojego rozwoju artystycznego będzie praca nad postawami opisanymi w obszarach życia „Pasje i umiejętności” oraz „Rozum i intelekt”.",
        ),
      ),
    ),
  ],
};
