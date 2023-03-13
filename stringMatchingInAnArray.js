// LeetCode #1408. String Matching in an Array
/* Instructions
Given an array of string words, return all strings in words that is a substring of another word. You can return the answer in any order.

A substring is a contiguous sequence of characters within a string

 

Example 1:

Input: words = ["mass","as","hero","superhero"]
Output: ["as","hero"]
Explanation: "as" is substring of "mass" and "hero" is substring of "superhero".
["hero","as"] is also a valid answer.

Example 2:

Input: words = ["leetcode","et","code"]
Output: ["et","code"]
Explanation: "et", "code" are substring of "leetcode".

Example 3:

Input: words = ["blue","green","bu"]
Output: []
Explanation: No string of words is substring of another string.

 

Constraints:

    1 <= words.length <= 100
    1 <= words[i].length <= 30
    words[i] contains only lowercase English letters.
    All the strings of words are unique.

*/

// Solution
const stringMatching = (words) => {
    let substrings = []

    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if (words[i].includes(words[j])) {
                substrings.push(words[j])
            } else if (words[j].includes(words[i])) {
                substrings.push(words[i])
            }
        }
    }

    return [...new Set (substrings)]
}

// Explanation
// Instantiate an empty array to hold all of the valid substrings
// Use a nested for..loop to check each element against each element
// Use the .includes() method to check if the element at current index includes the element at the next
// If it does, push that element into the substrings array
// Druing the same check, see if the element at the next index contains the elemnt at the current
// If it does, push that element into the substrings array
// Return an array that takes all the unique elements from the valid substrings
