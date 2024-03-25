 

 type stringformatter = (input:string)=>string

 const stringFormater:stringformatter = (input)=>{
        if(!input){
            return input
        }
        return input.charAt(0).toUpperCase() +input.slice(1)
    }

    const inval="vivek singh"

    
    console.log(stringFormater(inval));
    