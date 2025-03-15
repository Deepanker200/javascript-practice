class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Usernam: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}


const deep=new User("Deepanker")
console.log(deep.createId());

//We cannot access static even not for Child classes
