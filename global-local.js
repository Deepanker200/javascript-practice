// var c=300
// let a=400
// if(true){
//     let a=10;
//     const b=20;
//     console.log("Inner: ",a);
//     // var c=30;

// }

// console.log(a);
// console.log(b);
// console.log(c);


function one() {
    var username = "Deepanker";

    function two() {
        const website = "freakcoder";
        console.log(username);
    }

    // console.log(website);
    two();
}

one();
// console.log(username);

if (true) {
    const username = "shubham";
    if ("shubham"===username) {
        const website = "youtube";
        console.log(username+website);
    }

    // console.log(website);
}

// console.log(username);

// ++++++++ interesting +++++++++

console.log(addone(5));


function addone(num){
    return num+1
}



//Expression
const addTwo=function(num){
    return num+2;
}
console.log(addTwo(5));
