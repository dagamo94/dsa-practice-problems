// FIFO - FIrst In First Out

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.first = null;
    }

    // enqueue, dequeue - 0(1)
    enqueue(value) {
        const newNode = new Node(value); // create a new node

        if (!this.first) {
            // if there is no "first" node
            this.first = newNode;
        } else {
            // make the next node of the current last node the new node
            this.last.next = newNode;
        }

        // make the new node the last node in queue
        this.last = newNode;

        return this;
    }

    dequeue() {
        if (this.first) {
            const dequeued = this.first; // references the first node

            // update our pointer to tbe the next node of the dequeued node
            this.first = dequeued.next;

            // fi the node we dequeued happens to be the last node
            if(dequeued === this.last){
                this.last = null;
            }

            return dequeued.value; 
        }
    }
}

module.exports = Queue;