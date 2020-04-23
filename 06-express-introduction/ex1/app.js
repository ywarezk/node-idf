/**
 * express server
 * with a middleware that returns the list of users
 * with another middleware that returns a single user
 */

const express = require('express');
const userService = require('./user.service');

const app = express();

app.get('/api/users', function(req, res) {
    res.status(200).json(
        userService.getUsers()
    );
});

/**
 * return a single user
 */
app.get(['/api/user/:id(\\d+)', '/api/users/:id(\\d+)'], function(req, res) {
    // req.query will contain an object with the query params
    const user = userService.getSingleUser(req.params.id); 
    res.status(200).json(user);
})

app.listen(3000, function() {
    console.log('listening is now open...');
});