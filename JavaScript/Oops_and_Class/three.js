// Here I am Using This keyword and Also I am Using Prototype method

function UserDetails(username, id){
    this.username = username;
    this.id = id;
}

// Increamenting the ID
UserDetails.prototype.increament = function(){
    // Using this.id because it increment which is called by for example this means jis
    this.id++
}

UserDetails.prototype.printMe = function(){
    console.log(`This is User Name ${this.username}`)
    console.log(`This is User Id ${this.id}`)
}

const user1 = new UserDetails("Vivek Singh", 1)

const user3 = new UserDetails("Bholu Singh", 2)
console.log(user1);