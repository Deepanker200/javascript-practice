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

// function msg(name, callback) {
//     console.log(name);
//     callback()
// }

// function callback() {
//     console.log("Callback called");
// }

// msg("Deepanker", callback)

// const add = (a, b) => a + b;

// console.log(add(10,2))

//Fibonacci Series

// const n = 10;
// let num1 = 0, num2 = 1, nextnum;

// function fib(no) {
//     for (let i = 1; i <= no; i++) {
//         console.log(num1);
//         nextnum = num1 + num2;
//         num1 = num2
//         num2 = nextnum
//     }
// }

// console.log(fib(n))

//Program to find frequency

const arr=[1,2,4,5,1,23,44,2,76,12,5]

const freq={}

for(i=0;i<arr.length;i++){
    if(freq[arr[i]]){
        freq[arr[i]]+=1
    }
    else{
        freq[arr[i]]=1
    }
}

console.log(freq)