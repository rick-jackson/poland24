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
import ruHome from "./public/static/locales/ru/home.json";
import ukHome from "./public/static/locales/uk/home.json";
import ruCommon from "./public/static/locales/ru/common.json";
import ukCommon from "./public/static/locales/uk/common.json";
import ruRequest from "./public/static/locales/ru/request.json";
import ukRequest from "./public/static/locales/uk/request.json";
import ruCountry from "./public/static/locales/ru/country.json";
import ukCountry from "./public/static/locales/uk/country.json";

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
      home: ruHome,
      common: ruCommon,
      request: ruRequest,
      country: ruCountry,
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
      home: ukHome,
      common: ukCommon,
      request: ukRequest,
      country: ukCountry,
    },
  },
  fallbackLng: "uk",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
