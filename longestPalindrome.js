// LeetCode #409. Longest Palindrome
/* Instructions
 * Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

 

Example 1:

Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.

Example 2:

Input: s = "a"
Output: 1
Explanation: The longest palindrome that can be built is "a", whose length is 1.

 

Constraints:

    1 <= s.length <= 2000
    s consists of lowercase and/or uppercase English letters only.
*/


// PseudoCode
// Parameters: We are given a string, we want to create a map that holds each letter.
// Palindromes: Palindromes have characters in pairs and at most one solo character in the middle


// Solution
const longestPalindrome = (s) => {
    let set = new Set()
    let count = 0
    for (let i = 0; i < s.length; i++) {
        if (set.has(s[i])) {
            count +=2
            set.delete(s[i])
        } else {
            set.add(s[i])
        }
    }
    return count + ((set.size > 0) ? 1 : 0)
}

// Explanation
// Instantiate a new set object using the new Set() constructor
// Instantiate a count variable that is assignted the value of 0
// Loop through each element in the given 's' string
// If the set object contains (.has()) the character at the current indexes string, add 2 to the count and remove the character from the set
// Else, add that character to the set
// Then, return the count and if the remaining set size is greater than 1, add 1 or else add 0 to the returned value

