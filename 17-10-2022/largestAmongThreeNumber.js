function largestAmongThreeNumber(a,b,c) {
    
    if (a>b && a>c){
        console.log("largest number"+" "+a)
    }
    else if (b>a && b>c){
        console.log("largest number"+" "+b)
    }
    else if(c>a && c>b)
    console.log("largest number"+" "+c)



}
largestAmongThreeNumber(15,12,11)