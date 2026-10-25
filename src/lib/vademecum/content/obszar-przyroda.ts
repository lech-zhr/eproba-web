import { hrChip, hrLi, lede, li, p, section, signature, ul } from "../dsl";
import type { Page } from "../types";

export const obszarPrzyroda: Page = {
  slug: "obszar-przyroda",
  group: "obszary",
  eyebrow: "03 · Drogowskazy",
  title: "Przyroda i puszczaństwo",
  navTitle: "Przyroda i puszczaństwo",
  blocks: [
    lede(
      p(
        "Harcerstwo to bezdroża, puszcza, strumienie, góry i jeziora – to świeże powietrze!",
      ),
      p(
        "Życie harcerskie nierozerwalnie związane jest ze stałym doświadczaniem przyrody. Począwszy od konieczności radzenia sobie z nieprzewidywalnością i surowością pogody, przez ciekawość i zachwyt otaczającą nas puszczą, aż do zrozumienia, że sami jesteśmy kruchą częścią natury. Świadomość odpowiedzialności człowieka i fascynacja złożonością przyrodniczego świata to kapitał, który z harcerstwa wynosimy w życie rodzinne, zawodowe i społeczne.",
      ),
      signature(
        "Przełącz tryb powyżej — drogowskazy oznaczone ",
        hrChip,
        " są zaadresowane głównie do zdobywających Harcerza Rzeczypospolitej, ale każdy może się nimi zainspirować.",
      ),
    ),
    section(
      {
        id: "przyroda-p1",
        title: ["Czuję się częścią świata przyrody"],
        idx: "01",
      },
      ul(
        li(
          "Regularnie (np. raz w tygodniu) spędzam czas w otoczeniu przyrody (sportowo, rekreacyjnie, towarzysko), ograniczając korzystanie z rozpraszających dóbr cywilizacyjnych.",
        ),
        li(
          "Potrafię biwakować w różnych warunkach pogodowych z użyciem nowoczesnych technik bushcraftowych.",
        ),
        li(
          "Zdobyłem umiejętności niezbędne do dłuższego, kilkudniowego bytowania w terenie.",
        ),
        li(
          "Wykształciłem nawyk wykorzystywania roweru zamiast pojazdów elektrycznych i spalinowych, świadomie wybieram środki transportu.",
        ),
        li(
          "Znam zagrożenia wpływające na funkcjonowanie społeczeństw (np. susza hydrologiczna, klęski żywiołowe, zanieczyszczenia) – potrafię przygotować się na sytuacje kryzysowe związane z pogodą lub klimatem.",
        ),
        li("Pomyślnie przeszedłem próbę „Trzech Piór”."),
      ),
    ),
    section(
      {
        id: "przyroda-p2",
        title: ["Rozwijam swoją wiedzę o środowisku przyrodniczym"],
        idx: "02",
      },
      ul(
        li(
          "Korzystam z wiedzy naukowej dotyczącej zjawisk klimatycznych i przyrodniczych, weryfikuję źródła informacji w tej sprawie.",
        ),
        li(
          "Mam wiedzę dotyczącą cywilizacyjnego oddziaływania na środowisko naturalne – np. procesów produkcji ubrań, wykorzystywanych materiałów i tzw. fast fashion i na jej podstawie dokonuję świadomych wyborów (np. kupuję używane ubrania).",
        ),
        hrLi(
          "Śledzę, w jaki sposób kwestie dotyczące oddziaływania człowieka na środowisko wpływają na polityki publiczne i zmiany w przepisach.",
        ),
      ),
    ),
  ],
};
