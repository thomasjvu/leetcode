// LeetCode #709. To Lower Case
/* Instructions
 * Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.

 

Example 1:

Input: s = "Hello"
Output: "hello"
Example 2:

Input: s = "here"
Output: "here"
Example 3:

Input: s = "LOVELY"
Output: "lovely"
 

Constraints:

1 <= s.length <= 100
s consists of printable ASCII characters.
*/

// Solution

/**
 * @param {string} s
 * @return {string}
 */

const toLowerCase = s => {
    return s.toLowerCase()
}

// Explanation
// Just return the string that has the .toLowerCase() method applied to it and it'll always make the string lowercase
