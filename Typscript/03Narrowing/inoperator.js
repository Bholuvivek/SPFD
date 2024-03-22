function student(students) {
    if ("smart" in students) {
        console.log(students.smart());
    }
    else if ("beautiful" in students) {
        console.log(students.beautiful());
    }
}
var boys = {
    smart: function () {
        return "hii Vivek";
    }
};
var girls = {
    beautiful: function () {
        return "This is girl function";
    }
};
student(girls);
student(boys);
