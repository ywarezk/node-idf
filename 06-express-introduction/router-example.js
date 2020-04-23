/**
 * showing router as another unit to hold middlewares
 */

const express = require('express')
const usersRouter = require('./users.router');

const app = express();

// get all the users
// app.get('/api/users', function(req, res) {

// })

// // create new user
// app.post('/api/users', function(req, res) {

// })

// // this will update a certain user
// app.put('/api/users/:id', function(req, res) {

// });

// app.delete('/api/users/:id', function(req, res) {

// });

// /api/users, /api/users/foo/hello
app.use('/api/users', usersRouter);

// app.use([path,] callback [, callback...])
// app.use(function(req, res, next) {}) this is like app.use('/', function(req, res, next) {})
// app.use(function(req, res, next) {})


app.listen(3000, function() {
     console.log('we are now listening on port 3000');
})