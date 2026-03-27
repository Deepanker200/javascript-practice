// 1. WAP to reverse a string

// function rev(str1){
// return str1.split("").reverse().join("")

// }

// console.log(rev("abc"))


// 2. Largest in Array

// function largest(arr){
//     let max=arr[0];

//     for(let i=0;i<arr.length;i++){
//         if(max<arr[i]){
//             max=arr[i]
//         }
//     }

//     return max
// }

// const arr=[1,4,2,5,68,12,90,12,45];

// console.log(largest(arr));
// console.log(arr.shift());
// console.log(arr);

//5. Write a Program to use a callback function?

function msg(name, callback) {
    console.log(name);
    callback()
}

function callback() {
    console.log("Callback called");
}

msg("Deepanker", callback)

const add = (a, b) => a + b;

console.log(add(10,2))