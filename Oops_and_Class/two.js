// In this program i am goint to use this keyword and new keyword


const user = {
    username: "hitesh",
    age: 8,
    username:"Bhluvivek",

     function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}

function userdata(name, age, username){
    this.name = name;
    this.age = age;
    this.username = username

    this.display = function(){
        console.log(`Welcome ${this.name}`);
        console.log(`Your age is ${this.age}`);
        console.log(`your Github UserName is ${this.username}`);
    }
    return this
}

userdata("Raviranjan Kumar", 22, "DRCC")
const user1 = new userdata("Vivek Singh", 22, "Bholuvivek")
console.log(user1);