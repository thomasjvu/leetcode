// LeetCode #2108. Find First Palindromic String in the Array
/* Instructions
 * Given an array of strings words, return the first palindromic string in the array. If there is no such string, return an empty string "".

A string is palindromic if it reads the same forward and backward.

 

Example 1:

Input: words = ["abc","car","ada","racecar","cool"]
Output: "ada"
Explanation: The first string that is palindromic is "ada".
Note that "racecar" is also palindromic, but it is not the first.
Example 2:

Input: words = ["notapalindrome","racecar"]
Output: "racecar"
Explanation: The first and only string that is palindromic is "racecar".
Example 3:

Input: words = ["def","ghi"]
Output: ""
Explanation: There are no palindromic strings, so the empty string is returned.
 

Constraints:

1 <= words.length <= 100
1 <= words[i].length <= 100
words[i] consists only of lowercase English letters.
*/


// Solution 

/**
 * @param {string[]} sords
 * @return {string}
 */

const firstPalindrome = words => {
    for (let i = 0; i < words.length; i++) {
        if (words[i] === words[i].split('').reverse('').join('')) {
            return words[i]
        }
    }
    return ""
}

// Explanation
// Loop through each element in the words array using a for loop
// If the element at each index is equal to the element when it is reversed (split to array - reverse - join to string method), then that word is a palindrome
// If at the end of the loop none of the words were returned as palindromes, return an empty string
