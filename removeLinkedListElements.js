// LeetCode #203. Remove Linked List Elements
/* Instructions
* Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

 

Example 1:

Input: head = [1,2,6,3,4,5,6], val = 6
Output: [1,2,3,4,5]

Example 2:

Input: head = [], val = 1
Output: []

Example 3:

Input: head = [7,7,7,7], val = 7
Output: []

 

Constraints:

    The number of nodes in the list is in the range [0, 104].
    1 <= Node.val <= 50
    0 <= val <= 50

*/

// Solution
const removeElements = (head, val) => {
    // If the head node has the given value, move the head pointer to the next node
    while (head !== null && head.val === val) {
        head = head.next
    }

    // Traverse the linked list and remove nodes with the given value
    let curr = head

    while (curr !== null && curr.next !== null) {
        // if the next node's value is the given value
        if (curr.next.val === val) {
            // move the next pointer to the one after
            curr.next = curr.next.next
        } else {
            // otherwise, move the current pointer to the next pointer
            curr = curr.next
        }
    }

    // return modified head
    return head
}
