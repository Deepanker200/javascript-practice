// function a(){
//     console.log(b);    
// }


// let b=10;
// a()
// console.log(b);


// function a(){
//     console.log(b);

//     c()
//     function c(){
//         console.log(b);
//     }
// }
// a()
// console.log(b);

// var b=10

// let f=10;
// var b=100;
// console.log(b);


//Block Scope
// var a=100
// {
//     var a=10;
//     let b=20;
//     const c=30;
//     console.log(a);

// }

// console.log(a);     //Shadowing

// var a =100;
// function aa(){
//     var a=20;
//     console.log("Inside: ",a);
// }

// console.log("Outside before function call: ",a);
// aa()

//Shows var is function scope


function add() {
    var a =1;
    {
        var a = 10
        let b = 2;
        const c = 3;
        console.log(a);
    }
    console.log(a);
}

add()