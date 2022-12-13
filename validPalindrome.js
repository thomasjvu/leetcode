// (8 kyu) Valid Palindrome
/* Instructions
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.

 

Constraints:

    1 <= s.length <= 2 * 105
    s consists only of printable ASCII characters.
*/

// Solution

/**
 * @param {string} s
 * @return {boolean}
 */

const isPalindrome = s => {
    s = s.toLowerCase()
    s = s.replace(/[\W_]+/g, '')

    revS = s.split('').reverse().join('')
    
    return (s === revS)
}

// Explanation
// First, convert every element in the string to its lowercase equivalent using the .toLowerCase() method
// Then, use the .replace() method to get rid of every non alphanumerical character using `\W` with `_` to include underscores, and set that to be global using /g
// Then, get the reverse of s in a new variable by doing the split('').reverse().join('') method
// Finally, return the true or false value of the conditional s === revS
