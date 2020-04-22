

const fs = require('fs').promises;
const {promisify} = require('util');


// error first callback
// fs.readFile('./README.md', function(err, data) {

// })

// const readFilePromise = promisify(fs.readFile);
// readFilePromise('./README.md').then(
//     (data) => {

//     },

//     (err) => {

//     }
// )