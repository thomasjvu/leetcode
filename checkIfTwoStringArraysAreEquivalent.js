// LeetCode #1662. Check If Two String Arrays Are Equivalent
// Instructions
/*
Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

A string is represented by an array if the array elements concatenated in order forms the string.

 

Example 1:

Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
Output: true
Explanation:
word1 represents string "ab" + "c" -> "abc"
word2 represents string "a" + "bc" -> "abc"
The strings are the same, so return true.

Example 2:

Input: word1 = ["a", "cb"], word2 = ["ab", "c"]
Output: false

Example 3:

Input: word1  = ["abc", "d", "defg"], word2 = ["abcddefg"]
Output: true

*/

// Solution 1
/*
const arrayStringsAreEqual = function(word1, word2) {
    str1 = ""
    str2 = ""

    for (let i = 0; i < word1.length; i++) {
        str1 += word1[i]
    }

    for (let i = 0; i < word2.length; i++) {
        str2 += word2[i]
    }

    return (str1 === str2) ? true : false
}
*/

// Explanation
// Declare two empty string variables to match each word
// This solution is O(n) because the number of inputs is the same as the outputs for each for-loop

// Solution 2
const arrayStringsAreEqual = (word1, word2) => word1.join('') === word2.join('')

// Explanation
// Use the array .join('') method to concatenate each element in each array to form respective strings
// Then, use the comparison operator === to check if word1 is equal to word2
// If it is, the comparison will return true, and if not, it will return false
