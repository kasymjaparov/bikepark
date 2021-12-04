import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import translationEN from "./locales/en/translationEN.json"
import translationRU from "./locales/ru/translationRU.json"

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translationEN,
    },
    ru: {
      translation: translationRU,
    },
  },
  keySeparator: false,
  lng: localStorage.getItem("lang") || "ru",
  interpolation: {
    escapeValue: false,
  },
})
