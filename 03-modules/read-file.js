/**
 * read the content of the README file
 */

 const fs = require('fs');

 fs.readFile('./README.md', (err, data) => {
    console.log(data.toString());
 })