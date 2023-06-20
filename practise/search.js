// linear search 
const searchArray = [10,5,1,2,7,9,3,6,8,4];
const sortedArray = [1,2,3,4,5,6,7,8,9,10]

const linearSearch = (arr,number)=>{
    for(let i=0;i<arr.length;i++){
        if(number==arr[i]){
            return i
        }
    }
    return -1;
}


console.log(linearSearch(searchArray,3));
// O(n) is the time complexity.


const binarySearch=(array,number)=>{
    let start =0;
    let end = array.length-1;
    let middle = Math.floor((start+end)/2);

    while(array[middle]!==number && start<=end){
        if(number<array[middle]){
            end = middle-1;
        }else{
            start = middle+1;
        }

        middle = Math.floor((start+end)/2);

    }
    return array[middle]===number ? middle:-1;
}


console.log(binarySearch(sortedArray,4));