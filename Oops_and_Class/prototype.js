let myData = {
    name:"Vivek Kumar",
    age: 22,
    getMydata: function(){
        console.log(`My Name is ${this.name} and My Age is ${this.age}`);
    }
}


Object.prototype.vivek= function(){
    console.log(`Vivek Data is present in all objects`);
}

Array.prototype.sayVivek = function(){
    console.log(`Vivek is saying hello`);
}

myData.vivek()
myData.sayVivek()
