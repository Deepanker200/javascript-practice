//Immediately Invoked Function Expressions (IIFE)

(function phone(){      //named iife
    console.log("DB connected");
})();   

( (name)=>  {
    console.log(`DB connected2 ${name}`);
})('Deepanker');