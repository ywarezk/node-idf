/**
 * Event Emitter
 */

 // used for creating class
 // those classes have lifecycle events


 // { foo:  }
const EventEmitter = require('events');

class Person extends EventEmitter{

    constructor(age) {
        this.age = age;
    }

    birthday() {
        this.emit('birthday', this.age)
    }
}

const me = new Person();

me.on('birthday', (age) => {

})

class Child {
    stam() {
        // stam is instance that extends EventEmitter
        const stam = queryDatabase();
        stam.on('result', () => {
            
        })
    }
}









