
// Assertion Similar to the TypeCasting

//First Way

let myname:unknown ="Vivek Kumar Singh"

console.log(myname)

let lenght = (myname as string).length

console.log(lenght);

// Another Way

let myage : unknown =22

console.log(myage);

let age = <number> myage

console.log(typeof(age));

// Assertion For Object


interface myDetails {
    myname:string,
    myage:number
}
let person = <myDetails> {}
person.myname="Bholu",
person.myage=22

console.log(person);



