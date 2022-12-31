// LeetCode #83. Remove Duplicates from Sorted List
/* Instructions
 * Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

 

Example 1:

Input: head = [1,1,2]
Output: [1,2]

Example 2:

Input: head = [1,1,2,3,3]
Output: [1,2,3]

 

Constraints:

    The number of nodes in the list is in the range [0, 300].
    -100 <= Node.val <= 100
    The list is guaranteed to be sorted in ascending order.
*/


// Solution
const deleteDuplicates = head => {
    let current = head
    while (current && current.next) {
        if (current.val === current.next.val) {
            current.next = current.next.next
        } else {
            current = current.next
        }
    }
}

// Explanation
// Declare a variable 'current' and initialize it the value of 'head'
// Start a loop that continues as long as 'current' is truthy (not null or undefined) and `current.next` is also truthy
// If the value of `current` is equal to the value of `current.next`, then update the `next` pointer of `current` to skip the next node and point to the one after it
// If the value of `current` is not equal to the value of `current.next`, move to the next node in the list
// Return the original 'head' of the linked list

// Notes
// The `.next` and `.val` properties are assumed to be part of the node objects in the linked list. They are not built in to JavaScript, but are commonly used.
// A linked list is a data structure that consists of a series of nodes, each containing a value and a reference (pointer) to the next node in the list.
// The last node in the list typically has a `null` value for its `next` property, indicating the end of the list.
// In order to work with linked lists in code, you need to understand how to create and manipulate the nodes and how to use the `next` and `val` properties to access
// and modify the values and structure of the list.
