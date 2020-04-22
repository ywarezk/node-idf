/**
 * Something happend in your app
 */

 // exception i divide to 2 parts

 // - async exception
 // - in our sync code

 // how do I deal with exception in my SYNC code
 // we deal with try catch

// try {

// } catch(err) {

// } 

// how do we deal with errors in the async code?


setTimeout(() => {
    throw new Error('something happened in the first request');
}, 1000);

setTimeout(() => {
    console.log('i got a response');;
}, 2000);

// exception will terminate the process


