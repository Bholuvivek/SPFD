const form = document.querySelector('form')

form.addEventListener('submit', function (e) {
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    const health = document.querySelector('#health');

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Enter Valid Height${height}`;
    }
    else if(weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Enter Valid Weight ${weight}`;
    }
    else {
        const bmi = (weight / ((height * height)/10000)).toFixed(2);
        results.innerHTML = `<span>${bmi}</span>`; 
        if(bmi <18.6){ 
            health.innerHTML = 'Under Weight';
        }
        else if(bmi > 18.6 && bmi < 24.9){
            
            health.innerHTML = 'Normal Weight';
        }
        else{
            
            health.innerHTML = 'Over Weight';
        }
    }
    
})
