// LeetCode #520. Detect Capital
/* Instructions
We define the usage of capitals in a word to be right when one of the following cases holds:

    All letters in this word are capitals, like "USA".
    All letters in this word are not capitals, like "leetcode".
    Only the first letter in this word is capital, like "Google".

Given a string word, return true if the usage of capitals in it is right.

 

Example 1:

Input: word = "USA"
Output: true

Example 2:

Input: word = "FlaG"
Output: false

 

Constraints:

    1 <= word.length <= 100
    word consists of lowercase and uppercase English letters.

*/

// Solution
function detectCapitalUse(word) {
    // check all uppercase
    if (word === word.toUpperCase()) return true
    // check all lowercase
    else if (word === word.toLowerCase()) return true
    //  check title case
    //  set first letter to uppercase
    //  set rest of word to lowercase
    else if (word[0] === word[0].toUpperCase() && word.slice(1, word.length) === word.slice(1, word.length).toLowerCase()) return true

    else return false
}
