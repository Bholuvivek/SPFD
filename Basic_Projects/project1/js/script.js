const button = document.querySelectorAll('.button')
const body = document.querySelector('body')

button.forEach(function (btn) {
    console.log(button);
    btn.addEventListener('click', function (e) {
        console.log(e);
        console.log(e.target);
        switch (e.target.id) {
            case 'black':
                body.style.backgroundColor = e.target.id
                break;
            case 'yellow':
                body.style.backgroundColor = e.target.id
                break;
            case 'grey':
                body.style.backgroundColor = e.target.id
                break;
            case 'orange':
                body.style.backgroundColor = e.target.id
                break;
                case 'green':
                    body.style.backgroundColor = e.target.id
                    break;
                    case 'blue':
                body.style.backgroundColor = e.target.id
                break;
                case 'purple':
                body.style.backgroundColor = e.target.id
                break;
            default:
                document.style.backgroundColor = 'aquamarine'
                break;
        } 
    })
});