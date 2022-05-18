const LinkedList = require("./LinkedLists");

const myLinkedList = new LinkedList();

myLinkedList.insertAtHead("A");
myLinkedList.insertAtHead("B");
myLinkedList.insertAtHead("C");
myLinkedList.insertAtHead("D");



// console.log(myLinkedList);
// console.log(myLinkedList.head.next.next);

// console.log("Find method: ", myLinkedList.find((node, index) => node.value === "B"));
// console.log("Find method: ", myLinkedList.find((node, index) => index === 1));

console.log(myLinkedList);
myLinkedList.insert("X", (node) => node.value === "D");
console.log("Length: ", myLinkedList.length);