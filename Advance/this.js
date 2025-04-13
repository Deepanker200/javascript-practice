"use strict"

// this in global space

console.log(this);


function x(){
    //the value depends on strict and non-strict mode
    console.log(this);
}

//this in non-strict mode = (this substitution)

//If the value of this keyword is undefined or null
// then "this" keyword will be replaced with globalObject
//only in non-strict mode


x();

//this keyword value depends on how the function is called
window.x();

