/**
 * create an express server
 * request foo => hello world
 * request bar => we need to access what foo put in the session
 */

const express = require('express');
const session = require('express-session');

const app = express();

// session() => function(req, res, next) {}
app.use(session({
    secret: process.env.SECRET_SESSION || 'hello',
    cookie: {
        sameSite: true,
        httpOnly: true
    },
    // store: new SomeStore()
}));

app.get('/foo', function(req, res) {
    req.session.hello = 'world';
    res.send('we set the session!');
});

''
""

// template string
`
this is a multi line string
you can write multiple lines
and also embed javascript in the text ${Math.random()}
`

app.get('/bar', function(req, res) {
    res.send(`the key in session is: ${req.session.hello}`);
});

app.listen(3000, function() {
    console.log('we are now listening...')
});

