document.querySelector("#grandparent")
.addEventListener('click',()=>{
    console.log("Grandparent Clicked");
},true);        //Event capturing

document.querySelector("#parent")
.addEventListener('click',()=>{
    console.log("Parent Clicked");
},false);   //Event Bubbling

document.querySelector("#child")
.addEventListener('click',()=>{
    console.log("Child Clicked");
},true);    //Event Capturing


//Event Propagation

// document.querySelector("#grandparent")
// .addEventListener('click',()=>{
//     console.log("Grandparent Clicked");
// },false);        //Event capturing

// document.querySelector("#parent")
// .addEventListener('click',(e)=>{
//     console.log("Parent Clicked");
//     e.stopPropagation();
// },false);   //Event Bubbling

// document.querySelector("#child")
// .addEventListener('click',()=>{
//     console.log("Child Clicked");
// },false);    //Event Capturing