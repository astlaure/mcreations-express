import { Strategy } from 'passport-local';
import bcryptService from './bcrypt.service';
import User from './users/user.entity';

const LocalStrategy = new Strategy({
  session: true,
}, async (username, password, done) => {
  try {
    const user = await User.findOne({ username });

    if (!user) {
      return done(null, false);
    }

    const isValid = await bcryptService.comparePassword(password, user.password);

    if (!isValid) {
      return done(null, false);
    }

    return done(null, user);
  } catch (err) {
    return done(err);
  }
});

export default LocalStrategy;
