// LeetCode #1832. Check if the Sentence is Pangram
/* Instructions
A pangram is a sentence where every letter of the English alphabet appears at least once.

Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

 

Example 1:

Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
Output: true
Explanation: sentence contains at least one of every letter of the English alphabet.

Example 2:

Input: sentence = "leetcode"
Output: false

 

Constraints:

    1 <= sentence.length <= 1000
    sentence consists of lowercase English letters.
*/

// Solution
const checkIfPangram = sentence => {
    let map = {}
    
    for (const char of sentence) {
        map[char] = map[char] + 1 || 1
    }

    return (Object.keys(map).length == 26) ? true : false
}

// Explanation
// Instantiate an empty map object
// Use a for..of loop to iterate through each character in the sentence, and create a property-value pair of += 1 for each character
// Use the Object.keys() method to get an array of all of the properties in object.
// Use the .length method to get the length of that array, and if it is equal to 26, return true
