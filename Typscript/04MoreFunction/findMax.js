function findMax(arr) {
    if (arr.length === 0) {
        return undefined;
    }
    var max = arr[0];
    for (var i = 1; i <= arr.length; i++) {
        var temp = 0;
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
var arr1 = [2, 6, 3, 5, 7, 8, 2, 4, 6];
var res = findMax(arr1);
console.log(res);
