//for loop


// for (let index = 0; index <= 10; index++) {
//     const element = index;
//     if (element == 5) {
//         console.log("5 is best");
//     }
//     console.log(element);
// }

// for (let i = 0; i <= 10; i++) {
//     for(let i=0;i<=10;i++){

//     }
//     const element = array[index];
// }

// myArray=["Deepanker","Lakshay","Arpit","Ashutosh"];
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
// }


// // for(let i=15;i>=1;i+=2){
// //     console.log(i);
// // }

// for (let i=1;i<=3;i++){
//     // console.log(i);
//     for(let j=1;j<=3;j++){
//         console.log(j);
//     }
// }


myArray=[["Deepanker","Lakshay"],["Arpit","Ashutosh"]];

for(let i=0;i<myArray.length;i++){
    console.log("List: ",myArray[i]);
    for(let j=0;j<myArray[i].length;j++){
        console.log("Name: ",myArray[i][j]);
}
}
