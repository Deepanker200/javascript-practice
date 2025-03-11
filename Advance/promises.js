const promiseOne = new Promise(function (resolve, reject) {
    //Do an sysnc task
    //DB calls, cryptography,newtwork 

    setTimeout(function () {
        console.log('Async task is complete');
        resolve();
    }, 1000)
})

promiseOne.then(function () {
    console.log('Async one is complete')
})


new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function () {
    console.log('Async two is completed')
})


const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "Deepanker", email: "tiwarideepanker@gmail.com" });
    },
        1000)
})

promiseThree.then(function (user) {
    console.log(user);

})