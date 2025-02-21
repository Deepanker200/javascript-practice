const tinderUser = new Object();          //non-singleton object
const tinderUser2 = {}                    //singleton object

tinderUser.id = "123abc"
tinderUser.name = "FreakCoder"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Deepanker",
            lastname: "Tiwari"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);


const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }

// const obj3={obj1,obj2};

obj3 = Object.assign({}, obj1, obj2);       //For merging objects
obj4 = {...obj1, ...obj2};       //For merging objects
console.log(obj4);

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
