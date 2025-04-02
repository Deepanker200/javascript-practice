const arr=[5,1,3,2,6,9]

function double(x){
    return x*2
}

function triple(x){
    return x*3
}

const output=arr.map(triple)

const output2=arr.map((num)=>num*3)

console.log(output);
console.log(output2);
