const promise = new Promise( function(resolve, reject){
    setTimeout(function(){
        console.log('Async Task 1');
    },2000)
})