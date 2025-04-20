let name={
    firstname:"Deepanker",
    lastname:"Tiwari"
}

let printName=function(hometown,state,country){
    console.log(this.firstname +" "+ this.lastname+ " , "+hometown +" , "+state +" , "+country);
}

let printMyName=printName.bind(name,"Delhi","New Delhi");
printMyName("India")


Function.prototype.mybind=function(...args){
    let obj=this
    params=args.slice(1);
    return function(...args2){
        obj.apply(args[0],[...params,...args2])
    }
}

let printMyName2=printName.mybind(name,"Delhi");
printMyName2("New Delhi","India")