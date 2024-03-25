function filterArray(arr, predicate) {
    var filteredArray = [];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var item = arr_1[_i];
        if (predicate(item)) {
            filteredArray.push(item);
        }
    }
    return filteredArray;
}
var numbers = [1, 2, 3, 4, 5];
var filteredNumbers = filterArray(numbers, function (num) { return num % 2 === 0; });
console.log("Filtered numbers:", filteredNumbers); // Output: Filtered numbers: [2, 4]
var words = ["apple", "banana", "cherry", "orange"];
var filteredWords = filterArray(words, function (word) { return word.length > 5; });
console.log("Filtered words:", filteredWords); // Output: Filtered words: ["banana", "cherry", "orange"]
