/**
 * lets see some middlewares in action
 */

const express = require('express');

const app = express();

// req of method GET path: /foo - passing 3 middleware
// req of method POST path /foo - passing 1 middleware

// /foo
app.get('/foo', [function(req, res, next) {
    req.hello = 'world';
    // req.user = {id:1, firstName: ...}
    next()
}, function(req, res, next) {
    req.foo = 'bar';
    next();
}]);

// app.get('/foo', function(req, res, next) {
//     req.foo = 'bar';
//     next();
// })

// /foo/
// app.all('/foo/*')

// /foo, /foo/bar , /foo/bar/hello, /foo/*
app.use('/foo', function(req, res) {
    res.send(req.hello);
})

app.listen(3000, function() {
    console.log('we are now listening...');
})