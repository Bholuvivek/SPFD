//Select 
const clock = document.getElementById('clock');

//Set time  running in second
setInterval(function (){
    let date = new Date()
    clock.innerHTML = date.toLocaleTimeString()
},1000)