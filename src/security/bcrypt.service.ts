import bcrypt from 'bcrypt';

const hashPassword = async (password: string) => {
  return bcrypt.hash(password, 10);
};

const comparePassword = async (password: string, hash: string) => {
  return bcrypt.compare(password, hash);
};

const bcryptService = {
  hashPassword,
  comparePassword,
};

export default bcryptService;
