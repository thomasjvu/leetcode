// LeetCode #290. Word Pattern
/* Instructions
Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

 

Example 1:

Input: pattern = "abba", s = "dog cat cat dog"
Output: true

Example 2:

Input: pattern = "abba", s = "dog cat cat fish"
Output: false

Example 3:

Input: pattern = "aaaa", s = "dog cat cat dog"
Output: false

Constraints:

    1 <= pattern.length <= 300
    pattern contains only lower-case English letters.
    1 <= s.length <= 3000
    s contains only lowercase English letters and spaces ' '.
    s does not contain any leading or trailing spaces.
    All the words in s are separated by a single space.

*/

// Solution
const wordPattern = (pattern, s) => {
    const words = s.split(' ')
    if (pattern.length !== words.length) {
        return false
    }
    const patternMap = {}
    const wordMap = {}
    for (let i = 0; i < pattern.length; i++) {
        const letter = pattern[i]
        const word = words[i]
        if (patternMap.hasOwnProperty(letter) && patternMap[letter] !== word) {
            return false
        }
        if (wordMap.hasOwnProperty(word) && wordMap[word] !== letter) {
            return false
        }
        patternMap[letter] = word
        wordMap[word] = letter
    }
    return true
}


// Explanation
// Split the string into an array of words, using the .split(' ') method
// Check if the length of the pattern and if it is not equal to the length of the words array, immediately return false.
// Create empty map structures for the patternMap and the wordMap, {}
// Loop through each element (letter and word) in parallel
// If the 'letter' is already in 'patternMap', check that it maps to 'word'
// If the `word` is already in `wordMap`, check that it maps to `letter`
// Update `patternMap` and `wordMap`
// If all checks passed, the function returns true
