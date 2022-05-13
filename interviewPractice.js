function largestProduct(arr) {
    if (arr.length < 2) return;
    const sortedArr = arr.sort((a, b) => Math.abs(b) - Math.abs(a));
    return (sortedArr[0] * sortedArr[1]);
}

const arr = [1, 12, 14, 42, 57, 3, 100, 202, 5];
const arr2 = [0];
console.log(largestProduct(arr));
console.log(largestProduct(arr2));
console.log(largestProduct([3, -11, 5, 8, -9]));
console.log(largestProduct([3, -11, 5, 8, 9]));

function mostEfficientLargestProductMyVersion(arr) {
    if (arr.length < 2) return;
    let max1 = 0;
    let max2 = 0;
    for (let i = 0; i < arr.length; ++i) {
        if (Math.abs(arr[i]) > max1) {
            max1 = arr[i];
        }
    }

    for (let i = 0; i < arr.length; ++i) {
        if (Math.abs(arr[i]) > max2 && arr[i] < max1) {
            max2 = arr[i];
        }
    }
    return max1 * max2;
}

console.log("Most Efficient My Version", mostEfficientLargestProductMyVersion(arr));
console.log("Most Efficient My Version", mostEfficientLargestProductMyVersion(arr2));
console.log("Most Efficient My Version", mostEfficientLargestProductMyVersion([3, -11, 5, 8, -9]));
console.log("Most Efficient My Version", mostEfficientLargestProductMyVersion([3, -11, 5, 8, 9]));
console.log("Most Efficient My Version", mostEfficientLargestProductMyVersion([0, 0, 0]));


function mostEfficientInstructorVersion(arr){
    if(arr.length < 2) return;
    let largest = -Infinity;
    let secondLargest = -Infinity;
    let smallest = Infinity;
    let secondSmallest = Infinity;

    for(let i = 0; i < arr.length; i++){
        const value = arr[i];

        if(value > largest){
            secondLargest = largest;
            largest = value;
        }else if(value > secondLargest){
            secondLargest = value;
        }

        if(value < smallest){
            secondSmallest = smallest;
            smallest = value;
        }else if(value < secondSmallest){
            secondSmallest = value;
        }
    }

    const largestProduct = largest * secondLargest;
    const smallestProduct = smallest * smallestProduct;

    return largestProduct > smallestProduct ? largestProduct : smallestProduct;
}

function bruteLargestProduct(arr) {
    if (arr.length < 2) return;
    let largest = -Infinity; // initialize a var to store largest product
    for (let i = 0; i < arr.length; i++) {
        const valueA = arr[i]; // first number
        for (let j = i + 1; j < arr.length; j++) {
            const valueB = arr[j]; // second number
            const product = valueA * valueB; // calculate the product
            if (product > largest) largest = product; // save product to var largest if it's larger than currently stored value
        }
    }
    return largest;
}

console.log("Less Efficient Version 2", bruteLargestProduct(arr));
console.log("Less Efficient Version 2", bruteLargestProduct(arr2));
console.log("Less Efficient Version 2", bruteLargestProduct([3, -11, 5, 8, -9]));
console.log("Less Efficient Version 2", bruteLargestProduct([3, -11, 5, 8, 9]));
console.log("Less Efficient Version 2", bruteLargestProduct([0, 0, 0]));


function largestProductSortVersion(arr){
    if(arr.length < 2) return; // will return undefined
    arr.sort(); // sor the array by default from smallest to largest
    const largest = arr[arr.length-1];
    const secondLargest = arr[arr.length-2];
    const smallest = arr[0];
    const secondSmallest = arr[1];

    const largestProduct = largest * secondLargest;
    const smallestProduct = smallest * secondSmallest;

    if(largestProduct > smallestProduct) return largestProduct;
    return smallestProduct;
}

