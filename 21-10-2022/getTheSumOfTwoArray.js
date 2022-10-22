function getTheSumOfTwoArray(array1, array2){
    let sum = 0;
    for(i=0;i<array2.length;i++){
        sum+=array1[i] + array2[i];
    }
    console.log(sum)

}
const arr1 =[2,3,4,5]
const arr2 = [5,4,5,6]
getTheSumOfTwoArray(arr1, arr2)