/* eslint-disable no-console */
import bcryptService from '../bcrypt.service';

const argv = process.argv.splice(2);

bcryptService.hashPassword(argv[0])
  .then((response) => {
    console.log(response);
  })
  .catch(() => {
    console.error('cant encrypt the password');
  });
