import {
  em,
  hrChip,
  hrLi,
  lead,
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

export const obszarIntelekt: Page = {
  slug: "obszar-intelekt",
  group: "obszary",
  eyebrow: "03 · Drogowskazy",
  title: "Rozum i intelekt",
  navTitle: "Rozum i intelekt",
  blocks: [
    lede(
      p(
        "Spośród wszystkich stworzeń człowieka charakteryzuje to, że ma wolność i rozum. To rozum pozwala nam odkrywać prawdę, podejmować moralne decyzje, pracować nad sobą czy wielbić Boga. Poważamy ludzi roztropnych, wnikliwych, potrafiących szukać odpowiedzi na złożone problemy. Sami możemy i powinniśmy tacy się stać! Dlatego przykładamy wielką wagę do rozwoju intelektualnego – by sobie i innym służyć rozwagą i mądrymi decyzjami.",
      ),
      signature(
        "Przełącz tryb powyżej — drogowskazy oznaczone ",
        hrChip,
        " są zaadresowane głównie do zdobywających Harcerza Rzeczypospolitej, ale każdy może się nimi zainspirować.",
      ),
    ),
    section(
      {
        id: "intelekt-p1",
        title: ["Uczę się metodycznie i regularnie"],
        idx: "01",
      },
      ul(
        li(
          "Mam stałe pory w ciągu dnia i tygodnia, kiedy regularnie się uczę (nie tylko do sprawdzianów).",
        ),
        li("Potrafię zaplanować swoją naukę i zrealizować ten plan."),
        li("Czytam książki zgodnie z ułożonym przeze mnie planem."),
      ),
    ),
    section(
      {
        id: "intelekt-p2",
        title: ["Szkoła i nauka są dla mnie ważne"],
        idx: "02",
      },
      lead(
        "Przykładam się do swoich obowiązków szkolnych, korzystam z szans, które daje mi szkoła, uczestniczę w życiu szkolnym.",
      ),
      ul(
        li(
          "Wybrałem przedmioty szkolne, na których się szczególnie koncentruję i w których wychodzę poza minimum szkolne (np. startuję w konkursach z tych przedmiotów, stawiam sobie wyższe cele dotyczące ocen, biorę udział w olimpiadach, zdobywam certyfikaty).",
        ),
        li("Potrafię poprawić oceny z przedmiotu, z którego jestem słaby."),
        li(
          "Uczestniczę w życiu szkolnym (np. biorę udział w projektach szkolnych i kołach zainteresowań, jestem częścią samorządu szkolnego).",
        ),
      ),
    ),
    section(
      { id: "intelekt-p3", title: ["Myślę logicznie"], idx: "03" },
      lead(
        "Staram się wyciągać wnioski, bazując na logicznych związkach między przesłankami rozumowania, a nie głównie na intuicji i odczuciach.",
      ),
      ul(
        li(
          "Potrafię napisać tekst, artykuł lub zrobić prezentację, w których przedstawiam swoją tezę i bronię jej argumentami.",
        ),
        hrLi(
          "Potrafię rozbić argument na przesłanki, przeanalizować związki logiczne pomiędzy nimi i w ten sposób określić jego prawdziwość.",
        ),
        hrLi(
          "Znam najczęstsze błędy w argumentacji (np. błąd odwróconej implikacji, argumentum ad ignorantiam, zwalczanie chochoła, błędne koło, mylenie przyczynowości z korelacją, fałszywa dychotomia).",
        ),
      ),
    ),
    section(
      {
        id: "intelekt-p4",
        title: ["Zachowuję krytycyzm i pokorę intelektualną"],
        idx: "04",
      },
      lead(
        "Badam argumenty swoje oraz innych, nie odrzucam ani nie akceptuję poglądów bez zrozumienia ich podstaw.",
      ),
      ul(
        li(
          "Potrafię poprowadzić dyskusję lub przeprowadzić burzę mózgów (zgodnie z metodyką jej prowadzenia).",
        ),
        li(
          "Potrafię poszukiwać potrzebnych mi informacji, korzystając ze zróżnicowanych źródeł.",
        ),
        li(
          "Potrafię zweryfikować, czy jakaś informacja jest prawdziwa czy fałszywa (",
          em("fake news, deep fake"),
          ").",
        ),
        hrLi("Potrafię w debacie bronić tezy, z którą się nie zgadzam."),
      ),
    ),
    section(
      { id: "intelekt-p5", title: ["Kształtuję swój światopogląd"], idx: "05" },
      lead(
        "Zapoznaję się z różnymi światopoglądami i koncepcjami społeczno-gospodarczymi oraz potrafię je ocenić na bazie argumentów.",
      ),
      ul(
        li(
          "Potrafię zgłębić (np. przez przeczytanie książki) wybraną doktrynę społeczną (np. katolicką naukę społeczną, liberalizm, republikanizm, socjalizm) lub kwestię społeczną (np. problem migracji, sprawiedliwości społecznej, zasady pomocniczości, globalnych przepływów kapitału, aborcji).",
        ),
        hrLi(
          "Potrafię nawiązywać relacje z ludźmi o poglądach sprzecznych z moimi lub będących w sytuacjach życiowych zupełnie innych niż moja.",
          xref(
            "Sprawdź również Drogowskazy z obszaru „",
            link("obszar-bog", "Bóg, wiara i duchowość"),
            "”.",
          ),
        ),
      ),
    ),
    section(
      {
        id: "intelekt-p6",
        title: ["Jestem dociekliwy i ciekawy świata"],
        idx: "06",
      },
      ul(
        li(
          "Mam potrzebę i wolę poznawania nowych rzeczy dogłębnie, a nie jedynie powierzchownie.",
        ),
        li(
          "Wycieczki po Polsce i wyjazdy za granicę wykorzystuję do zaplanowanego poznania nowych rejonów, ludzi, zwyczajów itp., a nie wyłącznie do rozrywki i odpoczynku.",
        ),
        li(
          "Umiem zadawać trafne pytania: przeprowadzić wywiad z ciekawą osobą lub przeprowadzić na potrzeby projektu badanie opinii (np. ankietę) na dany temat.",
        ),
        li(
          "Otwieram się na dziedziny wiedzy, którymi się na co dzień nie interesuję, ale które mają obecnie znaczenie dla mojego życia rodzinnego, zawodowego lub społecznego.",
        ),
        hrLi(
          "Potrafię odnaleźć i przeczytać artykuł naukowy dotyczący tematu, który mnie interesuje, oraz wziąć udział w wydarzeniu akademickim o takiej tematyce.",
        ),
      ),
    ),
  ],
};
