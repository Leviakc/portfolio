import enHead from "./en/head";
import enFooter from "./en/footer";
import esHead from "./es/head";
import esFooter from "./es/footer";
import { DEFAULT_LANGUAGE, type SupportedLanguage } from "@/consts/constants";

export const languages: Record<SupportedLanguage, string> = {
  en: "English",
  es: "Español",
};

export const defaultLang = DEFAULT_LANGUAGE;

export const ui = {
  en: {
    ...enHead,
    ...enFooter
  },
  es: {
    ...esHead,
    ...esFooter
  },
} as const;
