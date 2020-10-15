import app from './app/app';
import database from './app/database/database';
import logger from './app/logger/logger';

(async () => {
  try {
    await database;
    app.listen(3000, () => {
      logger.info('Server started.');
    });
  } catch (err) {
    logger.error('Cannot start the server.');
  }
})();
