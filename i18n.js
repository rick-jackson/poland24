import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ruFaq from "./public/static/locales/ru/faq.json";
import ukFaq from "./public/static/locales/uk/faq.json";
import ruBanner from "./public/static/locales/ru/banner.json";
import ukBanner from "./public/static/locales/uk/banner.json";
import ruNavigation from "./public/static/locales/ru/navigation.json";
import ukNavigation from "./public/static/locales/uk/navigation.json";
import ruAbout from "./public/static/locales/ru/about.json";
import ukAbout from "./public/static/locales/uk/about.json";
import ruReviews from "./public/static/locales/ru/reviews.json";
import ukReviews from "./public/static/locales/uk/reviews.json";
import ruContacts from "./public/static/locales/ru/contacts.json";
import ukContacts from "./public/static/locales/uk/contacts.json";
import ruHeader from "./public/static/locales/ru/header.json";
import ukHeader from "./public/static/locales/uk/header.json";
import ruProfile from "./public/static/locales/ru/profile.json";
import ukProfile from "./public/static/locales/uk/profile.json";
import ruOrder from "./public/static/locales/ru/order.json";
import ukOrder from "./public/static/locales/uk/order.json";
import ruHowItWorks from "./public/static/locales/ru/howItWorks.json";
import ukHowItWorks from "./public/static/locales/uk/howItWorks.json";

i18n.use(initReactI18next).init({
  resources: {
    ru: {
      banner: ruBanner,
      faq: ruFaq,
      navigation: ruNavigation,
      about: ruAbout,
      reviews: ruReviews,
      contacts: ruContacts,
      header: ruHeader,
      profile: ruProfile,
      order: ruOrder,
      howItWorks: ruHowItWorks,
    },
    uk: {
      banner: ukBanner,
      faq: ukFaq,
      navigation: ukNavigation,
      about: ukAbout,
      reviews: ukReviews,
      contacts: ukContacts,
      header: ukHeader,
      profile: ukProfile,
      order: ukOrder,
      howItWorks: ukHowItWorks,
    },
  },
  fallbackLng: "uk",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
