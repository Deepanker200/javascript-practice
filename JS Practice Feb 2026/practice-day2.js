const radius = [3, 1, 2, 5, 6]

const area=function(radius){
    return Math.PI*radius*radius
}

const circumference=function(radius){
    return 2*Math.PI*radius
}


//calculate is a HOF
const calculate=function(radius,logic){
    const output=[];
    for(let i=0;i<radius.length;i++){
        output.push(logic(radius[i]))
    }

    return output
}

console.log(calculate(radius,area))
console.log(calculate(radius,circumference))

// const calculateArea = function (radius) {
//     const output = []
//     for (let i = 0; i < radius.length; i++) {
//         output.push(Math.PI * radius[i] * radius[i])
//     }
//     return output
// }


// const calculateCircumference = function (radius) {
//     const output = []
//     for (let i = 0; i < radius.length; i++) {
//         output.push(2 * Math.PI * radius[i])
//     }
//     return output
// }


// console.log(calculateArea(radius))