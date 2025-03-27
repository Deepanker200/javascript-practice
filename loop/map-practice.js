const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.map((num) => num + 10)

console.log(newNums)
console.log(myNums);        //Doesn't change original array

const yourNums = [20, 90, 10, 1, 17, 9, 11, 14, 45, 67];

const yournewNums = yourNums.filter((el) => {
    return el % 2 == 0
})


console.log(yournewNums);
console.log(yourNums);          //Doesn't change original array

const nums = [4, 5, 6, 7, 90]

let car=nums.reduce((acc, res) => acc + res, 0)
// let car=nums.reduce((acc, res) => -acc + res, 0)         Important


console.log(car);

console.log(nums);
