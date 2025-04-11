const API_URL="https://api.github.com/users/Deepanker200"

async function handlePromise() {
    
    const data= await fetch(API_URL)

    const jsonValue=await data.json()
    console.log(jsonValue)




    // try {
    //     const data = await fetch(API_URL)
    //     const jsonValue = await data.json()
    //     console.log(jsonValue);
        
    // }
    // catch (error) {
    //     console.log(error)
    // }
    // fetch().then(res=>res.json()).then(res=>console.log())

    //fetch()=> Response.json()=>jsonValue
}

// handlePromise();
handlePromise().catch((err)=>console.log(err));