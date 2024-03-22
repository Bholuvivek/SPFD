type boy = { smart: () => void };
type girl = { beautiful: () => void };

function student(students: boy | girl) {
    if ("smart" in students) {
        console.log(students.smart());
    } else if ("beautiful" in students) {
        console.log(students.beautiful());
    }
}

let boys :boy={
    smart:()=>{
        return "hii Vivek"
    }
}

let girls : girl={
    beautiful:()=>{
        return "This is girl function"
    }
}

student(girls)
student(boys)