// This is way to create the Promises
const promises = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async Task 1');
        resolve(); // This is Method wich is connect to the Then
    },1000)
})
// now I am Connecting the 'then()'
promises.then(function(){
    console.log('1 Consumed!');
})
promises.catch(function name(params) {
    console.log(params);
    
})
// promises.finally(function (){
//     console.log('Finally');
// })