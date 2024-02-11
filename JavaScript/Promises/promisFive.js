// Here

const promise = new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log('Async Consumed');
        let data = false; // it give error if i keep false then give the resulty
        if(!true){
            resolve({MyName: 'Vivek Singh', MyInsta:'@thevivekbholu',MyTwitter:'@Bholuvivek'})
        }
        else{
            reject('It have Some Error')
        }
    }, 1000);
})
async function consumPromis(){
    try {
        const response = await promise
    } catch (error) {
     console.log(error);   
    }
}
async function consumePromise(){
    try {
        const response = await promise
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumPromis()
