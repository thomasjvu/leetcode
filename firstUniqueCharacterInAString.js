// LeetCode #387. First Unique Character in a String
/* Instructions
 * Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

 

Example 1:

Input: s = "leetcode"
Output: 0

Example 2:

Input: s = "loveleetcode"
Output: 2

Example 3:

Input: s = "aabb"
Output: -1

 

Constraints:

    1 <= s.length <= 105
    s consists of only lowercase English letters.

*/

// Solution
const firstUniqChar = s => { 
    let map = {}

    for (const char of s) {
        map[char] = map[char] + 1 || 1
    }

    for (const key of Object.keys(map)) {
        if (map[key] === 1) {
            return s.indexOf(key)
        }
    }

    return -1
}

// Explanation
// Create an empty map object
// Loop through each character in string and add it to the map with the value of 1. If it already exists, increment it by 1.
// Loop through each character in the map object, and if the key's value is equal to 1, return the index of that key in the string.
// Otherwise, return -1 if no values in the map are equal to 1
