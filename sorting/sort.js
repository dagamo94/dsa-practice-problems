/* BUBBLE SORT */

function bubbleSort(array) {
    let swaps; // count number of swaps when sorting

    do {
        swaps = 0; // reset the counter to 0;

        for (let i = 0; i < array.length - 1; ++i) {
            if (array[i] > array[i + 1]) {
                // swap their positions
                swap(array, i, i + 1);
                swaps++; // count the swap
            }
        }
    } while (swaps > 0);

    return array;
}

function swap(array, i, j) {
    // const temp = array[i]; // store the value of array[i] in a temp variable
    // array[i] = array[j]; // assign value of array[i] with array[i + 1]
    // array[j] = temp; // assign value of array[i + 1] with temp

    [array[i], array[j]] = [array[j], array[i]];
}

console.log("Bubble Sort: ", bubbleSort([55, 20, 10, 52, 78, 25]));



/* MERGE SORT */
function mergeSort(arr, compare){
    // base case
    if(arr.length <= 1){
        return arr; // return arr if length is 1 or less
    }

    // recursive case - splitting case
    const middle = Math.floor(arr.length / 2); // index of middle of array

    // .slice(start, end); second parameter is non-inclusive
    const leftArr = arr.slice(0, middle); // left side array
    const rightArr = arr.slice(middle); // right array

    const leftArrSorted = mergeSort(leftArr, compare); // break down the left array even more recursively
    const rightArrSorted = mergeSort(rightArr, compare); // break down the right array even more recursively

    // merge left and right side in a sorted manner
    return merge(leftArrSorted, rightArrSorted, compare);
}

function merge(left, right, compare){
    const sorted = []; // new array to store the sorted values
    let leftIndex = 0; // keep track of the left array "top" index
    let rightIndex = 0; // keep track of the right array "top" index

    // compare the top values of the left and right array
    // push the lowest number between the two into the nre sorted array
    // keep tunning comparisons until one list on either side is "empty"
    while(leftIndex < left.length && rightIndex < right.length){
        const comparison = compare(left[leftIndex], right[rightIndex]);

        // negative means right is bigger
        if(comparison < 0) {
            sorted.push(left[leftIndex]); // push the smaller number to our array
            leftIndex++; // increment our left index
        } else {
            sorted.push(right[rightIndex]);
            rightIndex++;
        }
    }

    //return sorted.concat(leftIndex < left.length ? left.slice(leftIndex) : right.slice(rightIndex));

    const remainderArr = leftIndex < left.length ? left.slice(leftIndex) : right.slice(rightIndex);
    return [...sorted, ...remainderArr];
}

function compare(a, b){
    // + means a is greater than b
    // - means b is greater than a
    // 0 means a snd b are same in value
    return a - b;
}

console.log("Merge Sort: ", mergeSort([12, 51, 33, 16, 55, 100, 120], compare));



/* QUICK SORT */
// Quick Sort with instructor notes:

function quickSort(
    compare,
    elements = [],
    lowerIndex = 0,
    upperIndex = elements.length - 1
  ) {
    // the lower index and upper index parameters must be true to continue the recursion
    if (lowerIndex < upperIndex) {
      // selects the pivot, performs swaps and will return the index of the pivot
      const index = partition(compare, elements, lowerIndex, upperIndex);

      // once we get the pivot index, recursively run on left and right partitions
      quickSort(compare, elements, lowerIndex, index - 1); // left partition
      quickSort(compare, elements, index + 1, upperIndex); // right partition
    }

    return elements;
  }

  function partition(compare, elements, lowerIndex, upperIndex) {
    const pivotValue = elements[upperIndex]; // pivot is last element in array (use the upperIndex because it's the upper boundary)
    let partitionIndex = lowerIndex; // i - increments when we perform a swap

    // loop through our entire array (j)
    for (let index = lowerIndex; index < upperIndex; index++) {
      const comparison = compare(elements[index], pivotValue); // pivot vs item in array

      // item must be less than the pivot to swap
      if (comparison < 0) {
        // skip the iteration if partition index is the same as index
        if (partitionIndex !== index) {
          // perform the swap
          [elements[index], elements[partitionIndex]] = [
            elements[partitionIndex],
            elements[index],
          ];
        }
        partitionIndex++; // increment the "i" after a swap
      }
    }

    // perform final swap with "i" and "pivot" at the end of loop
    [elements[partitionIndex], elements[upperIndex]] = [
      elements[upperIndex],
      elements[partitionIndex],
    ];

    return partitionIndex; // the current index of our pivot
  }

  const myArr = [55, 12, 41, 35, 99, 100];
  console.log(quickSort((a, b) => a - b, myArr));
