/**
 * I looked at the urls of my app
 * and saw that the users api have the same prefix
 * this was a clue for me to seperate i to different file
 * application is no good because its a private case of my REST server
 * but a Router is perfect for that
 */

// function hello() {

// }

// hello.Router = function() {

// }

 // you get here a function
 const express = require('express');

 const usersRouter = express.Router();

 usersRouter.route('/')
    .get(function(req, res) {

    })
    .post(function(req, res) {

    });

// usersRouter.get('/' ...)
// usersRouter.post('/' ...)

usersRouter.route('/:id')
    .put(function(req, res) {

    })
    .delete(function(req, res) {

    });

module.exports = usersRouter;
