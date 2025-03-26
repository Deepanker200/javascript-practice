//if

const isUserloggedIn = true
const temp = 41
if(2==="2"){
    console.log("Executed");        //Not executed
}

if (temp === 41) {
    console.log("Less than 50")
}
console.log("Temperature is greater than 50");

const balance=800;

// if(balance>500) console.log("Test");

if (balance<500){
    console.log("Less than 500");
}
else if (balance<700){
    console.log("Less than 700");
}

else if (balance<900){
    console.log("Less than 900");
}

else{
    console.log("Less than 1200")
}