import { Application } from 'express';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import config from './config/config';

const appPlugin = (app: Application) => {
  app.use(helmet());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use((req, res, next) => {
    res.locals.base = config.context || '/';
    return next();
  });
};

export default appPlugin;
