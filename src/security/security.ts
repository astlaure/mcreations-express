import passport from 'passport';
import LocalStrategy from './local.strategy';
import User, { IUser } from './users/user.entity';

passport.use(LocalStrategy);

passport.serializeUser((user: IUser, done) => {
  return done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);

    if (!user) {
      return done(null, false);
    }

    return done(null, user);
  } catch (err) {
    return done(err);
  }
});

export default passport;
