/**
 * return an html response
 */

// (function(module, exports, require, __dirname, __filename) {



const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'hbs');
app.set('views', __dirname);


// i want to send an html response
// this can work if the html is static - meaning the html is not changing
app.get('/homepage', (req, res) => {
    // res.sendFile(path.resolve(__dirname, 'homepage.html'))

    res.render('homepage', {
        user: {
            firstName: 'Yariv',
            lastName: 'Katz'
        }
    })
});

// if we want to make the html dynamic
// we need to use a template engine
// template engine will render from a certain language will compile it to html


app.listen(3000, function() {
    console.log('now listening...');
})

// })()