## NARROWING 

- The Main Purpose of Narrowing is performing the operation depends on the data and It's Type.

# For Example 

-  Let's we have a function and there is parameter and in there we are expecting input may be string or number and based on the data type we have to perform the operation.

- For this kind we are using narrowing in there.
-  Also with the help of Narrowing we can do other operation.
- For Performing the operaion we are using a control flow statement such as **Condition statement** and **Switch Statement**.


# For More Understating See This Code

```typscript


// First We are going to use the Condition statement.

function fun(age : string|Number) {
    if(typeof age === "string"){
        console.log('Your age is '+age);  
    }
    else if (typeof age === "number"){
        console.log('Age :',(10+age));
        
    }
}

fun("Twenty Two")
```

# Where can we Implement the Narrowing in the Real Time work
- So If a say we can use it where we are going to dealing with Dynamic Data where we are going to Handle the different typesof Inputs.

# These are some module where we can use the Narrowing

**Form Validation :**  In Form validation we can use it like we are going to take different type of data (number, String,Boolean...). So Narrowing can help to determine the type of inputs and Applying the validation.

**For API Response :**  If we see the working with API or Handling the API Response the data return may vary based  on the **endpoint** and **Request** Parameter. So Here Narrowing can parse and Process the Response Data based on the structure and the Data Types.

**Event Handling :**  There are different types of Event. And Event Handler receive the data in various types anf formats. So here Narrowing can handle the different types of event base on the them data structure.

**State Management :** In Every Application have some state Management that may be complex or Easy for Example these are some state management such as **Redux and Veux**. So Here also Narraving can help to Handle action and mutation that operate on different type of  the state properties.

**Dynamic UI Components :** In The UI when we are rending the data there Narrowing can render or displaing the data base on the data types.



# Let's See The Another Example

```typescript

// Defining Type

type AuthAPI = {success:true, token:string} | {success:false, token:string}

function authenticationUser(username:string, password:string):AuthAPI{
    if(username && password){
        return {success:true, token:"Random@123"}
    }
    else{
        return {success:false, token:"Invalid UserName And Password"}
    }
}

const validResponse = authenticationUser("Bholuvive", "")

console.log(validResponse);

```


# These are the Narrowing Operator
 
  - In Operator Naraworing
  - Instanceof Narrowing