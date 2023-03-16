// LeetCode #263. Ugly Number
/* Instructions
An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.

Given an integer n, return true if n is an ugly number.

 

Example 1:

Input: n = 6
Output: true
Explanation: 6 = 2 × 3

Example 2:

Input: n = 1
Output: true
Explanation: 1 has no prime factors, therefore all of its prime factors are limited to 2, 3, and 5.

Example 3:

Input: n = 14
Output: false
Explanation: 14 is not ugly since it includes the prime factor 7.

 

Constraints:

    -231 <= n <= 231 - 1

*/


// Solution
const isUgly = (n) => {

    // 0 cannot be an ugly number
    if (n === 0) return false

    // divide n by 5 while the remainder of that operation is 0
    while (n % 5 === 0) {
        n = n / 5
    }
    // divide n by 3 while the remainder of that operation is 0
    while (n % 3 === 0) {
        n = n / 3
    }
    // divide n by 2 while the remainder of that operation is 0
    while (n % 2 === 0) {
        n = n / 2
    }

    // If the input integer is equal to 1, then that means all of its prime factors are limited to 2, 3, and 5
    // If the input integer is not equal to 1, then it must have prime factors other than 2, 3, and 5
    // 1 has no prime factors, so all of its prime factors are limited to 2, 3, and 5
    return n === 1
}
