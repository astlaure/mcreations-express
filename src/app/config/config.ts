import 'dotenv/config';

const config = {
  port: process.env.SERVER_PORT,
  context: process.env.SERVER_CONTEXT?.endsWith('/')
    ? process.env.SERVER_CONTEXT.slice(0, -1)
    : process.env.SERVER_CONTEXT,
  secret: process.env.SERVER_SECRET,
  env: process.env.NODE_ENV,
  database: {
    uri: process.env.DATABASE_URI!,
    username: process.env.DATABASE_USERNAME!,
    password: process.env.DATABASE_PASSWORD!,
  },
};

export default config;
