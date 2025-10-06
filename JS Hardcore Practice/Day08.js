//call
// let name={
//     firstname:"Deepanker",
//     lastname:"Tiwari",
//     printFullName: function(){
//         console.log(this.firstname+ " " +this.lastname);
//     }
// }

// name.printFullName();

// let name2={
//     firstname:"Sachin",
//     lastname:"Tendulkar"
// }

//function borrowing
// name.printFullName.call(name2)

let name = {
    firstname: "Deepanker",
    lastname: "Tiwari",
}

let printFullName = function (hometown,state) {
    console.log(this.firstname + " " + this.lastname+ " from "+hometown +", " +state);
}

printFullName.call(name,"Delhi","New Delhi")

let name2 = {
    firstname: "Sachin",
    lastname: "Tendulkar"
}

//function borrowing
printFullName.call(name2,"Mumbai", "Maharashtra")

//apply~ sending args in array list
printFullName.apply(name2,["Mumbai", "Maharashtra"])

//bind method~ can be called later
let printMyName=printFullName.bind(name2,"Mumbai-Bind", "Maharashtra")
console.log(printMyName);
printMyName()