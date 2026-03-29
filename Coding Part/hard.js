//Factorial using Recursion

// let n=5
// function fact(n){
//     if(n==1 || n==0) return 1

//     return n*fact(n-1)
// }

// console.log(fact(n));

//Map Function

// const arr=[10,20,30]

// const arr2=arr.map((val)=>val*10)
// console.log(arr2);


//Class Based Question

// class Animal{
//     constructor(name){
//         this.name=name;
//     }

//     speak(){
//         console.log(`${this.name}`);
//     }
// }


// let dog=new Animal("barks");
// dog.speak()

//Prime number

let flag = false;

let num = 97;
if (num <= 1) return "Not Prime"

for (let i = 2; i <= (num / 2); i++) {
    if(num%i==0){
        flag=true
        break
    }
}

if(flag){
    console.log("Not Prime");
}
else{
    console.log("Prime");
}

// const arr=[12,13,12,44,1,44,55,166]

// console.log(arr.includes(102));

const str1="hello world deepanker"

// console.log(str1.charAt(3));

// console.log(str1.includes("r"));
// console.log("o" in str1);        // Not work



