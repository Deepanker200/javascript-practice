const user = {
    username: "Deepanker",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details");
        // console.log(`Username ${this.username}`)
        console.log(this);
        
    }
}


// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this)


//Constructor
// const promiseOne=new Promise();
// const date=new Date();

function User(username,loginCount,isLoggedIn){
    this.username=username      //left handside is variable and right hand side is value
    this.loginCount=loginCount
    this.isLoggedIn=isLoggedIn

    // return this      //Without this only works with new keyword!
}

const userOne=new User("Deepanker",20,true)
const userTwo=new User("DeepankerT",12,false)   //It will override without new

console.log(userOne);
