// LeetCode #1837. Sum of Digits in Base K
/* Instructions
 * Given an integer n (in base 10) and a base k, return the sum of the digits of n after converting n from base 10 to base k.

After converting, each digit should be interpreted as a base 10 number, and the sum should be returned in base 10.

 

Example 1:

Input: n = 34, k = 6
Output: 9
Explanation: 34 (base 10) expressed in base 6 is 54. 5 + 4 = 9.

Example 2:

Input: n = 10, k = 10
Output: 1
Explanation: n is already in base 10. 1 + 0 = 1.

 

Constraints:

    1 <= n <= 100
    2 <= k <= 10
*/

// Solution
const sumBase = (n, k) => {
    let num = n.toString(k)

}

// Explanation
// Declare a variable (num) and use the .toString(k) method to assign it to a string that holds the converted number of the given radix
// Declare a variable (sum) and assign it a value of 0
// Loop through each character of the string using a standard for loop.
// Add the Number equivalent of each character of the num string to the sum variable
// After all iterations are ocmplete, return the sum variable
