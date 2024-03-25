
function myElement<T>(arr:T[]):T|undefined  {
    if(arr.length< 0){
        return undefined;
    }
    else{
        return arr[1]
    }
}

const arr1 : number[] = [1,2,3,4,5]  
const sayArr : number |undefined = myElement(arr1)

// lets create a string type

const arr2 :string[] = ["Vivek","Pratap", "Singh"]

const sayArr2 :string|undefined = myElement(arr2)

console.log(sayArr2);


console.log(sayArr);
