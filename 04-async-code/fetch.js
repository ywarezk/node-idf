/**
 * we want to expose a function
 * the function gets a url
 * returns a promise with the response data
 */

const https = require('https');

/**
 * this function will send an http request
 * @param {string} url 
 * @returns: Promise<string>
 */
function fetch(url) {
    return new Promise((resolve, reject) => {

        https.get(url, (res) => {
        
            res.once('data', (responseBuffer) => {
                resolve(responseBuffer.toString());
            });

            res.on('error', (err) => {
                reject(err);
            })
        }).on('error', (err) => {
            reject(err);
        })

    });

    
}

module.exports = fetch;