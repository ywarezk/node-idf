/**
 * how do i deal with error in express
 */

// we have two types of errors that can happen
// sync exception
// async exception

const express = require('express');

const app = express();

app.get('/foo', function(req, res) {

    const user = 'hello';
    for(let item of [1,2,3]) {

    }
    throw new Error('some sync error');
});

app.get('/bar', async function(req, res, next) {
    try {
        const users = await dbQuery('select * from users');
    } catch(err) {
        next(err);
    }
    
});

app.post('/user', function(req, res, next) {
    // dbQuery returns a Promise
    // first function is resolve
    // second is reject function
    dbQuery('select * from users').then(
        (users) => {

        },
        (err) => {
            next(err);
        }
    )
    
})

app.use(function(err, req, res, next) {
    // this will post to the error
    // if (req.path === '/foo') {

    // }
    next()
})

app.use(function(err, req, res, next) {
    res.status(500).send('something happend');
})

app.listen(3000, function() {
    console.log('we are now listening');
})

/**
 * how do we deal with error in express
 */

 // 1. you create a chain of exception middlewares in the end before you do listen
 // 2. some exception middleware will do so logic like create a log file or publish the exception to a log server etc.
 // some exception middleware will return response with error
 // 3. you have to report in the regular middlewares that exception happened
 // sync exceptions are catch automatically by express
 // async exception you have to call next(err)