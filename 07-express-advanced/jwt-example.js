/**
 * for REST server we usuall authenticate the user with some sort of token authentication (JWT)
 * 
 * how it works is like this:
 * 
 * the client will do a login with email and password
 * you will authenticate using email password
 * if authentication is success our express server will generate a token and send it back to the client
 * 
 * every subsquent request the client will send the token
 * 
 * usually the client will jwt token in the request header
 * Authorization: Bearer <token>
 */

const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const jwt = require('jsonwebtoken');

const app = express();

app.use(express.urlencoded());
app.use(express.json());

app.use(passport.initialize());

const users = [
    {id: 1, firstName: 'Yariv', email: 'yariv@nerdeez.com', password: '12345'},
    {id: 2, firstName: 'Piglet', email: 'piglet@nerdeez.com', password: '12345'},
    {id: 3, firstName: 'Sweetness', email: 'sweetness@nerdeez.com', password: '12345'}
]

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    session: false
}, (email, password, done) => {
    const user = users.find((singleUser) => {
        return singleUser.email === email && singleUser.password === password;
    });
    if (user) {
        // function(err, user) {req.user = user;}
        done(null, user);
    } else {
        done(null, false, {message: 'Incorrect email or password'});
    }
}
));

passport.use(new JwtStrategy({
    secretOrKey: 'this will be used to encrypt usually from env',
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    session: false
}, function(payload, done) {
    const userId = payload.userId;
    const user = users.find((singleUser) => {
        return singleUser.id === userId;
    });
    if (user) {
        done(null, user)
    } else {
        done(null, false);
    }
}));

// body: {email: '...', password: '...'}
app.post('/login', 
    passport.authenticate('local', {session: false}),
    function(req, res, next) {   
        jwt.sign({            
            userId: req.user.id
        }, 'this will be used to encrypt usually from env', (err, token) => {
            if (err) {
                next(err);
            } else {
                res.send(`congrats ${req.user.firstName}! You are now logged in here is your token: the client will get a ${token}`);
            }            
        })     
        
    }
)

app.get('/stam', passport.authenticate('jwt', {session: false}), function(req, res) {
    res.send('YaY!');
})


app.listen(3000, function() {
    console.log('we are now listening...')
})