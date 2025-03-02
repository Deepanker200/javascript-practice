// const coding = ["js", "python", "ruby", "java", "cpp", "php"];


// const values= coding.forEach((item)=>{
//     console.log(item);
//     return item;
// });

// console.log(values);

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// //it is used to avoid foreach loop's condition
// // const newNums=myNums.filter((num)=> num>4);
// const newNums = myNums.filter((num) => {
//     return num > 4
// });

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums=[];

// myNums.forEach((num)=>{
//     if(num>4){
//         newNums.push(num);
//         }
// })

// console.log(newNums);

//Note: Filter never changes in the original array

//Map in JS

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.map((num) => num + 10)

// console.log(newNums)

//Chaining

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.map((num) => num * 10)
    .map((num) => num + 10)
    .filter((num)=>num>50)

console.log(newNums);
console.log(myNums);
