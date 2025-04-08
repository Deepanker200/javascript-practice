const p=new Promise((resolve,reject)=>{
    resolve("Promise Resolved Value!!!");
})

//Async returns a promise
async function getData() {
    return p;
}

const dataPromise=getData();

dataPromise.then((res)=>console.log(res));