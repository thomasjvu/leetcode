// LeetCode #1748. Sum of Unique Elements
/* Instructions
 * You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.

Return the sum of all the unique elements of nums.

 

Example 1:

Input: nums = [1,2,3,2]
Output: 4
Explanation: The unique elements are [1,3], and the sum is 4.

Example 2:

Input: nums = [1,1,1,1,1]
Output: 0
Explanation: There are no unique elements, and the sum is 0.

Example 3:

Input: nums = [1,2,3,4,5]
Output: 15
Explanation: The unique elements are [1,2,3,4,5], and the sum is 15.
*/

// Solution
function sumOfUnique(nums) {
    let map = {}
    let sum = 0

    for (const num of nums) {
        map[num] = map[num] + 1 || 1
    }

    for (const key in map) {
        if (map[key] === 1) {
            sum += Number(key)
        }
    }

    return sum
}

// Explanation
// Start by instantiating an empty object {}, map
// Declare a variable, sum, and assign it an initial value of 0
// Loop through each number in the nums array using a for.. of loop
// For each iteration, add that num to the map as a property with a value of 1, or increment it by 1 if it already exists
// Then, loop through each key in the map and check if the value of the key is equal to 1
// If it is, then add the numeric value of that key to the sum variable.
// Finally, return the sum
