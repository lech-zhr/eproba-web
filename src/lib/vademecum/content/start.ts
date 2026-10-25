import { br, lede, p, right, strong } from "../dsl";
import type { Page } from "../types";

export const start: Page = {
  slug: "start",
  eyebrow: "Wstęp",
  title: "Wędrowniku!",
  navTitle: "Wędrowniku!",
  blocks: [
    lede(
      p(
        "Wędrowniku, nie wiem, czy też tak masz jak ja – ale kiedy zaczynasz coś naprawdę ważnego, z jednej strony czujesz ekscytację, a z drugiej gdzieś z tyłu głowy pojawia się myśl: „to nie będzie łatwe”. Skoro sięgasz po to Vademecum, to pewnie stoisz właśnie przed wyzwaniem zdobycia HO albo HR. Dla mnie to była świetna przygoda – wymagająca, momentami niewygodna, ale bardzo konkretna i zostająca na całe życie.",
      ),
      p(
        "Praca nad sobą przypomina pierwsze wyjście w góry. Na dole jest wizja – szczyt, widoki, satysfakcja. Im wyżej, tym trudniej: zimniej, bardziej pod wiatr, nogi bolą, każdy krok kosztuje więcej. W pewnym momencie pojawia się pokusa, żeby zawrócić – wrócić do ciepła, wygody, do tego, co znane. Tylko że… komfort nigdy nie był naszą opcją. I dobrze, bo wszystko, co naprawdę wartościowe, przychodzi z trudem.",
      ),
      p(
        "Pomyśl teraz o swoim życiu. Jakie „szczyty” chcesz zdobyć? Jakie cnoty wypracować, z jakimi słabościami się zmierzyć? Warto mierzyć wysoko – bo z czasem wcale nie robi się łatwiej. Ale właśnie ta droga daje coś realnego: życie sensowne, radosne, oparte na służbie i odpowiedzialności.",
      ),
      p(
        "W tym Vademecum znajdziesz konkret: jak pracować nad sobą przez stopnie, jak wygląda ich zdobywanie i jak dobrze stawiać sobie zadania. Są też wskazówki, co rozwijać – umiejętności, nawyki, doświadczenia.",
      ),
      p("Mierz wysoko. Może spotkamy się kiedyś na szczycie."),
      right(
        strong("HR Marcin Mucha (hm.)"),
        br,
        "Roztropny Niedźwiedź",
        br,
        "Naczelnik Harcerzy",
      ),
    ),
  ],
};
