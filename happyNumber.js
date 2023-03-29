// LeetCode #202. Happy Number
/* Instructions
Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

    Starting with any positive integer, replace the number by the sum of the squares of its digits.
    Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
    Those numbers for which this process ends in 1 are happy.

Return true if n is a happy number, and false if not.

 

Example 1:

Input: n = 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1

Example 2:

Input: n = 2
Output: false

 

Constraints:

    1 <= n <= 231 - 1

*/

// Solution
const isHappy = (n) => {
    const seen = new Set()
    // loop while n is not equal to 1 and while n has not been seen in the loop yet
    while (n !== 1 && !seen.has(n)) {
        // add n to seen object
        seen.add(n)
        // declare sum variable and set equal to 0
        let sum = 0
        // while n is greater than 0
        while (n > 0) {
            // add digits squared to sum
            const digit = n % 10
            sum += digit * digit
            n = Math.floor(n / 10)
        }
        // set n equal to sum
        n = sum
    }

    // return true or false depending on the value of n
    return n === 1
}
