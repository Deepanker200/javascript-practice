
let originalObj = {
    name: "Rohan",
    address: { city: "Delhi" }
}

// let shallowCopy = Object.assign({}.originalObj);

let shallowCopy = { ...originalObj }
let deepCopy = JSON.parse(JSON.stringify(originalObj))
let dd=originalObj
originalObj.address.city = "Mumbai"
originalObj.name="CONGO"

console.log(shallowCopy);
// console.log(deepCopy);
// console.log(dd);
// console.log(originalObj)