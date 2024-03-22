
// Defining Type

type AuthAPI = {success:true, token:string} | {success:false, token:string}

function authenticationUser(username:string, password:string):AuthAPI{
    if(username && password){
        return {success:true, token:"Random@123"}
    }
    else{
        return {success:false, token:"Invalid UserName And Password"}
    }
}

const validResponse = authenticationUser("Bholuvive", "")

console.log(validResponse);
