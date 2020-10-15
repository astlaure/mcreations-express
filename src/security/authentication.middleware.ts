import { Request, Response, NextFunction } from 'express';
import config from '../app/config/config';

const authenticationMiddleware = (req: Request, res: Response, next: NextFunction) => {
  if (req.isUnauthenticated()) {
    return res.redirect(`${config.context}/login`);
  }
  return next();
};

export default authenticationMiddleware;
