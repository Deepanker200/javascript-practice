//Important Question for interviews

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "Deepanker", email: "tiwarideepanker@gmail.com" });
    },
        2000)
})

promiseThree.then(function (user) {
    
    console.log(user);
    console.log("hello");
})
