// LeetCode #169. The Majority Element
/* Instructions
 * Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3

Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2

 

Constraints:

    n == nums.length
    1 <= n <= 5 * 104
    -109 <= nums[i] <= 109

 
Follow-up: Could you solve the problem in linear time and in O(1) space?
*/



// Solution

/**
 * @param {number[]} nums
 * @return {number}
 */

const majorityElement = nums => {

    const n = nums.length
    const map = {}

    for (num of nums) {
        map[num] = map[num] + 1 || 1
    }

    for(key in map) {
        if ( map[key] > (n/2) ) {
            return key
        }
    }

}

// Explanation
// Declare a new variable (n) to be equal to the length of the nums array
// Declare a new empty object (map) to hold our count of values
// Use a for of loop to iterate through each number in the nums array
// If the number already exists as a property in the map object, add 1 to it, otherwise set the number as a property equal to 1
// Use a for in loop to iterate through each property in the map
// Check if the property value is greater than the size of the array divided by 2 
// If so, return that key that satisfies our condition
