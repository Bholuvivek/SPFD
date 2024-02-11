class user{
    userData(username,email, mob, age, regno, password){
        this.username =username,
        this.email = email
        this.mob = mob
        this.age = age
        this.regno = regno
        this.password = password
    }

    // creating another function to encrypt the pass
    encryptPassword(){
        return `${this.password}@123`
    }

    // creating function for set username
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}
const user1 = new userData('Vivek Singh', 'vivek@gmail.com',8804875770,22,7209201040,"Bholu")
console.log(user1.encryptPassword());