// Defining Type
function authenticationUser(username, password) {
    if (username && password) {
        return { success: true, token: "Random@123" };
    }
    else {
        return { success: false, token: "Invalid UserName And Password" };
    }
}
var validResponse = authenticationUser("Bholuvive", "");
console.log(validResponse);
