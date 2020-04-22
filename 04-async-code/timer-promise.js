


const intervalPromise = new Promise((resolve) => {

    setInterval(() => {
        resolve('hello');
    }, 1000);

});


intervalPromise.then((msg) => {
    console.log(msg);
})