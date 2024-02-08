async function fectchPromise(){
    try {
        const response = await fetch('https://api.github.com/users/Bholuvivek')
        const data = await response.json()
        console.log(data.login);
    } catch (error) {
        console.log(error);
    }
}
fectchPromise()