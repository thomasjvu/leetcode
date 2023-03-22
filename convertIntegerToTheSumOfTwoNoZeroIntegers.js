// LeetCode #1317. Convert Integer to the Sum of Two No-Zero Integers
/* Instructions
No-Zero integer is a positive integer that does not contain any 0 in its decimal representation.

Given an integer n, return a list of two integers [a, b] where:

    a and b are No-Zero integers.
    a + b = n

The test cases are generated so that there is at least one valid solution. If there are many valid solutions, you can return any of them.

 

Example 1:

Input: n = 2
Output: [1,1]
Explanation: Let a = 1 and b = 1.
Both a and b are no-zero integers, and a + b = 2 = n.

Example 2:

Input: n = 11
Output: [2,9]
Explanation: Let a = 2 and b = 9.
Both a and b are no-zero integers, and a + b = 9 = n.
Note that there are other valid answers as [8, 3] that can be accepted.

 

Constraints:

    2 <= n <= 104

*/

// Solution
const getNoZeroIntegers = n => {
    // loop through a to n
    for (let a = 1; a < n; a++) {
        // loop through b to n
        for (let b = 1; b < n; b++) {
            // check if a + b is equal to n, and convert to string and check if digit 0 is exlcluded
            if (a + b === n && (!a.toString().includes('0') && !b.toString().includes('0'))) {
                // immediately return any value that matches these conditions
                return [a, b]
            }
        }
    }
}
