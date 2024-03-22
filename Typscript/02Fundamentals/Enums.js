var weekDays;
(function (weekDays) {
    weekDays[weekDays["Monday"] = 0] = "Monday";
    weekDays[weekDays["Tuesday"] = 1] = "Tuesday";
    weekDays[weekDays["Wednesday"] = 2] = "Wednesday";
    weekDays[weekDays["Thursday"] = 3] = "Thursday";
    weekDays[weekDays["Friday"] = 4] = "Friday";
    weekDays[weekDays["Saturday"] = 5] = "Saturday";
    weekDays[weekDays["Sunday"] = 6] = "Sunday";
})(weekDays || (weekDays = {}));
console.log(weekDays);
var month;
(function (month) {
    month[month["Jan"] = 1] = "Jan";
    month[month["Feb"] = 2] = "Feb";
    month[month["March"] = 3] = "March";
    month[month["April"] = 4] = "April";
    month[month["May"] = 5] = "May";
    month[month["June"] = 6] = "June";
    month[month["July"] = 7] = "July";
    month[month["Aug"] = 8] = "Aug";
    month[month["Sept"] = 9] = "Sept";
    month[month["Oct"] = 10] = "Oct";
    month[month["Nov"] = 11] = "Nov";
    month[month["Dec"] = 12] = "Dec";
})(month || (month = {}));
;
console.log(month);
// String Enum
var Direction;
(function (Direction) {
    Direction["East"] = "East";
    Direction["West"] = "West";
    Direction["North"] = "North";
    Direction["South"] = "South";
})(Direction || (Direction = {}));
console.log(Direction);
