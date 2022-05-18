class Node{
    constructor(value, next){
        this.value = value; // store our data
        this.next = next; // pointer to the next node
    }
}

class LinkedList {
    constructor(){
        this.head = null; // references the first node in the linked list
    }

    // getter
    //
    get length(){
        let count = 0; // keep track of the counter
        let node = this.head; // first node in Linked list

        while(node){
            count++;
            node = node.next;
        }

        return count;
    }

    insertAtHead(value){
        // create a new node, this.head is the "next"
        // reassign this.head to be the new node we created
        this.head = new Node(value, this.head);
        return this;
    }

    insert(value, isMatch = (node, index) => index === this.length - 1){
        if(this.head){
            // do insert like normal
            // determine where to insert
            // finding the node to insert after
            const previousNode = this.find(isMatch);

            // if we did not find a node
            if(!previousNode) throw new Error("No match found!");

            previousNode.next = new Node(value, previousNode.next); // make the "next" pointer of the previous node assigned to new node
        }else{
            // in the case there are no nodes in the linked list
            this.insertAtHead(value);
        }

        return this; // return the linked list
    }

    // find node in the linked list
    // isMatch is a callback function
    // time complexity: 0(n)
    find(isMatch){
        let node = this.head; // first node in linked list
        let index = 0;

        while(node !== null){
            // if we found the node, return it
            if(isMatch(node, index)){
                return node;
            }

            index++; // increment the index
            node = node.next; // we did not find the node we were looking for
        }

        return null; // iterated through entire linked list and did not find the node
    }

    remove(isMatch){

    }
}

module.exports = LinkedList;