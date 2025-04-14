"use strict"

// this in global space

console.log(this);


function x() {
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



const student = {
    name: "Deepanker",
    printName: function () {
        // console.log(this);
        console.log(this.name);
    }
}

student.printName()

const student2 = {
    name: "Deepika"
}

student.printName.call(student2);   //value of this=student2

//this inside arrow function

const obj = {
    a: 10,
    x: () => {
        console.log(this);
    }
}

obj.x()


const obj2 = {
    a: 20,
    x:function(){
        //enclosing lexical context
        const y=()=>{
            console.log(this);
        };
        y()
    },
};

obj2.x();


//this inside DOM

//this inside class and constructor