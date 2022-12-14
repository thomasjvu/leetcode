// LeetCode #258. Add Digits
/* Instructions
 * Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

Example 1:

Input: num = 38
Output: 2
Explanation: The process is
38 --> 3 + 8 --> 11
11 --> 1 + 1 --> 2 
Since 2 has only one digit, return it.

Example 2:

Input: num = 0
Output: 0

 

Constraints:

    0 <= num <= 231 - 1

 

Follow up: Could you do it without any loop/recursion in O(1) runtime?

*/


// Solution
const addDigits = num => {

    if (num === 0) {
        return 0
    } else if (num % 9 === 0) {
        return 9
    } else {
        return num % 9
    }

}

// If the number is 0, then return 0
// If the number is perfectly divisible by 9, then the sum of its digits until the sum is a single digit is always 9.
// Otherwise, the single digit sum will always be the remainder of the number divided by 9

