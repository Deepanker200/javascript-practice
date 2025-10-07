// let multiply=function (x,y){
//     console.log(x*y)
// }



// let multiplyByTwo=multiply.bind(this,2,3);
// multiplyByTwo(5)
// let multiplyByThree=multiply.bind(this,3);

// multiplyByThree(5)


//Another Example of Function Currying
let multiply=function(x){
    return function(y){
        console.log(x*y);
    }
}

let multiplyByTwo=multiply(2);      //multiply function called

// multiplyByTwo = function(y) {
//     console.log(2 * y);
// }

multiplyByTwo(3)