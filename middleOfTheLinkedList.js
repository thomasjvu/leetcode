// LeetCode #876. Middle of the Linked List
/* Instructions
Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

 

Example 1:

Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.

Example 2:

Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

 

Constraints:

    The number of nodes in the list is in the range [1, 100].
    1 <= Node.val <= 100


*/

// Solution
const middleNode = head => {
    slow = fast = head
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }
    return slow
}

// Explanation
// Instantiate variables slow and fast and set them equal to the given list, head
// Then, do a while loop that continues while fast and fast.next is true
// For each iteration, reassign slow to slow.next, and reassign fast to fast.next.next
// At the end of the loop, return slow, which will start from the middle and have pointers until the end of the list
