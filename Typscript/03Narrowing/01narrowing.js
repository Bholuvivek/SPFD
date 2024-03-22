// First We are going to use the Condition statement.
function fun(age) {
    if (typeof age === "string") {
        console.log('Your age is ' + age);
    }
    else if (typeof age === "number") {
        console.log('Age :', (10 + age));
    }
}
fun("Twenty Two");
