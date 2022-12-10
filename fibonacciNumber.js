// LeetCode #509. Fibonacci Number
/* Instructions
 * The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.

Given n, calculate F(n).

 

Example 1:

Input: n = 2
Output: 1
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.

Example 2:

Input: n = 3
Output: 2
Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.

Example 3:

Input: n = 4
Output: 3
Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
*/


// Solution
const fib = n => {
    if (n <= 0) {
        return 0
    } else if (n === 1) {
        return 1
    } else {
        return fib(n-1) + fib(n-2)
    }
}

// Explanation
// The fibonacci sequence only works for numbers that are greater than 0
// So, if the given argument is 0, return 0 (base case)
// If the given argument is 1, return 1 (base case)
// Or else, use recursion to call the function on itself (recursion), but add n-1 and n-2 together.
// This will return a fibonacci sequence.
