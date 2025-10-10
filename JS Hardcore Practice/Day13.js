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

var obj={
    name:"Deep",
    age:22,
    social:{
        facebook:{
            ac1:"somewhere@gmail.com",
            ac2:"somewhere@gmail.com",
        },
        twitter:{
            free:{
                ac1:"somewhere@gmail.com"
            },
            paid:{
                ac1:"somewhere@gmail.com"
            }
        }
    }
}

var obj2={...obj}

console.log(obj);
// console.log(obj2);

obj2.social.facebook.ac1="changed"
console.log(obj);

console.log(obj2);


