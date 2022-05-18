// Problem: Sort a stack containing a series of numbers. The only additional
// storage you can use is a second stack.

class Stack {
    constructor(arr = []) {
        this.arr = arr;
    }

    isEmpty() {
        return this.arr.length === 0;
    }

    push(value) {
        this.arr.push(value);
    }

    pop() {
        return this.arr.pop();
    }

    peek() {
        return this.arr[this.arr.length - 1];
    }
}

// function sortStack(stackA) {
//     // return a sorted Stack
//     const stackB = new Stack();
//     const stackC = new Stack();

//     let topA = stackA.peek();
//     let topB = stackB.peek();
//     let topC = stackC.peek();

//     while(stackA){

//     }

//     return stackB;
// }

function sortStack(stackA) { // create a stack to store the sorted values
    const stackB = new Stack(); // create a new stack to store the sorted values 
    while (!stackA.isEmpty()) { // while the stackA is not empty 
        let temp = stackA.pop(); // store the value of the top of the stackA in temp
        while (!stackB.isEmpty() && stackB.peek() > temp) { // while the stackB is not empty and the top of the stackB is greater than temp
            stackA.push(stackB.pop()); // push the top of the stackB into the stackA 
        }
        stackB.push(temp); // push the temp value into the stackB
    }
    return stackB;
}
// return a sorted Stack


const stackA = new Stack([4, 2, 3, 7, 9])
console.log(sortStack(stackA)); // 2 3 4 7 9
