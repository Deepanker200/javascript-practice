// function x(){
//     console.log("Hello JavaScript");
// }

// function y(x){   x is callback function
//     x()
// }


const radius = [3, 1, 2, 4, 5]

const area = function (radius) {
    return Math.PI * radius * radius
}

const circumference = function (radius) {
    return 2 * Math.PI * radius
}

const calcuate = function (radius, logic) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]));
    }
    return output;
}

//Polyfills
Array.prototype.calcuate = function (logic) {
    const output = [];
    for (let i = 0; i < this.length; i++) {
        output.push(logic(this[i]));
    }
    return output;
}
console.log(calcuate(radius, area));
console.log(calcuate(radius, circumference));


console.log(radius.map(area))
console.log(radius.calcuate(area));



// const calculateArea = function (radius) {
//     const output = [];
//     for (let i = 0; i < radius.length; i++) {
//         output.push(Math.PI * radius[i] * radius[i])
//     }
//     return output;
// }

// console.log(calculateArea(radius));
