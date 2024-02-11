function setUsername(username){
    this.username = username
    console.log("Call is Calling");
}

function createUser(username, age, github){
    // Here I am Using Call
    setUsername.call(this,username)
    this.age = age
    this.github = github
}

const vivek = new createUser("Vivek Singh", 22, "Bholuvivek")
console.log(vivek);