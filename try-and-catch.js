// let a="Hello from try & catch"
let a=0/0

function tryandcatch(a){
try{
    console.log(a);
}catch(e){
    console.log("Catught an error");
    console.log(e);    
}

}

tryandcatch(a);