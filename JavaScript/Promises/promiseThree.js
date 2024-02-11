// In this File I am foing Chaining Concept

const promise = new Promise(function (resolve,  reject) {
    setTimeout(() => {
        console.log('Async Consumed');
        let data = true; // it give error if i keep false then give the resulty
        if(!true){
            resolve({MyName: 'Vivek Singh', MyInsta:'@thevivekbholu'})
        }
        else{
            reject('It have Some Error')
        }
    }, 1000);
})


// Calling then and also Using Chainig 
promise.then((user)=>{
    console.log(user);
    return user.MyInsta
}).then(function(userInsta){ // This is chaining if i store then value in any variable then it give the error 
    // so better to do chaining
    console.log(userInsta);
}).catch(function (err) {
    console.log(err);   
}).finally(()=> console.log('Everything Done'))