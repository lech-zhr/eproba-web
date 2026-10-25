import { callout, em, lede, li, p, section, strong, ul } from "../dsl";
import type { Page } from "../types";

export const obszarCharakter: Page = {
  slug: "obszar-charakter",
  group: "obszary",
  eyebrow: "03 · Drogowskazy",
  title: "Siła charakteru",
  navTitle: "Siła charakteru",
  blocks: [
    lede(
      p(
        "Idea harcerska stawia przed nami wysokie wymagania. Drogą do sprostania tym wymaganiom są ćwiczenia charakteru! Niebawem to nie drużynowy i opiekun próby lub inni starsi harcerscy bracia będą Cię mobilizować do działania i wskazywać obszary do pracy – sam przejmiesz ten ster.",
      ),
    ),
    section(
      { id: "charakter-p1", title: ["Czym jest cnota?"] },
      p(
        "Już jako młodzik nauczyłeś się, że na lilijce znajdują się 3 litery: ONC, czyli Ojczyzna, Nauka, Cnota. Pierwsze dwa wyrazy są jasne – ale co oznacza to trzecie?",
      ),
      p(
        "Cnota jest stałą sprawnością rozumu i woli, która skłania nas do czynienia dobra i unikania zła.",
      ),
      callout(
        "info",
        { title: "Przykład" },
        p(
          em(
            "Człowiek z cnotą męstwa będzie z większą łatwością występował w obronie słabszych, a człowiek, który wyćwiczył się w cnocie pracowitości, będzie podejmować żmudne i długotrwałe prace łatwiej niż osoba, która może by i chciała się podjąć takiej pracy, ale zwyczajnie nie daje rady.",
          ),
        ),
      ),
      p(
        "Wszystkie cnoty kierujące naszym życiem, które możemy w sobie kształcić, opierają się na 4 „bazowych” cnotach, zwanych kardynalnymi, którymi są:",
      ),
      ul(
        li(strong("męstwo"), " – czyli zdolność do wytrwania w trudzie;"),
        li(
          strong("roztropność"),
          " – czyli zdolność do odpowiedniego dobierania środków do celu;",
        ),
        li(
          strong("sprawiedliwość"),
          " – czyli zdolność oddania każdemu tego, co mu się słusznie należy;",
        ),
        li(
          strong("umiarkowanie"),
          " – czyli zdolność do właściwego korzystania ze swoich zmysłów.",
        ),
      ),
      p(
        "Jak w praktyce pracować nad wzmacnianiem cnót i zwalczaniem wad? W ramach zadania indywidualnego możesz wypróbować jedną z opisanych niżej metod.",
      ),
    ),
    section(
      {
        id: "charakter-p2",
        title: ["Wypracuj nawyk i zaplanuj pracę!"],
        idx: "01",
      },
      p(
        "Wymyśl małe zadanie i podejmij dłuższe wyzwanie (np. 30- lub 60-dniowe), w ramach którego będziesz codziennie wykonywał to małe zadanie. Zaplanuj to, np. ustaw sobie codziennie przypomnienie i zapisuj w kalendarzu, gdy uda Ci się je zrealizować. Realizację zadania możesz też połączyć z jakąś małą nagrodą. Zobaczysz, że pod koniec zrobienie tego zadania będzie Ci przychodziło o wiele łatwiej niż na początku.",
      ),
      callout(
        "info",
        { title: "Przykład" },
        p(
          em(
            "Jeśli masz problem z nieumiarkowaniem polegający na używaniu telefonu do późnych godzin nocnych, przez miesiąc podejmiesz wyzwanie polegające na wyłączaniu telefonu o godz. 20:00 (kupisz sobie budzik, żeby nie używać budzika w telefonie).",
          ),
        ),
      ),
    ),
    section(
      {
        id: "charakter-p3",
        title: ["Podejmij wyzwanie i przełam się!"],
        idx: "02",
      },
      p(
        "Czasami wada zakorzeni się w nas tak głęboko, że aż trudno nam się ruszyć o mały kroczek w kierunku poprawy. Możesz spróbować rzucić się na głęboką wodę i postawić się w sytuacji niekomfortowej, która pozwoli Ci spojrzeć na świat i na siebie innymi oczami.",
      ),
      callout(
        "info",
        { title: "Przykład" },
        p(
          em(
            "Jeśli widzisz w sobie niechęć do jakiejś grupy społecznej (np. „patusów”, imigrantów, kibiców), to podejmij działanie, które zmusi Cię do poznania bliżej tych osób (np. poprzez służbę wśród ukraińskich rodzin).",
          ),
        ),
      ),
    ),
    section(
      { id: "charakter-p4", title: ["Zmień/poszerz towarzystwo!"], idx: "03" },
      p(
        "Nasi koledzy w różnych środowiskach mogą mieć na nas zarówno bardzo pozytywny, jak i negatywny wpływ. Przykładowo, jeśli Twoi koledzy nie uczą się, to i Ty nie będziesz miał do tego motywacji.",
      ),
      p(
        "Czasami warto się zatem zastanowić, czy nie wejść w nowe środowisko i nie poznać nowych ludzi, którzy pomogą nam w walce o cnotliwe życie.",
      ),
      callout(
        "info",
        { title: "Przykład" },
        p(
          em(
            "Jeśli Ty i Twoi koledzy z klasy masę czasu i zaangażowania przeznaczacie na życie wirtualne/granie na komputerze, pomyśl o zapisaniu się do klubu/koła/towarzystwa zajmującego się jakimś innym hobby, może to być np. klub wspinaczki skałkowej, kurs gry na instrumencie, teatr szkolny itp.",
          ),
        ),
      ),
    ),
    section(
      { id: "charakter-p5", title: ["Znajdź mistrza/brata!"], idx: "04" },
      p(
        "Walka o cnoty to zadanie na całe życie. Bardzo wartościowe na tej ścieżce jest znalezienie mistrza (kierownika duchowego, starszego brata itp.), z którym będziesz mógł regularnie pracować nad swoich charakterem.",
      ),
      callout(
        "info",
        { title: "Przykład" },
        p(
          em(
            "Przez okres próby spotykaj się co miesiąc z kierownikiem duchowym. Na każdym spotkaniu omówcie Twoją walkę ze swoją główną wadą, a Ty podejmij wyzwanie na kolejny miesiąc.",
          ),
        ),
      ),
    ),
    section(
      { id: "charakter-p6", title: ["Poczytaj!"], idx: "05" },
      p(
        "Nasze wybory i utrwalone postawy wynikają często z niedostatecznej wiedzy. Powierzchowna znajomość tematu sprzyja podtrzymywaniu pasującej nam tezy. Wystaw się na próbę i zmierz się z innymi argumentami. Dzięki temu może Twoje następne decyzje i podejście do tych samych spraw będą oparte na głębszym rozumieniu świata.",
      ),
      callout(
        "info",
        { title: "Przykład" },
        p(
          em(
            "Jeśli czujesz, że zawarta w prawie harcerskim „ofiarność” jest sprzeczna z teoriami ekonomicznymi i wyższymi racjami – być może warto, abyś poczytał więcej na temat sprawiedliwości społecznej u św. Tomasza z Akwinu lub zapoznał się z badaniami dotyczącymi źródeł i skutków nierówności społecznych.",
          ),
        ),
      ),
    ),
  ],
};
