// LeetCode # 1913. Maximum Product Difference Between Two Pairs
/* Instructions
The product difference between two pairs (a, b) and (c, d) is defined as (a * b) - (c * d).

    For example, the product difference between (5, 6) and (2, 7) is (5 * 6) - (2 * 7) = 16.

Given an integer array nums, choose four distinct indices w, x, y, and z such that the product difference between pairs (nums[w], nums[x]) and (nums[y], nums[z]) is maximized.

Return the maximum such product difference.

 

Example 1:

Input: nums = [5,6,2,7,4]
Output: 34
Explanation: We can choose indices 1 and 3 for the first pair (6, 7) and indices 2 and 4 for the second pair (2, 4).
The product difference is (6 * 7) - (2 * 4) = 34.

Example 2:

Input: nums = [4,2,5,9,7,4,8]
Output: 64
Explanation: We can choose indices 3 and 6 for the first pair (9, 8) and indices 1 and 5 for the second pair (2, 4).
The product difference is (9 * 8) - (2 * 4) = 64.

*/

// Solution
const maxProductDifference = nums => {
    
    let firstMax = Math.max(...nums)
    nums.splice(nums.indexOf(firstMax), 1)
    let secondMax = Math.max(...nums)

    let firstMin = Math.min(...nums)
    nums.splice(nums.indexOf(firstMin), 1)
    let secondMin = Math.min(...nums)

    return (firstMax * secondMax) - (firstMin * secondMin)
}

// Explanation
// The maximum product difference will be the 2 max numbers multiplied together, subtracted by the 2 min numbers multiplied together.
// Any other combination will be invalid
// So, get the max/min values using Math.max() and Math.min(), and removing the element from the array using .splice() and getting the second max/min values
// From there, just return the equation
