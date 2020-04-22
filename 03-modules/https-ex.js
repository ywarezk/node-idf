

// import https from 'https';

const https = require('https');

const options = {
  hostname: 'nztodo.herokuapp.com',
  port: 443,
  path: '/api/task/?format=json',
  method: 'GET'
};

const req = https.request(options, (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
    console.log(d.toString());
  });
});

req.on('error', (e) => {
  console.error(e);
});
req.end();

// /**
//  * @returns {Promise<string>}
//  */
// module.exports = function fetch(url) {
  
// }