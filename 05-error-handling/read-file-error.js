

const fs = require('fs');

fs.readFile('./README1.md', (err, data) => {
    if (err) {
        // you should handle the error
        console.log(err.message);
        return;
    }

    console.log(data.toString().length);
});

setTimeout(() => {
    console.log('success');
}, 2000)