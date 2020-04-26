/**
 * sometimes our express server
 * should return static files
 * res.sendFile()
 * html, js, css, fonts, images
 */

const express = require('express');
const path = require('path');

const app = express();

app.use('/assets', express.static(
    path.resolve(__dirname, 'public')
));

app.listen(3000, function() {
    console.log('we are now listening...')
})

/**
 * we use express.static
 * middleware creator
 * to serve static files from a directory
 * 
 * Express is not ideal for dealing with static files
 * reverse proxy: nginx, apache, IIS, traefik, 
 * CDN => s3
 * 
 * aws => cloudfront
 * 
 *                               |----backend1
 * Request ----> Reverse Proxy---|----backend2
 *                               |----backend3
 */