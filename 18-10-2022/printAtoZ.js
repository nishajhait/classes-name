function printAtoZ(){
    let sum = [];
    for(i=65;i<=90;i++){
        sum.push(String.fromCharCode(i))

   
    }
    console.log(sum.join(", "))
}
printAtoZ()