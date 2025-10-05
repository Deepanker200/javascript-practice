//Async-Await

const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise Resolved")
    }, 10000)
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise Resolved")
    }, 5000)
})

async function handlePromise() {
    console.log("Hello from top");


    const val2 = await p2;
    console.log("I am from JS 2");
    console.log(val2);
    //JS Engine waits here!
    const val = await p;
    console.log("I am from JS");
    console.log(val);
    const val3 = await p2;
    console.log("I am from JS 3");
    console.log(val3);
    
}

handlePromise()
console.log("Hello from outside");

//Normal Way
// function getData(){
//     p.then((res)=>console.log(res))
//     console.log("I am printing first");
// }

// getData()