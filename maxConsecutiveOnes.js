// LeetCode #485. Max Consecutive Ones
/* Instructions
Given a binary array nums, return the maximum number of consecutive 1's in the array.

 

Example 1:

Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

Example 2:

Input: nums = [1,0,1,1,0,1]
Output: 2

 

Constraints:

    1 <= nums.length <= 105
    nums[i] is either 0 or 1.

*/

// Solution
const findMaxConsecutiveOnes = (nums) => {

    // instantiate max and temporary max variables
    let max = 0
    let temp = 0

    // loop through entirety of array
    for (let i = 0; i < nums.length; i++) {
        // if array element is equal to 1, increment temp
        if (nums[i] == 1) {
            temp++
            // if temp is greater than max, set max equal to temp
        if (temp > max) {
                max = temp
            }
        // otherwise, if array element is not 1, set temp equal to 0
        } else {
            temp = 0
        }
    }
    // after the loop ends, return max
    return max
};

// Solution (sliding window)
const findMaxConsecutiveOnes1 = (nums) => {
    // use pointers left and right to create a sliding window
    let left = 0, right = 0, max = 0
    // move the 'right' pointer to the right until we find a 0
    while (right < nums.length) {
        // when we find a 0, update the maximum number of consecutive 1s seen so far (by taking the maximum of the current maximum and the size of the window), and move the left pointer to the right of the 0, effectively sliding the window to the right. continue the process until the end of the array is reached
        if (nums[right] === 0) {
            max = Math.max(max, right - left)
            left = right + 1
        }
        right++
    }

    return Math.max(max, right - left)
}
