// LeetCode #2154. Keep Multiplying Found Values by Two
/* Instructions
You are given an array of integers nums. You are also given an integer original which is the first number that needs to be searched for in nums.

You then do the following steps:

    If original is found in nums, multiply it by two (i.e., set original = 2 * original).
    Otherwise, stop the process.
    Repeat this process with the new number as long as you keep finding the number.

Return the final value of original.

 

Example 1:

Input: nums = [5,3,6,1,12], original = 3
Output: 24
Explanation: 
- 3 is found in nums. 3 is multiplied by 2 to obtain 6.
- 6 is found in nums. 6 is multiplied by 2 to obtain 12.
- 12 is found in nums. 12 is multiplied by 2 to obtain 24.
- 24 is not found in nums. Thus, 24 is returned.

Example 2:

Input: nums = [2,7,9], original = 4
Output: 4
Explanation:
- 4 is not found in nums. Thus, 4 is returned.

 

Constraints:

    1 <= nums.length <= 1000
    1 <= nums[i], original <= 1000

*/

// Solution
const findFinalValue = (nums, original) => {
    // loop through nums
    for (let i = 0; i < nums.length; i++) {
        // check if current element is equal to original, and if it is...
        if (nums[i] === original) {
            // multiply and set original equal to original * 2
            original *= 2
            // set i equal to -1, so that it will increment to index 0
            i = -1
        }
    }
    // return the new value of 'original'
    return original
}
