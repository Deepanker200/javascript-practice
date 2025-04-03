let startDate=new Date().getTime();
let endDate=startDate;
while(endDate<=startDate+10000){
    endDate=new Date().getTime()
}

setInterval(y, 3000, "Deepanker"); // Pass "Deepanker" as an argument
console.log("While ends");

function y(x) {
    console.log(x);
}


//Difference b/w setTimeout and setInterval is:

//in case of setTimeout it will show the result exactly after the loop ends
//in case of setInterval it will show the result after taking the interval time-stamp
