const express = require('express');

const adminApp = express();

adminApp.get('/login', function(req, res) {
    res.send('Login screen');
});

module.exports = adminApp;