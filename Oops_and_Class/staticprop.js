class Vivek{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Welcome ${this.username}`);
    }
    // Static is a Keyword which is not access by any class
    static createaId(){
        return `123`
    }
}
class Main extends Vivek{
    constructor(username, password){
        super(username)
        this.password = password
    }
    printMe(){
        console.log(` Your User Name is ${this.username} and Your Password is ${this.password}`);
    }
}

const user1 = new Main('Vivek','Bholu@123')
user1.logMe()
user1.printMe()
// console.log(user1.createaId()) // but this will not print but give error..
 const user2 = new Vivek('Bholu')
 user2.logMe()
// console.log(user2.createaId()); // Same As this class can't be acces this static function
