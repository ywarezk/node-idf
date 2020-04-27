/**
 * we will connect to a mongo database
 */

const mongoose = require('mongoose');

mongoose
    .connect('mongodb://localhost:27017/idf', {useNewUrlParser: true, useUnifiedTopology: true})
    .then((mongoose) => {
        console.log('we are now connected to a database');
    })
    .catch((err) => {
        console.error(`Failed to connect: ${err.message}`);
    });