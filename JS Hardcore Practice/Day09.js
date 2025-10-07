let multiply=function (x,y){
    console.log(x*y)
}


let multiplyByTwo=multiply.bind(this,2,3);
multiplyByTwo(5)        //will ignore will passing 2 params


let multiplyByThree=multiply.bind(this,3);

multiplyByThree(5)