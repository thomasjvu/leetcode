// LeetCode #1556. Thousand Separator
/* Instructions
 * Given an integer n, add a dot (".") as the thousands separator and return it in string format.

 

Example 1:

Input: n = 987
Output: "987"

Example 2:

Input: n = 1234
Output: "1.234"

 

Constraints:

    0 <= n <= 231 - 1
*/

// Solution
const thousandSeparator = function(n) {
    let str = String(n)
    let arr = str.split('')

    if (str.length <= 3) {
        return str
    }

    for (let i = arr.length - 3; i > 0; i-=3) {
        arr.splice(i, 0, ".")
    }

    return arr.join('')
}

// Explanation
// Instantiate a new string that is assigned a value of N wrapped in a String constructor
// Instantiate a new array that is the string split by character using .split('')
// Use an if-statement to check the condition of the length of the string being less than 3, and if it is, just return the string
// Otherwise, move to the for loop, where the index is the length of the array - 3, it continues while i is greater than 0, and subtract 3 from i each iteration
// We can use this to splice the array and inject a "." at every loop
// When all loops are finished, join the array together and return the value, which will be a string with the thousand separators
