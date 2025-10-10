//Objects

//Objects Literals {}

// const person={
//     fname:"Deepanker",
//     lname:"Tiwari",
//     contact:"9999999999",
//     getName: function(){
//         console.log("Deepanker");
//     }
// }

// console.log(person.getName())

//Function Constructor~ Deprecated after ES6
//PascalCasing
// function Person(fname,lname,contact){
//     this.fname=fname;
//     this.lname=lname;
//     this.contact=contact;

//     this.getName=function(){
//         console.log(this.fname,this.lname);
//     }
// }


//Class blue print~ After ES6
class Person {
    constructor(fname, lname, contact) {
        this.fname = fname;
        this.lname = lname;
        this.contact = contact;
    }

    getName = function () {
        console.log(this.fname, this.lname);
    }
}


const person1 = new Person("Pankaj", "Verma", 888888888)
const person2 = new Person("John", "Singh", 777777777)
console.log(person1.fname);
person1.getName();
// console.log(person1.getName());
