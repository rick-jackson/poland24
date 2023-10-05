import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ruFaq from "./public/static/locales/ru/faq.json";
import ukFaq from "./public/static/locales/uk/faq.json";
import ruBanner from "./public/static/locales/ru/banner.json";
import ukBanner from "./public/static/locales/uk/banner.json";
import ruNavigation from "./public/static/locales/ru/navigation.json";
import ukNavigation from "./public/static/locales/uk/navigation.json";

i18n.use(initReactI18next).init({
  resources: {
    ru: {
      banner: ruBanner,
      faq: ruFaq,
      navigation: ruNavigation,
    },
    uk: {
      banner: ukBanner,
      faq: ukFaq,
      navigation: ukNavigation,
    },
  },
  fallbackLng: "ru",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
