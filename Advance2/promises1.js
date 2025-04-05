const cart = ["shoes", "pants", "kurtas"]

createOrder(cart, function (orderId) {
    proceedToPayment(orderId)
})



const promise = createOrder(cart)

promise.then(function (orderId) {
    return proceedToPayment(orderId)
})
    .then(function (orderId) {
        return showOrderSummary(paymentInfo)
    })
    .then(function (paymentInfo) {
        return updateWalletBalance(paymentInfo)
    })

// const GITHUB_API = 'https://api.github.com/users/Deepanker200'

// const user = fetch(GITHUB_API)        //fetch gives us a promise object

// console.log(user);

// user.then(function (data) {
//     console.log(data);
// })