/**
 * Promise
 */

// What is Promise
// class wraps async code

// promise can be in once of the following state
// 1. pending
// 2. resolved / rejected

// process.on('')

// Promise<string>
const timerPromise = new Promise((resolve, reject) => {
    // your async code will be here

    setTimeout(() => {
        resolve('hello world from promise');
        // // resolve('stam');
        // reject(new Error('something happened'))
        // throw new Error();
    }, 1000)
});

timerPromise.then(
    function(msg) {
        console.log(msg);
    },

    function(err) {

    }
)

timerPromise.then(
    function() {
        console.log('another listener');
    }
)

/**
 * generator function
 * @returns {Promise<boolean>}
 */
async function dealWithTimer() {
    // string
    try {
        const message = await timerPromise;
        const stam1 = await promise2;
        const stam2 = await promise3
    } catch(err) {

    }
    
    return message.length;
}