//Function Statement aka Function Declaration

function a(){
    console.log("a called");
}

//Function Expression

var b=function(){
    console.log("b called");
}

//Anonymous Function

// function(){
    
// }

//Named Function Expression
var c=function xyz(){
    console.log("c called");
    // console.log(xyz);
}


//Parameters and Arguments

// function hee(param1,param2){
//     console.log("Called");
// }

// hee(arg1,arg2);

//First Class Functions
// The ability of functions to use as values and passed as into another functions

// var e=function(param1){
//     console.log(param1);
// }

// console.log(e(function(){
//     console.log("First Class Functions"); 
// }));

// var d=function(param1){
//     return function xyz(){

//     }
// }

// console.log(d());

//Good example
const sayHi = function() {
  return "Hi";
};
const copy = sayHi; // assign function to another variable
console.log(copy()); // Hi


//Functions are first class citizens as same as first class functions