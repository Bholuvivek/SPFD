function greater(num1, num2, num3){
    if(num1>num2 && num1> num3){
        console.log(`Greater: ${num1}`);
    }
    else if(num2>num1 && num2>num3){
        console.log(`Greater: ${num2}`);
    }
    else{
        console.log(`Greater: ${num3}`);
    }
}
greater(30,40,5)