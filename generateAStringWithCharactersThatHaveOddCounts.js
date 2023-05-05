// LeetCode #1374. Generate a String With Characters That Have Odd Counts
/* Instructions
Given an integer n, return a string with n characters such that each character in such string occurs an odd number of times.

The returned string must contain only lowercase English letters. If there are multiples valid strings, return any of them.  

 

Example 1:

Input: n = 4
Output: "pppz"
Explanation: "pppz" is a valid string since the character 'p' occurs three times and the character 'z' occurs once. Note that there are many other valid strings such as "ohhh" and "love".

Example 2:

Input: n = 2
Output: "xy"
Explanation: "xy" is a valid string since the characters 'x' and 'y' occur once. Note that there are many other valid strings such as "ag" and "ur".

Example 3:

Input: n = 7
Output: "holasss"

 

Constraints:

    1 <= n <= 500


 */

// Solution
const generateTheString = (n) => n % 2 === 0 ? `${'x'.repeat(n-1)}y` : `${'x'.repeat(n)}`

// Explanation
// If the string is an odd number, return the string 'x' repeated `n` number of times.
// If the string is an even number, return the string 'x' repeated `n-1` number of times, and concatenate another instance of string 'y' at the end.
