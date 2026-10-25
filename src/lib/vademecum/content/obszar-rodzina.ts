import {
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

export const obszarRodzina: Page = {
  slug: "obszar-rodzina",
  group: "obszary",
  eyebrow: "03 · Drogowskazy",
  title: "Rodzina i wybór drogi życiowej",
  navTitle: "Rodzina i droga życiowa",
  blocks: [
    lede(
      p(
        "Harcerz jest karny i posłuszny rodzicom – tego uczymy się już na początku harcerskiej ścieżki. Pewnie nie raz mierzyłeś się z tym punktem Prawa Harcerskiego – czasami w duchu pokory, a być może także w duchu sprzeciwu. Teraz, gdy stopniowo zaczynasz brać większą odpowiedzialność za siebie i swoich bliskich, pomyśl o tym punkcie PH z innej perspektywy – już za kilka lat to Ty będziesz musiał brać odpowiedzialność za swoje własne dzieci, zasługiwać swoimi decyzjami na zaufanie i posłuszeństwo oraz kształtować w nich dyscyplinę.",
      ),
      signature(
        "Przełącz tryb powyżej — drogowskazy oznaczone ",
        hrChip,
        " są zaadresowane głównie do zdobywających Harcerza Rzeczypospolitej, ale każdy może się nimi zainspirować.",
      ),
    ),
    section(
      {
        id: "rodzina-p1",
        title: ["Znam swoją rodzinę i moje pochodzenie"],
        idx: "01",
      },
      signposts(
        li(
          "Znam historię mojej rodziny (w szczególności na tle wydarzeń historii powszechnej).",
        ),
        li(
          "Utrzymuję kontakt z dziadkami. Podjąłem próbę nawiązania relacji ze słabo znanym mi członkiem dalszej rodziny.",
        ),
      ),
    ),
    section(
      {
        id: "rodzina-p2",
        title: ["Buduję głębokie, oparte na szczerości relacje z rodzicami"],
        idx: "02",
      },
      signposts(
        li(
          "Wykonuję polecenie otrzymane od rodziców lub negocjuję jego zmianę, argumentując swoje zdanie w odpowiedzialny sposób.",
        ),
        li(
          "Potrafię w gronie rodziny podziękować swoim rodzicom za ich trud opieki nade mną.",
        ),
        li(
          "Przejmuję od rodziców coraz trudniejsze i bardziej odpowiedzialne zadania związane z funkcjonowaniem naszej rodziny.",
        ),
        hrLi(
          "Potrafię szczerze porozmawiać z moimi rodzicami o moich problemach i trudnościach w domu.",
        ),
      ),
    ),
    section(
      {
        id: "rodzina-p3",
        title: ["Jestem zaangażowany w życie mojej rodziny"],
        idx: "03",
      },
      signposts(
        li(
          "Potrafię zorganizować wycieczkę dla rodziny lub jej części (np. w wyjazd z ojcem).",
        ),
        li(
          "Potrafię zaproponować wprowadzenie w życiu rodziny nowego, wspólnego zwyczaju.",
        ),
        li("Pomagam rodzeństwu w nauce."),
        li(
          "Podjąłem próbę poprawienia relacji z członkiem mojej rodziny, z którym mam najsłabsze relacje.",
        ),
        hrLi(
          "Potrafię przez tydzień mieszkać samodzielnie, wykonując wszystkie niezbędne obowiązki domowe (pranie, gotowanie, zakupy, sprzątanie itd.).",
        ),
      ),
    ),
    section(
      {
        id: "rodzina-p4",
        title: ["Rozpoznaję swoje powołanie i przygotowuję się do niego"],
        idx: "04",
      },
      signposts(
        li(
          "Potrafię przez pół dnia zaopiekować się małym dzieckiem (w tym zmienić pieluszkę, nakarmić je, umyć itp.).",
        ),
        li(
          "Dbam o swoją czystość – wiem, czym grozi pornografia i rozwiązłość seksualna. Jeśli ten problem mnie dotyczy, powziąłem walkę z oglądaniem przeze mnie pornografii.",
        ),
        li(
          "Potrafię wyjść z inicjatywą do dziewczyny (np. zaproponować wspólny kurs tańca, zaprosić na randkę itp.).",
        ),
        hrLi("Aktywnie rozeznaję, czy mam powołanie do kapłaństwa."),
        hrLi(
          "Wiem, co to (zgodnie z katolicką nauką społeczną) znaczy, że seksualność człowieka ma cel prokreacyjny i jednoczący.",
        ),
        hrLi(
          "Rozwijam relację ze swoją dziewczyną, rozmawiam z nią o wartościach, działamy wspólnie w różnych przedsięwzięciach.",
        ),
      ),
    ),
  ],
};
