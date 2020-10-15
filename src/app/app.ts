import express from 'express';
import appPlugin from './app.plugin';
import securityPlugin from '../security/security.plugin';
import webPlugin from '../web/web.plugin';
import config from './config/config';
import appRouter from './app.router';
import securityRouter from '../security/security.router';
import illustrationRouter from '../illustrations/illustration.router';
import illustrationAdminRouter from '../illustrations/illustration-admin.router';
import logger from './logger/logger';

const app = express();

appPlugin(app);
webPlugin(app);
securityPlugin(app);

logger.info('context:', config.context);

app.use(`${config.context}/admin/illustrations`, illustrationAdminRouter);
app.use(`${config.context}/illustrations`, illustrationRouter);
app.use(`${config.context}`, securityRouter);
app.use(`${config.context}`, appRouter);

export default app;
