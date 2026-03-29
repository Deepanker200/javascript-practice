//Count occurrence of a character

// const a="Deepanker Tiwari Developer"

// const ans=a.split("e").length-1     //Including n number of times of e

// console.log(ans)


//Sort~ Quick Sort

// function quickSort(arr) {

//     if (arr.length <= 1) return arr

//     let pivot = arr[0]
//     let left = [];
//     let right = [];

//     for (let i = 1; i < arr.length; i++) {
//         if (pivot < arr[i]) {
//             right.push(arr[i])
//         } else {
//             left.push(arr[i])
//         }
//     }

//// return [...quickSort(left), pivot, ...quickSort(right)]
//     return([...quickSort(right),pivot,...quickSort(left)])
// }


// console.log(quickSort([3, 12, 4, 15, 6, 20, 12, 89, 12]));



//Concating 2 arrays

// const arr1 = [1, 23, 4, 5]
// const arr2 = [10, 74, 122, 2]

// let merged = []

// for (let i = 0; i < arr1.length; i++) {
//     merged[merged.length] = arr1[i]
// }

// for (let i = 0; i < arr2.length; i++) {
//     merged[merged.length] = arr2[i]
// }

// console.log(merged);

// Q. Capitalize the First Letter of Each Word in a Sentence in JavaScript?


// const sentence = "hello world sdas sdaads"

// function cap(sentence) {
//     const a = sentence.split(" ");
//     let newSentence = ""
//     for (let i = 0; i < a.length; i++) {
//         newSentence += a[i][0].toUpperCase() + a[i].slice(1) + " "
//     }
//     return newSentence
// }

// console.log(cap(sentence))

// Q. Array elements to UpperCase

const arr=['g','d','f'];

function up(arr){
    let newArr=[]
    for(let i=0;i<arr.length;i++){
        newArr.push(arr[i].toUpperCase())
    }
    console.log(newArr)
}

up(arr)