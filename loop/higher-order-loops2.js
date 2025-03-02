const coding = ["js", "python", "ruby", "java", "cpp", "php"];


// coding.forEach(
//     function (item) {
//         console.log(item);

//     }
// )

// coding.forEach((item) => {
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe);


coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
})

let myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "mysql",
        languageFileName: "sql"
    },
]

myCoding.forEach((item)=>{
    console.log(item.languageFileName);
})