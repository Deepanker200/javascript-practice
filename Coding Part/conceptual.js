// function greet(age) {
//     console.log(`Hi ${this.name} you are ${age}`);
// }

// const person={
//     name:"Deepanker"
// }

// greet.call(person,23)

//HOF

let arr = [10, 20, 30]


function circumference(n) {
    return 2 * 3.14 * n
    
}

function area(n) {
    return 3.14 * n * n
}

function hoc(arr, logic) {
    let output = []
    for (let i = 0; i < arr.length; i++) {
        output.push(logic(arr[i]))
    }
    return output
}


console.log(hoc(arr,circumference))
console.log(hoc(arr,area))
