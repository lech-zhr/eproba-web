import { callout, em, li, p, step, stepper, strong, ul } from "../dsl";
import type { Page } from "../types";

export const probaOpiekun: Page = {
  slug: "proba-opiekun",
  group: "proba",
  eyebrow: "02 · Układanie próby",
  title: "Opiekun próby",
  navTitle: "Opiekun próby",
  blocks: [
    p(
      em(
        strong(
          "Opiekun to Twój harcerski starszy brat, który będzie Ci towarzyszył w realizacji próby – od początku aż do jej końca. Przed opiekunem stoją 3 zadania:",
        ),
      ),
    ),
    stepper(
      step(
        { n: "1", title: "Pomoże lepiej poznać siebie" },
        p(
          "Każdy z nas uczy się samooceny i autorefleksji i szczególnie w pierwszych próbach trudno jest zachować w tym właściwą równowagę. Mamy tendencję do przesadnego krytycyzmu wobec siebie, a niekiedy wręcz przeciwnie – pobłażamy sobie. Opiekun pomoże Ci spojrzeć na siebie z pewnego dystansu i zadba, aby „lustro”, w którym będziesz się przyglądał, nie zniekształciło Twojego obrazu. Jednak tylko opiekun, który Cię dobrze pozna, będzie w stanie Cię wesprzeć – dlatego bądź z nim szczery. Nie próbuj przedstawiać siebie lepszym niż jesteś ani nie koncentruj się wyłącznie na swych słabościach.",
        ),
        p(
          "Pamiętaj – w przyszłości też możesz zostać opiekunem próby na stopień młodszego brata – zwróć wtedy szczególną uwagę, aby dobrze poznać harcerza, który obdarzył Cię swoim zaufaniem.",
        ),
      ),
      step(
        { n: "2", title: "Doradzi przy wyborze zadań" },
        p(
          "Opiekun doradzi Ci przy wyborze zadań do próby indywidualnej. Pomoże też ocenić, czy próba jest dobrze skomponowana, realna, a jednocześnie ambitna. Opiekun będzie Ci również towarzyszył w czasie otwierania próby indywidualnej przed kapitułą.",
        ),
      ),
      step(
        { n: "3", title: "Wspiera w realizacji zadań" },
        p(
          "Po otwarciu próby indywidualnej będzie wspierał Cię w realizacji zadań, a jeśli zajdzie taka potrzeba, pomoże podjąć decyzję o zmianie zadania, które się zdezaktualizowało.",
        ),
      ),
    ),
    p("Żeby sprostać tym zadaniom, na opiekuna powinieneś wybrać osobę:"),
    ul(
      li("której jesteś gotów zaufać,"),
      li("która dobrze Cię zna,"),
      li("która ma doświadczenie przy układaniu prób indywidualnych,"),
      li("która jest mądra i dojrzała,"),
      li("która jest dla Ciebie przykładem harcerskiej postawy."),
    ),
    p(
      "Oczywiście nie zawsze uda się znaleźć osobę, która będzie spełniała wszystkie powyższe kryteria. Będziesz musiał wtedy zdecydować, kogo wybrać. Pamiętaj jednak, że:",
    ),
    callout(
      "note",
      {},
      p(
        "jeśli chcesz zdobywać HO, to Twój opiekun musi mieć stopień HO, ale najlepiej, aby miał już otwartą próbę indywidualną na stopień HR-a. Jeśli chcesz zdobywać HR–a, to Twój opiekun musi mieć stopień HR-a.",
      ),
    ),
  ],
};
