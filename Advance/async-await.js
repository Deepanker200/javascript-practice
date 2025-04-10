// const p=new Promise((resolve,reject)=>{
//     resolve("Promise Resolved Value!!!");
// })

//Async returns a promise
// async function getData() {
//     return p;
// }

// const dataPromise=getData();

// dataPromise.then((res)=>console.log(res));

const p=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise Resolved Value!!!");
    },5000)
})

const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise Resolved Value!!!");
    },10000)
})


//await can only be used inside an async function
async function handlePromise() {
    
    console.log("Hello Deepanker, this side");
    
    //JS engine was waiting for promise to resolve 
    const val=await p
    console.log("Namaste JavaScript");
    console.log(val);   

    const val2=await p2
    console.log("Namaste JavaScript 2");
    console.log(val2);   
}

handlePromise()

// function getData(){
//     //JS engine will not wait for promise to be resolved
//     p.then((res)=>console.log(res));

//     console.log("Namaste JavaScript");   
// }

// getData()

//Notes: 1. Same promise takes same time 2. Different promises take different time