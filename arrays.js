//arrays in js

const arr=[1,2,3,4,5];
const arr2=new Array("G",1,2,"4","hello");
console.log(arr);
console.log(arr2);
console.log(typeof arr2[3]);        //string


arr.push(6);
console.log(arr);

arr.pop();          //No value to be inserted
console.log(arr);

arr.shift();
console.log(arr);

arr.unshift(10);

console.log(arr);

//slice and splice

const arr3=[1,5,6,10,2,80]
console.log(arr3.slice(1,5));
console.log(`Original array3: ${arr3}`);        //Doesn't change


const arr4=[90,10,2,45,88,55,100]
console.log(arr4.splice(1,5,2));  //returns [10,2] and modifies the array
console.log(`Original array4: ${arr4}`);

const arr5=[90,10,18,2,44,25];
console.log(arr5.slice(-2,-5));


const arr6=["Mango","Grapes","Apple","Banana"];
arr6[5]="Pineapple"
console.log(arr6);
console.log(arr6[9]);

console.log(arr6.lastIndexOf("Apple"));
