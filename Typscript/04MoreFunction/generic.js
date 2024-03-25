function myElement(arr) {
    if (arr.length < 0) {
        return undefined;
    }
    else {
        return arr[1];
    }
}
var arr1 = [];
var sayArr = myElement(arr1);
// lets create a string type
var arr2 = ["Vivek", "Pratap", "Singh"];
var sayArr2 = myElement(arr2);
console.log(sayArr2);
console.log(sayArr);
