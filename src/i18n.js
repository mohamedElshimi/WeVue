import { createI18n } from "vue-i18n";
import en from "./Locales/en.json";
import ar from "./Locales/ar.json";
import rus from "./Locales/rus.json";

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: "ar",
  fallbackLocale: "en",
  messages: { ar, en, rus },
  sync: true,
});

export default i18n;
