class Student{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Parent extends Student{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourses(){
        console.log(`Courses Added ${this.username}`);
    }
}
const name = new Parent('bholu', 'bholu@gm.com', 123)
name.logMe()
name.addCourses()