//Revision

//HOF
const arr = [1, 2, 3, 4, 5]

const area = (r) => Math.PI * r * r

const calculate = function (arrs, logic) {
    const output = []
    for (let i = 0; i < arrs.length; i++) {
        output.push(logic(arrs[i]))
    }
    return output
}

console.log(calculate(arr,area))


//Callback

function greet(name, callback) {
  console.log("Hello, " + name);
  callback(); // calling the function that was passed
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greet("Deepanker", sayGoodbye);

