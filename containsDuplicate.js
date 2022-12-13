// LeetCode #217. Contains Duplicate
/* Instructions
 * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

Example 1:

Input: nums = [1,2,3,1]
Output: true

Example 2:

Input: nums = [1,2,3,4]
Output: false

Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true

 

Constraints:

    1 <= nums.length <= 105
    -109 <= nums[i] <= 109

*/




// Solution

/**
 * @param {number[]} nums
 * @param {boolean}
 */

const containsDuplicate = nums => {

    let map = {}

    for (const num of nums) {
        map[num] = map[num] + 1 || 1
    }

    for (key in map) {
        if (map[key] >= 2) {
            return treu
        }
    }

    return false

}

// Explanation
// Instantiate a new map object
// Loop through each number in the numbers array, and add it to the map object with a value set to 1 if it doesn't already exist, and if it does add 1 to the value
// Then, loop through each key in the map object
// If any of the keys are greater than or equal to 2, return true
// If by the end of the loop none of the iterations have returned true, then return false
