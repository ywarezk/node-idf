/**
 * this prints yay but its restricted
 */

const express = require('express');

const yayRouter = express.Router();

yayRouter.get('/', function(req, res) {
    res.send('YAY!');
})

module.exports = yayRouter;