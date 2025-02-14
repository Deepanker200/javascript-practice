//Stack

let origname="Deepanker";
let othername=origname;

othername="Software Developer";

console.log(origname);
console.log(othername);


//Heap
let userOne={
    email: 'tiwarideepanker@gmail.com',
    name: 'Deepanker Tiwari',
}

let userTwo=userOne;
console.log(userTwo);

userTwo.email="deepanker@gmail.com"

console.log(userTwo);
console.log(userOne);

console.log(userOne==userTwo);