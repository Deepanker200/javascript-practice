//Deep and Shallow Copy

// let originalObj={
//     name:"Rohan",
//     address:{city:"Delhi"}
// }

// // let shallowCopy=Object.assign({}.originalObj);

// let shallowCopy={...originalObj}
// let deepCopy=JSON.parse(JSON.stringify(originalObj))
// originalObj.address.city="Mumbai"

// console.log(shallowCopy);
// console.log(deepCopy);


// NEW

var obj = {
    name: "Deep",
    age: 22,
    social: {
        facebook: {
            ac1: "somewhere@gmail.com",
            ac2: "somewhere@gmail.com",
        },
        twitter: {
            free: {
                ac1: "somewhere@gmail.com"
            },
            paid: {
                ac1: "somewhere@gmail.com"
            }
        }
    }
}

var obj2 = { ...obj }

// console.log(obj);
// console.log(obj2);
obj2.name = "Harish"  //not changed obj1

// obj2.social.facebook.ac1="changed"
// console.log("OBJ 1: ",obj);

// console.log("OBJ 2: ",obj2);


//Deep copy

var obj3 = JSON.parse(JSON.stringify(obj))
obj3.social.facebook.ac1 = "changed"
console.log(obj.social.facebook.ac1);
console.log(obj3.social.facebook.ac1);

//Deep Copy Logic


function makeDeepCopy(obj) {
    if (typeof obj == 'object' || obj === null) {
        return obj;
    }
    var copiedval = Array.isArray(obj) ? [] : {};
    var keys = Object.keys(obj);
    for (var i = 0; i < keys.length; i++) {
        
        copiedval[keys[i]] = makeDeepCopy(obj[keys[i]]);
    }
    return copiedval;
}
var copy = makeDeepCopy(obj);