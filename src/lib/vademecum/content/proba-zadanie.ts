import {
  callout,
  em,
  funnel,
  funnelStep,
  h3,
  hrChip,
  li,
  link,
  ol,
  olItem,
  p,
  strong,
  ul,
} from "../dsl";
import type { Page } from "../types";

export const probaZadanie: Page = {
  slug: "proba-zadanie",
  group: "proba",
  eyebrow: "02 · Układanie próby",
  title: "Jak ułożyć zadanie?",
  navTitle: "Jak ułożyć zadanie?",
  blocks: [
    p(
      "Aby ułatwić Ci układanie zadań, skonstruowaliśmy dalszą część Vademecum zgodnie z poniższym schematem:",
    ),
    funnel(
      funnelStep(
        "1",
        "Sylwetka",
        100,
        "Podstawą jest ",
        strong("sylwetka"),
        " zdobywanego stopnia. Zacznij od jej przeanalizowania. Które jej zapisy są dla Ciebie jeszcze wyzwaniem? A które chciałbyś jeszcze w sobie wzmocnić?",
      ),
      funnelStep(
        "2",
        "Obszar życia",
        85,
        "Na podstawie sylwetek stopni i Prawa Harcerskiego określiliśmy ",
        strong("Obszary życia"),
        " – czyli dziedziny, które są ważne w życiu każdego człowieka. Do jakich obszarów odnoszą się zapisy sylwetki, nad którymi chcesz pracować?",
      ),
      funnelStep(
        "3",
        "Postawa",
        70,
        "Następnie każdy Obszar uszczegółowiliśmy, tzn. odpowiedzieliśmy sobie na pytanie, nad jakimi ",
        strong("Postawami"),
        " z danego Obszaru życia powinien pracować człowiek (wyjątek stanowią obszary Służby i Siły charakteru – podejście do nich opisaliśmy w odpowiednich rozdziałach). Która z nich wymaga Twojej pracy?",
      ),
      funnelStep(
        "4",
        "Drogowskaz",
        55,
        "W kolejnym kroku określiliśmy, w jaki konkretny sposób dana postawa może przejawiać się u człowieka. ",
        strong("Drogowskazy"),
        " mówią zatem o tym, jaka wiedza, umiejętności, doświadczenie, nawyki czy zachowania mogą Ci pomóc rozwinąć daną Postawę. Część Drogowskazów, przeznaczonych przede wszystkim dla zdobywających HR, wyróżniliśmy symbolem ",
        hrChip,
        ".",
      ),
      funnelStep(
        "5",
        "Zadanie",
        40,
        "Ostatni krok należy do Ciebie – jeśli z opiekunem stwierdzicie, że chcecie pracować nad daną postawą, to przyjrzyjcie się zaproponowanym Drogowskazom i ułóżcie odpowiednie ",
        strong("Zadanie"),
        ". Jedno zadanie może podążać za Drogowskazami z różnych Postaw.",
      ),
    ),
    h3("Przykład"),
    p(
      "Zauważyłeś, że źle Ci idzie w szkole, masz słabe oceny, a w sylwetce harcerza orlego czytasz, że: ",
      em(
        "Harcerz orli mierzy wysoko i wyrasta ponad przeciętność – orla jest jego lotów potęga!",
      ),
      " oraz ",
      em("Stara się swoim przykładem oddziaływać na otoczenie."),
      " Chciałbyś coś z tym zrobić.",
    ),
    ol(
      olItem([
        "Otwórz Vademecum na stronach opisujących obszar życia ",
        strong("„Rozum i intelekt”"),
        ". Zobacz, którą postawę chciałbyś wzmocnić albo która jest Twoją słabą stroną.",
      ]),
      olItem([
        "Załóżmy, że będzie to postawa ",
        strong("„Uczę się metodycznie i regularnie”"),
        ", ponieważ masz problem z takim sposobem uczenia (a jest on bardzo ważny, aby nauka była efektywna).",
      ]),
      olItem([
        "Spójrz na Drogowskazy, które podpowiedzą Ci, co możesz zrobić, aby zacząć uczyć się metodycznie i regularnie. Załóżmy, że chciałbyś wypracować ",
        strong(
          "„stałe pory w ciągu dnia i tygodnia, kiedy uczysz się regularnie (nie tylko pod klasówki)”",
        ),
        ".",
      ]),
      olItem(
        ["Wymyśl zadanie. Przykłady:"],
        ul(
          li(
            "Przez 2 miesiące będę uczył się w każdy poniedziałek od 18:00 do 20:00 oraz w czwartek od 17:00 do 20:00 (margines błędu – 80%).",
          ),
          li(
            "Przez miesiąc codziennie będę się uczył w swoim pokoju przez 45 minut od godz. 19:00 (margines błędu – 90%).",
          ),
          li("Na koniec roku będę miał ocenę 4 z matematyki."),
        ),
      ),
    ),
    p(
      "Możesz połączyć w jednym zadaniu pracę nad kilkoma obszarami. Przykładowo, być może nie masz bladego pojęcia o historii Polski (Obszar życia: ",
      strong("„Małe ojczyzny, Polska i świat”"),
      " → Postawa ",
      strong("„Znam polską historię i jej wpływ na teraźniejszość”"),
      " → Drogowskaz ",
      strong("„Potrafię opisać historię Polski od I rozbioru Polski”"),
      "). Możesz wtedy uwzględnić to w tym samym zadaniu, na przykład tak:",
    ),
    ul(
      li(
        "Przez 2 miesiące będę uczył się historii w każdy poniedziałek od 18:00 do 20:00 oraz w czwartek od 17:00 do 20:00 (margines błędu – 80%).",
      ),
      li(
        "Przez miesiąc codziennie będę się uczył lub czytał podręcznik do historii lub „Dzieje Polski” Andrzeja Nowaka, w swoim stałym miejscu do nauki, przez 45 minut od godz. 19:00 (margines błędu – 90%).",
      ),
    ),
    callout(
      "info",
      {},
      p(
        "Zobacz pełny zestaw drogowskazów w ",
        link("obszar-intelekt", "Rozum i intelekt"),
        ".",
      ),
    ),
  ],
};
