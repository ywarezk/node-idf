/**
 * Playing with passport for authenticating the user
 * Can we authenticate without a session? YES
 * 
 * passport will use all our patterns
 * - Middleware creator
 * - Strategy
 * - Extending the request object (passport will add a user property to the request)
 * 
 * /api/restricted
 * /api/restricted/dashboard
 * /api/restricted/admin
 * 
 * app.use('/api/restricted', passport.authenticate('someStrategy'));
 * app.use('/api/restricted', restrictedRouter);
 * 
 * passport.authenticate() => will create a middleware function(req, res, next) 
 * that middleware will
 * - req.user
 * - next()
 */

const express = require('express');
const passport = require('passport');
const session = require("express-session")
const LocalStrategy = require('passport-local').Strategy;

const app = express();

app.use(express.urlencoded());
app.use(express.json());
app.use(require('cookie-parser')());
app.use(session({
    secret: 'usually from env variable'
}));
app.use(passport.initialize());
app.use(passport.session());

// do not save the password in the database
// bcrypt the password and save the encrypted password

// how can i log in the user if the password are encrypted.
// you need to take 

// it's important to use TLS when user log
const users = [
    {id: 1, firstName: 'Yariv', email: 'yariv@nerdeez.com', password: '12345'},
    {id: 2, firstName: 'Piglet', email: 'piglet@nerdeez.com', password: '12345'},
    {id: 3, firstName: 'Sweetness', email: 'sweetness@nerdeez.com', password: '12345'}
]

// the last argument in the strategy will be a callback function
passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    session: true
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
))

// if we are working with sessions
// we need to tell passport what to save in the session user.id
// also we need to tell passport: given the session data user.id how to i get the full user
// done => function(err, someDataToSaveInSession) {req.session.passportKey = someDataToSaveInSession}
passport.serializeUser(function(user, done) {
    done(null, user.id);
});


// the done is a function with this signature function(err, user) {req.user=user}
passport.deserializeUser(function(id, done) {
    const user = users.find((singleUser) => {
        return singleUser.id === id
    });
    done(null, user);
})

// body: {email: '...', password: '...'}
app.post('/login', 
    passport.authenticate('local', {session: true}),
    function(req, res, next) {
        req.logIn(req.user, function (err) { // <-- Log user in
            if (err) {
                next(err);
            }
         });
        res.send(`congrats ${req.user.firstName}! You are now logged in`);
    }
)

app.get('/stam', function(req, res) {
    if (req.user) {
        res.send(`hey ${req.user.firstName}`);
    } else {
        res.send(`you are not logged in`);
    }
});


app.listen(3000, function() {
    console.log('we are now listening...')
})