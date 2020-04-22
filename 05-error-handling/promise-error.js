

// const timerPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject(new Error())
//     }, 1000)
// })

const rejectPromise = Promise.reject(new Error('something happened'));

setTimeout(() => {
    console.log('success!')
}, 1000);

// rejectPromise.then(
//     null, 
//     (err) => {
//         console.log(err.message);
//     }
// )

rejectPromise.catch((err) => {
    console.log(err.message);
});

