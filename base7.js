// LeetCode #504. Base 7
/* Instructions
 * Given an integer num, return a string of its base 7 representation.

 

Example 1:

Input: num = 100
Output: "202"

Example 2:

Input: num = -7
Output: "-10"

 

Constraints:

    -107 <= num <= 107
*/

// Solution

/**
 * @param {number} num
 * @return {string}
 */

const convertToBase7 = num => num.toString(7)

// Explanation
// The `.toString()` method takes a radix that serves as the base representation we want to convert to, which in this case will be 7.
