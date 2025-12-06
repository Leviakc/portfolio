import enHead from "./en/head";
import esHead from "./es/head";
import { DEFAULT_LANGUAGE, type SupportedLanguage } from "./constants";

export const languages: Record<SupportedLanguage, string> = {
  en: "English",
  es: "Español",
};

export const defaultLang = DEFAULT_LANGUAGE;

export const ui = {
  en: {
    ...enHead,
  },
  es: {
    ...esHead,
  },
} as const;

