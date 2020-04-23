/**
 * we are creating our first express server
 */

 // express is a function
 // factory for application
 const express = require('express');
 const adminApp = require('../idf-admin/admin');

 // calling express will create an express Application
 const app = express();

//  app.get('/foo', function(req, res) {
//     // res.send('foo bar');

//     setTimeout(() => {
//         throw new Error()
//     })
//  })

// /admin/login
app.use('/admin', adminApp);

// authentication
app.get('/', function(req, res, next) {
    // res.status(201).send('hello');
    next();
});

app.all(['/', '/admin'], function(req, res, next) {
    // some authentication logic
    next();
})

// send the response
// app.get, app.post, app.put
app.all('/', function(req, res) {
    // some authentication logic

    res.send('hello');
});

app.get('/admin', function() {
    // some authentication logic

    res.send('admin')
})

 // listen opens a server and the callback will be called when the server starts listening to the port
 
 // /admin/login
 // /
 app.listen(3000, function() {
    console.log('our server is now listening on port 3000');
 });


 // /login
// adminApp.listen(3001, function() {
//     console.log('our server is now listening on port 3000');
// })

// require('../idf-admin/main');