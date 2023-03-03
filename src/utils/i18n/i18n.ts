import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import headerTraduction from "./components/Header.json";
import introSectionTraduction from "./components/IntroSection.json";
import aboutMeTraduction from "./components/About.json";
import skillsTraduction from "./components/Skills.json";
import workTraduction from "./components/Works.json";
import time from "./time.json";
import interactiveRoomTrad from "./components/InteractiveRoom.json";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          ...time.en,
          ...headerTraduction.en,
          ...introSectionTraduction.en,
          ...aboutMeTraduction.en,
          ...skillsTraduction.en,
          ...workTraduction.en,
          contact: { title: "You can contact me here:" },
          ...interactiveRoomTrad.en,
        },
      },
      fr: {
        translation: {
          ...time.fr,
          ...headerTraduction.fr,
          ...introSectionTraduction.fr,
          ...aboutMeTraduction.fr,
          ...skillsTraduction.fr,
          ...workTraduction.fr,
          contact: { title: "Vous pouvez me contacter ici :" },
          ...interactiveRoomTrad.fr,
        },
      },
    },
  });

export default i18n;
