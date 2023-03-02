// LeetCode #205. Isomorphic Strings
/* Instructions
Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 

Example 1:

Input: s = "egg", t = "add"
Output: true

Example 2:

Input: s = "foo", t = "bar"
Output: false

Example 3:

Input: s = "paper", t = "title"
Output: true

 

Constraints:

    1 <= s.length <= 5 * 104
    t.length == s.length
    s and t consist of any valid ascii character.


*/

// Solution
const isIsomorphic = (s, t) => {
    const arrS = []
    const arrT = []

    for (let i = 0; i < s.length; i++) {

        if (arrS[s[i]] !== arrT[t[i]]) return false

        arrS[s[i]] = i
        arrT[t[i]] = i

    }

    return true
}

// Explanation
// Instantiate two empty array variables, corresponding to s and t respectively
// Loop through each character in the strings: s and t 
// For each iteration, Do these three things:
// 1. Check if the current value of the arrS has been previously mapped to a different charcter in arrT or vice-versa. If so, return false
// 2. Set the current value of arrS at the current character equal to the current index 
// 3. Set the current value of arrT at the current character equal to the current index
// If all the checks pass and the loop does not end early, return true
