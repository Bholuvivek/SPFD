
function findMax<T extends number |string>(arr:T[]):T|undefined{
    if(arr.length===0){
        return undefined
    }
   let max:T = arr[0]
      for(let i = 1; i<=arr.length; i++){
        let temp = 0
        if(arr[i]>max){
            max = arr[i]
        }    
      }
      return max
    
}

const arr1:number[] = [2,6,3,5,7,8,2,4,6]

const res = findMax(arr1)

console.log(res);
