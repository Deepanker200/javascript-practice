let name = {
    firstname: "Deepanker",
    lastname: "Tiwari",
    printFullName: function () {
        console.log(this.firstname + " " + this.lastname);
    }
}

let printFullName2 = function (hometown, state) {
    console.log(this.firstname + " " + this.lastname + " from " + hometown + ", " + state);
}

name.printFullName()

let name2 = {
    firstname: "Vansh",
    lastname: "Jain"
}

//function borrowing
// name.printFullName.call(name2);

//Only difference in sending arguments
// name.printFullName.apply(name2,["Mumbai","Delhi"]);

//bind: in bind it gives us the copy and to be called

let printMyName = printFullName2.bind(name2, "Mumbai", "Maharashtra");
console.log(printMyName);
printMyName()