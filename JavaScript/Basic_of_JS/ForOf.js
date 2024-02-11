const arr=[10,11,12,13,14,15,16]
for (const i of arr) {
    // console.log(i);
    
}

const name = "Vivek Kumar Singh"
for (const char of name) {
    // console.log(char);
    
}

// Map:  It known for storing the usinque Value

const map = new Map()
// for initialize the value use set('key', 'value')
map.set('BR', "Bihar")
map.set('UP', "Utter Pradesh")
map.set('MP', "Madhya Pradesh")

for (const [key,value] of map) {
    // console.log(key," : " ,value);
}


// Let Take a Object But Object is not iterable

// We Get this error

// TypeError: myObject is not iterable


const obj ={
    Fname: 'Vivek',
    Lname: 'Singh',
    Age : 22,
}
for (const [key,value] of obj) {
    console.log(key," :",value);
    
}

