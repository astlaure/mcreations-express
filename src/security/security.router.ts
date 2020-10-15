import express from 'express';
import config from '../app/config/config';
import authenticationMiddleware from './authentication.middleware';
import security from './security';

const securityRouter = express.Router();

securityRouter.get('/login', (req, res) => {
  return res.render('security/login');
});

securityRouter.post('/login', security.authenticate('local', { session: true }), (req, res) => {
  return res.redirect(`${config.context}/`);
});

securityRouter.post('/logout', authenticationMiddleware, (req, res) => {
  req.logout();
  return res.redirect(`${config.context}/`);
});

export default securityRouter;
