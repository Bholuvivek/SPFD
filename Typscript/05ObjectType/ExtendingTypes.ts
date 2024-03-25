
type person = {
    name:string,
    age:number
}
type emp = person & {
    jobrole:string,
    salery:number
}

function empDetails(empData:emp){
    console.log(empData);
    
}
const employee :emp ={
    name : "vivek",
    age:22,
    jobrole:"Technical Engineer",
    salery:20000
}

empDetails(employee)