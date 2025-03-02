const myNums = [1, 2, 3]

// const myTotal=myNums.reduce(function(acc,currval){
//     console.log(`acc ${acc} and currval ${currval}`);

//     return acc + currval;       //this becomes accumulator(acc)
// },0)

// const myTotal = myNums.reduce((acc, curr) => acc + curr, 0)

// console.log(myTotal);


const shoppingCart = [
    {
        itemName: "JS course",
        price: 299
    },
    {
        itemName: "Python course",
        price: 999
    },
    {
        itemName: "Mobile dev course",
        price: 5999
    },
    {
        itemName: "Data Science course",
        price: 12999
    },
]

const val = shoppingCart.reduce((acc, item) =>
    acc + item.price, 0)


console.log(val);

