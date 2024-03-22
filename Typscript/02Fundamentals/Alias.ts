
// Alias & InterFace

type name = string
type age = number
type married = boolean

// First Way
// let user = {
//     name:"vivek",
//     age:22,
//     married:false
// }

// console.log(user);


//  second way

type user ={
    username:name,
    userage:age,
    marriedstatus:married
}

const userName: name ="vivek";
const userAge : age = 22;
const userMarriage : married =false

const User:user={
    username :userName,
    userage : userAge,
    marriedstatus : userMarriage
}
console.log(User);


console.log("Small user");

console.log(User);






