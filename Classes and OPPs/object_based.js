const User={
    _email:'deep@gmail.com',
    _password:'deep123',


    get email(){
        return this._email.toUpperCase()
    },
    
    
    set email(value){
        this._email=value
    }
}

const tea=Object.create(User)

console.log(tea.email);
