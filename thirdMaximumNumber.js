// LeetCode #414. Third Maximum Number
/* Instructions
 * Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.

 

Example 1:

Input: nums = [3,2,1]
Output: 1
Explanation:
The first distinct maximum is 3.
The second distinct maximum is 2.
The third distinct maximum is 1.
Example 2:

Input: nums = [1,2]
Output: 2
Explanation:
The first distinct maximum is 2.
The second distinct maximum is 1.
The third distinct maximum does not exist, so the maximum (2) is returned instead.
Example 3:

Input: nums = [2,2,3,1]
Output: 1
Explanation:
The first distinct maximum is 3.
The second distinct maximum is 2 (both 2's are counted together since they have the same value).
The third distinct maximum is 1.
 

Constraints:

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1
 

Follow up: Can you find an O(n) solution?

*/

// Solution
const thirdMax = nums => {
    let set = new Set(nums)
    let arr = Array.from(set)
    arr.sort((a, b) => b - a)
    if (arr.length < 3) {
        return arr[0]
    } else {
        return arr[2]
    }
}

// Explanation
// Create a new Set (unique values) from the nums array
// Create a new array from that set
// Sort the array in descending order using the `.sort((a, b) => b - a)`
// If the length is less than 3, return the first element in the array (the maximum)
// If the length is greater than 3, return the second index of the array (the third maximum)
