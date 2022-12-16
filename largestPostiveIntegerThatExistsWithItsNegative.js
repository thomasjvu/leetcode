// LeetCode #2441. Largest Positive Integer That Exists With Its Negative
/* Instructions
 * Given an integer array nums that does not contain any zeros, find the largest positive integer k such that -k also exists in the array.

Return the positive integer k. If there is no such integer, return -1.

 

Example 1:

Input: nums = [-1,2,-3,3]
Output: 3
Explanation: 3 is the only valid k we can find in the array.

Example 2:

Input: nums = [-1,10,6,7,-7,1]
Output: 7
Explanation: Both 1 and 7 have their corresponding negative values in the array. 7 has a larger value.

Example 3:

Input: nums = [-10,8,6,7,-2,-3]
Output: -1
Explanation: There is no a single valid k, we return -1.

 

Constraints:

    1 <= nums.length <= 1000
    -1000 <= nums[i] <= 1000
    nums[i] != 0
*/



// Solution

/**
 * @param {number[]} nums
 * @return {number}
 */

const findMaxK = nums => {
    let pairs = []
    for (let i = 0; i < nums.length; i++) {
        let reg = nums[i]
        let rev = -nums[i]
        if (nums.includes(rev)) {
            pairs.push(reg, rev)
        }
    }
    return (pairs.length === 0) ? -1 : Math.max(...pairs)
}

// Explanation
// Instantiate an empty array to hold each pair
// Use a for lop to iterate through each number in the nums array
// If the array also includes the negative element at each current index, push the element and the negative element into the pairs array
// Use a ternary to return -1 if the length of the pairs array is 0, or the Max value of the pairs array if it isn't empty
// With the spread operator ..., we can use the Math.max operator to easily return the largest positive integer of the pairs array.

