
const mywords :{[index:number]:string}={
    1 :"Mr",
    2:"Vivek",
    3:"Pratap",
    4:"Singh",
}
for (const index in mywords) {
  console.log(index+"  ==>  "+mywords[index]);  
}