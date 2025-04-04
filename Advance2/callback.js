//Callback 

const cart = ["shoes", "t-shirts", "pants"]

api.createOrder(cart, function () {
    api.proceedToPayment(function () {
        api.showOrderSummary(
            function () {
            api.updateWaller()
        })
    })
})

//This structure is known as Pyramid of Doom
//Inversion of Control: When we lose our control on code!! Another JS Problem