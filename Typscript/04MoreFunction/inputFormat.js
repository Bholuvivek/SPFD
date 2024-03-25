var stringFormater = function (input) {
    if (!input) {
        return input;
    }
    return input.charAt(0).toUpperCase() + input.slice(1);
};
var inval = "vivek singh";
console.log(stringFormater(inval));
