function votingAge(age){
    if(age>=18){
        console.log("you are eligible for vote")
    }
    else if(age<18){
        console.log("you are not eligible for vote")
    }else{
        console.log("no result")
    }
}
votingAge(18)