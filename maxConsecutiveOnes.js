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
