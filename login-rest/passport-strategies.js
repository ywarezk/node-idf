/**
 * configure passport for the different strategies
 * passport-local
 * passport-jwt
 */

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('./models/user.model');
const bcrypt = require('bcrypt');

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, async (email, password, done) => {
    try {
        const user = await User.findOne({
            where: {
                email
            }
        });
        if (!user) return done(null, false);
        const isSuccess = await bcrypt.compare(password, user.password);
        if (isSuccess) {
            done(null, user);
        } else {
            done(null, false)
        }
    } catch(err) {
        done(err);
    }
}));

passport.use(new JWTStrategy({
    secretOrKey: 'secret',
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}, async (payload, done) => {
    try {
        const userId = payload.userId;
        const user = await User.findByPk(userId);
        if (!user) return done(null, false);
        done(null, user);
    } catch(err) {
        done(err);
    }
    
}))