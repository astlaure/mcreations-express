import mongoose from 'mongoose';
import config from '../config/config';

const database = mongoose.connect(config.database.uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  authSource: 'admin',
  auth: {
    user: config.database.username,
    password: config.database.password,
  },
});

export default database;
