function syaMyName() {
    console.log("D");
    console.log("E");
    console.log("E");
    console.log("P");
    console.log("A");
    console.log("N");
    console.log("K");
    console.log("E");
    console.log("R");

}

// syaMyName();

// function addToNumbers(n1, n2) {
//     console.log(n1 + n2);
//     // console.log(typeof (n1 + n2));
// }




// addToNumbers(2,"a");


function addToNumbers(n1, n2) {
    return(n1 + n2);
}

const result = addToNumbers(3, 6);
console.log("Result:", result);

function login(username="Sam"){
    if(username===undefined){
        console.log("Please enter correct username")
        return  //this return is sending undefined
    }
    return username
}

console.log(login());