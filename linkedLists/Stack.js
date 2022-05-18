// LIFO - Last In First Out

class Node{
    constructor(value, next = null){
        this.value = value;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.top = null; // end or the "top" of the stack
    }

    // push, pop - 0(1)
    push(value) {
        // create a new node
        // have a pointer to the top, next is the previous top
        this.top = new Node(value, this.top);
        return this;
    }

    pop(){
        const popped = this.top; // references the current top node
        this.top = popped.next; // reassign the top to the next node under "popped" node
        return popped.value; // return the value that was popped
    }
}

module.exports = Stack;
