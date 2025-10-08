//Debouncing in JS

const getData=()=>{
    console.log("Debounced");
}

const doSomeMagic=function(fn,d){
    let timer;
    return function(){
        let context=this,
            args=arguments;
        clearTimeout(timer)
        timer=setTimeout(()=>{
            getData.apply(context,arguments)
        },d)
    }
}

const betterFunction=doSomeMagic(getData,1000)