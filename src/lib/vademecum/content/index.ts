import type { Page } from "../types";
import { obszarBog } from "./obszar-bog";
import { obszarCharakter } from "./obszar-charakter";
import { obszarIntelekt } from "./obszar-intelekt";
import { obszarKultura } from "./obszar-kultura";
import { obszarOjczyzny } from "./obszar-ojczyzny";
import { obszarPasje } from "./obszar-pasje";
import { obszarPrzyroda } from "./obszar-przyroda";
import { obszarRodzina } from "./obszar-rodzina";
import { obszarSluzba } from "./obszar-sluzba";
import { obszarZdrowie } from "./obszar-zdrowie";
import { probaFaq } from "./proba-faq";
import { probaKapitula } from "./proba-kapitula";
import { probaObszary } from "./proba-obszary";
import { probaOpiekun } from "./proba-opiekun";
import { probaRytm } from "./proba-rytm";
import { probaZadanie } from "./proba-zadanie";
import { start } from "./start";
import { wedrownik } from "./wedrownik";

export const PAGES: Page[] = [
  start,
  wedrownik,
  probaOpiekun,
  probaKapitula,
  probaRytm,
  probaZadanie,
  probaObszary,
  probaFaq,
  obszarBog,
  obszarCharakter,
  obszarIntelekt,
  obszarZdrowie,
  obszarSluzba,
  obszarOjczyzny,
  obszarRodzina,
  obszarPasje,
  obszarKultura,
  obszarPrzyroda,
];
