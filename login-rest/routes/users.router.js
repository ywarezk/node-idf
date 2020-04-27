/**
 * post: /api/users/login
 * post: /api/users/register
 */

const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const bcrypt = require('bcrypt');

const usersRouter = express.Router();

usersRouter.post('/login', passport.authenticate('local', {session: false}), function(req, res, next) {
    jwt.sign({
        userId: req.user.id
    }, 'secret', function(err, token) {
        if (err) {
            next(err);
        } else {
            res.send(token);
        }
    })
})

usersRouter.post('/register', async function(req, res) {
    const newPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = {...req.body, password: newPassword}
    const user = await User.create(newUser);
    res.status(201).json(user);
})

module.exports = usersRouter;