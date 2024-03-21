## Basics Of TypeScript

- Understand what TypeScript is and its benefits over plain JavaScript.
- Learn about static typing, type inference, and type annotations.
- Get familiar with basic TypeScript syntax and features.



# What is TpeScript

- It is a superset of JavaScript.
- In Other word we can say for better Performance we need Typescript because in the javascript we don't have static Typing. So with the help of the Typescript we can add the Static Typing.

# Javascript VS TypeScript

- In the JavaScript if we call any object value and if it is not available in the file so it not tell directly to us it give an error **undefined.**

- But in the Typescript if we don't have the value, or reference so it directly tell this is not exist.

# For Better Understanding This is the Example

# JavaScript
```Javascript
const user={
    name:'Vivek Kumar',
    age:22,
    City:'Siwan'
}

console.log(user.email)

Output : undefined
```

# IN Typescript

```typescript
const user={
    name:'Vivek Kumar',
    age:22,
    City:'Siwan'
}

console.log(user.email)

// It will Give the output :  Property 'email' does not exist on type '{ name: string; age: number; City: string; }'.
```


# Static Typing
- It means where we have to specify the of Types Variables and Function paramenter and Function Return Value at the compile time.

# For Example

```typescript
let myname = "VIvek Kumar Singh"

console.log(myname);

// Specifying the types

let myname:string = "Vivek Kumar";

console.log(myname)

```

# If I go for the Function 
- in function we also have to give type for better code 

# For Example

```typescript

function add(num1:number, num2:number):number{
    console.log(num1+num2);
}
add(10+20);

```
 - In The Example i declared the parameter values types as well as function type.
 - Without Giving the function type aslo the code is write but the main purpose to declear that getting the result that will also a number type as well as these main reason also like **Flexibility, Conseness and Quick Developement.**

**For Example** If we are not intrested to givinf the function types then we might be lose such as **Reduce Readbility, Decreasing the types Safety and Many thing also.**

- So Conclusion I have to give function type also.

# Types by Inference
- It Refer to the ability of compiler to automatically deduce the types of variable, function as well as the return value.
- In other word we can say that i conclude automatically based on the declaration.

# These are some Importance of the Types of Inference.
 - It reduce the boilerplate.
 - It improve the code flaxibity as well as Encourage Typescript adoption.


 ```typescript
const greet = "Hello Vivek!";

console.log(greet);

//if you check the type of greet

console.log(typeof(greet))
//output is string and if you see inside there it will show something like : const greet:string
 ```

## Defining the Types

**Basically In the TypeScript also premitive and non- primitive data types avaible.**

#Primitive
- Boolean
- Number
- String
- Bigint
- null
- undefined
- **Symbol:**  like number and string. symbol values are created by calling the Symbol constructor.

```typescript
let mysymbol = symbol(''start)
```


# Non-Primitive
- Object
- Array
- Function
- Any
- Class
- Interface and many more...


# Types for Tooling
- It is like suggation when we write the wrong keyword or syntax that time it indecate the error.
- With the help of we can see the bugs and error at the writting the syntax.
- Mainly It help us to bulid and write a manner code.
