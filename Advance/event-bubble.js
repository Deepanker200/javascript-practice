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