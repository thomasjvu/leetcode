// LeetCode #1480. Runnign Sum of 1D Array
/* Instructions
 * Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

Example 2:

Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].

Example 3:

Input: nums = [3,1,2,10,1]
Output: [3,4,6,16,17]

 

Constraints:

    1 <= nums.length <= 1000
    -10^6 <= nums[i] <= 10^6
*/


// Solution

/**
 * @param {number[]} nums
 * @return {number[]}
 */

const runningSum = nums => {
    let runningNums = []
    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            runningNums.push(nums[i])
        } else {
            runningNums.push(nums[i] + runningNums[i-1])
        }
    }
    return runningNums
}

// Explanation
// Create a new array to hold the running sum of numbers
// Use a for loop to iterate through every element in the nums array
// If the index is equal to 0, we push that as our beginning to the new runningNums array
// Then, for every other iteration, we add element at the current index to the element value of the previous index in the runningNums array
// We are then able to return the runningNums array
