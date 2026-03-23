import enFooter from "./en/footer";
import enAbout from "./en/about";
import enContact from "./en/contact";
import enNav from "./en/nav";
import enHero from "./en/hero";
import esFooter from "./es/footer";
import esAbout from "./es/about";
import esContact from "./es/contact";
import esNav from "./es/nav";
import esHero from "./es/hero";
import esWork from "./es/work-section/";
import enWork from "./en/work-section/";
import { DEFAULT_LANGUAGE, type SupportedLanguage } from "@/consts/constants";

export const languages: Record<SupportedLanguage, string> = {
  en: "English",
  es: "Español",
};

export const defaultLang = DEFAULT_LANGUAGE;

export const ui = {
  en: {
    ...enFooter,
    ...enAbout,
    ...enContact,
    ...enNav,
    ...enHero,
    ...enWork,
  },
  es: {
    ...esFooter,
    ...esAbout,
    ...esContact,
    ...esNav,
    ...esHero,
    ...esWork,
  },
} as const;
