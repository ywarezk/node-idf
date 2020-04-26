/**
 * some of the requests we will get will contain a body in the request
 * that body can be sent in various ways
 * {firstName: 'hello', lastName: 'world'} => Header: Content-Type: application/json
 * ?firstName=hello&lastName=world => Header: Content-Type: form/urlencoded
 * 
 * req.body = {firstName: 'hello', lastName: 'world'}
 * 
 * from the request method: POST, PUT, Patch
 */

const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.listen(3000, function() {
    console.log('we are now listening...')
})

/**
 * some of the middleware creators we will use
 * will extend the request object
 * a lot of logic middleware will extend the request object
 * req.body
 * req.user
 * req[someKey]
 * 
 * extending request object
 */
