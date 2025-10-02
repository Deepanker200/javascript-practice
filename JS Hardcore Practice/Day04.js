// function x(){
//     console.log("Hello JavaScript");
// }

//y is HOF
// function y(x){   //x is callback function
//     x()
// }



// function circle(radii) {
//     const area = []
//     for (let i = 0; i < radii.length; i++) {
//         area.push(Math.PI * radii[i] * radii[i])
//     }
//     return area;
// }


// console.log(circle(radius))

const area= function(radius){
    return Math.PI *radius *radius
}

//Functional Programming
const calcuate=function(radius,logic){      //calculate is a HOF
    const output=[];
    for (let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]))
    }
    return output;
}


const radius = [5, 1, 2, 6];
console.log(radius.map(area));

console.log(calcuate(radius,area));     //same as map


//Polyfills
// Array.prototype.calcuate = function (logic) {
//     const output = [];
//     for (let i = 0; i < this.length; i++) {
//         output.push(logic(this[i]));
//     }
//     return output;
// }
// console.log(calcuate(radius, area));
// console.log(calcuate(radius, circumference));


// console.log(radius.map(area))
// console.log(radius.calcuate(area));