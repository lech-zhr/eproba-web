import {
  hrChip,
  hrLi,
  lead,
  lede,
  li,
  link,
  p,
  section,
  signature,
  signposts,
  xref,
} from "../dsl";
import type { Page } from "../types";

export const obszarBog: Page = {
  slug: "obszar-bog",
  group: "obszary",
  eyebrow: "03 · Drogowskazy",
  title: "Bóg, wiara i duchowość",
  navTitle: "Bóg, wiara i duchowość",
  blocks: [
    lede(
      p(
        "Harcerska idea prowadzi nas przez drogę służby i miłości bliźniego. Głębokie i dojrzałe rozumienie źródeł tej idei to umiejętność stawiania pytań o to, czym jest dobro, prawda i piękno. Chrześcijanie wierzą, że źródłem tych wartości jest Bóg, a pogłębianie wiary jest drogą do ich lepszego poznania, pielęgnowania w swoim życiu i promieniowania nimi na otoczenie. Jednak duchowe potrzeby człowieka są niezależne od tego, czy uważamy się za ludzi wierzących czy też niewierzących albo wątpiących – wszyscy szukamy sensu tych wartości w naszym życiu. Każdy z nas będąc wiernym idei, która nas w ruchu harcerskim połączyła, powinien rozwijać swoją wrażliwość duchową i pogłębiać rozumienie zasad etycznych. To jest harcerska ścieżka wzrastania do dojrzałości moralnej.",
      ),
      p(
        "Niezależnie od tego, czy uważasz się za osobę niewierzącą, wątpiącą, obojętną wobec wiary lub głęboko wierzącą, przeczytaj drogowskazy, szukając tych, które będą dla Ciebie inspiracją do duchowego rozwoju w opisanych postawach.",
      ),
      signature(
        "Przełącz tryb powyżej — drogowskazy oznaczone ",
        hrChip,
        " są zaadresowane głównie do zdobywających Harcerza Rzeczypospolitej, ale każdy może się nimi zainspirować.",
      ),
    ),
    section(
      {
        id: "bog-p1",
        title: ["Poszukuję Logosu i transcendencji w świecie"],
        idx: "01",
      },
      lead(
        "Poszukuję rozumienia głębokich prawd o początku i celu rzeczywistości oraz źródle dobra, prawdy i piękna.",
      ),
      signposts(
        li(
          "Przeczytałem współczesną książkę lub wybrane teksty dotyczące sensu istnienia, harmonii przyrody lub stworzenia świata.",
        ),
        li(
          "Szukam odpowiedzi na pytania o to: czym jest dobro a czym zło, jaka jest relacja szczęścia i moralności, gdzie można znaleźć uniwersalne drogowskazy etycznego postępowania. Czytam teksty na ten temat i rozmawiam z osobami, które mają gruntowne w nim rozeznanie – np. z filozofem, etykiem, duchownym. Rozmawiam o tym w gronie harcerskim i nie tylko.",
        ),
        hrLi(
          "Studiuję teksty traktujące o idei dobra, cnotach. Próbuję odnieść je do współczesnych wyzwań etycznych i własnego życia.",
          xref(
            "Zajrzyj też do „",
            link(
              "obszar-kultura",
              "Poznaję klasyczne dzieła kultury i kształtuje swoją wrażliwość jako odbiorca sztuki",
            ),
            "”.",
          ),
        ),
        li(
          "Poznaję argumenty za istnieniem Boga (np. 5 dróg św. Tomasza z Akwinu, argumenty z przygodności bytu, argumenty ontologiczne, argument Kalam, argumenty z precyzyjnego dostrojenia itp.).",
        ),
        li("Z otwartością badam cuda i objawienia."),
        li(
          "Śledzę podcasty/ czytam współczesne artykuły, w których poruszane są dylematy dotyczące wiedzy naukowej i wiary.",
        ),
        hrLi(
          "Poznaję klasyczne dzieła i teksty traktujące o istocie Boga (np. Ojców Kościoła, Św. Tomasza z Akwinu). Szukam odpowiedzi na pytanie, co to znaczy, że Bóg jest prosty.",
        ),
      ),
    ),
    section(
      {
        id: "bog-p2",
        title: ["Kieruję się zasadami etyki chrześcijańskiej"],
        idx: "02",
      },
      lead(
        "Europejska kultura została ufundowana na etyce chrześcijańskiej, która przenika również ruch harcerski – co wyrażone jest w Prawie i Przyrzeczeniu Harcerskim. Chrześcijanin widzi swoje życie jako odpowiedź człowieka na wezwanie Boga i łaskę bycia z Nim w jedności, dlatego zgłębia nauczanie moralne Kościoła i kształtuje swoje sumienie w oparciu o Dekalog i Przykazanie Miłości. Moralne życie człowieka i harcerza jest przywiązaniem do chrześcijańskich zasad etycznych niezależnie od wiary w źródło tych wartości.",
      ),
      signposts(
        li(
          "Poznaję postać Jezusa przez współczesne książki i komentarze do Biblii.",
        ),
        li(
          "Poznaję nauczanie Jezusa (np. przeczytałem Kazanie na Górze z Ewangelii według św. Mateusza).",
        ),
        li(
          "Czytam współczesne teksty dot. rozumienia zagadnień etycznych, szczególnie etyki chrześcijańskiej (np. L. Kołakowski).",
        ),
        li(
          "Regularnie słucham podcasterów i youtuberów tłumaczących moralność chrześcijańską.",
        ),
        hrLi(
          "Poznaję stanowisko Kościoła katolickiego (i/lub mojego Kościoła) wobec współczesnych wyzwań bioetycznych. Umiem zająć w dyskusji stanowisko w podobnych sprawach.",
        ),
        hrLi(
          "Studiuję koncepcje prawa naturalnego chrześcijańskich i niechrześcijańskich autorów.",
        ),
        li(
          "Pogłębiam rozumienie cnót kardynalnych (roztropność, sprawiedliwość, umiarkowanie, męstwo) – uczestniczę w dyskusjach, spotkaniach na ten temat.",
        ),
        li(
          "Potrafię przeanalizować postępowanie wg kryteriów oceny moralnej czynu (przedmiot, intencja i okoliczności). Zastanawiam się nad rolą sumienia w życiu człowieka (np. uczestniczę w dyskusjach).",
        ),
        hrLi(
          "Poznaję zasady moralności seksualnej obowiązujące w moim Kościele. Wiem, co znaczy, że seksualność człowieka ma cel prokreacyjny i jednoczący.",
        ),
      ),
    ),
    section(
      {
        id: "bog-p3",
        title: [
          "Poznaję chrześcijaństwo i Kościół, rozwijam osobistą relację z Bogiem",
        ],
        idx: "03",
      },
      lead(
        "Kościoły chrześcijańskie przez wieki wytworzyły wielkie bogactwo różnych praktyk pobożnościowych oraz duchowości, które pomagają żyć w duchu własnego wyznania. Doświadczenie różnych praktyk i form duchowych jest też drogą poznania kultury chrześcijańskiej i otwarcia się na działanie Boga dla tych, którzy go poszukują.",
      ),
      signposts(
        li(
          "Uczestniczyłem przynajmniej raz (w życiu lub przynajmniej raz świadomie) w całym Triduum Paschalnym.",
        ),
        li(
          "Czytam literaturę chrześcijańską (np. św. Augustyna, Tolkiena, Chestertona, Lewisa, Cormaca McCarthy’ego).",
          xref(
            "Zajrzyj też do „",
            link(
              "obszar-kultura",
              "Poznaję klasyczne dzieła kultury i kształtuje swoją wrażliwość jako odbiorca sztuki",
            ),
            "”.",
          ),
        ),
        hrLi(
          "Odbyłem osobistą refleksyjną wędrówkę na łonie natury, w której zmierzyłem się z jednym z transcendentalnych pytań",
          xref(
            "Zajrzyj też do „",
            link("obszar-przyroda", "Czuję się częścią świata przyrody"),
            "”.",
          ),
        ),
        li(
          "Poznałem różnice doktrynalne między Kościołami chrześcijańskimi. Wiem, co łączy, a co różni chrześcijaństwo z innymi wielkimi religiami monoteistycznymi.",
        ),
        hrLi(
          "Poznaję żywoty świętych, którzy mnie inspirują, odbyłem intelektualną i fizyczną pielgrzymkę śladem jednego z nich. (W szczególności dla katolików i obrządków wschodnich).",
        ),
        li("Uczestniczyłem w kilkudniowej pieszej lub rowerowej pielgrzymce."),
        li(
          "Studiuję historię mojego Kościoła. Umiem zmierzyć się z pytaniami o błędy i niemoralne działania mojego Kościoła w przeszłości i współcześnie.",
        ),
        li(
          "Świadomie podejmuję się ćwiczeń duchowych – np. poszczę w wybranej intencji, regularnie odmawiam różaniec.",
        ),
        hrLi("Uczestniczyłem w zamkniętych rekolekcjach."),
        hrLi(
          "Podjąłem się stałej pracy ze spowiednikiem. (W szczególności dotyczy katolików).",
        ),
      ),
    ),
    section(
      {
        id: "bog-p4",
        title: ["Jestem otwarty na wspólnotę duchową"],
        idx: "04",
      },
      lead(
        "Wartości duchowe poznaje się przez dialog z bliźnimi, wspólne stawianie pytań i poszukiwanie odpowiedzi. Chrześcijanie wierzą też, że to sam Bóg objawił się wobec całego Kościoła i ustanowił się jego Głową. Dlatego pogłębiają oni swoją wiarę również przez aktywne uczestnictwo w życiu Kościoła i utożsamianie się z jego wspólnotą. Najważniejszą wspólnotową formą działania Boga wobec Jego Kościoła i Kościoła wobec Boga jest liturgia – życie nią jest szczególnym elementem relacji z Bogiem.",
      ),
      signposts(
        li(
          "Brałem udział w służbie na wydarzeniu religijnym (np. Lednicy, ŚDM, Golgocie młodych itp).",
          xref(
            "Zajrzyj też do „",
            link("obszar-sluzba", "Nieść chętną pomoc bliźnim"),
            "”.",
          ),
        ),
        li(
          "Potrafię w ramach działań drużyny (np. na wycieczce/ wędrówce) opowiedzieć o wpływie kościoła na rozwój kultury (np. w kontekście architektury, sztuki, gospodarki, itp.) – posługując się konkretnymi przykładami.",
        ),
        li(
          "Brałem udział w rekolekcjach dla poszukujących (np. Kurs Alfa itp.).",
        ),
        li(
          "Rozmawiałem z mnichem lub z siostrą klauzurową na temat ich sposobu życia, motywacji i wiary.",
        ),
        li("Wziąłem udział w spotkaniu z osobą, która przeżyła nawrócenie."),
        li(
          "Zaangażowałem się we współtworzenie dzieła charytatywnego w mojej wspólnocie – parafii lub duszpasterstwie.",
          xref(
            "Zajrzyj też do „",
            link("obszar-sluzba", "Nieść chętną pomoc bliźnim"),
            "”.",
          ),
        ),
        li(
          "Współtworzyłem rozbudowaną oprawę liturgii w mojej wspólnocie (np. podczas Triduum Paschalnego, Mszy Pasterskiej, procesji Bożego Ciała).",
        ),
        hrLi(
          "Podjąłem się uczestnictwa w jednej z grup formacyjnych w moim Kościele (np. neokatechumenat, Opus Dei, oaza, KSM, duszpasterstwo Tradycji).",
        ),
        li(
          "Potrafię się duchowo przygotować do poszczególnych części Mszy Świętej, wiem, co się dzieje w każdej z nich. (Dotyczy w szczególności katolików i prawosławnych).",
        ),
        li(
          "Korzystam z lekcjonarza, potrafię odnaleźć właściwe czytania mszalne i zaśpiewać psalm.",
        ),
        hrLi(
          "Potrafię modlić się Liturgią Godzin lub Lectio Divina. (Dotyczy w szczególności katolików).",
        ),
      ),
    ),
    section(
      { id: "bog-p5", title: ["Poznaję Pismo Święte"], idx: "05" },
      lead(
        "Biblia jest fascynującym literackim zapisem korzeni cywilizacji, w której wszyscy wyrastamy niezależnie od naszych przekonań religijnych. Pismo Święte odczytywane zgodnie z Tradycją Kościoła jest dla wierzących w Boga podstawą wiary chrześcijańskiej. Znajomość Biblii jako Słowa Bożego jest drogą do Jego poznania.",
      ),
      signposts(
        li(
          "Znam podstawową strukturę Nowego i Starego Testamentu, przeczytałem wybrane Ewangelie w całości.",
        ),
        li(
          "Śledzę, w jaki sposób treść Biblii była inspiracją do stworzenia innych wielkich dzieł literatury i sztuki – np. odwiedziłem wystawę malarstwa religijnego, uczestniczyłem w koncercie pasyjnym, przeczytałem jeden z klasycznych utworów z motywem biblijnym. Uczestniczyłem w spotkaniu/ dyskusji na ten temat.",
          xref(
            "Zajrzyj też do „",
            link(
              "obszar-kultura",
              "Poznaję klasyczne dzieła kultury i kształtuje swoją wrażliwość jako odbiorca sztuki",
            ),
            "”.",
          ),
        ),
        li(
          "Przeczytałem wybrany, współczesny komentarz do Biblii (np. Rozmowy o Biblii, A. Świderkówna), uczestniczyłem w dyskusji na interesujący mnie temat z nią związany.",
        ),
        li("Regularnie czytam Pismo Święte."),
        hrLi(
          "Przeczytałem teksty biblijne mówiące o relacji między wiarą a uczynkami. Zapoznałem się z komentarzami mojego Kościoła do tych tekstów.",
        ),
      ),
    ),
  ],
};
