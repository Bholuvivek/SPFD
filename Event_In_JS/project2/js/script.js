let p = document.querySelector('p')
const start = document.getElementById('start').addEventListener('click', function(){
    sayDate('Vivek')
})
const sayDate = function (str){
    p.innerHTML = str, Date.now(); 
}
const change =  setInterval(sayDate(),1000)
document.getElementById('stop').addEventListener('click', function(){
    clearTimeout(change)
    p.innerHTML = "Thank you Too Use me"
})