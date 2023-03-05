// LeetCode #961. N-Repeated Element in Size 2N Array
/* Instructions
You are given an integer array nums with the following properties:

    nums.length == 2 * n.
    nums contains n + 1 unique elements.
    Exactly one element of nums is repeated n times.

Return the element that is repeated n times.

 

Example 1:

Input: nums = [1,2,3,3]
Output: 3

Example 2:

Input: nums = [2,1,2,5,3,2]
Output: 2

Example 3:

Input: nums = [5,1,5,2,5,3,5,4]
Output: 5

 

Constraints:

    2 <= n <= 5000
    nums.length == 2 * n
    0 <= nums[i] <= 104
    nums contains n + 1 unique elements and one of them is repeated exactly n times.

*/

// Solution
const repeatedNTimes = nums => {
    let n = nums.length / 2

    let map = {}

    for (const num of nums) {
        map[num] = map[num] + 1 || 1
    }

    for (key in map) {
        if (map[key] === n) {
            return key
        }
    }
}

// Explanation
// Get the number, n, by calculating nums.length / 2 (provided by problem)
// Instantiate an empty hashmap {}, map
// Loop through each element of the nums array, and create a key-value pair in the map set equal to 1 or incrementing by 1
// Then, loop through each key in the map, and check for whichver key has a value that is equal to n
// Return that key
