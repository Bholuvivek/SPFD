# In This File I am developed only begginner Level Project

## Project -1 Color Switcher
  -Basically it is a begginer level project but if you know that how to develop this then you can add an additional functionality in your website like -- dark mode, lite mode.. etc

# This is html file index.html
```  html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/style.css">
    <title>Color Switcher</title>
</head>
<body>
    <div class="main">
        <div class="btn">
           <button class="button" id="black"></button>
           <button class="button" id="yellow"></button>
           <button class="button" id="grey"></button>
           <button class="button" id="orange"></button>
           <button class="button" id="green"></button>
           <button class="button" id="blue"></button>
           <button class="button" id="purple"></button>
        </div>
    </div>
</body>
<script src="./js/script.js"></script>
</html>

```

##This is css File
```css
.button{
    padding: 50px;    
    align-items: center;
    margin-left: 100%
    mar

}

#grey{
    background-color: grey;
}
#yellow{
    background-color: yellow;
}
#black{
    background-color: black;
}
#orange{
    background-color:orange ;
}
#blue{
    background-color: blue;
}
#purple{
    background-color: purple;
}
#green{
    background-color: green;
   
}
``

## This is JavaScript

 ##script.js
 ```JavaScript
    
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

 ```
