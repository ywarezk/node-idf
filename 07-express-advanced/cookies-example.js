/**
 * cookies
 * request1: foo
 * request2: bar
 * we need to use a middleware to use cookie
 * cookie-parser
 * 
 */

const express = require('express');
const cookieParser = require('cookie-parser')

const app = express();

app.use(cookieParser());

app.get('/foo', function(req, res) {
    res.cookie('hello', 'world', {
        domain: 'bar.localhost,localhost,foo.localhost',
        path: '/bar',
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: true
    });
    res.send('we set the cookie');
});

app.get('/bar', function(req, res) {
    res.send(`the cookie value is: ${req.cookies.hello}`);
})

app.listen(3000, function() {
    console.log('we are now listening...')
})

// evil.com is my hacker site
// bank.com

// link to evil.com

// from evil.com im sending a request to bank.com

// location.href = 'http://localhost:3000/bar'

// cookies are sent automatically by the browser
// the browser will check the domain and the path and automatically send the cookies he saved for that domain and path
// even if the request originated from a bad hacker site (evil.com)
// CSRF

// JWT
// if you are saving secret token in the cookies (Recommend not to do that)
// secure, httpOnly, sameSite

// cookies are used to save the following:
// - session management
// - theme, language
// - tracking - google analytics