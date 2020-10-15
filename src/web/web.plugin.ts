import express, { Application } from 'express';
import hbs from 'hbs';
import i18nextHttpMiddleware from 'i18next-http-middleware';
import i18n from './i18n';
import layoutHelper from './layout.helper';
import i18nHelper from './i18n.helper';
import uploadMiddleware from './upload.middleware';

const webPlugin = (app: Application) => {
  app.set('view engine', 'hbs');
  app.set('views', 'resources/views');

  hbs.registerPartials('resources/views/partials');
  hbs.registerHelper('extend', layoutHelper.extendHelper);
  hbs.registerHelper('block', layoutHelper.blockHelper);
  hbs.registerHelper('t', i18nHelper);

  app.use(express.static('public'));
  app.use('uploads', express.static('storage/uploads'));
  app.use(uploadMiddleware.single('photo'));
  app.use(i18nextHttpMiddleware.handle(i18n));
};

export default webPlugin;
