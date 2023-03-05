// LeetCode #747. Largest Number At Least Twice of Others
/* Instructions
You are given an integer array nums where the largest integer is unique.

Determine whether the largest element in the array is at least twice as much as every other number in the array. If it is, return the index of the largest element, or return -1 otherwise.

 

Example 1:

Input: nums = [3,6,1,0]
Output: 1
Explanation: 6 is the largest integer.
For every other number in the array x, 6 is at least twice as big as x.
The index of value 6 is 1, so we return 1.

Example 2:

Input: nums = [1,2,3,4]
Output: -1
Explanation: 4 is less than twice the value of 3, so we return -1.

 

Constraints:

    2 <= nums.length <= 50
    0 <= nums[i] <= 100
    The largest element in nums is unique.

*/

// Solution
const dominantIndex = nums => {
    let counter = 0
    let dominantNum = nums[0]
    let dominantInd = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > dominantNum) {
            dominantNum = nums[i]
            dominantInd = 1
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (dominantNum >= nums[i] * 2) {
            coounter++
        }
    }

    return (counter === nums.length - 1) ? dominantInd : -1
}

// Explanation
// Instantiate a counter variable, counter
// Instantiate a variable to hold the dominant Number, and assign it a value of nums[0]
// Instantiate a variaable to hold the dominant Index, and assign it a value of 0
// Loop through each element of the nums array, and if the element is greater than the current dominant, reassign dominantNum to that value and dominantInd to that index
// Then, loop through nums.length and check if the resulting dominant Num is greater than or equal to each element * 2
// If it is, increment the counter variable
// Then, if the counter is equal to nums.length - 1, we know that the dominantNum is at least twice as much as every othe rnumber in the array, so return the dominantInd
// Otherwise, return -1
//
// Time Complexity: O(n)
