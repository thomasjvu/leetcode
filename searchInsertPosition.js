// LeetCode #35. Search Insert Position
/* Instructions
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2

Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1

Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4

 

Constraints:

    1 <= nums.length <= 104
    -104 <= nums[i] <= 104
    nums contains distinct values sorted in ascending order.
    -104 <= target <= 104
*/

// Solution
const searchInsert = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i
        } else if (target > nums[i] && target < nums[i + 1]) {
            return i + 1
        } else if (nums[i] > target) {
           return i 
        }
    }

    return nums.length
}

// Explanation
// Use a for loop to iterate through each element in the nums array
// If the element at the current index in the nums array is equal to the target, then return that index
// If the target value is between the current index and the next index, return the index + 1 (which is the index where the target should be)
// If the element at the current index is greater than the target, return the index (which is the index where the target should be)
// Else, if none of those conditions are true by the end of all the iterations, return the length of the array (which is the index where the target shoulud be)
