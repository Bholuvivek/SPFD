

class Animal{
    leg(){
        console.log("Every Animal Have Four Leg");      
    }
}

class Dog extends Animal{
    bark(){
        console.log("Dog is Barking");    
    }
}

function printALL(animal:Animal){
    if(animal instanceof Dog){
        animal.bark()
    }
    else{
        animal.leg()
    }
}

const animal = new Animal()
const dog = new Dog()

printALL(dog)
printALL(animal)