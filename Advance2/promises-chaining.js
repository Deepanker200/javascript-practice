const cart=["shoes","pants","kurta"]

const promise=createOrder(cart);      //returns orderId 
console.log(promise);


promise.then(function(orderId){
    console.log(orderId);
    
    // proceedToPayment(orderId);
})
.catch(function(err){
    console.log(err.message);
})

//////
//Producer
function createOrder(cart){
    const pr= new Promise(function(resolve,reject){
        //create an Order
        //validate Cart
        //OrderId as success or failure

        if(!validateCart(cart)){
            const err=new Error("Cart is not valid")
            reject(err)
        }
        //Logic for createOrder
        const orderId="12345";
        if(orderId){
            setTimeout(function(){
            resolve(orderId);
            },5000)
        }
    });

    return pr;
}

function validateCart(cart){
    return false;
}