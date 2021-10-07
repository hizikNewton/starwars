import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { AppCachedKeys } from "../constants/cache";
import en from "../locales/en.json";
import { fetchCachedData } from "./cache";

i18n.use(initReactI18next).init({
  resources: {
    en,
  },
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export const currentLanguage = (): "en" | null =>
  fetchCachedData<"en">(AppCachedKeys.AppLanguage);

export default i18n;
