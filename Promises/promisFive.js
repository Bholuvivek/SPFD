// Here

const promise = new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log('Async Consumed');
        let data = true; // it give error if i keep false then give the resulty
        if(!true){
            resolve({MyName: 'Vivek Singh', MyInsta:'@thevivekbholu',MyTwitter:'@Bholuvivek'})
        }
        else{
            reject('It have Some Error')
        }
    }, 1000);
})