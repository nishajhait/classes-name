function getTheSumArray(array){
    let sum = 0;
    for(i=0;i<array.length;i++){
        sum+=array[i];
    }
    console.log(sum)

}
const arr = [2,3,4,5,6]
getTheSumArray(arr)