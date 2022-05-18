// Problem: Given an linked list containing sorted numbers, insert a new
// number in the correct position

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor(items) {
    this.head = null;

    items.forEach((item) => this.push(item));
  }

  // pushes to head if null, otherwise add at the end
  push(item) {
    if (this.head === null) {
      this.head = new Node(item, null);
      return;
    }

    let node = this.head;
    while (node.next !== null) {
      node = node.next;
    }
    node.next = new Node(item, null);
  }

  // print out the order of the LL
  show() {
    let node = this.head;
    while (node !== null) {
      process.stdout.write(`${node.value}, `);
      node = node.next;
    }
    process.stdout.write("\n");
  }

  // time complexity: O(n)
  // insert the node at the correct position in the LL
  //   insertSorted(value) {
  //     let node = this.head;
  //     if (value < node.value) {
  //       this.head = new Node(value, this.head);
  //       return;
  //     }
  //     while (node.next) {
  //       if (value < node.next.value) {
  //         node.next = new Node(value, node.next);
  //         return;
  //       }
  //       node = node.next;
  //     }
  //     node.next = new Node(value, node.next);
  //   }

  insertSorted(value) {
    const newNode = new Node(value); // create a new node

    // in case of an empty LL
    if (this.head === null) {
      // it's an empty LL
      this.head = newNode; // make the head the new node created
      newNode.next = null;
      return this; // end the function
    }

    // check our LL head and see if our value is smaller
    // then insert at head
    if (value < this.head.value) {
      newNode.next = this.head; // points the new node's next to be the head
      this.head = newNode; // update the head property to point to our new node
      return this;
    }

    let node = this.head; // start at first node

    // loop until we find the node before insertion point
    while (node.next && node.next.value < value) {
      node = node.next; // increment the node until condition is met
    }

    // update the pointers by inserting in between or at the end
    newNode.next = node.next;
    node.next = newNode;

    return this;
  }
}

const myLinkedList = new LinkedList([1, 3, 5, 6, 7, 9]);

myLinkedList.insertSorted(0);
myLinkedList.show();
myLinkedList.insertSorted(8);
myLinkedList.show();
myLinkedList.insertSorted(10);
myLinkedList.insertSorted(4);
myLinkedList.insertSorted(8);
myLinkedList.insertSorted(20);
myLinkedList.insertSorted(-2);

myLinkedList.show(); // 0, 1, 3, 5, 6, 7, 8, 9, 10,
