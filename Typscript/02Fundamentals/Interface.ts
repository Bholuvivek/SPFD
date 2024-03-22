
interface person{
    name:string,
    from:string
}
interface vivek extends person  {
    job:boolean
}

const bholu :vivek={
    name:'Vivek Singh',
    from:"Siwan",
    job:true
}
console.log(bholu);


