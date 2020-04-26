/**
 * This router will be connected to /api/users
 * CRUD on the users array
 */

const express = require('express');
const userService = require('../services/user.service');

const usersRouter = express.Router();

// /api/users/
usersRouter.route('/')
    .get(function(req, res) {
        res.status(200).json(
            userService.getUsers()
        )
    })
    .post(function(req, res) {
        // {firstName: 'sdf', lastName: 'saf'}
        const user = req.body;
        const fullUser = userService.createUser(user);
        res.status(201).json(fullUser);
    })

// /api/users/:id/
usersRouter.route('/:id/')
    .put(function(req, res) {
        const user = userService.updateUser(req.params.id, req.body);
        res.status(202).json(user);
    })
    .delete(function(req, res) {
        try {
            userService.deleteUser(req.params.id);
            res.status(204);
        } catch (err) {
            res.status(404).json({error: err.message})
        }
    })

module.exports = usersRouter;