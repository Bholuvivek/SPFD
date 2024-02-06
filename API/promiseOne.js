// This is Another way to Promise withou storing in the Variable

new Promise(function (resolve, reject) {
    setTimeout(function(){
        console.log('Task Async');
        resolve()
    },1000)  
}).then( function(){
    console.log('task Consumed');
}).catch(function (reject){
    console.log('Catch'+reject);
}).finally(function () {
    console.log('finally');
})