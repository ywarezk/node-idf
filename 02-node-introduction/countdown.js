/**
 * countdown from 3..2..1.. BOOM -> exit
 */



let counter = process.argv[2];
// process.env

const intervalId = setInterval(function() {
    if (counter > 0) {
        console.log(counter);
    } else if(counter === 0) {
        console.log('BOOM!');
    } else {
        clearInterval(intervalId);
    }
    counter--;
}, 1000)