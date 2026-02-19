const arr = [5, 1, 6, 2, 7, 9]

// const output = arr.map((r) => r * 2)

// console.log(output)

// const output2 = arr.filter((r) => r % 2 == 0)

// console.log(output2)

//reduce

// const output = arr.reduce(function (acc, curr) {
//     acc = acc + curr;
//     return acc;
// },0)

// const output = arr.reduce(function (acc, curr) {
//     if(curr > acc){
//         acc=curr
//     };
//     return acc;
// },0)

// console.log(output)


const users = [
    { firstName: "Rahul", lastName: "Sharma", age: 26 },
    { firstName: "Emma", lastName: "Watson", age: 75 },
    { firstName: "Steve", lastName: "Jobs", age: 50 },
    { firstName: "Priyanka", lastName: "Chopra", age: 26 },
];

//list of full name

// const output = users.map((x) => x.firstName +" " +x.lastName)

// const output = users.reduce(function (acc, curr) {
//     if(acc[curr.age]){
//         acc[curr.age]+=1
//     }
//     else{
//         acc[curr.age]=1
//     }
//     return acc
// }, {})

const output=users.filter((x)=>x.age<30).map((x)=>x.firstName)

console.log(output)