let name={
    firstname:"Deepanker",
    lastname:"Tiwari",
    printFullName:function(){
        console.log(this.firstname+" "+this.lastname);
        
    }
}

name.printFullName()

let name2={
    firstname:"Vansh",
    lastname:"Jain"
}

//function borrowing
// name.printFullName.call(name2);

//Only difference in sending arguments
// name.printFullName.apply(name2,["Mumbai","Delhi"]);

//bind: in bind it gives us the copy and to be called