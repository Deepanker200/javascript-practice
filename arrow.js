const user = {
    username: "Deepanker",
    price: 999,


    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);
        // console.log(this);


    }
}

user.welcomeMessage();
user.username = "sam";
user.welcomeMessage();

// console.log(this)


// function deep(){
//     // let username="deep"
//     // console.log(this.username);      //this cannot be used in a function
// }

// deep();

const deep = function () {
    let username = "deepanker1"
    // console.log(this.username);
    console.log(username);
}

const deep2 = () => {
    let username = "deepanker2"
    // console.log(this.username);
    console.log(username);
}

deep();
deep2();

//Normal function can be hoisted but a variable function/expression cannot
//username['price']
//this cannot be used in arrow functions

const addTwo = (num1, num2) => {
    return num1 + num2;
}


//Implicit
const addTwo2 = (num1, num2) =>  num1 + num2;

//{} if curly braces added then have to write return keyword

const obj1 = (num1, num2) =>  ({username:"Deepanker"});

console.log(obj1(2,4));
// console.log(addTwo(3,4));
// console.log(addTwo2(13,4));