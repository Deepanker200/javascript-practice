class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const tea=new Teacher("Deepanker",'deepanker@gmail.com',"123")

tea.addCourse()

const tea2=new User("TA- 2")
tea2.logMe();