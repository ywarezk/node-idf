/**
 * expose a function that prints hello world
 */

// (function(exports, require, module, __filename, __dirname) {

    const foo = 'bar';

    function helloWorld() {
        console.log('hello world from module');
    }

    module.exports = {
        hello: helloWorld,
        // foo: foo
        foo
    };

    // correct
    // exports.hello = helloWorld;
    // exports.foo = foo;

    // exports = {
    //     hello: helloWorld,
    //     // foo: foo
    //     foo
    // }

// })()

