//Currying in JS

//1.
function add(a){
    return function(b){
        return function(c){
            return a+b+c
        }
    }
}

console.log(add(1)(2)(4));


//Call Method

let name={
    fname:"Deepanker",
    lname:"Tiwari"
}

function greet(){
    console.log("Hello, ",this.fname+" "+this.lname);
}

greet.call(name)