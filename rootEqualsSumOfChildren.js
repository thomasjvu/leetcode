// LeetCode #2236. Root Equals Sum of Children
/* You are given the root of a binary tree that consists of exactly 3 nodes: the root, its left child, and its right child.

Return true if the value of the root is equal to the sum of the values of its two children, or false otherwise.

 

Example 1:

Input: root = [10,4,6]
Output: true
Explanation: The values of the root, its left child, and its right child are 10, 4, and 6, respectively.
10 is equal to 4 + 6, so we return true.

Example 2:

Input: root = [5,3,1]
Output: false
Explanation: The values of the root, its left child, and its right child are 5, 3, and 1, respectively.
5 is not equal to 3 + 1, so we return false.
*/

// Solution
const checkTree = function(root) {
    if (root.val === root.left.val + root.right.val) {
        return true
    } 

    return false
}

// Explanation
// root.val gives us the value of the node
// root.left will give us the node [left.value], but root.left.val will give us the value, left.value
// root.right will give us the node [right.value], but root.right.val will give us the value, right.value
// add the left and right values, and use a conditional to check if it is equal to the value of the root
// if it is, return true, or else, return false
