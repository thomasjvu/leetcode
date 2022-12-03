// LeetCode #136. Single Number
/* Instructions
 * Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

 

Example 1:

Input: nums = [2,2,1]
Output: 1

Example 2:

Input: nums = [4,1,2,1,2]
Output: 4

Example 3:

Input: nums = [1]
Output: 1

 
Constraints:

    1 <= nums.length <= 3 * 104
    -3 * 104 <= nums[i] <= 3 * 104
    Each element in the array appears twice except for one element which appears only once.
*/


// Solution
const singleNumber = nums => {

    const hash = {} // initialize hashtable

    for (const num of nums) { // loop through every element in array
        hash[num] = hash[num] + 1 || 1 // if property exists in hashtable, add 1, or if it doesnt already exist, create and set value equal to 1
    }

    for (const key in hash) { // loop through every element in object (hashtable)
        if(hash[key] === 1) { // if the property value is equal to 1, that must be the unique property
            return key // return the unique property
        }
    }

}
