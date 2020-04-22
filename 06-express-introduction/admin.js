/**
 * we want to make our admin section modular
 * this means any express app can do
 * npm install @idf/admin --save
 * npm install express@3.0.0 --save
 * const admin = require('@idf/admin');
 * 
 * to create your package:
 * - npm init
 * - npm install express -P => express will be peerDependency
 */

const express = require('express');

const adminApp = express();

adminApp.get('/login', function(req, res) {

})

