//Important Question for interviews

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "Deepanker", email: "tiwarideepanker@gmail.com" });
    },
        2000)
})

promiseThree.then(function (user) {     //user is the object receiving after resolving the promise
    
    console.log(user);
    console.log("hello");
})
