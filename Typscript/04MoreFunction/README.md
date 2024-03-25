##                                         More FUnction



# Function Type Expression
- It is allow us to define and use types that present functions.
- In This Type describe the parameter and return type function.


# For Example

```bash
function greeting(fn: (a: string) => void) {
  fn("Hello, Vivek");
}

function sayGreet(s: string) {
  console.log(s);
}

greeting(sayGreet);
```