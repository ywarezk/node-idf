

const fetch = require('./fetch');

async function sendRequest() {
    try {
        const responseString = await fetch('https://nztodo.herokuapp.com/api/task1/?format=json')
        console.log(responseString);
    } catch(err) {
        console.log('error!!!!');
    }
}

sendRequest();

