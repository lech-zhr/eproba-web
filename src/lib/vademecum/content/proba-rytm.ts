import { callout, em, li, p, step, stepper, strong, ul } from "../dsl";
import type { Page } from "../types";

export const probaRytm: Page = {
  slug: "proba-rytm",
  group: "proba",
  eyebrow: "02 · Układanie próby",
  title: "Rytm próby indywidualnej",
  navTitle: "Rytm próby",
  blocks: [
    p(
      "Poniższy schemat przedstawia standardowy sposób prowadzenia próby na HO/HR, z podziałem na etapy. Jeśli zachowacie poniższe wskazówki, próba indywidualna będzie dynamiczna i zwarta.",
    ),
    stepper(
      step(
        { n: "1", title: "Spotkanie 1 – autorefleksja", gapAfter: "1 tydzień" },
        p(
          "Celem pierwszego spotkania z opiekunem jest lepsze poznanie samego siebie. Dodatkowo opiekun będzie miał okazję lepiej poznać Ciebie. Nie przygotowuj propozycji zadań na to pierwsze spotkanie – będzie na to czas w kolejnym kroku. W czasie braterskiej i szczerej rozmowy powinieneś zrobić trzy rzeczy.",
        ),
        p(
          strong("Po pierwsze"),
          " – w rozmowie z opiekunem spróbuj odpowiedzieć sobie na pytania:",
        ),
        ul(
          li("Jakie są Twoje wady i zalety? Wymień po 4."),
          li(
            "Jakie masz marzenie na najbliższy rok i na przyszłość (np. co chciałbyś robić za 4 lata)?",
          ),
          li("Czy jest coś, nad czym chciałbyś popracować?"),
          li(
            "Jaką Twoją największą zaletę, a jaką wadę wskazaliby Twoi najbliżsi?",
          ),
          li(
            "Czy któryś punkt Prawa Harcerskiego sprawia Ci szczególny problem?",
          ),
          li("Jak układają się Twoje relacje z najbliższymi?"),
        ),
        p(
          strong("Po drugie"),
          " – zastanów się, nad którymi sferami swojego życia powinieneś popracować. Wskazówki, które mogą Ci w tym pomóc, znajdziesz niżej.",
        ),
        p(
          strong("Po trzecie"),
          " – znajdź w Vademecum wybrane obszary życia i zainspiruj się drogowskazami przy formułowaniu zadań (zobacz: „Obszary w próbach indywidualnych”).",
        ),
      ),
      step(
        {
          n: "2",
          title: "Spotkanie 2 – propozycje zadań",
          gapAfter: "okres przygotowawczy · ok. 3 tygodnie",
        },
        p(
          "Na drugie spotkanie warto przyjść z propozycjami konkretnych zadań na podstawie wybranych wcześniej obszarów życia i drogowskazów. Wspólnie z opiekunem będziecie mogli je omówić, uszczegółowić lub odrzucić te, które uznacie za słabe. W razie potrzeby wymyślicie nowe propozycje i ustalicie, w jaki sposób można sprawdzić, czy są adekwatne. Po tym spotkaniu rozpocznie się okres przygotowawczy, czyli czas na sprawdzenie, czy zaproponowane zadania są realne do wykonania i odpowiednio dobrane do Twoich potrzeb.",
        ),
        callout(
          "info",
          { title: "Przykład" },
          ul(
            li(
              "Jeśli zechcesz w ramach próby pojechać na rekolekcje w milczeniu, to w trakcie okresu przygotowawczego powinieneś sprawdzić, w jakich rekolekcjach jesteś w stanie wziąć udział, jak one wyglądają, ile kosztują, w jakich są terminach i lokalizacjach.",
            ),
            li(
              "Jeśli w ramach próby będziesz chciał przez 3 miesiące chodzić na siłownię 2 razy w tygodniu, to w okresie przygotowawczym powinieneś zacząć chodzić na siłownię 2 razy w tygodniu – aby sprawdzić, czy realnie masz takie możliwości czasowe.",
            ),
          ),
        ),
        p(
          "Nie ograniczajcie się przy tym do „typowych”, często wybieranych zadań w Waszym środowisku – to, co było dobre dla Twojego kolegi z drużyny, nie musi być koniecznie dobre dla Ciebie.",
        ),
        p(
          strong(
            "Jeśli istnieje taka potrzeba, możecie spotkać się więcej razy!",
          ),
          " Pamiętajcie jednak, aby nie rozciągać przygotowań zbyt długo – między pierwszym spotkaniem a otwarciem próby indywidualnej ",
          strong("nie powinno minąć więcej niż 2 miesiące."),
        ),
      ),
      step(
        { n: "3", title: "Decyzja – wybór zadań", gapAfter: "szybko" },
        p(
          "Wybrane zadania powinny być konkretne i mierzalne. Osoba postronna powinna móc łatwo ocenić, czy zadanie zostało, czy nie zostało wykonane.",
        ),
        callout(
          "info",
          { title: "Przykład" },
          p(
            "Załóżmy, że zauważasz potrzebę zadbania o swoje zdrowie i zmienić swój sposób odżywiania. Chociaż ",
            strong(em("„Będę jadł posiłki regularnie”")),
            " może brzmieć jak konkretne zadanie, to trudno powiedzieć, kiedy będzie można uznać je za wykonane. Co to znaczy regularnie? W tym wypadku konieczne jest dookreślenie:",
          ),
          ul(
            li(
              "szczegółowych warunków zadania, np. ",
              strong(
                em(
                  "Będę codziennie jadł śniadanie przed wyjściem do szkoły (do 7:20) i kolejne 4 posiłki maksymalnie co 4 godziny.",
                ),
              ),
            ),
            li(
              "czasu trwania zadania, np. ",
              strong(em("Przez 40 dni z rzędu będę…")),
            ),
          ),
          p(
            "W ten sposób warunki zadania stają się jasno określone – jeśli przekroczysz ustalony czas, powinieneś zacząć od nowa liczenie 40 dni, a jeśli nie dałeś rady wytrwać 40 dni z rzędu, to zadanie nie zostało wykonane.",
          ),
        ),
        p(
          "Sprawdźcie też, czy wybrane zadania nie kumulują się w czasie. Rzadko udaje się rzetelnie realizować większą liczbę zadań równocześnie. Najlepszym sposobem, by uniknąć takiej kumulacji, jest zaplanowanie konkretnych okresów realizacji poszczególnych zadań – tak, aby się one na siebie nie nakładały i uwzględniały inne zobowiązania (rodzinne, szkolne, harcerskie, spotkania ze znajomymi itp).",
        ),
        p(strong("Przykłady")),
        ul(
          li(
            "Przygotowując się do koncertu, będę przez 4 tygodnie ćwiczył grę na mandolinie 5 razy w tygodniu po 40 minut (w kwietniu).",
          ),
          li(
            "Zorganizuję wycieczkę dla całej rodziny pociągiem od Krakowa, zarezerwuję noclegi, przygotuję plan zwiedzania (drugi weekend maja).",
          ),
        ),
      ),
      step(
        { n: "4", title: "Otwarcie próby indywidualnej i jej realizacja" },
        p(
          "Otwieracie próbę indywidualną przed kapitułą/drużynowym i… do dzieła. To jest ten czas, gdy udowadniasz, że potrafisz wykonać zadania i zrealizować cele, które sam sobie obrałeś. Próba indywidualna na HO nie powinna trwać dłużej niż 10 miesięcy. Na HR – nie więcej niż 12 miesięcy.",
        ),
      ),
      step(
        { n: "•", title: "Spotkanie z opiekunem", optional: true },
        p(
          "W czasie próby powinniście się regularnie spotykać z opiekunem, aby omówić Twoje postępy w realizacji zadań. Jeśli w czasie próby razem z opiekunem dojdziecie do przekonania, że jedno z zadań się zdezaktualizowało, to możecie je zmienić – zgłoście się jak najszybciej do kapituły lub drużynowego.",
        ),
      ),
      step(
        { n: "5", title: "Zamknięcie próby indywidualnej i jej podsumowanie" },
        p("Na zamknięcie próby indywidualnej powinieneś przygotować:"),
        ul(
          li(
            "materiały prezentujące, jak zrealizowałeś swoje zadania: opisy, zdjęcia, filmiki, plany itp;",
          ),
          li(
            "podsumowanie zadania – zastanów się, co dała Ci realizacja zadania, czy spełniła swój cel, a jeśli nie – to, co dzisiaj zrobiłbyś inaczej.",
          ),
        ),
        p(
          "Takie podsumowanie jest ważne nie tylko po to, aby zamknąć próbę indywidualną – jest ono także wartościowe dla Ciebie samego, abyś uczył się wyciągać wnioski z własnych działań.",
        ),
        callout(
          "note",
          { title: "Uwaga" },
          p(
            "Pamiętaj, że w przypadku próby na HO poza wykonaniem próby indywidualnej warunkiem zamknięcia stopnia jest spełnianie wymagań.",
          ),
          p(
            "Ponadto kapituła lub drużynowy mogą zaproponować Ci próbę końcową, jednak nie zawsze ma to miejsce.",
          ),
        ),
      ),
    ),
  ],
};
