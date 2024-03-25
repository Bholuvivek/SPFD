
function greet(person: { name: string; age: number }) {
  return "Hello " + person.name;
}

const mydata = {
    name:"vivek",
    age:22
}

console.log(greet(mydata));


//  Let's Do Using Greet

interface Person {
    name: string;
    age: number;
  }
   
  function greetMe(person: Person) {
    return "Hello " + person.name;
  }
  
  const mydet :Person={
      name:"Vivek Kumar Singh",
      age:22
  }
  
  console.log(greetMe(mydet))