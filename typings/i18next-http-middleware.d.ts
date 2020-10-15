declare module 'i18next-http-middleware' {
  import { LanguageDetectorModule, i18n } from 'i18next';
  import { RequestHandler } from 'express';

  class LanguageDetector implements LanguageDetectorModule {
    type: 'languageDetector'
  }

  interface I18nextHttpMiddleware {
    LanguageDetector: LanguageDetector;
    handle: (config: i18n) => RequestHandler;
  }

  export default {} as I18nextHttpMiddleware;
}
