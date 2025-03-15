class User {
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){          //It is method
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const user=new User('Deepanker','tiwarideepanker@gmail.com',"123")

console.log(user.encryptPassword());
console.log(user.changeUsername());
