// (8 kyu) Smallest Even Multiple
/* Instructions
 * Given a positive integer n, return the smallest positive integer that is a multiple of both 2 and n.

 

Example 1:

Input: n = 5
Output: 10
Explanation: The smallest multiple of both 5 and 2 is 10.

Example 2:

Input: n = 6
Output: 6
Explanation: The smallest multiple of both 6 and 2 is 6. Note that a number is a multiple of itself.

 

Constraints:

    1 <= n <= 150
*/


// Solution

/**
 * @param {number} n
 * @return {number}
 */

const smallestEvenMultiple = n => (n % 2 === 0) ? n : n * 2

// Explanation
// If the parameter given (n) is divisible by 2 perfectly, then it must be a multiple of 2
// Otherwise, multiply the number by 2 to return the next smallest multiple of 2 and the given number
