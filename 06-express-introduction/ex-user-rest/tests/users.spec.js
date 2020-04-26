/**
 * we want to write our unit test for the users rest api
 * 
 */

const assert = require('assert')
const app = require('../app');
const axios = require('axios');
const userService = require('../services/user.service');

describe('Users REST API', function() {
    let server;

    // before
    // afterEach
    // after

    // before each of our tests is running
    // get our express app and open a server
    before(function(done) {
        server = app.listen(3000, function() {
            console.log('we are now listening');
            done();
        })
    });

    // before(async function() {
    //     await app.listen(3000);
    // });

    // close the server we opened
    after(function() {
        server.close();
    })

    // delete all the users in userservice
    // insert 3 users
    beforeEach(() => {

    })

    it('Test get all users', async function() {
        const response = await axios.get('http://localhost:3000/api/users/');
        assert.equal(response.status, 200);
        assert.equal(response.data.length, userService.users.length);
    }); 

    it.only('Test we are creating a new user', async function() {
        const response = await axios.post('http://localhost:3000/api/users/', {
            firstName: 'hello',
            lastName: 'world'
        });
        assert.equal(response.status, 201);
        assert.equal(response.data.firstName, 'hello');
        assert.equal(userService.users.length, 4);
    });
})