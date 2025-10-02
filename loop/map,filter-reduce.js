// const arr=[5,1,3,2,6,9]

// function double(x){
//     return x*2
// }

// function triple(x){
//     return x*3
// }

// const output=arr.map(triple)

// const output2=arr.map((num)=>num*3)

// console.log(output);
// console.log(output2);


// const arr=[10,12,13,5,6,9,17]

// let result=arr.filter(x=>{
//     return (x%2)
// })

// console.log(result);


// const arr=[12,1,14,5,67,90]

// let result= arr.reduce(function(acc,curr){
//     acc=acc+curr
//     return acc
// },0)

// console.log(result);


const users = [
    { firstName: "Rahul", lastName: "Sharma", age: 26 },
    { firstName: "Emma", lastName: "Watson", age: 75 },
    { firstName: "Steve", lastName: "Jobs", age: 50 },
    { firstName: "Priyanka", lastName: "Chopra", age: 26 },
];


const output = users.reduce(function (acc, curr) {
    // console.log(acc[curr.age]);
    
    if (acc[curr.age]) {
        acc[curr.age] = ++acc[curr.age]
    }
    else {
        acc[curr.age] = 1
    }

    return acc;
}, {})

console.log(output);


const output2 =
    users.filter((x) => x.age < 30)
        .map((x) => x.firstName)



console.log("Output2 :",output2);


const output3=users.reduce(function(acc,curr){
    
    if (curr.age<30){
        acc.push(curr.firstName)
    }

    return acc
},[])

console.log(output3);
