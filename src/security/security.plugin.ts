import { Application } from 'express';
import cookieSession from 'cookie-session';
import csurf from 'csurf';
import security from './security';
import config from '../app/config/config';

const securityPlugin = (app: Application) => {
  app.use(cookieSession({ secret: config.secret }));
  app.use(security.initialize());
  app.use(security.session());
  app.use(csurf());
  app.use((req, res, next) => {
    res.locals.csrf = req.csrfToken();
    return next();
  });
};

export default securityPlugin;
