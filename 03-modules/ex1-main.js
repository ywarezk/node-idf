
const { meaningOfLife, stamFunction, Person } = require('./ex1');

const me = new Person('Yariv', 35);

// me.birthday();

const birthdayHolder = {stam: me.birthday};
birthdayHolder.stam();

console.log(me.age); // what will be printed ? 35