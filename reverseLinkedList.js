// 206. Reverse LInked List
/* Instructions
 * Given the head of a singly linked list, reverse the list, and return the reversed list.

 

Example 1:

Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

Example 2:

Input: head = [1,2]
Output: [2,1]

Example 3:

Input: head = []
Output: []

 

Constraints:

    The number of nodes in the list is the range [0, 5000].
    -5000 <= Node.val <= 5000

 

Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?
*/

// Solution
const reverseList = head => {

    let prev = null
    let next = null
    let current = head

    while (current !== null) {
        next = current.next
        current.next = prev
        prev = current
        current = next
    }

    return prev

}

// Explanation
// Initialize three pointers: prev, current, and next
// Prev tracks the node previous to the current node and set it to null
// Current starts at the head of the list and keeps track of the current node iteration
// Next stores the next node before its reference is changed and is initially null
//
// Set next equal to current.next
// Set current.next to equal to prev
// Set prev equal to current
// Set current equal to next
// Do this until the current value is null (after all the nodes are iterated through)
//
// Return prev as the new head of the reversed list

// On Linked Lists
// Linked lists are data structures that represent a series of nodes where each node containts two pieces of information, the value and the pointer to the next node.
// The main benefit of a linked list over an array is an easier insertion or removal of nodes in the list
// Random access to the data is not allowed because the linked lists do not have indexes, unlike arrays
