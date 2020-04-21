/**
 * expose a function that prints hello world
 */

const foo = 'bar';

function helloWorld() {
    console.log('hello world from module');
}

module.exports = {
    hello: helloWorld,
    // foo: foo
    foo
};