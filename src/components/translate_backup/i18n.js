import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './Languages/en.json';
import es from './Languages/es.json';
import pt from './Languages/pt.json';
import de from './Languages/de.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      de: {
        translations: de,
      },
      en: {
        translations: en,
      },
      es: {
        translations: es,
      },
      pt: {
        translations: pt,
      },
    },
    fallbackLng: 'en',
    // debug: true,

    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
