function printZToA(){
let sum = [];
    for(i=90;i<=65;i--){
        sum.push(String.fromCharCode(i))
        
    }
    console.log(sum.join(", "))
}
printZToA()