// LeetCode #2351. First Letter to Appear Twice
/* Instructions
Given a string s consisting of lowercase English letters, return the first letter to appear twice.

Note:

    A letter a appears twice before another letter b if the second occurrence of a is before the second occurrence of b.
    s will contain at least one letter that appears twice.

 

Example 1:

Input: s = "abccbaacz"
Output: "c"
Explanation:
The letter 'a' appears on the indexes 0, 5 and 6.
The letter 'b' appears on the indexes 1 and 4.
The letter 'c' appears on the indexes 2, 3 and 7.
The letter 'z' appears on the index 8.
The letter 'c' is the first letter to appear twice, because out of all the letters the index of its second occurrence is the smallest.

Example 2:

Input: s = "abcdd"
Output: "d"
Explanation:
The only letter that appears twice is 'd' so we return 'd'.

 

Constraints:

    2 <= s.length <= 100
    s consists of lowercase English letters.
    s has at least one repeated letter.
*/


// Solution
const repeatedCharacter = s => {
    let map = {}

    for (char of s) {
        map[char] = map[char] + 1 || 1
        if (map[char] === 2) {
            return char
        }
    }
}

// Explanation
// Instantiate a map object
// Loop trough each character in the string using a for..of loop
// If the character exists as a property in the object, add 1 to it, otherwise set it equal to 1
// Then, if at some point during the loop the property (character) is equal to 2, immediately return that character
// This will return the first letter to appear twice
