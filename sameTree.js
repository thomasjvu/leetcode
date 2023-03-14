// LeetCode #100. Same Tree
/* Instructions
Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

 

Example 1:

Input: p = [1,2,3], q = [1,2,3]
Output: true

Example 2:

Input: p = [1,2], q = [1,null,2]
Output: false

Example 3:

Input: p = [1,2,1], q = [1,1,2]
Output: false

 

Constraints:

    The number of nodes in both trees is in the range [0, 100].
    -104 <= Node.val <= 104


*/

// Solution
const isSameTree = (p, q) => {

    // if the current nodes of both trees are null, that means we reached the end of both trees
    // and they are identical, so return true
    if (!p && !q) {
        return true
    }

    // if either p or q is null, but not both, that means the trees have a different structure
    // so they are not identical, or if the values of the current nodes are not equal, then the
    // trees are also not identical, so return false
    if (!p || !q || p.val !== q.val) {
        return false
    }

    // if the above conditions are not met, it means the trees have the same structure, and the
    // values of the current nodes are equal, hence we recursively check if the left and right subtrees
    // are also identifical. If both subtrees are identical, then the trees are identical. Otherwise,
    // they are not identical
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right) 
}
