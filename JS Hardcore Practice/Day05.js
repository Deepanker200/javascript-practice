//Map, filter,reduce

const arr=[5,1,3,2,6];


// const output=arr.map((i)=>{
//     return i*2
// })

// console.log(output);
// console.log(arr);


//filter
// const output=arr.filter((i)=>{
// return i%2===0
// })

// console.log(output);


//reduce
// const output=arr.reduce((acc,curr)=>{
//     acc=acc+curr;
//     return acc
// },0)     //initial value of accumulator


const output=arr.reduce((max,curr)=>{
   if(curr>max){
    max=curr
   }
    return max
},0)


console.log(output);
