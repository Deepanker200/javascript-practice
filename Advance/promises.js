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

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "Deepanker", password: "123" })
        } else {
            reject("ERROR: Something went wrong")
        }
    }, 1000)
})

promiseFour
    .then((user) => {
        console.log(user);
        return user.username
    }).then((username) => {
        console.log(username);
    }).catch(function (error) {
        console.log(error);
    }).finally(() => console.log("The promise is either resoled or rejected"))


const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "Deepanker", password: "123" })
        } else {
            reject("ERROR: JS went wrong")
        }
    }, 1000)
})