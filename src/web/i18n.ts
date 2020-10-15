import path from 'path';
import i18next from 'i18next';
import i18nextMiddleware from 'i18next-http-middleware';
import Backend from 'i18next-fs-backend';

i18next
  .use(i18nextMiddleware.LanguageDetector)
  .use(Backend)
  .init({
    supportedLngs: ['fr', 'en'],
    preload: ['en', 'fr'],
    fallbackLng: 'fr',
    debug: false,
    detection: {
      order: ['querystring', 'cookie'],
      caches: ['cookie'],
      lookupQuerystring: 'lang',
    },
    backend: {
      loadPath: 'resources/locales/{{lng}}.json',
    },
  });

export default i18next;
