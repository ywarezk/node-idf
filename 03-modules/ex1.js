/**
 * expose variable, function , class
 */

 const meaningOfLife = 42;

 function stamFunction(msg) {
     console.log(msg);
 }

 class Person {
     constructor(name, age) {
        this.name = name;
        this.age = age

        this.birthday = this.birthday.bind(this);
     }

     birthday() {
         this.age++;
     }
 }

 module.exports = {
    meaningOfLife,
    stamFunction,
    Person
 }