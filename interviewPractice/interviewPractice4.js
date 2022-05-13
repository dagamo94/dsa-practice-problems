// Problem: Sort an array of values which only contains zeroes or ones

function sortBinary(arr) {
    // return a sorted array containing 0's and 1's
    // return bubbleSort(arr);


    for(let i = 0; i < arr.length-1; ++i){
        const temp = arr[i];
        if(arr[i] !== 0){
            arr[i] = arr[i+1];
            arr[i+1] = temp;         
        }
    }

    return arr;

}


// function sortBinary(arr) {
//     const result = [];
//     const leftArr = [];
//     const rightArr = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] === 0) leftArr.push(arr[i]);
//       else rightArr.push(arr[i]);
//     }
  
//     return result.concat(...leftArr, ...rightArr);
//   }
  


console.log(sortBinary([0, 1, 1, 0, 1, 0, 1, 1])); // [0, 0, 0, 1, 1, 1, 1, 1]
console.log(sortBinary([])); // []
console.log(sortBinary([1, 1, 1, 0, 0, 0])); // [0, 0, 0, 1, 1, 1]
console.log(sortBinary([1, 1, 1])); // [1, 1, 1]
