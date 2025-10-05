console.log("Start");



setTimeout(function cb(){
    console.log("Callback");
},4000);

console.log("End");

//Blocking the main thread


let startDate=new Date().getTime();
let endDate=startDate;
while(endDate<=startDate+10000){
    endDate=new Date().getTime()
}

console.log("While expires");

//Deffering a function      //Concurrency model
function cb2(){
    for(let i=1;i<10;i++){
        console.log(i);
    }
    console.log("Callback2");
};

setTimeout(cb2,6000)

// function cb2(){
//     console.log("Callback2");
// };

// setTimeout(cb2,0)

//Recursive

// function repeat() {
//     console.log("Hello!");
//     setTimeout(repeat, 1000);
// }
// repeat();
