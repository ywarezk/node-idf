/**
 * You will have to deal with async errors as well
 */

 const EventEmitter = require('events');

 const myEmitter = new EventEmitter();

 setTimeout(() => {
    myEmitter.emit('error', new Error('emitter issued an error'));
 }, 1000);

 setTimeout(() => {
    console.log('success!!!');
 }, 2000);

 myEmitter.on('error', (err) => {
    console.log(err.message);
 })