// const score=400;
// console.log(score);

// const balance= new Number(100);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

// const otherNumber=23.8966;
// console.log(otherNumber.toFixed(2));
// console.log(otherNumber.toPrecision(3));


const hundreds=10000000;
// console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++ Maths +++++++++++

console.log(Math);
console.log(Math.abs(-5));
console.log(Math.round(4.66));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.2));
console.log(Math.sqrt(26));
console.log(Math.max(2, 5, 6, 21, 10));
max = 20;
min = 10;
a = Math.random() * (max - min + 1) + min;
b = Math.random() * (max - min + 1) + min;
console.log(a, b)
console.log("Max value is " + Math.max(a, b));
console.log((Math.random() * 10) + 1);

(Math.random() * (max - min + 1)) + min