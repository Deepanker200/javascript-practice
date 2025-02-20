//singleton
//Object.create



//Object literals

const mySym = Symbol("key1");

const JsUser = {
    name: "Deepanker",
    "full name": "Deepanker Tiwari",
    [mySym]: "mykey1",
    age: 18,
    location: "Delhi",
    email: "deepanker@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}


console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(typeof JsUser[mySym]);


JsUser.email="deepankertiwari@gmail.com";
// Object.freeze(JsUser);

JsUser.email="asdfsadsad";

console.log(JsUser);

// console.log(typeof Symbol("a"));

JsUser.greeting=function(){
    return("Hello JS User");
}

JsUser.greeting=function(){
    return(`Hello JS User, ${this["full name"]}`);
}


console.log(JsUser.greeting());