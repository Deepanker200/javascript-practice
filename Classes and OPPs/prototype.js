let myName="Deepanker    "


// console.log(myName.truelength);


let myHeros=["Thor","Spiderman"];

let heroPower={
    thor:'hammer',
    spiderman:'sling',

    getSpiderPower:function(){
        console.log(`Spide power is ${this.spiderman}`)
    }
}

Object.prototype.deepanker=function(){
    console.log(`Deepanker is present in all objects`);
    
}

Array.prototype.heyDeep=function(){
    console.log('Deepanker says Hello');
    
}

// heroPower.deepanker();

// myHeros.deepanker()
// heroPower.heyDeep();


//Inheritance


const User={
    name:'Deepanker',
    age:25,
}

const Teacher={
    makeVideo:true
}

const TeachingSupport={
    isAvailable:false
}

const TASupport={
    makeAssignment:'JS Assignment',
    fullTimw:true,
    __proto__:TeachingSupport
}

Teacher.__proto__=User

//modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher)


let anotherUsername="Deepanker Tiwari    "

String.prototype.truelength=function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.truelength()        //it becomes property