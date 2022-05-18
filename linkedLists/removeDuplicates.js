/**
 * Remove duplicate values, if any, from a sorted linked list.
 *
 * The algorithm should be O(n) time complexity, therefore it cannot use `find()`.
 *
 * @param sortedLinkedList
 *  a possibly empty link list with all values in lexical order.
 *
 * @returns {LinkedList}
 *  the original linked list with any duplicate values removed.
 */

 function removeDuplicates(sortedLinkedList) {
    // TODO: implement an algorithm to remove duplicate values from a sorted linked list.
    let temp = sortedLinkedList.head; // start at head node
    while(temp !== null && temp.next !== null){ // keep iterating until temp or temp.next are null
      if(temp.value === temp.next.value){ // if the current value of temp is equal to the value of the next node (temp.next), it means that we have a duplicate 
        temp.next = temp.next.next; // assign temp's next node to be the one after the duplicate node
      }
      
      temp = temp.next; // if it is not a duplicate, temp gets the next node's value and we keep iterating
    }
    return sortedLinkedList; // return sortedLinkedLIst without duplicates
  }
  
  module.exports = removeDuplicates;
  