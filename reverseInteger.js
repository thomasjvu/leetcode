// LeetCode #7. Reverse Integer
/* Instructions
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

Example 1:

Input: x = 123
Output: 321

Example 2:

Input: x = -123
Output: -321

Example 3:

Input: x = 120
Output: 21

 

Constraints:

    -231 <= x <= 231 - 1

*/

// Solution
const reverse = (x) => {

    // turn x into an array
    x = String(x).split('')

    // loop through array, check if negative and perform number reversal that maintains negative
    if (x[0] === '-') {
        x = x.slice(1, x.length).reverse().join('')
        x = Number(-x)
    // else, loop through array and perform number reversal 
    } else {
        x = Number(x.reverse().join(''))
    }

    // Check if the reversed number is outside the signed 32-bit integer range, return 0 if it is
    if (x < ((-2) ** 31) || x > (2 ** 31)) return 0

    // Otherwise, return the reversal number as is
    return x

}
