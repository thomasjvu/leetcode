// LeetCode #231. Power of Two
/* Instructions

Given an integer n, return true if it is a power of two. Otherwise, return false.

An integer n is a power of two, if there exists an integer x such that n == 2x.

 

Example 1:

Input: n = 1
Output: true
Explanation: 20 = 1
Example 2:

Input: n = 16
Output: true
Explanation: 24 = 16
Example 3:

Input: n = 3
Output: false
 

Constraints:

-231 <= n <= 231 - 1
 

Follow up: Could you solve it without loops/recursion?
*/


// Solution
const isPowerOfTwo = n => {
    let i = 1

    while (i < n) {
        i *= 2
    }

    return i === n
}

// Explanation
// Start with i = 1, which is a valid power of 2 (2^0 = 1).
// Loop through every valid power of 2, which will be if we multiply the current result by 2, until the value of i is equal to the value of n
// check if i === n, which will return true or false depending on if n was equal to some instance of i which we know will always be a valid power of 2
