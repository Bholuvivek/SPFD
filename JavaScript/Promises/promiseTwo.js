// In this File I will pass the data

const promise = new Promise(function(resolve, rejecct){
    setTimeout(function(){
        console.log('Async Task');
        resolve({Name: "Vivek Singh", UserGithub:'Bholuvivek'}) //Here i am Passing the Data in Object form
    },1000)
})

// Now then
promise.then(function(user){
    console.log(user);
})

// Now the 'Catch()'  
promise.catch(function(err){
    console.log(err);
})