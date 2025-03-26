// function syaMyName() {
//     console.log("D");
//     console.log("E");
//     console.log("E");
//     console.log("P");
//     console.log("A");
//     console.log("N");
//     console.log("K");
//     console.log("E");
//     console.log("R");

// }

// syaMyName();

// function addToNumbers(n1, n2) {
//     console.log(n1 + n2);
//     console.log(typeof(n1));        //The datatype which we send it returns that datatype
//     console.log(typeof(n2));

//     console.log(typeof (n1 + n2));
// }




// addToNumbers(2,"a");


// function addToNumbers(n1, n2) {
//     return(n1 + n2);
// }

// const result = addToNumbers(3, 6);
// console.log("Result:", result);

// function login(username="Sam"){
//     if(username===undefined){
//         console.log("Please enter correct username")
//         return  //this return is sending undefined
//     }
//     return username
// }

// console.log(login());

// function calculateCartPrice(val1,val2,...num1){
//     return num1;
// }

// console.log(calculateCartPrice(21,24,2));
// console.log(calculateCartPrice(21,24,2,90));

const user = {
    username: "Deepanker",
    price: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject['price']}`);
}

handleObject(user);

// const myNewArray=[200,400,100,600]

// function returnSecondValue(getArray){
//     return getArray[2];
// }

// console.log(returnSecondValue(myNewArray));

function multipleGreet(func, count) {
    for (let i = 0; i < count; i++) {
        func()
    }
}

let greet = function () {
    console.log("Hello");
}

multipleGreet(greet(), 100)