import {
  hrChip,
  hrLi,
  lede,
  li,
  p,
  section,
  signature,
  strong,
  sup,
  ul,
} from "../dsl";
import type { Page } from "../types";

export const obszarZdrowie: Page = {
  slug: "obszar-zdrowie",
  group: "obszary",
  eyebrow: "03 · Drogowskazy",
  title: "Zdrowie i sprawność fizyczna",
  navTitle: "Zdrowie i sprawność",
  blocks: [
    lede(
      p(
        strong("Harcerz jest sprawny i dba o swoje zdrowie!"),
        " Od tego będzie zależało, na ile będziemy w stanie pełnić w życiu służbę – w końcu żona potrzebuje zdrowego i zadbanego męża, dzieci potrzebują silnego taty, Polska potrzebuje obywateli zdolnych stawać w jej obronie, pracodawcy poszukują zdrowych współpracowników. Warto o tym myśleć już teraz.",
      ),
      signature(
        "Przełącz tryb powyżej — drogowskazy oznaczone ",
        hrChip,
        " są zaadresowane głównie do zdobywających Harcerza Rzeczypospolitej, ale każdy może się nimi zainspirować.",
      ),
    ),
    section(
      {
        id: "zdrowie-p1",
        title: ["Jestem wysportowany i sprawny fizycznie"],
        idx: "01",
      },
      ul(
        li("Potrafię zrealizować program treningowy."),
        li(
          "Planuję dzień tak, aby w wykonywanie codziennych obowiązków wplatać krótkie aktywności fizyczne (np. spacer, jazda na rowerze, ćwiczenia rozciągające).",
        ),
        hrLi(
          "Mam wyrobiony nawyk regularnego podejmowania aktywności fizycznej. Jest ona częścią mojej tygodniowej rutyny.",
        ),
        hrLi("Potrafię zrealizować wyczyn fizyczny na poziomie mistrzowskim."),
      ),
    ),
    section(
      { id: "zdrowie-p2", title: ["Dbam o swoje zdrowie"], idx: "02" },
      ul(
        li(
          "Wiem, jaka jest moja właściwa waga, jaka jest odpowiednia dla mnie dieta (np. ile kalorii powinienem spożywać dziennie) i trzymam się jej.",
        ),
        li(
          "Znam dobre nawyki żywieniowe (regularne posiłki, odpowiednie składniki, unikanie „energetyków” itp.) i wcielam je w życie.",
        ),
        li("Mam stałe godziny snu (min. 8 godzin dziennie)."),
        li(
          "Rozumiem ryzyko stosowania jakichkolwiek środków psychoaktywnych (np. alkohol, dopalacze, narkotyki) i uzależniających (np. nikotyna).",
        ),
      ),
    ),
    section(
      {
        id: "zdrowie-p3",
        title: ["Dbam o swoją higienę i dobry wygląd"],
        idx: "03",
      },
      ul(
        li(
          "Regularnie się golę lub strzygę brodę, codziennie myję się i używam dezodorantu.",
        ),
        li(
          "Potrafię zająć się swoimi problemami dermatologicznymi (np. poprzez konsultacje z kosmetyczką i dermatologiem).",
        ),
      ),
    ),
    section(
      {
        id: "zdrowie-p4",
        title: ["Zachowuję higienę cyfrową", sup("1")],
        idx: "04",
      },
      ul(
        li(
          "Wiem, jak działa uzależnienie od urządzeń ekranowych i jakie niesie skutki.",
        ),
        li(
          "Potrafię funkcjonować bez korzystania z jakichkolwiek mediów społecznościowych przez dłuższy czas (np. Wielki Post).",
        ),
        li(
          "Nie używam telefonu w czasie lekcji, posiłków rodzinnych, przechodząc przez przejście dla pieszych, prowadząc samochód, rower, po godz. 22.00 itd.",
        ),
        li(
          "Mierzę w aplikacji czas korzystania z urządzeń ekranowych, wyznaczam sobie limity i ich przestrzegam.",
        ),
      ),
      p(
        sup("1"),
        " Sprawdź w jednym z dostępnych w Internecie testów higieny cyfrowej, np. Test Higieny Cyfrowej ICO – Instytut Cyfrowego Obywatelstwa.",
      ),
    ),
  ],
};
